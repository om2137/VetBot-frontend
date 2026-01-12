export type UIType =
  | "NONE"
  | "TEXT"
  | "DATE_PICKER"
  | "SLOT_SELECTION"
  | "CONFIRMATION";

export interface UIInstruction {
  type: UIType;
  slots?: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: number;
  ui?: UIInstruction;
}
