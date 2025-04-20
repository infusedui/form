import { SubmitProps } from "./Submit.types";
import { Loader } from "@infusedui/core";
import "@infusedui/core/dist/infusedui.style.css";

const Submit: React.FC<SubmitProps> = ({
  size,
  label,
  loading,
  locked,
  className,
  children,
}) => {
  return (
    <div
      className={
        size
          ? `infusedui grid template-cta-container ha-end size-${size}x ${className}`
          : `infusedui grid template-cta-container ha-end ${className}`
      }
    >
      {children}
      <button
        className="teaui cta level-primary format-icon-right"
        disabled={loading || locked ? true : false}
      >
        <span>{label}</span>
        <i className="icon teaui-icon-arrow-right"></i>
        {loading && <Loader />}
      </button>
    </div>
  );
};

export default Submit;
