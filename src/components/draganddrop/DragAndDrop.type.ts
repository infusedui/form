export interface DragAndDropProps {
  size: number;
  label: string;
  content: File[];
  error: string;
  setContent: React.Dispatch<React.SetStateAction<File | File[]>>;
  authorizedFiles: string[];
  multipleUpload: boolean;
  className?: string;
}
