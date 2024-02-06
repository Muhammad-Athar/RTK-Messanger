import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

function AppLayout() {
    return (
        <div className="flex flex-col justify-between h-screen w-screen">
            <Navbar />
            <div className="px-10 overflow-y-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default AppLayout;
