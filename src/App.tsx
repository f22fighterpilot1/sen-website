import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Demo from "./pages/Demo";
import HowItWorks from "./pages/HowItWorks";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Store from "./pages/Store";

// ✅ Standalone portal pages (NO Layout)
import LicensingPortal from "./pages/portal/LicensingPortal";
import Licenses from "./pages/portal/Licenses";
import Activate from "./pages/portal/Activate";
import DownloadLicense from "./pages/portal/DownloadLicense";

export default function App() {
  return (
    <Routes>
      {/* ✅ Portal routes: render WITHOUT the main site Layout/navbar/footer */}
      <Route path="/portal" element={<LicensingPortal />} />
      <Route path="/portal/licenses" element={<Licenses />} />
      <Route path="/portal/activate" element={<Activate />} />
      <Route path="/portal/download" element={<DownloadLicense />} />

      {/* ✅ Normal website routes: render WITH Layout */}
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
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/store" element={<Store />} />
      </Route>
    </Routes>
  );
}
