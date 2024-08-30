import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

export default function Login() {
  const {onLogin} = useLoginContext();
  const navigate = useNavigate();
  const [loginInProgress, setLoginInProgress] = useState(false);
  
  const onLoginHandler = useGoogleLogin({
    onSuccess: async (response) => {
      setLoginInProgress(true);
      const userData = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${response.access_token}`,
          Accept: 'application/json'
        }
      });
      if (userData.ok){
        const userInfo = await userData.json();
        onLogin(userInfo);
        navigate('/');
        setLoginInProgress(false);
      }else{
        setLoginInProgress(false);
      }
    },
    onError: (error) => console.log('Login Failed:', error)
});

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={onLoginHandler}
        type="button"
        className="rounded-md bg-indigo-500 p-2 text-white hover:bg-indigo-800 text-xl"
      >
        {loginInProgress ? 'Login with Google in progress....' : 'Login with Google'}
      </button>
    </div>
  );
}
