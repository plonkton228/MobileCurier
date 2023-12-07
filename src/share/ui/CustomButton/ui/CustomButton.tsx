import { TouchableOpacity, Text, Image , StyleProp, ViewStyle, TextStyle} from "react-native"
import { ButtonStyle } from "../models/ButtonStyle"
export enum ButtonState {
  ButtonLogin = 'ButtonLogin',
  ButtonResetPhone = 'ButtonResetPhone',
  ButtonLogOut = 'ButtonLogOut',
  ButtonFillProfile = 'ButtonFillProfile',
  ButtonSelf = 'ButtonSelf',
  ButtonDeleteNo = 'ButtonDeleteNo',
  ButtonDeleteYes = 'ButtonDeleteYes',
  ButtonEdit = 'ButtonEdit'
}
interface CustomButton  {
    state: ButtonState,
    title: string,
    disable?: boolean,
    // Переменная регулирующая цвет текста
    color?: string,
    // Добавляем дополнительные стили
    addStyle?: StyleProp<ViewStyle | TextStyle>
    // Индекс для выделения кнопки
    indexButton?: number
    // Индекс который мы получаем из родительского компонента для сравнения с индексом кнопки
    stateIndex?: number
    // Переменная определяющая надо ли работать с индексами
    workWithIndex?: boolean
    ClickHanlder?: (indexButton?: number) => void
}

export  const CustomButton: React.FC<CustomButton> = (props) => {
  const {
   title,
   state,
   disable,
   color,
   indexButton,
   stateIndex ,
   workWithIndex,
   addStyle,
   ClickHanlder
  } = props
  
  return (<>
        <TouchableOpacity
         disabled = {!disable}
         onPress={ () => ClickHanlder(indexButton)}
         style = {[ButtonStyle[state], disable? ButtonStyle.ButtonNone: ButtonStyle.ButtonDisable,
          workWithIndex && stateIndex === indexButton? ButtonStyle.ButtonPressed : ButtonStyle.ButtonNone, // добавляем стиль если индексы совпадают
          addStyle
        ]}
        >
          <Text style ={{color: color || 'grey'}} >{title}</Text>
        </TouchableOpacity>
  </>)
}