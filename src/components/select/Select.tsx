import { SelectProps } from "./Select.types";
import { BaseBlock, SelectBlock } from "../base/Base";
import { useId } from "react";

const Select: React.FC<SelectProps> = ({
  label,
  content,
  setContent,
  error,
  size,
  children,
  locked,
}) => {
  const id = useId();

  return (
    <BaseBlock id={id} label={label} size={size}>
      <SelectBlock error={error}>
        <select
          value={content}
          name={id}
          id={id}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          disabled={locked ? locked : false}
        >
          {children}
        </select>
      </SelectBlock>
    </BaseBlock>
  );
};

export default Select;
