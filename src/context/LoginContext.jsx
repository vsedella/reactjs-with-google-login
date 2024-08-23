import { createContext, useContext, useState } from "react";

const LoginContext = createContext({
    user: null,
    onLogin: () => {},
    onLogOut: () => {}
});
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const onLogin = function(token){
        setUser(token);
    }
    const onLogOut = function(){
        setUser(null);
    }
    const providerValue = {
        user, 
        onLogin,
        onLogOut
    }
    return <LoginContext.Provider value={providerValue} >{children}</LoginContext.Provider>
}

export const useLoginContext = () => {return useContext(LoginContext);}

export default AuthProvider;