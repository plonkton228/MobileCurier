import { View , Text, Modal} from "react-native"
import {  DeleteMessageStyle } from './DeleteMessageStyle'
import { ButtonState, CustomButton } from "share/ui/CustomButton"
export interface DeleteMessageInterface {
    visible: boolean,
    clickNo: () => void,
    clickYes: () => void

}
export const DeleteMessage: React.FC<DeleteMessageInterface> = (props) => {
    const  {
        visible,
        clickNo,
        clickYes
    } = props
    return (<>
    <Modal
     visible = {visible}
     transparent = {true}
    >
        <View style = {DeleteMessageStyle.BackGroundContainer} >
        </View>
        <View style = {DeleteMessageStyle.DeleteMessageContainer}>
            <View  style = {DeleteMessageStyle.innerContainer}>
             <Text  style = {DeleteMessageStyle.header}>Удалить анкету?</Text>
             <Text style = {DeleteMessageStyle.TextDecorate}>Ваши данные будут удалены</Text>
             <View style = {DeleteMessageStyle.ButtonContainer}>
                <CustomButton color= {'black'} disable = {true}  ClickHanlder={clickNo} state= {ButtonState.ButtonDeleteNo} title= 'Нет'/>
                <CustomButton color= {'white'} disable = {true} ClickHanlder={clickYes} state= {ButtonState.ButtonDeleteYes} title= 'Да'/>
             </View>
            </View>
        </View>
    </Modal>
    </>)
}