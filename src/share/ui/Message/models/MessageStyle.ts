import { StyleSheet } from "react-native";

export const MessageStyle = StyleSheet.create({
    MessageContainer: {
        position: 'absolute',
        height: 50,
        bottom: 0,
        display: 'flex',
        width: '100%',
        paddingHorizontal: 20
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