// // // src/components/common/Navbar.jsx
// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../../context/AuthContext';

// // function Navbar() {
// //   const { user, logout } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/login');
// //   };

// //   if (!user) {
// //     return null;
// //   }

// //   return (
// //     <nav className="navbar">
// //       <div className="nav-brand">
// //         <Link to="/dashboard">Hospital System</Link>
// //       </div>
      
// //       <div className="nav-links">
// //         <Link to="/dashboard">Dashboard</Link>
// //         <Link to="/profile">Profile</Link>
        
// //         {user.role === 'patient' && (
// //           <>
// //             <Link to="/appointments">Appointments</Link>
// //             <Link to="/doctors">Doctors</Link>
// //           </>
// //         )}
        
// //         {user.role === 'doctor' && (
// //           <>
// //             <Link to="/schedule">Schedule</Link>
// //             <Link to="/patients">Patients</Link>
// //           </>
// //         )}
        
// //         {user.role === 'staff' && (
// //           <>
// //             <Link to="/appointments">Appointments</Link>
// //             <Link to="/patients">Patients</Link>
// //             <Link to="/billing">Billing</Link>
// //           </>
// //         )}
        
// //         {user.role === 'admin' && (
// //           <>
// //             <Link to="/users">Users</Link>
// //             <Link to="/reports">Reports</Link>
// //             <Link to="/settings">Settings</Link>
// //           </>
// //         )}
// //       </div>
      
// //       <div className="nav-user">
// //         <span>Welcome, {user.first_name}</span>
// //         <span className="user-role">({user.role})</span>
// //         <button onClick={handleLogout} className="btn-logout">
// //           Logout
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// // src/components/common/Navbar.jsx
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../../context/AuthContext';

// // function Navbar() {
// //   const { user, logout } = useAuth();
// //   const navigate = useNavigate();
// //   // const [loggingOut, setLoggingOut] = useState(false);

// //   const handleLogout = () => {
// //     // setLoggingOut(true);
// //     // window.location.href = '/';
// //     logout();
// //     navigate('/login');
// //     // navigate('/');

    
// //   };

// //   if (!user) {
// //     return null;
// //   }

// //   // Get user details from the profile structure
// //   const userName = user.first_name || (user.user && user.user.first_name);
// //   const userRole = user.role || (user.user && user.user.role);

// //   return (
// //     <nav className="navbar min-w-screen">
// //       <div className="nav-brand">
// //         <Link to="/dashboard">Hospital System</Link>
// //       </div>
      
// //       <div className="nav-links">
// //         <Link to="/dashboard">Dashboard</Link>
// //         <Link to="/profile">Profile</Link>
        
// //         {userRole === 'patient' && (
// //           <>
// //             <Link to="/appointments">Appointments</Link>
// //             <Link to="/doctors">Doctors</Link>
// //           </>
// //         )}
        
// //         {userRole === 'doctor' && (
// //           <>
// //             <Link to="/schedule">Schedule</Link>
// //             <Link to="/patients">Patients</Link>
// //           </>
// //         )}
        
// //         {userRole === 'staff' && (
// //           <>
// //             <Link to="/appointments">Appointments</Link>
// //             <Link to="/patients">Patients</Link>
// //             <Link to="/billing">Billing</Link>
// //           </>
// //         )}
        
// //         {userRole === 'admin' && (
// //           <>
// //             <Link to="/users">Users</Link>
// //             <Link to="/reports">Reports</Link>
// //             <Link to="/settings">Settings</Link>
// //           </>
// //         )}
// //       </div>
      
// //       <div className="nav-user">
// //         <span>Welcome, {userName}</span>
// //         <span className="user-role">({userRole})</span>
// //         <button onClick={handleLogout} className="btn-logout">
// //           Logout
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;







