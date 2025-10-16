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
    <div className="container" style={{maxWidth: 440}}>
      <div className="card">
        <h2 className="h2">Login</h2>

        <div className="form">
          <div>
            <div className="label">Usuario</div>
            <input
              className="input"
              value={username}
              onChange={e=>setUsername(e.target.value)}
              placeholder="usuario"
            />
          </div>

          <div>
            <div className="label">Contraseña</div>
            <input
              className="input"
              type="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              placeholder="•••••••"
            />
          </div>

          <div className="spacer" />

          <div className="row" style={{gridTemplateColumns:'1fr 1fr'}}>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            <button className="btn btn-ghost" onClick={handleRegister}>Crear usuario</button>
          </div>

          {msg && <p style={{ color:'#a8b0c7', marginTop:6 }}>{msg}</p>}
        </div>
      </div>
    </div>
  );
}
