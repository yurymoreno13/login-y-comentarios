import { useEffect, useState } from 'react';
import { apiCreateComment, apiGetComments } from '../api';
import CommentItem from '../components/CommentItem';

export default function CommentsView({ user, onLogout }) {
  const [texto, setTexto] = useState('');
  const [list, setList] = useState([]);

  const load = async () => {
    const data = await apiGetComments();
    setList(data);
  };

  useEffect(() => { load(); }, []);

  const handlePublish = async () => {
    if (!texto.trim()) return;
    await apiCreateComment(user.username, texto.trim());
    setTexto('');
    await load();
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h2 className="h2">Comentarios</h2>
          <div className="actions">
            <button className="btn btn-ghost btn-sm" onClick={load}>Actualizar</button>
            <button className="btn btn-primary btn-sm" onClick={onLogout}>Cerrar sesión</button>
          </div>
        </div>

        <div className="row-2">
          <input
            className="input"
            value={texto}
            onChange={e=>setTexto(e.target.value)}
            placeholder="Escribe tu comentario"
          />
          <button className="btn btn-ghost" onClick={handlePublish}>Publicar</button>
          <button className="btn" onClick={load}>Actualizar</button>
        </div>

        <ul className="list">
          {list.map(c => <CommentItem key={c._id} c={c} />)}
        </ul>
      </div>
    </div>
  );
}
