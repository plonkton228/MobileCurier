import { useAppDispatch, useAppSelector } from "share/lib/hooks/useRedux";
import { ButtonState, CustomButton } from "share/ui/CustomButton";
import { memo, useCallback } from "react"
import { useNavigate } from "react-router-native";
import { logOut } from "../lib/logOut";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "entites/Profile";
import { Image, TouchableOpacity, View } from "react-native";
import { LogOutStyle } from '../models/LogOutStyle'
export const LogOut: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const ClickHandler = useCallback(() => {
      AsyncStorage.getItem('user').then((response) => {
        const user : User = JSON.parse(response)
        dispatch(logOut({navigate, token: user.token}))
      })
    },[dispatch])
    return (<>
    <TouchableOpacity style = {LogOutStyle.LogOutContainer}>
      <CustomButton disable = {true} ClickHanlder={ClickHandler} title = 'Выйти' state= {ButtonState.ButtonLogOut}/>
      <Image source = {require('../models/imgs/Sign_in_circle_light.png')}/>
    </TouchableOpacity>
      
    </>)
}