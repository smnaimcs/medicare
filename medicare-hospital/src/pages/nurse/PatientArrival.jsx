// // src/pages/nurse/PatientArrival.jsx
// import React, { useState, useEffect } from 'react';
// import staffService from '../../services/staffService';

// function NursePatientArrival() {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchTodayAppointments();
//   }, []);

//   const fetchTodayAppointments = async () => {
//     try {
//       setLoading(true);
//       // This endpoint would need to be implemented in the backend
//       // For now, we'll use a placeholder or you can filter from all appointments
//       const response = await fetch(`http://localhost:5000/api/appointments?date=${new Date().toISOString().split('T')[0]}`);
//       const data = await response.json();
//       setAppointments(data.appointments || []);
//     } catch (error) {
//       setError('Failed to fetch appointments');
//       console.error('Error fetching appointments:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdateArrival = async (appointmentId, status) => {
//     try {
//       await staffService.updatePatientArrival(appointmentId, status);
//       alert('Arrival status updated successfully');
//       fetchTodayAppointments();
//     } catch (error) {
//       alert('Failed to update arrival status');
//       console.error('Error updating arrival:', error);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       weekday: 'short',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const getStatusBadge = (status) => {
//     const statusColors = {
//       scheduled: 'status-pending',
//       arrived: 'status-confirmed',
//       in_progress: 'status-in-progress',
//       completed: 'status-completed',
//       cancelled: 'status-cancelled'
//     };
    
//     return <span className={`status-badge ${statusColors[status] || ''}`}>{status}</span>;
//   };

//   if (loading) {
//     return <div className="loading">Loading appointments...</div>;
//   }

//   return (
//     <div className="page-container">
//       <div className="page-header">
//         <h1>Patient Arrival Tracking</h1>
//         <p className="subtitle">Manage patient arrival status for today's appointments</p>
//       </div>

//       {error && <div className="error-message">{error}</div>}

//       <div className="arrival-tracking">
//         {appointments.length === 0 ? (
//           <div className="empty-state">
//             <h3>No appointments scheduled for today</h3>
//             <p>There are no appointments to track for today.</p>
//           </div>
//         ) : (
//           <div className="appointments-list">
//             {appointments.map((appointment) => (
//               <div key={appointment.id} className="appointment-card">
//                 <div className="appointment-header">
//                   <div>
//                     <h3>{appointment.patient?.user?.first_name} {appointment.patient?.user?.last_name}</h3>
//                     <p className="appointment-meta">
//                       Appointment: {formatDate(appointment.appointment_date)}
//                       {appointment.doctor && ` • Dr. ${appointment.doctor.user?.first_name}`}
//                     </p>
//                   </div>
//                   {getStatusBadge(appointment.status)}
//                 </div>
                
//                 <div className="appointment-details">
//                   <div className="detail-row">
//                     <div className="detail-item">
//                       <label>Patient ID:</label>
//                       <span>{appointment.patient_id}</span>
//                     </div>
//                     <div className="detail-item">
//                       <label>Reason:</label>
//                       <span>{appointment.reason}</span>
//                     </div>
//                   </div>
                  
//                   {appointment.symptoms && (
//                     <div className="detail-item">
//                       <label>Symptoms:</label>
//                       <span>{appointment.symptoms}</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="arrival-actions">
//                   {appointment.status === 'scheduled' && (
//                     <button 
//                       onClick={() => handleUpdateArrival(appointment.id, 'arrived')}
//                       className="btn-primary"
//                     >
//                       Mark as Arrived
//                     </button>
//                   )}
                  
//                   {appointment.status === 'arrived' && (
//                     <>
//                       <span className="arrival-timestamp">
//                         Arrived at: {new Date().toLocaleTimeString()}
//                       </span>
//                       <button 
//                         onClick={() => handleUpdateArrival(appointment.id, 'in_progress')}
//                         className="btn-secondary"
//                       >
//                         Move to Consultation
//                       </button>
//                     </>
//                   )}
                  
//                   {appointment.status === 'in_progress' && (
//                     <span className="status-badge status-in-progress">
//                       Currently in consultation
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Arrival Summary */}
//       <div className="arrival-summary">
//         <h3>Today's Arrival Summary</h3>
//         <div className="summary-stats">
//           <div className="summary-item">
//             <span>Total Appointments:</span>
//             <span>{appointments.length}</span>
//           </div>
//           <div className="summary-item">
//             <span>Arrived:</span>
//             <span>{appointments.filter(a => a.status === 'arrived' || a.status === 'in_progress' || a.status === 'completed').length}</span>
//           </div>
//           <div className="summary-item">
//             <span>Pending:</span>
//             <span>{appointments.filter(a => a.status === 'scheduled').length}</span>
//           </div>
//           <div className="summary-item">
//             <span>No-show:</span>
//             <span>{appointments.filter(a => a.status === 'cancelled').length}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NursePatientArrival;



















import React, { useState, useEffect } from 'react';
import staffService from '../../services/staffService';
import { motion } from 'framer-motion';
import { FaUserCheck, FaCalendarAlt, FaClock, FaUser, FaStethoscope, FaCheckCircle, FaHourglassHalf, FaTimesCircle, FaClipboardList } from 'react-icons/fa';

