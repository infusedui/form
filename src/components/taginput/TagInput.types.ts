export interface TagInputProps {
  content: string[];
  setContent: React.Dispatch<React.SetStateAction<string[]>>;
  error: string;
  separator: string[];
  label?: string;
  size?: number;
  readOnly?: boolean;
  tagline?: {
    link: string;
    label: string;
  };
  placeHolder?: string;
  locked?: boolean;
  required?: boolean;
  name?: string;
  autofocus?: boolean;
  className?: string;
}
