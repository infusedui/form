export interface MessageProps {
  data: {
    type: "negative" | "positive" | "warning" | "main";
    content: string;
    format?: "icon" | "icon-cta" | "cta";
    icon?: string;
  };
}
