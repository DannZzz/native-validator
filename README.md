# React Native input component for working with [validator-form](https://www.npmjs.com/package/@onlydann/validator-form)

## Install

```shell
npm install @onlydann/native-validator
```

### Or

```shell
yarn add @onlydann/native-validator
```

# Usage

```js
import { ValidatorForm, Validator } from "@onlydann/validator-form";
import { ValidatorInput } from "@onlydann/native-validator";
import { View, Button } from "react-native";

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
    // use ValidatorInput instead of <TextInput/>
    // ValidatorInput returns <TextInput/> component and you can use its all props except "value"
    return (
        <View>
            <ValidatorInput className="my-input" validator={form.fields.name}>
            <Button onPress={() => form.valid && console.log(form.fields.name.currentValue) title="Show"}/>
        </View>
    )
}

export default Home;
```
