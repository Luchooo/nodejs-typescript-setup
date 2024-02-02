import { Router } from 'express';

export const emojisrouter = Router()

emojisrouter.get('/', (_req, res) => {
  res.json({ happy: '😇', check: '✔️' })
})

export default {emojisrouter}