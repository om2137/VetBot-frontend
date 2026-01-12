import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { useChatSession } from "../hooks/useChatSession";
import { useChatApi } from "../hooks/useChatApi";

export default function ChatContainer() {
  const { sessionId, context } = useChatSession();
  const { messages, sendMessage, typing } = useChatApi(sessionId, context);

  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col overflow-hidden">
      <ChatHeader />
      <MessageList messages={messages} typing={typing} onSend={sendMessage } />
      <ChatInput onSend={sendMessage} disabled={!sessionId} />
    </div>
  );
}
