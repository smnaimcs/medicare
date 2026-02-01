// // // src/pages/patient/Appointments.jsx
// // import React, { useState, useEffect } from 'react';
// // import patientService from '../../services/patientService';

// // function Appointments() {
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [filters, setFilters] = useState({
// //     status: ''
// //   });

// //   useEffect(() => {
// //     fetchAppointments();
// //   }, [filters]);

// //   const fetchAppointments = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await patientService.getAppointments(filters);
// //       setAppointments(response.appointments || []);
// //     } catch (error) {
// //       setError('Failed to fetch appointments');
// //       console.error('Error fetching appointments:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleCancelAppointment = async (appointmentId) => {
// //     if (!window.confirm('Are you sure you want to cancel this appointment?')) {
// //       return;
// //     }

// //     try {
// //       await patientService.cancelAppointment(appointmentId);
// //       alert('Appointment cancelled successfully');
// //       fetchAppointments(); // Refresh the list
// //     } catch (error) {
// //       alert('Failed to cancel appointment');
// //       console.error('Error cancelling appointment:', error);
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
// //       cancelled: 'status-cancelled'
// //     };
    
// //     return <span className={`status-badge ${statusColors[status] || ''}`}>{status}</span>;
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric'
// //     });
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading appointments...</div>;
// //   }

// //   return (
// //     <div className="page-container">
// //       <div className="page-header">
// //         <h1>My Appointments</h1>
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
// //                 <h3>Appointment with Dr. {appointment.doctor.user.first_name} {appointment.doctor.user.last_name}</h3>
// //                 {getStatusBadge(appointment.status)}
// //               </div>
              
// //               <div className="appointment-details">
// //                 <div className="detail-row">
// //                   <div className="detail-item">
// //                     <label>Date:</label>
// //                     <span>{formatDate(appointment.appointment_date)}</span>
// //                   </div>
// //                   <div className="detail-item">
// //                     <label>Duration:</label>
// //                     <span>{appointment.duration} minutes</span>
// //                   </div>
// //                 </div>
                
// //                 <div className="detail-row">
// //                   <div className="detail-item">
// //                     <label>Doctor:</label>
// //                     <span>Dr. {appointment.doctor.user.first_name} {appointment.doctor.user.last_name}</span>
// //                   </div>
// //                   <div className="detail-item">
// //                     <label>Specialization:</label>
// //                     <span>{appointment.doctor.specialization}</span>
// //                   </div>
// //                 </div>

// //                 {appointment.reason && (
// //                   <div className="detail-item">
// //                     <label>Reason:</label>
// //                     <span>{appointment.reason}</span>
// //                   </div>
// //                 )}

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
// //                 {appointment.status === 'pending' || appointment.status === 'confirmed' ? (
// //                   <button 
// //                     onClick={() => handleCancelAppointment(appointment.id)}
// //                     className="btn-danger"
// //                   >
// //                     Cancel Appointment
// //                   </button>
// //                 ) : null}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Appointments;
















// // src/pages/patient/Appointments.jsx
// import React, { useState, useEffect } from 'react';
// import patientService from '../../services/patientService';

// function Appointments() {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({
//     status: ''
//   });

//   useEffect(() => {
//     fetchAppointments();
//   }, [filters]);

//   const fetchAppointments = async () => {
//     try {
//       setLoading(true);
//       const response = await patientService.getAppointments(filters);
//       setAppointments(response.appointments || []);
//     } catch (error) {
//       setError('Failed to fetch appointments');
//       console.error('Error fetching appointments:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCancelAppointment = async (appointmentId) => {
//     if (!window.confirm('Are you sure you want to cancel this appointment?')) {
//       return;
//     }

//     try {
//       await patientService.cancelAppointment(appointmentId);
//       alert('Appointment cancelled successfully');
//       fetchAppointments();
//     } catch (error) {
//       alert('Failed to cancel appointment');
//       console.error('Error cancelling appointment:', error);
//     }
//   };

//   const handleFilterChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value
//     });
//   };

//   const getStatusBadge = (status) => {
//     const statusColors = {
//       pending: 'bg-yellow-200 text-yellow-700',
//       confirmed: 'bg-blue-200 text-blue-700',
//       completed: 'bg-green-200 text-green-700',
//       cancelled: 'bg-red-200 text-red-700'
//     };

//     return (
//       <span className={`px-2 py-1 text-xs rounded-md font-semibold ${statusColors[status] || 'bg-gray-200 text-gray-700'}`}>
//         {status}
//       </span>
//     );
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return <div className="text-center py-10 text-gray-600 text-lg font-medium">Loading appointments...</div>;
//   }

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-gray-800">My Appointments</h1>

//         <select
//           name="status"
//           value={filters.status}
//           onChange={handleFilterChange}
//           className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400"
//         >
//           <option value="">All Status</option>
//           <option value="pending">Pending</option>
//           <option value="confirmed">Confirmed</option>
//           <option value="completed">Completed</option>
//           <option value="cancelled">Cancelled</option>
//         </select>
//       </div>

//       {error && (
//         <div className="bg-red-100 text-red-700 px-4 py-3 rounded-md">
//           {error}
//         </div>
//       )}

//       {appointments.length === 0 ? (
//         <div className="text-center py-16 bg-white shadow-md rounded-lg">
//           <h3 className="text-xl font-semibold text-gray-800">No appointments found</h3>
//           <p className="text-gray-500 mt-2">You don't have any appointments scheduled.</p>
//         </div>
//       ) : (
//         <div className="space-y-5">
//           {appointments.map((appointment) => (
//             <div
//               key={appointment.id}
//               className="bg-white shadow-md rounded-lg p-5 border border-gray-200 space-y-4"
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Appointment with Dr. {appointment.doctor.user.first_name} {appointment.doctor.user.last_name}
//                 </h3>
//                 {getStatusBadge(appointment.status)}
//               </div>

//               <div className="space-y-3 text-gray-700">
//                 <div className="flex justify-between">
//                   <div>
//                     <label className="font-medium">Date:</label>
//                     <span className="ml-2">{formatDate(appointment.appointment_date)}</span>
//                   </div>
//                   <div>
//                     <label className="font-medium">Duration:</label>
//                     <span className="ml-2">{appointment.duration} minutes</span>
//                   </div>
//                 </div>

//                 <div className="flex justify-between">
//                   <div>
//                     <label className="font-medium">Doctor:</label>
//                     <span className="ml-2">Dr. {appointment.doctor.user.first_name} {appointment.doctor.user.last_name}</span>
//                   </div>
//                   <div>
//                     <label className="font-medium">Specialization:</label>
//                     <span className="ml-2">{appointment.doctor.specialization}</span>
//                   </div>
//                 </div>

//                 {appointment.reason && (
//                   <div>
//                     <label className="font-medium">Reason:</label>
//                     <span className="ml-2">{appointment.reason}</span>
//                   </div>
//                 )}

//                 {appointment.symptoms && (
//                   <div>
//                     <label className="font-medium">Symptoms:</label>
//                     <span className="ml-2">{appointment.symptoms}</span>
//                   </div>
//                 )}

//                 <div className="flex justify-between">
//                   <div>
//                     <label className="font-medium">Created:</label>
//                     <span className="ml-2">{formatDate(appointment.created_at)}</span>
//                   </div>
//                   <div>
//                     <label className="font-medium">Last Updated:</label>
//                     <span className="ml-2">{formatDate(appointment.updated_at)}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-2">
//                 {(appointment.status === 'pending' || appointment.status === 'confirmed') && (
//                   <button
//                     onClick={() => handleCancelAppointment(appointment.id)}
//                     className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
//                   >
//                     Cancel Appointment
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Appointments;




















// src/pages/patient/Appointments.jsx
import React, { useState, useEffect } from 'react';
import patientService from '../../services/patientService';

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    status: ''
  });

  useEffect(() => {
    fetchAppointments();
  }, [filters]);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await patientService.getAppointments(filters);
      setAppointments(response.appointments || []);
    } catch (error) {
      setError('Failed to fetch appointments');
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelAppointment = async (appointmentId) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) {
      return;
    }

    try {
      await patientService.cancelAppointment(appointmentId);
      alert('Appointment cancelled successfully');
      fetchAppointments();
    } catch (error) {
      alert('Failed to cancel appointment');
      console.error('Error cancelling appointment:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      pending: 'bg-amber-50 text-amber-700 border border-amber-200',
      confirmed: 'bg-sky-50 text-sky-700 border border-sky-200',
      completed: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      cancelled: 'bg-rose-50 text-rose-700 border border-rose-200'
    };

    return (
      <span className={`px-3 py-1.5 text-xs rounded-full font-semibold tracking-wide ${statusColors[status] || 'bg-gray-50 text-gray-700 border border-gray-200'}`}>
        {status.toUpperCase()}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
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
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                My Appointments
              </h1>
              <p className="text-gray-500 mt-1 text-sm">Manage and track your healthcare appointments</p>
            </div>

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
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl shadow-sm flex items-center gap-3">
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* Empty State */}
        {appointments.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
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
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                {/* Appointment Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Appointment with Dr. {appointment.doctor.user.first_name} {appointment.doctor.user.last_name}
                      </h3>
                      <p className="text-sm text-gray-500">{appointment.doctor.specialization}</p>
                    </div>
                  </div>
                  {getStatusBadge(appointment.status)}
                </div>

                {/* Appointment Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Date</label>
                        <span className="text-gray-800 font-medium">{formatDate(appointment.appointment_date)}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Duration</label>
                        <span className="text-gray-800 font-medium">{appointment.duration} minutes</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Created</label>
                        <span className="text-gray-800 font-medium">{formatDate(appointment.created_at)}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Last Updated</label>
                        <span className="text-gray-800 font-medium">{formatDate(appointment.updated_at)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reason and Symptoms */}
                {(appointment.reason || appointment.symptoms) && (
                  <div className="space-y-4 py-5 border-t border-gray-100">
                    {appointment.reason && (
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Reason</label>
                        <p className="text-gray-800">{appointment.reason}</p>
                      </div>
                    )}

                    {appointment.symptoms && (
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Symptoms</label>
                        <p className="text-gray-800">{appointment.symptoms}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Button */}
                {(appointment.status === 'pending' || appointment.status === 'confirmed') && (
                  <div className="pt-5 border-t border-gray-100">
                    <button
                      onClick={() => handleCancelAppointment(appointment.id)}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Cancel Appointment
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Appointments;