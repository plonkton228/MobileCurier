import {  View, ActivityIndicator } from "react-native"
import { LoaderStyle } from "../models/LoaderStyle"
export enum StateLoader {
    LOADMAP = 'LOADMAP'
}
interface LoaderTemplate {
    state?: StateLoader

}
export const Loader: React.FC<LoaderTemplate> = ({state}) => {
    return (<>
   
    <View style = {LoaderStyle.LoadContainer}>
     <ActivityIndicator
     size={'large'}
     color={"#0000ff"}
     />
    </View>
          
     
    </>)
}