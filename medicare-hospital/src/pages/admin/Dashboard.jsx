// // // src/pages/admin/Dashboard.jsx
// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import adminService from '../../services/adminService';

// // function AdminDashboard() {
// //   const [stats, setStats] = useState({});
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     fetchDashboardStats();
// //   }, []);

// //   const fetchDashboardStats = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getDashboardStats();
// //       setStats(response);
// //     } catch (error) {
// //       setError('Failed to fetch dashboard stats');
// //       console.error('Error fetching dashboard stats:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading dashboard...</div>;
// //   }

// //   return (
// //     <div className="page-container">
// //       <div className="page-header">
// //         <h1>Admin Dashboard</h1>
// //       </div>

// //       {error && <div className="error-message">{error}</div>}

// //       {/* Stats Cards */}
// //       <div className="stats-grid">
// //         <div className="stat-card">
// //           <div className="stat-icon patients">
// //             <i className="fas fa-users"></i>
// //           </div>
// //           <div className="stat-content">
// //             <h3>{stats.total_patients || 0}</h3>
// //             <p>Total Patients</p>
// //           </div>
// //           <Link to="/admin/users?role=PATIENT" className="stat-link">View All</Link>
// //         </div>

// //         <div className="stat-card">
// //           <div className="stat-icon doctors">
// //             <i className="fas fa-user-md"></i>
// //           </div>
// //           <div className="stat-content">
// //             <h3>{stats.total_doctors || 0}</h3>
// //             <p>Total Doctors</p>
// //           </div>
// //           <Link to="/admin/users?role=DOCTOR" className="stat-link">View All</Link>
// //         </div>

// //         <div className="stat-card">
// //           <div className="stat-icon staff">
// //             <i className="fas fa-user-nurse"></i>
// //           </div>
// //           <div className="stat-content">
// //             <h3>{stats.total_staff || 0}</h3>
// //             <p>Total Staff</p>
// //           </div>
// //           <Link to="/admin/users?role=STAFF" className="stat-link">View All</Link>
// //         </div>

// //         <div className="stat-card">
// //           <div className="stat-icon appointments">
// //             <i className="fas fa-calendar-check"></i>
// //           </div>
// //           <div className="stat-content">
// //             <h3>{stats.pending_appointments || 0}</h3>
// //             <p>Pending Appointments</p>
// //           </div>
// //           <Link to="/admin/appointments?status=pending" className="stat-link">View All</Link>
// //         </div>

// //         <div className="stat-card">
// //           <div className="stat-icon revenue">
// //             <i className="fas fa-dollar-sign"></i>
// //           </div>
// //           <div className="stat-content">
// //             <h3>${stats.total_revenue || 0}</h3>
// //             <p>Total Revenue</p>
// //           </div>
// //           <Link to="/admin/reports" className="stat-link">View Reports</Link>
// //         </div>

// //         <div className="stat-card">
// //           <div className="stat-icon today">
// //             <i className="fas fa-calendar-day"></i>
// //           </div>
// //           <div className="stat-content">
// //             <h3>{stats.today_appointments || 0}</h3>
// //             <p>Today's Appointments</p>
// //           </div>
// //           <Link to="/admin/appointments" className="stat-link">View Schedule</Link>
// //         </div>
// //       </div>

// //       {/* Quick Actions */}
// //       <div className="quick-actions">
// //         <h2>Quick Actions</h2>
// //         <div className="actions-grid">
// //           <Link to="/admin/users" className="action-card">
// //             <i className="fas fa-user-plus"></i>
// //             <span>Manage Users</span>
// //           </Link>
// //           <Link to="/admin/appointments" className="action-card">
// //             <i className="fas fa-calendar-alt"></i>
// //             <span>Manage Appointments</span>
// //           </Link>
// //           <Link to="/admin/inventory" className="action-card">
// //             <i className="fas fa-pills"></i>
// //             <span>Manage Inventory</span>
// //           </Link>
// //           <Link to="/admin/billing" className="action-card">
// //             <i className="fas fa-file-invoice-dollar"></i>
// //             <span>Manage Billing</span>
// //           </Link>
// //           <Link to="/admin/notifications" className="action-card">
// //             <i className="fas fa-bell"></i>
// //             <span>Send Notifications</span>
// //           </Link>
// //           <Link to="/admin/reports" className="action-card">
// //             <i className="fas fa-chart-bar"></i>
// //             <span>View Reports</span>
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminDashboard;

















