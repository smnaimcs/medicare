// // // src/pages/admin/Appointments.jsx
// // import React, { useState, useEffect } from 'react';
// // import adminService from '../../services/adminService';

// // function AdminAppointments() {
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [filters, setFilters] = useState({
// //     status: '',
// //     date: '',
// //     page: 1,
// //     per_page: 20
// //   });
// //   const [selectedAppointment, setSelectedAppointment] = useState(null);
// //   const [showEditModal, setShowEditModal] = useState(false);

// //   useEffect(() => {
// //     fetchAppointments();
// //   }, [filters]);

// //   const fetchAppointments = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getAppointments(filters);
// //       setAppointments(response.appointments || []);
// //     } catch (error) {
// //       setError('Failed to fetch appointments');
// //       console.error('Error fetching appointments:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleEditAppointment = (appointment) => {
// //     setSelectedAppointment(appointment);
// //     setShowEditModal(true);
// //   };

// //   const handleUpdateAppointment = async (appointmentData) => {
// //     try {
// //       await adminService.updateAppointment(selectedAppointment.id, appointmentData);
// //       alert('Appointment updated successfully');
// //       setShowEditModal(false);
// //       setSelectedAppointment(null);
// //       fetchAppointments();
// //     } catch (error) {
// //       alert('Failed to update appointment');
// //       console.error('Error updating appointment:', error);
// //     }
// //   };

// //   const handleFilterChange = (e) => {
// //     setFilters({
// //       ...filters,
// //       [e.target.name]: e.target.value,
// //       page: 1
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
// //         <h1>Appointment Management</h1>
// //       </div>

// //       {/* Filters */}
// //       <div className="filters-section">
// //         <div className="filter-group">
// //           <label>Status:</label>
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
// //         </div>
// //         <div className="filter-group">
// //           <label>Date:</label>
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
// //           <p>No appointments match your current filters.</p>
// //         </div>
// //       ) : (
// //         <div className="appointments-list">
// //           {appointments.map((appointment) => (
// //             <div key={appointment.id} className="appointment-card">
// //               <div className="appointment-header">
// //                 <div>
// //                   <h3>
// //                     {appointment.patient.user.first_name} {appointment.patient.user.last_name} 
// //                     <span className="appointment-with"> with </span>
// //                     Dr. {appointment.doctor.user.first_name} {appointment.doctor.user.last_name}
// //                   </h3>
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
// //                     <label>Doctor:</label>
// //                     <span>Dr. {appointment.doctor.user.first_name} {appointment.doctor.user.last_name}</span>
// //                   </div>
// //                 </div>
                
// //                 <div className="detail-row">
// //                   <div className="detail-item">
// //                     <label>Specialization:</label>
// //                     <span>{appointment.doctor.specialization}</span>
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
// //                 <button 
// //                   onClick={() => handleEditAppointment(appointment)}
// //                   className="btn-primary"
// //                 >
// //                   Edit Appointment
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* Edit Appointment Modal */}
// //       {showEditModal && selectedAppointment && (
// //         <EditAppointmentModal
// //           appointment={selectedAppointment}
// //           onClose={() => {
// //             setShowEditModal(false);
// //             setSelectedAppointment(null);
// //           }}
// //           onSave={handleUpdateAppointment}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // // Edit Appointment Modal Component
// // function EditAppointmentModal({ appointment, onClose, onSave }) {
// //   const [formData, setFormData] = useState({
// //     status: appointment.status,
// //     appointment_date: appointment.appointment_date.split('T')[0] + 'T' + appointment.appointment_date.split('T')[1].substring(0, 5),
// //     duration: appointment.duration
// //   });
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     await onSave(formData);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal">
// //         <div className="modal-header">
// //           <h2>Edit Appointment</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>

// //         <div className="appointment-info">
// //           <h4>Appointment Details</h4>
// //           <p><strong>Patient:</strong> {appointment.patient.user.first_name} {appointment.patient.user.last_name}</p>
// //           <p><strong>Doctor:</strong> Dr. {appointment.doctor.user.first_name} {appointment.doctor.user.last_name}</p>
// //           <p><strong>Reason:</strong> {appointment.reason}</p>
// //         </div>

// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label>Status *</label>
// //             <select
// //               name="status"
// //               value={formData.status}
// //               onChange={handleChange}
// //               required
// //             >
// //               <option value="pending">Pending</option>
// //               <option value="confirmed">Confirmed</option>
// //               <option value="completed">Completed</option>
// //               <option value="cancelled">Cancelled</option>
// //             </select>
// //           </div>

// //           <div className="form-group">
// //             <label>Appointment Date & Time *</label>
// //             <input
// //               type="datetime-local"
// //               name="appointment_date"
// //               value={formData.appointment_date}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Duration (minutes) *</label>
// //             <input
// //               type="number"
// //               name="duration"
// //               value={formData.duration}
// //               onChange={handleChange}
// //               min="15"
// //               max="120"
// //               required
// //             />
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Updating...' : 'Update Appointment'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminAppointments;











// // Converted to TailwindCSS + DaisyUI
// // src/pages/admin/Appointments.jsx
// import React, { useState, useEffect } from "react";
// import adminService from "../../services/adminService";

// function AdminAppointments() {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [filters, setFilters] = useState({ status: "", date: "", page: 1, per_page: 20 });
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => { fetchAppointments(); }, [filters]);

