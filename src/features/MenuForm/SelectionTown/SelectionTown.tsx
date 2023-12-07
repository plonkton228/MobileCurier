import { setTown } from "entites/Profile";
import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "share/lib/hooks/useRedux";
import { Selection } from "share/ui/Selection";
import { Items } from "share/ui/Selection/models/types";

export const SelectionTown: React.FC = memo(() => {
    const Profile = useAppSelector((state) => state.ProfileReducer)
    const dispatch = useAppDispatch()
    const ChangeHandler = useCallback((e: number) => {
         dispatch(setTown(e))
         console.log(Profile.data?.cityId)
    },[Profile.data?.cityId, dispatch])
    const arr: Items[] = []
    Profile?.data?.cities?.forEach((element) => {
        arr.push({label: element.name, value: element.id})
    })
        return(<>
        
            <Selection
            value={Profile.data?.cityId}
            onChange={ChangeHandler}
            items={arr} 
         />  
        
        
        </>)
})