// // src/pages/admin/Dashboard.jsx
// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import adminService from '../../services/adminService';

// // function AdminDashboard() {
// //   const [stats, setStats] = useState({});
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     fetchDashboardStats();
// //   }, []);

// //   const fetchDashboardStats = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getDashboardStats();
// //       setStats(response);
// //     } catch (error) {
// //       setError('Failed to fetch dashboard stats');
// //       console.error('Error fetching dashboard stats:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (loading) {
// //     return <div className="flex items-center justify-center h-screen text-gray-500">Loading dashboard...</div>;
// //   }

// //   return (
// //     <div className="p-6 space-y-6">
// //       {/* Header */}
// //       <div className="text-3xl font-bold">Admin Dashboard</div>

// //       {error && <div className="alert alert-error">{error}</div>}

// //       {/* Stats Cards */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
// //         {/* Total Patients */}
// //         <div className="card bg-base-200 shadow-md">
// //           <div className="card-body flex flex-col items-center">
// //             <div className="text-4xl text-primary mb-2">
// //               <i className="fas fa-users"></i>
// //             </div>
// //             <h3 className="text-2xl font-bold">{stats.total_patients || 0}</h3>
// //             <p className="text-sm text-gray-500">Total Patients</p>
// //             <Link to="/admin/users?role=PATIENT" className="btn btn-sm btn-primary mt-2">View All</Link>
// //           </div>
// //         </div>

// //         {/* Total Doctors */}
// //         <div className="card bg-base-200 shadow-md">
// //           <div className="card-body flex flex-col items-center">
// //             <div className="text-4xl text-secondary mb-2">
// //               <i className="fas fa-user-md"></i>
// //             </div>
// //             <h3 className="text-2xl font-bold">{stats.total_doctors || 0}</h3>
// //             <p className="text-sm text-gray-500">Total Doctors</p>
// //             <Link to="/admin/users?role=DOCTOR" className="btn btn-sm btn-secondary mt-2">View All</Link>
// //           </div>
// //         </div>

// //         {/* Total Staff */}
// //         <div className="card bg-base-200 shadow-md">
// //           <div className="card-body flex flex-col items-center">
// //             <div className="text-4xl text-accent mb-2">
// //               <i className="fas fa-user-nurse"></i>
// //             </div>
// //             <h3 className="text-2xl font-bold">{stats.total_staff || 0}</h3>
// //             <p className="text-sm text-gray-500">Total Staff</p>
// //             <Link to="/admin/users?role=STAFF" className="btn btn-sm btn-accent mt-2">View All</Link>
// //           </div>
// //         </div>

// //         {/* Pending Appointments */}
// //         <div className="card bg-base-200 shadow-md">
// //           <div className="card-body flex flex-col items-center">
// //             <div className="text-4xl text-info mb-2">
// //               <i className="fas fa-calendar-check"></i>
// //             </div>
// //             <h3 className="text-2xl font-bold">{stats.pending_appointments || 0}</h3>
// //             <p className="text-sm text-gray-500">Pending Appointments</p>
// //             <Link to="/admin/appointments?status=pending" className="btn btn-sm btn-info mt-2">View All</Link>
// //           </div>
// //         </div>

// //         {/* Total Revenue */}
// //         <div className="card bg-base-200 shadow-md">
// //           <div className="card-body flex flex-col items-center">
// //             <div className="text-4xl text-success mb-2">
// //               <i className="fas fa-dollar-sign"></i>
// //             </div>
// //             <h3 className="text-2xl font-bold">${stats.total_revenue || 0}</h3>
// //             <p className="text-sm text-gray-500">Total Revenue</p>
// //             <Link to="/admin/reports" className="btn btn-sm btn-success mt-2">View Reports</Link>
// //           </div>
// //         </div>

