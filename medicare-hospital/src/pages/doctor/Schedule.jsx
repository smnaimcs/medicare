// // // src/pages/doctor/Schedule.jsx
// // import React, { useState, useEffect } from 'react';
// // import doctorService from '../../services/doctorService';
// // import medicalService from '../../services/medicalService';
// // import DiagnosisModal from '../../components/doctor/DiagnosisModal';
// // import PrescriptionModal from '../../components/doctor/PrescriptionModal';
// // import VitalSignsModal from '../../components/doctor/VitalSignsModal';

// // function DoctorSchedule() {
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [filters, setFilters] = useState({
// //     status: '',
// //     date: ''
// //   });
// //   const [selectedAppointment, setSelectedAppointment] = useState(null);
// //   const [activeModal, setActiveModal] = useState('');

// //   useEffect(() => {
// //     fetchAppointments();
// //   }, [filters]);

// //   const fetchAppointments = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await doctorService.getAppointments(filters);
// //       setAppointments(response.appointments || []);
// //     } catch (error) {
// //       setError('Failed to fetch appointments');
// //       console.error('Error fetching appointments:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleStatusUpdate = async (appointmentId, status) => {
// //     try {
// //       await doctorService.updateAppointmentStatus(appointmentId, status);
// //       alert('Appointment status updated successfully');
// //       fetchAppointments();
// //     } catch (error) {
// //       alert('Failed to update appointment status');
// //       console.error('Error updating appointment status:', error);
// //     }
// //   };

// //   const handleReschedule = async (appointmentId, newDate) => {
// //     try {
// //       await doctorService.rescheduleAppointment(appointmentId, newDate);
// //       alert('Appointment rescheduled successfully');
// //       setActiveModal('');
// //       fetchAppointments();
// //     } catch (error) {
// //       alert('Failed to reschedule appointment');
// //       console.error('Error rescheduling appointment:', error);
// //     }
// //   };

// //   const handleFilterChange = (e) => {
// //     setFilters({
// //       ...filters,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const getStatusBadge = (status) => {
// //     const statusColors = {
// //       pending: 'status-pending',
// //       confirmed: 'status-confirmed',
// //       completed: 'status-completed',
// //       cancelled: 'status-cancelled',
// //       rescheduled: 'status-pending'
// //     };

// //     return <span className={`status-badge ${statusColors[status] || ''}`}>{status}</span>;
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric',
// //       hour: '2-digit',
// //       minute: '2-digit'
// //     });
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading appointments...</div>;
// //   }

// //   return (
// //     <div className="page-container">
// //       <div className="page-header">
// //         <h1>Appointment Schedule</h1>
// //         <div className="filters">
// //           <select 
// //             name="status" 
// //             value={filters.status} 
// //             onChange={handleFilterChange}
// //             className="filter-select"
// //           >
// //             <option value="">All Status</option>
// //             <option value="pending">Pending</option>
// //             <option value="confirmed">Confirmed</option>
// //             <option value="completed">Completed</option>
// //             <option value="cancelled">Cancelled</option>
// //           </select>
// //           <input
// //             type="date"
// //             name="date"
// //             value={filters.date}
// //             onChange={handleFilterChange}
// //             className="filter-select"
// //           />
// //         </div>
// //       </div>

// //       {error && <div className="error-message">{error}</div>}

// //       {appointments.length === 0 ? (
// //         <div className="empty-state">
// //           <h3>No appointments found</h3>
// //           <p>You don't have any appointments scheduled.</p>
// //         </div>
// //       ) : (
// //         <div className="appointments-list">
// //           {appointments.map((appointment) => (
// //             <div key={appointment.id} className="appointment-card">
// //               <div className="appointment-header">
// //                 <div>
// //                   <h3>Appointment with {appointment.patient.user.first_name} {appointment.patient.user.last_name}</h3>
// //                   <p className="appointment-date">{formatDate(appointment.appointment_date)}</p>
// //                 </div>
// //                 {getStatusBadge(appointment.status)}
// //               </div>

// //               <div className="appointment-details">
// //                 <div className="detail-row">
// //                   <div className="detail-item">
// //                     <label>Patient:</label>
// //                     <span>{appointment.patient.user.first_name} {appointment.patient.user.last_name}</span>
// //                   </div>
// //                   <div className="detail-item">
// //                     <label>Duration:</label>
// //                     <span>{appointment.duration} minutes</span>
// //                   </div>
// //                 </div>

// //                 <div className="detail-item">
// //                   <label>Reason:</label>
// //                   <span>{appointment.reason}</span>
// //                 </div>

// //                 {appointment.symptoms && (
// //                   <div className="detail-item">
// //                     <label>Symptoms:</label>
// //                     <span>{appointment.symptoms}</span>
// //                   </div>
// //                 )}

// //                 <div className="detail-row">
// //                   <div className="detail-item">
// //                     <label>Created:</label>
// //                     <span>{formatDate(appointment.created_at)}</span>
// //                   </div>
// //                   <div className="detail-item">
// //                     <label>Last Updated:</label>
// //                     <span>{formatDate(appointment.updated_at)}</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="appointment-actions">
// //                 {(appointment.status === 'pending' || appointment.status === 'confirmed') && (
// //                   <>
// //                     <button 
// //                       onClick={() => handleStatusUpdate(appointment.id, 'completed')}
// //                       className="btn-success"
// //                     >
// //                       Mark Complete
// //                     </button>
// //                     <button 
// //                       onClick={() => {
// //                         setSelectedAppointment(appointment);
// //                         setActiveModal('reschedule');
// //                       }}
// //                       className="btn-secondary"
// //                     >
// //                       Reschedule
// //                     </button>
// //                     <button 
// //                       onClick={() => handleStatusUpdate(appointment.id, 'cancelled')}
// //                       className="btn-danger"
// //                     >
// //                       Cancel
// //                     </button>
// //                   </>
// //                 )}
// //                 <button 
// //                   onClick={() => {
// //                     setSelectedAppointment(appointment);
// //                     setActiveModal('diagnosis');
// //                   }}
// //                   className="btn-primary"
// //                 >
// //                   Add Diagnosis
// //                 </button>
// //                 <button 
// //                   onClick={() => {
// //                     setSelectedAppointment(appointment);
// //                     setActiveModal('prescription');
// //                   }}
// //                   className="btn-primary"
// //                 >
// //                   Add Prescription
// //                 </button>
// //                 <button 
// //                   onClick={() => {
// //                     setSelectedAppointment(appointment);
// //                     setActiveModal('vital-signs');
// //                   }}
// //                   className="btn-secondary"
// //                 >
// //                   Record Vitals
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* Reschedule Modal */}
// //       {activeModal === 'reschedule' && selectedAppointment && (
// //         <RescheduleModal
// //           appointment={selectedAppointment}
// //           onReschedule={handleReschedule}
// //           onClose={() => setActiveModal('')}
// //         />
// //       )}

// //       {/* Diagnosis Modal */}
// //       {activeModal === 'diagnosis' && selectedAppointment && (
// //         <DiagnosisModal
// //           appointment={selectedAppointment}
// //           onClose={() => setActiveModal('')}
// //           onSuccess={() => {
// //             setActiveModal('');
// //             fetchAppointments();
// //           }}
// //         />
// //       )}

// //       {/* Prescription Modal */}
// //       {activeModal === 'prescription' && selectedAppointment && (
// //         <PrescriptionModal
// //           appointment={selectedAppointment}
// //           onClose={() => setActiveModal('')}
// //           onSuccess={() => {
// //             setActiveModal('');
// //             fetchAppointments();
// //           }}
// //         />
// //       )}

// //       {/* Vital Signs Modal */}
// //       {activeModal === 'vital-signs' && selectedAppointment && (
// //         <VitalSignsModal
// //           appointment={selectedAppointment}
// //           onClose={() => setActiveModal('')}
// //           onSuccess={() => {
// //             setActiveModal('');
// //             fetchAppointments();
// //           }}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // // Reschedule Modal Component
// // function RescheduleModal({ appointment, onReschedule, onClose }) {
// //   const [newDate, setNewDate] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!newDate) {
// //       alert('Please select a new date and time');
// //       return;
// //     }

// //     setLoading(true);
// //     await onReschedule(appointment.id, newDate);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal">
// //         <div className="modal-header">
// //           <h2>Reschedule Appointment</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label>New Appointment Date & Time:</label>
// //             <input
// //               type="datetime-local"
// //               value={newDate}
// //               onChange={(e) => setNewDate(e.target.value)}
// //               min={new Date().toISOString().slice(0, 16)}
// //               required
// //             />
// //           </div>
// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Rescheduling...' : 'Reschedule'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DoctorSchedule;












// /// src/pages/doctor/Schedule.jsx
// import React, { useState, useEffect } from 'react';
// import doctorService from '../../services/doctorService';
// import medicalService from '../../services/medicalService';
// import DiagnosisModal from '../../components/doctor/DiagnosisModal';
// import PrescriptionModal from '../../components/doctor/PrescriptionModal';
// import VitalSignsModal from '../../components/doctor/VitalSignsModal';

// function DoctorSchedule() {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({ status: '', date: '' });
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [activeModal, setActiveModal] = useState('');

//   useEffect(() => {
//     fetchAppointments();
//   }, [filters]);

//   const fetchAppointments = async () => {
//     try {
//       setLoading(true);
//       const response = await doctorService.getAppointments(filters);
//       setAppointments(response.appointments || []);
//     } catch (error) {
//       setError('Failed to fetch appointments');
//       console.error('Error fetching appointments:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (appointmentId, status) => {
//     try {
//       await doctorService.updateAppointmentStatus(appointmentId, status);
//       alert('Appointment status updated successfully');
//       fetchAppointments();
//     } catch (error) {
//       alert('Failed to update appointment status');
//       console.error('Error updating appointment status:', error);
//     }
//   };

//   const handleReschedule = async (appointmentId, newDate) => {
//     try {
//       await doctorService.rescheduleAppointment(appointmentId, newDate);
//       alert('Appointment rescheduled successfully');
//       setActiveModal('');
//       fetchAppointments();
//     } catch (error) {
//       alert('Failed to reschedule appointment');
//       console.error('Error rescheduling appointment:', error);
//     }
//   };

//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const getStatusBadge = (status) => {
//     const colors = {
//       pending: 'badge-warning',
//       confirmed: 'badge-info',
//       completed: 'badge-success',
//       cancelled: 'badge-error',
//       rescheduled: 'badge-warning'
//     };

//     return <span className={`badge ${colors[status]}`}>{status}</span>;
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleString('en-US', {
//       year: 'numeric', month: 'long', day: 'numeric',
//       hour: '2-digit', minute: '2-digit'
//     });
//   };

//   if (loading) return <div className="flex justify-center p-10 text-xl">Loading appointments...</div>;

//   return (
//     <div className="p-6 w-full">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-3xl font-bold">Appointment Schedule</h1>

//         <div className="flex gap-3">
//           <select
//             name="status"
//             value={filters.status}
//             onChange={handleFilterChange}
//             className="select select-bordered select-sm w-40"
//           >
//             <option value="">All Status</option>
//             <option value="pending">Pending</option>
//             <option value="confirmed">Confirmed</option>
//             <option value="completed">Completed</option>
//             <option value="cancelled">Cancelled</option>
//           </select>

//           <input
//             type="date"
//             name="date"
//             value={filters.date}
//             onChange={handleFilterChange}
//             className="input input-bordered input-sm w-40"
//           />
//         </div>
//       </div>

//       {error && <div className="alert alert-error mb-4">{error}</div>}

//       {appointments.length === 0 ? (
//         <div className="text-center py-10">
//           <h3 className="text-xl font-semibold">No appointments found</h3>
//           <p>You don't have any appointments scheduled.</p>
//         </div>
//       ) : (
//         <div className="grid gap-4">
//           {appointments.map((appointment) => (
//             <div key={appointment.id} className="card bg-white shadow-lg p-4">
//               <div className="flex justify-between items-center mb-2">
//                 <div>
//                   <h3 className="text-xl font-semibold">
//                     Appointment with {appointment.patient.user.first_name} {appointment.patient.user.last_name}
//                   </h3>
//                   <p className="text-sm opacity-70">{formatDate(appointment.appointment_date)}</p>
//                 </div>
//                 {getStatusBadge(appointment.status)}
//               </div>

//               <div className="space-y-1 text-sm">
//                 <p><span className="font-semibold">Patient:</span> {appointment.patient.user.first_name} {appointment.patient.user.last_name}</p>
//                 <p><span className="font-semibold">Duration:</span> {appointment.duration} minutes</p>
//                 <p><span className="font-semibold">Reason:</span> {appointment.reason}</p>
//                 {appointment.symptoms && <p><span className="font-semibold">Symptoms:</span> {appointment.symptoms}</p>}
//                 <p><span className="font-semibold">Created:</span> {formatDate(appointment.created_at)}</p>
//                 <p><span className="font-semibold">Updated:</span> {formatDate(appointment.updated_at)}</p>
//               </div>

//               <div className="flex flex-wrap gap-2 mt-4">
//                 {(appointment.status === 'pending' || appointment.status === 'confirmed') && (
//                   <>
//                     <button onClick={() => handleStatusUpdate(appointment.id, 'completed')} className="btn btn-success btn-sm">
//                       Mark Complete
//                     </button>
//                     <button onClick={() => { setSelectedAppointment(appointment); setActiveModal('reschedule'); }} className="btn btn-accent btn-sm">
//                       Reschedule
//                     </button>
//                     <button onClick={() => handleStatusUpdate(appointment.id, 'cancelled')} className="btn btn-error btn-sm">
//                       Cancel
//                     </button>
//                   </>
//                 )}
//                 <button onClick={() => { setSelectedAppointment(appointment); setActiveModal('diagnosis'); }} className="btn btn-primary btn-sm">
//                   Add Diagnosis
//                 </button>
//                 <button onClick={() => { setSelectedAppointment(appointment); setActiveModal('prescription'); }} className="btn btn-secondary btn-sm">
//                   Add Prescription
//                 </button>
//                 <button onClick={() => { setSelectedAppointment(appointment); setActiveModal('vital-signs'); }} className="btn btn-info btn-sm">
//                   Record Vitals
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Modals */}
//       {activeModal === 'reschedule' && selectedAppointment && (
//         <RescheduleModal appointment={selectedAppointment} onReschedule={handleReschedule} onClose={() => setActiveModal('')} />
//       )}

//       {activeModal === 'diagnosis' && selectedAppointment && (
//         <DiagnosisModal appointment={selectedAppointment} onClose={() => setActiveModal('')} onSuccess={() => { setActiveModal(''); fetchAppointments(); }} />
//       )}

//       {activeModal === 'prescription' && selectedAppointment && (
//         <PrescriptionModal appointment={selectedAppointment} onClose={() => setActiveModal('')} onSuccess={() => { setActiveModal(''); fetchAppointments(); }} />
//       )}

//       {activeModal === 'vital-signs' && selectedAppointment && (
//         <VitalSignsModal appointment={selectedAppointment} onClose={() => setActiveModal('')} onSuccess={() => { setActiveModal(''); fetchAppointments(); }} />
//       )}
//     </div>
//   );
// }

// export default DoctorSchedule;












// src/pages/doctor/Schedule.jsx
import React, { useState, useEffect } from 'react';
import doctorService from '../../services/doctorService';
import medicalService from '../../services/medicalService';
import DiagnosisModal from '../../components/doctor/DiagnosisModal';
import PrescriptionModal from '../../components/doctor/PrescriptionModal';
import VitalSignsModal from '../../components/doctor/VitalSignsModal';

// Reschedule Modal Component
function RescheduleModal({ appointment, onReschedule, onClose }) {
  const [newDate, setNewDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newDate) {
      onReschedule(appointment.id, newDate);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-slideUp">
        <div className="border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Reschedule Appointment</h2>
            <p className="text-sm text-gray-500 mt-1">Select a new date and time</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-base text-gray-800 mb-3">Current Appointment</h4>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Patient:</span> {appointment.patient.user.first_name} {appointment.patient.user.last_name}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-semibold">Current Date:</span> {new Date(appointment.appointment_date).toLocaleString()}
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              New Date & Time *
            </label>
            <input
              type="datetime-local"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              min={new Date().toISOString().slice(0, 16)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              Reschedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function DoctorSchedule() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({ status: '', date: '' });
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [activeModal, setActiveModal] = useState('');

  useEffect(() => {
    fetchAppointments();
  }, [filters]);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await doctorService.getAppointments(filters);
      setAppointments(response.appointments || []);
    } catch (error) {
      setError('Failed to fetch appointments');
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (appointmentId, status) => {
    try {
      await doctorService.updateAppointmentStatus(appointmentId, status);
      alert('Appointment status updated successfully');
      fetchAppointments();
    } catch (error) {
      alert('Failed to update appointment status');
      console.error('Error updating appointment status:', error);
    }
  };

  const handleReschedule = async (appointmentId, newDate) => {
    try {
      await doctorService.rescheduleAppointment(appointmentId, newDate);
      alert('Appointment rescheduled successfully');
      setActiveModal('');
      fetchAppointments();
    } catch (error) {
      alert('Failed to reschedule appointment');
      console.error('Error rescheduling appointment:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const getStatusBadge = (status) => {
    const colors = {
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
      confirmed: 'bg-sky-50 text-sky-700 border-sky-200',
      completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      cancelled: 'bg-red-50 text-red-700 border-red-200',
      rescheduled: 'bg-purple-50 text-purple-700 border-purple-200'
    };

    return (
      <span className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full border ${colors[status] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
        {status.toUpperCase()}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-600 mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }

          .animate-slideUp {
            animation: slideUp 0.4s ease-out;
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.5s ease-out;
          }

          .stagger-1 {
            animation-delay: 0.1s;
            opacity: 0;
            animation-fill-mode: forwards;
          }

          .stagger-2 {
            animation-delay: 0.2s;
            opacity: 0;
            animation-fill-mode: forwards;
          }

          .stagger-3 {
            animation-delay: 0.3s;
            opacity: 0;
            animation-fill-mode: forwards;
          }

          .stagger-4 {
            animation-delay: 0.4s;
            opacity: 0;
            animation-fill-mode: forwards;
          }

          .stagger-5 {
            animation-delay: 0.5s;
            opacity: 0;
            animation-fill-mode: forwards;
          }

          .stagger-6 {
            animation-delay: 0.6s;
            opacity: 0;
            animation-fill-mode: forwards;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 animate-slideUp">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Appointment Schedule
              </h1>
              <p className="text-gray-500 mt-1 text-sm">Manage your patient appointments and medical records</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <select
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2.5 pr-10 text-gray-700 text-sm font-medium focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <option value="">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={filters.date}
                  onChange={handleFilterChange}
                  className="bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 text-sm font-medium focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl shadow-sm flex items-center gap-3 animate-slideUp">
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* Empty State */}
        {appointments.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6 animate-slideUp">
            <div className="text-center max-w-md mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No appointments found</h3>
              <p className="text-gray-500">You don't have any appointments scheduled.</p>
            </div>
          </div>
        ) : (
          /* Appointments Grid */
          <div className="grid grid-cols-1 gap-6">
            {appointments.map((appointment, index) => (
              <div
                key={appointment.id}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 animate-slideInLeft stagger-${Math.min(index + 1, 6)}`}
              >
                {/* Appointment Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        Appointment with {appointment.patient.user.first_name} {appointment.patient.user.last_name}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formatDate(appointment.appointment_date)}
                      </p>
                    </div>
                  </div>
                  {getStatusBadge(appointment.status)}
                </div>

                {/* Appointment Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Patient</label>
                      <span className="text-gray-800 font-medium">
                        {appointment.patient.user.first_name} {appointment.patient.user.last_name}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Duration</label>
                      <span className="text-gray-800 font-medium">{appointment.duration} minutes</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:col-span-2">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Reason</label>
                      <span className="text-gray-800 font-medium">{appointment.reason}</span>
                    </div>
                  </div>

                  {appointment.symptoms && (
                    <div className="flex items-start gap-3 md:col-span-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Symptoms</label>
                        <span className="text-gray-800 font-medium">{appointment.symptoms}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Created</label>
                      <span className="text-gray-800 font-medium text-sm">{formatDate(appointment.created_at)}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Updated</label>
                      <span className="text-gray-800 font-medium text-sm">{formatDate(appointment.updated_at)}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {(appointment.status === 'pending' || appointment.status === 'confirmed') && (
                      <>
                        <button
                          onClick={() => handleStatusUpdate(appointment.id, 'completed')}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Mark Complete
                        </button>
                        <button
                          onClick={() => {
                            setSelectedAppointment(appointment);
                            setActiveModal('reschedule');
                          }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Reschedule
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(appointment.id, 'cancelled')}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Cancel
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => {
                        setSelectedAppointment(appointment);
                        setActiveModal('diagnosis');
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Add Diagnosis
                    </button>
                    <button
                      onClick={() => {
                        setSelectedAppointment(appointment);
                        setActiveModal('prescription');
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Add Prescription
                    </button>
                    <button
                      onClick={() => {
                        setSelectedAppointment(appointment);
                        setActiveModal('vital-signs');
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Record Vitals
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modals */}
        {activeModal === 'reschedule' && selectedAppointment && (
          <RescheduleModal
            appointment={selectedAppointment}
            onReschedule={handleReschedule}
            onClose={() => setActiveModal('')}
          />
        )}

        {activeModal === 'diagnosis' && selectedAppointment && (
          <DiagnosisModal
            appointment={selectedAppointment}
            onClose={() => setActiveModal('')}
            onSuccess={() => {
              setActiveModal('');
              fetchAppointments();
            }}
          />
        )}

        {activeModal === 'prescription' && selectedAppointment && (
          <PrescriptionModal
            appointment={selectedAppointment}
            onClose={() => setActiveModal('')}
            onSuccess={() => {
              setActiveModal('');
              fetchAppointments();
            }}
          />
        )}

        {activeModal === 'vital-signs' && selectedAppointment && (
          <VitalSignsModal
            appointment={selectedAppointment}
            onClose={() => setActiveModal('')}
            onSuccess={() => {
              setActiveModal('');
              fetchAppointments();
            }}
          />
        )}
      </div>
    </div>
  );
}

export default DoctorSchedule;