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
    <div className="container" style={{ maxWidth: 640, margin: '24px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Comentarios</h2>
        <button onClick={onLogout}>Cerrar sesión</button>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          style={{ flex: 1 }}
          value={texto}
          onChange={e=>setTexto(e.target.value)}
          placeholder="Escribe tu comentario"
        />
        <button onClick={handlePublish}>Publicar</button>
        <button onClick={load}>Actualizar</button>
      </div>

      <ul style={{ marginTop: 16, listStyle: 'none', padding: 0 }}>
        {list.map(c => <CommentItem key={c._id} c={c} />)}
      </ul>
    </div>
  );
}
