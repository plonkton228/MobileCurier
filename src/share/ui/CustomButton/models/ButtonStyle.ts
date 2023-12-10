import { StyleSheet } from "react-native";

export const ButtonStyle = StyleSheet.create({
    ButtonLogin: {
        fontFamily: 'SF-Pro-Display-Semibold',
        backgroundColor: '#EA394B',
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 14,
        color: '#FFFFFF',
        borderRadius: 16,
        width: "100%"
    },
    ButtonResetPhone: {
        fontFamily: 'SF-Pro-Display-Semibold',
        width: '100%',
        alignItems: 'center'
    },

    ButtonLogOut: {
        fontFamily: 'SF-Pro-Display-Semibold',
        paddingRight: 6,
    },

    ButtonFillProfile: {
        fontFamily: 'SF-Pro-Display-Semibold',
        color: 'black'
    },
    TextGreen: {

    },

    ButtonDisable: {
        opacity: 0.5
    },

    ButtonNone: {

    },


    ButtonSelf: {
        borderRadius: 24,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 17,
        paddingVertical: 15,
        color: '#2C2E32'
      },
  
      ButtonPressed: {
        borderColor: '#2C2E32',
        borderWidth: 1,
        backgroundColor: '#FAFAFA',
      },

      ButtonDeleteNo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        paddingVertical: 14,
        backgroundColor: '#F5F5F5',
        flex: 1,
        textAlign: 'center',
        color: 'white'
      },

      ButtonDeleteYes: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        paddingVertical: 14,
        backgroundColor: '#EA394B',
        flex: 1,
        marginLeft: 100,
        color: 'white'
      },
      ButtonEdit: {
        fontFamily: 'SF-Pro-Display-Semibold',
        backgroundColor: '#EA394B',
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 14,
        color: '#FFFFFF',
        borderRadius: 16,
        flex: 1,
      }
})