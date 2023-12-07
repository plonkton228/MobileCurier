
export interface User {
    telephone?: string,
    token?: string,
    session?: string,
}
export enum ErrorsFIO {
    INCORRECT_FIO = 'INCORRECT_FIO'
}

export enum ErrorsCar {
    INCORRECT_CAR = 'INCORRECT_CAR'
}

export enum ErrorsDates {
    INCORRECT_DATE = 'INCORRECT_DATE'
}

export type ErrorsProfile = ErrorsFIO | ErrorsCar | ErrorsDates

export interface Menu {
   name: string,
   link: string
}

export interface Citie {
    id: number,
    name: string,
    timezone: number
}
export interface Profile {
    data: {
        user: User,
        cityId: number,
        fio: string,
        car: string,
        birthday: string
        isCourier?: boolean,
        isUser?: boolean,
        selfemployment?: number
        menu: Array<Menu>,
        cities: Array<Citie>,
        isLoading: boolean,
        errors: ErrorsProfile[]
    }
}