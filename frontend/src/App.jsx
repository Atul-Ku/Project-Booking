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
const AddUser = lazy(() => import("./admin/User/addUser"));
const CreateUser = lazy(() => import("./admin/User/createUser"));
const NewOrder = lazy(() => import("./admin/Order/newOrder"));
const ViewOrders = lazy(() => import("./admin/Order/viewOrder"));
const TodayBooking = lazy(() => import("./admin/Booking/today"));
const YesterdayBooking = lazy(() => import("./admin/Booking/yesterday"));
const TomorrowBooking = lazy(() => import("./admin/Booking/tomorrow"));
const paymentReport = lazy(() => import("./admin/Payment/report"));
const pendingPayment = lazy(() => import("./admin/Payment/pendingPayment"));
const todayPayment = lazy(() => import("./admin/Payment/todayPayment"));
const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/add-user" element={<AddUser />} />
          <Route path="/admin/dashboard/create-user" element={<CreateUser />} />
          <Route path="/admin/dashboard/new-order" element={<NewOrder />} />
          <Route path="/admin/dashboard/view-orders" element={<ViewOrders />} />
          <Route path="/admin/dashboard/today-booking" element={<TodayBooking />} />
          <Route path="/admin/dashboard/yesterday-booking" element={<YesterdayBooking />} />
          <Route path="/admin/dashboard/tomorrow-booking" element={<TomorrowBooking />} />
          <Route path="/admin/dashboard/payment-report" element={<paymentReport />} />
          <Route path="/admin/dashboard/pending-payment" element={<pendingPayment />} />
          <Route path="/admin/dashboard/today-payment" element={<todayPayment />} />
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
