import { useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation'
import { ErrorsLocation} from '../../../entites/Map/models/types'
import {  setError, setLocationMap, setLocationUser, setWayUser } from '../../../entites/Map/models/locationSlice';
import { useAppDispatch, useAppSelector } from 'share/lib/hooks/useRedux';






export const getCurrentLocation =  () => {
  const dispatch = useAppDispatch()
  const way = useAppSelector((state) => state.locationReducer)
  useEffect(() => {
  
    Geolocation.requestAuthorization(
       (() => {
          Geolocation.getCurrentPosition((loc) => {
             dispatch(setLocationMap({lat: loc.coords.latitude, lon: loc.coords.longitude}) )
          }, () => {dispatch(setError(ErrorsLocation.NO_GPS_AVAILABLE))}, {enableHighAccuracy: true})
       }),
       ((error) => {
              dispatch(setError(ErrorsLocation.NO_PERMISSON))   
       })
    )

    Geolocation.watchPosition((loc) => {
      dispatch(setLocationUser({lat: loc.coords.latitude, lon: loc.coords.longitude}))
      dispatch(setWayUser([{lat: loc.coords.latitude, lon: loc.coords.longitude}]))
   },() => { dispatch(setError(ErrorsLocation.NO_GPS_AVAILABLE))}, { enableHighAccuracy: true, distanceFilter: 5} )


 },[])
//  let arr: Location[] = []
//  BackgroundTimer.runBackgroundTimer(() => { 
  
//  const t = Geolocation.watchPosition((loc) => {
   
//       arr.push({lat: loc.coords.latitude, lon: loc.coords.longitude})
//       console.log(arr.length)
//       if(arr.length > 20) {
//          alert(arr)
//       }
//       dispatch(setLocationUser({lat: loc.coords.latitude, lon: loc.coords.longitude}))
//       dispatch(setWayUser([{lat: loc.coords.latitude, lon: loc.coords.longitude}]))
//       Geolocation.clearWatch(t)
//    },() => { dispatch(setError(ErrorsLocation.NO_GPS_AVAILABLE))}, { enableHighAccuracy: true, distanceFilter: 5} )
   
//    }, 
//    3000)
        

      
}