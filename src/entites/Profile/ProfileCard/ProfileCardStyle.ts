import { StyleSheet } from "react-native";
export const ProfileCardStyle = StyleSheet.create({
    CardContainer: {
        padding: 20,
        borderRadius: 16,
        backgroundColor: '#FFFF'
    },
    HeadContainer : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',


    },
    Hr: {
        height: 1,
        backgroundColor: '#F5F5F5',
        width: '100%',
        marginVertical: 20,
    },
    Telephone: {
        fontWeight: '600',
        fontSize: 24,
        color: 'black'
        
    },

    FooterContainer: {
  
    }
})