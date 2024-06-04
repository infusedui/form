export interface TextAreaProps {
  label: string;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  maxLength?: number;
  size?: number;
  tagline?: {
    link: string;
    label: string;
  };
  readOnly?: boolean;
  placeHolder?: string;
  locked?: boolean;
  rows?: number;
}