// //         {/* Today's Appointments */}
// //         <div className="card bg-base-200 shadow-md">
// //           <div className="card-body flex flex-col items-center">
// //             <div className="text-4xl text-warning mb-2">
// //               <i className="fas fa-calendar-day"></i>
// //             </div>
// //             <h3 className="text-2xl font-bold">{stats.today_appointments || 0}</h3>
// //             <p className="text-sm text-gray-500">Today's Appointments</p>
// //             <Link to="/admin/appointments" className="btn btn-sm btn-warning mt-2">View Schedule</Link>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Quick Actions */}
// //       <div>
// //         <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
// //           <Link to="/admin/users" className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center">
// //             <i className="fas fa-user-plus text-2xl mb-2"></i>
// //             <span className="font-medium">Manage Users</span>
// //           </Link>
// //           <Link to="/admin/appointments" className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center">
// //             <i className="fas fa-calendar-alt text-2xl mb-2"></i>
// //             <span className="font-medium">Manage Appointments</span>
// //           </Link>
// //           <Link to="/admin/inventory" className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center">
// //             <i className="fas fa-pills text-2xl mb-2"></i>
// //             <span className="font-medium">Manage Inventory</span>
// //           </Link>
// //           <Link to="/admin/billing" className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center">
// //             <i className="fas fa-file-invoice-dollar text-2xl mb-2"></i>
// //             <span className="font-medium">Manage Billing</span>
// //           </Link>
// //           <Link to="/admin/notifications" className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center">
// //             <i className="fas fa-bell text-2xl mb-2"></i>
// //             <span className="font-medium">Send Notifications</span>
// //           </Link>
// //           <Link to="/admin/reports" className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center">
// //             <i className="fas fa-chart-bar text-2xl mb-2"></i>
// //             <span className="font-medium">View Reports</span>
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminDashboard;






// import React, { useState, useEffect } from 'react';
// import adminService from '../../services/adminService';

// function AdminDashboard({ setActiveSection }) {
//   const [stats, setStats] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchDashboardStats();
//   }, []);

//   const fetchDashboardStats = async () => {
//     try {
//       setLoading(true);
//       const response = await adminService.getDashboardStats();
//       setStats(response);
//     } catch (error) {
//       setError('Failed to fetch dashboard stats');
//       console.error('Error fetching dashboard stats:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen text-gray-500">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div className="text-3xl font-bold">Admin Dashboard</div>

//       {error && <div className="alert alert-error">{error}</div>}

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

//         {/* Total Patients */}
//         <div className="card bg-base-200 shadow-md">
//           <div className="card-body flex flex-col items-center">
//             <div className="text-4xl text-primary mb-2">
//               <i className="fas fa-users"></i>
//             </div>
//             <h3 className="text-2xl font-bold">{stats.total_patients || 0}</h3>
//             <p className="text-sm text-gray-500">Total Patients</p>

//             <button
//               onClick={() => setActiveSection('/users')}
//               className="btn btn-sm btn-primary mt-2"
//             >
//               View All
//             </button>
//           </div>
//         </div>

//         {/* Total Doctors */}
//         <div className="card bg-base-200 shadow-md">
//           <div className="card-body flex flex-col items-center">
//             <div className="text-4xl text-secondary mb-2">
//               <i className="fas fa-user-md"></i>
//             </div>
//             <h3 className="text-2xl font-bold">{stats.total_doctors || 0}</h3>
//             <p className="text-sm text-gray-500">Total Doctors</p>

//             <button
//               onClick={() => setActiveSection('/users')}
//               className="btn btn-sm btn-secondary mt-2"
//             >
//               View All
//             </button>
//           </div>
//         </div>

//         {/* Total Staff */}
//         <div className="card bg-base-200 shadow-md">
//           <div className="card-body flex flex-col items-center">
//             <div className="text-4xl text-accent mb-2">
//               <i className="fas fa-user-nurse"></i>
//             </div>
//             <h3 className="text-2xl font-bold">{stats.total_staff || 0}</h3>
//             <p className="text-sm text-gray-500">Total Staff</p>

