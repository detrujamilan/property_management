import {Outlet} from "react-router-dom";
import Header from "@/pages/header/Header.tsx";
import Sidebar from "@/pages/sidebar/Sidebar.tsx";

const Layout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex-1 flex flex-col overflow-auto">
                <Header/>
                <main className="flex-1 px-10 py-6 bg-catskillWhite overflow-y-auto">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};

export default Layout;
