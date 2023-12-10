import { StyleSheet } from "react-native";

export const StylePanel = StyleSheet.create({
    PanelProfile: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        padding: 20,
        borderRadius: 16,
        backgroundColor: '#FFFF',
    },
    WebViewBlock: {
        position: 'absolute',
        height: "105%",
        width: '115%',
        zIndex: 10,
        backgroundColor: 'black'
    },
    InnerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Text: {
        color: 'black',
        marginLeft: 10
    },
    Header: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        padding:15,
        backgroundColor: 'white'
    },
    AlignContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})