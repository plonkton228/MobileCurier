import { useRef } from 'react';
import { YaMap,Marker, Polyline } from 'react-native-yamap';
import { useAppSelector } from 'share/lib/hooks/useRedux';
import { MapStyles } from './MapStyle';

interface MapTemplate {
  locationMap: {
    lat: number 
    lon : number
   },
   locationUser?: {
    lat: number 
    lon : number
   }
}
export const Map: React.FC<MapTemplate> = ({locationMap, locationUser}) => {
    const refMap = useRef<YaMap>()
    const locationUsers = useAppSelector((state) => state.locationReducer)
    const wayUser = useAppSelector((state) => state.locationReducer.wayUser)
  return (<>
  <YaMap
   ref={refMap}
   followUser = {false}
   showUserPosition = {false}
   initialRegion={
     {
       lat: locationMap.lat,
       lon: locationMap.lon,
       zoom: 15
     }
   }
   style = {MapStyles.mapContainer}
 > 
   
   { locationUsers.locationUser && <Marker 
  scale={3}
  point={{ lat: locationUsers?.locationUser?.lat, lon: locationUsers?.locationUser?.lon }}/>
   }

  {
    wayUser && <Polyline 
    points={wayUser}
    strokeColor='red'
    />
  }
 </YaMap>
 
  
  </>)
}