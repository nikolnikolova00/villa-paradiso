import cors from 'cors'
import express from 'express'
import { errorHandler, notFound } from './middleware/error.js'
import authRouter from './modules/auth.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/auth', authRouter)

app.use(notFound)
app.use(errorHandler)

export default app
