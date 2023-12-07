import { StyleSheet } from "react-native";

export const SelfButtonStyle = StyleSheet.create({
    ButtonSelfContainer: {
        paddingTop: 24,
        flex: 1,
    },

    InnerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16
    },

    Order: {
        color: '#000000',
        fontSize: 17,
        fontWeight: '600',
        fontFamily: 'SF-Pro-Display',
    },

    FirstButton: {
        width: '100%',
        maxWidth: 73
    },

    SecondButton: {
        width: '100%',
        maxWidth: 73
    },

    ThirdButton: {
        width: '100%',
        maxWidth: 182
    }

  
}) 