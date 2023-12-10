import { StyleSheet } from "react-native";

export const CheckBoxeStyle = StyleSheet.create({
    CheckBoxContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
  
    },

    CheckBoxContainerInner: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    CheckBox: {
        backgroundColor: '#FFFFFF'
    }
})