import { Image, Text, TouchableOpacity, View } from "react-native"
import { FAQStyle } from "../models/FAQStyle"

export const FAQ: React.FC = () => {
    return (<>
    <TouchableOpacity style = {FAQStyle.FAQContainer}>
      <View style = {FAQStyle.InnerContainer}>
        <Image source={require('../models/imgs/Question.png')}/>
        <Text style = {FAQStyle.Text}>FAQ</Text>
      </View>
      <Image source={require('../models/imgs/ArrowBlack.png')}/>
    </TouchableOpacity>
    </>)
}