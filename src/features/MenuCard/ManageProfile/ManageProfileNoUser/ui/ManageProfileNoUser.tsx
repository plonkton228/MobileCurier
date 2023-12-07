import { Image, Text, TouchableOpacity, View } from "react-native"
import { ManageProfileStyle } from "../models/ManageProfileStyle"
import { memo } from "react"
import { useNavigate } from "react-router-native"
export const ManageProfileNoUser: React.FC = memo(() => {
  const navigate = useNavigate()
  const ClickNavigate = () => {
      navigate('/Form')
  }
    return (<>
    <TouchableOpacity onPress={ClickNavigate} style = {ManageProfileStyle.FillProfileContainer}>
      <View style = {ManageProfileStyle.InnerContainer}>
        <Image source={require('../models/imgs/User_scan_light.png')}/>
        <Text style = {ManageProfileStyle.Text}>Заполнить анкету</Text>
      </View>
      <Image source={require('../models/imgs/Arrow.png')}/>
    </TouchableOpacity>
    </>)
})