//   const fetchAppointments = async () => {
//     try {
//       setLoading(true);
//       const response = await adminService.getAppointments(filters);
//       setAppointments(response.appointments || []);
//     } catch (error) {
//       setError("Failed to fetch appointments");
//     } finally { setLoading(false); }
//   };

//   const handleEditAppointment = (appt) => { setSelectedAppointment(appt); setShowEditModal(true); };

//   const handleUpdateAppointment = async (data) => {
//     try {
//       await adminService.updateAppointment(selectedAppointment.id, data);
//       alert("Appointment updated successfully");
//       setShowEditModal(false);
//       setSelectedAppointment(null);
//       fetchAppointments();
//     } catch (error) { alert("Failed to update appointment"); }
//   };

//   const handleFilterChange = (e) => { setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 }); };

//   const getStatusBadge = (status) => {
//     const color = {
//       pending: "badge-warning",
//       confirmed: "badge-info",
//       completed: "badge-success",
//       cancelled: "badge-error",
//       rescheduled: "badge-warning",
//     }[status];
//     return <span className={`badge ${color}`}>{status}</span>;
//   };

//   const formatDate = (d) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });

//   if (loading) return <div className="text-center py-10 text-lg">Loading appointments...</div>;

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Appointment Management</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         <div>
//           <label className="block mb-1">Status:</label>
//           <select name="status" value={filters.status} onChange={handleFilterChange} className="select select-bordered w-full max-w-xs">
//             <option value="">All Status</option>
//             <option value="pending">Pending</option>
//             <option value="confirmed">Confirmed</option>
//             <option value="completed">Completed</option>
//             <option value="cancelled">Cancelled</option>
//           </select>
//         </div>

//         <div>
//           <label className="block mb-1">Date:</label>
//           <input type="date" name="date" value={filters.date} onChange={handleFilterChange} className="input input-bordered w-full max-w-xs" />
//         </div>
//       </div>

//       {error && <div className="alert alert-error shadow-lg mb-4">{error}</div>}

//       {appointments.length === 0 ? (
//         <div className="text-center py-10">
//           <h3 className="text-xl font-semibold">No appointments found</h3>
//           <p>No appointments match your current filters.</p>
//         </div>
//       ) : (
//         <div className="grid gap-6">
//           {appointments.map((a) => (
//             <div key={a.id} className="card bg-base-100 shadow-xl p-5">
//               <div className="flex justify-between items-center border-b pb-3 mb-3">
//                 <div>
//                   <h3 className="text-lg font-semibold">
//                     {a.patient.user.first_name} {a.patient.user.last_name} <span className="text-sm">with</span> Dr. {a.doctor.user.first_name} {a.doctor.user.last_name}
//                   </h3>
//                   <p className="text-sm opacity-70">{formatDate(a.appointment_date)}</p>
//                 </div>
//                 {getStatusBadge(a.status)}
//               </div>

//               <div className="space-y-2">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div><label className="font-semibold">Patient:</label> {a.patient.user.first_name} {a.patient.user.last_name}</div>
//                   <div><label className="font-semibold">Doctor:</label> Dr. {a.doctor.user.first_name} {a.doctor.user.last_name}</div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div><label className="font-semibold">Specialization:</label> {a.doctor.specialization}</div>
//                   <div><label className="font-semibold">Duration:</label> {a.duration} minutes</div>
//                 </div>

//                 <div><label className="font-semibold">Reason:</label> {a.reason}</div>
//                 {a.symptoms && <div><label className="font-semibold">Symptoms:</label> {a.symptoms}</div>}

//                 <div className="grid grid-cols-2 gap-4">
//                   <div><label className="font-semibold">Created:</label> {formatDate(a.created_at)}</div>
//                   <div><label className="font-semibold">Last Updated:</label> {formatDate(a.updated_at)}</div>
//                 </div>
//               </div>

//               <div className="mt-4 text-right">
//                 <button className="btn btn-primary" onClick={() => handleEditAppointment(a)}>Edit Appointment</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {showEditModal && selectedAppointment && (
//         <EditAppointmentModal appointment={selectedAppointment} onClose={() => { setShowEditModal(false); setSelectedAppointment(null); }} onSave={handleUpdateAppointment} />
//       )}
//     </div>
//   );
// }

