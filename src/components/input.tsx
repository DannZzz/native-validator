import { TextInput, TextInputProps } from "react-native";
import React, { useState } from "react";
import { Validator } from "@onlydann/validator-form";

export const ValidatorInput = (
  props: { validator: Validator } & Omit<TextInputProps, "value">
) => {
  const [val, setVal] = useState(props.validator.defaultValue);

  const onChangeText = props.onChangeText;
  const withoutChange = { ...props };
  delete withoutChange.onChangeText;
  delete (withoutChange as any).value;

  return (
    <TextInput
      value={val}
      {...withoutChange}
      onChangeText={(txt) => {
        props?.validator?.change(txt);
        setVal(txt);
        onChangeText?.(txt);
      }}
    />
  );
};
