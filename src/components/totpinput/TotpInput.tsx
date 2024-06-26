import { TotpInputProps } from "./TotpInput.types";
import { BaseBlock, InputBlock } from "../base/Base";
import { useEffect, useId, useRef, useState } from "react";
import "./TotpInput.scss";

const TotpInput: React.FC<TotpInputProps> = ({
  label,
  content,
  setContent,
  error,
  size,
  locked,
  required,
  name,
  autofocus,
  totpSize = 6,
}) => {
  const [values, setValues] = useState<string[]>(Array(totpSize).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const id = useId();

  const inputHandler = (index: number, value: string) => {
    if (/[^0-9]/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    setContent(newValues.join(""));

    // Auto-focus next input if available
    if (value && index < totpSize - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <BaseBlock
      id={id}
      label={label}
      size={size}
      required={required ? true : false}
    >
      <div className="infusedui-totp-root">
        <div className="totp-fields">
          {Array.from({ length: totpSize }, (_, key) => (
            <InputBlock key={key} error="">
              <input
                ref={(element) => (inputsRef.current[key] = element)}
                type="text"
                value={values[key]}
                maxLength={1}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  inputHandler(key, event.target.value)
                }
                onKeyDown={(event) => handleKeyDown(key, event)}
              />
            </InputBlock>
          ))}
        </div>
      </div>
    </BaseBlock>
  );
};

export default TotpInput;
