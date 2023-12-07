import { NavigateOptions, To } from 'react-router-native'

export enum ErrorsCode {
    ERROR_SERVER = 'ERROR_SERVER',
    INCORRECT_CODE = 'INCORRECT_CODE'
}

export interface ResponseAction {
    result: number,
    data: {
        token: string,
        message: string
    }
}
export interface RequestAction {
   session: string,
   code: string,
   telephone: string,
   navigate:  (to: To, options?: NavigateOptions) => void;
}

