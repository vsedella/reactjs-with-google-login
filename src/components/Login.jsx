import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";

export default function Login() {
  const {onLogin} = useLoginContext();
  const navigate = useNavigate();
  function onLoginHandler(){
    onLogin('vsedella');
    navigate('/')
  }
  
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={onLoginHandler}
        type="button"
        className="rounded-md bg-indigo-500 p-2 text-white hover:bg-indigo-800 text-xl"
      >
        Login with Google
      </button>
    </div>
  );
}
