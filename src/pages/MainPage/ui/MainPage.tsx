import { memo } from "react"
import { useAppSelector } from "share/lib/hooks/useRedux";
import { Intro } from "widgets/Intro";
import { View, Text } from "react-native";
import { MainPageStyle } from './MainPageStyle'
export const MainPage: React.FC = memo(() => {
 
// getCurrentLocation()

const stateLocation= useAppSelector((state) => state.locationReducer)
   const idLoading = useAppSelector((state) => state.ProfileReducer.data.isLoading)

    return(<>
    <View style = {MainPageStyle.MainContainer}>
     <Intro/>
    </View>
         {/* {
            stateLocation.error && <Message message= {stateLocation.error } visible = {Boolean(stateLocation.error )} state= {StateMessage.WARNINGMESSAGE} />
         }
        { stateLocation.locationMap ?  <Map  locationMap={stateLocation.locationMap}/> : <Loader/>} */}
     

    </>)
})