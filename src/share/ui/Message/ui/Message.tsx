import { View, Text } from "react-native"
import { MessageStyle } from '../models/MessageStyle'
import { useAppSelector } from "share/lib/hooks/useRedux"

export interface MessageInterface {
  children?: React.ReactNode
  visible?: boolean
}
export const Message: React.FC<MessageInterface>= (props) => {
  const {
     children,
     visible
  } = props
    return (<>
    {
        visible ?   <View style = {MessageStyle.MessageContainer}>
        <View style = {MessageStyle.InnerContainer}>
          {children}
        </View>
    </View> : undefined
    }
    

    </>)
}