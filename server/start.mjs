import express from 'express'
import { fileURLToPath } from 'node:url'
import { createContactApp } from './contact.mjs'

const app = express()
const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const index = fileURLToPath(new URL('../dist/index.html', import.meta.url))

app.disable('x-powered-by')
app.use(createContactApp(process.env))
app.use(express.static(dist))
app.get(['/', '/about', '/experience', '/skills', '/certifications', '/contact'], (_req, res) => res.sendFile(index))

const port = Number(process.env.PORT || 8443)
app.listen(port, () => console.log(`Portfolio listening on port ${port}`))
