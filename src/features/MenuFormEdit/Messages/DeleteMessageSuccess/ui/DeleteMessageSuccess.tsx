import { View, Text } from "react-native"
import { DeleteMessageSuccessStyle } from './DeleteMessageSccessStyle'
import { useAppSelector } from "share/lib/hooks/useRedux"
import { Message } from "share/ui/Message"


export const DeleteMessageSuccess: React.FC= () => {
    const visible  = useAppSelector((state) => state.messageReducer.succesDelete)
    return (<>
    {
          <Message 
          visible = {visible}
          >
            <Text style = {DeleteMessageSuccessStyle.TextDecorate}>Ваша анкета удалена</Text>
          </Message>
    }
    

    </>)
}