import { Outlet } from "react-router-dom";
import Navbar from "../components/ShareComponet/Navbar";
import Footer from "../components/ShareComponet/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;