// // // src/pages/Dashboard.jsx
// // import React from 'react';
// // import { useAuth } from '../context/AuthContext';
// // import { Link } from 'react-router-dom';
// // import Navbar from '../components/common/Navbar';

// // function Dashboard() {
// //   const { user } = useAuth();

// //   if (!user) {
// //     return <div className="flex items-center justify-center h-screen text-gray-500">Loading dashboard...</div>;
// //   }

// //   const userRole = user.role || (user.user && user.user.role);

// //   const renderPatientDashboard = () => (
// //     <div className="min-h-screen min-w-screen bg-gray-100 p-6">
// //       <h2 className="text-3xl font-bold mb-6 text-red-600">Patient Dashboard</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">My Appointments</h3>
// //           <p className="text-gray-500 mt-1">View and manage your appointments</p>
// //           <Link to="/appointments" className="btn btn-secondary btn-sm mt-3">View Appointments</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg text-red-800">Medical Records</h3>
// //           <p className="text-gray-500 mt-1">Access your medical history</p>
// //           <Link to="/records" className="btn btn-secondary btn-sm mt-3">View Records</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">Find Doctors</h3>
// //           <p className="text-gray-500 mt-1">Book appointments with specialists</p>
// //           <Link to="/doctors" className="btn btn-secondary btn-sm mt-3">Find Doctors</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">My Profile</h3>
// //           <p className="text-gray-500 mt-1">Update your personal and medical information</p>
// //           <Link to="/profile" className="btn btn-secondary btn-sm mt-3">Update Profile</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">Billing & Payments</h3>
// //           <p className="text-gray-500 mt-1">View and pay your medical bills</p>
// //           <Link to="/billing" className="btn btn-secondary btn-sm mt-3">View Bills</Link>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderDoctorDashboard = () => (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <h2 className="text-3xl font-bold mb-6">Doctor Dashboard</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">Appointment Schedule</h3>
// //           <p className="text-gray-500 mt-1">Manage your appointments</p>
// //           <Link to="/schedule" className="btn btn-secondary btn-sm mt-3">View Schedule</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">Patient Records</h3>
// //           <p className="text-gray-500 mt-1">Access patient medical records</p>
// //           <Link to="/patients" className="btn btn-secondary btn-sm mt-3">View Patients</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">Prescriptions</h3>
// //           <p className="text-gray-500 mt-1">Write and manage prescriptions</p>
// //           <Link to="/prescriptions" className="btn btn-secondary btn-sm mt-3">Manage Prescriptions</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">My Profile</h3>
// //           <p className="text-gray-500 mt-1">Update your professional information</p>
// //           <Link to="/profile" className="btn btn-secondary btn-sm mt-3">Update Profile</Link>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderStaffDashboard = () => (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <h2 className="text-3xl font-bold mb-6">Staff Dashboard</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">Appointment Management</h3>
// //           <p className="text-gray-500 mt-1">Manage all appointments</p>
// //           <Link to="/appointments" className="btn btn-secondary btn-sm mt-3">Manage Appointments</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">Patient Management</h3>
// //           <p className="text-gray-500 mt-1">Handle patient registrations</p>
// //           <Link to="/patients" className="btn btn-secondary btn-sm mt-3">Manage Patients</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">Billing</h3>
// //           <p className="text-gray-500 mt-1">Handle billing and payments</p>
// //           <Link to="/billing" className="btn btn-secondary btn-sm mt-3">Manage Billing</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">My Profile</h3>
// //           <p className="text-gray-500 mt-1">Update your staff information</p>
// //           <Link to="/profile" className="btn btn-secondary btn-sm mt-3">Update Profile</Link>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderAdminDashboard = () => (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">User Management</h3>
// //           <p className="text-gray-500 mt-1">Manage all users and permissions</p>
// //           <Link to="/users" className="btn btn-secondary btn-sm mt-3">Manage Users</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">System Settings</h3>
// //           <p className="text-gray-500 mt-1">Configure system settings</p>
// //           <Link to="/settings" className="btn btn-secondary btn-sm mt-3">System Settings</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">Reports</h3>
// //           <p className="text-gray-500 mt-1">View system reports and analytics</p>
// //           <Link to="/reports" className="btn btn-secondary btn-sm mt-3">View Reports</Link>
// //         </div>
// //         <div className="card bg-base-100 shadow-md border border-gray-200 p-4">
// //           <h3 className="font-semibold text-lg">My Profile</h3>
// //           <p className="text-gray-500 mt-1">Update your admin profile</p>
// //           <Link to="/profile" className="btn btn-secondary btn-sm mt-3">Update Profile</Link>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const getDashboard = () => {
// //     switch (userRole) {
// //       case 'patient':
// //         return renderPatientDashboard();
// //       case 'doctor':
// //         return renderDoctorDashboard();
// //       case 'staff':
// //         return renderStaffDashboard();
// //       case 'admin':
// //         return renderAdminDashboard();
// //       default:
// //         return (
// //           <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-500 p-6">
// //             <h3 className="text-xl font-bold mb-2">Unknown Role: {userRole}</h3>
// //             <p className="mb-4">Please contact support or try updating your profile.</p>
// //             <Link to="/profile" className="btn btn-primary">Update Profile</Link>
// //           </div>
// //         );
// //     }
// //   };

