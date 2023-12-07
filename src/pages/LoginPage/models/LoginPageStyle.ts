import { StyleSheet } from "react-native";

export const LoginPageStyle = StyleSheet.create({
    LoginContaienr: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 40,
        paddingLeft: 24,
        paddingRight: 24,
        height: '100%',
        flex: 1
    },
    InputContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 44,
        flex: 1,
       
    },
    ButtonContainer: {
        display: 'flex',
        flex: 1,
        width: '80%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingBottom: 20
    }
})