//             <button
//               onClick={() => setActiveSection('/users')}
//               className="btn btn-sm btn-accent mt-2"
//             >
//               View All
//             </button>
//           </div>
//         </div>

//         {/* Pending Appointments */}
//         <div className="card bg-base-200 shadow-md">
//           <div className="card-body flex flex-col items-center">
//             <div className="text-4xl text-info mb-2">
//               <i className="fas fa-calendar-check"></i>
//             </div>
//             <h3 className="text-2xl font-bold">{stats.pending_appointments || 0}</h3>
//             <p className="text-sm text-gray-500">Pending Appointments</p>

//             <button
//               onClick={() => setActiveSection('/adminappointments')}
//               className="btn btn-sm btn-info mt-2"
//             >
//               View All
//             </button>
//           </div>
//         </div>

//         {/* Revenue */}
//         <div className="card bg-base-200 shadow-md">
//           <div className="card-body flex flex-col items-center">
//             <div className="text-4xl text-success mb-2">
//               <i className="fas fa-dollar-sign"></i>
//             </div>
//             <h3 className="text-2xl font-bold">${stats.total_revenue || 0}</h3>
//             <p className="text-sm text-gray-500">Total Revenue</p>

//             <button
//               onClick={() => setActiveSection('/reports')}
//               className="btn btn-sm btn-success mt-2"
//             >
//               View Reports
//             </button>
//           </div>
//         </div>

//         {/* Today */}
//         <div className="card bg-base-200 shadow-md">
//           <div className="card-body flex flex-col items-center">
//             <div className="text-4xl text-warning mb-2">
//               <i className="fas fa-calendar-day"></i>
//             </div>
//             <h3 className="text-2xl font-bold">{stats.today_appointments || 0}</h3>
//             <p className="text-sm text-gray-500">Today's Appointments</p>

//             <button
//               onClick={() => setActiveSection('/adminappointments')}
//               className="btn btn-sm btn-warning mt-2"
//             >
//               View Schedule
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Quick Actions */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

//           <div
//             onClick={() => setActiveSection('/users')}
//             className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center"
//           >
//             <i className="fas fa-user-plus text-2xl mb-2"></i>
//             <span className="font-medium">Manage Users</span>
//           </div>

//           <div
//             onClick={() => setActiveSection('/adminappointments')}
//             className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center"
//           >
//             <i className="fas fa-calendar-alt text-2xl mb-2"></i>
//             <span className="font-medium">Manage Appointments</span>
//           </div>

//           <div
//             onClick={() => setActiveSection('/inventory')}
//             className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center"
//           >
//             <i className="fas fa-pills text-2xl mb-2"></i>
//             <span className="font-medium">Manage Inventory</span>
//           </div>

//           <div
//             onClick={() => setActiveSection('/adminbilling')}
//             className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center"
//           >
//             <i className="fas fa-file-invoice-dollar text-2xl mb-2"></i>
//             <span className="font-medium">Manage Billing</span>
//           </div>

//           <div
//             onClick={() => setActiveSection('/notifications')}
//             className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center"
//           >
//             <i className="fas fa-bell text-2xl mb-2"></i>
//             <span className="font-medium">Send Notifications</span>
//           </div>

//           <div
//             onClick={() => setActiveSection('/reports')}
//             className="card card-compact bg-base-100 shadow-md hover:shadow-lg cursor-pointer p-4 flex flex-col items-center justify-center"
//           >
//             <i className="fas fa-chart-bar text-2xl mb-2"></i>
//             <span className="font-medium">View Reports</span>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;














import React, { useState, useEffect } from 'react';
import adminService from '../../services/adminService';
import { motion } from 'framer-motion';
import { FaUsers, FaUserMd, FaUserNurse, FaCalendarCheck, FaDollarSign, FaCalendarDay, FaUserPlus, FaCalendarAlt, FaPills, FaFileInvoiceDollar, FaBell, FaChartBar } from 'react-icons/fa';