// //   return (
// //     <div className="bg-gray-100 min-h-screen">
// //       <Navbar />
// //       <div className="container mx-auto py-6">
// //         {getDashboard()}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;














// // src/pages/Dashboard.jsx
// // import React, { useState } from 'react';
// // import { useAuth } from '../context/AuthContext';
// // import Navbar from '../components/common/Navbar';

// // function Dashboard() {
// //   const { user } = useAuth();
// //   const userRole = user?.role || user?.user?.role;

// //   const sections = {
// //     patient: [
// //       { key: 'dashboard', label: 'Dashboard' },
// //       { key: 'appointments', label: 'My Appointments' },
// //       { key: 'records', label: 'Medical Records' },
// //       { key: 'find_doctors', label: 'Find Doctors' },
// //       { key: 'profile', label: 'My Profile' },
// //       { key: 'billing', label: 'Billing & Payments' },
// //     ],
// //     doctor: [
// //       { key: 'dashboard', label: 'Dashboard' },
// //       { key: 'schedule', label: 'Appointment Schedule' },
// //       { key: 'patients', label: 'Patient Records' },
// //       { key: 'prescriptions', label: 'Prescriptions' },
// //       { key: 'profile', label: 'My Profile' },
// //     ],
// //     staff: [
// //       { key: 'dashboard', label: 'Dashboard' },
// //       { key: 'appointments', label: 'Appointment Management' },
// //       { key: 'patients', label: 'Patient Management' },
// //       { key: 'billing', label: 'Billing' },
// //       { key: 'profile', label: 'My Profile' },
// //     ],
// //     admin: [
// //       { key: 'dashboard', label: 'Dashboard' },
// //       { key: 'users', label: 'User Management' },
// //       { key: 'settings', label: 'System Settings' },
// //       { key: 'reports', label: 'Reports' },
// //       { key: 'profile', label: 'My Profile' },
// //     ],
// //   };

// //   const [activeSection, setActiveSection] = useState('dashboard');

// //   const renderContent = () => {
// //     switch (activeSection) {
// //       case 'dashboard':
// //         return <h2 className="text-2xl font-bold">Welcome, {user.first_name || user.user?.first_name}!</h2>;
// //       case 'appointments':
// //         return <p>Here you can view and manage your appointments.</p>;
// //       case 'records':
// //         return <p>Access your medical history.</p>;
// //       case 'find_doctors':
// //         return <p>Book appointments with doctors.</p>;
// //       case 'profile':
// //         return <p>Update your profile and information.</p>;
// //       case 'billing':
// //         return <p>View and pay your bills.</p>;
// //       case 'schedule':
// //         return <p>Manage your doctor schedule.</p>;
// //       case 'patients':
// //         return <p>Access patient records.</p>;
// //       case 'prescriptions':
// //         return <p>Write and manage prescriptions.</p>;
// //       case 'users':
// //         return <p>Manage users and permissions.</p>;
// //       case 'settings':
// //         return <p>Configure system settings.</p>;
// //       case 'reports':
// //         return <p>View reports and analytics.</p>;
// //       default:
// //         return <p>Unknown section.</p>;
// //     }
// //   };

// //   if (!user) {
// //     return <div className="flex items-center justify-center h-screen text-gray-500">Loading dashboard...</div>;
// //   }

// //   return (
// //     <div className="min-h-screen min-w-screen bg-gray-100">
// //       <Navbar />
// //       <div className="flex">
// //         {/* Sidebar */}
// //         <aside className="w-64 bg-white shadow-md h-screen sticky top-0 p-4 flex flex-col space-y-2">
// //           {sections[userRole]?.map((item) => (
// //             <button
// //               key={item.key}
// //               onClick={() => setActiveSection(item.key)}
// //               className={`btn btn-sm justify-start w-full ${
// //                 activeSection === item.key ? 'btn-primary text-white' : 'btn-ghost text-gray-700'
// //               }`}
// //             >
// //               {item.label}
// //             </button>
// //           ))}
// //         </aside>

// //         {/* Main Content */}
// //         <main className="flex-1 p-6">
// //           {renderContent()}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;














// // import React, { useState, useEffect } from 'react';
// // import { useAuth } from '../context/AuthContext';
// // import Navbar from '../components/common/Navbar';

// // function Dashboard() {
// //   const { user } = useAuth();
// //   const userRole = user?.role || user?.user?.role;

// //   const sections = {
// //     patient: [
// //       { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
// //       { key: 'appointments', label: 'My Appointments', path: '/dashboard/appointments' },
// //       { key: 'records', label: 'Medical Records', path: '/dashboard/records' },
// //       { key: 'find_doctors', label: 'Find Doctors', path: '/dashboard/find-doctors' },
// //       { key: 'profile', label: 'My Profile', path: '/dashboard/profile' },
// //       { key: 'billing', label: 'Billing & Payments', path: '/dashboard/billing' },
// //     ],
// //     doctor: [
// //       { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
// //       { key: 'schedule', label: 'Appointment Schedule', path: '/dashboard/schedule' },
// //       { key: 'patients', label: 'Patient Records', path: '/dashboard/patients' },
// //       { key: 'prescriptions', label: 'Prescriptions', path: '/dashboard/prescriptions' },
// //       { key: 'profile', label: 'My Profile', path: '/dashboard/profile' },
// //     ],
// //     // staff & admin similar...
// //   };

// //   // Default section based on URL or fallback
// //   const getDefaultSection = () => {
// //     const pathname = window.location.pathname;
// //     const userSections = sections[userRole] || [];
// //     const found = userSections.find((s) => pathname.endsWith(s.path));
// //     return found ? found.key : 'dashboard';
// //   };

// //   const [activeSection, setActiveSection] = useState(getDefaultSection());

// //   const handleClick = (section) => {
// //     setActiveSection(section.key);
// //     window.history.pushState({}, '', section.path); // Update URL without reload
// //   };

// //   useEffect(() => {
// //     // Handle browser back/forward buttons
// //     const onPopState = () => {
// //       setActiveSection(getDefaultSection());
// //     };
// //     window.addEventListener('popstate', onPopState);
// //     return () => window.removeEventListener('popstate', onPopState);
// //   }, []);

// //   const renderContent = () => {
// //     switch (activeSection) {
// //       case 'dashboard':
// //         return <h2 className="text-2xl font-bold">Welcome, {user.first_name || user.user?.first_name}!</h2>;
// //       case 'appointments':
// //         return <p>Here you can view and manage your appointments.</p>;
// //       case 'records':
// //         return <p>Access your medical history.</p>;
// //       case 'find_doctors':
// //         return <p>Book appointments with doctors.</p>;
// //       case 'profile':
// //         return <p>Update your profile and information.</p>;
// //       case 'billing':
// //         return <p>View and pay your bills.</p>;
// //       case 'schedule':
// //         return <p>Manage your doctor schedule.</p>;
// //       case 'patients':
// //         return <p>Access patient records.</p>;
// //       case 'prescriptions':
// //         return <p>Write and manage prescriptions.</p>;
// //       default:
// //         return <p>Unknown section.</p>;
// //     }
// //   };

// //   if (!user) {
// //     return <div className="flex items-center justify-center h-screen text-gray-500">Loading dashboard...</div>;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <Navbar />
// //       <div className="flex">
// //         {/* Sidebar */}
// //         <aside className="w-64 bg-white shadow-md h-screen sticky top-0 p-4 flex flex-col space-y-2">
// //           {sections[userRole]?.map((item) => (
// //             <button
// //               key={item.key}
// //               onClick={() => handleClick(item)}
// //               className={`btn btn-sm justify-start w-full ${
// //                 activeSection === item.key ? 'btn-primary text-white' : 'btn-ghost text-gray-700'
// //               }`}
// //             >
// //               {item.label}
// //             </button>
// //           ))}
// //         </aside>

// //         {/* Main Content */}
// //         <main className="flex-1 p-6">{renderContent()}</main>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;




// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import Navbar from '../components/common/Navbar';
// import Appointments from './patient/Appointments';
// import Doctors from './patient/Doctors';
// import Billing from './patient/Billing';
// import MedicalRecords from './patient/MedicalRecords';
// import DoctorSchedule from './doctor/Schedule';
// import DoctorPatients from './doctor/Patients';
// import AdminUsers from './admin/Users';
// import AdminDashboard from './admin/Dashboard';
// import AdminReports from './admin/Reports';
// import AdminAppointments from './admin/Appointments';
// import AdminInventory from './admin/Inventory';
// import AdminBilling from './admin/Billing';
// import AdminNotifications from './admin/Notifications';
// import DoctorPrescriptions from './doctor/Prescriptions';
// // import AdminDashboard from './admin/Dashboard';

// function Dashboard() {
//   const { user } = useAuth();
//   const userRole = user?.role || user?.user?.role;

//   // Track which section is active
//   const [activeSection, setActiveSection] = useState('/dashboard'); // default

//   const sections = {
//     patient: [
//       { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
//       { key: 'appointments', label: 'My Appointments', path: '/appointments' },
//       { key: 'records', label: 'Medical Records', path: '/records' },
//       { key: 'find_doctors', label: 'Find Doctors', path: '/doctors' },
//       // { key: 'profile', label: 'My Profile', path: '/profile' },
//       { key: 'billing', label: 'Billing & Payments', path: '/billing' },
//     ],
//     doctor: [
//       { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
//       { key: 'schedule', label: 'Appointment Schedule', path: '/schedule' },
//       { key: 'patients', label: 'Patient Records', path: '/patients' },
//       { key: 'prescriptions', label: 'Prescriptions', path: '/prescriptions' },
//       // { key: 'profile', label: 'My Profile', path: '/profile' },
//     ],
//     staff: [
//       { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
//       { key: 'appointments', label: 'Appointment Management', path: '/appointments' },
//       { key: 'patients', label: 'Patient Management', path: '/patients' },
//       { key: 'billing', label: 'Billing', path: '/billing' },
//       // { key: 'profile', label: 'My Profile', path: '/profile' },
//     ],
//     // lab-technician: [
//     //   { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
//     //   { key: 'labattendence', label: 'attendence', path: '/labattendence' },
//     //   { key: 'testreports', label: 'Test Reports', path: '/testreports' },
//     //   // { key: 'billing', label: 'Billing', path: '/billing' },
//     //   // { key: 'profile', label: 'My Profile', path: '/profile' },
//     // ],
//     admin: [
//       { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
//       { key: 'users', label: 'User Management', path: '/users' },
//       { key: 'adminappointments', label: 'Appointments', path: '/adminappointments' },
//       { key: 'reports', label: 'Reports', path: '/reports' },
//       // { key: 'profile', label: 'My Profile', path: '/profile' },
//       { key: 'inventory', label: 'Inventory', path: '/inventory' },
//       { key: 'adminbilling', label: 'Billing', path: '/adminbilling' },
//       { key: 'notifications', label: 'Notifications', path: '/notifications' },
//     ],
//   };

//   if (!user) {
//     return <div className="flex items-center justify-center h-screen text-gray-500">Loading dashboard...</div>;
//   }


//   // render dashboard for role
//   const renderDashboardForRole = () => {
//     switch (userRole) {
//       // // case 'patient': return <PatientDashboard />;
//       // case 'doctor': return <DoctorDashboard />;
//       // case 'staff': return <StaffDashboard />;
//       case 'admin': return <AdminDashboard setActiveSection={setActiveSection}  />;
//       // case 'nurse': return <NurseDashboard />;
//       default:
//         return <h2 className="text-2xl text-gray-500">Unknown role: {userRole}</h2>;
//     }
//   };

//   // Render the content for the active section
//   const renderContent = () => {
//     if (activeSection === '/dashboard') {
//       return renderDashboardForRole();
//     }
//     switch (activeSection) {
//       case '/dashboard':
//         return <AdminDashboard></AdminDashboard>;
//       case '/appointments':
//         return <Appointments></Appointments>;
//       case '/records':
//         return <MedicalRecords></MedicalRecords> ;
//       case '/doctors':
//         return <Doctors></Doctors> ;
//       // case '/profile':
//       //   return <p>Update your profile information.</p>;
//       case '/billing':
//         return <Billing></Billing> ;
//       case '/schedule':
//         return <DoctorSchedule></DoctorSchedule> ;
//       case '/patients':
//         return <DoctorPatients></DoctorPatients> ;
//       case '/prescriptions':
//         return <DoctorPrescriptions></DoctorPrescriptions>
//       case '/users':
//         return <AdminUsers></AdminUsers> ;
//       case '/adminappointments':
//         return <AdminAppointments></AdminAppointments> ;
//       case '/reports':
//         return <AdminReports></AdminReports> ;
//         case '/inventory':
//         return <AdminInventory></AdminInventory> ;
//         case '/adminbilling':
//         return <AdminBilling></AdminBilling> ;
//         case '/notifications':
//         return <AdminNotifications></AdminNotifications> ;
//       default:
//         return <p>Section not found.</p>;
//     }
//   };

