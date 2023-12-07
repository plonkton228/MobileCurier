export enum ErrorsLocation {
    NO_GPS_AVAILABLE = 'У вас выключен GPS, пожалуйста включите его, иначе карта не будет работать',
    NO_PERMISSON = 'Вы не предоставили доступ к GPS'

}



 export interface Location {
    lat: number | undefined
    lon: number | undefined
 }
export interface LocationSchema {
    locationMap?: Location
    locationUser?: Location
    wayUser?: Location[]
    error?: ErrorsLocation
}