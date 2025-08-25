import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>

    );
}
