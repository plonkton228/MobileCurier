import { Image, Text, TouchableOpacity, View } from "react-native"
import { ConditionsJobStyle } from "../models/ConditionsJobStyle"

export const ConditionsJob: React.FC = () => {
    return (<>
    <TouchableOpacity style = {ConditionsJobStyle.ConditionsJobContainer}>
      <View style = {ConditionsJobStyle.InnerContainer}>
        <Image source={require('../models/imgs/Order.png')}/>
        <Text style = {ConditionsJobStyle.Text}>Условия работы</Text>
      </View>
      <Image source={require('../models/imgs/ArrowBlack.png')}/>
    </TouchableOpacity>
    </>)
}