import { useState } from 'react'
import './App.css'
import ChatBox from './components/ChatBox';
import InputBar from './components/InputBar';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: 'Merhaba, nasılsın?' },
    { id: 2, sender: 'bot', text: 'İyiyim, teşekkürler! Size nasıl yardımcı olabilirim?' }
  ]);

  const handleSend = (text) => {
    const newMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <>
      <ChatBox messages={messages} />
      <InputBar onSend={handleSend} />
    </>
  );
}

export default App
