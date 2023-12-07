export const phoneModifictaion = (phone: string) => {
  let arrPhone = Array.from(phone)
   arrPhone = arrPhone.filter((el) =>  {
      if (el === ' ') {
        return false
      }

      if (el === '(') {
        return false
      }

      if (el === ')') {
        return false
      }

      return true
   })

   return arrPhone.join('')
}