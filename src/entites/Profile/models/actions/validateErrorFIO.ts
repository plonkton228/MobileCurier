import { ErrorsFIO } from "../types"

export const validateErrorFIO = (FIO: string) => {
    const arrErrors: ErrorsFIO[] = []
    const arrFIO = FIO.split(' ')
    if (arrFIO.length !== 3) {
        arrErrors.push(ErrorsFIO.INCORRECT_FIO)
    }

    if (arrFIO[0]?.length <= 3 && arrFIO[1]?.length <=3 && arrFIO[2]?.length <=3) {
        arrErrors.push(ErrorsFIO.INCORRECT_FIO)
    }

    if( !arrFIO.every((word) => /^[a-zA-Zа-яА-Я]+$/.test(word)) ) {
        arrErrors.push(ErrorsFIO.INCORRECT_FIO)
    }

    return arrErrors
}