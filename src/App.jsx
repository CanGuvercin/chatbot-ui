import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBox from './ChatBox';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: 'Merhaba, nasılsın?' },
    { id: 2, sender: 'bot', text: 'İyiyim, teşekkürler! Size nasıl yardımcı olabilirim?' }
  ]);

  return (
    <>
      <ChatBox messages={messages} />
    </>
  );
}

export default App
