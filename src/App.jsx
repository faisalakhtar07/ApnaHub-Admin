import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./pages/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBusinesses from "./pages/AdminBusinesses";
import AdminJobs from "./pages/AdminJobs";
import AdminListings from "./pages/AdminListings";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="businesses" element={<AdminBusinesses />} />
        <Route path="jobs" element={<AdminJobs />} />
        <Route path="listings" element={<AdminListings />} />
      </Route>
    </Routes>
  );
}
