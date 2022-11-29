/// <reference types="react" />
import { TextInputProps } from "react-native";
import { Validator } from "@onlydann/validator-form";
export declare const ValidatorInput: (props: {
    validator: Validator;
} & Omit<TextInputProps, "value">) => JSX.Element;
