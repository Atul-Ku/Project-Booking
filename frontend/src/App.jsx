import React , { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./components/Home"));
const AdminLogin = lazy(() => import("./components/Admin"));
const Services = lazy(() => import("./pages/Services"));
const ContactUs = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={ContactUs} />
        </Routes>

      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
};

export default App;
