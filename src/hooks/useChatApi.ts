import { useEffect, useState } from "react";
import { fetchHistory, initSession, sendMessageApi } from "../services/chatApi";
import type { ChatMessage } from "../types/chat";
import { API_BASE_URL } from "../services/api";

function uuid() {
  return Math.random().toString(36).substring(2, 10);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useChatApi(sessionId: string | null, context: any) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [ready, setReady] = useState(false);

  // Init session once
  useEffect(() => {
    if (!sessionId || ready) return;

    initSession(sessionId, context)
      .then(() => setReady(true))
      .catch(console.error);
  }, [sessionId, context, ready]);

  useEffect(() => {
    if (!sessionId || !ready) return;

    fetchHistory(sessionId)
      .then((msgs) => {
        setMessages(
          msgs.map((m: ChatMessage) => ({
            id: crypto.randomUUID(),
            role: m.role,
            text: m.text,
            timestamp: Date.now(),
          }))
        );
      })
      .catch(console.error);
  }, [sessionId, ready]);

  async function sendMessage(text: string) {
    if (!sessionId) return;

    // HANDLE CONFIRM HERE (BEFORE ANYTHING ELSE)
    if (text === "CONFIRM") {
      await fetch(`${API_BASE_URL}/chat/confirm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      setMessages((prev) => [
        ...prev,
        {
          id: uuid(),
          role: "bot",
          text: "✅ Your appointment has been confirmed!",
          timestamp: Date.now(),
        },
      ]);

      return; // ⛔ VERY IMPORTANT: STOP HERE
    }

    const userMsg: ChatMessage = {
      id: uuid(),
      role: "user",
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);

    try {
      const { reply, ui } = await sendMessageApi(sessionId, text);

      const botMsg: ChatMessage = {
        id: uuid(),
        role: "bot",
        text: reply,
        timestamp: Date.now(),
        ui,
      };

      setMessages((prev) => [...prev, botMsg]);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          id: uuid(),
          role: "bot",
          text: "Sorry, something went wrong. Please try again.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setTyping(false);
    }
  }

  return { messages, sendMessage, typing, ready };
}
