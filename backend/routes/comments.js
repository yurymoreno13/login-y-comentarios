import { Router } from 'express';
import Comment from '../models/Comment.js';

const router = Router();

// POST /api/comments
router.post('/', async (req, res) => {
  try {
    const { username, texto } = req.body;
    if (!username || !texto) {
      return res.status(400).json({ message: 'username y texto son requeridos' });
    }
    const created = await Comment.create({ username, texto });
    return res.json(created);
  } catch (err) {
    return res.status(500).json({ message: 'Error del servidor', error: err.message });
  }
});

// GET /api/comments
router.get('/', async (_req, res) => {
  try {
    const list = await Comment.find().sort({ createdAt: -1 });
    return res.json(list);
  } catch (err) {
    return res.status(500).json({ message: 'Error del servidor', error: err.message });
  }
});

export default router;