function AdminDashboard({ setActiveSection }) {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      const response = await adminService.getDashboardStats();
      setStats(response);
    } catch (error) {
      setError('Failed to fetch dashboard stats');
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const statsCards = [
    {
      title: 'Total Patients',
      value: stats.total_patients || 0,
      icon: <FaUsers className="text-4xl" />,
      gradient: 'from-gray-700 to-gray-800',
      action: 'View All',
      onClick: () => setActiveSection('/users')
    },
    {
      title: 'Total Doctors',
      value: stats.total_doctors || 0,
      icon: <FaUserMd className="text-4xl" />,
      gradient: 'from-gray-600 to-gray-700',
      action: 'View All',
      onClick: () => setActiveSection('/users')
    },
    {
      title: 'Total Staff',
      value: stats.total_staff || 0,
      icon: <FaUserNurse className="text-4xl" />,
      gradient: 'from-slate-700 to-slate-800',
      action: 'View All',
      onClick: () => setActiveSection('/users')
    },
    {
      title: 'Pending Appointments',
      value: stats.pending_appointments || 0,
      icon: <FaCalendarCheck className="text-4xl" />,
      gradient: 'from-gray-600 to-gray-800',
      action: 'View All',
      onClick: () => setActiveSection('/adminappointments')
    },
    {
      title: 'Total Revenue',
      value: `$${stats.total_revenue || 0}`,
      icon: <FaDollarSign className="text-4xl" />,
      gradient: 'from-gray-700 to-gray-900',
      action: 'View Reports',
      onClick: () => setActiveSection('/reports')
    },
    {
      title: "Today's Appointments",
      value: stats.today_appointments || 0,
      icon: <FaCalendarDay className="text-4xl" />,
      gradient: 'from-slate-600 to-slate-800',
      action: 'View Schedule',
      onClick: () => setActiveSection('/adminappointments')
    }
  ];

  const quickActions = [
    {
      title: 'Manage Users',
      icon: <FaUserPlus className="text-3xl" />,
      onClick: () => setActiveSection('/users')
    },
    {
      title: 'Manage Appointments',
      icon: <FaCalendarAlt className="text-3xl" />,
      onClick: () => setActiveSection('/adminappointments')
    },
    {
      title: 'Manage Inventory',
      icon: <FaPills className="text-3xl" />,
      onClick: () => setActiveSection('/inventory')
    },
    {
      title: 'Manage Billing',
      icon: <FaFileInvoiceDollar className="text-3xl" />,
      onClick: () => setActiveSection('/adminbilling')
    },
    {
      title: 'Send Notifications',
      icon: <FaBell className="text-3xl" />,
      onClick: () => setActiveSection('/notifications')
    },
    {
      title: 'View Reports',
      icon: <FaChartBar className="text-3xl" />,
      onClick: () => setActiveSection('/reports')
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening today.</p>
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-2xl shadow-sm flex items-center gap-3"
        >
          <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">{error}</span>
        </motion.div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {statsCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className={`bg-gradient-to-br ${card.gradient} p-6 text-white`}>
              <div className="flex justify-center mb-3">
                {card.icon}
              </div>
              <h3 className="text-3xl font-bold text-center mb-1">{card.value}</h3>
              <p className="text-sm text-center text-gray-100">{card.title}</p>
            </div>
            <div className="p-4">
              <button
                onClick={card.onClick}
                className="w-full py-2 px-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl font-semibold hover:from-gray-200 hover:to-gray-300 transition-all transform hover:scale-105"
              >
                {card.action}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Quick Actions</h2>
          <p className="text-gray-600">Fast access to common administrative tasks</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
              onClick={action.onClick}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-gray-700">
                {action.icon}
              </div>
              <span className="font-semibold text-sm text-gray-800 text-center">{action.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* System Status (Optional Enhancement) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 p-6"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">System Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm text-gray-600">Server Status</p>
              <p className="font-bold text-green-700">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm text-gray-600">Database</p>
              <p className="font-bold text-blue-700">Connected</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-200">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm text-gray-600">Last Update</p>
              <p className="font-bold text-purple-700">Just now</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminDashboard;