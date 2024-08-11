export interface InputProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  label?: string;
  size?: number;
  readOnly?: boolean;
  tagline?: React.ReactNode;
  type?: string;
  maxLength?: number;
  placeHolder?: string;
  locked?: boolean;
  regex?: RegExp;
  regexLabel?: string;
  required?: boolean;
  name?: string;
  autofocus?: boolean;
  className?: string;
}
