import { InputModeOptions, KeyboardType, StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { InputStyle } from "../models/InputStyle"
import { memo } from "react"
export enum InputState {
  LoginInput = 'LoginInput',
  FormInput = 'FormInput'
}
interface InputInterface  {
    state: InputState,
    classe?: string,
    ChangeHandler: (e:string) => void,
    mode?: string,
    disable?: boolean,
    placeholder?: string,
    // Добавляем маску
    mask?: MaskInputProps['mask']
    // Добавляем дополнительные стили
    addStyle?: StyleProp<ViewStyle | TextStyle>
    //Определяем будет ли инпут скрывать вводимое содержимое
    secure?: boolean,
    value: string,
    max: number,
    // Тип инпута
    inputMode?: InputModeOptions
}
export const Input: React.FC<InputInterface> = memo((props) => {
     const {
        ChangeHandler, 
        state,
        classe,
        mode,
        value,
        max,
        placeholder,
        disable,
        addStyle,
        inputMode,
        secure,
        mask
     } = props
    return (<>
     <MaskInput secureTextEntry = {secure}  defaultValue= {placeholder} mask={mask} placeholder= {placeholder} editable = {disable} inputMode= {inputMode} maxLength={max} value= {value}
     onChangeText={ (masked, unmasked) => ChangeHandler(masked)}
     style = {[InputStyle[state], addStyle]}   >
     </MaskInput>

    </>)
})