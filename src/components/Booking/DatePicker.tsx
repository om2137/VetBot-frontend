export default function DatePicker({
  onSelect,
}: {
  onSelect: (date: string) => void;
}) {
  return (
    <div className="mt-3 flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-600">
        Select appointment date
      </label>

      <div className="relative">
        <input
          type="date"
          className="
            w-full
            rounded-xl
            border
            border-gray-300
            bg-white
            px-4
            py-2.5
            text-sm
            text-gray-800
            shadow-sm
            outline-none
            transition
            focus:border-emerald-500
            focus:ring-2
            focus:ring-emerald-200
            hover:border-gray-400
          "
          onChange={(e) =>
            onSelect(
              JSON.stringify({
                type: "DATE",
                value: e.target.value,
              })
            )
          }
        />
      </div>
    </div>
  );
}
