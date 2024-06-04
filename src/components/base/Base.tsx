import {
  BaseBlockProps,
  InputBlockProps,
  LoaderProps,
  RadioCheckboxBlockProps,
  SelectBlockProps,
} from "./Base.types";

import { Link } from "react-router-dom";

export const BaseBlock: React.FC<BaseBlockProps> = ({
  id,
  size,
  label,
  tagline,
  children,
  required,
}) => {
  return (
    <div
      className={`teaui form-container ${size ? `grid-size-${size}col` : ""} ${
        label ? "template-label" : "template-default"
      }`}
    >
      {label ? (
        <label htmlFor={id}>
          {label} {required && <span className="teaui required">Requis</span>}
        </label>
      ) : (
        ""
      )}
      {children}
      {tagline ? (
        <Link className="teaui form-tagline" to={tagline.link}>
          {tagline.label}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export const InputBlock: React.FC<InputBlockProps> = ({
  children,
  error,
  maxLength,
}) => {
  return (
    <div
      className={`teaui form-input ${error ? "state-negative" : ""} ${
        maxLength ? "schema-max-length" : ""
      }`}
    >
      {children}
      {error && <p className="teaui form-message">{error}</p>}
    </div>
  );
};

export const RadioCheckboxBlock: React.FC<RadioCheckboxBlockProps> = ({
  children,
  error,
  gridSize,
}) => {
  return (
    <div className={`teaui form-container`}>
      <div
        className={`teaui form-radio-grid ${
          error ? "state-negative" : ""
        } grid-init row-gap-size-8 column-gap-size-8 template-${gridSize}col`}
      >
        {children}
      </div>
      {error && <p className="teaui form-message">{error}</p>}
    </div>
  );
};

export const SelectBlock: React.FC<SelectBlockProps> = ({
  children,
  error,
}) => {
  return (
    <div
      className={`teaui form-input form-select ${
        error ? "state-negative" : ""
      }`}
    >
      {children}
      <i className="icon teaui-icon-chevron-down"></i>
      {error ? <p className="teaui form-message">{error}</p> : ""}
    </div>
  );
};

export const Loader: React.FC<LoaderProps> = ({ size }) => {
  return (
    <span className={`teaui loader ${size ? `size-${size}` : ""}`}>
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </span>
  );
};
