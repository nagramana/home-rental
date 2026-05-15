import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

/* COMPONENTS */

import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";

import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperties";

import Footer from "./components/Footer/Footer";

import Filters from "./components/Filters/Filters";

/* CHAT WIDGET */

import ChatWidget from "./components/ChatWidget/ChatWidget";

/* PAGES */

import Login from "./pages/Login/Login";

import Register from "./pages/Register/Register";

import Dashboard from "./pages/Dashboard/Dashboard";

import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";

import AddProperty from "./pages/AddProperty/AddProperty";

import Properties from "./pages/Properties/Properties";

import OwnerDashboard from "./pages/OwnerDashboard/OwnerDashboard";

/* EXTRA PAGES */

import Favorites from "./pages/Favorites/Favorites";

import Bookings from "./pages/Bookings/Bookings";

import MyProperties from "./pages/MyProperties/MyProperties";

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

import Payment from "./pages/Payment/Payment";

import BookingSuccess from "./pages/BookingSuccess/BookingSuccess";

/* NOTIFICATIONS */

import Notifications from "./pages/Notifications/Notifications";

/* NEW REALTIME PAGES */

import Chat from "./pages/Chat/Chat";

import OtpLogin from "./pages/OtpLogin/OtpLogin";

import Analytics from "./pages/Analytics/Analytics";

/* NEARBY MAP */

import NearbyMap from "./components/NearbyMap/NearbyMap";

/* AI RECOMMENDATIONS */

import AIRecommendations from "./components/AIRecommendations/AIRecommendations";

/* ROUTES */

import ProtectedRoute from "./routes/ProtectedRoute";

/* HOME PAGE */

function HomePage() {

  return (

    <>
      <Navbar />

      <Hero />

      <Filters />

      <FeaturedProperties />

      <Footer />
    </>

  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<HomePage />}
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />

        {/* OTP LOGIN */}

        <Route
          path="/otp-login"
          element={<OtpLogin />}
        />

        {/* ALL PROPERTIES */}

        <Route
          path="/properties"
          element={<Properties />}
        />

        {/* PROPERTY DETAILS */}

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        {/* PAYMENT */}

        <Route
          path="/payment"
          element={<Payment />}
        />

        {/* BOOKING SUCCESS */}

        <Route
          path="/booking-success"
          element={<BookingSuccess />}
        />

        {/* NOTIFICATIONS */}

        <Route
          path="/notifications"
          element={<Notifications />}
        />

        {/* CHAT */}

        <Route
          path="/chat"
          element={<Chat />}
        />

        {/* ANALYTICS */}

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        {/* NEARBY MAP */}

        <Route
          path="/nearby-map"
          element={<NearbyMap />}
        />

        {/* AI RECOMMENDATIONS */}

        <Route
          path="/ai-recommendations"
          element={<AIRecommendations />}
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* OWNER DASHBOARD */}

        <Route
          path="/owner-dashboard"
          element={
            <ProtectedRoute>
              <OwnerDashboard />
            </ProtectedRoute>
          }
        />

        {/* ADD PROPERTY */}

        <Route
          path="/add-property"
          element={
            <ProtectedRoute>
              <AddProperty />
            </ProtectedRoute>
          }
        />

        {/* FAVORITES */}

        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />

        {/* BOOKINGS */}

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />

        {/* MY PROPERTIES */}

        <Route
          path="/my-properties"
          element={
            <ProtectedRoute>
              <MyProperties />
            </ProtectedRoute>
          }
        />

        {/* ADMIN DASHBOARD */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* LIVE CHAT WIDGET */}

      <ChatWidget />

    </BrowserRouter>

  );
}

export default App;