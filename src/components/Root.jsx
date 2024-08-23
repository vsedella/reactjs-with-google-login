import { Link, Outlet } from "react-router-dom";

export default function Root(){
    return <div className="flex">
        <div className="w-1/5 items-center justify-center">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/contact">Contact</Link>
        </div>
        <div className="w-4/5">
                <Outlet></Outlet>
        </div>
    </div>  
}