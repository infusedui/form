export interface CheckboxProps {
  children: React.ReactNode;
  error: string;
  content: string | boolean;
  setContent: React.Dispatch<React.SetStateAction<string | boolean | number>>;
  value?: string | number;
  locked?: boolean;
  className?: string;
}
