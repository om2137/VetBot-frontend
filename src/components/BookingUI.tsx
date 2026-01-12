import ConfirmBox from "./Booking/ConfirmBox";
import DatePicker from "./Booking/DatePicker";
import SlotPicker from "./Booking/SlotPicker";

export default function BookingUI({
  ui,
  onSend
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ui: any;
  onSend: (value: string) => void;
}) {
  if (!ui || ui.type === "NONE") return null;

  switch (ui.type) {
    case "DATE_PICKER":
      return <DatePicker onSelect={onSend} />;

    case "SLOT_SELECTION":
      return <SlotPicker slots={ui.slots || []} onSelect={onSend} />;

    case "CONFIRMATION":
      return <ConfirmBox onConfirm={onSend} />;

    default:
      return null;
  }
}

