import { BackButton, InputsInfo, SelectionTown } from 'features/MenuFormEdit'
import { CheckBoxe } from 'features/MenuFormEdit/CheckBox'
import { SelfemploymentButton } from 'features/MenuFormEdit/SelfemploymentButton'
import { ScrollView, View, Text } from 'react-native'
import { ProfileEditStyle } from './ProfileEditStyle'
export const ProfileEdit: React.FC = () => {
    return(<>
      <ScrollView style = {{flex: 1}}>
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
        <CheckBoxe/>
     </View>
    </ScrollView>
    </>)
}