import { View, Text, Keyboard,  ViewStyle  } from "react-native"
import { ProfileFormStyle } from "./ProfileFormStyle"
import { BackButton } from "features/MenuForm/BackButton"
import { SelectionTown } from "features/MenuForm/SelectionTown/SelectionTown"
import { InputsInfo } from "features/MenuForm"
import { SelfemploymentButton } from "features/MenuForm/SelfemploymentButton"
import { CheckBoxe } from "features/MenuForm/CheckBox"
import { SendMessageError } from "features/MenuFormEdit"
import { useEffect, useState } from "react"
export const ProfileForm: React.FC = () => {
  const [addStyle, setStyle] = useState<ViewStyle>(undefined)

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setStyle({display: 'none'})

    })
    Keyboard.addListener('keyboardDidHide', () => {
      setStyle(undefined)
    })

    return () => {
      Keyboard.removeAllListeners('keyboardDidHide,keyboardDidShow')
    }
  }, [])
    return (<>
    
    <View
    style = {ProfileFormStyle.FormContainer}>
        <View style = {ProfileFormStyle.NavigateContainer}>
         <BackButton/>
         <Text style = {ProfileFormStyle.TextDecorate}>Заполните анкету</Text>
        </View>
        <View style = {ProfileFormStyle.InfoContainer}>
          <SelectionTown/>
          <InputsInfo/>
        </View>
        <SelfemploymentButton/>
        <CheckBoxe addStyle ={addStyle}/>
     </View>
   
    <SendMessageError/>
 
    </>)
}