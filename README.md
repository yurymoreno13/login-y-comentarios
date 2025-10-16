# Login y Comentarios (Full-Stack)

App full‑stack con **Node.js + Express + MongoDB (Atlas)** y **React (Vite)** para:
- Registrar usuarios
- Login
- Crear y listar comentarios (globales)

## Requisitos
- Node.js 18+ y npm
- Cuenta de MongoDB Atlas (URI de conexión)

## Cómo correr local
```bash
# Backend
cd backend
npm install
cp .env.example .env  # editar MONGODB_URI y PORT si deseas
npm run dev

# Frontend (en otra terminal)
cd ../frontend
npm install
cp .env.example .env  # opcional; por defecto usa http://localhost:4000
npm run dev
```
Abre la URL de Vite (p.ej. http://localhost:5173).

## Endpoints
- `POST /api/auth/register` { username, password }
- `POST /api/auth/login`    { username, password }
- `POST /api/comments`      { username, texto }
- `GET  /api/comments`

## Deploy
- Backend: Vercel con `backend/vercel.json` y variables de entorno `MONGODB_URI`, `PORT=4000`.
- Frontend: Vercel con `VITE_API_BASE` apuntando al backend.

> Nota: Para producción real, cifra contraseñas y usa JWT. Este repo está alineado con el enunciado del parcial.
