﻿import { StyleSheet } from "react-native";

export const ProfileFormStyle = StyleSheet.create({
    FormContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 14,
        overflow: 'hidden'
     

    },

    NavigateContainer: {
     width: '100%',
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-evenly',
     paddingHorizontal: 20
    },

    InfoContainer: {
       marginTop: 34
    },

    TextDecorate: {
        width: '100%',
        fontFamily: 'SF-Pro-Display-Semibold',
        textAlign: 'center',
        color: '#000000',
        fontSize: 17,
        fontWeight: '600'
   
        
    }
})