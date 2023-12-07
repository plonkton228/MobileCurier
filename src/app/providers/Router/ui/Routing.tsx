import {
    Route,
    Routes
  } from "react-router-native";
import { Routs } from "../lib/Store";
export const Routing: React.FC = () => {
    return (<>
        <Routes>
            {
               Object.entries(Routs).map(
                ([key, route]) => <Route key={key} path= {route.path} element = {route.element}/>
                )
            }

        </Routes>
    </>)
}