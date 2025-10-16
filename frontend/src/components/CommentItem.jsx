export default function CommentItem({ c }) {
  const date = new Date(c.createdAt);
  return (
    <li className="item">
      <div className="meta">
        <span className="user">{c.username}</span>
        <span className="time">{date.toLocaleString()}</span>
      </div>
      <div className="text">{c.texto}</div>
    </li>
  );
}
