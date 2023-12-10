export const reConstructDate = (Date: string) => {
    const arrDate = Date.split('.')
    const response = arrDate.reverse().join('-')
    return response
}