// // src/components/common/Navbar.jsx
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   if (!user) {
//     return null;
//   }

//   const userName = user.first_name || (user.user && user.user.first_name);
//   const userRole = user.role || (user.user && user.user.role);

//   return (
//     <div className="w-full">
//       <div className="navbar shadow-md px-6 justify-between">
//         {/* Brand */}
//         {/* <div className="flex-1">
//           <Link to="/dashboard" className="text-xl font-bold">
//             Hospital System
//           </Link>
//         </div> */}
//         <Link to="/" className="flex items-center gap-3">
//                     {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold">MC</div> */}
//                     <div className=''>
//                       <div className="text-3xl font-bold">MediCare <span className="text-primary">Hospital</span></div>
//                       <div className="text-sm text-gray-700">Compassion · Care · Excellence</div>
//                     </div>
//                   </Link>

//         {/* Links */}
//         <div className="hidden md:flex gap-4">
//           {/* <Link to="/dashboard" className="btn btn-ghost btn-sm">
//             Dashboard
//           </Link> */}
//           <Link to="/profile" className="btn btn-ghost btn-sm">
//             Profile
//           </Link>

//           {userRole === 'patient' && (
//             <>
//               {/* <Link to="/appointments" className="btn btn-ghost btn-sm">
//                 Appointments
//               </Link>
//               <Link to="/doctors" className="btn btn-ghost btn-sm">
//                 Doctors
//               </Link> */}
//             </>
//           )}

//           {userRole === 'doctor' && (
//             <>
//               {/* <Link to="/schedule" className="btn btn-ghost btn-sm">
//                 Schedule
//               </Link>
//               <Link to="/patients" className="btn btn-ghost btn-sm">
//                 Patients
//               </Link> */}
//             </>
//           )}

//           {userRole === 'staff' && (
//             <>
//               {/* <Link to="/appointments" className="btn btn-ghost btn-sm">
//                 Appointments
//               </Link>
//               <Link to="/patients" className="btn btn-ghost btn-sm">
//                 Patients
//               </Link>
//               <Link to="/billing" className="btn btn-ghost btn-sm">
//                 Billing
//               </Link> */}
//             </>
//           )}

//           {userRole === 'admin' && (
//             <>
//               {/* <Link to="/users" className="btn btn-ghost btn-sm">
//                 Users
//               </Link>
//               <Link to="/reports" className="btn btn-ghost btn-sm">
//                 Reports
//               </Link>
//               <Link to="/settings" className="btn btn-ghost btn-sm">
//                 Settings
//               </Link> */}
//             </>
//           )}
//           <div className="flex items-center gap-3 ml-4">
//           <span className="text-sm font-medium">Welcome, {userName}</span>
//           <span className="text-xs text-gray-500">({userRole})</span>
//           <Link to='/'>
//           <button onClick={handleLogout} className="btn btn-error btn-sm">
//             Logout
//           </button></Link>
//         </div>
//         </div>

//         {/* User Info */}
        
//       </div>
//     </div>
//   );
// }

// export default Navbar;


















import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaSignOutAlt, FaHospital } from 'react-icons/fa';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return null;
  }

  const userName = user.first_name || (user.user && user.user.first_name);
  const userRole = user.role || (user.user && user.user.role);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand/Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition transform group-hover:scale-105">
              <FaHospital className="text-xl" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">MediCare</span>
                {' '}
                <span className="text-gray-700">Hospital</span>
              </div>
              <div className="text-xs text-gray-500 font-medium">Compassion · Care · Excellence</div>
            </div>
          </Link>

          {/* Navigation Links & User Info */}
          <div className="flex items-center gap-6">
            {/* Profile Link */}
            <Link 
              to="/profile" 
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              <FaUser className="text-gray-500" />
              Profile
            </Link>

            {/* Role-specific Links - Commented out as per original */}
            {userRole === 'patient' && (
              <>
                {/* <Link to="/appointments" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                  Appointments
                </Link>
                <Link to="/doctors" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                  Doctors
                </Link> */}
              </>
            )}

            {userRole === 'doctor' && (
              <>
                {/* <Link to="/schedule" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                  Schedule
                </Link>
                <Link to="/patients" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                  Patients
                </Link> */}
              </>
            )}

            {userRole === 'staff' && (
              <>
                {/* <Link to="/appointments" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                  Appointments
                </Link>
                <Link to="/patients" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                  Patients
                </Link>
                <Link to="/billing" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                  Billing
                </Link> */}
              </>
            )}

            {userRole === 'admin' && (
              <>
                {/* <Link to="/users" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                  Users
                </Link>
                <Link to="/reports" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                  Reports
                </Link>
                <Link to="/settings" className="hidden md:block px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                  Settings
                </Link> */}
              </>
            )}

            {/* User Info Section */}
            <div className="hidden md:flex items-center gap-4 pl-4 border-l border-gray-200">
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold text-gray-800">
                  {userName}
                </span>
                <span className="inline-block px-2 py-0.5 bg-gray-200 text-gray-700 rounded-full text-xs font-medium capitalize">
                  {userRole}
                </span>
              </div>

              {/* Logout Button */}
              <Link to='/'>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </Link>
            </div>

            {/* Mobile Menu - Simplified */}
            <div className="md:hidden flex items-center gap-2">
              <Link to="/profile">
                <button className="p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
                  <FaUser />
                </button>
              </Link>
              <Link to='/'>
                <button 
                  onClick={handleLogout}
                  className="p-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-lg transition"
                >
                  <FaSignOutAlt />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;