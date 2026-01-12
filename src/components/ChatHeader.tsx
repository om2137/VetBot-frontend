
export default function ChatHeader() {
  // function handleNewChat() {
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   if (window.parent && (window.parent as any).VetChatbot) {
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     (window.parent as any).VetChatbot.newChat();
  //   }
  // }

  return (
    <div className="p-4 border-b flex justify-between items-center bg-emerald-600 text-white">
      <span className="font-semibold">🐾 Vet Assistant</span>
      {/* <button
        onClick={handleNewChat}
        className="text-xs bg-white/20 px-3 py-1 rounded cursor-pointer"
      >
        New Chat
      </button> */}
    </div>
  );
}
