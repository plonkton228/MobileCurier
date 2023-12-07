import { Input, InputState } from "share/ui/Input"
import { Text, TextInput } from 'react-native'
import { InputCodeStyle } from "../models/InputCodeStyle"
import { setTelephone } from "entites/Telephone"
import { useAppDispatch, useAppSelector } from "share/lib/hooks/useRedux"
import { useCallback, useEffect } from "react"
import { setCode } from "entites/Code"
import { sentCode } from "../lib/sentCode"
import { useNavigate } from "react-router-native"
import { ErrorsCode } from "../models/types"
export const InputCode: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const mask = [ '+',/\d/, ' ', '(', /\d/, /\d/, /\d/,')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]
    const placeholder = '****'
    const code = useAppSelector((state) => state.codeReducer)
    const viewer = useAppSelector((state) => state.viewerReducer)
    const telephon = useAppSelector((state) => state.telephoneReducer)
    const ErrorValidate = {
      [ErrorsCode?.ERROR_SERVER]: 'Опс, что-то пошло не так',
      [ErrorsCode?.INCORRECT_CODE]: 'Вы ввели некорректный код, попробуйте заного!'
         
    }
    const ChangeHandler = useCallback((e: string) => {
        dispatch(setCode(e))
}, [code.code])
useEffect(() => {
  if (code?.code?.length === 4) {
    dispatch(sentCode({code: code.code, session: viewer.data.session, navigate, telephone: telephon.telephone}))
}
},[code.code])
    return (<>
      <Text style = {InputCodeStyle.Order}>Введите код</Text>
       {viewer?.errorsCode ? viewer?.errorsCode.map((error, index) => <Text key={index} style = {InputCodeStyle.ErrorOrder}>{ErrorValidate[error]}</Text>) : undefined}
      <Input placeholder= {placeholder} inputMode= 'numeric'  secure = {true} max={4} value= {code.code} ChangeHandler={ChangeHandler}  state= {InputState.LoginInput}/>
    </>)
}