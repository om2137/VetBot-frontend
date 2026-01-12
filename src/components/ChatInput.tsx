import { useState } from "react";

export default function ChatInput({
  onSend,
  disabled
}: {
  onSend: (text: string) => void;
  disabled?: boolean;
}) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  }

  return (
    <div className="p-3 border-t flex gap-2">
      <input
        className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
        placeholder="Type your message..."
        value={message}
        disabled={disabled}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50"
        disabled={disabled || !message.trim()}
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}
