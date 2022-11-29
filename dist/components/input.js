"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorInput = void 0;
const react_native_1 = require("react-native");
const react_1 = __importStar(require("react"));
const ValidatorInput = (props) => {
    const [val, setVal] = (0, react_1.useState)(props.validator.defaultValue);
    const onChangeText = props.onChangeText;
    const withoutChange = Object.assign({}, props);
    delete withoutChange.onChangeText;
    delete withoutChange.value;
    return (<react_native_1.TextInput value={val} {...withoutChange} onChangeText={(txt) => {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.validator) === null || _a === void 0 ? void 0 : _a.change(txt);
            setVal(txt);
            onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(txt);
        }}/>);
};
exports.ValidatorInput = ValidatorInput;
