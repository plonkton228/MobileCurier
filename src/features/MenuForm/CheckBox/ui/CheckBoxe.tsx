import { memo, useCallback, useState } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import  CheckBox from '@react-native-community/checkbox';
import { ButtonState, CustomButton } from "share/ui/CustomButton";
import { CheckBoxeStyle } from "./CheckBoxeStyle";
import { useAppDispatch, useAppSelector } from "share/lib/hooks/useRedux";
import { sendProfile } from "entites/Profile/models/actions/sendProfile";
import { useNavigate } from "react-router-native";
import { API } from "share/api/API";

interface CheckBoxStyle {
     addStyle?: StyleProp<ViewStyle>
}
export const CheckBoxe: React.FC<CheckBoxStyle> = memo((props) => {
     const {
          addStyle
     } = props
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
    const [check, setCheck] = useState<boolean>(false)
    const profile = useAppSelector((state) => state.ProfileReducer)
    const viewer = useAppSelector((state) => state.viewerReducer)
    const ChangeHandler = useCallback(() => {
         setCheck((prevState) => !prevState)
    }, [check])
    const ClickHandler = useCallback(() => {
         dispatch(sendProfile({fio: profile.data.fio, selfemployment: profile.data.selfemployment, car : profile.data.car, birthday: profile.data.birthday, town: profile.data.cityId, token: viewer.data.token, navigate: navigate }))
    },[check, profile.data, profile.data.errors])
 return(<>
  <View style = {[CheckBoxeStyle.CheckBoxContainer, addStyle]}>
   <View style = {CheckBoxeStyle.CheckBoxContainerInner}>
    <CheckBox
      value = {check}
      onChange={ChangeHandler}
     /> 
     <Text>При отправке данных, вы соглашаетесь со сбором и обработкой персональных данных</Text>
   </View>
     <CustomButton state= {ButtonState.ButtonLogin} color="#FFFFFF" disable = { Boolean(profile.data.selfemployment) && Boolean(profile.data.fio) && Boolean(profile.data.birthday) && Boolean(profile.data.car) && Boolean(profile.data.cityId) && check} title="Отправить" ClickHanlder={ClickHandler}/>
  </View>
 </>)
})