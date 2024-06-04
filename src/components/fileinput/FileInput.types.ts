export interface FileInputProps {
  setContent: React.Dispatch<React.SetStateAction<null | FileList | File>>;
  error: string;
  accept: string[];
  label?: string;
  size?: number;
  tagline?: {
    link: string;
    label: string;
  };
  required?: boolean;
}
