import axios, { AxiosInstance } from "axios"

const BaseURL = "https://bottest2.menu4me.ru/api/v1/courier"

export class API {
    constructor () {
        this.apiInstance = axios.create(({
            baseURL: BaseURL,
        }))
    }

    apiInstance: AxiosInstance
}