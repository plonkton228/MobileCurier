import { ManageProfileNoUser } from "./ManageProfileNoUser/ui/ManageProfileNoUser"
import { ManageProfileUser } from "./ManageProfileUser/ui/ManageProfileUser"

export enum ManageProfileType  {
    NoUser = 'NoUser',
    User = 'User',
    Courier = 'Courier'

}

interface ManageProfileInterface {
    type: ManageProfileType
}

export const ManageUser: React.FC<ManageProfileInterface> = (props) => {
  const {
      type
  } = props
    const ReturnType = () => {
       switch(type) {
         case ManageProfileType.NoUser:
            return <ManageProfileNoUser/>
         case ManageProfileType.User:
            return <ManageProfileUser/>
       }
    }
    return(<>
       {
        ReturnType()
       }
    </>)
}