import { Image, Text, TouchableOpacity, View } from "react-native"
import { ManageProfileStyle } from "../models/ManageProfileStyle"
import { memo } from "react"
import { useNavigate } from "react-router-native"
import { PathRouts } from "app/providers/Router/lib/Store"
export const ManageProfileUser: React.FC = memo(() => {
  const navigate = useNavigate()
  const ClickNavigate = () => {
      navigate(PathRouts.EditForm)
  }
    return (<>
    <TouchableOpacity onPress={ClickNavigate}>
      <View style = {ManageProfileStyle.MainContainer}>
   <View style = {ManageProfileStyle.InnerContainer}>
       <View style = {ManageProfileStyle.alignContainer}>
        <Image source={require('../models/imgs/User_scan_light.png')}/>
         <Text style = {ManageProfileStyle.Text}>Моя анкета</Text>
       </View>
        <Image source={require('../models/imgs/ArrowBlack.png')}/>
      </View>
       <View style = {ManageProfileStyle.ImgContainer}>
           <Image source={ require('../models/imgs/Subtract.png') }/>
           <Text style = {ManageProfileStyle.Text}>  Ваша анкета на рассмотрении </Text>
       </View>
      </View>
    </TouchableOpacity>
    </>)
})