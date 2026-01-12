import BookingUI from "./BookingUI";

export default function MessageBubble({
  message,
  onSend
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message: any;
  onSend: (value: string) => void;
}) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[75%]">
        <div
          className={`px-4 py-2 rounded-2xl text-sm ${
            isUser
              ? "bg-emerald-600 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {message.text}
        </div>

        {!isUser && message.ui && (
          <BookingUI ui={message.ui} onSend={onSend} />
        )}
      </div>
    </div>
  );
}
