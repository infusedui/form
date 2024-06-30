import { Link } from "react-router-dom";
import { SubmitProps } from "./Submit.types";
import { Loader } from "@infusedui/core";
import "@infusedui/core/dist/infusedui.style.css";

const Submit: React.FC<SubmitProps> = ({
  size,
  label,
  otherAction,
  loading,
  locked,
}) => {
  return (
    <div
      className={`teaui form-container form-submit ${
        size ? `block-size-${size}x` : ""
      }`}
    >
      {otherAction && (
        <Link
          to={otherAction.link}
          className={`teaui cta level-tertiary ${
            !otherAction.iconHide
              ? otherAction.visible
                ? "format-icon-left"
                : "format-icon-only xs-format-icon-left"
              : ""
          }`}
        >
          {otherAction.iconHide ? (
            ""
          ) : (
            <i
              className={`icon teaui-icon-${
                otherAction.icon ? otherAction.icon : "arrow-left"
              }`}
            ></i>
          )}
          <span className={otherAction.visible ? "" : "viewable-phone"}>
            {otherAction.label}
          </span>
        </Link>
      )}

      <button
        className="teaui cta level-primary color-main format-icon-right"
        disabled={loading || locked ? true : false}
      >
        <span>{label}</span>
        {loading ? <Loader /> : <i className="icon teaui-icon-arrow-right"></i>}
      </button>
    </div>
  );
};

export default Submit;
