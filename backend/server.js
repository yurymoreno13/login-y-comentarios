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
