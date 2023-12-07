import { Modal, View, Text, TextInput } from "react-native"
import { MessageStyle } from "../models/MessageStyle" 
export enum StateMessage {
    WARNINGMESSAGE = 'WARNINGMESSAGE'
}
interface MessageTemplate {
    state: StateMessage
    visible: boolean
    message?: string
    children: React.ReactNode
}
export const Message: React.FC<MessageTemplate> = ({ children, state, visible, message}) => {
    return (<>
     <Modal
       transparent={true}
     animationType= 'slide'
     visible = {visible}
     > 
       {children}
     </Modal>
          
     
    </>)
}