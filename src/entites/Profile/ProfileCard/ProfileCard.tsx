import { Codecs, ConditionsJob, FAQ } from "features/MenuCard"
import { LogOut } from "features/LogOut"
import { View, Text, ScrollView } from "react-native"
import {  useAppSelector } from "share/lib/hooks/useRedux"
import { ProfileCardStyle } from './ProfileCardStyle'
import { ManageProfileType, ManageUser } from "features/MenuCard/ManageProfile/ManageUser"
import { DeleteMessageSuccess, SendMessageSuccess } from "features/MenuFormEdit/Messages"
export const ProfileCard: React.FC = () => {
    const telephone = useAppSelector((state) => state.telephoneReducer)
    const profile = useAppSelector((state) => state.ProfileReducer)
    return (<>
       <ScrollView>
      <View style = {ProfileCardStyle.CardContainer}>
          <View style = {ProfileCardStyle.HeadContainer}>
           <Text style = {ProfileCardStyle.Telephone}>{telephone.telephone}</Text> 
           <LogOut/>
          </View>
          <View style = {ProfileCardStyle.Hr}/>
          <View style = {ProfileCardStyle.FooterContainer}>
            {
              profile.data.isCourier ? undefined : profile.data.isUser ?  <ManageUser type= {ManageProfileType.User}/> : <ManageUser type= {ManageProfileType.NoUser}/>
            }
          </View>
        </View>
        <ConditionsJob/>
          <FAQ/>
          <Codecs/>
      </ScrollView>
      <DeleteMessageSuccess/>
      <SendMessageSuccess/>
    </>)
}