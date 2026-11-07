import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const HANG_UTVONAL = path.join(__dirname, '..', 'assets', 'uj-munka-ertesites.wav')

/**
 * Rövid, Foodora/Wolt-szerű értesítő hang (WAV).
 */
export function ertesitesHangBufferElkeszit() {
  fs.mkdirSync(path.dirname(HANG_UTVONAL), { recursive: true })
  if (fs.existsSync(HANG_UTVONAL)) {
    return fs.readFileSync(HANG_UTVONAL)
  }

  const sampleRate = 44100
  const tones = [
    { freq: 880, ms: 140 },
    { freq: 0, ms: 70 },
    { freq: 1174.7, ms: 160 },
    { freq: 0, ms: 60 },
    { freq: 1318.5, ms: 220 },
  ]

  let totalSamples = 0
  for (const t of tones) {
    totalSamples += Math.floor((sampleRate * t.ms) / 1000)
  }

  const dataSize = totalSamples * 2
  const buffer = Buffer.alloc(44 + dataSize)

  buffer.write('RIFF', 0)
  buffer.writeUInt32LE(36 + dataSize, 4)
  buffer.write('WAVE', 8)
  buffer.write('fmt ', 12)
  buffer.writeUInt32LE(16, 16)
  buffer.writeUInt16LE(1, 20)
  buffer.writeUInt16LE(1, 22)
  buffer.writeUInt32LE(sampleRate, 24)
  buffer.writeUInt32LE(sampleRate * 2, 28)
  buffer.writeUInt16LE(2, 32)
  buffer.writeUInt16LE(16, 34)
  buffer.write('data', 36)
  buffer.writeUInt32LE(dataSize, 40)

  let offset = 44
  for (const t of tones) {
    const n = Math.floor((sampleRate * t.ms) / 1000)
    for (let i = 0; i < n; i += 1) {
      const env = Math.min(1, i / 600, (n - i) / 800)
      const sample =
        t.freq === 0
          ? 0
          : Math.sin((2 * Math.PI * t.freq * i) / sampleRate) * env * 0.55
      buffer.writeInt16LE(Math.max(-32767, Math.min(32767, Math.floor(sample * 32767))), offset)
      offset += 2
    }
  }

  fs.writeFileSync(HANG_UTVONAL, buffer)
  return buffer
}

export function ertesitesHangUtas() {
  ertesitesHangBufferElkeszit()
  return HANG_UTVONAL
}
