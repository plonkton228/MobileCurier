export const reConstructDate = (Date: string) => {
    const arrDate = Date.split('')
    arrDate.forEach((value,index) => {
        if (value == '.') {
            arrDate.splice(index, 1, '-')
        }
    })

    return arrDate.join('')
}