import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import type { ChatMessage } from "../types/chat";

export default function MessageList({
  messages,
  typing,
  onSend
}: {
  messages: ChatMessage[];
  typing: boolean;
  onSend: (value: string) => void;
}) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className="flex-1 p-4 space-y-3 overflow-y-auto">
      {messages.map(m => (
        <MessageBubble key={m.id} message={m} onSend={onSend } />
      ))}

      {typing && (
        <div className="text-xs text-gray-500">Vet Assistant is typing…</div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
