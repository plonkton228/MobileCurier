import { Input, InputState } from "share/ui/Input"
import { Text } from 'react-native'
import { setTelephone, setUsable } from "entites/Telephone"
import { useAppDispatch, useAppSelector } from "share/lib/hooks/useRedux"
import { useCallback } from "react"
import { InputNumberStyle } from "../models/InputNumberStyle"
import { ErrorsTelephone } from "../models/types"
import { ButtonState, CustomButton } from "share/ui/CustomButton"
export const InputNumber: React.FC = () => {
    const dispatch = useAppDispatch()
    const mask = [ '+',/\d/, ' ', '(', /\d/, /\d/, /\d/,')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]
    const placeholder = '+7 (000) 000 00 00'
    const telephone = useAppSelector((state) => state.telephoneReducer)
    const viewer = useAppSelector((state) => state.viewerReducer)
    const ErrorValidate = {
        [ErrorsTelephone.INCORRECT_PHONE]:'Вы ввели некорректный телефон ',
        [ErrorsTelephone.ERROR_SERVER]: 'Опс, что-то пошло не так'
    }
    const ChangeHandler = useCallback((e: string) => {
        dispatch(setTelephone(e))
}, [telephone.telephone])
   
    const ClickHandler = useCallback(() => {
        dispatch(setUsable(true))
    }, [dispatch])
    return (<>
    <Text style = {InputNumberStyle.Order}>Введите номер</Text>
    {viewer?.errorsTelephone ? viewer?.errorsTelephone.map((error, index) => <Text key={index} style = {InputNumberStyle.ErrorOrder}>{ErrorValidate[error]}</Text>) : undefined}
    <Input placeholder= {placeholder} mask={mask} inputMode= 'tel' disable = {telephone.useable} max={18} value= { telephone.telephone} ChangeHandler={ChangeHandler} state= {InputState.LoginInput}/>
     { telephone.viewReset ? <CustomButton disable = {true} ClickHanlder={ClickHandler} state= {ButtonState.ButtonResetPhone} title='изменить номер телефона'/> : undefined  }
    </>)
}