import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";

const AppRoutes = () => {

  return (

    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/property"
        element={<PropertyDetails />}
      />

    </Routes>

  );
};

export default AppRoutes;