import { useState } from 'react'
import './App.css'
import ChatBox from './components/ChatBox';
import InputBar from './components/InputBar';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: 'Merhaba, nasılsın?' },
    { id: 2, sender: 'bot', text: 'İyiyim, teşekkürler! Size nasıl yardımcı olabilirim?' }
  ]);

 const handleSend = async (text) => {
  const newMessage = {
    id: Date.now(),
    sender: "user",
    text,
  };
  setMessages((prev) => [...prev, newMessage]);

  try {
    // n8n webhook URL'nizi buraya yazın
    const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: text,
        userId: 'user123' // opsiyonel
      }),
    });

    const data = await response.json();
    
    const botReply = {
      id: Date.now() + 1,
      sender: "bot",
      text: data.response || "Üzgünüm, bir hata oluştu.",
    };
    setMessages((prev) => [...prev, botReply]);
    
  } catch (error) {
    console.error('API Error:', error);
    const errorMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: "Bağlantı hatası oluştu.",
    };
    setMessages((prev) => [...prev, errorMessage]);
  }
};

  //week2

  return (
    <>
      <ChatBox messages={messages} />
      <InputBar onSend={handleSend} />
    </>
  );
}

export default App
