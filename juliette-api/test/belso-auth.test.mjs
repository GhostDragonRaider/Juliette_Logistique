import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const apiRoot = path.join(__dirname, '..')

function fetchJson(url, init = {}) {
  return fetch(url, init).then(async (res) => ({
    res,
    body: await res.json().catch(() => ({})),
  }))
}

test('belső auth: izoláció, session, profil', async (t) => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'jl-belso-'))
  const port = 3010 + Math.floor(Math.random() * 500)
  const env = {
    ...process.env,
    PORT: String(port),
    DATA_DIR: tmp,
    NODE_ENV: 'test',
    SESSION_SECRET: 'test-session-secret-32chars-minimum!!',
  }

  const child = spawn('node', ['index.js'], {
    cwd: apiRoot,
    env,
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('API timeout')), 8000)
    child.stdout.on('data', (chunk) => {
      if (String(chunk).includes('listening')) {
        clearTimeout(timer)
        resolve()
      }
    })
    child.on('error', reject)
  })

  const base = `http://127.0.0.1:${port}/api`
  const jar = new Map()

  function storeCookies(res) {
    const raw =
      typeof res.headers.getSetCookie === 'function'
        ? res.headers.getSetCookie()
        : []
    if (raw.length === 0) {
      const legacy = res.headers.get('set-cookie')
      if (legacy) {
        raw.push(legacy)
      }
    }
    for (const line of raw) {
      const [pair] = line.split(';')
      const eq = pair.indexOf('=')
      if (eq === -1) {
        continue
      }
      const name = pair.slice(0, eq).trim()
      const value = pair.slice(eq + 1).trim()
      jar.set(name, value)
    }
  }

  function cookieHeader() {
    return [...jar.entries()].map(([k, v]) => `${k}=${v}`).join('; ')
  }

  await t.test('create users', async () => {
    const { execFile } = await import('node:child_process')
    const { promisify } = await import('node:util')
    const execFileAsync = promisify(execFile)
    await execFileAsync('node', [
      'scripts/create-user.js',
      '--email',
      'a@test.local',
      '--password',
      'password-alpha12',
    ], { cwd: apiRoot, env })
    await execFileAsync('node', [
      'scripts/create-user.js',
      '--email',
      'b@test.local',
      '--password',
      'password-beta-12',
    ], { cwd: apiRoot, env })
  })

  let csrfA = ''
  let csrfB = ''

  await t.test('login user A', async () => {
    const csrfRes = await fetchJson(`${base}/auth/csrf`)
    storeCookies(csrfRes.res)
    csrfA = csrfRes.body.csrfToken
    const login = await fetchJson(`${base}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfA,
        Cookie: cookieHeader(),
      },
      body: JSON.stringify({
        email: 'a@test.local',
        password: 'password-alpha12',
      }),
    })
    storeCookies(login.res)
    assert.equal(login.res.status, 200)
    assert.equal(login.body.email, 'a@test.local')
    const csrfAfter = await fetchJson(`${base}/auth/csrf`, {
      headers: { Cookie: cookieHeader() },
    })
    storeCookies(csrfAfter.res)
    csrfA = csrfAfter.body.csrfToken
  })

  await t.test('profile patch user A', async () => {
    const patch = await fetchJson(`${base}/profile/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfA,
        Cookie: cookieHeader(),
      },
      body: JSON.stringify({ firstName: 'Anna', lastName: 'Alpha' }),
    })
    assert.equal(patch.res.status, 200)
    assert.equal(patch.body.profile.firstName, 'Anna')
  })

  await t.test('unauthorized profile without session', async () => {
    const anon = await fetchJson(`${base}/profile/me`)
    assert.equal(anon.res.status, 401)
  })

  await t.test('user B cannot read A data with own session', async () => {
    jar.clear()
    const csrfRes = await fetchJson(`${base}/auth/csrf`)
    storeCookies(csrfRes.res)
    csrfB = csrfRes.body.csrfToken
    const login = await fetchJson(`${base}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfB,
        Cookie: cookieHeader(),
      },
      body: JSON.stringify({
        email: 'b@test.local',
        password: 'password-beta-12',
      }),
    })
    storeCookies(login.res)
    assert.equal(login.res.status, 200)
    const me = await fetchJson(`${base}/auth/me`, {
      headers: { Cookie: cookieHeader() },
    })
    assert.equal(me.body.profile.firstName, '')
    assert.notEqual(me.body.email, 'a@test.local')
  })

  child.kill('SIGTERM')
  fs.rmSync(tmp, { recursive: true, force: true })
})
