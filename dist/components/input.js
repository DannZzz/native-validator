"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ValidatorInput = (props) => {
    const [val, setVal] = (0, react_1.useState)(props.validator.defaultValue);
    const onChange = props.onChange;
    const withoutChange = Object.assign({}, props);
    delete withoutChange.onChange;
    delete withoutChange.value;
    return ((0, jsx_runtime_1.jsx)("input", Object.assign({ value: val, onChange: (e) => {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.validator) === null || _a === void 0 ? void 0 : _a.change(e.target.value);
            setVal(e.target.value);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, withoutChange)));
};
exports.ValidatorInput = ValidatorInput;
