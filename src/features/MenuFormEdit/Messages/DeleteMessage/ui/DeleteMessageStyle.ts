import { StyleSheet } from "react-native";

export const DeleteMessageStyle = StyleSheet.create({
    DeleteMessageContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'center',
        flex:1,
        zIndex: 100
    },

    BackGroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.4,
        width : '100%',
        height: '100%'
    },

    innerContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 213,
        textAlign: 'left',
        padding: 20
        


       
    },

    header: {
        fontSize: 24,
        fontFamily: 'SF-Pro-Display-Semibold'
    },

    TextDecorate: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Display-Medium'
    },

    ButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 32

    }
})