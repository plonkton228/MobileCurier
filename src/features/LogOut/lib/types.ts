import { NavigateOptions, To } from "react-router-native";

export interface LogOutInterface {
    token: string
    navigate:  (to: To, options?: NavigateOptions) => void
}