//   return (
//     <div className="min-h-screen  min-w-screen bg-transparent">
//       <Navbar />
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 bg-transparent shadow-md h-screen sticky top-0 p-4 flex flex-col space-y-2 border-b-fuchsia-200">
//           {sections[userRole]?.map((item) => {
//             const isActive = activeSection === item.path;
//             return (
//               <button
//                 key={item.key}
//                 onClick={() => setActiveSection(item.path)}
//                 className={`btn btn-md justify-start w-full ${
//                   isActive ? 'btn-secondary text-white' : 'btn-ghost text-gray-700'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             );
//           })}
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;














import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/common/Navbar';
import Appointments from './patient/Appointments';
import Doctors from './patient/Doctors';
import Billing from './patient/Billing';
import MedicalRecords from './patient/MedicalRecords';
import DoctorSchedule from './doctor/Schedule';
import DoctorPatients from './doctor/Patients';
import AdminUsers from './admin/Users';
import AdminDashboard from './admin/Dashboard';
import AdminReports from './admin/Reports';
import AdminAppointments from './admin/Appointments';
import AdminInventory from './admin/Inventory';
import AdminBilling from './admin/Billing';
import AdminNotifications from './admin/Notifications';
import DoctorPrescriptions from './doctor/Prescriptions';
import LabTechnicianDashboard from './lab-technician/Dashboard';
import NurseDashboard from './nurse/Dashboard';
import LabTechnicianAttendance from './lab-technician/Attendance';
import LabTechnicianTestReports from './lab-technician/TestReports';
import NurseAttendance from './nurse/Attendance';
import NurseMedicalRecords from './nurse/MedicalRecords';
import NursePatientArrival from './nurse/PatientArrival';
import NurseVitalSigns from './nurse/VitalSigns';
import PatientDashboard from './patient/Dashboard';
import DoctorDashboard from './doctor/Dashboard';
import DoctorMedicalRecords from './doctor/MedicalRecords';
import StaffDashboard from './staff/Dashboard';

