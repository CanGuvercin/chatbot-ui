import "./ChatBox.css";

export default function ChatBox ({messages}) {
    return (
    <>
    <div className="chat-box">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message ${msg.sender === "user" ? "user" : "bot"}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
    </>
    );
}
     
