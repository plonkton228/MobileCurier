import { CodeSchema } from "entites/Code";
import { LocationSchema } from "entites/Map/models/types";
import { TelephoneSchema } from "entites/Telephone";
import { ViewerSchema } from "entites/Viewer";
import { NavigateFunction } from "react-router-native";


export interface GlobalSchema {
    location : LocationSchema,
    telephone: TelephoneSchema,
    code: CodeSchema,
    viewer: ViewerSchema,
    
}

interface ExtraThunkConfig  {
   navigate: NavigateFunction
}
export interface ThunkConfig<T> {
    state: GlobalSchema,
    rejectValue: T,
    extra: ExtraThunkConfig
}
