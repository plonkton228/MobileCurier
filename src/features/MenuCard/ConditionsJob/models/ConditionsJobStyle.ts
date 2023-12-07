import { StyleSheet } from "react-native";

export const ConditionsJobStyle = StyleSheet.create({
    ConditionsJobContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        padding: 20,
        borderRadius: 16,
        backgroundColor: '#FFFF'
    },
    InnerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Text: {
        color: 'black',
        marginLeft: 10
    }
})