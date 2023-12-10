import { setBirthday, setCar, setFIO } from "entites/Profile"
import { memo, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "share/lib/hooks/useRedux"
import { Input, InputState } from "share/ui/Input"
import { InputsInfoStyle } from '../models/InputsInfoStyle'

export const InputsInfo: React.FC = memo(() => {
    const Profile = useAppSelector((state) => state.ProfileReducer)
    const mask = [  /\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/,]
    const dispatch = useAppDispatch()

    const onChangeFIO = useCallback((e: string) => {
           dispatch(setFIO(e))
    },[Profile.data?.fio])
    const onChangeCar = useCallback((e: string) => {
        dispatch(setCar(e))
 },[Profile.data?.car])

 const onChangeDate = useCallback((e: string) => {
    dispatch(setBirthday(e))
 },[Profile.data?.birthday])
    
    return (<>
     <Input addStyle = {Profile?.data?.errors?.["data.fio"]?  InputsInfoStyle.Danger : undefined} inputMode='text' max={50} placeholder='ФИО' value={Profile.data?.fio} ChangeHandler={onChangeFIO} state={InputState.FormInput}  />
     <Input addStyle = {Profile?.data?.errors?.["data.birthday"] ?  InputsInfoStyle.Danger : undefined} state= {InputState.FormInput} value= {Profile.data?.birthday} ChangeHandler={onChangeDate} mask={mask} inputMode='decimal' max={10} placeholder='ДД.ММ.ГГГГ' />
     <Input addStyle = {Profile?.data?.errors?.["data.car"]?  InputsInfoStyle.Danger : undefined} inputMode='text' max={50} placeholder='Автомобиль' value={Profile.data?.car} ChangeHandler={onChangeCar} state={InputState.FormInput}  />
   
  
    </>)
})