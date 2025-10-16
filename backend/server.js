import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js';
import commentRoutes from './routes/comments.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas API
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);

// --- RUTA DE SALUD DEL SERVIDOR ---
app.get('/api/test', (req, res) => {
  res.json({ ok: true, message: 'Servidor funcionando correctamente en Vercel 🚀' });
});

// --- RUTA PARA PROBAR CONEXIÓN A MONGODB ---
app.get('/api/dbtest', async (req, res) => {
  try {
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    const state = mongoose.connection.readyState;
    const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
    res.json({
      ok: state === 1,
      mongooseStateCode: state,
      mongooseStateText: states[state] || 'unknown',
      dbName: mongoose.connection.name || null,
      host: mongoose.connection.host || null
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB conectado');
    app.listen(PORT, () => console.log(`API escuchando en http://localhost:${PORT}`));
  } catch (err) {
    console.error('Error al conectar MongoDB', err);
    process.exit(1);
  }
}

start();