// function EditAppointmentModal({ appointment, onClose, onSave }) {
//   const [formData, setFormData] = useState({
//     status: appointment.status,
//     appointment_date: appointment.appointment_date.split("T")[0] + "T" + appointment.appointment_date.split("T")[1].substring(0, 5),
//     duration: appointment.duration,
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault(); setLoading(true); await onSave(formData); setLoading(false);
//   };

//   return (
//     <dialog open className="modal modal-open">
//       <div className="modal-box max-w-lg">
//         <div className="flex justify-between items-center mb-3">
//           <h2 className="text-xl font-bold">Edit Appointment</h2>
//           <button onClick={onClose} className="btn btn-sm btn-circle">✕</button>
//         </div>

//         <div className="mb-4">
//           <h4 className="font-semibold mb-1">Appointment Details</h4>
//           <p><strong>Patient:</strong> {appointment.patient.user.first_name} {appointment.patient.user.last_name}</p>
//           <p><strong>Doctor:</strong> Dr. {appointment.doctor.user.first_name} {appointment.doctor.user.last_name}</p>
//           <p><strong>Reason:</strong> {appointment.reason}</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="form-control">
//             <label className="label">Status *</label>
//             <select name="status" value={formData.status} onChange={handleChange} required className="select select-bordered">
//               <option value="pending">Pending</option>
//               <option value="confirmed">Confirmed</option>
//               <option value="completed">Completed</option>
//               <option value="cancelled">Cancelled</option>
//             </select>
//           </div>

//           <div className="form-control">
//             <label className="label">Appointment Date & Time *</label>
//             <input type="datetime-local" name="appointment_date" value={formData.appointment_date} onChange={handleChange} required className="input input-bordered" />
//           </div>

//           <div className="form-control">
//             <label className="label">Duration (minutes) *</label>
//             <input type="number" name="duration" value={formData.duration} onChange={handleChange} min="15" max="120" required className="input input-bordered" />
//           </div>

//           <div className="modal-action">
//             <button type="button" className="btn" onClick={onClose}>Cancel</button>
//             <button type="submit" disabled={loading} className="btn btn-primary">{loading ? "Updating..." : "Update Appointment"}</button>
//           </div>
//         </form>
//       </div>
//     </dialog>
//   );
// }

// export default AdminAppointments;














// src/pages/admin/Appointments.jsx
import React, { useState, useEffect } from "react";
import adminService from "../../services/adminService";

function AdminAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({ status: "", date: "", page: 1, per_page: 20 });
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => { fetchAppointments(); }, [filters]);

  // Add keyframes for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      @keyframes modalSlideIn {
        from {
          opacity: 0;
          transform: scale(0.95) translateY(20px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }
      .animate-slideInRight {
        animation: slideInRight 0.5s ease-out forwards;
      }
      .animate-scaleIn {
        animation: scaleIn 0.4s ease-out forwards;
      }
      .animate-modalSlideIn {
        animation: modalSlideIn 0.3s ease-out forwards;
      }
      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-500 { animation-delay: 0.5s; }
      
      .appointment-card-hover {
        transition: all 0.3s ease;
      }
      .appointment-card-hover:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await adminService.getAppointments(filters);
      setAppointments(response.appointments || []);
    } catch (error) {
      setError("Failed to fetch appointments");
    } finally { setLoading(false); }
  };

  const handleEditAppointment = (appt) => { setSelectedAppointment(appt); setShowEditModal(true); };

  const handleUpdateAppointment = async (data) => {
    try {
      await adminService.updateAppointment(selectedAppointment.id, data);
      alert("Appointment updated successfully");
      setShowEditModal(false);
      setSelectedAppointment(null);
      fetchAppointments();
    } catch (error) { alert("Failed to update appointment"); }
  };

  const handleFilterChange = (e) => { setFilters({ ...filters, [e.target.name]: e.target.value, page: 1 }); };

  const getStatusBadge = (status) => {
    const styles = {
      pending: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 border border-yellow-300",
      confirmed: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border border-blue-300",
      completed: "bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-300",
      cancelled: "bg-gradient-to-r from-red-100 to-red-200 text-red-700 border border-red-300",
      rescheduled: "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 border border-orange-300",
    }[status];
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles}`}>{status}</span>;
  };

  const formatDate = (d) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center space-y-4">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
          </div>
          <p className="text-gray-600 font-medium">Loading appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="opacity-0 animate-fadeInUp">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Appointment Management
            </h1>
          </div>
          <p className="text-gray-500 ml-7">Track and manage all patient appointments</p>
        </div>

        {/* Filters Section */}
        <div className="opacity-0 animate-slideInRight delay-100 bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter by Status
              </label>
              <select 
                name="status" 
                value={filters.status} 
                onChange={handleFilterChange} 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Filter by Date
              </label>
              <input 
                type="date" 
                name="date" 
                value={filters.date} 
                onChange={handleFilterChange} 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-4 rounded-lg border border-blue-200">
              <div className="text-sm text-blue-600 font-semibold">Total Appointments</div>
              <div className="text-3xl font-bold text-blue-700">{appointments.length}</div>
            </div>
          </div>
        </div>

        {error && (
          <div className="opacity-0 animate-slideInRight delay-200 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-red-800 font-medium">{error}</span>
            </div>
          </div>
        )}

        {appointments.length === 0 ? (
          <div className="opacity-0 animate-scaleIn delay-300 bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
            <div className="max-w-md mx-auto space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-800">No appointments found</h3>
                <p className="text-gray-500">No appointments match your current filters.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            {appointments.map((a, index) => (
              <div 
                key={a.id} 
                className={`opacity-0 animate-fadeInUp ${
                  index === 0 ? 'delay-100' : 
                  index === 1 ? 'delay-200' : 
                  index === 2 ? 'delay-300' : 
                  index === 3 ? 'delay-400' : 
                  'delay-500'
                } appointment-card-hover bg-white rounded-xl shadow-md border border-gray-200 p-6`}
              >
                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {a.patient.user.first_name} {a.patient.user.last_name} 
                        <span className="text-sm font-normal text-gray-500"> with </span>
                        Dr. {a.doctor.user.first_name} {a.doctor.user.last_name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formatDate(a.appointment_date)}
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(a.status)}
                </div>

                {/* Card Body */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase">Patient</label>
                        <span className="text-sm font-medium text-gray-800">{a.patient.user.first_name} {a.patient.user.last_name}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase">Doctor</label>
                        <span className="text-sm font-medium text-gray-800">Dr. {a.doctor.user.first_name} {a.doctor.user.last_name}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase">Specialization</label>
                        <span className="text-sm font-medium text-gray-800">{a.doctor.specialization}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase">Duration</label>
                        <span className="text-sm font-medium text-gray-800">{a.duration} minutes</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <label className="block text-xs font-semibold text-blue-700 uppercase mb-1">Reason</label>
                    <p className="text-sm text-gray-700">{a.reason}</p>
                  </div>

                  {a.symptoms && (
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <label className="block text-xs font-semibold text-yellow-700 uppercase mb-1">Symptoms</label>
                      <p className="text-sm text-gray-700">{a.symptoms}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span><strong>Created:</strong> {formatDate(a.created_at)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span><strong>Last Updated:</strong> {formatDate(a.updated_at)}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 flex justify-end">
                  <button 
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2" 
                    onClick={() => handleEditAppointment(a)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {showEditModal && selectedAppointment && (
          <EditAppointmentModal 
            appointment={selectedAppointment} 
            onClose={() => { setShowEditModal(false); setSelectedAppointment(null); }} 
            onSave={handleUpdateAppointment} 
          />
        )}
      </div>
    </div>
  );
}

function EditAppointmentModal({ appointment, onClose, onSave }) {
  const [formData, setFormData] = useState({
    status: appointment.status,
    appointment_date: appointment.appointment_date.split("T")[0] + "T" + appointment.appointment_date.split("T")[1].substring(0, 5),
    duration: appointment.duration,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); await onSave(formData); setLoading(false);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="opacity-0 animate-modalSlideIn bg-white rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Edit Appointment</h2>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:rotate-90"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Appointment Details Summary */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-b border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Appointment Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-gray-700"><strong className="text-gray-800">Patient:</strong> {appointment.patient.user.first_name} {appointment.patient.user.last_name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-gray-700"><strong className="text-gray-800">Doctor:</strong> Dr. {appointment.doctor.user.first_name} {appointment.doctor.user.last_name}</span>
            </div>
          </div>
          <div className="mt-2 flex items-start gap-2 text-sm">
            <svg className="w-4 h-4 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-gray-700"><strong className="text-gray-800">Reason:</strong> {appointment.reason}</span>
          </div>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-gradient-to-br from-gray-50 to-white">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Status *
            </label>
            <select 
              name="status" 
              value={formData.status} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Appointment Date & Time *
            </label>
            <input 
              type="datetime-local" 
              name="appointment_date" 
              value={formData.appointment_date} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Duration (minutes) *
            </label>
            <input 
              type="number" 
              name="duration" 
              value={formData.duration} 
              onChange={handleChange} 
              min="15" 
              max="120" 
              required 
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all duration-200"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={loading} 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Updating..." : "Update Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminAppointments;