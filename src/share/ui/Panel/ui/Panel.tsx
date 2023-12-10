import { Button, Image, Modal, Text, TouchableOpacity, View } from "react-native"
import { StylePanel } from "../models/StylePanel"
import { useAppSelector } from "share/lib/hooks/useRedux"
import  WebView  from 'react-native-webview';
import { useRef, useState } from "react";
export enum PanelState {
  PANEL_PROFILE = 'PanelProfile'
}
export interface PanelInterface {
    link: string
    text: string
    state: PanelState
}
export const Panel: React.FC<PanelInterface> = (props) => {
    const {
       link,
       text,
       state,
    } = props
const Profile = useAppSelector((state) => state.ProfileReducer)
const [visible, setVisible] = useState<boolean>(false)
const handlerClick = () => {
  setVisible((prevState) => !prevState)
}
    return (<>
    {
      visible ? 
      <Modal
      visible = {visible}
      >
      <View style = {{flex: 1}}>
          <View style ={StylePanel.Header}>
            <TouchableOpacity onPress={handlerClick}>
             <Image source={require('../models/imgs/arrowBack.png')}/>
             </TouchableOpacity>
             <View style = {StylePanel.AlignContainer}>
              <Image style ={{ justifyContent: 'center', maxHeight: 30, maxWidth: 30}} source={require('../models/imgs/logo.png')}/>
             </View>
           </View>
     
           <WebView 
           source={{ uri: link }}
           >
           </WebView>
         
      </View>
      </Modal>
      :
      <TouchableOpacity onPress={handlerClick} style = {StylePanel[state]} >
       <View style = {StylePanel.InnerContainer}>
        <Image source={require('../models/imgs/Book.png')}/>
        <Text style = {StylePanel.Text}>{text}</Text>
       </View>
       <Image source={require('../models/imgs/ArrowBlack.png')}/>
      </TouchableOpacity>

    }

  
    </>)
}