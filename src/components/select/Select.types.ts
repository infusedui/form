export interface SelectProps {
  content: string | number;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  error: string;
  label?: string;
  size?: number;
  locked?: boolean;
}
