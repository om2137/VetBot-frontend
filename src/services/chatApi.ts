import type { UIInstruction } from "../types/chat";
// import { API_BASE_URL } from "./api";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function initSession(
  sessionId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any
): Promise<void> {
  await fetch(`${API_BASE_URL}/chat/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, context })
  });
}

export async function sendMessageApi(
  sessionId: string,
  message: string
): Promise<{ reply: string; ui?: UIInstruction }> {
  const res = await fetch(`${API_BASE_URL}/chat/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, message })
  });
  
  const data = await res.json();
  console.log(data)
  return data;
}

export async function fetchHistory(sessionId: string) {
  const res = await fetch(
    `${API_BASE_URL}/chat/history/${sessionId}`
  );
  const data = await res.json();
  return data.messages;
}
