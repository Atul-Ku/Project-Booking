import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
//import Admin from "./components/Admin";
// Lazy-loaded components
const Home = lazy(() => import("./components/Home"));
const Admin = lazy(() => import("./components/AdminLogin"));
const Services = lazy(() => import("./pages/Services"));
const ContactUs = lazy(() => import("./pages/Contact"));
const DetailsTable = lazy(() => import("./components/DetailsTable"));

const App = () => {
  const columns = ["id", "user", "from_location", "to_location", "train","message","date"];

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          
          <Route path="/services" element={<Services />} /> 
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/api/details"
            element={
              <ProtectedRoute>
                <DetailsTable columns={columns} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
};

export default App;
