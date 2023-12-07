import { memo, useCallback, useState } from "react"
import { View, Text} from "react-native"
import { ButtonState, CustomButton } from "share/ui/CustomButton"
import { SelfButtonStyle } from './SelfButtonStyle'
import { useAppDispatch, useAppSelector } from "share/lib/hooks/useRedux"
import { setSelfEmployment } from "entites/Profile"
export const SelfemploymentButton: React.FC = memo(() => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector((state) => state.ProfileReducer)
 // Состояние для управлением выделением кнопки

    const clickButtonSelf1 = useCallback((indexButton: number) => { // Функция кликер меняющая выделенную кнопку
         setSelfEmployment(indexButton)  // Изменяем выделенную кнопку на которую кликнул пользователь
         dispatch(setSelfEmployment(1))
    }, [profile.data?.selfemployment])
    const clickButtonSelf2 = useCallback((indexButton: number) => {
        setSelfEmployment(indexButton)
        dispatch(setSelfEmployment(2))
    }, [profile.data?.selfemployment])

    const clickButtonSelf3 = useCallback((indexButton: number) => {
        setSelfEmployment(indexButton)
        dispatch(setSelfEmployment(3))
    }, [profile.data?.selfemployment])
    console.log(profile.data?.selfemployment)
    return(<>
    <View style = {SelfButtonStyle.ButtonSelfContainer}>
        <Text style = {SelfButtonStyle.Order}>Самозанятость</Text>
        <View style = {SelfButtonStyle.InnerContainer}> 
            <CustomButton color="#2C2E32" workWithIndex = {true} indexButton={1} stateIndex={profile.data?.selfemployment} title= 'Есть' disable ={true} state= {ButtonState.ButtonSelf} ClickHanlder={clickButtonSelf1}/>
            <CustomButton color="#2C2E32" workWithIndex = {true} indexButton={2} stateIndex={profile.data?.selfemployment}title= 'Нет' disable ={true} state= {ButtonState.ButtonSelf} ClickHanlder={clickButtonSelf2}/>
            <CustomButton color="#2C2E32" workWithIndex = {true} indexButton={3} stateIndex={profile.data?.selfemployment} title= 'Могу оформиться' disable ={true} state= {ButtonState.ButtonSelf} ClickHanlder={clickButtonSelf3}/>
        </View>
    </View>
    
    </>)
})