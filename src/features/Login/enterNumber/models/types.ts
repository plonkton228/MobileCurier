export interface ResponseAction {
    result: boolean,
    viewReset: boolean,
    data: {
        session: string,
        message: string
    }
}

export enum ErrorsTelephone {
    ERROR_SERVER = 'ERROR_SERVER',
    INCORRECT_PHONE = 'INCORRECT_PHONE'
}