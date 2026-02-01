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
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
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

// Role Based Dashboards
import StaffDashboard from "./pages/staff/Dashboard";
import NurseDashboard from "./pages/nurse/Dashboard";
import LabTechnicianDashboard from "./pages/lab-technician/Dashboard";

// Page Imports
import Doctors from "./pages/patient/Doctors";
import ApptsList from "./pages/patient/Appointments";
import Departments from "./pages/Departments";
import Services from "./pages/Services";
import Research from "./pages/Research";
import International from "./pages/International";
import Emergency from "./pages/Emergency";
import Contact from "./pages/Contact";

// Footer Pages
import About from "./pages/About";
import Mission from "./pages/Mission";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Careers";

// import About from "./pages/About";
// import Contact from "./pages/Contact";

function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ redirectTo: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-red-500">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-8">
            You do not have permission to access this page. This area is restricted to <span className="font-bold">{allowedRoles.join(', ')}s</span> only.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/dashboard"
              className="px-6 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Go to Dashboard
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
}

function App() {
  return (
    // <Router>
    <Routes>

      {/* Public pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/contact" element={<Contact />} />


      {/* Footer Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/careers" element={<Careers />} />

      {/* Main Navigation Routes - Publicly Accessible */}
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/departments" element={<Departments />} />
      {/* Specific department routes redirect to main departments page for now */}
      <Route path="/departments/cardiology" element={<Departments />} />
      <Route path="/departments/neurology" element={<Departments />} />
      <Route path="/departments/oncology" element={<Departments />} />

      <Route path="/services" element={<Services />} />
      <Route path="/research" element={<Research />} />
      <Route path="/international" element={<International />} />
      <Route path="/emergency" element={<Emergency />} />


      {/* PROTECTED ROUTES */}
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />

      <Route path="/appointments" element={
        <ProtectedRoute allowedRoles={['patient']}>
          <ApptsList />
        </ProtectedRoute>
      } />

      <Route path="/reports" element={
        <ProtectedRoute allowedRoles={['patient']}>
          <Dashboard />
        </ProtectedRoute>
      } />

      <Route path="/billing" element={
        <ProtectedRoute allowedRoles={['patient']}>
          <Dashboard />
        </ProtectedRoute>
      } />

      {/* Dashboard is accessible to all authenticated users */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />

      <Route path="/appointment-form" element={
        <ProtectedRoute allowedRoles={['patient']}>
          <AppointmentForm />
        </ProtectedRoute>
      } />

      {/* Staff Routes */}
      <Route path="/staff" element={
        <ProtectedRoute allowedRoles={['staff']}>
          <StaffDashboard />
        </ProtectedRoute>
      } />

      <Route path="/nurse" element={
        <ProtectedRoute allowedRoles={['nurse']}>
          <NurseDashboard />
        </ProtectedRoute>
      } />

      <Route path="/lab-technician" element={
        <ProtectedRoute allowedRoles={['lab_technician']}>
          <LabTechnicianDashboard />
        </ProtectedRoute>
      } />


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
