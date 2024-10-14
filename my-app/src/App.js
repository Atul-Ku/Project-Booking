import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const Home = lazy(() => import("./components/Home"));
const AdminLogin = lazy(() => import("./components/Admin"));
const Services = lazy(() => import("./pages/Services"));
const ContactUs = lazy(() => import("./pages/Contact"));
const DetailsTable = lazy(() => import("./components/DetailsTable"));
const App = () => {
  const columns = ["id", "user", "from_location", "to_location", "train"];
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/api/details"
          element={<DetailsTable columns={columns} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/services" element={Services} /> {/* Use element here */}
        <Route path="/contact-us" element={ContactUs} /> {/* Use element here */}
      </Routes>

      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
};

export default App;