import {Image, Keyboard, ScrollView, View, ViewStyle} from 'react-native'
import { LoginPageStyle } from '../models/LoginPageStyle'
import { InputCode, InputNumber, sentNumber } from 'features/Login'
import { ButtonState, CustomButton } from 'share/ui/CustomButton'
import { useAppDispatch, useAppSelector } from 'share/lib/hooks/useRedux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-native'
import { setSession, setToken } from 'entites/Viewer'
import { User } from 'entites/Profile'
import { setTelephone } from 'entites/Telephone'
import { getProfile } from 'entites/Profile/models/actions/getProfile'
export const LoginPage: React.FC = () => {
    const viewer = useAppSelector((state) => state.viewerReducer)
    const telephone = useAppSelector((state) => state.telephoneReducer)
    const [addStyle, setStyle] = useState<ViewStyle>(undefined)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const ClickHandler = () => {
        dispatch(sentNumber(telephone.telephone))
    }
    useEffect(() => {
        const user =  AsyncStorage.getItem('user')
        user.then((response) => {
            const user: User = JSON.parse(response)
            if (user.session && user.token) {
                dispatch(setSession(user.session))
                dispatch(setToken(user.token))
                dispatch(setTelephone(user.telephone))
                dispatch(getProfile(user.token))
                navigate('/MainPage')
            }
        }) 

        Keyboard.addListener('keyboardDidShow', () => {
            setStyle({display: 'none'})
      
          })
          Keyboard.addListener('keyboardDidHide', () => {
            setStyle(undefined)
          })
          return () => {
            Keyboard.removeAllListeners('keyboardDidHide,keyboardDidShow')
          }

    }, [])

    return (<>
       <ScrollView contentContainerStyle = { LoginPageStyle.LoginContaienr }>
       <Image  source={require('../models/imgs/logo.png')}/>
           <View style = { LoginPageStyle.InputContainer }>
             <InputNumber/>
            </View>
            {
             viewer.result ? <View style = { LoginPageStyle.InputContainer }>
              <InputCode/>
              </View> : undefined
            }
            <View style = { [LoginPageStyle.ButtonContainer, addStyle] }>
             <CustomButton ClickHanlder={ClickHandler}  disable = {telephone.useable && Boolean(telephone.telephone?.length === 18)  } state = {ButtonState.ButtonLogin} title='Отправить код'/>
            </View>
       </ScrollView>
    </>)
}