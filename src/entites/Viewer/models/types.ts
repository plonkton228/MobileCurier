import { ErrorsCode } from "features/Login/enterCode/models/types"
import { ErrorsTelephone } from "features/Login/enterNumber/models/types"

interface Session {
    session?: string,
    token?: string
}

export interface ViewerSchema {
   data?: Session,
   isLoading: boolean,
   errorsCode: ErrorsCode[],
   errorsTelephone: ErrorsTelephone[],
   result: boolean
}