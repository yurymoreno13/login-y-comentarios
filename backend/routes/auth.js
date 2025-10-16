import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'username y password son requeridos' });
    }

    const exists = await User.findOne({ username });
    if (exists) return res.status(409).json({ message: 'El usuario ya existe' });

    await User.create({ username, password });
    return res.json({ message: 'Usuario creado exitosamente' });
  } catch (err) {
    return res.status(500).json({ message: 'Error del servidor', error: err.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'username y password son requeridos' });
    }

    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    return res.json({ message: 'Login exitoso', user: { _id: user._id, username: user.username } });
  } catch (err) {
    return res.status(500).json({ message: 'Error del servidor', error: err.message });
  }
});

export default router;
