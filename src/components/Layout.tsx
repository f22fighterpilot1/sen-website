import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="app-shell">
            <Navbar />
            <main className="content">
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}
