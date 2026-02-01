// import React from 'react';

// const PatientDashboard = () => {
//     return (
//         <div>
//             <h1>Hello from Patient Dashboard</h1>
//         </div>
//     );
// };

// export default PatientDashboard;








import React, { useEffect, useState } from 'react';
import patientService from '../../services/patientService';
import { motion } from 'framer-motion';
import {
  FaCalendarCheck,
  FaClipboardList,
  FaFileMedical,
  FaMoneyBillWave,
  FaWallet,
  FaUserMd,
  FaBolt,
  FaPills
} from 'react-icons/fa';

function PatientDashboard({ setActiveSection }) {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      const data = await patientService.getDashboardStats();
      setStats(data);
    } catch (err) {
      setError('Failed to load patient dashboard');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium text-lg">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  const statsCards = [
    {
      title: 'Upcoming Appointments',
      value: stats.upcoming_appointments || 0,
      icon: <FaCalendarCheck className="text-4xl" />,
      gradient: 'from-gray-700 to-gray-800',
      action: 'View Appointments',
      onClick: () => setActiveSection('/appointments'),
    },
    {
      title: 'Total Appointments',
      value: stats.total_appointments || 0,
      icon: <FaClipboardList className="text-4xl" />,
      gradient: 'from-slate-700 to-slate-800',
      action: 'All Appointments',
      onClick: () => setActiveSection('/appointments'),
    },
    {
      title: 'Medical Records',
      value: stats.medical_records || 0,
      icon: <FaFileMedical className="text-4xl" />,
      gradient: 'from-gray-600 to-gray-700',
      action: 'View Records',
      onClick: () => setActiveSection('/records'),
    },
    {
      title: 'Pending Bills',
      value: stats.pending_bills || 0,
      icon: <FaMoneyBillWave className="text-4xl" />,
      gradient: 'from-gray-700 to-gray-900',
      action: 'Pay Bills',
      onClick: () => setActiveSection('/billing'),
    },
    {
      title: 'Total Paid',
      value: `৳${stats.total_paid || 0}`,
      icon: <FaWallet className="text-4xl" />,
      gradient: 'from-slate-600 to-slate-800',
      action: 'Billing History',
      onClick: () => setActiveSection('/billing'),
    },
    {
      title: 'Find Doctors',
      value: '',
      icon: <FaUserMd className="text-4xl" />,
      gradient: 'from-gray-600 to-gray-800',
      action: 'Browse Doctors',
      onClick: () => setActiveSection('/doctors'),
    },
    {
      title: 'Prescriptions',
      value: stats.total_prescriptions || 0,
      icon: <FaPills className="text-4xl" />,
      gradient: 'from-slate-700 to-gray-900',
      action: 'My Prescriptions',
      onClick: () => setActiveSection('/patient-prescriptions'),
    },
  ];

  const quickActions = [
    {
      title: 'My Appointments',
      icon: <FaCalendarCheck className="text-3xl" />,
      onClick: () => setActiveSection('/appointments'),
    },
    {
      title: 'Medical Records',
      icon: <FaFileMedical className="text-3xl" />,
      onClick: () => setActiveSection('/records'),
    },
    {
      title: 'Find Doctors',
      icon: <FaUserMd className="text-3xl" />,
      onClick: () => setActiveSection('/doctors'),
    },
    {
      title: 'Billing & Payments',
      icon: <FaMoneyBillWave className="text-3xl" />,
      onClick: () => setActiveSection('/billing'),
    },
    {
      title: 'Prescriptions',
      icon: <FaPills className="text-3xl" />,
      onClick: () => setActiveSection('/patient-prescriptions'),
    },
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
          Patient Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Overview of your appointments, records, and payments
        </p>
      </motion.div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-2xl">
          {error}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {statsCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all"
          >
            <div className={`bg-gradient-to-br ${card.gradient} p-6 text-white`}>
              <div className="flex justify-center mb-3">{card.icon}</div>
              {card.value !== '' && (
                <h3 className="text-3xl font-bold text-center mb-1">
                  {card.value}
                </h3>
              )}
              <p className="text-sm text-center text-gray-100">
                {card.title}
              </p>
            </div>
            <div className="p-4">
              <button
                onClick={card.onClick}
                className="w-full py-2 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200"
              >
                {card.action}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickActions.map((action, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              onClick={action.onClick}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center gap-3 cursor-pointer"
            >
              {action.icon}
              <span className="font-semibold text-sm text-gray-800">
                {action.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
