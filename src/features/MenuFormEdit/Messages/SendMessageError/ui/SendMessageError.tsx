import { View, Text, Image } from "react-native"
import { SendMessageErrorStyle } from './SendMessageErrorStyle'
import { useAppSelector } from "share/lib/hooks/useRedux"
import { Message } from "share/ui/Message"


export const SendMessageError: React.FC= () => {
    const visible  = useAppSelector((state) => state.messageReducer.errorSend)
    return (<>
    {
          <Message 
          visible = {visible}
          >
            <View style = {SendMessageErrorStyle.ContainerMessage}>
             <Image source={require('./models/imgs/close_ring_light.png')}/> 
             <Text style = {SendMessageErrorStyle.TextDecorate}>Не удалось отправить анкету на сервер</Text>
            </View>
          </Message>
    }
    

    </>)
}