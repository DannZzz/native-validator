/// <reference types="react" />
import { Validator } from "@onlydann/validator-form";
export declare const ValidatorInput: (props: {
    validator: Validator;
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "value">) => JSX.Element;
