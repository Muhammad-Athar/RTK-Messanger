import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex justify-start items-center p-10 bg-slate-300 space-x-7 font-semibold text-2xl">
            <Link to="/">
                <img className="h-9" src="/logo.png" alt="logo" />
            </Link>
            <Link to="/messages">Messages</Link>
        </div>
    );
}

export default Navbar;
