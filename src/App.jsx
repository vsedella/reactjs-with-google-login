import { Navigate, Outlet, NavLink } from "react-router-dom";
import "./App.css";
import { useLoginContext } from "./context/LoginContext";

function App() {
  const { user } = useLoginContext();
  console.log("user is ", user);
  const loggedIn = !!user;
  const defaultLinkStyle = "text-xl text-indigo-500 active";
  const activeLinkStyle = `underline underline-offset-8 ${defaultLinkStyle}`;
  return (
    <>
      {loggedIn && (
        <div className="flex">
          <div className="w-1/5 h-screen border-2 border-r-indigo-500">
            <div className="h-1/6 items-center justify-center flex">
              <p> Hello User : {user}</p>
            </div>
            <div className="h-5/6 items-center justify-center flex flex-col gap-10">
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

// className={`${({ isActive}) => isActive ? "underline underline-offset-8" : ""} text-xl text-indigo-500 active`}
