import { ErrorsTelephone } from "../models/types"

export const validate = (phone: string) => {
 const arr: ErrorsTelephone[] = []
 if (! phone.includes('+7') ) {
    arr.push(ErrorsTelephone.INCORRECT_PHONE)
 }

 return arr
}