import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SecondHome from "./pages/SecondHome";
import Demo from "./pages/Demo";
import HowItWorks from "./pages/HowItWorks";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/secondHome" element={<SecondHome />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/support" element={<Support />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/pricing" element={<Pricing />} />
            </Route>
        </Routes>
    );
}
