import { View, Text, ScrollView, Dimensions } from "react-native"
import { ProfileFormStyle } from "./ProfileFormStyle"
import { BackButton } from "features/MenuForm/BackButton"
import { SelectionTown } from "features/MenuForm/SelectionTown/SelectionTown"
import { InputsInfo } from "features/MenuForm"
import { SelfemploymentButton } from "features/MenuForm/SelfemploymentButton"
import { CheckBoxe } from "features/MenuForm/CheckBox"
import { SendMessageError } from "features/MenuFormEdit"
export const ProfileForm: React.FC = () => {
    return (<>
    <ScrollView style = {{flex: 1}}>
    <View style = {ProfileFormStyle.FormContainer}>
        <View style = {ProfileFormStyle.NavigateContainer}>
         <BackButton/>
         <Text style = {ProfileFormStyle.TextDecorate}>Заполните анкету</Text>
        </View>
        <View style = {ProfileFormStyle.InfoContainer}>
          <SelectionTown/>
          <InputsInfo/>
        </View>
        <SelfemploymentButton/>
        <CheckBoxe/>
     </View>
    </ScrollView>
    <SendMessageError/>
 
    </>)
}