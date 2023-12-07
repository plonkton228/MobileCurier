import { Image, Text, TouchableOpacity, View } from "react-native"
import { CodecsStyle } from "../models/CodecsStyle"
import { useAppSelector } from "share/lib/hooks/useRedux"
export const Codecs: React.FC = () => {
  const Profile = useAppSelector((state) => state.ProfileReducer)
    return (<>
    <TouchableOpacity style = {CodecsStyle.CodecsContainer}>
      <View style = {CodecsStyle.InnerContainer}>
        <Image source={require('../models/imgs/Book.png')}/>
        <Text style = {CodecsStyle.Text}>Кодекс курьера</Text>
      </View>
      <Image source={require('../models/imgs/ArrowBlack.png')}/>
    </TouchableOpacity>
    </>)
}