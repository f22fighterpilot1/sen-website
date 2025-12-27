import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import HowItWorks from "./pages/HowItWorks";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";



export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/support" element={<Support />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />


            </Route>
        </Routes>
    );
}
