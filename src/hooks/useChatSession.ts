import { useEffect, useState } from "react";

export function useChatSession() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [context, setContext] = useState<any>({});

  useEffect(() => {
    // 🔹 Tell parent we are ready
    window.parent.postMessage(
      { type: "VET_CHATBOT_READY" },
      "*"
    );

    function handler(event: MessageEvent) {
      if (event.data?.type === "VET_CHATBOT_INIT") {
        setSessionId(event.data.payload.sessionId);
        setContext(event.data.payload.context || {});
      }
    }

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return { sessionId, context };
}
