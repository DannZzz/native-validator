import { useState } from "react";
import { Validator } from "@onlydann/validator-form";

export const ValidatorInput = (
  props: { validator: Validator } & Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "value"
  >
) => {
  const [val, setVal] = useState(props.validator.defaultValue);

  const onChange = props.onChange;
  const withoutChange = { ...props };
  delete withoutChange.onChange;
  delete (withoutChange as any).value;

  return (
    <input
      value={val}
      onChange={(e) => {
        props?.validator?.change(e.target.value);
        setVal(e.target.value);
        onChange?.(e);
      }}
      {...withoutChange}
    />
  );
};
//
