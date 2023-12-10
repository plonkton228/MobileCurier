import { BackButton, InputsInfo, SelectionTown, SendMessageError } from 'features/MenuFormEdit'
import { CheckBoxe } from 'features/MenuFormEdit/CheckBox'
import { SelfemploymentButton } from 'features/MenuFormEdit/SelfemploymentButton'
import { ScrollView, View, Text, ViewStyle, Keyboard } from 'react-native'
import { ProfileEditStyle } from './ProfileEditStyle'
import { useEffect, useState } from 'react'
export const ProfileEdit: React.FC = () => {
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
    return(<>

    <View style = {ProfileEditStyle.FormContainer}>
        <View style = {ProfileEditStyle.NavigateContainer}>
         <BackButton/>
         <Text style = {ProfileEditStyle.TextDecorate}>Моя анкета</Text>
        </View>
        <View style = {ProfileEditStyle.InfoContainer}>
          <SelectionTown/>
          <InputsInfo/>
        </View>
        <SelfemploymentButton/>
        <CheckBoxe addStyle={addStyle}/>
     </View>
    <SendMessageError/>
    </>)
}