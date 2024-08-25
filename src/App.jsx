import { Navigate, Outlet, NavLink } from "react-router-dom";
import { useLoginContext } from "./context/LoginContext";
import UserInfo from "./components/UserInfo";

function App() {
  const { userInfo, onLogOut } = useLoginContext();
  const loggedIn = !!userInfo;

  const defaultLinkStyle = "text-xl text-indigo-500 ";
  const activeLinkStyle = `underline underline-offset-8 ${defaultLinkStyle}`;
  return (
    <>
      {loggedIn && (
        <div className="flex">
          <div className="w-1/5 h-screen border-2 border-r-indigo-500">
            <div className="h-2/6">
              <UserInfo {...userInfo} ></UserInfo>
            </div>
            <div className="h-3/6 items-center justify-center flex flex-col gap-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${activeLinkStyle}` : `${defaultLinkStyle}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? `${activeLinkStyle}` : `${defaultLinkStyle}`
                }
              >
                Search
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `${activeLinkStyle}` : `${defaultLinkStyle}`
                }
              >
                Contact
              </NavLink>

                <button onClick={() => onLogOut()} className="text-xl text-white  bg-indigo-500 hover:bg-indigo-600 font-bold border-2 border-white rounded-lg p-1">
                  Logout
                </button>

            </div>
          </div>
          <div className="w-4/5">
            <Outlet></Outlet>
          </div>
        </div>
      )}
      {!loggedIn && <Navigate to="login" replace />}
    </>
  );
}

export default App;
