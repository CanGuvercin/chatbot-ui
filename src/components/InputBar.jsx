import "./InputBar.css";
import { useState } from "react";

export default function InputBar ({onSend}) {
     const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
    return (<>
        <div className="input-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Mesaj yaz..."
      />
      <button onClick={handleSend}>Gönder</button>
    </div>
    </>
    );
}
     
