import { useState } from 'react';
import LoginView from './views/LoginView';
import CommentsView from './views/CommentsView';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) return <LoginView onLoggedIn={setUser} />;
  return <CommentsView user={user} onLogout={() => setUser(null)} />;
}
