
export interface User {
    telephone?: string,
    token?: string,
    session?: string,
}


export interface ErrorsProfile {
    'data.cityId': string[],
    'data.fio': string[],
    'data.car': string[],
    'data.birthday': string[]
} 


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
        errors: ErrorsProfile
    }
}