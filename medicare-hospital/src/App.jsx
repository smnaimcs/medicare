// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
// import Appointments from './pages/patient/Appointments';
// import Doctors from './pages/patient/Doctors';
// import MedicalRecords from './pages/patient/MedicalRecords';
// import Billing from './pages/patient/Billing';
// import Navbar from './components/common/Navbar';
// import DoctorSchedule from './pages/doctor/Schedule';
// import DoctorPatients from './pages/doctor/Patients';
// import DoctorPrescriptions from './pages/doctor/Prescriptions';
// import DoctorMedicalRecords from './pages/doctor/MedicalRecords';
// import './App.css';
// import HomeModern from './components/common/Home';

// function ProtectedRoute({ children }) {
//   const { user, loading } = useAuth();
  
//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }
  
//   return user ? children : <Navigate to="/login" />;
// }

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="App">
//           {/* <Navbar /> */}
//           <main className="main-content">
//             <Routes>
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route 
//                 path="/dashboard" 
//                 element={
//                   <ProtectedRoute>
//                     <Dashboard />
//                   </ProtectedRoute>
//                 } 
//               />
//               <Route 
//                 path="/profile" 
//                 element={
//                   <ProtectedRoute>
//                     <Profile />
//                   </ProtectedRoute>
//                 } 
//               />
//               {/* Patient Routes */}
//               <Route 
//                 path="/appointments" 
//                 element={
//                   <ProtectedRoute>
//                     <Appointments />
//                   </ProtectedRoute>
//                 } 
//               />
//               <Route 
//                 path="/doctors" 
//                 element={
//                   <ProtectedRoute>
//                     <Doctors />
//                   </ProtectedRoute>
//                 } 
//               />
//               <Route 
//                 path="/records" 
//                 element={
//                   <ProtectedRoute>
//                     <MedicalRecords />
//                   </ProtectedRoute>
//                 } 
//               />
//               <Route 
//                 path="/billing" 
//                 element={
//                   <ProtectedRoute>
//                     <Billing />
//                   </ProtectedRoute>
//                 } 
//               />
//               // doctor routes
//               <Route 
//                 path="/schedule" 
//                 element={
//                   <ProtectedRoute>
//                     <DoctorSchedule />
//                   </ProtectedRoute>
//                 } 
//               />
//               <Route 
//                 path="/patients" 
//                 element={
//                   <ProtectedRoute>
//                     <DoctorPatients />
//                   </ProtectedRoute>
//                 } 
//               />
//               <Route 
//                 path="/prescriptions" 
//                 element={
//                   <ProtectedRoute>
//                     <DoctorPrescriptions />
//                   </ProtectedRoute>
//                 } 
//               />
//               <Route 
//                 path="/medical-records" 
//                 element={
//                   <ProtectedRoute>
//                     <DoctorMedicalRecords />
//                   </ProtectedRoute>
//                 } 
//               />
//               {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
//               <Route path='/' element={<HomeModern></HomeModern>}></Route>
//             </Routes>
//           </main>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;






import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/common/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminAppointments from "./pages/admin/Appointments";
import AdminInventory from "./pages/admin/Inventory";
import AdminBilling from "./pages/admin/Billing";
import AdminReports from "./pages/admin/Reports";
import AdminNotifications from "./pages/admin/Notifications";
import Profile from './pages/Profile';
import AppointmentForm from "./pages/patient/AppointmentForm";

// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    // <Router>
      <Routes>

        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/profile" element={<Profile/>}></Route>

        {/* Single Dashboard entry */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment-form" element={<AppointmentForm></AppointmentForm>} />


        {/* OPTIONAL: fallback */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
        {/* <Route 
                path="/admin/dashboard" 
                element={
                  // <ProtectedRoute>
                    <AdminDashboard />
                  // </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/users" 
                element={
                  // <ProtectedRoute>
                    <AdminUsers />
                  // </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/appointments" 
                element={
                  // <ProtectedRoute>
                    <AdminAppointments />
                  // </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/inventory" 
                element={
                  // <ProtectedRoute>
                    <AdminInventory />
                  // </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/billing" 
                element={
                  // <ProtectedRoute>
                    <AdminBilling />
                  // </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/reports" 
                element={
                  // <ProtectedRoute>
                    <AdminReports />
                  // </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/notifications" 
                element={
                  // <ProtectedRoute>
                    <AdminNotifications />
                  // </ProtectedRoute>
                } 
              /> */}


      </Routes>
      // </Router> 
  );
}

export default App;
