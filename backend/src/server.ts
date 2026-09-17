import app from './app.js'
import { env } from './config/env.js'

const server = app.listen(env.port, () => {
  console.log(`Server listening on http://localhost:${env.port}`)
})

const shutdown = (): void => {
  server.close(() => process.exit(0))
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
