import { BaseBlock, InputBlock } from "../base/Base";
import { useEffect, useId, useState } from "react";
import { TagInputProps } from "./TagInput.types";

const Input: React.FC<TagInputProps> = ({
  label,
  content,
  setContent,
  error,
  size,
  readOnly,
  tagline,
  placeHolder,
  locked,
  required,
  name,
  autofocus,
  separator = [","],
}) => {
  const id = useId();

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { key } = event;

    if (separator.indexOf(key) >= 0) {
      setContent([...content, target.value.slice(0, -1).trim()]);
      target.value = "";
    }
  };

  return (
    <BaseBlock
      id={id}
      label={label}
      size={size}
      tagline={tagline}
      required={required ? true : false}
    >
      <InputBlock error={error}>
        <input
          disabled={locked ? true : false}
          name={name ? name : id}
          id={id}
          readOnly={readOnly ? true : false}
          placeholder={placeHolder ? placeHolder : ""}
          autoFocus={autofocus ? true : false}
          onKeyUp={handleKey}
        />
      </InputBlock>
      <div className="infusedui-tag-root">
        {content.map((tag, index) => (
          <span
            className="infusedui-tag"
            title="Remove from list"
            key={index}
            onClick={() => {
              setContent(content.filter((v) => v !== tag));
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </BaseBlock>
  );
};

export default Input;