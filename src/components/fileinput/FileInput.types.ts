export interface FileInputProps {
  setContent: React.Dispatch<React.SetStateAction<null | FileList | File>>;
  error: any;
  accept: string[];
  label?: string;
  size?: number;
  tagline?: React.ReactNode;
  required?: boolean;
  className?: string;
}
