import { ScrollView, View } from "react-native"
import { IntroStyle } from '../models/IntroStyle'
import { ProfileCard } from "entites/Profile"
import { useAppDispatch, useAppSelector } from "share/lib/hooks/useRedux"
import { useEffect } from "react"
import { getProfile } from "entites/Profile/models/actions/getProfile"
import { Loader } from "share/ui/Loader"
import { StateLoader } from "share/ui/Loader/ui/Loader"
export const Intro: React.FC = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.ProfileReducer.data.isLoading)
  const token = useAppSelector((state) => state.viewerReducer.data.token)
  useEffect(() => {
    if (token) {
      dispatch(getProfile(token))
    }
  },[])
    return (<>
    {
      isLoading ? <Loader state= {StateLoader.LOADMAP}/> :
      <ScrollView style = { IntroStyle.IntroContainer}>
       <ProfileCard/>
      </ScrollView>
    }
    
    
    </>)
}