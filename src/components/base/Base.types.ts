export interface BaseBlockProps {
  id: string;
  children: React.ReactNode;
  label?: string;
  size?: number;
  tagline?: {
    link: string;
    label: string;
  };
  required?: boolean;
}

export interface InputBlockProps {
  children: React.ReactNode;
  error: string | boolean;
  maxLength?: number;
}

export interface RadioCheckboxBlockProps {
  children: React.ReactNode;
  error: string;
  gridSize: number;
}

export interface SelectBlockProps {
  children: React.ReactNode;
  error: string;
}

export interface LoaderProps {
  size?: "small" | "medium" | "large";
}