function NursePatientArrival() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTodayAppointments();
  }, []);

  const fetchTodayAppointments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/appointments?date=${new Date().toISOString().split('T')[0]}`);
      const data = await response.json();
      setAppointments(data.appointments || []);
    } catch (error) {
      setError('Failed to fetch appointments');
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateArrival = async (appointmentId, status) => {
    try {
      await staffService.updatePatientArrival(appointmentId, status);
      alert('Arrival status updated successfully');
      fetchTodayAppointments();
    } catch (error) {
      alert('Failed to update arrival status');
      console.error('Error updating arrival:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      scheduled: { 
        bg: 'bg-yellow-100', 
        text: 'text-yellow-800', 
        border: 'border-yellow-200',
        icon: <FaClock className="inline mr-1" />,
        label: 'Scheduled'
      },
      arrived: { 
        bg: 'bg-green-100', 
        text: 'text-green-800', 
        border: 'border-green-200',
        icon: <FaCheckCircle className="inline mr-1" />,
        label: 'Arrived'
      },
      in_progress: { 
        bg: 'bg-blue-100', 
        text: 'text-blue-800', 
        border: 'border-blue-200',
        icon: <FaHourglassHalf className="inline mr-1" />,
        label: 'In Progress'
      },
      completed: { 
        bg: 'bg-gray-100', 
        text: 'text-gray-800', 
        border: 'border-gray-200',
        icon: <FaCheckCircle className="inline mr-1" />,
        label: 'Completed'
      },
      cancelled: { 
        bg: 'bg-red-100', 
        text: 'text-red-800', 
        border: 'border-red-200',
        icon: <FaTimesCircle className="inline mr-1" />,
        label: 'Cancelled'
      }
    };
    
    const config = statusConfig[status] || statusConfig.scheduled;
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${config.bg} ${config.text} ${config.border}`}>
        {config.icon}
        {config.label}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium text-lg">Loading appointments...</p>
        </div>
      </div>
    );
  }

  const arrivedCount = appointments.filter(a => a.status === 'arrived' || a.status === 'in_progress' || a.status === 'completed').length;
  const pendingCount = appointments.filter(a => a.status === 'scheduled').length;
  const cancelledCount = appointments.filter(a => a.status === 'cancelled').length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Patient Arrival Tracking
        </h1>
        <p className="text-gray-600 mt-2">Manage patient arrival status for today's appointments</p>
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-2xl shadow-sm flex items-center gap-3"
        >
          <FaTimesCircle className="flex-shrink-0" />
          <span className="font-medium">{error}</span>
        </motion.div>
      )}

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <FaClipboardList className="text-gray-600 text-xl" />
          <h3 className="text-xl font-bold text-gray-800">Today's Arrival Summary</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 border border-gray-300">
            <p className="text-sm text-gray-600 font-medium mb-1">Total Appointments</p>
            <p className="text-3xl font-bold text-gray-900">{appointments.length}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border border-green-200">
            <p className="text-sm text-green-700 font-medium mb-1">Arrived</p>
            <p className="text-3xl font-bold text-green-800">{arrivedCount}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-4 border border-yellow-200">
            <p className="text-sm text-yellow-700 font-medium mb-1">Pending</p>
            <p className="text-3xl font-bold text-yellow-800">{pendingCount}</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-4 border border-red-200">
            <p className="text-sm text-red-700 font-medium mb-1">No-show</p>
            <p className="text-3xl font-bold text-red-800">{cancelledCount}</p>
          </div>
        </div>
      </motion.div>

      {/* Appointments List */}
      {appointments.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 py-20 px-6"
        >
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCalendarAlt className="text-5xl text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Appointments Today</h3>
            <p className="text-gray-500">There are no appointments to track for today.</p>
          </div>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <motion.div
              key={appointment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Appointment Header */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <FaUser className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {appointment.patient?.user?.first_name} {appointment.patient?.user?.last_name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-gray-500" />
                          {formatDate(appointment.appointment_date)}
                        </span>
                        {appointment.doctor && (
                          <span className="flex items-center gap-1">
                            <FaStethoscope className="text-gray-500" />
                            Dr. {appointment.doctor.user?.first_name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(appointment.status)}
                </div>
              </div>

              {/* Appointment Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-gray-600" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Patient ID</label>
                      <span className="text-gray-800 font-semibold">{appointment.patient_id}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <FaClipboardList className="text-gray-600" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Reason</label>
                      <span className="text-gray-800 font-semibold">{appointment.reason}</span>
                    </div>
                  </div>
                </div>

                {appointment.symptoms && (
                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-200 mb-6">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Symptoms</label>
                    <p className="text-gray-800">{appointment.symptoms}</p>
                  </div>
                )}

                {/* Arrival Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  {appointment.status === 'scheduled' && (
                    <button 
                      onClick={() => handleUpdateArrival(appointment.id, 'arrived')}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                    >
                      <FaUserCheck />
                      Mark as Arrived
                    </button>
                  )}
                  
                  {appointment.status === 'arrived' && (
                    <>
                      <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-xl border border-green-200">
                        <FaClock className="text-green-600" />
                        <span className="text-sm font-semibold">Arrived at: {new Date().toLocaleTimeString()}</span>
                      </div>
                      <button 
                        onClick={() => handleUpdateArrival(appointment.id, 'in_progress')}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                      >
                        <FaStethoscope />
                        Move to Consultation
                      </button>
                    </>
                  )}
                  
                  {appointment.status === 'in_progress' && (
                    <div className="flex items-center gap-2 px-4 py-3 bg-blue-100 text-blue-800 rounded-xl border border-blue-200">
                      <FaHourglassHalf className="text-blue-600 animate-pulse" />
                      <span className="font-semibold">Currently in consultation</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NursePatientArrival;