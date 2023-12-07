import { ErrorsDates } from "../types"

export const validateErrorDate = (date: string) => {
    const arrErrors: ErrorsDates[] = []
    const arrDate = date.split('.')
    const correctLastDay = new Date(Number(arrDate[0]), Number(arrDate[1]), 0).getDate()

    if (Number(arrDate[0]) >= 2015  ||  Number(arrDate) <= 1940)  {
        arrErrors.push(ErrorsDates.INCORRECT_DATE)
    }

    if (Number(arrDate[1]) > 12 || Number(arrDate[1]) < 1 ) {
        arrErrors.push(ErrorsDates.INCORRECT_DATE)
    } 

   

    if (Number(arrDate[2]) > correctLastDay || Number(arrDate[2]) < 1 ) {
        arrErrors.push(ErrorsDates.INCORRECT_DATE)
    }


    return arrErrors
}