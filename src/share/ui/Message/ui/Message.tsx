import { Modal, View, Text, TextInput } from "react-native"
import { MessageStyle } from "../models/MessageStyle" 
export enum StateMessage {
    WARNINGMESSAGE = 'WARNINGMESSAGE'
}
interface MessageTemplate {
    state: StateMessage
    visible: boolean
    transparent: boolean
    message?: string
    children: React.ReactNode
}
export const Message: React.FC<MessageTemplate> = (props) => {
  const {
  visible,
  children,
  transparent
  } = props
    return (<>
     <Modal
    transparent={true}
     animationType= 'slide'
     visible = {visible}
     style = {{ position: 'absolute', zIndex: -10}}
     hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}
     > 
       {children}
     </Modal>
          
     
    </>)
}