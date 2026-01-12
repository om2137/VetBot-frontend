export default function ConfirmBox({
  onConfirm
}: {
  onConfirm: (value: string) => void;
}) {
  return (
    <div className="flex gap-3 mt-2">
      <button
        onClick={() => onConfirm("CONFIRM")}
        className="bg-emerald-600 text-white px-4 py-2 rounded text-sm"
      >
        Confirm
      </button>
      <button
        onClick={() => onConfirm("CANCEL")}
        className="bg-gray-200 px-4 py-2 rounded text-sm"
      >
        Cancel
      </button>
    </div>
  );
}
