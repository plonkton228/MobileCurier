export const reConstructDateGet = (Date: string) => {
    const arrDate = Date?.split('-')
    const response = arrDate?.reverse()?.join('.')
    return response
}