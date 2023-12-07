import { memo, useCallback, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import  CheckBox from '@react-native-community/checkbox';
import { ButtonState, CustomButton } from "share/ui/CustomButton";
import { CheckBoxeStyle } from "./CheckBoxeStyle";
import { useAppDispatch, useAppSelector } from "share/lib/hooks/useRedux";
import { sendProfile } from "entites/Profile/models/actions/sendProfile";
import { DeleteMessage } from "features/MenuFormEdit/Messages";
import { StateMessage } from "share/ui/Message/ui/Message";
import { deleteProfile } from "entites/Profile/models/actions/deleteProfile";
import { useNavigate } from "react-router-native";
export const CheckBoxe: React.FC = memo(() => {
   const dispatch = useAppDispatch()
    const [check, setCheck] = useState<boolean>(false)
    const navigate = useNavigate()
    const [visible,setVisible] = useState<boolean>(false)
    const profile = useAppSelector((state) => state.ProfileReducer)
    const viewer = useAppSelector((state) => state.viewerReducer)
    const ChangeHandler = useCallback(() => {
         setCheck((prevState) => !prevState)
    }, [check])
    const ClickHandlerModal = () => {
          setVisible((prevState) =>  !prevState)
    }
    const ClickHandlerModalNo = () => {
     setVisible(false)
}

const ClickHandlerModalYes = () => {
     dispatch(deleteProfile({token: viewer.data.token, navigate: navigate}))
}
    const ClickHandler = useCallback(() => {
         dispatch(sendProfile({fio: profile.data.fio, selfemployment: profile.data.selfemployment, car : profile.data.car, birthday: profile.data.birthday, town: profile.data.cityId, token: viewer.data.token, navigate: navigate }))
    },[check, profile.data, profile.data.errors])
 return(<>
  <View style = {CheckBoxeStyle.CheckBoxContainer}>
   <View style = {CheckBoxeStyle.CheckBoxContainerInner}>
    <CheckBox
      value = {check}
      onChange={ChangeHandler}
     /> 
     <Text>При отправке данных, вы соглашаетесь со сбором и обработкой персональных данных</Text>
   </View>
   <View style = {CheckBoxeStyle.ButtonsContainer}>
     <CustomButton state= {ButtonState.ButtonEdit} color="#FFFFFF" disable = { Boolean(profile.data.selfemployment) && Boolean(profile.data.fio) && Boolean(profile.data.birthday) && Boolean(profile.data.car) && Boolean(profile.data.cityId) && check} title="Сохранить изменения" ClickHanlder={ClickHandler}/>
     <TouchableOpacity onPress={ClickHandlerModal} style = {CheckBoxeStyle.ImgCustom}>
          <Image source={require('../models/imgs/Button_delete.png')} />
     </TouchableOpacity>
   </View>
    
  </View>
  <DeleteMessage 
  visible = {visible}
  clickNo={ClickHandlerModalNo}
  clickYes={ClickHandlerModalYes}
  state= {StateMessage.WARNINGMESSAGE}
  />
 </>)
})