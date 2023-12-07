import { ProfileEdit, ProfileForm } from 'entites/Profile'
import { LoginPage } from 'pages/LoginPage/ui/LoginPage'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-native'



enum RoutsName  {
   LoginPage = 'LoginPage',
   MainPage = 'MainPage',
   Form = 'Form',
   EditForm = 'EditForm'
}

export const PathRouts: Record<RoutsName, string> =  {
    [RoutsName.LoginPage]: '/',
    [RoutsName.MainPage]: '/MainPage',
    [RoutsName.Form]: '/Form',
    [RoutsName.EditForm]: '/EditForm'
}


export const Routs: Record<RoutsName, RouteProps> = {
      [RoutsName.LoginPage]: {
        path: PathRouts.LoginPage,
        element: <LoginPage/>
      },

      [RoutsName.MainPage]: {
        path: PathRouts.MainPage,
        element: <MainPage/>
      },
      [RoutsName.Form]: {
        path: PathRouts.Form,
        element: <ProfileForm/>
      },
      [RoutsName.EditForm]: {
        path: PathRouts.EditForm,
        element: <ProfileEdit/>
      }
}



