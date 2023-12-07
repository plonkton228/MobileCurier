import { memo } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
interface DatePickerInterface {
    isVisible: boolean
    onConfirm: (date: Date) => void
    date: Date
}
export const DatePicker: React.FC<DatePickerInterface> = memo((props) => {
    const {
        isVisible,
        onConfirm,
        date
    } = props
    return (<>
    <DateTimePickerModal
      isVisible = {isVisible}
      onConfirm={onConfirm}
      onCancel={() => console.log('hi')}
      mode="date"
      date={date}
     style = {{ width: 100, height: 100, borderColor: 'black'}}
    />
    
    </>)
})