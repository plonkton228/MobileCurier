import RNPickerSelect from 'react-native-picker-select';
import { Items } from '../models/types';
import {SelectionStyle } from '../models/SelectionStyle'
import { View } from 'react-native';
interface SelectionInterface {
  items: Array<Items>,
  value: number,
  onChange: (e: number) => void
}
export const Selection: React.FC<SelectionInterface> = (props) => {
    const {
      items,
      value,
      onChange
    } = props
    
    return(<>
    <View style = {{borderRadius: 16, borderColor: '#F3F3F3', borderWidth: 1, overflow: 'hidden'}}> 
    <RNPickerSelect
    placeholder={{label: 'Выбор города',value: undefined}}
    style={SelectionStyle}
    value={value}
    onValueChange={onChange}
    items={items}
    
    />
    </View>
 
    </>)
}