export interface TotpInputProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  label?: string;
  size?: number;
  locked?: boolean;
  required?: boolean;
  name?: string;
  autofocus?: boolean;
  totpSize?: number;
}
