import { View, Text, Image } from "react-native"
import { SendMessageSuccessStyle } from './SendMessageSuccessStyle'
import { useAppSelector } from "share/lib/hooks/useRedux"
import { Message } from "share/ui/Message"


export const SendMessageSuccess: React.FC= () => {
    const visible  = useAppSelector((state) => state.messageReducer.successSend)
    return (<>
    {
          <Message 
          visible = {visible}
          >
            <View style = {SendMessageSuccessStyle.ContainerMessage}>
             <Image source={require('./models/imgs/Check_ring_light.png')}/> 
             <Text style = {SendMessageSuccessStyle.TextDecorate}>Ваша анкета отправлена</Text>
            </View>
          </Message>
    }
    

    </>)
}