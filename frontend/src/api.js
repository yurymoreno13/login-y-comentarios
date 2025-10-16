const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export async function apiRegister(username, password) {
  const r = await fetch(`${API_BASE}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return r.json();
}

export async function apiLogin(username, password) {
  const r = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (!r.ok) throw new Error('Login inválido');
  return r.json();
}

export async function apiCreateComment(username, texto) {
  const r = await fetch(`${API_BASE}/api/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, texto })
  });
  return r.json();
}

export async function apiGetComments() {
  const r = await fetch(`${API_BASE}/api/comments`);
  return r.json();
}
