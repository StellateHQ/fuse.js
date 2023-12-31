import path from 'node:path'
import fs, { existsSync } from 'node:fs'
import { afterAll, beforeAll, describe, expect, test } from 'vitest'
import { ExecaChildProcess, execa } from 'execa'
import { afterEach } from 'node:test'

const fixturesDir = path.join(__dirname, 'fixtures')
const allFixtures = fs.readdirSync(fixturesDir)

const wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, 500)
  })
}

describe.each(allFixtures)('%s', (fixtureName) => {
  const fixtureDir = path.join(fixturesDir, fixtureName)
  let process: ExecaChildProcess<string> | undefined

  beforeAll(async () => {
    await execa('pnpm', ['install'], { cwd: fixtureDir })
  }, 25_000)

  afterAll(async () => {
    await fs.promises.rm(path.join(fixtureDir, 'node_modules'), {
      recursive: true,
    })
    await fs.promises.rm(path.join(fixtureDir, 'build'), {
      recursive: true,
    })
    await fs.promises.rm(path.join(fixtureDir, 'schema.graphql'))
  }, 25_000)

  afterEach(async () => {
    if (process) {
      process.kill('SIGTERM')
      await wait()
      process = undefined
    }
  })

  test('Should run the dev command', async () => {
    process = execa('pnpm', ['fuse', 'dev', '--server'], {
      cwd: fixtureDir,
    })

    await new Promise((resolve) => {
      process!.stdout?.on('data', (data) => {
        const msg = data.toString()
        if (msg.includes('Server listening on')) {
          resolve(null)
        }
      })
    })

    const result = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{ _version }',
      }),
    }).then((x) => x.json())
    expect(result.data._version).toBeDefined()
  }, 10_000)

  test('Should run the build command', async () => {
    process = execa('pnpm', ['fuse', 'build', '--server'], {
      cwd: fixtureDir,
    })

    await new Promise((resolve) => {
      process!.stdout?.on('data', (data) => {
        const msg = data.toString()
        if (msg.includes('Server build output created')) {
          resolve(null)
        }
      })
    })

    expect(existsSync(path.join(fixtureDir, 'build'))).toBe(true)

    process = execa('node', ['./build/node.js'], {
      cwd: fixtureDir,
      env: {
        NODE_ENV: 'production',
        PORT: '3000',
      },
    })

    // Our built node output does not log its start
    await wait()

    const result = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{ _version }',
      }),
    }).then((x) => x.json())
    expect(result.data._version).toBeDefined()
  }, 10_000)
})
