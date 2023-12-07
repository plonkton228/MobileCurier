import { View, Text } from "react-native"
import { DeleteMessageSuccessStyle } from './DeleteMessageSccessStyle'
import { useAppSelector } from "share/lib/hooks/useRedux"


export const DeleteMessageSuccess: React.FC= () => {
    const visible  = useAppSelector((state) => state.messageReducer.succesDelete)
    return (<>
    {
        visible ?   <View style = {DeleteMessageSuccessStyle.MessageContainer}>
        <View style = {DeleteMessageSuccessStyle.InnerContainer}>
            <Text style = {DeleteMessageSuccessStyle.TextDecorate}>Ваша анкета удалена</Text>
        </View>
    </View> : undefined
    }
    

    </>)
}