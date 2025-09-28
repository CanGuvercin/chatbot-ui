import { useRef, useEffect } from "react";
import "./ChatBox.css";

export default function ChatBox({ messages }) {
  const bottomRef = useRef(null);

  // Her yeni mesaj geldiğinde otomatik olarak aşağı kay
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-box">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message ${msg.sender === "user" ? "user" : "bot"}`}
        >
          {msg.text}
        </div>
      ))}

      {/* Scroll hedefi */}
      <div ref={bottomRef} />
    </div>
  );
}
