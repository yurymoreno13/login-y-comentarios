import { useState } from 'react';
import { apiLogin, apiRegister } from '../api';

export default function LoginView({ onLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async () => {
    try {
      const data = await apiLogin(username, password);
      setMsg(data.message || '');
      onLoggedIn(data.user);
    } catch (e) {
      setMsg('Credenciales inválidas');
    }
  };

  const handleRegister = async () => {
    const data = await apiRegister(username, password);
    setMsg(data.message || '');
  };

  return (
    <div className="container" style={{ maxWidth: 360, margin: '48px auto' }}>
      <h2>Login</h2>
      <div>
        <label>Usuario</label>
        <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="usuario" />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="contraseña" />
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Crear usuario</button>
      </div>
      {msg && <p style={{ marginTop: 8 }}>{msg}</p>}
    </div>
  );
}
