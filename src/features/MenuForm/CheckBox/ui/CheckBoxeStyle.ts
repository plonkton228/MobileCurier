import { StyleSheet } from "react-native";

export const CheckBoxeStyle = StyleSheet.create({
    CheckBoxContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingTop: "65%"
  
    },

    CheckBoxContainerInner: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10,
    },
    CheckBox: {
        backgroundColor: '#FFFFFF'
    }
})