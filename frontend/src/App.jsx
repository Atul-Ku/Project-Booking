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
const ApiLinks = lazy(() => import("./components/ApiLinks"));
const CarDetailsTable = lazy(() => import("./components/CarDetailsTable"));
const AdminDashboard = lazy(() => import("./admin/dashboard"))
const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/api/details"
            element={
              <ProtectedRoute>
                <DetailsTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/api/details_car"
            element={
              <ProtectedRoute>
                <CarDetailsTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/apilink"
            element={
              <ProtectedRoute>
                <ApiLinks />
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
