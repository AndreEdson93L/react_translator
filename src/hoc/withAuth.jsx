//#region withAuth
/*This code creates a function called withAuth that checks if a user is 
logged in using the useUser hook from the UserContext.
If a user is logged in, it returns the original component with any props 
passed down to it.
If not, it redirects to the home page using the Navigate component from 
the react-router-dom library.
This is used to ensure that certain components are only accessible to 
authenticated users in a React application.
*/
//#endregion

import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const withAuth = Component => props => {
    const { user } = useUser()
    if (user !== null){
        return <Component {...props}/>
    } else {
        return <Navigate to="/"/>
    }
}

export default withAuth