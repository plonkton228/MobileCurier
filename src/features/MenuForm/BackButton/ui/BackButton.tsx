import { memo } from "react"
import { Image, TouchableOpacity } from "react-native"
import { useNavigate } from "react-router-native"
import { BackButtonStyle } from '../models/BackButtonStyle'
export const BackButton: React.FC = memo(() => {
    const navigate = useNavigate()
    const ClickNavigate = () => {
        navigate('/MainPage')
    }
    return (<>
       <TouchableOpacity style = {BackButtonStyle.ButtonStyle} onPress={ClickNavigate}>
            <Image source={require('../models/imgs/ArrowBack.png')}/>
        </TouchableOpacity>  
    </>)
})