function Dashboard() {
  const { user } = useAuth();
  const userRole = user?.role || user?.user?.role;

  const [activeSection, setActiveSection] = useState('/dashboard');

  // ➤ Extended role sections
  const sections = {
    patient: [
      { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
      { key: 'appointments', label: 'My Appointments', path: '/appointments' },
      { key: 'records', label: 'Medical Records', path: '/records' },
      { key: 'find_doctors', label: 'Find Doctors', path: '/doctors' },
      { key: 'billing', label: 'Billing & Payments', path: '/billing' },
    ],

    doctor: [
      { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
      { key: 'schedule', label: 'Appointment Schedule', path: '/schedule' },
      { key: 'patients', label: 'Patient Records', path: '/patients' },
      { key: 'prescriptions', label: 'Prescriptions', path: '/prescriptions' },
      { key: 'medicalrecords', label: 'Medical Records', path: '/medicalrecords' },
    ],

    staff: [
      { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
      { key: 'attendence', label: 'Attendence', path: '/nurseattendence' },
      // { key: 'billing', label: 'Billing', path: '/billing' },
    ],

    // ➤ NEW: Lab Technician Sidebar
    "lab_technician": [
      { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
      { key: 'attendence', label: 'Attendence', path: '/labattendence' },
      { key: 'testreports', label: 'Test Reports', path: '/testreports' },
    ],

    // ➤ NEW: Nurse Sidebar
    nurse: [
      { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
      { key: 'attendence', label: 'Attendence', path: '/nurseattendence' },
      { key: 'medicalrecords', label: 'Medical Records', path: '/nurserecords' },
      { key: 'arrival', label: 'Patient Arrival', path: '/patientarrival' },
      { key: 'vitals', label: 'Vital Signs', path: '/vitals' },
    ],

    admin: [
      { key: 'dashboard', label: 'Dashboard', path: '/dashboard' },
      { key: 'users', label: 'User Management', path: '/users' },
      { key: 'adminappointments', label: 'Appointments', path: '/adminappointments' },
      { key: 'reports', label: 'Reports', path: '/reports' },
      { key: 'inventory', label: 'Inventory', path: '/inventory' },
      { key: 'adminbilling', label: 'Billing', path: '/adminbilling' },
      { key: 'notifications', label: 'Notifications', path: '/notifications' },
    ],
  };

  if (!user) {
    return <div className="flex items-center justify-center h-screen text-gray-500">Loading dashboard...</div>;
  }

  const renderDashboardForRole = () => {
    switch (userRole) {
      case 'patient':
        return <PatientDashboard setActiveSection={setActiveSection}></PatientDashboard> ;
      case 'doctor':
        return <DoctorDashboard setActiveSection={setActiveSection}></DoctorDashboard>
      case 'admin': 
        return <AdminDashboard setActiveSection={setActiveSection} />;
      case 'lab_technician':
        return <LabTechnicianDashboard setActiveSection={setActiveSection}></LabTechnicianDashboard> ;
      case 'nurse':
        return <NurseDashboard setActiveSection={setActiveSection}></NurseDashboard>;
      case 'staff':
        return <StaffDashboard setActiveSection={setActiveSection}></StaffDashboard>
      default:
        return <h2 className="text-xl text-gray-500">Unknown role: {userRole}</h2>;
    }
  };

  // ➤ Extended content renderer
  const renderContent = () => {
    if (activeSection === '/dashboard') {
      return renderDashboardForRole();
    }

    switch (activeSection) {
      case '/appointments': return <Appointments />;
      case '/records': return <MedicalRecords />;
      case '/doctors': return <Doctors />;
      case '/billing': return <Billing />;
      case '/schedule': return <DoctorSchedule />;
      case '/patients': return <DoctorPatients />;
      case '/prescriptions': return <DoctorPrescriptions />;
      case '/medicalrecords': return <DoctorMedicalRecords></DoctorMedicalRecords> ;
      case '/users': return <AdminUsers />;
      case '/adminappointments': return <AdminAppointments />;
      case '/reports': return <AdminReports />;
      case '/inventory': return <AdminInventory />;
      case '/adminbilling': return <AdminBilling />;
      case '/notifications': return <AdminNotifications />;

      // ➤ NEW: LAB TECHNICIAN ROUTES (placeholders)
      case '/labattendence':
        return <LabTechnicianAttendance></LabTechnicianAttendance> ;
      case '/testreports':
        return <LabTechnicianTestReports></LabTechnicianTestReports> ;
      // ➤ NEW: NURSE ROUTES (placeholders)
      case '/nurseattendence':
        return <NurseAttendance></NurseAttendance> ;
      case '/nurserecords':
        return <NurseMedicalRecords></NurseMedicalRecords>   ;
      case '/patientarrival':
        return <NursePatientArrival></NursePatientArrival> ;
      case '/vitals':
        return <NurseVitalSigns></NurseVitalSigns> ;

      default:
        return <p>Section not found.</p>;
    }
  };

  // return (
  //   <div className="min-h-screen min-w-screen bg-transparent">
  //     <Navbar />
  //     <div className="flex">

  //       {/* Sidebar */}
  //       <aside className="w-64 bg-transparent shadow-md h-screen sticky top-0 p-4 flex flex-col space-y-2">
  //         {sections[userRole]?.map((item) => {
  //           const isActive = activeSection === item.path;
  //           return (
  //             <button
  //               key={item.key}
  //               onClick={() => setActiveSection(item.path)}
  //               className={`btn btn-md justify-start w-full ${
  //                 isActive ? 'btn-secondary text-white' : 'btn-ghost text-gray-700'
  //               }`}
  //             >
  //               {item.label}
  //             </button>
  //           );
  //         })}
  //       </aside>

  //       {/* Main Content */}
  //       <main className="flex-1 p-6">
  //         {renderContent()}
  //       </main>
  //     </div>
  //   </div>
  // );


  return (
    <div className="min-h-screen min-w-screen max-w-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100">
      <Navbar />
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-white/80 backdrop-blur-xl border-r border-gray-200 shadow-sm h-screen sticky top-0 p-6 flex flex-col space-y-3">
          <div className="mb-4">
            {/* <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Navigation</h3> */}
            {/* <div className="h-1 w-12 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"></div> */}
          </div>
          
          {sections[userRole]?.map((item) => {
            const isActive = activeSection === item.path;
            return (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.path)}
                className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all transform hover:scale-105 ${
                  isActive 
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
