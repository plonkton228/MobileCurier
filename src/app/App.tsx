/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {  useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import YaMap from "react-native-yamap"
import { Provider } from 'react-redux';

import { Routing } from './providers/Router';
import { NativeRouter, useNavigate } from "react-router-native";
import { View } from 'react-native';
import { MainStyle } from './models/MainStyle';
import { store } from './providers/Redux';

function App() {

 const [initial,setInitila] = useState<boolean>(false)
  YaMap.init('56644251-972a-4300-8ca7-06c0aa02190c').then(() => {
     setInitila(true)
  })
 
  Geolocation.setRNConfiguration({
    locationProvider: "android",
    skipPermissionRequests: false
  })
  
return (<>

<NativeRouter>
  <Provider store={store}>
  <View style = {MainStyle.MainContainer}>
     <Routing/>
    </View>
  </Provider>
</NativeRouter>



  
</>)
}

export default App;
