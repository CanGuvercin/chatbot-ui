import { useState } from 'react'
import './App.css'
import ChatBox from './components/ChatBox';
import InputBar from './components/InputBar';
import { useEffect } from 'react';

//need deeper automation options
// maybe personal type selection

function App() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: 'Merhaba, nasılsın?' },
    { id: 2, sender: 'bot', text: 'İyiyim, teşekkürler! Size nasıl yardımcı olabilirim?' }
  ]);

  // App.jsx'e ekleyin
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [credentials, setCredentials] = useState({ username: '', password: '' });

const handleLogin = (e) => {
  e.preventDefault();
  // Basit hard-coded authentication
  if (credentials.username === 'admin' && credentials.password === '123456') {
    setIsAuthenticated(true);
  } else {
    alert('Yanlış kullanıcı adı veya şifre');
  }
};

// Ana return'de:
if (!isAuthenticated) {
  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Kullanıcı adı" 
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        />
        <input 
          type="password" 
          placeholder="Şifre"
          value={credentials.password} 
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
        <button type="submit">Giriş</button>
      </form>
    </div>
  );
}

const handleSend = async (text) => {
  const newMessage = {
    id: Date.now(),
    sender: "user",
    text,
  };
  setMessages((prev) => [...prev, newMessage]);

  try {
    const response = await fetch('https://mustafacanguvercin.app.n8n.cloud/webhook/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: text,
        userId: 'user123'
      }),
    });

    const rawText = await response.text();
    const parsedData = JSON.parse(rawText);
    console.log('parsedData:', parsedData);
console.log('parsedData.response:', parsedData.response);
console.log('typeof parsedData.response:', typeof parsedData.response);

const responseText = typeof parsedData.response === 'object' 
  ? JSON.stringify(parsedData.response) 
  : parsedData.response;
    
    // BOT MESAJINI EKLE
    const botReply = {
      id: Date.now() + 1,
      sender: "bot",
      text: parsedData.response || "Cevap bulunamadı.",
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
      <button 
        className="reset-btn" 
        onClick={() => setMessages([
          { id: 1, sender: 'user', text: 'Merhaba, nasılsın?' },
          { id: 2, sender: 'bot', text: 'İyiyim, teşekkürler! Size nasıl yardımcı olabilirim?' }
        ])}
        style={{ marginBottom: '1rem' }}
      >
        Reset Chat
      </button>
      <ChatBox messages={messages} />
      <InputBar onSend={handleSend} />
    </>
  );
}

export default App
