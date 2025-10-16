export default function CommentItem({ c }) {
  const date = new Date(c.createdAt);
  return (
    <li style={{ padding: 8, borderBottom: '1px solid #eee' }}>
      <strong>{c.username}</strong>: {c.texto}
      <div style={{ fontSize: 12, opacity: 0.7 }}>{date.toLocaleString()}</div>
    </li>
  );
}
