import { StyleSheet } from "react-native";

export const DeleteMessageSuccessStyle = StyleSheet.create({
    MessageContainer: {
        display: 'flex',
        width: '100%',
        padding: 20,
    },
    InnerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 16,
        backgroundColor: 'black',
        padding: 10
    },
    TextDecorate: {
        color: 'white'
    }
})