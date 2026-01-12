export default function SlotPicker({
    slots,
    onSelect
}: {
    slots: string[];
    onSelect: (slot: string) => void;
}) {
    return (
        <div className="flex gap-2 flex-wrap mt-2">
            {slots.map((slot) => (
                <button
                    key={slot}
                    onClick={() =>
                        onSelect(JSON.stringify({
                            type: "SLOT",
                            value: slot
                        }))
                    }

                    className="px-3 py-1 text-sm bg-emerald-100 rounded hover:bg-emerald-200"
                >
                    {slot}
                </button>
            ))}
        </div>
    );
}
