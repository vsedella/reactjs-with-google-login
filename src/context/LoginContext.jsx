import { googleLogout } from "@react-oauth/google";
import { createContext, useContext, useState } from "react";

const LoginContext = createContext({
    userInfo: null,
    onLogin: () => {},
    onLogOut: () => {}
});
const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null);
    const onLogin = function(userObject){
        setUserInfo(userObject);
    }
    const onLogOut = function(){
        googleLogout();
        setUserInfo(null);
    }
    const providerValue = {
        userInfo, 
        onLogin,
        onLogOut
    }
    return <LoginContext.Provider value={providerValue} >{children}</LoginContext.Provider>
}

export const useLoginContext = () => {return useContext(LoginContext);}

export default AuthProvider;