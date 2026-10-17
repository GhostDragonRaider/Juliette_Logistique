import { Store } from 'express-session'

/**
 * express-session tároló better-sqlite3 alapú sessions táblával.
 */
export class SqliteSessionStore extends Store {
  constructor(db) {
    super()
    this.db = db
    this.getStmt = db.prepare(
      'SELECT sess FROM sessions WHERE sid = ? AND expire > ?',
    )
    this.setStmt = db.prepare(
      'INSERT INTO sessions (sid, sess, expire) VALUES (?, ?, ?) ON CONFLICT(sid) DO UPDATE SET sess = excluded.sess, expire = excluded.expire',
    )
    this.destroyStmt = db.prepare('DELETE FROM sessions WHERE sid = ?')
    this.touchStmt = db.prepare(
      'UPDATE sessions SET expire = ? WHERE sid = ?',
    )
    this.clearExpired = db.prepare('DELETE FROM sessions WHERE expire <= ?')
    this.clearExpired.run(Date.now())
    this._interval = setInterval(() => {
      try {
        this.clearExpired.run(Date.now())
      } catch {
        /* üres */
      }
    }, 15 * 60 * 1000)
    if (this._interval.unref) {
      this._interval.unref()
    }
  }

  get(sid, callback) {
    try {
      const row = this.getStmt.get(sid, Date.now())
      if (!row) {
        callback(null, null)
        return
      }
      callback(null, JSON.parse(row.sess))
    } catch (err) {
      callback(err)
    }
  }

  set(sid, sess, callback) {
    try {
      const expire = sess.cookie?.expires
        ? new Date(sess.cookie.expires).getTime()
        : Date.now() + 12 * 60 * 60 * 1000
      this.setStmt.run(sid, JSON.stringify(sess), expire)
      callback(null)
    } catch (err) {
      callback(err)
    }
  }

  destroy(sid, callback) {
    try {
      this.destroyStmt.run(sid)
      callback(null)
    } catch (err) {
      callback(err)
    }
  }

  touch(sid, sess, callback) {
    try {
      const expire = sess.cookie?.expires
        ? new Date(sess.cookie.expires).getTime()
        : Date.now() + 12 * 60 * 60 * 1000
      this.touchStmt.run(expire, sid)
      callback(null)
    } catch (err) {
      callback(err)
    }
  }
}
