/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { authentication } from "../../contextConfig/authentication"
import { Navigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Guard({children}) {
    const {isLogin, setIsLogin} = useContext(authentication);
    if(isLogin){
        return children;
    }else{
        return <Navigate to='/login'/>
    }
}

export default Guard
