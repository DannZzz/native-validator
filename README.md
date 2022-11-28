# React input component for working with [validator-form](https://www.npmjs.com/package/@onlydann/validator-form)

## Install

```shell
npm install @onlydann/react-validator
```

### Or

```shell
yarn add @onlydann/react-validator
```

# Usage

```js
import { ValidatorForm, Validator } from "@onlydann/validator-form";
import { ValidatorInput } from "@onlydann/react-validator";

// any form
const form = new ValidatorForm({
  name: new Validator("", [
    Validator.required,
    Validator.minLength(5),
    Validator.maxLength(30),
  ]),
});

// any component
const Home = () => {
    // use ValidatorInput instead of <input/>
    // ValidatorInput returns <input/> component and you can use its all props except "value"
    return (
        <div>
            <ValidatorInput className="my-input" validator={form.fields.name}>
            <button onClick={() => form.valid && console.log(form.fields.name.currentValue)}>Show</button>
        </div>
    )
}

export default Home;
```
