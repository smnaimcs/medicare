// // // src/pages/lab-technician/Attendance.jsx
// // import React, { useState, useEffect } from 'react';
// // import staffService from '../../services/staffService';

// // function NurseAttendance() {
// //   const [attendance, setAttendance] = useState([]);
// //   const [leaveRequests, setLeaveRequests] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeTab, setActiveTab] = useState('attendance');
// //   const [showLeaveModal, setShowLeaveModal] = useState(false);
// //   const [filters, setFilters] = useState({
// //     start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
// //     end_date: new Date().toISOString().split('T')[0]
// //   });

// //   useEffect(() => {
// //     if (activeTab === 'attendance') {
// //       fetchAttendance();
// //     } else {
// //       fetchLeaveRequests();
// //     }
// //   }, [activeTab, filters]);

// //   const fetchAttendance = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await staffService.getAttendanceHistory(filters);
// //       setAttendance(response.attendance || []);
// //     } catch (error) {
// //       setError('Failed to fetch attendance history');
// //       console.error('Error fetching attendance:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchLeaveRequests = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await staffService.getLeaveRequests();
// //       setLeaveRequests(response.leave_requests || []);
// //     } catch (error) {
// //       setError('Failed to fetch leave requests');
// //       console.error('Error fetching leave requests:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleCheckIn = async () => {
// //     try {
// //       await staffService.checkIn();
// //       alert('Checked in successfully');
// //       fetchAttendance();
// //     } catch (error) {
// //       alert('Failed to check in');
// //       console.error('Error checking in:', error);
// //     }
// //   };

// //   const handleCheckOut = async () => {
// //     try {
// //       await staffService.checkOut();
// //       alert('Checked out successfully');
// //       fetchAttendance();
// //     } catch (error) {
// //       alert('Failed to check out');
// //       console.error('Error checking out:', error);
// //     }
// //   };

// //   const handleRequestLeave = async (leaveData) => {
// //     try {
// //       await staffService.requestLeave(leaveData);
// //       alert('Leave request submitted successfully');
// //       setShowLeaveModal(false);
// //       fetchLeaveRequests();
// //     } catch (error) {
// //       alert('Failed to submit leave request');
// //       console.error('Error submitting leave request:', error);
// //     }
// //   };

// //   const handleFilterChange = (e) => {
// //     setFilters({
// //       ...filters,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric'
// //     });
// //   };

// //   const formatTime = (dateString) => {
// //     return new Date(dateString).toLocaleTimeString('en-US', {
// //       hour: '2-digit',
// //       minute: '2-digit'
// //     });
// //   };

// //   const getTodayAttendance = () => {
// //     const today = new Date().toISOString().split('T')[0];
// //     return attendance.find(record => record.date === today);
// //   };

// //   const calculateTotalHours = (attendance) => {
// //     return attendance.reduce((total, record) => {
// //       return total + (record.total_hours || 0);
// //     }, 0);
// //   };

// //   const getStatusBadge = (status) => {
// //     const statusColors = {
// //       present: 'status-completed',
// //       absent: 'status-cancelled',
// //       late: 'status-pending',
// //       half_day: 'status-confirmed'
// //     };
    
// //     return <span className={`status-badge ${statusColors[status] || ''}`}>{status}</span>;
// //   };

// //   const getLeaveStatusBadge = (status) => {
// //     const statusColors = {
// //       approved: 'status-completed',
// //       pending: 'status-pending',
// //       rejected: 'status-cancelled'
// //     };
    
// //     return <span className={`status-badge ${statusColors[status] || ''}`}>{status}</span>;
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading attendance data...</div>;
// //   }

// //   return (
// //     <div className="page-container">
// //       <div className="page-header">
// //         <h1>Attendance & Leave Management</h1>
// //         <div className="header-actions">
// //           {activeTab === 'attendance' && (
// //             <>
// //               <button onClick={handleCheckIn} className="btn-primary">
// //                 Check In
// //               </button>
// //               <button onClick={handleCheckOut} className="btn-secondary">
// //                 Check Out
// //               </button>
// //             </>
// //           )}
// //           {activeTab === 'leave' && (
// //             <button 
// //               onClick={() => setShowLeaveModal(true)}
// //               className="btn-primary"
// //             >
// //               Request Leave
// //             </button>
// //           )}
// //         </div>
// //       </div>

// //       {/* Tabs */}
// //       <div className="tabs">
// //         <button 
// //           className={`tab ${activeTab === 'attendance' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('attendance')}
// //         >
// //           Attendance
// //         </button>
// //         <button 
// //           className={`tab ${activeTab === 'leave' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('leave')}
// //         >
// //           Leave Requests
// //         </button>
// //       </div>

// //       {error && <div className="error-message">{error}</div>}

// //       <div className="tab-content">
// //         {activeTab === 'attendance' ? (
// //           <div className="attendance-section">
// //             {/* Today's Status */}
// //             <div className="today-status">
// //               <h3>Today's Status</h3>
// //               {getTodayAttendance() ? (
// //                 <div className="attendance-card current">
// //                   <div className="attendance-info">
// //                     <h4>Checked In</h4>
// //                     <p>Time: {formatTime(getTodayAttendance().check_in)}</p>
// //                     {getTodayAttendance().check_out && (
// //                       <p>Check Out: {formatTime(getTodayAttendance().check_out)}</p>
// //                     )}
// //                     {getTodayAttendance().total_hours && (
// //                       <p>Total Hours: {getTodayAttendance().total_hours.toFixed(2)}</p>
// //                     )}
// //                   </div>
// //                   {getStatusBadge(getTodayAttendance().status)}
// //                 </div>
// //               ) : (
// //                 <div className="attendance-card not-checked-in">
// //                   <p>You haven't checked in today</p>
// //                   <button onClick={handleCheckIn} className="btn-primary">
// //                     Check In Now
// //                   </button>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Filters */}
// //             <div className="filters-section">
// //               <div className="filter-group">
// //                 <label>Start Date:</label>
// //                 <input
// //                   type="date"
// //                   name="start_date"
// //                   value={filters.start_date}
// //                   onChange={handleFilterChange}
// //                   className="filter-select"
// //                 />
// //               </div>
// //               <div className="filter-group">
// //                 <label>End Date:</label>
// //                 <input
// //                   type="date"
// //                   name="end_date"
// //                   value={filters.end_date}
// //                   onChange={handleFilterChange}
// //                   className="filter-select"
// //                 />
// //               </div>
// //             </div>

// //             {/* Attendance Summary */}
// //             <div className="attendance-summary">
// //               <h3>Attendance History</h3>
// //               <div className="summary-stats">
// //                 <div className="summary-item">
// //                   <span>Total Days:</span>
// //                   <span>{attendance.length}</span>
// //                 </div>
// //                 <div className="summary-item">
// //                   <span>Total Hours:</span>
// //                   <span>{calculateTotalHours(attendance).toFixed(2)}</span>
// //                 </div>
// //                 <div className="summary-item">
// //                   <span>Present Days:</span>
// //                   <span>{attendance.filter(a => a.status === 'present').length}</span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Attendance List */}
// //             {attendance.length === 0 ? (
// //               <div className="empty-state">
// //                 <h3>No attendance records found</h3>
// //                 <p>No attendance records match your current filters.</p>
// //               </div>
// //             ) : (
// //               <div className="attendance-list">
// //                 <table className="attendance-table">
// //                   <thead>
// //                     <tr>
// //                       <th>Date</th>
// //                       <th>Check In</th>
// //                       <th>Check Out</th>
// //                       <th>Total Hours</th>
// //                       <th>Status</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {attendance.map((record) => (
// //                       <tr key={record.id}>
// //                         <td>{formatDate(record.date)}</td>
// //                         <td>{record.check_in ? formatTime(record.check_in) : 'N/A'}</td>
// //                         <td>{record.check_out ? formatTime(record.check_out) : 'N/A'}</td>
// //                         <td>{record.total_hours ? record.total_hours.toFixed(2) : 'N/A'}</td>
// //                         <td>{getStatusBadge(record.status)}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="leave-section">
// //             <h2>My Leave Requests</h2>
            
// //             {leaveRequests.length === 0 ? (
// //               <div className="empty-state">
// //                 <h3>No leave requests found</h3>
// //                 <p>You haven't submitted any leave requests yet.</p>
// //               </div>
// //             ) : (
// //               <div className="leave-requests-list">
// //                 {leaveRequests.map((request) => (
// //                   <div key={request.id} className="leave-request-card">
// //                     <div className="leave-header">
// //                       <div>
// //                         <h4>{request.leave_type}</h4>
// //                         <p className="leave-dates">
// //                           {formatDate(request.start_date)} to {formatDate(request.end_date)}
// //                         </p>
// //                       </div>
// //                       {getLeaveStatusBadge(request.status)}
// //                     </div>
                    
// //                     <div className="leave-details">
// //                       <p><strong>Reason:</strong> {request.reason}</p>
// //                       <p><strong>Submitted:</strong> {formatDate(request.created_at)}</p>
// //                       {request.comments && (
// //                         <p><strong>Admin Comments:</strong> {request.comments}</p>
// //                       )}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>

// //       {/* Request Leave Modal */}
// //       {showLeaveModal && (
// //         <RequestLeaveModal
// //           onClose={() => setShowLeaveModal(false)}
// //           onSave={handleRequestLeave}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // // Request Leave Modal Component
// // function RequestLeaveModal({ onClose, onSave }) {
// //   const [formData, setFormData] = useState({
// //     leave_type: 'sick',
// //     start_date: '',
// //     end_date: '',
// //     reason: ''
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
    
// //     if (!formData.start_date || !formData.end_date || !formData.reason) {
// //       alert('Please fill in all required fields');
// //       return;
// //     }

// //     if (new Date(formData.start_date) > new Date(formData.end_date)) {
// //       alert('End date cannot be before start date');
// //       return;
// //     }

// //     setLoading(true);
// //     await onSave(formData);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal">
// //         <div className="modal-header">
// //           <h2>Request Leave</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>

// //         <form onSubmit={handleSubmit} className="leave-form">
// //           <div className="form-group">
// //             <label>Leave Type *</label>
// //             <select
// //               name="leave_type"
// //               value={formData.leave_type}
// //               onChange={handleChange}
// //               required
// //             >
// //               <option value="sick">Sick Leave</option>
// //               <option value="casual">Casual Leave</option>
// //               <option value="annual">Annual Leave</option>
// //               <option value="emergency">Emergency Leave</option>
// //               <option value="maternity">Maternity Leave</option>
// //               <option value="paternity">Paternity Leave</option>
// //               <option value="other">Other</option>
// //             </select>
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Start Date *</label>
// //               <input
// //                 type="date"
// //                 name="start_date"
// //                 value={formData.start_date}
// //                 onChange={handleChange}
// //                 min={new Date().toISOString().split('T')[0]}
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label>End Date *</label>
// //               <input
// //                 type="date"
// //                 name="end_date"
// //                 value={formData.end_date}
// //                 onChange={handleChange}
// //                 min={formData.start_date || new Date().toISOString().split('T')[0]}
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label>Reason *</label>
// //             <textarea
// //               name="reason"
// //               value={formData.reason}
// //               onChange={handleChange}
// //               placeholder="Please provide a reason for your leave request..."
// //               rows="4"
// //               required
// //             />
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Submitting...' : 'Submit Request'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default NurseAttendance;














// // src/pages/lab-technician/Attendance.jsx
// import React, { useState, useEffect } from 'react';
// import staffService from '../../services/staffService';

// // Minimal vanilla CSS: only the @keyframes and delay utilities that Tailwind cannot express natively.
// const ANIM_STYLES = `
//   @keyframes fadeInUp {
//     from { opacity: 0; transform: translateY(18px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to   { opacity: 1; }
//   }
//   @keyframes modalSlideIn {
//     from { opacity: 0; transform: scale(0.96) translateY(16px); }
//     to   { opacity: 1; transform: scale(1)    translateY(0); }
//   }
//   .anim-fadeInUp      { animation: fadeInUp 0.5s ease-out both; }
//   .anim-fadeIn        { animation: fadeIn 0.3s ease-out both; }
//   .anim-modalSlideIn  { animation: modalSlideIn 0.3s ease-out both; }
//   .delay-50  { animation-delay: 0.05s; }
//   .delay-100 { animation-delay: 0.1s;  }
//   .delay-150 { animation-delay: 0.15s; }
//   .delay-200 { animation-delay: 0.2s;  }
//   .delay-250 { animation-delay: 0.25s; }
//   .delay-300 { animation-delay: 0.3s;  }
//   .delay-350 { animation-delay: 0.35s; }
//   .delay-400 { animation-delay: 0.4s;  }
//   .delay-450 { animation-delay: 0.45s; }
//   .delay-500 { animation-delay: 0.5s;  }
// `;

// function NurseAttendance() {
//   const [attendance, setAttendance] = useState([]);
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activeTab, setActiveTab] = useState('attendance');
//   const [showLeaveModal, setShowLeaveModal] = useState(false);
//   const [filters, setFilters] = useState({
//     start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
//     end_date: new Date().toISOString().split('T')[0]
//   });

//   useEffect(() => {
//     const tag = document.createElement('style');
//     tag.textContent = ANIM_STYLES;
//     document.head.appendChild(tag);
//     return () => document.head.removeChild(tag);
//   }, []);

//   useEffect(() => {
//     if (activeTab === 'attendance') {
//       fetchAttendance();
//     } else {
//       fetchLeaveRequests();
//     }
//   }, [activeTab, filters]);

//   const fetchAttendance = async () => {
//     try {
//       setLoading(true);
//       const response = await staffService.getAttendanceHistory(filters);
//       setAttendance(response.attendance || []);
//     } catch (error) {
//       setError('Failed to fetch attendance history');
//       console.error('Error fetching attendance:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchLeaveRequests = async () => {
//     try {
//       setLoading(true);
//       const response = await staffService.getLeaveRequests();
//       setLeaveRequests(response.leave_requests || []);
//     } catch (error) {
//       setError('Failed to fetch leave requests');
//       console.error('Error fetching leave requests:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCheckIn = async () => {
//     try {
//       await staffService.checkIn();
//       alert('Checked in successfully');
//       fetchAttendance();
//     } catch (error) {
//       alert('Failed to check in');
//       console.error('Error checking in:', error);
//     }
//   };

//   const handleCheckOut = async () => {
//     try {
//       await staffService.checkOut();
//       alert('Checked out successfully');
//       fetchAttendance();
//     } catch (error) {
//       alert('Failed to check out');
//       console.error('Error checking out:', error);
//     }
//   };

//   const handleRequestLeave = async (leaveData) => {
//     try {
//       await staffService.requestLeave(leaveData);
//       alert('Leave request submitted successfully');
//       setShowLeaveModal(false);
//       fetchLeaveRequests();
//     } catch (error) {
//       alert('Failed to submit leave request');
//       console.error('Error submitting leave request:', error);
//     }
//   };

//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const formatDate = (dateString) =>
//     new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

//   const formatTime = (dateString) =>
//     new Date(dateString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

//   const getTodayAttendance = () => {
//     const today = new Date().toISOString().split('T')[0];
//     return attendance.find(record => record.date === today);
//   };

//   const calculateTotalHours = (attendance) =>
//     attendance.reduce((total, record) => total + (record.total_hours || 0), 0);

//   const getStatusBadge = (status) => {
//     const map = {
//       present:  'bg-green-100 text-green-700 border border-green-200',
//       absent:   'bg-red-100 text-red-700 border border-red-200',
//       late:     'bg-yellow-100 text-yellow-700 border border-yellow-200',
//       half_day: 'bg-blue-100 text-blue-700 border border-blue-200',
//     };
//     return (
//       <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold capitalize ${map[status] || 'bg-gray-100 text-gray-600'}`}>
//         {status?.replace('_', ' ')}
//       </span>
//     );
//   };

//   const getLeaveStatusBadge = (status) => {
//     const map = {
//       approved: 'bg-green-100 text-green-700 border border-green-200',
//       pending:  'bg-yellow-100 text-yellow-700 border border-yellow-200',
//       rejected: 'bg-red-100 text-red-700 border border-red-200',
//     };
//     return (
//       <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold capitalize ${map[status] || 'bg-gray-100 text-gray-600'}`}>
//         {status}
//       </span>
//     );
//   };

//   // ─── icons (inline svg helpers) ────────────────────────────────────────────
//   const Icon = ({ d, cls = 'w-5 h-5' }) => (
//     <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//       <path d={d} />
//     </svg>
//   );
//   const ClockIcon   = (p) => <Icon {...p} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />;
//   const CalIcon     = (p) => <Icon {...p} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
//   const CheckCircle = (p) => <Icon {...p} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
//   const LogInIcon   = (p) => <Icon {...p} d="M11 16l-4-4m0 0l4-4m-4 4h12m-5-8a3 3 0 100 6 3 3 0 000-6zM3 8a2 2 0 012-2h1M3 8v8a2 2 0 002 2h1" />;
//   const LogOutIcon  = (p) => <Icon {...p} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />;
//   const PlusIcon    = (p) => <Icon {...p} d="M12 4v16m8-8H4" />;
//   const FilterIcon  = (p) => <Icon {...p} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />;
//   const CloseIcon   = (p) => <Icon {...p} d="M6 18L18 6M6 6l12 12" />;
//   const ExclamIcon  = (p) => <Icon {...p} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />;

//   // ─── loading ───────────────────────────────────────────────────────────────
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//         <div className="text-center space-y-4">
//           <div className="relative w-14 h-14 mx-auto">
//             <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
//             <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//           </div>
//           <p className="text-gray-500 font-medium text-sm">Loading attendance data...</p>
//         </div>
//       </div>
//     );
//   }

//   const todayRecord = getTodayAttendance();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-5 md:p-8">
//       <div className="max-w-6xl mx-auto space-y-5">

//         {/* ── Header ─────────────────────────────────────────────────────── */}
//         <div className="anim-fadeInUp opacity-0">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div className="flex items-center gap-3">
//               <div className="w-1 h-11 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
//               <div>
//                 <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
//                   Attendance & Leave
//                 </h1>
//                 <p className="text-gray-400 text-sm ml-0.5">Track your daily attendance and manage leaves</p>
//               </div>
//             </div>

//             {/* header action buttons */}
//             <div className="flex gap-2">
//               {activeTab === 'attendance' && (
//                 <>
//                   <button
//                     onClick={handleCheckIn}
//                     className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-105"
//                   >
//                     <LogInIcon cls="w-4 h-4" /> Check In
//                   </button>
//                   <button
//                     onClick={handleCheckOut}
//                     className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 shadow-sm transition-all duration-200 hover:scale-105"
//                   >
//                     <LogOutIcon cls="w-4 h-4" /> Check Out
//                   </button>
//                 </>
//               )}
//               {activeTab === 'leave' && (
//                 <button
//                   onClick={() => setShowLeaveModal(true)}
//                   className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-105"
//                 >
//                   <PlusIcon cls="w-4 h-4" /> Request Leave
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ── Tabs ───────────────────────────────────────────────────────── */}
//         <div className="anim-fadeInUp opacity-0 delay-100 flex gap-1 bg-white rounded-xl border border-gray-200 p-1 shadow-sm">
//           {['attendance', 'leave'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
//                 activeTab === tab
//                   ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
//                   : 'text-gray-500 hover:bg-gray-50'
//               }`}
//             >
//               {tab === 'attendance' ? <ClockIcon cls="w-4 h-4" /> : <CalIcon cls="w-4 h-4" />}
//               {tab === 'attendance' ? 'Attendance' : 'Leave Requests'}
//             </button>
//           ))}
//         </div>

//         {/* ── Error ──────────────────────────────────────────────────────── */}
//         {error && (
//           <div className="flex items-center gap-3 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
//             <ExclamIcon cls="w-5 h-5 text-red-500 shrink-0" />
//             <span className="text-red-700 font-medium text-sm">{error}</span>
//           </div>
//         )}

//         {/* ════════════════════════════════════════════════════════════════════
//             ATTENDANCE TAB
//             ══════════════════════════════════════════════════════════════════ */}
//         {activeTab === 'attendance' && (
//           <div className="space-y-5">

//             {/* ── Today's status card ──────────────────────────────────── */}
//             <div className="anim-fadeInUp opacity-0 delay-150">
//               {todayRecord ? (
//                 <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
//                   {/* top accent bar */}
//                   <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-green-400" />
//                   <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center shrink-0">
//                         <CheckCircle cls="w-7 h-7 text-blue-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-gray-800 text-lg">Today's Status</h3>
//                         <p className="text-gray-500 text-sm flex items-center gap-1.5">
//                           <ClockIcon cls="w-3.5 h-3.5" />
//                           Check‑in: {formatTime(todayRecord.check_in)}
//                           {todayRecord.check_out && <> &middot; Check‑out: {formatTime(todayRecord.check_out)}</>}
//                           {todayRecord.total_hours && <> &middot; {todayRecord.total_hours.toFixed(2)} hrs</>}
//                         </p>
//                       </div>
//                     </div>
//                     {getStatusBadge(todayRecord.status)}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                   <div className="flex items-center gap-4">
//                     <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
//                       <ClockIcon cls="w-7 h-7 text-gray-400" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-800 text-lg">Today's Status</h3>
//                       <p className="text-gray-400 text-sm">You haven't checked in today</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={handleCheckIn}
//                     className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-105"
//                   >
//                     <LogInIcon cls="w-4 h-4" /> Check In Now
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* ── Summary stats ────────────────────────────────────────── */}
//             <div className="anim-fadeInUp opacity-0 delay-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {[
//                 { label: 'Total Days',   value: attendance.length,                                          icon: <CalIcon cls="w-5 h-5" />,         color: 'from-blue-50 to-blue-100 border-blue-200',   textColor: 'text-blue-700',   iconBg: 'bg-blue-100 text-blue-600' },
//                 { label: 'Total Hours',  value: calculateTotalHours(attendance).toFixed(2),                 icon: <ClockIcon cls="w-5 h-5" />,       color: 'from-purple-50 to-purple-100 border-purple-200', textColor: 'text-purple-700', iconBg: 'bg-purple-100 text-purple-600' },
//                 { label: 'Present Days', value: attendance.filter(a => a.status === 'present').length,     icon: <CheckCircle cls="w-5 h-5" />,     color: 'from-green-50 to-green-100 border-green-200',   textColor: 'text-green-700',  iconBg: 'bg-green-100 text-green-600' },
//               ].map((s) => (
//                 <div key={s.label} className={`bg-gradient-to-br ${s.color} border rounded-xl p-5 flex items-center gap-4`}>
//                   <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${s.iconBg}`}>{s.icon}</div>
//                   <div>
//                     <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{s.label}</p>
//                     <p className={`text-2xl font-bold ${s.textColor}`}>{s.value}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* ── Filters ──────────────────────────────────────────────── */}
//             <div className="anim-fadeInUp opacity-0 delay-250 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
//               <div className="flex items-center gap-2 mb-3">
//                 <FilterIcon cls="w-4 h-4 text-gray-400" />
//                 <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Filter by Date Range</span>
//               </div>
//               <div className="flex flex-wrap gap-4">
//                 <div className="flex-1 min-w-[180px]">
//                   <label className="block text-xs font-semibold text-gray-500 mb-1.5">Start Date</label>
//                   <input
//                     type="date"
//                     name="start_date"
//                     value={filters.start_date}
//                     onChange={handleFilterChange}
//                     className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//                   />
//                 </div>
//                 <div className="flex-1 min-w-[180px]">
//                   <label className="block text-xs font-semibold text-gray-500 mb-1.5">End Date</label>
//                   <input
//                     type="date"
//                     name="end_date"
//                     value={filters.end_date}
//                     onChange={handleFilterChange}
//                     className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* ── Attendance Table / Empty ─────────────────────────────── */}
//             {attendance.length === 0 ? (
//               <div className="anim-fadeInUp opacity-0 delay-300 bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center">
//                 <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
//                   <ClockIcon cls="w-10 h-10 text-gray-300" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-700">No attendance records found</h3>
//                 <p className="text-gray-400 text-sm mt-1">No attendance records match your current filters.</p>
//               </div>
//             ) : (
//               <div className="anim-fadeInUp opacity-0 delay-300 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead>
//                       <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
//                         {['Date', 'Check In', 'Check Out', 'Total Hours', 'Status'].map((h) => (
//                           <th key={h} className="px-5 py-3.5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {attendance.map((record, i) => (
//                         <tr
//                           key={record.id}
//                           className={`anim-fadeInUp opacity-0 delay-${Math.min((i + 1) * 50, 500)} transition-colors duration-200 hover:bg-blue-50`}
//                         >
//                           <td className="px-5 py-3.5 font-medium text-gray-700">{formatDate(record.date)}</td>
//                           <td className="px-5 py-3.5 text-gray-500">{record.check_in ? formatTime(record.check_in) : '—'}</td>
//                           <td className="px-5 py-3.5 text-gray-500">{record.check_out ? formatTime(record.check_out) : '—'}</td>
//                           <td className="px-5 py-3.5 text-gray-500">{record.total_hours ? record.total_hours.toFixed(2) : '—'}</td>
//                           <td className="px-5 py-3.5">{getStatusBadge(record.status)}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ════════════════════════════════════════════════════════════════════
//             LEAVE TAB
//             ══════════════════════════════════════════════════════════════════ */}
//         {activeTab === 'leave' && (
//           <div className="space-y-4">
//             {leaveRequests.length === 0 ? (
//               <div className="anim-fadeInUp opacity-0 delay-200 bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center">
//                 <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
//                   <CalIcon cls="w-10 h-10 text-gray-300" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-700">No leave requests found</h3>
//                 <p className="text-gray-400 text-sm mt-1">You haven't submitted any leave requests yet.</p>
//               </div>
//             ) : (
//               leaveRequests.map((request, i) => (
//                 <div
//                   key={request.id}
//                   className={`anim-fadeInUp opacity-0 delay-${Math.min((i + 1) * 100, 500)} bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
//                 >
//                   {/* top accent – colour-coded by status */}
//                   <div className={`h-1 ${request.status === 'approved' ? 'bg-green-400' : request.status === 'rejected' ? 'bg-red-400' : 'bg-yellow-400'}`} />

//                   <div className="p-5">
//                     {/* header row */}
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center">
//                           <CalIcon cls="w-5 h-5 text-blue-600" />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-gray-800 capitalize">{request.leave_type} Leave</h4>
//                           <p className="text-xs text-gray-400 flex items-center gap-1">
//                             <CalIcon cls="w-3 h-3" />
//                             {formatDate(request.start_date)} &nbsp;→&nbsp; {formatDate(request.end_date)}
//                           </p>
//                         </div>
//                       </div>
//                       {getLeaveStatusBadge(request.status)}
//                     </div>

//                     {/* detail rows */}
//                     <div className="space-y-2 pl-14">
//                       <p className="text-sm text-gray-600">
//                         <span className="font-semibold text-gray-700">Reason: </span>{request.reason}
//                       </p>
//                       <p className="text-xs text-gray-400">
//                         <span className="font-semibold text-gray-500">Submitted: </span>{formatDate(request.created_at)}
//                       </p>
//                       {request.comments && (
//                         <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
//                           <p className="text-xs text-gray-500">
//                             <span className="font-semibold text-gray-600">Admin Comments: </span>{request.comments}
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>

//       {/* ── Request Leave Modal ────────────────────────────────────────── */}
//       {showLeaveModal && (
//         <RequestLeaveModal onClose={() => setShowLeaveModal(false)} onSave={handleRequestLeave} />
//       )}
//     </div>
//   );
// }

// // ─── Request Leave Modal ─────────────────────────────────────────────────────
// function RequestLeaveModal({ onClose, onSave }) {
//   const [formData, setFormData] = useState({
//     leave_type: 'sick',
//     start_date: '',
//     end_date: '',
//     reason: ''
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.start_date || !formData.end_date || !formData.reason) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     if (new Date(formData.start_date) > new Date(formData.end_date)) {
//       alert('End date cannot be before start date');
//       return;
//     }

//     setLoading(true);
//     await onSave(formData);
//     setLoading(false);
//   };

//   const Icon = ({ d, cls = 'w-5 h-5' }) => (
//     <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
//       <path d={d} />
//     </svg>
//   );

//   return (
//     <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4 anim-fadeIn opacity-0">
//       <div className="anim-modalSlideIn opacity-0 bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-gray-200 flex flex-col">

//         {/* header */}
//         <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
//               <Icon d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" cls="w-5 h-5 text-blue-600" />
//             </div>
//             <h2 className="text-lg font-bold text-gray-800">Request Leave</h2>
//           </div>
//           <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:rotate-90">
//             <Icon d="M6 18L18 6M6 6l12 12" cls="w-4 h-4 text-gray-500" />
//           </button>
//         </div>

//         {/* form body */}
//         <form onSubmit={handleSubmit} className="p-5 space-y-4 bg-gradient-to-br from-gray-50 to-white flex-1">
//           {/* leave type */}
//           <div>
//             <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Leave Type *</label>
//             <select
//               name="leave_type"
//               value={formData.leave_type}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//             >
//               <option value="sick">Sick Leave</option>
//               <option value="casual">Casual Leave</option>
//               <option value="annual">Annual Leave</option>
//               <option value="emergency">Emergency Leave</option>
//               <option value="maternity">Maternity Leave</option>
//               <option value="paternity">Paternity Leave</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           {/* date row */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Start Date *</label>
//               <input
//                 type="date"
//                 name="start_date"
//                 value={formData.start_date}
//                 onChange={handleChange}
//                 min={new Date().toISOString().split('T')[0]}
//                 required
//                 className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//               />
//             </div>
//             <div>
//               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">End Date *</label>
//               <input
//                 type="date"
//                 name="end_date"
//                 value={formData.end_date}
//                 onChange={handleChange}
//                 min={formData.start_date || new Date().toISOString().split('T')[0]}
//                 required
//                 className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
//               />
//             </div>
//           </div>

//           {/* reason */}
//           <div>
//             <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Reason *</label>
//             <textarea
//               name="reason"
//               value={formData.reason}
//               onChange={handleChange}
//               placeholder="Please provide a reason for your leave request..."
//               rows="4"
//               required
//               className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
//             />
//           </div>

//           {/* actions */}
//           <div className="flex justify-end gap-3 pt-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-semibold rounded-lg transition-all duration-200"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={loading}
//               className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? 'Submitting...' : 'Submit Request'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default NurseAttendance;















// v2.1 – fixed: modal close on submit, leave list refresh after submit, full gray palette
// v3.1 – fixed: modal close, leave list refresh, full gray palette
// src/pages/lab-technician/Attendance.jsx
import React, { useState, useEffect } from 'react';
import staffService from '../../services/staffService';

// Minimal vanilla CSS: only the @keyframes and delay utilities that Tailwind cannot express natively.
const ANIM_STYLES = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes modalSlideIn {
    from { opacity: 0; transform: scale(0.96) translateY(16px); }
    to   { opacity: 1; transform: scale(1)    translateY(0); }
  }
  .anim-fadeInUp      { animation: fadeInUp 0.5s ease-out both; }
  .anim-fadeIn        { animation: fadeIn 0.3s ease-out both; }
  .anim-modalSlideIn  { animation: modalSlideIn 0.3s ease-out both; }
  .delay-50  { animation-delay: 0.05s; }
  .delay-100 { animation-delay: 0.1s;  }
  .delay-150 { animation-delay: 0.15s; }
  .delay-200 { animation-delay: 0.2s;  }
  .delay-250 { animation-delay: 0.25s; }
  .delay-300 { animation-delay: 0.3s;  }
  .delay-350 { animation-delay: 0.35s; }
  .delay-400 { animation-delay: 0.4s;  }
  .delay-450 { animation-delay: 0.45s; }
  .delay-500 { animation-delay: 0.5s;  }
`;

function NurseAttendance() {
  const [attendance, setAttendance] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);   // full-screen spinner – first mount only
  const [contentLoading, setContentLoading] = useState(false); // subtle indicator inside tabs
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('attendance');
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [filters, setFilters] = useState({
    start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
    end_date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const tag = document.createElement('style');
    tag.textContent = ANIM_STYLES;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  useEffect(() => {
    if (activeTab === 'attendance') {
      fetchAttendance();
    } else {
      fetchLeaveRequests();
    }
  }, [activeTab, filters]);

  const fetchAttendance = async () => {
    try {
      setContentLoading(true);
      const response = await staffService.getAttendanceHistory(filters);
      setAttendance(response.attendance || []);
    } catch (error) {
      setError('Failed to fetch attendance history');
      console.error('Error fetching attendance:', error);
    } finally {
      setContentLoading(false);
      setPageLoading(false);
    }
  };

  const fetchLeaveRequests = async () => {
    try {
      setContentLoading(true);
      const response = await staffService.getLeaveRequests();
      setLeaveRequests(response.leave_requests || []);
    } catch (error) {
      setError('Failed to fetch leave requests');
      console.error('Error fetching leave requests:', error);
    } finally {
      setContentLoading(false);
      setPageLoading(false);
    }
  };

  const handleCheckIn = async () => {
    try {
      await staffService.checkIn();
      alert('Checked in successfully');
      fetchAttendance();
    } catch (error) {
      alert('Failed to check in');
      console.error('Error checking in:', error);
    }
  };

  const handleCheckOut = async () => {
    try {
      await staffService.checkOut();
      alert('Checked out successfully');
      fetchAttendance();
    } catch (error) {
      alert('Failed to check out');
      console.error('Error checking out:', error);
    }
  };

  const handleRequestLeave = async (leaveData) => {
    try {
      await staffService.requestLeave(leaveData);
      alert('Leave request submitted successfully');
      setShowLeaveModal(false);
      fetchLeaveRequests();
    } catch (error) {
      alert('Failed to submit leave request');
      console.error('Error submitting leave request:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const formatTime = (dateString) =>
    new Date(dateString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const getTodayAttendance = () => {
    const today = new Date().toISOString().split('T')[0];
    return attendance.find(record => record.date === today);
  };

  const calculateTotalHours = (attendance) =>
    attendance.reduce((total, record) => total + (record.total_hours || 0), 0);

  const getStatusBadge = (status) => {
    const map = {
      present:  'bg-green-100 text-green-700 border border-green-200',
      absent:   'bg-red-100 text-red-700 border border-red-200',
      late:     'bg-yellow-100 text-yellow-700 border border-yellow-200',
      half_day: 'bg-blue-100 text-blue-700 border border-blue-200',
    };
    return (
      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold capitalize ${map[status] || 'bg-gray-100 text-gray-600'}`}>
        {status?.replace('_', ' ')}
      </span>
    );
  };

  const getLeaveStatusBadge = (status) => {
    const map = {
      approved: 'bg-green-100 text-green-700 border border-green-200',
      pending:  'bg-yellow-100 text-yellow-700 border border-yellow-200',
      rejected: 'bg-red-100 text-red-700 border border-red-200',
    };
    return (
      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold capitalize ${map[status] || 'bg-gray-100 text-gray-600'}`}>
        {status}
      </span>
    );
  };

  // ─── icons (inline svg helpers) ────────────────────────────────────────────
  const Icon = ({ d, cls = 'w-5 h-5' }) => (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  );
  const ClockIcon   = (p) => <Icon {...p} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />;
  const CalIcon     = (p) => <Icon {...p} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
  const CheckCircle = (p) => <Icon {...p} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
  const LogInIcon   = (p) => <Icon {...p} d="M11 16l-4-4m0 0l4-4m-4 4h12m-5-8a3 3 0 100 6 3 3 0 000-6zM3 8a2 2 0 012-2h1M3 8v8a2 2 0 002 2h1" />;
  const LogOutIcon  = (p) => <Icon {...p} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />;
  const PlusIcon    = (p) => <Icon {...p} d="M12 4v16m8-8H4" />;
  const FilterIcon  = (p) => <Icon {...p} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />;
  const CloseIcon   = (p) => <Icon {...p} d="M6 18L18 6M6 6l12 12" />;
  const ExclamIcon  = (p) => <Icon {...p} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />;

  // ─── loading ───────────────────────────────────────────────────────────────
  if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center space-y-4">
          <div className="relative w-14 h-14 mx-auto">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
            <div className="absolute inset-0 border-4 border-gray-600 border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-gray-500 font-medium text-sm">Loading attendance data...</p>
        </div>
      </div>
    );
  }

  const todayRecord = getTodayAttendance();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-5 md:p-8">
      <div className="max-w-6xl mx-auto space-y-5">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="anim-fadeInUp opacity-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-11 bg-gradient-to-b from-gray-600 to-gray-400 rounded-full" />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
                  Attendance & Leave
                </h1>
                <p className="text-gray-400 text-sm ml-0.5">Track your daily attendance and manage leaves</p>
              </div>
            </div>

            {/* header action buttons */}
            <div className="flex gap-2">
              {activeTab === 'attendance' && (
                <>
                  <button
                    onClick={handleCheckIn}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-105"
                  >
                    <LogInIcon cls="w-4 h-4" /> Check In
                  </button>
                  <button
                    onClick={handleCheckOut}
                    className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 shadow-sm transition-all duration-200 hover:scale-105"
                  >
                    <LogOutIcon cls="w-4 h-4" /> Check Out
                  </button>
                </>
              )}
              {activeTab === 'leave' && (
                <button
                  onClick={() => setShowLeaveModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-105"
                >
                  <PlusIcon cls="w-4 h-4" /> Request Leave
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Tabs ───────────────────────────────────────────────────────── */}
        <div className="anim-fadeInUp opacity-0 delay-100 flex gap-1 bg-white rounded-xl border border-gray-200 p-1 shadow-sm">
          {['attendance', 'leave'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-md'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab === 'attendance' ? <ClockIcon cls="w-4 h-4" /> : <CalIcon cls="w-4 h-4" />}
              {tab === 'attendance' ? 'Attendance' : 'Leave Requests'}
            </button>
          ))}
        </div>

        {/* ── Error ──────────────────────────────────────────────────────── */}
        {error && (
          <div className="flex items-center gap-3 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
            <ExclamIcon cls="w-5 h-5 text-red-500 shrink-0" />
            <span className="text-red-700 font-medium text-sm">{error}</span>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            ATTENDANCE TAB
            ══════════════════════════════════════════════════════════════════ */}
        {activeTab === 'attendance' && (
          <div className="space-y-5">

            {/* ── Today's status card ──────────────────────────────────── */}
            <div className="anim-fadeInUp opacity-0 delay-150">
              {todayRecord ? (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  {/* top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300" />
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shrink-0">
                        <CheckCircle cls="w-7 h-7 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">Today's Status</h3>
                        <p className="text-gray-500 text-sm flex items-center gap-1.5">
                          <ClockIcon cls="w-3.5 h-3.5" />
                          Check‑in: {formatTime(todayRecord.check_in)}
                          {todayRecord.check_out && <> &middot; Check‑out: {formatTime(todayRecord.check_out)}</>}
                          {todayRecord.total_hours && <> &middot; {todayRecord.total_hours.toFixed(2)} hrs</>}
                        </p>
                      </div>
                    </div>
                    {getStatusBadge(todayRecord.status)}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <ClockIcon cls="w-7 h-7 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Today's Status</h3>
                      <p className="text-gray-400 text-sm">You haven't checked in today</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCheckIn}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-105"
                  >
                    <LogInIcon cls="w-4 h-4" /> Check In Now
                  </button>
                </div>
              )}
            </div>

            {/* ── Summary stats ────────────────────────────────────────── */}
            <div className="anim-fadeInUp opacity-0 delay-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Total Days',   value: attendance.length,                                          icon: <CalIcon cls="w-5 h-5" />,         color: 'from-gray-100 to-gray-200 border-gray-300',   textColor: 'text-gray-700',   iconBg: 'bg-gray-200 text-gray-600' },
                { label: 'Total Hours',  value: calculateTotalHours(attendance).toFixed(2),                 icon: <ClockIcon cls="w-5 h-5" />,       color: 'from-gray-100 to-gray-200 border-gray-300', textColor: 'text-gray-700', iconBg: 'bg-gray-200 text-gray-600' },
                { label: 'Present Days', value: attendance.filter(a => a.status === 'present').length,     icon: <CheckCircle cls="w-5 h-5" />,     color: 'from-gray-100 to-gray-200 border-gray-300',   textColor: 'text-gray-700',  iconBg: 'bg-gray-200 text-gray-600' },
              ].map((s) => (
                <div key={s.label} className={`bg-gradient-to-br ${s.color} border rounded-xl p-5 flex items-center gap-4`}>
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${s.iconBg}`}>{s.icon}</div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{s.label}</p>
                    <p className={`text-2xl font-bold ${s.textColor}`}>{s.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Filters ──────────────────────────────────────────────── */}
            <div className="anim-fadeInUp opacity-0 delay-250 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <FilterIcon cls="w-4 h-4 text-gray-400" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Filter by Date Range</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[180px]">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Start Date</label>
                  <input
                    type="date"
                    name="start_date"
                    value={filters.start_date}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="flex-1 min-w-[180px]">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">End Date</label>
                  <input
                    type="date"
                    name="end_date"
                    value={filters.end_date}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* ── Attendance Table / Empty ─────────────────────────────── */}
            {attendance.length === 0 ? (
              <div className="anim-fadeInUp opacity-0 delay-300 bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <ClockIcon cls="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">No attendance records found</h3>
                <p className="text-gray-400 text-sm mt-1">No attendance records match your current filters.</p>
              </div>
            ) : (
              <div className="anim-fadeInUp opacity-0 delay-300 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                        {['Date', 'Check In', 'Check Out', 'Total Hours', 'Status'].map((h) => (
                          <th key={h} className="px-5 py-3.5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {attendance.map((record, i) => (
                        <tr
                          key={record.id}
                          className={`anim-fadeInUp opacity-0 delay-${Math.min((i + 1) * 50, 500)} transition-colors duration-200 hover:bg-gray-100`}
                        >
                          <td className="px-5 py-3.5 font-medium text-gray-700">{formatDate(record.date)}</td>
                          <td className="px-5 py-3.5 text-gray-500">{record.check_in ? formatTime(record.check_in) : '—'}</td>
                          <td className="px-5 py-3.5 text-gray-500">{record.check_out ? formatTime(record.check_out) : '—'}</td>
                          <td className="px-5 py-3.5 text-gray-500">{record.total_hours ? record.total_hours.toFixed(2) : '—'}</td>
                          <td className="px-5 py-3.5">{getStatusBadge(record.status)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            LEAVE TAB
            ══════════════════════════════════════════════════════════════════ */}
        {activeTab === 'leave' && (
          <div className="space-y-4">
            {leaveRequests.length === 0 ? (
              <div className="anim-fadeInUp opacity-0 delay-200 bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <CalIcon cls="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">No leave requests found</h3>
                <p className="text-gray-400 text-sm mt-1">You haven't submitted any leave requests yet.</p>
              </div>
            ) : (
              leaveRequests.map((request, i) => (
                <div
                  key={request.id}
                  className={`anim-fadeInUp opacity-0 delay-${Math.min((i + 1) * 100, 500)} bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                >
                  {/* top accent – colour-coded by status */}
                  <div className={`h-1 ${request.status === 'approved' ? 'bg-green-400' : request.status === 'rejected' ? 'bg-red-400' : 'bg-yellow-400'}`} />

                  <div className="p-5">
                    {/* header row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center">
                          <CalIcon cls="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 capitalize">{request.leave_type} Leave</h4>
                          <p className="text-xs text-gray-400 flex items-center gap-1">
                            <CalIcon cls="w-3 h-3" />
                            {formatDate(request.start_date)} &nbsp;→&nbsp; {formatDate(request.end_date)}
                          </p>
                        </div>
                      </div>
                      {getLeaveStatusBadge(request.status)}
                    </div>

                    {/* detail rows */}
                    <div className="space-y-2 pl-14">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-700">Reason: </span>{request.reason}
                      </p>
                      <p className="text-xs text-gray-400">
                        <span className="font-semibold text-gray-500">Submitted: </span>{formatDate(request.created_at)}
                      </p>
                      {request.comments && (
                        <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-xs text-gray-500">
                            <span className="font-semibold text-gray-600">Admin Comments: </span>{request.comments}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* ── Request Leave Modal ────────────────────────────────────────── */}
      {showLeaveModal && (
        <RequestLeaveModal onClose={() => setShowLeaveModal(false)} onSave={handleRequestLeave} />
      )}
    </div>
  );
}

// ─── Request Leave Modal ─────────────────────────────────────────────────────
function RequestLeaveModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    leave_type: 'sick',
    start_date: '',
    end_date: '',
    reason: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.start_date || !formData.end_date || !formData.reason) {
      alert('Please fill in all required fields');
      return;
    }

    if (new Date(formData.start_date) > new Date(formData.end_date)) {
      alert('End date cannot be before start date');
      return;
    }

    setLoading(true);
    await onSave(formData);
    // onSave closes the modal via the parent – do NOT touch local state after this point
  };

  const Icon = ({ d, cls = 'w-5 h-5' }) => (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  );

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4 anim-fadeIn opacity-0">
      <div className="anim-modalSlideIn opacity-0 bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-gray-200 flex flex-col">

        {/* header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <Icon d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" cls="w-5 h-5 text-gray-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-800">Request Leave</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:rotate-90">
            <Icon d="M6 18L18 6M6 6l12 12" cls="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* form body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 bg-gradient-to-br from-gray-50 to-white flex-1">
          {/* leave type */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Leave Type *</label>
            <select
              name="leave_type"
              value={formData.leave_type}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
            >
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
              <option value="annual">Annual Leave</option>
              <option value="emergency">Emergency Leave</option>
              <option value="maternity">Maternity Leave</option>
              <option value="paternity">Paternity Leave</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* date row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Start Date *</label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">End Date *</label>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                min={formData.start_date || new Date().toISOString().split('T')[0]}
                required
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* reason */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Reason *</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Please provide a reason for your leave request..."
              rows="4"
              required
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          {/* actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NurseAttendance;




















// // // // // // // src/pages/lab-technician/Attendance.jsx
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import staffService from '../../services/staffService';

// // // // // // function LabTechnicianAttendance() {
// // // // // //   const [attendance, setAttendance] = useState([]);
// // // // // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error, setError] = useState('');
// // // // // //   const [activeTab, setActiveTab] = useState('attendance');
// // // // // //   const [showLeaveModal, setShowLeaveModal] = useState(false);
// // // // // //   const [filters, setFilters] = useState({
// // // // // //     start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
// // // // // //     end_date: new Date().toISOString().split('T')[0]
// // // // // //   });

// // // // // //   useEffect(() => {
// // // // // //     if (activeTab === 'attendance') {
// // // // // //       fetchAttendance();
// // // // // //     } else {
// // // // // //       fetchLeaveRequests();
// // // // // //     }
// // // // // //   }, [activeTab, filters]);

// // // // // //   const fetchAttendance = async () => {
// // // // // //     try {
// // // // // //       setLoading(true);
// // // // // //       const response = await staffService.getAttendanceHistory(filters);
// // // // // //       setAttendance(response.attendance || []);
// // // // // //     } catch (error) {
// // // // // //       setError('Failed to fetch attendance history');
// // // // // //       console.error('Error fetching attendance:', error);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const fetchLeaveRequests = async () => {
// // // // // //     try {
// // // // // //       setLoading(true);
// // // // // //       const response = await staffService.getLeaveRequests();
// // // // // //       setLeaveRequests(response.leave_requests || []);
// // // // // //     } catch (error) {
// // // // // //       setError('Failed to fetch leave requests');
// // // // // //       console.error('Error fetching leave requests:', error);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCheckIn = async () => {
// // // // // //     try {
// // // // // //       await staffService.checkIn();
// // // // // //       alert('Checked in successfully');
// // // // // //       fetchAttendance();
// // // // // //     } catch (error) {
// // // // // //       alert('Failed to check in');
// // // // // //       console.error('Error checking in:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCheckOut = async () => {
// // // // // //     try {
// // // // // //       await staffService.checkOut();
// // // // // //       alert('Checked out successfully');
// // // // // //       fetchAttendance();
// // // // // //     } catch (error) {
// // // // // //       alert('Failed to check out');
// // // // // //       console.error('Error checking out:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleRequestLeave = async (leaveData) => {
// // // // // //     try {
// // // // // //       await staffService.requestLeave(leaveData);
// // // // // //       alert('Leave request submitted successfully');
// // // // // //       setShowLeaveModal(false);
// // // // // //       fetchLeaveRequests();
// // // // // //     } catch (error) {
// // // // // //       alert('Failed to submit leave request');
// // // // // //       console.error('Error submitting leave request:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleFilterChange = (e) => {
// // // // // //     setFilters({
// // // // // //       ...filters,
// // // // // //       [e.target.name]: e.target.value
// // // // // //     });
// // // // // //   };

// // // // // //   const formatDate = (dateString) => {
// // // // // //     return new Date(dateString).toLocaleDateString('en-US', {
// // // // // //       year: 'numeric',
// // // // // //       month: 'long',
// // // // // //       day: 'numeric'
// // // // // //     });
// // // // // //   };

// // // // // //   const formatTime = (dateString) => {
// // // // // //     return new Date(dateString).toLocaleTimeString('en-US', {
// // // // // //       hour: '2-digit',
// // // // // //       minute: '2-digit'
// // // // // //     });
// // // // // //   };

// // // // // //   const getTodayAttendance = () => {
// // // // // //     const today = new Date().toISOString().split('T')[0];
// // // // // //     return attendance.find(record => record.date === today);
// // // // // //   };

// // // // // //   const calculateTotalHours = (attendance) => {
// // // // // //     return attendance.reduce((total, record) => {
// // // // // //       return total + (record.total_hours || 0);
// // // // // //     }, 0);
// // // // // //   };

// // // // // //   const getStatusBadge = (status) => {
// // // // // //     const statusConfig = {
// // // // // //       present: { label: 'Present', className: 'status-badge-success' },
// // // // // //       absent: { label: 'Absent', className: 'status-badge-error' },
// // // // // //       late: { label: 'Late', className: 'status-badge-warning' },
// // // // // //       half_day: { label: 'Half Day', className: 'status-badge-info' }
// // // // // //     };
    
// // // // // //     const config = statusConfig[status] || { label: status, className: 'status-badge-default' };
// // // // // //     return (
// // // // // //       <span className={`status-badge ${config.className}`}>
// // // // // //         <span className="status-dot"></span>
// // // // // //         {config.label}
// // // // // //       </span>
// // // // // //     );
// // // // // //   };

// // // // // //   const getLeaveStatusBadge = (status) => {
// // // // // //     const statusConfig = {
// // // // // //       approved: { label: 'Approved', className: 'status-badge-success' },
// // // // // //       pending: { label: 'Pending', className: 'status-badge-warning' },
// // // // // //       rejected: { label: 'Rejected', className: 'status-badge-error' }
// // // // // //     };
    
// // // // // //     const config = statusConfig[status] || { label: status, className: 'status-badge-default' };
// // // // // //     return (
// // // // // //       <span className={`status-badge ${config.className}`}>
// // // // // //         <span className="status-dot"></span>
// // // // // //         {config.label}
// // // // // //       </span>
// // // // // //     );
// // // // // //   };

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="loading-container">
// // // // // //         <div className="loading-spinner"></div>
// // // // // //         <p className="loading-text">Loading attendance data...</p>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="attendance-page">
// // // // // //       <style>{`
// // // // // //         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

// // // // // //         .attendance-page {
// // // // // //           min-height: 100vh;
// // // // // //           background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
// // // // // //           padding: 2rem;
// // // // // //           font-family: 'Outfit', sans-serif;
// // // // // //           position: relative;
// // // // // //         }

// // // // // //         .attendance-page::before {
// // // // // //           content: '';
// // // // // //           position: fixed;
// // // // // //           top: 0;
// // // // // //           left: 0;
// // // // // //           right: 0;
// // // // // //           bottom: 0;
// // // // // //           background: 
// // // // // //             radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.04) 0%, transparent 50%),
// // // // // //             radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.04) 0%, transparent 50%),
// // // // // //             radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
// // // // // //           pointer-events: none;
// // // // // //           z-index: 0;
// // // // // //         }

// // // // // //         .attendance-page > * {
// // // // // //           position: relative;
// // // // // //           z-index: 1;
// // // // // //         }

// // // // // //         /* Header Section */
// // // // // //         .header-section {
// // // // // //           display: flex;
// // // // // //           justify-content: space-between;
// // // // // //           align-items: flex-start;
// // // // // //           margin-bottom: 2.5rem;
// // // // // //           animation: slideDown 0.6s ease-out;
// // // // // //           flex-wrap: wrap;
// // // // // //           gap: 1rem;
// // // // // //         }

// // // // // //         @keyframes slideDown {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateY(-20px);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateY(0);
// // // // // //           }
// // // // // //         }

// // // // // //         .page-title {
// // // // // //           font-size: 2.25rem;
// // // // // //           font-weight: 700;
// // // // // //           background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
// // // // // //           -webkit-background-clip: text;
// // // // // //           -webkit-text-fill-color: transparent;
// // // // // //           background-clip: text;
// // // // // //           letter-spacing: -0.02em;
// // // // // //           margin: 0;
// // // // // //         }

// // // // // //         .header-actions {
// // // // // //           display: flex;
// // // // // //           gap: 0.75rem;
// // // // // //           flex-wrap: wrap;
// // // // // //         }

// // // // // //         .action-btn {
// // // // // //           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
// // // // // //           color: white;
// // // // // //           border: none;
// // // // // //           padding: 0.875rem 1.75rem;
// // // // // //           border-radius: 12px;
// // // // // //           font-weight: 600;
// // // // // //           font-size: 0.95rem;
// // // // // //           cursor: pointer;
// // // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // //           box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
// // // // // //           position: relative;
// // // // // //           overflow: hidden;
// // // // // //         }

// // // // // //         .action-btn::before {
// // // // // //           content: '';
// // // // // //           position: absolute;
// // // // // //           top: 0;
// // // // // //           left: -100%;
// // // // // //           width: 100%;
// // // // // //           height: 100%;
// // // // // //           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
// // // // // //           transition: left 0.5s;
// // // // // //         }

// // // // // //         .action-btn:hover::before {
// // // // // //           left: 100%;
// // // // // //         }

// // // // // //         .action-btn:hover {
// // // // // //           transform: translateY(-2px);
// // // // // //           box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
// // // // // //         }

// // // // // //         .action-btn-secondary {
// // // // // //           background: linear-gradient(135deg, #64748b 0%, #475569 100%);
// // // // // //           box-shadow: 0 4px 12px rgba(100, 116, 139, 0.2);
// // // // // //         }

// // // // // //         .action-btn-secondary:hover {
// // // // // //           box-shadow: 0 6px 20px rgba(100, 116, 139, 0.3);
// // // // // //         }

// // // // // //         /* Tabs */
// // // // // //         .tabs-container {
// // // // // //           margin-bottom: 2rem;
// // // // // //           animation: fadeIn 0.6s ease-out 0.1s backwards;
// // // // // //         }

// // // // // //         @keyframes fadeIn {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateY(10px);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateY(0);
// // // // // //           }
// // // // // //         }

// // // // // //         .tabs-wrapper {
// // // // // //           display: inline-flex;
// // // // // //           background: rgba(255, 255, 255, 0.7);
// // // // // //           backdrop-filter: blur(10px);
// // // // // //           border-radius: 16px;
// // // // // //           padding: 6px;
// // // // // //           gap: 6px;
// // // // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // // // //           border: 1px solid rgba(0, 0, 0, 0.06);
// // // // // //         }

// // // // // //         .tab-button {
// // // // // //           padding: 0.75rem 1.75rem;
// // // // // //           border: none;
// // // // // //           background: transparent;
// // // // // //           color: #6b7280;
// // // // // //           font-weight: 600;
// // // // // //           font-size: 0.95rem;
// // // // // //           cursor: pointer;
// // // // // //           border-radius: 12px;
// // // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // //         }

// // // // // //         .tab-button.active {
// // // // // //           background: white;
// // // // // //           color: #1f2937;
// // // // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
// // // // // //         }

// // // // // //         .tab-button:hover:not(.active) {
// // // // // //           color: #1f2937;
// // // // // //           background: rgba(255, 255, 255, 0.5);
// // // // // //         }

// // // // // //         /* Alert */
// // // // // //         .alert-error {
// // // // // //           background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
// // // // // //           border: 1px solid #fecaca;
// // // // // //           color: #991b1b;
// // // // // //           padding: 1rem 1.25rem;
// // // // // //           border-radius: 12px;
// // // // // //           margin-bottom: 1.5rem;
// // // // // //           animation: slideIn 0.4s ease-out;
// // // // // //           font-weight: 500;
// // // // // //         }

// // // // // //         @keyframes slideIn {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateX(-20px);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateX(0);
// // // // // //           }
// // // // // //         }

// // // // // //         /* Today's Status Card */
// // // // // //         .today-section {
// // // // // //           margin-bottom: 2rem;
// // // // // //           animation: fadeIn 0.6s ease-out 0.2s backwards;
// // // // // //         }

// // // // // //         .section-title {
// // // // // //           font-size: 1.5rem;
// // // // // //           font-weight: 700;
// // // // // //           color: #1f2937;
// // // // // //           margin: 0 0 1rem 0;
// // // // // //         }

// // // // // //         .today-card {
// // // // // //           background: white;
// // // // // //           border-radius: 16px;
// // // // // //           padding: 2rem;
// // // // // //           border: 1px solid #e5e7eb;
// // // // // //           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
// // // // // //           animation: cardSlideUp 0.5s ease-out backwards;
// // // // // //           position: relative;
// // // // // //           overflow: hidden;
// // // // // //         }

// // // // // //         @keyframes cardSlideUp {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateY(20px);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateY(0);
// // // // // //           }
// // // // // //         }

// // // // // //         .today-card::before {
// // // // // //           content: '';
// // // // // //           position: absolute;
// // // // // //           top: 0;
// // // // // //           left: 0;
// // // // // //           right: 0;
// // // // // //           height: 4px;
// // // // // //           background: linear-gradient(90deg, #10b981 0%, #059669 100%);
// // // // // //         }

// // // // // //         .today-card-content {
// // // // // //           display: flex;
// // // // // //           justify-content: space-between;
// // // // // //           align-items: center;
// // // // // //           gap: 1.5rem;
// // // // // //           flex-wrap: wrap;
// // // // // //         }

// // // // // //         .today-info h4 {
// // // // // //           font-size: 1.25rem;
// // // // // //           font-weight: 600;
// // // // // //           color: #1f2937;
// // // // // //           margin: 0 0 0.75rem 0;
// // // // // //         }

// // // // // //         .today-info p {
// // // // // //           margin: 0.5rem 0;
// // // // // //           color: #6b7280;
// // // // // //           font-size: 0.95rem;
// // // // // //         }

// // // // // //         .today-info p strong {
// // // // // //           color: #374151;
// // // // // //           font-weight: 600;
// // // // // //         }

// // // // // //         .not-checked-in-card {
// // // // // //           text-align: center;
// // // // // //           padding: 2.5rem;
// // // // // //         }

// // // // // //         .not-checked-in-card p {
// // // // // //           color: #6b7280;
// // // // // //           font-size: 1.05rem;
// // // // // //           margin-bottom: 1.5rem;
// // // // // //         }

// // // // // //         .check-in-now-btn {
// // // // // //           background: linear-gradient(135deg, #10b981 0%, #059669 100%);
// // // // // //           color: white;
// // // // // //           border: none;
// // // // // //           padding: 1rem 2rem;
// // // // // //           border-radius: 12px;
// // // // // //           font-weight: 600;
// // // // // //           font-size: 1rem;
// // // // // //           cursor: pointer;
// // // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // //           box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
// // // // // //         }

// // // // // //         .check-in-now-btn:hover {
// // // // // //           transform: translateY(-2px);
// // // // // //           box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
// // // // // //         }

// // // // // //         /* Status Badge */
// // // // // //         .status-badge {
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           gap: 0.4rem;
// // // // // //           padding: 0.5rem 1rem;
// // // // // //           border-radius: 20px;
// // // // // //           font-size: 0.85rem;
// // // // // //           font-weight: 600;
// // // // // //           white-space: nowrap;
// // // // // //         }

// // // // // //         .status-dot {
// // // // // //           width: 6px;
// // // // // //           height: 6px;
// // // // // //           border-radius: 50%;
// // // // // //           animation: dotPulse 2s ease-in-out infinite;
// // // // // //         }

// // // // // //         @keyframes dotPulse {
// // // // // //           0%, 100% {
// // // // // //             opacity: 1;
// // // // // //             transform: scale(1);
// // // // // //           }
// // // // // //           50% {
// // // // // //             opacity: 0.5;
// // // // // //             transform: scale(1.2);
// // // // // //           }
// // // // // //         }

// // // // // //         .status-badge-success {
// // // // // //           background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
// // // // // //           color: #16a34a;
// // // // // //           border: 1px solid #bbf7d0;
// // // // // //         }

// // // // // //         .status-badge-success .status-dot {
// // // // // //           background: #16a34a;
// // // // // //         }

// // // // // //         .status-badge-error {
// // // // // //           background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
// // // // // //           color: #dc2626;
// // // // // //           border: 1px solid #fecaca;
// // // // // //         }

// // // // // //         .status-badge-error .status-dot {
// // // // // //           background: #dc2626;
// // // // // //         }

// // // // // //         .status-badge-warning {
// // // // // //           background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
// // // // // //           color: #d97706;
// // // // // //           border: 1px solid #fde68a;
// // // // // //         }

// // // // // //         .status-badge-warning .status-dot {
// // // // // //           background: #d97706;
// // // // // //         }

// // // // // //         .status-badge-info {
// // // // // //           background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
// // // // // //           color: #2563eb;
// // // // // //           border: 1px solid #bfdbfe;
// // // // // //         }

// // // // // //         .status-badge-info .status-dot {
// // // // // //           background: #2563eb;
// // // // // //         }

// // // // // //         .status-badge-default {
// // // // // //           background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
// // // // // //           color: #6b7280;
// // // // // //           border: 1px solid #e5e7eb;
// // // // // //         }

// // // // // //         .status-badge-default .status-dot {
// // // // // //           background: #6b7280;
// // // // // //         }

// // // // // //         /* Filters */
// // // // // //         .filters-section {
// // // // // //           display: flex;
// // // // // //           gap: 1.25rem;
// // // // // //           margin-bottom: 2rem;
// // // // // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // // // // //           flex-wrap: wrap;
// // // // // //         }

// // // // // //         .filter-group {
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //         }

// // // // // //         .filter-label {
// // // // // //           font-size: 0.875rem;
// // // // // //           font-weight: 600;
// // // // // //           color: #374151;
// // // // // //           margin-bottom: 0.5rem;
// // // // // //         }

// // // // // //         .filter-input {
// // // // // //           background: white;
// // // // // //           border: 1.5px solid #e5e7eb;
// // // // // //           padding: 0.875rem 1.125rem;
// // // // // //           border-radius: 12px;
// // // // // //           font-size: 0.95rem;
// // // // // //           font-weight: 400;
// // // // // //           color: #374151;
// // // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // //           font-family: 'Outfit', sans-serif;
// // // // // //         }

// // // // // //         .filter-input:focus {
// // // // // //           outline: none;
// // // // // //           border-color: #6366f1;
// // // // // //           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
// // // // // //         }

// // // // // //         /* Summary Cards */
// // // // // //         .summary-section {
// // // // // //           margin-bottom: 2rem;
// // // // // //           animation: fadeIn 0.6s ease-out 0.4s backwards;
// // // // // //         }

// // // // // //         .summary-grid {
// // // // // //           display: grid;
// // // // // //           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// // // // // //           gap: 1.25rem;
// // // // // //         }

// // // // // //         .summary-card {
// // // // // //           background: white;
// // // // // //           border-radius: 16px;
// // // // // //           padding: 1.75rem;
// // // // // //           border: 1px solid #e5e7eb;
// // // // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // //           animation: cardSlideUp 0.5s ease-out backwards;
// // // // // //         }

// // // // // //         .summary-card:nth-child(1) { animation-delay: 0.05s; }
// // // // // //         .summary-card:nth-child(2) { animation-delay: 0.1s; }
// // // // // //         .summary-card:nth-child(3) { animation-delay: 0.15s; }

// // // // // //         .summary-card:hover {
// // // // // //           transform: translateY(-4px);
// // // // // //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
// // // // // //         }

// // // // // //         .summary-label {
// // // // // //           font-size: 0.875rem;
// // // // // //           color: #6b7280;
// // // // // //           font-weight: 500;
// // // // // //           margin-bottom: 0.5rem;
// // // // // //         }

// // // // // //         .summary-value {
// // // // // //           font-size: 2rem;
// // // // // //           font-weight: 700;
// // // // // //           color: #1f2937;
// // // // // //           font-family: 'Space Mono', monospace;
// // // // // //         }

// // // // // //         /* Table */
// // // // // //         .table-container {
// // // // // //           background: white;
// // // // // //           border-radius: 16px;
// // // // // //           padding: 1.5rem;
// // // // // //           border: 1px solid #e5e7eb;
// // // // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // // // //           overflow-x: auto;
// // // // // //           animation: fadeIn 0.6s ease-out 0.5s backwards;
// // // // // //         }

// // // // // //         .attendance-table {
// // // // // //           width: 100%;
// // // // // //           border-collapse: separate;
// // // // // //           border-spacing: 0;
// // // // // //         }

// // // // // //         .attendance-table thead th {
// // // // // //           background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
// // // // // //           padding: 1rem 1.25rem;
// // // // // //           text-align: left;
// // // // // //           font-weight: 600;
// // // // // //           color: #374151;
// // // // // //           font-size: 0.875rem;
// // // // // //           text-transform: uppercase;
// // // // // //           letter-spacing: 0.05em;
// // // // // //           border-bottom: 2px solid #e5e7eb;
// // // // // //         }

// // // // // //         .attendance-table thead th:first-child {
// // // // // //           border-top-left-radius: 12px;
// // // // // //         }

// // // // // //         .attendance-table thead th:last-child {
// // // // // //           border-top-right-radius: 12px;
// // // // // //         }

// // // // // //         .attendance-table tbody tr {
// // // // // //           transition: all 0.2s;
// // // // // //         }

// // // // // //         .attendance-table tbody tr:hover {
// // // // // //           background: #f9fafb;
// // // // // //         }

// // // // // //         .attendance-table tbody td {
// // // // // //           padding: 1rem 1.25rem;
// // // // // //           border-bottom: 1px solid #f3f4f6;
// // // // // //           color: #374151;
// // // // // //           font-size: 0.95rem;
// // // // // //         }

// // // // // //         .attendance-table tbody tr:last-child td {
// // // // // //           border-bottom: none;
// // // // // //         }

// // // // // //         /* Leave Requests */
// // // // // //         .leave-requests-container {
// // // // // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // // // // //         }

// // // // // //         .leave-grid {
// // // // // //           display: grid;
// // // // // //           gap: 1.25rem;
// // // // // //         }

// // // // // //         .leave-card {
// // // // // //           background: white;
// // // // // //           border-radius: 16px;
// // // // // //           padding: 1.75rem;
// // // // // //           border: 1px solid #e5e7eb;
// // // // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // //           animation: cardSlideUp 0.5s ease-out backwards;
// // // // // //         }

// // // // // //         .leave-card:nth-child(1) { animation-delay: 0.05s; }
// // // // // //         .leave-card:nth-child(2) { animation-delay: 0.1s; }
// // // // // //         .leave-card:nth-child(3) { animation-delay: 0.15s; }
// // // // // //         .leave-card:nth-child(n+4) { animation-delay: 0.2s; }

// // // // // //         .leave-card:hover {
// // // // // //           transform: translateY(-2px);
// // // // // //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
// // // // // //         }

// // // // // //         .leave-header {
// // // // // //           display: flex;
// // // // // //           justify-content: space-between;
// // // // // //           align-items: flex-start;
// // // // // //           margin-bottom: 1.25rem;
// // // // // //           gap: 1rem;
// // // // // //         }

// // // // // //         .leave-type {
// // // // // //           font-size: 1.25rem;
// // // // // //           font-weight: 600;
// // // // // //           color: #1f2937;
// // // // // //           margin: 0 0 0.5rem 0;
// // // // // //         }

// // // // // //         .leave-dates {
// // // // // //           font-size: 0.875rem;
// // // // // //           color: #6b7280;
// // // // // //         }

// // // // // //         .leave-details p {
// // // // // //           margin: 0.75rem 0;
// // // // // //           color: #374151;
// // // // // //           font-size: 0.95rem;
// // // // // //         }

// // // // // //         .leave-details strong {
// // // // // //           color: #1f2937;
// // // // // //           font-weight: 600;
// // // // // //         }

// // // // // //         /* Empty State */
// // // // // //         .empty-state {
// // // // // //           text-align: center;
// // // // // //           padding: 4rem 2rem;
// // // // // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // // // // //         }

// // // // // //         .empty-state h3 {
// // // // // //           font-size: 1.5rem;
// // // // // //           font-weight: 600;
// // // // // //           color: #1f2937;
// // // // // //           margin: 0 0 0.5rem 0;
// // // // // //         }

// // // // // //         .empty-state p {
// // // // // //           color: #6b7280;
// // // // // //           font-size: 1rem;
// // // // // //           margin: 0;
// // // // // //         }

// // // // // //         /* Loading State */
// // // // // //         .loading-container {
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           min-height: 100vh;
// // // // // //           background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
// // // // // //         }

// // // // // //         .loading-spinner {
// // // // // //           width: 60px;
// // // // // //           height: 60px;
// // // // // //           border: 4px solid #e5e7eb;
// // // // // //           border-top-color: #6366f1;
// // // // // //           border-radius: 50%;
// // // // // //           animation: spin 1s linear infinite;
// // // // // //         }

// // // // // //         @keyframes spin {
// // // // // //           to {
// // // // // //             transform: rotate(360deg);
// // // // // //           }
// // // // // //         }

// // // // // //         .loading-text {
// // // // // //           margin-top: 1.5rem;
// // // // // //           color: #6b7280;
// // // // // //           font-size: 1rem;
// // // // // //           font-weight: 500;
// // // // // //         }

// // // // // //         /* Modal */
// // // // // //         .modal-overlay {
// // // // // //           position: fixed;
// // // // // //           top: 0;
// // // // // //           left: 0;
// // // // // //           right: 0;
// // // // // //           bottom: 0;
// // // // // //           background: rgba(0, 0, 0, 0.5);
// // // // // //           backdrop-filter: blur(4px);
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           z-index: 1000;
// // // // // //           animation: fadeIn 0.3s ease-out;
// // // // // //         }

// // // // // //         .modal-box {
// // // // // //           background: white;
// // // // // //           border-radius: 20px;
// // // // // //           padding: 2rem;
// // // // // //           width: 90%;
// // // // // //           max-width: 600px;
// // // // // //           max-height: 90vh;
// // // // // //           overflow-y: auto;
// // // // // //           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
// // // // // //           animation: modalSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // //           position: relative;
// // // // // //         }

// // // // // //         @keyframes modalSlideUp {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateY(40px) scale(0.95);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateY(0) scale(1);
// // // // // //           }
// // // // // //         }

// // // // // //         .modal-header {
// // // // // //           display: flex;
// // // // // //           justify-content: space-between;
// // // // // //           align-items: center;
// // // // // //           margin-bottom: 1.75rem;
// // // // // //         }

// // // // // //         .modal-title {
// // // // // //           font-size: 1.75rem;
// // // // // //           font-weight: 700;
// // // // // //           color: #1f2937;
// // // // // //           margin: 0;
// // // // // //         }

// // // // // //         .close-btn {
// // // // // //           width: 40px;
// // // // // //           height: 40px;
// // // // // //           border-radius: 10px;
// // // // // //           border: none;
// // // // // //           background: #f3f4f6;
// // // // // //           color: #6b7280;
// // // // // //           font-size: 1.5rem;
// // // // // //           cursor: pointer;
// // // // // //           transition: all 0.2s;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           position: absolute;
// // // // // //           right: 1.5rem;
// // // // // //           top: 1.5rem;
// // // // // //         }

// // // // // //         .close-btn:hover {
// // // // // //           background: #e5e7eb;
// // // // // //           color: #1f2937;
// // // // // //         }

// // // // // //         /* Form Elements */
// // // // // //         .form-group {
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           margin-bottom: 1.25rem;
// // // // // //         }

// // // // // //         .form-label {
// // // // // //           font-size: 0.875rem;
// // // // // //           font-weight: 600;
// // // // // //           color: #374151;
// // // // // //           margin-bottom: 0.5rem;
// // // // // //         }

// // // // // //         .form-input,
// // // // // //         .form-select,
// // // // // //         .form-textarea {
// // // // // //           background: #f9fafb;
// // // // // //           border: 1.5px solid #e5e7eb;
// // // // // //           padding: 0.875rem 1rem;
// // // // // //           border-radius: 10px;
// // // // // //           font-size: 0.95rem;
// // // // // //           font-family: 'Outfit', sans-serif;
// // // // // //           color: #1f2937;
// // // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // //         }

// // // // // //         .form-input:focus,
// // // // // //         .form-select:focus,
// // // // // //         .form-textarea:focus {
// // // // // //           outline: none;
// // // // // //           border-color: #6366f1;
// // // // // //           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
// // // // // //           background: white;
// // // // // //         }

// // // // // //         .form-row {
// // // // // //           display: flex;
// // // // // //           gap: 1rem;
// // // // // //         }

// // // // // //         .form-row .form-group {
// // // // // //           flex: 1;
// // // // // //         }

// // // // // //         .modal-actions {
// // // // // //           display: flex;
// // // // // //           justify-content: flex-end;
// // // // // //           gap: 1rem;
// // // // // //           margin-top: 1.75rem;
// // // // // //           padding-top: 1.75rem;
// // // // // //           border-top: 1px solid #e5e7eb;
// // // // // //         }

// // // // // //         .btn-outline {
// // // // // //           background: white;
// // // // // //           border: 1.5px solid #e5e7eb;
// // // // // //           color: #6b7280;
// // // // // //           padding: 0.875rem 1.5rem;
// // // // // //           border-radius: 10px;
// // // // // //           font-weight: 600;
// // // // // //           font-size: 0.95rem;
// // // // // //           cursor: pointer;
// // // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // //         }

// // // // // //         .btn-outline:hover {
// // // // // //           background: #f9fafb;
// // // // // //           border-color: #d1d5db;
// // // // // //           color: #374151;
// // // // // //         }

// // // // // //         .btn-primary {
// // // // // //           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
// // // // // //           border: none;
// // // // // //           color: white;
// // // // // //           padding: 0.875rem 1.5rem;
// // // // // //           border-radius: 10px;
// // // // // //           font-weight: 600;
// // // // // //           font-size: 0.95rem;
// // // // // //           cursor: pointer;
// // // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // //         }

// // // // // //         .btn-primary:hover {
// // // // // //           transform: translateY(-2px);
// // // // // //           box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
// // // // // //         }

// // // // // //         .btn-primary:disabled {
// // // // // //           opacity: 0.6;
// // // // // //           cursor: not-allowed;
// // // // // //           transform: none;
// // // // // //         }

// // // // // //         /* Responsive */
// // // // // //         @media (max-width: 768px) {
// // // // // //           .attendance-page {
// // // // // //             padding: 1rem;
// // // // // //           }

// // // // // //           .page-title {
// // // // // //             font-size: 1.75rem;
// // // // // //           }

// // // // // //           .header-section {
// // // // // //             flex-direction: column;
// // // // // //             align-items: flex-start;
// // // // // //           }

// // // // // //           .header-actions {
// // // // // //             width: 100%;
// // // // // //           }

// // // // // //           .action-btn {
// // // // // //             flex: 1;
// // // // // //           }

// // // // // //           .summary-grid {
// // // // // //             grid-template-columns: 1fr;
// // // // // //           }

// // // // // //           .form-row {
// // // // // //             flex-direction: column;
// // // // // //           }

// // // // // //           .table-container {
// // // // // //             padding: 1rem;
// // // // // //           }

// // // // // //           .attendance-table {
// // // // // //             font-size: 0.85rem;
// // // // // //           }

// // // // // //           .attendance-table thead th,
// // // // // //           .attendance-table tbody td {
// // // // // //             padding: 0.75rem;
// // // // // //           }
// // // // // //         }

// // // // // //         /* Scrollbar Styling */
// // // // // //         .modal-box::-webkit-scrollbar {
// // // // // //           width: 8px;
// // // // // //         }

// // // // // //         .modal-box::-webkit-scrollbar-track {
// // // // // //           background: #f3f4f6;
// // // // // //           border-radius: 10px;
// // // // // //         }

// // // // // //         .modal-box::-webkit-scrollbar-thumb {
// // // // // //           background: #d1d5db;
// // // // // //           border-radius: 10px;
// // // // // //         }

// // // // // //         .modal-box::-webkit-scrollbar-thumb:hover {
// // // // // //           background: #9ca3af;
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       <div className="header-section">
// // // // // //         <h1 className="page-title">Attendance & Leave Management</h1>
// // // // // //         <div className="header-actions">
// // // // // //           {activeTab === 'attendance' && (
// // // // // //             <>
// // // // // //               <button onClick={handleCheckIn} className="action-btn">Check In</button>
// // // // // //               <button onClick={handleCheckOut} className="action-btn action-btn-secondary">Check Out</button>
// // // // // //             </>
// // // // // //           )}
// // // // // //           {activeTab === 'leave' && (
// // // // // //             <button onClick={() => setShowLeaveModal(true)} className="action-btn">
// // // // // //               Request Leave
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="tabs-container">
// // // // // //         <div className="tabs-wrapper">
// // // // // //           <button 
// // // // // //             className={`tab-button ${activeTab === 'attendance' ? 'active' : ''}`}
// // // // // //             onClick={() => setActiveTab('attendance')}
// // // // // //           >
// // // // // //             Attendance
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             className={`tab-button ${activeTab === 'leave' ? 'active' : ''}`}
// // // // // //             onClick={() => setActiveTab('leave')}
// // // // // //           >
// // // // // //             Leave Requests
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {error && <div className="alert-error">{error}</div>}

// // // // // //       <div>
// // // // // //         {activeTab === 'attendance' ? (
// // // // // //           <div>
// // // // // //             <div className="today-section">
// // // // // //               <h3 className="section-title">Today's Status</h3>
// // // // // //               {getTodayAttendance() ? (
// // // // // //                 <div className="today-card">
// // // // // //                   <div className="today-card-content">
// // // // // //                     <div className="today-info">
// // // // // //                       <h4>Checked In</h4>
// // // // // //                       <p><strong>Time:</strong> {formatTime(getTodayAttendance().check_in)}</p>
// // // // // //                       {getTodayAttendance().check_out && (
// // // // // //                         <p><strong>Check Out:</strong> {formatTime(getTodayAttendance().check_out)}</p>
// // // // // //                       )}
// // // // // //                       {getTodayAttendance().total_hours && (
// // // // // //                         <p><strong>Total Hours:</strong> {getTodayAttendance().total_hours.toFixed(2)}</p>
// // // // // //                       )}
// // // // // //                     </div>
// // // // // //                     {getStatusBadge(getTodayAttendance().status)}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               ) : (
// // // // // //                 <div className="today-card not-checked-in-card">
// // // // // //                   <p>You haven't checked in today</p>
// // // // // //                   <button onClick={handleCheckIn} className="check-in-now-btn">Check In Now</button>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             <div className="filters-section">
// // // // // //               <div className="filter-group">
// // // // // //                 <label className="filter-label">Start Date:</label>
// // // // // //                 <input
// // // // // //                   type="date"
// // // // // //                   name="start_date"
// // // // // //                   value={filters.start_date}
// // // // // //                   onChange={handleFilterChange}
// // // // // //                   className="filter-input"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="filter-group">
// // // // // //                 <label className="filter-label">End Date:</label>
// // // // // //                 <input
// // // // // //                   type="date"
// // // // // //                   name="end_date"
// // // // // //                   value={filters.end_date}
// // // // // //                   onChange={handleFilterChange}
// // // // // //                   className="filter-input"
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div className="summary-section">
// // // // // //               <h3 className="section-title">Attendance History</h3>
// // // // // //               <div className="summary-grid">
// // // // // //                 <div className="summary-card">
// // // // // //                   <div className="summary-label">Total Days</div>
// // // // // //                   <div className="summary-value">{attendance.length}</div>
// // // // // //                 </div>
// // // // // //                 <div className="summary-card">
// // // // // //                   <div className="summary-label">Total Hours</div>
// // // // // //                   <div className="summary-value">{calculateTotalHours(attendance).toFixed(2)}</div>
// // // // // //                 </div>
// // // // // //                 <div className="summary-card">
// // // // // //                   <div className="summary-label">Present Days</div>
// // // // // //                   <div className="summary-value">{attendance.filter(a => a.status === 'present').length}</div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {attendance.length === 0 ? (
// // // // // //               <div className="empty-state">
// // // // // //                 <h3>No attendance records found</h3>
// // // // // //                 <p>No attendance records match your current filters.</p>
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <div className="table-container">
// // // // // //                 <table className="attendance-table">
// // // // // //                   <thead>
// // // // // //                     <tr>
// // // // // //                       <th>Date</th>
// // // // // //                       <th>Check In</th>
// // // // // //                       <th>Check Out</th>
// // // // // //                       <th>Total Hours</th>
// // // // // //                       <th>Status</th>
// // // // // //                     </tr>
// // // // // //                   </thead>
// // // // // //                   <tbody>
// // // // // //                     {attendance.map((record) => (
// // // // // //                       <tr key={record.id}>
// // // // // //                         <td>{formatDate(record.date)}</td>
// // // // // //                         <td>{record.check_in ? formatTime(record.check_in) : 'N/A'}</td>
// // // // // //                         <td>{record.check_out ? formatTime(record.check_out) : 'N/A'}</td>
// // // // // //                         <td>{record.total_hours ? record.total_hours.toFixed(2) : 'N/A'}</td>
// // // // // //                         <td>{getStatusBadge(record.status)}</td>
// // // // // //                       </tr>
// // // // // //                     ))}
// // // // // //                   </tbody>
// // // // // //                 </table>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <div className="leave-requests-container">
// // // // // //             <h2 className="section-title">My Leave Requests</h2>
            
// // // // // //             {leaveRequests.length === 0 ? (
// // // // // //               <div className="empty-state">
// // // // // //                 <h3>No leave requests found</h3>
// // // // // //                 <p>You haven't submitted any leave requests yet.</p>
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <div className="leave-grid">
// // // // // //                 {leaveRequests.map((request) => (
// // // // // //                   <div key={request.id} className="leave-card">
// // // // // //                     <div className="leave-header">
// // // // // //                       <div>
// // // // // //                         <h4 className="leave-type">{request.leave_type}</h4>
// // // // // //                         <p className="leave-dates">
// // // // // //                           {formatDate(request.start_date)} to {formatDate(request.end_date)}
// // // // // //                         </p>
// // // // // //                       </div>
// // // // // //                       {getLeaveStatusBadge(request.status)}
// // // // // //                     </div>
// // // // // //                     <div className="leave-details">
// // // // // //                       <p><strong>Reason:</strong> {request.reason}</p>
// // // // // //                       <p><strong>Submitted:</strong> {formatDate(request.created_at)}</p>
// // // // // //                       {request.comments && (
// // // // // //                         <p><strong>Admin Comments:</strong> {request.comments}</p>
// // // // // //                       )}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       {showLeaveModal && (
// // // // // //         <RequestLeaveModal
// // // // // //           onClose={() => setShowLeaveModal(false)}
// // // // // //           onSave={handleRequestLeave}
// // // // // //         />
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // // // Request Leave Modal Component
// // // // // // // function RequestLeaveModal({ onClose, onSave }) {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     leave_type: 'sick',
// // // // // // //     start_date: '',
// // // // // // //     end_date: '',
// // // // // // //     reason: ''
// // // // // // //   });
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   const handleChange = (e) => {
// // // // // // //     setFormData({
// // // // // // //       ...formData,
// // // // // // //       [e.target.name]: e.target.value
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
    
// // // // // // //     if (!formData.start_date || !formData.end_date || !formData.reason) {
// // // // // // //       alert('Please fill in all required fields');
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     if (new Date(formData.start_date) > new Date(formData.end_date)) {
// // // // // // //       alert('End date cannot be before start date');
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setLoading(true);
// // // // // // //     await onSave(formData);
// // // // // // //     setLoading(false);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="modal-overlay" >
// // // // // // //       <div className="modal-box" onClick={(e) => e.stopPropagation()}>
// // // // // // //         <button onClick={onClose} className="close-btn">×</button>
// // // // // // //         <div className="modal-header">
// // // // // // //           <h2 className="modal-title">Request Leave</h2>
// // // // // // //         </div>

// // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // //           <div className="form-group">
// // // // // // //             <label className="form-label">Leave Type *</label>
// // // // // // //             <select
// // // // // // //               name="leave_type"
// // // // // // //               value={formData.leave_type}
// // // // // // //               onChange={handleChange}
// // // // // // //               className="form-select"
// // // // // // //               required
// // // // // // //             >
// // // // // // //               <option value="sick">Sick Leave</option>
// // // // // // //               <option value="casual">Casual Leave</option>
// // // // // // //               <option value="annual">Annual Leave</option>
// // // // // // //               <option value="emergency">Emergency Leave</option>
// // // // // // //               <option value="maternity">Maternity Leave</option>
// // // // // // //               <option value="paternity">Paternity Leave</option>
// // // // // // //               <option value="other">Other</option>
// // // // // // //             </select>
// // // // // // //           </div>

// // // // // // //           <div className="form-row">
// // // // // // //             <div className="form-group">
// // // // // // //               <label className="form-label">Start Date *</label>
// // // // // // //               <input
// // // // // // //                 type="date"
// // // // // // //                 name="start_date"
// // // // // // //                 value={formData.start_date}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 min={new Date().toISOString().split('T')[0]}
// // // // // // //                 className="form-input"
// // // // // // //                 required
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div className="form-group">
// // // // // // //               <label className="form-label">End Date *</label>
// // // // // // //               <input
// // // // // // //                 type="date"
// // // // // // //                 name="end_date"
// // // // // // //                 value={formData.end_date}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 min={formData.start_date || new Date().toISOString().split('T')[0]}
// // // // // // //                 className="form-input"
// // // // // // //                 required
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <div className="form-group">
// // // // // // //             <label className="form-label">Reason *</label>
// // // // // // //             <textarea
// // // // // // //               name="reason"
// // // // // // //               value={formData.reason}
// // // // // // //               onChange={handleChange}
// // // // // // //               placeholder="Please provide a reason for your leave request..."
// // // // // // //               className="form-textarea"
// // // // // // //               rows="4"
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className="modal-actions">
// // // // // // //             <button type="button" onClick={onClose} className="btn-outline">Cancel</button>
// // // // // // //             <button type="submit" disabled={loading} className="btn-primary">
// // // // // // //               {loading ? 'Submitting...' : 'Submit Request'}
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </form>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }



// // // // // // // Request Leave Modal Component
// // // // // // function RequestLeaveModal({ onClose, onSave }) {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     leave_type: 'sick',
// // // // // //     start_date: '',
// // // // // //     end_date: '',
// // // // // //     reason: ''
// // // // // //   });
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   const handleChange = (e) => {
// // // // // //     setFormData({
// // // // // //       ...formData,
// // // // // //       [e.target.name]: e.target.value
// // // // // //     });
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
    
// // // // // //     if (!formData.start_date || !formData.end_date || !formData.reason) {
// // // // // //       alert('Please fill in all required fields');
// // // // // //       return;
// // // // // //     }

// // // // // //     if (new Date(formData.start_date) > new Date(formData.end_date)) {
// // // // // //       alert('End date cannot be before start date');
// // // // // //       return;
// // // // // //     }

// // // // // //     setLoading(true);
// // // // // //     await onSave(formData);
// // // // // //     setLoading(false);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="modal-overlay">
// // // // // //       <div className="modal-box">
// // // // // //         <button onClick={onClose} className="close-btn">×</button>
// // // // // //         <div className="modal-header">
// // // // // //           <h2 className="modal-title">Request Leave</h2>
// // // // // //         </div>

// // // // // //         <form onSubmit={handleSubmit}>
// // // // // //           <div className="form-group">
// // // // // //             <label className="form-label">Leave Type *</label>
// // // // // //             <select
// // // // // //               name="leave_type"
// // // // // //               value={formData.leave_type}
// // // // // //               onChange={handleChange}
// // // // // //               className="form-select"
// // // // // //               required
// // // // // //             >
// // // // // //               <option value="sick">Sick Leave</option>
// // // // // //               <option value="casual">Casual Leave</option>
// // // // // //               <option value="annual">Annual Leave</option>
// // // // // //               <option value="emergency">Emergency Leave</option>
// // // // // //               <option value="maternity">Maternity Leave</option>
// // // // // //               <option value="paternity">Paternity Leave</option>
// // // // // //               <option value="other">Other</option>
// // // // // //             </select>
// // // // // //           </div>

// // // // // //           <div className="form-row">
// // // // // //             <div className="form-group">
// // // // // //               <label className="form-label">Start Date *</label>
// // // // // //               <input
// // // // // //                 type="date"
// // // // // //                 name="start_date"
// // // // // //                 value={formData.start_date}
// // // // // //                 onChange={handleChange}
// // // // // //                 min={new Date().toISOString().split('T')[0]}
// // // // // //                 className="form-input"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="form-group">
// // // // // //               <label className="form-label">End Date *</label>
// // // // // //               <input
// // // // // //                 type="date"
// // // // // //                 name="end_date"
// // // // // //                 value={formData.end_date}
// // // // // //                 onChange={handleChange}
// // // // // //                 min={formData.start_date || new Date().toISOString().split('T')[0]}
// // // // // //                 className="form-input"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div className="form-group">
// // // // // //             <label className="form-label">Reason *</label>
// // // // // //             <textarea
// // // // // //               name="reason"
// // // // // //               value={formData.reason}
// // // // // //               onChange={handleChange}
// // // // // //               placeholder="Please provide a reason for your leave request..."
// // // // // //               className="form-textarea"
// // // // // //               rows="4"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="modal-actions">
// // // // // //             <button type="button" onClick={onClose} className="btn-outline">Cancel</button>
// // // // // //             <button type="submit" disabled={loading} className="btn-primary">
// // // // // //               {loading ? 'Submitting...' : 'Submit Request'}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default LabTechnicianAttendance;















// // // // // // src/pages/lab-technician/Attendance.jsx
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import staffService from '../../services/staffService';

// // // // // function LabTechnicianAttendance() {
// // // // //   const [attendance, setAttendance] = useState([]);
// // // // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState('');
// // // // //   const [activeTab, setActiveTab] = useState('attendance');
// // // // //   const [showLeaveModal, setShowLeaveModal] = useState(false);
// // // // //   const [filters, setFilters] = useState({
// // // // //     start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
// // // // //     end_date: new Date().toISOString().split('T')[0]
// // // // //   });

// // // // //   useEffect(() => {
// // // // //     if (activeTab === 'attendance') {
// // // // //       fetchAttendance();
// // // // //     } else {
// // // // //       fetchLeaveRequests();
// // // // //     }
// // // // //   }, [activeTab, filters]);

// // // // //   const fetchAttendance = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const response = await staffService.getAttendanceHistory(filters);
// // // // //       setAttendance(response.attendance || []);
// // // // //     } catch (error) {
// // // // //       setError('Failed to fetch attendance history');
// // // // //       console.error('Error fetching attendance:', error);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const fetchLeaveRequests = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const response = await staffService.getLeaveRequests();
// // // // //       setLeaveRequests(response.leave_requests || []);
// // // // //     } catch (error) {
// // // // //       setError('Failed to fetch leave requests');
// // // // //       console.error('Error fetching leave requests:', error);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleCheckIn = async () => {
// // // // //     try {
// // // // //       await staffService.checkIn();
// // // // //       alert('Checked in successfully');
// // // // //       fetchAttendance();
// // // // //     } catch (error) {
// // // // //       alert('Failed to check in');
// // // // //       console.error('Error checking in:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleCheckOut = async () => {
// // // // //     try {
// // // // //       await staffService.checkOut();
// // // // //       alert('Checked out successfully');
// // // // //       fetchAttendance();
// // // // //     } catch (error) {
// // // // //       alert('Failed to check out');
// // // // //       console.error('Error checking out:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleRequestLeave = async (leaveData) => {
// // // // //     try {
// // // // //       await staffService.requestLeave(leaveData);
// // // // //       alert('Leave request submitted successfully');
// // // // //       setShowLeaveModal(false);
// // // // //       fetchLeaveRequests();
// // // // //     } catch (error) {
// // // // //       alert('Failed to submit leave request');
// // // // //       console.error('Error submitting leave request:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleFilterChange = (e) => {
// // // // //     setFilters({
// // // // //       ...filters,
// // // // //       [e.target.name]: e.target.value
// // // // //     });
// // // // //   };

// // // // //   const formatDate = (dateString) => {
// // // // //     return new Date(dateString).toLocaleDateString('en-US', {
// // // // //       year: 'numeric',
// // // // //       month: 'long',
// // // // //       day: 'numeric'
// // // // //     });
// // // // //   };

// // // // //   const formatTime = (dateString) => {
// // // // //     return new Date(dateString).toLocaleTimeString('en-US', {
// // // // //       hour: '2-digit',
// // // // //       minute: '2-digit'
// // // // //     });
// // // // //   };

// // // // //   const getTodayAttendance = () => {
// // // // //     const today = new Date().toISOString().split('T')[0];
// // // // //     return attendance.find(record => record.date === today);
// // // // //   };

// // // // //   const calculateTotalHours = (attendance) => {
// // // // //     return attendance.reduce((total, record) => {
// // // // //       return total + (record.total_hours || 0);
// // // // //     }, 0);
// // // // //   };

// // // // //   const getStatusBadge = (status) => {
// // // // //     const statusConfig = {
// // // // //       present: { label: 'Present', className: 'status-badge-success' },
// // // // //       absent: { label: 'Absent', className: 'status-badge-error' },
// // // // //       late: { label: 'Late', className: 'status-badge-warning' },
// // // // //       half_day: { label: 'Half Day', className: 'status-badge-info' }
// // // // //     };
    
// // // // //     const config = statusConfig[status] || { label: status, className: 'status-badge-default' };
// // // // //     return (
// // // // //       <span className={`status-badge ${config.className}`}>
// // // // //         <span className="status-dot"></span>
// // // // //         {config.label}
// // // // //       </span>
// // // // //     );
// // // // //   };

// // // // //   const getLeaveStatusBadge = (status) => {
// // // // //     const statusConfig = {
// // // // //       approved: { label: 'Approved', className: 'status-badge-success' },
// // // // //       pending: { label: 'Pending', className: 'status-badge-warning' },
// // // // //       rejected: { label: 'Rejected', className: 'status-badge-error' }
// // // // //     };
    
// // // // //     const config = statusConfig[status] || { label: status, className: 'status-badge-default' };
// // // // //     return (
// // // // //       <span className={`status-badge ${config.className}`}>
// // // // //         <span className="status-dot"></span>
// // // // //         {config.label}
// // // // //       </span>
// // // // //     );
// // // // //   };

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="loading-container">
// // // // //         <div className="loading-spinner"></div>
// // // // //         <p className="loading-text">Loading attendance data...</p>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="attendance-page">
// // // // //       <style>{`
// // // // //         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

// // // // //         .attendance-page {
// // // // //           min-height: 100vh;
// // // // //           background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
// // // // //           padding: 2rem;
// // // // //           font-family: 'Outfit', sans-serif;
// // // // //           position: relative;
// // // // //         }

// // // // //         .attendance-page::before {
// // // // //           content: '';
// // // // //           position: fixed;
// // // // //           top: 0;
// // // // //           left: 0;
// // // // //           right: 0;
// // // // //           bottom: 0;
// // // // //           background: 
// // // // //             radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.04) 0%, transparent 50%),
// // // // //             radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.04) 0%, transparent 50%),
// // // // //             radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
// // // // //           pointer-events: none;
// // // // //           z-index: 0;
// // // // //         }

// // // // //         .attendance-page > * {
// // // // //           position: relative;
// // // // //           z-index: 1;
// // // // //         }

// // // // //         /* Header Section */
// // // // //         .header-section {
// // // // //           display: flex;
// // // // //           justify-content: space-between;
// // // // //           align-items: flex-start;
// // // // //           margin-bottom: 2.5rem;
// // // // //           animation: slideDown 0.6s ease-out;
// // // // //           flex-wrap: wrap;
// // // // //           gap: 1rem;
// // // // //         }

// // // // //         @keyframes slideDown {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateY(-20px);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateY(0);
// // // // //           }
// // // // //         }

// // // // //         .page-title {
// // // // //           font-size: 2.25rem;
// // // // //           font-weight: 700;
// // // // //           background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
// // // // //           -webkit-background-clip: text;
// // // // //           -webkit-text-fill-color: transparent;
// // // // //           background-clip: text;
// // // // //           letter-spacing: -0.02em;
// // // // //           margin: 0;
// // // // //         }

// // // // //         .header-actions {
// // // // //           display: flex;
// // // // //           gap: 0.75rem;
// // // // //           flex-wrap: wrap;
// // // // //         }

// // // // //         .action-btn {
// // // // //           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
// // // // //           color: white;
// // // // //           border: none;
// // // // //           padding: 0.875rem 1.75rem;
// // // // //           border-radius: 12px;
// // // // //           font-weight: 600;
// // // // //           font-size: 0.95rem;
// // // // //           cursor: pointer;
// // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // //           box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
// // // // //           position: relative;
// // // // //           overflow: hidden;
// // // // //         }

// // // // //         .action-btn::before {
// // // // //           content: '';
// // // // //           position: absolute;
// // // // //           top: 0;
// // // // //           left: -100%;
// // // // //           width: 100%;
// // // // //           height: 100%;
// // // // //           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
// // // // //           transition: left 0.5s;
// // // // //         }

// // // // //         .action-btn:hover::before {
// // // // //           left: 100%;
// // // // //         }

// // // // //         .action-btn:hover {
// // // // //           transform: translateY(-2px);
// // // // //           box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
// // // // //         }

// // // // //         .action-btn-secondary {
// // // // //           background: linear-gradient(135deg, #64748b 0%, #475569 100%);
// // // // //           box-shadow: 0 4px 12px rgba(100, 116, 139, 0.2);
// // // // //         }

// // // // //         .action-btn-secondary:hover {
// // // // //           box-shadow: 0 6px 20px rgba(100, 116, 139, 0.3);
// // // // //         }

// // // // //         /* Tabs */
// // // // //         .tabs-container {
// // // // //           margin-bottom: 2rem;
// // // // //           animation: fadeIn 0.6s ease-out 0.1s backwards;
// // // // //         }

// // // // //         @keyframes fadeIn {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateY(10px);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateY(0);
// // // // //           }
// // // // //         }

// // // // //         .tabs-wrapper {
// // // // //           display: inline-flex;
// // // // //           background: rgba(255, 255, 255, 0.7);
// // // // //           backdrop-filter: blur(10px);
// // // // //           border-radius: 16px;
// // // // //           padding: 6px;
// // // // //           gap: 6px;
// // // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // // //           border: 1px solid rgba(0, 0, 0, 0.06);
// // // // //         }

// // // // //         .tab-button {
// // // // //           padding: 0.75rem 1.75rem;
// // // // //           border: none;
// // // // //           background: transparent;
// // // // //           color: #6b7280;
// // // // //           font-weight: 600;
// // // // //           font-size: 0.95rem;
// // // // //           cursor: pointer;
// // // // //           border-radius: 12px;
// // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // //         }

// // // // //         .tab-button.active {
// // // // //           background: white;
// // // // //           color: #1f2937;
// // // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
// // // // //         }

// // // // //         .tab-button:hover:not(.active) {
// // // // //           color: #1f2937;
// // // // //           background: rgba(255, 255, 255, 0.5);
// // // // //         }

// // // // //         /* Alert */
// // // // //         .alert-error {
// // // // //           background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
// // // // //           border: 1px solid #fecaca;
// // // // //           color: #991b1b;
// // // // //           padding: 1rem 1.25rem;
// // // // //           border-radius: 12px;
// // // // //           margin-bottom: 1.5rem;
// // // // //           animation: slideIn 0.4s ease-out;
// // // // //           font-weight: 500;
// // // // //         }

// // // // //         @keyframes slideIn {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateX(-20px);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateX(0);
// // // // //           }
// // // // //         }

// // // // //         /* Today's Status Card */
// // // // //         .today-section {
// // // // //           margin-bottom: 2rem;
// // // // //           animation: fadeIn 0.6s ease-out 0.2s backwards;
// // // // //         }

// // // // //         .section-title {
// // // // //           font-size: 1.5rem;
// // // // //           font-weight: 700;
// // // // //           color: #1f2937;
// // // // //           margin: 0 0 1rem 0;
// // // // //         }

// // // // //         .today-card {
// // // // //           background: white;
// // // // //           border-radius: 16px;
// // // // //           padding: 2rem;
// // // // //           border: 1px solid #e5e7eb;
// // // // //           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
// // // // //           animation: cardSlideUp 0.5s ease-out backwards;
// // // // //           position: relative;
// // // // //           overflow: hidden;
// // // // //         }

// // // // //         @keyframes cardSlideUp {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateY(20px);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateY(0);
// // // // //           }
// // // // //         }

// // // // //         .today-card::before {
// // // // //           content: '';
// // // // //           position: absolute;
// // // // //           top: 0;
// // // // //           left: 0;
// // // // //           right: 0;
// // // // //           height: 4px;
// // // // //           background: linear-gradient(90deg, #10b981 0%, #059669 100%);
// // // // //         }

// // // // //         .today-card-content {
// // // // //           display: flex;
// // // // //           justify-content: space-between;
// // // // //           align-items: center;
// // // // //           gap: 1.5rem;
// // // // //           flex-wrap: wrap;
// // // // //         }

// // // // //         .today-info h4 {
// // // // //           font-size: 1.25rem;
// // // // //           font-weight: 600;
// // // // //           color: #1f2937;
// // // // //           margin: 0 0 0.75rem 0;
// // // // //         }

// // // // //         .today-info p {
// // // // //           margin: 0.5rem 0;
// // // // //           color: #6b7280;
// // // // //           font-size: 0.95rem;
// // // // //         }

// // // // //         .today-info p strong {
// // // // //           color: #374151;
// // // // //           font-weight: 600;
// // // // //         }

// // // // //         .not-checked-in-card {
// // // // //           text-align: center;
// // // // //           padding: 2.5rem;
// // // // //         }

// // // // //         .not-checked-in-card p {
// // // // //           color: #6b7280;
// // // // //           font-size: 1.05rem;
// // // // //           margin-bottom: 1.5rem;
// // // // //         }

// // // // //         .check-in-now-btn {
// // // // //           background: linear-gradient(135deg, #10b981 0%, #059669 100%);
// // // // //           color: white;
// // // // //           border: none;
// // // // //           padding: 1rem 2rem;
// // // // //           border-radius: 12px;
// // // // //           font-weight: 600;
// // // // //           font-size: 1rem;
// // // // //           cursor: pointer;
// // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // //           box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
// // // // //         }

// // // // //         .check-in-now-btn:hover {
// // // // //           transform: translateY(-2px);
// // // // //           box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
// // // // //         }

// // // // //         /* Status Badge */
// // // // //         .status-badge {
// // // // //           display: inline-flex;
// // // // //           align-items: center;
// // // // //           gap: 0.4rem;
// // // // //           padding: 0.5rem 1rem;
// // // // //           border-radius: 20px;
// // // // //           font-size: 0.85rem;
// // // // //           font-weight: 600;
// // // // //           white-space: nowrap;
// // // // //         }

// // // // //         .status-dot {
// // // // //           width: 6px;
// // // // //           height: 6px;
// // // // //           border-radius: 50%;
// // // // //           animation: dotPulse 2s ease-in-out infinite;
// // // // //         }

// // // // //         @keyframes dotPulse {
// // // // //           0%, 100% {
// // // // //             opacity: 1;
// // // // //             transform: scale(1);
// // // // //           }
// // // // //           50% {
// // // // //             opacity: 0.5;
// // // // //             transform: scale(1.2);
// // // // //           }
// // // // //         }

// // // // //         .status-badge-success {
// // // // //           background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
// // // // //           color: #16a34a;
// // // // //           border: 1px solid #bbf7d0;
// // // // //         }

// // // // //         .status-badge-success .status-dot {
// // // // //           background: #16a34a;
// // // // //         }

// // // // //         .status-badge-error {
// // // // //           background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
// // // // //           color: #dc2626;
// // // // //           border: 1px solid #fecaca;
// // // // //         }

// // // // //         .status-badge-error .status-dot {
// // // // //           background: #dc2626;
// // // // //         }

// // // // //         .status-badge-warning {
// // // // //           background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
// // // // //           color: #d97706;
// // // // //           border: 1px solid #fde68a;
// // // // //         }

// // // // //         .status-badge-warning .status-dot {
// // // // //           background: #d97706;
// // // // //         }

// // // // //         .status-badge-info {
// // // // //           background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
// // // // //           color: #2563eb;
// // // // //           border: 1px solid #bfdbfe;
// // // // //         }

// // // // //         .status-badge-info .status-dot {
// // // // //           background: #2563eb;
// // // // //         }

// // // // //         .status-badge-default {
// // // // //           background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
// // // // //           color: #6b7280;
// // // // //           border: 1px solid #e5e7eb;
// // // // //         }

// // // // //         .status-badge-default .status-dot {
// // // // //           background: #6b7280;
// // // // //         }

// // // // //         /* Filters */
// // // // //         .filters-section {
// // // // //           display: flex;
// // // // //           gap: 1.25rem;
// // // // //           margin-bottom: 2rem;
// // // // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // // // //           flex-wrap: wrap;
// // // // //         }

// // // // //         .filter-group {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //         }

// // // // //         .filter-label {
// // // // //           font-size: 0.875rem;
// // // // //           font-weight: 600;
// // // // //           color: #374151;
// // // // //           margin-bottom: 0.5rem;
// // // // //         }

// // // // //         .filter-input {
// // // // //           background: white;
// // // // //           border: 1.5px solid #e5e7eb;
// // // // //           padding: 0.875rem 1.125rem;
// // // // //           border-radius: 12px;
// // // // //           font-size: 0.95rem;
// // // // //           font-weight: 400;
// // // // //           color: #374151;
// // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // //           font-family: 'Outfit', sans-serif;
// // // // //         }

// // // // //         .filter-input:focus {
// // // // //           outline: none;
// // // // //           border-color: #6366f1;
// // // // //           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
// // // // //         }

// // // // //         /* Summary Cards */
// // // // //         .summary-section {
// // // // //           margin-bottom: 2rem;
// // // // //           animation: fadeIn 0.6s ease-out 0.4s backwards;
// // // // //         }

// // // // //         .summary-grid {
// // // // //           display: grid;
// // // // //           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// // // // //           gap: 1.25rem;
// // // // //         }

// // // // //         .summary-card {
// // // // //           background: white;
// // // // //           border-radius: 16px;
// // // // //           padding: 1.75rem;
// // // // //           border: 1px solid #e5e7eb;
// // // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // //           animation: cardSlideUp 0.5s ease-out backwards;
// // // // //         }

// // // // //         .summary-card:nth-child(1) { animation-delay: 0.05s; }
// // // // //         .summary-card:nth-child(2) { animation-delay: 0.1s; }
// // // // //         .summary-card:nth-child(3) { animation-delay: 0.15s; }

// // // // //         .summary-card:hover {
// // // // //           transform: translateY(-4px);
// // // // //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
// // // // //         }

// // // // //         .summary-label {
// // // // //           font-size: 0.875rem;
// // // // //           color: #6b7280;
// // // // //           font-weight: 500;
// // // // //           margin-bottom: 0.5rem;
// // // // //         }

// // // // //         .summary-value {
// // // // //           font-size: 2rem;
// // // // //           font-weight: 700;
// // // // //           color: #1f2937;
// // // // //           font-family: 'Space Mono', monospace;
// // // // //         }

// // // // //         /* Table */
// // // // //         .table-container {
// // // // //           background: white;
// // // // //           border-radius: 16px;
// // // // //           padding: 1.5rem;
// // // // //           border: 1px solid #e5e7eb;
// // // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // // //           overflow-x: auto;
// // // // //           animation: fadeIn 0.6s ease-out 0.5s backwards;
// // // // //         }

// // // // //         .attendance-table {
// // // // //           width: 100%;
// // // // //           border-collapse: separate;
// // // // //           border-spacing: 0;
// // // // //         }

// // // // //         .attendance-table thead th {
// // // // //           background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
// // // // //           padding: 1rem 1.25rem;
// // // // //           text-align: left;
// // // // //           font-weight: 600;
// // // // //           color: #374151;
// // // // //           font-size: 0.875rem;
// // // // //           text-transform: uppercase;
// // // // //           letter-spacing: 0.05em;
// // // // //           border-bottom: 2px solid #e5e7eb;
// // // // //         }

// // // // //         .attendance-table thead th:first-child {
// // // // //           border-top-left-radius: 12px;
// // // // //         }

// // // // //         .attendance-table thead th:last-child {
// // // // //           border-top-right-radius: 12px;
// // // // //         }

// // // // //         .attendance-table tbody tr {
// // // // //           transition: all 0.2s;
// // // // //         }

// // // // //         .attendance-table tbody tr:hover {
// // // // //           background: #f9fafb;
// // // // //         }

// // // // //         .attendance-table tbody td {
// // // // //           padding: 1rem 1.25rem;
// // // // //           border-bottom: 1px solid #f3f4f6;
// // // // //           color: #374151;
// // // // //           font-size: 0.95rem;
// // // // //         }

// // // // //         .attendance-table tbody tr:last-child td {
// // // // //           border-bottom: none;
// // // // //         }

// // // // //         /* Leave Requests */
// // // // //         .leave-requests-container {
// // // // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // // // //         }

// // // // //         .leave-grid {
// // // // //           display: grid;
// // // // //           gap: 1.25rem;
// // // // //         }

// // // // //         .leave-card {
// // // // //           background: white;
// // // // //           border-radius: 16px;
// // // // //           padding: 1.75rem;
// // // // //           border: 1px solid #e5e7eb;
// // // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // //           animation: cardSlideUp 0.5s ease-out backwards;
// // // // //         }

// // // // //         .leave-card:nth-child(1) { animation-delay: 0.05s; }
// // // // //         .leave-card:nth-child(2) { animation-delay: 0.1s; }
// // // // //         .leave-card:nth-child(3) { animation-delay: 0.15s; }
// // // // //         .leave-card:nth-child(n+4) { animation-delay: 0.2s; }

// // // // //         .leave-card:hover {
// // // // //           transform: translateY(-2px);
// // // // //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
// // // // //         }

// // // // //         .leave-header {
// // // // //           display: flex;
// // // // //           justify-content: space-between;
// // // // //           align-items: flex-start;
// // // // //           margin-bottom: 1.25rem;
// // // // //           gap: 1rem;
// // // // //         }

// // // // //         .leave-type {
// // // // //           font-size: 1.25rem;
// // // // //           font-weight: 600;
// // // // //           color: #1f2937;
// // // // //           margin: 0 0 0.5rem 0;
// // // // //         }

// // // // //         .leave-dates {
// // // // //           font-size: 0.875rem;
// // // // //           color: #6b7280;
// // // // //         }

// // // // //         .leave-details p {
// // // // //           margin: 0.75rem 0;
// // // // //           color: #374151;
// // // // //           font-size: 0.95rem;
// // // // //         }

// // // // //         .leave-details strong {
// // // // //           color: #1f2937;
// // // // //           font-weight: 600;
// // // // //         }

// // // // //         /* Empty State */
// // // // //         .empty-state {
// // // // //           text-align: center;
// // // // //           padding: 4rem 2rem;
// // // // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // // // //         }

// // // // //         .empty-state h3 {
// // // // //           font-size: 1.5rem;
// // // // //           font-weight: 600;
// // // // //           color: #1f2937;
// // // // //           margin: 0 0 0.5rem 0;
// // // // //         }

// // // // //         .empty-state p {
// // // // //           color: #6b7280;
// // // // //           font-size: 1rem;
// // // // //           margin: 0;
// // // // //         }

// // // // //         /* Loading State */
// // // // //         .loading-container {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           min-height: 100vh;
// // // // //           background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
// // // // //         }

// // // // //         .loading-spinner {
// // // // //           width: 60px;
// // // // //           height: 60px;
// // // // //           border: 4px solid #e5e7eb;
// // // // //           border-top-color: #6366f1;
// // // // //           border-radius: 50%;
// // // // //           animation: spin 1s linear infinite;
// // // // //         }

// // // // //         @keyframes spin {
// // // // //           to {
// // // // //             transform: rotate(360deg);
// // // // //           }
// // // // //         }

// // // // //         .loading-text {
// // // // //           margin-top: 1.5rem;
// // // // //           color: #6b7280;
// // // // //           font-size: 1rem;
// // // // //           font-weight: 500;
// // // // //         }

// // // // //         /* Modal */
// // // // //         .modal-overlay {
// // // // //           position: fixed;
// // // // //           top: 0;
// // // // //           left: 0;
// // // // //           right: 0;
// // // // //           bottom: 0;
// // // // //           background: rgba(0, 0, 0, 0.5);
// // // // //           backdrop-filter: blur(4px);
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           z-index: 1000;
// // // // //           animation: fadeIn 0.3s ease-out;
// // // // //         }

// // // // //         .modal-box {
// // // // //           background: white;
// // // // //           border-radius: 20px;
// // // // //           padding: 2rem;
// // // // //           width: 90%;
// // // // //           max-width: 600px;
// // // // //           max-height: 90vh;
// // // // //           overflow-y: auto;
// // // // //           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
// // // // //           animation: modalSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
// // // // //           position: relative;
// // // // //         }

// // // // //         @keyframes modalSlideUp {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateY(40px) scale(0.95);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateY(0) scale(1);
// // // // //           }
// // // // //         }

// // // // //         .modal-header {
// // // // //           display: flex;
// // // // //           justify-content: space-between;
// // // // //           align-items: center;
// // // // //           margin-bottom: 1.75rem;
// // // // //         }

// // // // //         .modal-title {
// // // // //           font-size: 1.75rem;
// // // // //           font-weight: 700;
// // // // //           color: #1f2937;
// // // // //           margin: 0;
// // // // //         }

// // // // //         .close-btn {
// // // // //           width: 40px;
// // // // //           height: 40px;
// // // // //           border-radius: 10px;
// // // // //           border: none;
// // // // //           background: #f3f4f6;
// // // // //           color: #6b7280;
// // // // //           font-size: 1.5rem;
// // // // //           cursor: pointer;
// // // // //           transition: all 0.2s;
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           position: absolute;
// // // // //           right: 1.5rem;
// // // // //           top: 1.5rem;
// // // // //         }

// // // // //         .close-btn:hover {
// // // // //           background: #e5e7eb;
// // // // //           color: #1f2937;
// // // // //         }

// // // // //         /* Form Elements */
// // // // //         .form-group {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           margin-bottom: 1.25rem;
// // // // //         }

// // // // //         .form-label {
// // // // //           font-size: 0.875rem;
// // // // //           font-weight: 600;
// // // // //           color: #374151;
// // // // //           margin-bottom: 0.5rem;
// // // // //         }

// // // // //         .form-input,
// // // // //         .form-select,
// // // // //         .form-textarea {
// // // // //           background: #f9fafb;
// // // // //           border: 1.5px solid #e5e7eb;
// // // // //           padding: 0.875rem 1rem;
// // // // //           border-radius: 10px;
// // // // //           font-size: 0.95rem;
// // // // //           font-family: 'Outfit', sans-serif;
// // // // //           color: #1f2937;
// // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // //         }

// // // // //         .form-input:focus,
// // // // //         .form-select:focus,
// // // // //         .form-textarea:focus {
// // // // //           outline: none;
// // // // //           border-color: #6366f1;
// // // // //           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
// // // // //           background: white;
// // // // //         }

// // // // //         .form-row {
// // // // //           display: flex;
// // // // //           gap: 1rem;
// // // // //         }

// // // // //         .form-row .form-group {
// // // // //           flex: 1;
// // // // //         }

// // // // //         .modal-actions {
// // // // //           display: flex;
// // // // //           justify-content: flex-end;
// // // // //           gap: 1rem;
// // // // //           margin-top: 1.75rem;
// // // // //           padding-top: 1.75rem;
// // // // //           border-top: 1px solid #e5e7eb;
// // // // //         }

// // // // //         .btn-outline {
// // // // //           background: white;
// // // // //           border: 1.5px solid #e5e7eb;
// // // // //           color: #6b7280;
// // // // //           padding: 0.875rem 1.5rem;
// // // // //           border-radius: 10px;
// // // // //           font-weight: 600;
// // // // //           font-size: 0.95rem;
// // // // //           cursor: pointer;
// // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // //         }

// // // // //         .btn-outline:hover {
// // // // //           background: #f9fafb;
// // // // //           border-color: #d1d5db;
// // // // //           color: #374151;
// // // // //         }

// // // // //         .btn-primary {
// // // // //           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
// // // // //           border: none;
// // // // //           color: white;
// // // // //           padding: 0.875rem 1.5rem;
// // // // //           border-radius: 10px;
// // // // //           font-weight: 600;
// // // // //           font-size: 0.95rem;
// // // // //           cursor: pointer;
// // // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // //         }

// // // // //         .btn-primary:hover {
// // // // //           transform: translateY(-2px);
// // // // //           box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
// // // // //         }

// // // // //         .btn-primary:disabled {
// // // // //           opacity: 0.6;
// // // // //           cursor: not-allowed;
// // // // //           transform: none;
// // // // //         }

// // // // //         /* Responsive */
// // // // //         @media (max-width: 768px) {
// // // // //           .attendance-page {
// // // // //             padding: 1rem;
// // // // //           }

// // // // //           .page-title {
// // // // //             font-size: 1.75rem;
// // // // //           }

// // // // //           .header-section {
// // // // //             flex-direction: column;
// // // // //             align-items: flex-start;
// // // // //           }

// // // // //           .header-actions {
// // // // //             width: 100%;
// // // // //           }

// // // // //           .action-btn {
// // // // //             flex: 1;
// // // // //           }

// // // // //           .summary-grid {
// // // // //             grid-template-columns: 1fr;
// // // // //           }

// // // // //           .form-row {
// // // // //             flex-direction: column;
// // // // //           }

// // // // //           .table-container {
// // // // //             padding: 1rem;
// // // // //           }

// // // // //           .attendance-table {
// // // // //             font-size: 0.85rem;
// // // // //           }

// // // // //           .attendance-table thead th,
// // // // //           .attendance-table tbody td {
// // // // //             padding: 0.75rem;
// // // // //           }
// // // // //         }

// // // // //         /* Scrollbar Styling */
// // // // //         .modal-box::-webkit-scrollbar {
// // // // //           width: 8px;
// // // // //         }

// // // // //         .modal-box::-webkit-scrollbar-track {
// // // // //           background: #f3f4f6;
// // // // //           border-radius: 10px;
// // // // //         }

// // // // //         .modal-box::-webkit-scrollbar-thumb {
// // // // //           background: #d1d5db;
// // // // //           border-radius: 10px;
// // // // //         }

// // // // //         .modal-box::-webkit-scrollbar-thumb:hover {
// // // // //           background: #9ca3af;
// // // // //         }
// // // // //       `}</style>

// // // // //       <div className="header-section">
// // // // //         <h1 className="page-title">Attendance & Leave Management</h1>
// // // // //         <div className="header-actions">
// // // // //           {activeTab === 'attendance' && (
// // // // //             <>
// // // // //               <button onClick={handleCheckIn} className="action-btn">Check In</button>
// // // // //               <button onClick={handleCheckOut} className="action-btn action-btn-secondary">Check Out</button>
// // // // //             </>
// // // // //           )}
// // // // //           {activeTab === 'leave' && (
// // // // //             <button onClick={() => setShowLeaveModal(true)} className="action-btn">
// // // // //               Request Leave
// // // // //             </button>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="tabs-container">
// // // // //         <div className="tabs-wrapper">
// // // // //           <button 
// // // // //             className={`tab-button ${activeTab === 'attendance' ? 'active' : ''}`}
// // // // //             onClick={() => setActiveTab('attendance')}
// // // // //           >
// // // // //             Attendance
// // // // //           </button>
// // // // //           <button 
// // // // //             className={`tab-button ${activeTab === 'leave' ? 'active' : ''}`}
// // // // //             onClick={() => setActiveTab('leave')}
// // // // //           >
// // // // //             Leave Requests
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {error && <div className="alert-error">{error}</div>}

// // // // //       <div>
// // // // //         {activeTab === 'attendance' ? (
// // // // //           <div>
// // // // //             <div className="today-section">
// // // // //               <h3 className="section-title">Today's Status</h3>
// // // // //               {getTodayAttendance() ? (
// // // // //                 <div className="today-card">
// // // // //                   <div className="today-card-content">
// // // // //                     <div className="today-info">
// // // // //                       <h4>Checked In</h4>
// // // // //                       <p><strong>Time:</strong> {formatTime(getTodayAttendance().check_in)}</p>
// // // // //                       {getTodayAttendance().check_out && (
// // // // //                         <p><strong>Check Out:</strong> {formatTime(getTodayAttendance().check_out)}</p>
// // // // //                       )}
// // // // //                       {getTodayAttendance().total_hours && (
// // // // //                         <p><strong>Total Hours:</strong> {getTodayAttendance().total_hours.toFixed(2)}</p>
// // // // //                       )}
// // // // //                     </div>
// // // // //                     {getStatusBadge(getTodayAttendance().status)}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ) : (
// // // // //                 <div className="today-card not-checked-in-card">
// // // // //                   <p>You haven't checked in today</p>
// // // // //                   <button onClick={handleCheckIn} className="check-in-now-btn">Check In Now</button>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>

// // // // //             <div className="filters-section">
// // // // //               <div className="filter-group">
// // // // //                 <label className="filter-label">Start Date:</label>
// // // // //                 <input
// // // // //                   type="date"
// // // // //                   name="start_date"
// // // // //                   value={filters.start_date}
// // // // //                   onChange={handleFilterChange}
// // // // //                   className="filter-input"
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="filter-group">
// // // // //                 <label className="filter-label">End Date:</label>
// // // // //                 <input
// // // // //                   type="date"
// // // // //                   name="end_date"
// // // // //                   value={filters.end_date}
// // // // //                   onChange={handleFilterChange}
// // // // //                   className="filter-input"
// // // // //                 />
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="summary-section">
// // // // //               <h3 className="section-title">Attendance History</h3>
// // // // //               <div className="summary-grid">
// // // // //                 <div className="summary-card">
// // // // //                   <div className="summary-label">Total Days</div>
// // // // //                   <div className="summary-value">{attendance.length}</div>
// // // // //                 </div>
// // // // //                 <div className="summary-card">
// // // // //                   <div className="summary-label">Total Hours</div>
// // // // //                   <div className="summary-value">{calculateTotalHours(attendance).toFixed(2)}</div>
// // // // //                 </div>
// // // // //                 <div className="summary-card">
// // // // //                   <div className="summary-label">Present Days</div>
// // // // //                   <div className="summary-value">{attendance.filter(a => a.status === 'present').length}</div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {attendance.length === 0 ? (
// // // // //               <div className="empty-state">
// // // // //                 <h3>No attendance records found</h3>
// // // // //                 <p>No attendance records match your current filters.</p>
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="table-container">
// // // // //                 <table className="attendance-table">
// // // // //                   <thead>
// // // // //                     <tr>
// // // // //                       <th>Date</th>
// // // // //                       <th>Check In</th>
// // // // //                       <th>Check Out</th>
// // // // //                       <th>Total Hours</th>
// // // // //                       <th>Status</th>
// // // // //                     </tr>
// // // // //                   </thead>
// // // // //                   <tbody>
// // // // //                     {attendance.map((record) => (
// // // // //                       <tr key={record.id}>
// // // // //                         <td>{formatDate(record.date)}</td>
// // // // //                         <td>{record.check_in ? formatTime(record.check_in) : 'N/A'}</td>
// // // // //                         <td>{record.check_out ? formatTime(record.check_out) : 'N/A'}</td>
// // // // //                         <td>{record.total_hours ? record.total_hours.toFixed(2) : 'N/A'}</td>
// // // // //                         <td>{getStatusBadge(record.status)}</td>
// // // // //                       </tr>
// // // // //                     ))}
// // // // //                   </tbody>
// // // // //                 </table>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div className="leave-requests-container">
// // // // //             <h2 className="section-title">My Leave Requests</h2>
            
// // // // //             {leaveRequests.length === 0 ? (
// // // // //               <div className="empty-state">
// // // // //                 <h3>No leave requests found</h3>
// // // // //                 <p>You haven't submitted any leave requests yet.</p>
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="leave-grid">
// // // // //                 {leaveRequests.map((request) => (
// // // // //                   <div key={request.id} className="leave-card">
// // // // //                     <div className="leave-header">
// // // // //                       <div>
// // // // //                         <h4 className="leave-type">{request.leave_type}</h4>
// // // // //                         <p className="leave-dates">
// // // // //                           {formatDate(request.start_date)} to {formatDate(request.end_date)}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                       {getLeaveStatusBadge(request.status)}
// // // // //                     </div>
// // // // //                     <div className="leave-details">
// // // // //                       <p><strong>Reason:</strong> {request.reason}</p>
// // // // //                       <p><strong>Submitted:</strong> {formatDate(request.created_at)}</p>
// // // // //                       {request.comments && (
// // // // //                         <p><strong>Admin Comments:</strong> {request.comments}</p>
// // // // //                       )}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       {showLeaveModal && (
// // // // //         <RequestLeaveModal
// // // // //           onClose={() => setShowLeaveModal(false)}
// // // // //           onSave={handleRequestLeave}
// // // // //         />
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // Request Leave Modal Component
// // // // // function RequestLeaveModal({ onClose, onSave }) {
// // // // //   const [formData, setFormData] = useState({
// // // // //     leave_type: 'sick',
// // // // //     start_date: '',
// // // // //     end_date: '',
// // // // //     reason: ''
// // // // //   });
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const handleChange = (e) => {
// // // // //     setFormData({
// // // // //       ...formData,
// // // // //       [e.target.name]: e.target.value
// // // // //     });
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
    
// // // // //     if (!formData.start_date || !formData.end_date || !formData.reason) {
// // // // //       alert('Please fill in all required fields');
// // // // //       return;
// // // // //     }

// // // // //     if (new Date(formData.start_date) > new Date(formData.end_date)) {
// // // // //       alert('End date cannot be before start date');
// // // // //       return;
// // // // //     }

// // // // //     setLoading(true);
// // // // //     await onSave(formData);
// // // // //     setLoading(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="modal-overlay">
// // // // //       <div className="modal-box">
// // // // //         <button onClick={onClose} className="close-btn">×</button>
// // // // //         <div className="modal-header">
// // // // //           <h2 className="modal-title">Request Leave</h2>
// // // // //         </div>

// // // // //         <form onSubmit={handleSubmit}>
// // // // //           <div className="form-group">
// // // // //             <label className="form-label">Leave Type *</label>
// // // // //             <select
// // // // //               name="leave_type"
// // // // //               value={formData.leave_type}
// // // // //               onChange={handleChange}
// // // // //               className="form-select"
// // // // //               required
// // // // //             >
// // // // //               <option value="sick">Sick Leave</option>
// // // // //               <option value="casual">Casual Leave</option>
// // // // //               <option value="annual">Annual Leave</option>
// // // // //               <option value="emergency">Emergency Leave</option>
// // // // //               <option value="maternity">Maternity Leave</option>
// // // // //               <option value="paternity">Paternity Leave</option>
// // // // //               <option value="other">Other</option>
// // // // //             </select>
// // // // //           </div>

// // // // //           <div className="form-row">
// // // // //             <div className="form-group">
// // // // //               <label className="form-label">Start Date *</label>
// // // // //               <input
// // // // //                 type="date"
// // // // //                 name="start_date"
// // // // //                 value={formData.start_date}
// // // // //                 onChange={handleChange}
// // // // //                 min={new Date().toISOString().split('T')[0]}
// // // // //                 className="form-input"
// // // // //                 required
// // // // //               />
// // // // //             </div>
// // // // //             <div className="form-group">
// // // // //               <label className="form-label">End Date *</label>
// // // // //               <input
// // // // //                 type="date"
// // // // //                 name="end_date"
// // // // //                 value={formData.end_date}
// // // // //                 onChange={handleChange}
// // // // //                 min={formData.start_date || new Date().toISOString().split('T')[0]}
// // // // //                 className="form-input"
// // // // //                 required
// // // // //               />
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="form-group">
// // // // //             <label className="form-label">Reason *</label>
// // // // //             <textarea
// // // // //               name="reason"
// // // // //               value={formData.reason}
// // // // //               onChange={handleChange}
// // // // //               placeholder="Please provide a reason for your leave request..."
// // // // //               className="form-textarea"
// // // // //               rows="4"
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           <div className="modal-actions">
// // // // //             <button type="button" onClick={onClose} className="btn-outline">Cancel</button>
// // // // //             <button type="submit" disabled={loading} className="btn-primary">
// // // // //               {loading ? 'Submitting...' : 'Submit Request'}
// // // // //             </button>
// // // // //           </div>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default LabTechnicianAttendance;


















// // // // // src/pages/lab-technician/Attendance.jsx
// // // // import React, { useState, useEffect } from 'react';
// // // // import staffService from '../../services/staffService';

// // // // function LabTechnicianAttendance() {
// // // //   const [attendance, setAttendance] = useState([]);
// // // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState('');
// // // //   const [activeTab, setActiveTab] = useState('attendance');
// // // //   const [showLeaveModal, setShowLeaveModal] = useState(false);
// // // //   const [filters, setFilters] = useState({
// // // //     start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
// // // //     end_date: new Date().toISOString().split('T')[0]
// // // //   });

// // // //   useEffect(() => {
// // // //     if (activeTab === 'attendance') {
// // // //       fetchAttendance();
// // // //     } else {
// // // //       fetchLeaveRequests();
// // // //     }
// // // //   }, [activeTab, filters]);

// // // //   const fetchAttendance = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       const response = await staffService.getAttendanceHistory(filters);
// // // //       setAttendance(response.attendance || []);
// // // //     } catch (error) {
// // // //       setError('Failed to fetch attendance history');
// // // //       console.error('Error fetching attendance:', error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const fetchLeaveRequests = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       const response = await staffService.getLeaveRequests();
// // // //       setLeaveRequests(response.leave_requests || []);
// // // //     } catch (error) {
// // // //       setError('Failed to fetch leave requests');
// // // //       console.error('Error fetching leave requests:', error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleCheckIn = async () => {
// // // //     try {
// // // //       await staffService.checkIn();
// // // //       alert('Checked in successfully');
// // // //       fetchAttendance();
// // // //     } catch (error) {
// // // //       alert('Failed to check in');
// // // //       console.error('Error checking in:', error);
// // // //     }
// // // //   };

// // // //   const handleCheckOut = async () => {
// // // //     try {
// // // //       await staffService.checkOut();
// // // //       alert('Checked out successfully');
// // // //       fetchAttendance();
// // // //     } catch (error) {
// // // //       alert('Failed to check out');
// // // //       console.error('Error checking out:', error);
// // // //     }
// // // //   };

// // // //   const handleRequestLeave = async (leaveData) => {
// // // //     try {
// // // //       await staffService.requestLeave(leaveData);
// // // //       alert('Leave request submitted successfully');
// // // //       setShowLeaveModal(false);
// // // //       fetchLeaveRequests();
// // // //     } catch (error) {
// // // //       alert('Failed to submit leave request');
// // // //       console.error('Error submitting leave request:', error);
// // // //     }
// // // //   };

// // // //   const handleFilterChange = (e) => {
// // // //     setFilters({
// // // //       ...filters,
// // // //       [e.target.name]: e.target.value
// // // //     });
// // // //   };

// // // //   const formatDate = (dateString) => {
// // // //     return new Date(dateString).toLocaleDateString('en-US', {
// // // //       year: 'numeric',
// // // //       month: 'long',
// // // //       day: 'numeric'
// // // //     });
// // // //   };

// // // //   const formatTime = (dateString) => {
// // // //     return new Date(dateString).toLocaleTimeString('en-US', {
// // // //       hour: '2-digit',
// // // //       minute: '2-digit'
// // // //     });
// // // //   };

// // // //   const getTodayAttendance = () => {
// // // //     const today = new Date().toISOString().split('T')[0];
// // // //     return attendance.find(record => record.date === today);
// // // //   };

// // // //   const calculateTotalHours = (attendance) => {
// // // //     return attendance.reduce((total, record) => {
// // // //       return total + (record.total_hours || 0);
// // // //     }, 0);
// // // //   };

// // // //   const getStatusBadge = (status) => {
// // // //     const statusConfig = {
// // // //       present: { label: 'Present', className: 'status-badge-success' },
// // // //       absent: { label: 'Absent', className: 'status-badge-error' },
// // // //       late: { label: 'Late', className: 'status-badge-warning' },
// // // //       half_day: { label: 'Half Day', className: 'status-badge-info' }
// // // //     };
    
// // // //     const config = statusConfig[status] || { label: status, className: 'status-badge-default' };
// // // //     return (
// // // //       <span className={`status-badge ${config.className}`}>
// // // //         <span className="status-dot"></span>
// // // //         {config.label}
// // // //       </span>
// // // //     );
// // // //   };

// // // //   const getLeaveStatusBadge = (status) => {
// // // //     const statusConfig = {
// // // //       approved: { label: 'Approved', className: 'status-badge-success' },
// // // //       pending: { label: 'Pending', className: 'status-badge-warning' },
// // // //       rejected: { label: 'Rejected', className: 'status-badge-error' }
// // // //     };
    
// // // //     const config = statusConfig[status] || { label: status, className: 'status-badge-default' };
// // // //     return (
// // // //       <span className={`status-badge ${config.className}`}>
// // // //         <span className="status-dot"></span>
// // // //         {config.label}
// // // //       </span>
// // // //     );
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="loading-container">
// // // //         <div className="loading-spinner"></div>
// // // //         <p className="loading-text">Loading attendance data...</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="attendance-page">
// // // //       <style>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

// // // //         .attendance-page {
// // // //           min-height: 100vh;
// // // //           background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
// // // //           padding: 2rem;
// // // //           font-family: 'Outfit', sans-serif;
// // // //           position: relative;
// // // //         }

// // // //         .attendance-page::before {
// // // //           content: '';
// // // //           position: fixed;
// // // //           top: 0;
// // // //           left: 0;
// // // //           right: 0;
// // // //           bottom: 0;
// // // //           background: 
// // // //             radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.04) 0%, transparent 50%),
// // // //             radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.04) 0%, transparent 50%),
// // // //             radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
// // // //           pointer-events: none;
// // // //           z-index: 0;
// // // //         }

// // // //         .attendance-page > * {
// // // //           position: relative;
// // // //           z-index: 1;
// // // //         }

// // // //         /* Header Section */
// // // //         .header-section {
// // // //           display: flex;
// // // //           justify-content: space-between;
// // // //           align-items: flex-start;
// // // //           margin-bottom: 2.5rem;
// // // //           animation: slideDown 0.6s ease-out;
// // // //           flex-wrap: wrap;
// // // //           gap: 1rem;
// // // //         }

// // // //         @keyframes slideDown {
// // // //           from {
// // // //             opacity: 0;
// // // //             transform: translateY(-20px);
// // // //           }
// // // //           to {
// // // //             opacity: 1;
// // // //             transform: translateY(0);
// // // //           }
// // // //         }

// // // //         .page-title {
// // // //           font-size: 2.25rem;
// // // //           font-weight: 700;
// // // //           background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
// // // //           -webkit-background-clip: text;
// // // //           -webkit-text-fill-color: transparent;
// // // //           background-clip: text;
// // // //           letter-spacing: -0.02em;
// // // //           margin: 0;
// // // //         }

// // // //         .header-actions {
// // // //           display: flex;
// // // //           gap: 0.75rem;
// // // //           flex-wrap: wrap;
// // // //         }

// // // //         .action-btn {
// // // //           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
// // // //           color: white;
// // // //           border: none;
// // // //           padding: 0.875rem 1.75rem;
// // // //           border-radius: 12px;
// // // //           font-weight: 600;
// // // //           font-size: 0.95rem;
// // // //           cursor: pointer;
// // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // //           box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
// // // //           position: relative;
// // // //           overflow: hidden;
// // // //         }

// // // //         .action-btn::before {
// // // //           content: '';
// // // //           position: absolute;
// // // //           top: 0;
// // // //           left: -100%;
// // // //           width: 100%;
// // // //           height: 100%;
// // // //           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
// // // //           transition: left 0.5s;
// // // //         }

// // // //         .action-btn:hover::before {
// // // //           left: 100%;
// // // //         }

// // // //         .action-btn:hover {
// // // //           transform: translateY(-2px);
// // // //           box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
// // // //         }

// // // //         .action-btn-secondary {
// // // //           background: linear-gradient(135deg, #64748b 0%, #475569 100%);
// // // //           box-shadow: 0 4px 12px rgba(100, 116, 139, 0.2);
// // // //         }

// // // //         .action-btn-secondary:hover {
// // // //           box-shadow: 0 6px 20px rgba(100, 116, 139, 0.3);
// // // //         }

// // // //         /* Tabs */
// // // //         .tabs-container {
// // // //           margin-bottom: 2rem;
// // // //           animation: fadeIn 0.6s ease-out 0.1s backwards;
// // // //         }

// // // //         @keyframes fadeIn {
// // // //           from {
// // // //             opacity: 0;
// // // //             transform: translateY(10px);
// // // //           }
// // // //           to {
// // // //             opacity: 1;
// // // //             transform: translateY(0);
// // // //           }
// // // //         }

// // // //         .tabs-wrapper {
// // // //           display: inline-flex;
// // // //           background: rgba(255, 255, 255, 0.7);
// // // //           backdrop-filter: blur(10px);
// // // //           border-radius: 16px;
// // // //           padding: 6px;
// // // //           gap: 6px;
// // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // //           border: 1px solid rgba(0, 0, 0, 0.06);
// // // //         }

// // // //         .tab-button {
// // // //           padding: 0.75rem 1.75rem;
// // // //           border: none;
// // // //           background: transparent;
// // // //           color: #6b7280;
// // // //           font-weight: 600;
// // // //           font-size: 0.95rem;
// // // //           cursor: pointer;
// // // //           border-radius: 12px;
// // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // //         }

// // // //         .tab-button.active {
// // // //           background: white;
// // // //           color: #1f2937;
// // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
// // // //         }

// // // //         .tab-button:hover:not(.active) {
// // // //           color: #1f2937;
// // // //           background: rgba(255, 255, 255, 0.5);
// // // //         }

// // // //         /* Alert */
// // // //         .alert-error {
// // // //           background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
// // // //           border: 1px solid #fecaca;
// // // //           color: #991b1b;
// // // //           padding: 1rem 1.25rem;
// // // //           border-radius: 12px;
// // // //           margin-bottom: 1.5rem;
// // // //           animation: slideIn 0.4s ease-out;
// // // //           font-weight: 500;
// // // //         }

// // // //         @keyframes slideIn {
// // // //           from {
// // // //             opacity: 0;
// // // //             transform: translateX(-20px);
// // // //           }
// // // //           to {
// // // //             opacity: 1;
// // // //             transform: translateX(0);
// // // //           }
// // // //         }

// // // //         /* Today's Status Card */
// // // //         .today-section {
// // // //           margin-bottom: 2rem;
// // // //           animation: fadeIn 0.6s ease-out 0.2s backwards;
// // // //         }

// // // //         .section-title {
// // // //           font-size: 1.5rem;
// // // //           font-weight: 700;
// // // //           color: #1f2937;
// // // //           margin: 0 0 1rem 0;
// // // //         }

// // // //         .today-card {
// // // //           background: white;
// // // //           border-radius: 16px;
// // // //           padding: 2rem;
// // // //           border: 1px solid #e5e7eb;
// // // //           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
// // // //           animation: cardSlideUp 0.5s ease-out backwards;
// // // //           position: relative;
// // // //           overflow: hidden;
// // // //         }

// // // //         @keyframes cardSlideUp {
// // // //           from {
// // // //             opacity: 0;
// // // //             transform: translateY(20px);
// // // //           }
// // // //           to {
// // // //             opacity: 1;
// // // //             transform: translateY(0);
// // // //           }
// // // //         }

// // // //         .today-card::before {
// // // //           content: '';
// // // //           position: absolute;
// // // //           top: 0;
// // // //           left: 0;
// // // //           right: 0;
// // // //           height: 4px;
// // // //           background: linear-gradient(90deg, #10b981 0%, #059669 100%);
// // // //         }

// // // //         .today-card-content {
// // // //           display: flex;
// // // //           justify-content: space-between;
// // // //           align-items: center;
// // // //           gap: 1.5rem;
// // // //           flex-wrap: wrap;
// // // //         }

// // // //         .today-info h4 {
// // // //           font-size: 1.25rem;
// // // //           font-weight: 600;
// // // //           color: #1f2937;
// // // //           margin: 0 0 0.75rem 0;
// // // //         }

// // // //         .today-info p {
// // // //           margin: 0.5rem 0;
// // // //           color: #6b7280;
// // // //           font-size: 0.95rem;
// // // //         }

// // // //         .today-info p strong {
// // // //           color: #374151;
// // // //           font-weight: 600;
// // // //         }

// // // //         .not-checked-in-card {
// // // //           text-align: center;
// // // //           padding: 2.5rem;
// // // //         }

// // // //         .not-checked-in-card p {
// // // //           color: #6b7280;
// // // //           font-size: 1.05rem;
// // // //           margin-bottom: 1.5rem;
// // // //         }

// // // //         .check-in-now-btn {
// // // //           background: linear-gradient(135deg, #10b981 0%, #059669 100%);
// // // //           color: white;
// // // //           border: none;
// // // //           padding: 1rem 2rem;
// // // //           border-radius: 12px;
// // // //           font-weight: 600;
// // // //           font-size: 1rem;
// // // //           cursor: pointer;
// // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // //           box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
// // // //         }

// // // //         .check-in-now-btn:hover {
// // // //           transform: translateY(-2px);
// // // //           box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
// // // //         }

// // // //         /* Status Badge */
// // // //         .status-badge {
// // // //           display: inline-flex;
// // // //           align-items: center;
// // // //           gap: 0.4rem;
// // // //           padding: 0.5rem 1rem;
// // // //           border-radius: 20px;
// // // //           font-size: 0.85rem;
// // // //           font-weight: 600;
// // // //           white-space: nowrap;
// // // //         }

// // // //         .status-dot {
// // // //           width: 6px;
// // // //           height: 6px;
// // // //           border-radius: 50%;
// // // //           animation: dotPulse 2s ease-in-out infinite;
// // // //         }

// // // //         @keyframes dotPulse {
// // // //           0%, 100% {
// // // //             opacity: 1;
// // // //             transform: scale(1);
// // // //           }
// // // //           50% {
// // // //             opacity: 0.5;
// // // //             transform: scale(1.2);
// // // //           }
// // // //         }

// // // //         .status-badge-success {
// // // //           background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
// // // //           color: #16a34a;
// // // //           border: 1px solid #bbf7d0;
// // // //         }

// // // //         .status-badge-success .status-dot {
// // // //           background: #16a34a;
// // // //         }

// // // //         .status-badge-error {
// // // //           background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
// // // //           color: #dc2626;
// // // //           border: 1px solid #fecaca;
// // // //         }

// // // //         .status-badge-error .status-dot {
// // // //           background: #dc2626;
// // // //         }

// // // //         .status-badge-warning {
// // // //           background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
// // // //           color: #d97706;
// // // //           border: 1px solid #fde68a;
// // // //         }

// // // //         .status-badge-warning .status-dot {
// // // //           background: #d97706;
// // // //         }

// // // //         .status-badge-info {
// // // //           background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
// // // //           color: #2563eb;
// // // //           border: 1px solid #bfdbfe;
// // // //         }

// // // //         .status-badge-info .status-dot {
// // // //           background: #2563eb;
// // // //         }

// // // //         .status-badge-default {
// // // //           background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
// // // //           color: #6b7280;
// // // //           border: 1px solid #e5e7eb;
// // // //         }

// // // //         .status-badge-default .status-dot {
// // // //           background: #6b7280;
// // // //         }

// // // //         /* Filters */
// // // //         .filters-section {
// // // //           display: flex;
// // // //           gap: 1.25rem;
// // // //           margin-bottom: 2rem;
// // // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // // //           flex-wrap: wrap;
// // // //         }

// // // //         .filter-group {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //         }

// // // //         .filter-label {
// // // //           font-size: 0.875rem;
// // // //           font-weight: 600;
// // // //           color: #374151;
// // // //           margin-bottom: 0.5rem;
// // // //         }

// // // //         .filter-input {
// // // //           background: white;
// // // //           border: 1.5px solid #e5e7eb;
// // // //           padding: 0.875rem 1.125rem;
// // // //           border-radius: 12px;
// // // //           font-size: 0.95rem;
// // // //           font-weight: 400;
// // // //           color: #374151;
// // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // //           font-family: 'Outfit', sans-serif;
// // // //         }

// // // //         .filter-input:focus {
// // // //           outline: none;
// // // //           border-color: #6366f1;
// // // //           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
// // // //         }

// // // //         /* Summary Cards */
// // // //         .summary-section {
// // // //           margin-bottom: 2rem;
// // // //           animation: fadeIn 0.6s ease-out 0.4s backwards;
// // // //         }

// // // //         .summary-grid {
// // // //           display: grid;
// // // //           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// // // //           gap: 1.25rem;
// // // //         }

// // // //         .summary-card {
// // // //           background: white;
// // // //           border-radius: 16px;
// // // //           padding: 1.75rem;
// // // //           border: 1px solid #e5e7eb;
// // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // //           animation: cardSlideUp 0.5s ease-out backwards;
// // // //         }

// // // //         .summary-card:nth-child(1) { animation-delay: 0.05s; }
// // // //         .summary-card:nth-child(2) { animation-delay: 0.1s; }
// // // //         .summary-card:nth-child(3) { animation-delay: 0.15s; }

// // // //         .summary-card:hover {
// // // //           transform: translateY(-4px);
// // // //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
// // // //         }

// // // //         .summary-label {
// // // //           font-size: 0.875rem;
// // // //           color: #6b7280;
// // // //           font-weight: 500;
// // // //           margin-bottom: 0.5rem;
// // // //         }

// // // //         .summary-value {
// // // //           font-size: 2rem;
// // // //           font-weight: 700;
// // // //           color: #1f2937;
// // // //           font-family: 'Space Mono', monospace;
// // // //         }

// // // //         /* Table */
// // // //         .table-container {
// // // //           background: white;
// // // //           border-radius: 16px;
// // // //           padding: 1.5rem;
// // // //           border: 1px solid #e5e7eb;
// // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // //           overflow-x: auto;
// // // //           animation: fadeIn 0.6s ease-out 0.5s backwards;
// // // //         }

// // // //         .attendance-table {
// // // //           width: 100%;
// // // //           border-collapse: separate;
// // // //           border-spacing: 0;
// // // //         }

// // // //         .attendance-table thead th {
// // // //           background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
// // // //           padding: 1rem 1.25rem;
// // // //           text-align: left;
// // // //           font-weight: 600;
// // // //           color: #374151;
// // // //           font-size: 0.875rem;
// // // //           text-transform: uppercase;
// // // //           letter-spacing: 0.05em;
// // // //           border-bottom: 2px solid #e5e7eb;
// // // //         }

// // // //         .attendance-table thead th:first-child {
// // // //           border-top-left-radius: 12px;
// // // //         }

// // // //         .attendance-table thead th:last-child {
// // // //           border-top-right-radius: 12px;
// // // //         }

// // // //         .attendance-table tbody tr {
// // // //           transition: all 0.2s;
// // // //         }

// // // //         .attendance-table tbody tr:hover {
// // // //           background: #f9fafb;
// // // //         }

// // // //         .attendance-table tbody td {
// // // //           padding: 1rem 1.25rem;
// // // //           border-bottom: 1px solid #f3f4f6;
// // // //           color: #374151;
// // // //           font-size: 0.95rem;
// // // //         }

// // // //         .attendance-table tbody tr:last-child td {
// // // //           border-bottom: none;
// // // //         }

// // // //         /* Leave Requests */
// // // //         .leave-requests-container {
// // // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // // //         }

// // // //         .leave-grid {
// // // //           display: grid;
// // // //           gap: 1.25rem;
// // // //         }

// // // //         .leave-card {
// // // //           background: white;
// // // //           border-radius: 16px;
// // // //           padding: 1.75rem;
// // // //           border: 1px solid #e5e7eb;
// // // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // //           animation: cardSlideUp 0.5s ease-out backwards;
// // // //         }

// // // //         .leave-card:nth-child(1) { animation-delay: 0.05s; }
// // // //         .leave-card:nth-child(2) { animation-delay: 0.1s; }
// // // //         .leave-card:nth-child(3) { animation-delay: 0.15s; }
// // // //         .leave-card:nth-child(n+4) { animation-delay: 0.2s; }

// // // //         .leave-card:hover {
// // // //           transform: translateY(-2px);
// // // //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
// // // //         }

// // // //         .leave-header {
// // // //           display: flex;
// // // //           justify-content: space-between;
// // // //           align-items: flex-start;
// // // //           margin-bottom: 1.25rem;
// // // //           gap: 1rem;
// // // //         }

// // // //         .leave-type {
// // // //           font-size: 1.25rem;
// // // //           font-weight: 600;
// // // //           color: #1f2937;
// // // //           margin: 0 0 0.5rem 0;
// // // //         }

// // // //         .leave-dates {
// // // //           font-size: 0.875rem;
// // // //           color: #6b7280;
// // // //         }

// // // //         .leave-details p {
// // // //           margin: 0.75rem 0;
// // // //           color: #374151;
// // // //           font-size: 0.95rem;
// // // //         }

// // // //         .leave-details strong {
// // // //           color: #1f2937;
// // // //           font-weight: 600;
// // // //         }

// // // //         /* Empty State */
// // // //         .empty-state {
// // // //           text-align: center;
// // // //           padding: 4rem 2rem;
// // // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // // //         }

// // // //         .empty-state h3 {
// // // //           font-size: 1.5rem;
// // // //           font-weight: 600;
// // // //           color: #1f2937;
// // // //           margin: 0 0 0.5rem 0;
// // // //         }

// // // //         .empty-state p {
// // // //           color: #6b7280;
// // // //           font-size: 1rem;
// // // //           margin: 0;
// // // //         }

// // // //         /* Loading State */
// // // //         .loading-container {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           min-height: 100vh;
// // // //           background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
// // // //         }

// // // //         .loading-spinner {
// // // //           width: 60px;
// // // //           height: 60px;
// // // //           border: 4px solid #e5e7eb;
// // // //           border-top-color: #6366f1;
// // // //           border-radius: 50%;
// // // //           animation: spin 1s linear infinite;
// // // //         }

// // // //         @keyframes spin {
// // // //           to {
// // // //             transform: rotate(360deg);
// // // //           }
// // // //         }

// // // //         .loading-text {
// // // //           margin-top: 1.5rem;
// // // //           color: #6b7280;
// // // //           font-size: 1rem;
// // // //           font-weight: 500;
// // // //         }

// // // //         /* Modal */
// // // //         .modal-overlay {
// // // //           position: fixed;
// // // //           top: 0;
// // // //           left: 0;
// // // //           right: 0;
// // // //           bottom: 0;
// // // //           background: rgba(0, 0, 0, 0.5);
// // // //           backdrop-filter: blur(4px);
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           z-index: 1000;
// // // //           animation: fadeIn 0.3s ease-out;
// // // //         }

// // // //         .modal-box {
// // // //           background: white;
// // // //           border-radius: 20px;
// // // //           padding: 2rem;
// // // //           width: 90%;
// // // //           max-width: 600px;
// // // //           max-height: 90vh;
// // // //           overflow-y: auto;
// // // //           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
// // // //           animation: modalSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
// // // //           position: relative;
// // // //         }

// // // //         @keyframes modalSlideUp {
// // // //           from {
// // // //             opacity: 0;
// // // //             transform: translateY(40px) scale(0.95);
// // // //           }
// // // //           to {
// // // //             opacity: 1;
// // // //             transform: translateY(0) scale(1);
// // // //           }
// // // //         }

// // // //         .modal-header {
// // // //           display: flex;
// // // //           justify-content: space-between;
// // // //           align-items: center;
// // // //           margin-bottom: 1.75rem;
// // // //         }

// // // //         .modal-title {
// // // //           font-size: 1.75rem;
// // // //           font-weight: 700;
// // // //           color: #1f2937;
// // // //           margin: 0;
// // // //         }

// // // //         .close-btn {
// // // //           width: 40px;
// // // //           height: 40px;
// // // //           border-radius: 10px;
// // // //           border: none;
// // // //           background: #f3f4f6;
// // // //           color: #6b7280;
// // // //           font-size: 1.5rem;
// // // //           cursor: pointer;
// // // //           transition: all 0.2s;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           position: absolute;
// // // //           right: 1.5rem;
// // // //           top: 1.5rem;
// // // //         }

// // // //         .close-btn:hover {
// // // //           background: #e5e7eb;
// // // //           color: #1f2937;
// // // //         }

// // // //         /* Form Elements */
// // // //         .form-group {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           margin-bottom: 1.25rem;
// // // //         }

// // // //         .form-label {
// // // //           font-size: 0.875rem;
// // // //           font-weight: 600;
// // // //           color: #374151;
// // // //           margin-bottom: 0.5rem;
// // // //         }

// // // //         .form-input,
// // // //         .form-select,
// // // //         .form-textarea {
// // // //           background: #f9fafb;
// // // //           border: 1.5px solid #e5e7eb;
// // // //           padding: 0.875rem 1rem;
// // // //           border-radius: 10px;
// // // //           font-size: 0.95rem;
// // // //           font-family: 'Outfit', sans-serif;
// // // //           color: #1f2937;
// // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // //         }

// // // //         .form-input:focus,
// // // //         .form-select:focus,
// // // //         .form-textarea:focus {
// // // //           outline: none;
// // // //           border-color: #6366f1;
// // // //           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
// // // //           background: white;
// // // //         }

// // // //         .form-row {
// // // //           display: flex;
// // // //           gap: 1rem;
// // // //         }

// // // //         .form-row .form-group {
// // // //           flex: 1;
// // // //         }

// // // //         .modal-actions {
// // // //           display: flex;
// // // //           justify-content: flex-end;
// // // //           gap: 1rem;
// // // //           margin-top: 1.75rem;
// // // //           padding-top: 1.75rem;
// // // //           border-top: 1px solid #e5e7eb;
// // // //         }

// // // //         .btn-outline {
// // // //           background: white;
// // // //           border: 1.5px solid #e5e7eb;
// // // //           color: #6b7280;
// // // //           padding: 0.875rem 1.5rem;
// // // //           border-radius: 10px;
// // // //           font-weight: 600;
// // // //           font-size: 0.95rem;
// // // //           cursor: pointer;
// // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // //         }

// // // //         .btn-outline:hover {
// // // //           background: #f9fafb;
// // // //           border-color: #d1d5db;
// // // //           color: #374151;
// // // //         }

// // // //         .btn-primary {
// // // //           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
// // // //           border: none;
// // // //           color: white;
// // // //           padding: 0.875rem 1.5rem;
// // // //           border-radius: 10px;
// // // //           font-weight: 600;
// // // //           font-size: 0.95rem;
// // // //           cursor: pointer;
// // // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // //         }

// // // //         .btn-primary:hover {
// // // //           transform: translateY(-2px);
// // // //           box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
// // // //         }

// // // //         .btn-primary:disabled {
// // // //           opacity: 0.6;
// // // //           cursor: not-allowed;
// // // //           transform: none;
// // // //         }

// // // //         /* Responsive */
// // // //         @media (max-width: 768px) {
// // // //           .attendance-page {
// // // //             padding: 1rem;
// // // //           }

// // // //           .page-title {
// // // //             font-size: 1.75rem;
// // // //           }

// // // //           .header-section {
// // // //             flex-direction: column;
// // // //             align-items: flex-start;
// // // //           }

// // // //           .header-actions {
// // // //             width: 100%;
// // // //           }

// // // //           .action-btn {
// // // //             flex: 1;
// // // //           }

// // // //           .summary-grid {
// // // //             grid-template-columns: 1fr;
// // // //           }

// // // //           .form-row {
// // // //             flex-direction: column;
// // // //           }

// // // //           .table-container {
// // // //             padding: 1rem;
// // // //           }

// // // //           .attendance-table {
// // // //             font-size: 0.85rem;
// // // //           }

// // // //           .attendance-table thead th,
// // // //           .attendance-table tbody td {
// // // //             padding: 0.75rem;
// // // //           }
// // // //         }

// // // //         /* Scrollbar Styling */
// // // //         .modal-box::-webkit-scrollbar {
// // // //           width: 8px;
// // // //         }

// // // //         .modal-box::-webkit-scrollbar-track {
// // // //           background: #f3f4f6;
// // // //           border-radius: 10px;
// // // //         }

// // // //         .modal-box::-webkit-scrollbar-thumb {
// // // //           background: #d1d5db;
// // // //           border-radius: 10px;
// // // //         }

// // // //         .modal-box::-webkit-scrollbar-thumb:hover {
// // // //           background: #9ca3af;
// // // //         }
// // // //       `}</style>

// // // //       <div className="header-section">
// // // //         <h1 className="page-title">Attendance & Leave Management</h1>
// // // //         <div className="header-actions">
// // // //           {activeTab === 'attendance' && (
// // // //             <>
// // // //               <button onClick={handleCheckIn} className="action-btn">Check In</button>
// // // //               <button onClick={handleCheckOut} className="action-btn action-btn-secondary">Check Out</button>
// // // //             </>
// // // //           )}
// // // //           {activeTab === 'leave' && (
// // // //             <button onClick={() => setShowLeaveModal(true)} className="action-btn">
// // // //               Request Leave
// // // //             </button>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       <div className="tabs-container">
// // // //         <div className="tabs-wrapper">
// // // //           <button 
// // // //             className={`tab-button ${activeTab === 'attendance' ? 'active' : ''}`}
// // // //             onClick={() => setActiveTab('attendance')}
// // // //           >
// // // //             Attendance
// // // //           </button>
// // // //           <button 
// // // //             className={`tab-button ${activeTab === 'leave' ? 'active' : ''}`}
// // // //             onClick={() => setActiveTab('leave')}
// // // //           >
// // // //             Leave Requests
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {error && <div className="alert-error">{error}</div>}

// // // //       <div>
// // // //         {activeTab === 'attendance' ? (
// // // //           <div>
// // // //             <div className="today-section">
// // // //               <h3 className="section-title">Today's Status</h3>
// // // //               {getTodayAttendance() ? (
// // // //                 <div className="today-card">
// // // //                   <div className="today-card-content">
// // // //                     <div className="today-info">
// // // //                       <h4>Checked In</h4>
// // // //                       <p><strong>Time:</strong> {formatTime(getTodayAttendance().check_in)}</p>
// // // //                       {getTodayAttendance().check_out && (
// // // //                         <p><strong>Check Out:</strong> {formatTime(getTodayAttendance().check_out)}</p>
// // // //                       )}
// // // //                       {getTodayAttendance().total_hours && (
// // // //                         <p><strong>Total Hours:</strong> {getTodayAttendance().total_hours.toFixed(2)}</p>
// // // //                       )}
// // // //                     </div>
// // // //                     {getStatusBadge(getTodayAttendance().status)}
// // // //                   </div>
// // // //                 </div>
// // // //               ) : (
// // // //                 <div className="today-card not-checked-in-card">
// // // //                   <p>You haven't checked in today</p>
// // // //                   <button onClick={handleCheckIn} className="check-in-now-btn">Check In Now</button>
// // // //                 </div>
// // // //               )}
// // // //             </div>

// // // //             <div className="filters-section">
// // // //               <div className="filter-group">
// // // //                 <label className="filter-label">Start Date:</label>
// // // //                 <input
// // // //                   type="date"
// // // //                   name="start_date"
// // // //                   value={filters.start_date}
// // // //                   onChange={handleFilterChange}
// // // //                   className="filter-input"
// // // //                 />
// // // //               </div>
// // // //               <div className="filter-group">
// // // //                 <label className="filter-label">End Date:</label>
// // // //                 <input
// // // //                   type="date"
// // // //                   name="end_date"
// // // //                   value={filters.end_date}
// // // //                   onChange={handleFilterChange}
// // // //                   className="filter-input"
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //             <div className="summary-section">
// // // //               <h3 className="section-title">Attendance History</h3>
// // // //               <div className="summary-grid">
// // // //                 <div className="summary-card">
// // // //                   <div className="summary-label">Total Days</div>
// // // //                   <div className="summary-value">{attendance.length}</div>
// // // //                 </div>
// // // //                 <div className="summary-card">
// // // //                   <div className="summary-label">Total Hours</div>
// // // //                   <div className="summary-value">{calculateTotalHours(attendance).toFixed(2)}</div>
// // // //                 </div>
// // // //                 <div className="summary-card">
// // // //                   <div className="summary-label">Present Days</div>
// // // //                   <div className="summary-value">{attendance.filter(a => a.status === 'present').length}</div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {attendance.length === 0 ? (
// // // //               <div className="empty-state">
// // // //                 <h3>No attendance records found</h3>
// // // //                 <p>No attendance records match your current filters.</p>
// // // //               </div>
// // // //             ) : (
// // // //               <div className="table-container">
// // // //                 <table className="attendance-table">
// // // //                   <thead>
// // // //                     <tr>
// // // //                       <th>Date</th>
// // // //                       <th>Check In</th>
// // // //                       <th>Check Out</th>
// // // //                       <th>Total Hours</th>
// // // //                       <th>Status</th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     {attendance.map((record) => (
// // // //                       <tr key={record.id}>
// // // //                         <td>{formatDate(record.date)}</td>
// // // //                         <td>{record.check_in ? formatTime(record.check_in) : 'N/A'}</td>
// // // //                         <td>{record.check_out ? formatTime(record.check_out) : 'N/A'}</td>
// // // //                         <td>{record.total_hours ? record.total_hours.toFixed(2) : 'N/A'}</td>
// // // //                         <td>{getStatusBadge(record.status)}</td>
// // // //                       </tr>
// // // //                     ))}
// // // //                   </tbody>
// // // //                 </table>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         ) : (
// // // //           <div className="leave-requests-container">
// // // //             <h2 className="section-title">My Leave Requests</h2>
            
// // // //             {leaveRequests.length === 0 ? (
// // // //               <div className="empty-state">
// // // //                 <h3>No leave requests found</h3>
// // // //                 <p>You haven't submitted any leave requests yet.</p>
// // // //               </div>
// // // //             ) : (
// // // //               <div className="leave-grid">
// // // //                 {leaveRequests.map((request) => (
// // // //                   <div key={request.id} className="leave-card">
// // // //                     <div className="leave-header">
// // // //                       <div>
// // // //                         <h4 className="leave-type">{request.leave_type}</h4>
// // // //                         <p className="leave-dates">
// // // //                           {formatDate(request.start_date)} to {formatDate(request.end_date)}
// // // //                         </p>
// // // //                       </div>
// // // //                       {getLeaveStatusBadge(request.status)}
// // // //                     </div>
// // // //                     <div className="leave-details">
// // // //                       <p><strong>Reason:</strong> {request.reason}</p>
// // // //                       <p><strong>Submitted:</strong> {formatDate(request.created_at)}</p>
// // // //                       {request.comments && (
// // // //                         <p><strong>Admin Comments:</strong> {request.comments}</p>
// // // //                       )}
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {showLeaveModal && (
// // // //         <RequestLeaveModal
// // // //           onClose={() => setShowLeaveModal(false)}
// // // //           onSave={handleRequestLeave}
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // // Request Leave Modal Component
// // // // function RequestLeaveModal({ onClose, onSave }) {
// // // //   const [formData, setFormData] = useState({
// // // //     leave_type: 'sick',
// // // //     start_date: '',
// // // //     end_date: '',
// // // //     reason: ''
// // // //   });
// // // //   const [loading, setLoading] = useState(false);

// // // //   const handleChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value
// // // //     });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
    
// // // //     if (!formData.start_date || !formData.end_date || !formData.reason) {
// // // //       alert('Please fill in all required fields');
// // // //       return;
// // // //     }

// // // //     if (new Date(formData.start_date) > new Date(formData.end_date)) {
// // // //       alert('End date cannot be before start date');
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     await onSave(formData);
// // // //     setLoading(false);
// // // //   };

// // // //   return (
// // // //     <div className="modal-overlay">
// // // //       <div className="modal-box">
// // // //         <button onClick={onClose} className="close-btn">×</button>
// // // //         <div className="modal-header">
// // // //           <h2 className="modal-title">Request Leave</h2>
// // // //         </div>

// // // //         <form onSubmit={handleSubmit}>
// // // //           <div className="form-group">
// // // //             <label className="form-label">Leave Type *</label>
// // // //             <select
// // // //               name="leave_type"
// // // //               value={formData.leave_type}
// // // //               onChange={handleChange}
// // // //               className="form-select"
// // // //               required
// // // //             >
// // // //               <option value="sick">Sick Leave</option>
// // // //               <option value="casual">Casual Leave</option>
// // // //               <option value="annual">Annual Leave</option>
// // // //               <option value="emergency">Emergency Leave</option>
// // // //               <option value="maternity">Maternity Leave</option>
// // // //               <option value="paternity">Paternity Leave</option>
// // // //               <option value="other">Other</option>
// // // //             </select>
// // // //           </div>

// // // //           <div className="form-row">
// // // //             <div className="form-group">
// // // //               <label className="form-label">Start Date *</label>
// // // //               <input
// // // //                 type="date"
// // // //                 name="start_date"
// // // //                 value={formData.start_date}
// // // //                 onChange={handleChange}
// // // //                 min={new Date().toISOString().split('T')[0]}
// // // //                 className="form-input"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="form-group">
// // // //               <label className="form-label">End Date *</label>
// // // //               <input
// // // //                 type="date"
// // // //                 name="end_date"
// // // //                 value={formData.end_date}
// // // //                 onChange={handleChange}
// // // //                 min={formData.start_date || new Date().toISOString().split('T')[0]}
// // // //                 className="form-input"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           <div className="form-group">
// // // //             <label className="form-label">Reason *</label>
// // // //             <textarea
// // // //               name="reason"
// // // //               value={formData.reason}
// // // //               onChange={handleChange}
// // // //               placeholder="Please provide a reason for your leave request..."
// // // //               className="form-textarea"
// // // //               rows="4"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="modal-actions">
// // // //             <button type="button" onClick={onClose} className="btn-outline">Cancel</button>
// // // //             <button type="submit" disabled={loading} className="btn-primary">
// // // //               {loading ? 'Submitting...' : 'Submit Request'}
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default LabTechnicianAttendance;















// // // // src/pages/lab-technician/Attendance.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import staffService from '../../services/staffService';

// // // function LabTechnicianAttendance() {
// // //   const [attendance, setAttendance] = useState([]);
// // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');
// // //   const [activeTab, setActiveTab] = useState('attendance');
// // //   const [showLeaveModal, setShowLeaveModal] = useState(false);
// // //   const [filters, setFilters] = useState({
// // //     start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
// // //     end_date: new Date().toISOString().split('T')[0]
// // //   });

// // //   useEffect(() => {
// // //     if (activeTab === 'attendance') {
// // //       fetchAttendance();
// // //     } else {
// // //       fetchLeaveRequests();
// // //     }
// // //   }, [activeTab, filters]);

// // //   const fetchAttendance = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const response = await staffService.getAttendanceHistory(filters);
// // //       setAttendance(response.attendance || []);
// // //     } catch (error) {
// // //       setError('Failed to fetch attendance history');
// // //       console.error('Error fetching attendance:', error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const fetchLeaveRequests = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const response = await staffService.getLeaveRequests();
// // //       setLeaveRequests(response.leave_requests || []);
// // //     } catch (error) {
// // //       setError('Failed to fetch leave requests');
// // //       console.error('Error fetching leave requests:', error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleCheckIn = async () => {
// // //     try {
// // //       await staffService.checkIn();
// // //       alert('Checked in successfully');
// // //       fetchAttendance();
// // //     } catch (error) {
// // //       alert('Failed to check in');
// // //       console.error('Error checking in:', error);
// // //     }
// // //   };

// // //   const handleCheckOut = async () => {
// // //     try {
// // //       await staffService.checkOut();
// // //       alert('Checked out successfully');
// // //       fetchAttendance();
// // //     } catch (error) {
// // //       alert('Failed to check out');
// // //       console.error('Error checking out:', error);
// // //     }
// // //   };

// // //   const handleRequestLeave = async (leaveData) => {
// // //     try {
// // //       await staffService.requestLeave(leaveData);
// // //       alert('Leave request submitted successfully');
// // //       setShowLeaveModal(false);
// // //       fetchLeaveRequests();
// // //     } catch (error) {
// // //       alert('Failed to submit leave request');
// // //       console.error('Error submitting leave request:', error);
// // //     }
// // //   };

// // //   const handleFilterChange = (e) => {
// // //     setFilters({
// // //       ...filters,
// // //       [e.target.name]: e.target.value
// // //     });
// // //   };

// // //   const formatDate = (dateString) => {
// // //     return new Date(dateString).toLocaleDateString('en-US', {
// // //       year: 'numeric',
// // //       month: 'long',
// // //       day: 'numeric'
// // //     });
// // //   };

// // //   const formatTime = (dateString) => {
// // //     return new Date(dateString).toLocaleTimeString('en-US', {
// // //       hour: '2-digit',
// // //       minute: '2-digit'
// // //     });
// // //   };

// // //   const getTodayAttendance = () => {
// // //     const today = new Date().toISOString().split('T')[0];
// // //     return attendance.find(record => record.date === today);
// // //   };

// // //   const calculateTotalHours = (attendance) => {
// // //     return attendance.reduce((total, record) => {
// // //       return total + (record.total_hours || 0);
// // //     }, 0);
// // //   };

// // //   const getStatusBadge = (status) => {
// // //     const statusConfig = {
// // //       present: { label: 'Present', className: 'status-badge-success' },
// // //       absent: { label: 'Absent', className: 'status-badge-error' },
// // //       late: { label: 'Late', className: 'status-badge-warning' },
// // //       half_day: { label: 'Half Day', className: 'status-badge-info' }
// // //     };
    
// // //     const config = statusConfig[status] || { label: status, className: 'status-badge-default' };
// // //     return (
// // //       <span className={`status-badge ${config.className}`}>
// // //         <span className="status-dot"></span>
// // //         {config.label}
// // //       </span>
// // //     );
// // //   };

// // //   const getLeaveStatusBadge = (status) => {
// // //     const statusConfig = {
// // //       approved: { label: 'Approved', className: 'status-badge-success' },
// // //       pending: { label: 'Pending', className: 'status-badge-warning' },
// // //       rejected: { label: 'Rejected', className: 'status-badge-error' }
// // //     };
    
// // //     const config = statusConfig[status] || { label: status, className: 'status-badge-default' };
// // //     return (
// // //       <span className={`status-badge ${config.className}`}>
// // //         <span className="status-dot"></span>
// // //         {config.label}
// // //       </span>
// // //     );
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="loading-container">
// // //         <div className="loading-spinner"></div>
// // //         <p className="loading-text">Loading attendance data...</p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="attendance-page">
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

// // //         .attendance-page {
// // //           min-height: 100vh;
// // //           background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
// // //           padding: 2rem;
// // //           font-family: 'Outfit', sans-serif;
// // //           position: relative;
// // //         }

// // //         .attendance-page::before {
// // //           content: '';
// // //           position: fixed;
// // //           top: 0;
// // //           left: 0;
// // //           right: 0;
// // //           bottom: 0;
// // //           background: 
// // //             radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.04) 0%, transparent 50%),
// // //             radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.04) 0%, transparent 50%),
// // //             radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
// // //           pointer-events: none;
// // //           z-index: 0;
// // //         }

// // //         .attendance-page > * {
// // //           position: relative;
// // //           z-index: 1;
// // //         }

// // //         /* Header Section */
// // //         .header-section {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: flex-start;
// // //           margin-bottom: 2.5rem;
// // //           animation: slideDown 0.6s ease-out;
// // //           flex-wrap: wrap;
// // //           gap: 1rem;
// // //         }

// // //         @keyframes slideDown {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(-20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         .page-title {
// // //           font-size: 2.25rem;
// // //           font-weight: 700;
// // //           background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
// // //           -webkit-background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           background-clip: text;
// // //           letter-spacing: -0.02em;
// // //           margin: 0;
// // //         }

// // //         .header-actions {
// // //           display: flex;
// // //           gap: 0.75rem;
// // //           flex-wrap: wrap;
// // //         }

// // //         .action-btn {
// // //           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
// // //           color: white;
// // //           border: none;
// // //           padding: 0.875rem 1.75rem;
// // //           border-radius: 12px;
// // //           font-weight: 600;
// // //           font-size: 0.95rem;
// // //           cursor: pointer;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //           box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
// // //           position: relative;
// // //           overflow: hidden;
// // //         }

// // //         .action-btn::before {
// // //           content: '';
// // //           position: absolute;
// // //           top: 0;
// // //           left: -100%;
// // //           width: 100%;
// // //           height: 100%;
// // //           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
// // //           transition: left 0.5s;
// // //         }

// // //         .action-btn:hover::before {
// // //           left: 100%;
// // //         }

// // //         .action-btn:hover {
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
// // //         }

// // //         .action-btn-secondary {
// // //           background: linear-gradient(135deg, #64748b 0%, #475569 100%);
// // //           box-shadow: 0 4px 12px rgba(100, 116, 139, 0.2);
// // //         }

// // //         .action-btn-secondary:hover {
// // //           box-shadow: 0 6px 20px rgba(100, 116, 139, 0.3);
// // //         }

// // //         /* Tabs */
// // //         .tabs-container {
// // //           margin-bottom: 2rem;
// // //           animation: fadeIn 0.6s ease-out 0.1s backwards;
// // //         }

// // //         @keyframes fadeIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(10px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         .tabs-wrapper {
// // //           display: inline-flex;
// // //           background: rgba(255, 255, 255, 0.7);
// // //           backdrop-filter: blur(10px);
// // //           border-radius: 16px;
// // //           padding: 6px;
// // //           gap: 6px;
// // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // //           border: 1px solid rgba(0, 0, 0, 0.06);
// // //         }

// // //         .tab-button {
// // //           padding: 0.75rem 1.75rem;
// // //           border: none;
// // //           background: transparent;
// // //           color: #6b7280;
// // //           font-weight: 600;
// // //           font-size: 0.95rem;
// // //           cursor: pointer;
// // //           border-radius: 12px;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //         }

// // //         .tab-button.active {
// // //           background: white;
// // //           color: #1f2937;
// // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
// // //         }

// // //         .tab-button:hover:not(.active) {
// // //           color: #1f2937;
// // //           background: rgba(255, 255, 255, 0.5);
// // //         }

// // //         /* Alert */
// // //         .alert-error {
// // //           background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
// // //           border: 1px solid #fecaca;
// // //           color: #991b1b;
// // //           padding: 1rem 1.25rem;
// // //           border-radius: 12px;
// // //           margin-bottom: 1.5rem;
// // //           animation: slideIn 0.4s ease-out;
// // //           font-weight: 500;
// // //         }

// // //         @keyframes slideIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateX(-20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateX(0);
// // //           }
// // //         }

// // //         /* Today's Status Card */
// // //         .today-section {
// // //           margin-bottom: 2rem;
// // //           animation: fadeIn 0.6s ease-out 0.2s backwards;
// // //         }

// // //         .section-title {
// // //           font-size: 1.5rem;
// // //           font-weight: 700;
// // //           color: #1f2937;
// // //           margin: 0 0 1rem 0;
// // //         }

// // //         .today-card {
// // //           background: white;
// // //           border-radius: 16px;
// // //           padding: 2rem;
// // //           border: 1px solid #e5e7eb;
// // //           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
// // //           animation: cardSlideUp 0.5s ease-out backwards;
// // //           position: relative;
// // //           overflow: hidden;
// // //         }

// // //         @keyframes cardSlideUp {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         .today-card::before {
// // //           content: '';
// // //           position: absolute;
// // //           top: 0;
// // //           left: 0;
// // //           right: 0;
// // //           height: 4px;
// // //           background: linear-gradient(90deg, #10b981 0%, #059669 100%);
// // //         }

// // //         .today-card-content {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: center;
// // //           gap: 1.5rem;
// // //           flex-wrap: wrap;
// // //         }

// // //         .today-info h4 {
// // //           font-size: 1.25rem;
// // //           font-weight: 600;
// // //           color: #1f2937;
// // //           margin: 0 0 0.75rem 0;
// // //         }

// // //         .today-info p {
// // //           margin: 0.5rem 0;
// // //           color: #6b7280;
// // //           font-size: 0.95rem;
// // //         }

// // //         .today-info p strong {
// // //           color: #374151;
// // //           font-weight: 600;
// // //         }

// // //         .not-checked-in-card {
// // //           text-align: center;
// // //           padding: 2.5rem;
// // //         }

// // //         .not-checked-in-card p {
// // //           color: #6b7280;
// // //           font-size: 1.05rem;
// // //           margin-bottom: 1.5rem;
// // //         }

// // //         .check-in-now-btn {
// // //           background: linear-gradient(135deg, #10b981 0%, #059669 100%);
// // //           color: white;
// // //           border: none;
// // //           padding: 1rem 2rem;
// // //           border-radius: 12px;
// // //           font-weight: 600;
// // //           font-size: 1rem;
// // //           cursor: pointer;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //           box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
// // //         }

// // //         .check-in-now-btn:hover {
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
// // //         }

// // //         /* Status Badge */
// // //         .status-badge {
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 0.4rem;
// // //           padding: 0.5rem 1rem;
// // //           border-radius: 20px;
// // //           font-size: 0.85rem;
// // //           font-weight: 600;
// // //           white-space: nowrap;
// // //         }

// // //         .status-dot {
// // //           width: 6px;
// // //           height: 6px;
// // //           border-radius: 50%;
// // //           animation: dotPulse 2s ease-in-out infinite;
// // //         }

// // //         @keyframes dotPulse {
// // //           0%, 100% {
// // //             opacity: 1;
// // //             transform: scale(1);
// // //           }
// // //           50% {
// // //             opacity: 0.5;
// // //             transform: scale(1.2);
// // //           }
// // //         }

// // //         .status-badge-success {
// // //           background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
// // //           color: #16a34a;
// // //           border: 1px solid #bbf7d0;
// // //         }

// // //         .status-badge-success .status-dot {
// // //           background: #16a34a;
// // //         }

// // //         .status-badge-error {
// // //           background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
// // //           color: #dc2626;
// // //           border: 1px solid #fecaca;
// // //         }

// // //         .status-badge-error .status-dot {
// // //           background: #dc2626;
// // //         }

// // //         .status-badge-warning {
// // //           background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
// // //           color: #d97706;
// // //           border: 1px solid #fde68a;
// // //         }

// // //         .status-badge-warning .status-dot {
// // //           background: #d97706;
// // //         }

// // //         .status-badge-info {
// // //           background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
// // //           color: #2563eb;
// // //           border: 1px solid #bfdbfe;
// // //         }

// // //         .status-badge-info .status-dot {
// // //           background: #2563eb;
// // //         }

// // //         .status-badge-default {
// // //           background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
// // //           color: #6b7280;
// // //           border: 1px solid #e5e7eb;
// // //         }

// // //         .status-badge-default .status-dot {
// // //           background: #6b7280;
// // //         }

// // //         /* Filters */
// // //         .filters-section {
// // //           display: flex;
// // //           gap: 1.25rem;
// // //           margin-bottom: 2rem;
// // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // //           flex-wrap: wrap;
// // //         }

// // //         .filter-group {
// // //           display: flex;
// // //           flex-direction: column;
// // //         }

// // //         .filter-label {
// // //           font-size: 0.875rem;
// // //           font-weight: 600;
// // //           color: #374151;
// // //           margin-bottom: 0.5rem;
// // //         }

// // //         .filter-input {
// // //           background: white;
// // //           border: 1.5px solid #e5e7eb;
// // //           padding: 0.875rem 1.125rem;
// // //           border-radius: 12px;
// // //           font-size: 0.95rem;
// // //           font-weight: 400;
// // //           color: #374151;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //           font-family: 'Outfit', sans-serif;
// // //         }

// // //         .filter-input:focus {
// // //           outline: none;
// // //           border-color: #6366f1;
// // //           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
// // //         }

// // //         /* Summary Cards */
// // //         .summary-section {
// // //           margin-bottom: 2rem;
// // //           animation: fadeIn 0.6s ease-out 0.4s backwards;
// // //         }

// // //         .summary-grid {
// // //           display: grid;
// // //           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// // //           gap: 1.25rem;
// // //         }

// // //         .summary-card {
// // //           background: white;
// // //           border-radius: 16px;
// // //           padding: 1.75rem;
// // //           border: 1px solid #e5e7eb;
// // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //           animation: cardSlideUp 0.5s ease-out backwards;
// // //         }

// // //         .summary-card:nth-child(1) { animation-delay: 0.05s; }
// // //         .summary-card:nth-child(2) { animation-delay: 0.1s; }
// // //         .summary-card:nth-child(3) { animation-delay: 0.15s; }

// // //         .summary-card:hover {
// // //           transform: translateY(-4px);
// // //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
// // //         }

// // //         .summary-label {
// // //           font-size: 0.875rem;
// // //           color: #6b7280;
// // //           font-weight: 500;
// // //           margin-bottom: 0.5rem;
// // //         }

// // //         .summary-value {
// // //           font-size: 2rem;
// // //           font-weight: 700;
// // //           color: #1f2937;
// // //           font-family: 'Space Mono', monospace;
// // //         }

// // //         /* Table */
// // //         .table-container {
// // //           background: white;
// // //           border-radius: 16px;
// // //           padding: 1.5rem;
// // //           border: 1px solid #e5e7eb;
// // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // //           overflow-x: auto;
// // //           animation: fadeIn 0.6s ease-out 0.5s backwards;
// // //         }

// // //         .attendance-table {
// // //           width: 100%;
// // //           border-collapse: separate;
// // //           border-spacing: 0;
// // //         }

// // //         .attendance-table thead th {
// // //           background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
// // //           padding: 1rem 1.25rem;
// // //           text-align: left;
// // //           font-weight: 600;
// // //           color: #374151;
// // //           font-size: 0.875rem;
// // //           text-transform: uppercase;
// // //           letter-spacing: 0.05em;
// // //           border-bottom: 2px solid #e5e7eb;
// // //         }

// // //         .attendance-table thead th:first-child {
// // //           border-top-left-radius: 12px;
// // //         }

// // //         .attendance-table thead th:last-child {
// // //           border-top-right-radius: 12px;
// // //         }

// // //         .attendance-table tbody tr {
// // //           transition: all 0.2s;
// // //         }

// // //         .attendance-table tbody tr:hover {
// // //           background: #f9fafb;
// // //         }

// // //         .attendance-table tbody td {
// // //           padding: 1rem 1.25rem;
// // //           border-bottom: 1px solid #f3f4f6;
// // //           color: #374151;
// // //           font-size: 0.95rem;
// // //         }

// // //         .attendance-table tbody tr:last-child td {
// // //           border-bottom: none;
// // //         }

// // //         /* Leave Requests */
// // //         .leave-requests-container {
// // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // //         }

// // //         .leave-grid {
// // //           display: grid;
// // //           gap: 1.25rem;
// // //         }

// // //         .leave-card {
// // //           background: white;
// // //           border-radius: 16px;
// // //           padding: 1.75rem;
// // //           border: 1px solid #e5e7eb;
// // //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //           animation: cardSlideUp 0.5s ease-out backwards;
// // //         }

// // //         .leave-card:nth-child(1) { animation-delay: 0.05s; }
// // //         .leave-card:nth-child(2) { animation-delay: 0.1s; }
// // //         .leave-card:nth-child(3) { animation-delay: 0.15s; }
// // //         .leave-card:nth-child(n+4) { animation-delay: 0.2s; }

// // //         .leave-card:hover {
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
// // //         }

// // //         .leave-header {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: flex-start;
// // //           margin-bottom: 1.25rem;
// // //           gap: 1rem;
// // //         }

// // //         .leave-type {
// // //           font-size: 1.25rem;
// // //           font-weight: 600;
// // //           color: #1f2937;
// // //           margin: 0 0 0.5rem 0;
// // //         }

// // //         .leave-dates {
// // //           font-size: 0.875rem;
// // //           color: #6b7280;
// // //         }

// // //         .leave-details p {
// // //           margin: 0.75rem 0;
// // //           color: #374151;
// // //           font-size: 0.95rem;
// // //         }

// // //         .leave-details strong {
// // //           color: #1f2937;
// // //           font-weight: 600;
// // //         }

// // //         /* Empty State */
// // //         .empty-state {
// // //           text-align: center;
// // //           padding: 4rem 2rem;
// // //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// // //         }

// // //         .empty-state h3 {
// // //           font-size: 1.5rem;
// // //           font-weight: 600;
// // //           color: #1f2937;
// // //           margin: 0 0 0.5rem 0;
// // //         }

// // //         .empty-state p {
// // //           color: #6b7280;
// // //           font-size: 1rem;
// // //           margin: 0;
// // //         }

// // //         /* Loading State */
// // //         .loading-container {
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: center;
// // //           justify-content: center;
// // //           min-height: 100vh;
// // //           background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
// // //         }

// // //         .loading-spinner {
// // //           width: 60px;
// // //           height: 60px;
// // //           border: 4px solid #e5e7eb;
// // //           border-top-color: #6366f1;
// // //           border-radius: 50%;
// // //           animation: spin 1s linear infinite;
// // //         }

// // //         @keyframes spin {
// // //           to {
// // //             transform: rotate(360deg);
// // //           }
// // //         }

// // //         .loading-text {
// // //           margin-top: 1.5rem;
// // //           color: #6b7280;
// // //           font-size: 1rem;
// // //           font-weight: 500;
// // //         }

// // //         /* Modal */
// // //         .modal-overlay {
// // //           position: fixed;
// // //           top: 0;
// // //           left: 0;
// // //           right: 0;
// // //           bottom: 0;
// // //           background: rgba(0, 0, 0, 0.5);
// // //           backdrop-filter: blur(4px);
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           z-index: 9999;
// // //           animation: fadeIn 0.3s ease-out;
// // //         }

// // //         .modal-box {
// // //           background: white;
// // //           border-radius: 20px;
// // //           padding: 2rem;
// // //           width: 90%;
// // //           max-width: 600px;
// // //           max-height: 90vh;
// // //           overflow-y: auto;
// // //           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
// // //           animation: modalSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
// // //           position: relative;
// // //           z-index: 10000;
// // //         }

// // //         @keyframes modalSlideUp {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(40px) scale(0.95);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0) scale(1);
// // //           }
// // //         }

// // //         .modal-header {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: center;
// // //           margin-bottom: 1.75rem;
// // //         }

// // //         .modal-title {
// // //           font-size: 1.75rem;
// // //           font-weight: 700;
// // //           color: #1f2937;
// // //           margin: 0;
// // //         }

// // //         .close-btn {
// // //           width: 40px;
// // //           height: 40px;
// // //           border-radius: 10px;
// // //           border: none;
// // //           background: #f3f4f6;
// // //           color: #6b7280;
// // //           font-size: 1.5rem;
// // //           cursor: pointer;
// // //           transition: all 0.2s;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           position: absolute;
// // //           right: 1.5rem;
// // //           top: 1.5rem;
// // //         }

// // //         .close-btn:hover {
// // //           background: #e5e7eb;
// // //           color: #1f2937;
// // //         }

// // //         /* Form Elements */
// // //         .form-group {
// // //           display: flex;
// // //           flex-direction: column;
// // //           margin-bottom: 1.25rem;
// // //         }

// // //         .form-label {
// // //           font-size: 0.875rem;
// // //           font-weight: 600;
// // //           color: #374151;
// // //           margin-bottom: 0.5rem;
// // //         }

// // //         .form-input,
// // //         .form-select,
// // //         .form-textarea {
// // //           background: #f9fafb;
// // //           border: 1.5px solid #e5e7eb;
// // //           padding: 0.875rem 1rem;
// // //           border-radius: 10px;
// // //           font-size: 0.95rem;
// // //           font-family: 'Outfit', sans-serif;
// // //           color: #1f2937;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //         }

// // //         .form-input:focus,
// // //         .form-select:focus,
// // //         .form-textarea:focus {
// // //           outline: none;
// // //           border-color: #6366f1;
// // //           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
// // //           background: white;
// // //         }

// // //         .form-row {
// // //           display: flex;
// // //           gap: 1rem;
// // //         }

// // //         .form-row .form-group {
// // //           flex: 1;
// // //         }

// // //         .modal-actions {
// // //           display: flex;
// // //           justify-content: flex-end;
// // //           gap: 1rem;
// // //           margin-top: 1.75rem;
// // //           padding-top: 1.75rem;
// // //           border-top: 1px solid #e5e7eb;
// // //         }

// // //         .btn-outline {
// // //           background: white;
// // //           border: 1.5px solid #e5e7eb;
// // //           color: #6b7280;
// // //           padding: 0.875rem 1.5rem;
// // //           border-radius: 10px;
// // //           font-weight: 600;
// // //           font-size: 0.95rem;
// // //           cursor: pointer;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //         }

// // //         .btn-outline:hover {
// // //           background: #f9fafb;
// // //           border-color: #d1d5db;
// // //           color: #374151;
// // //         }

// // //         .btn-primary {
// // //           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
// // //           border: none;
// // //           color: white;
// // //           padding: 0.875rem 1.5rem;
// // //           border-radius: 10px;
// // //           font-weight: 600;
// // //           font-size: 0.95rem;
// // //           cursor: pointer;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //         }

// // //         .btn-primary:hover {
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
// // //         }

// // //         .btn-primary:disabled {
// // //           opacity: 0.6;
// // //           cursor: not-allowed;
// // //           transform: none;
// // //         }

// // //         /* Responsive */
// // //         @media (max-width: 768px) {
// // //           .attendance-page {
// // //             padding: 1rem;
// // //           }

// // //           .page-title {
// // //             font-size: 1.75rem;
// // //           }

// // //           .header-section {
// // //             flex-direction: column;
// // //             align-items: flex-start;
// // //           }

// // //           .header-actions {
// // //             width: 100%;
// // //           }

// // //           .action-btn {
// // //             flex: 1;
// // //           }

// // //           .summary-grid {
// // //             grid-template-columns: 1fr;
// // //           }

// // //           .form-row {
// // //             flex-direction: column;
// // //           }

// // //           .table-container {
// // //             padding: 1rem;
// // //           }

// // //           .attendance-table {
// // //             font-size: 0.85rem;
// // //           }

// // //           .attendance-table thead th,
// // //           .attendance-table tbody td {
// // //             padding: 0.75rem;
// // //           }
// // //         }

// // //         /* Scrollbar Styling */
// // //         .modal-box::-webkit-scrollbar {
// // //           width: 8px;
// // //         }

// // //         .modal-box::-webkit-scrollbar-track {
// // //           background: #f3f4f6;
// // //           border-radius: 10px;
// // //         }

// // //         .modal-box::-webkit-scrollbar-thumb {
// // //           background: #d1d5db;
// // //           border-radius: 10px;
// // //         }

// // //         .modal-box::-webkit-scrollbar-thumb:hover {
// // //           background: #9ca3af;
// // //         }
// // //       `}</style>

// // //       <div className="header-section">
// // //         <h1 className="page-title">Attendance & Leave Management</h1>
// // //         <div className="header-actions">
// // //           {activeTab === 'attendance' && (
// // //             <>
// // //               <button onClick={handleCheckIn} className="action-btn">Check In</button>
// // //               <button onClick={handleCheckOut} className="action-btn action-btn-secondary">Check Out</button>
// // //             </>
// // //           )}
// // //           {activeTab === 'leave' && (
// // //             <button onClick={() => setShowLeaveModal(true)} className="action-btn">
// // //               Request Leave
// // //             </button>
// // //           )}
// // //         </div>
// // //       </div>

// // //       <div className="tabs-container">
// // //         <div className="tabs-wrapper">
// // //           <button 
// // //             className={`tab-button ${activeTab === 'attendance' ? 'active' : ''}`}
// // //             onClick={() => setActiveTab('attendance')}
// // //           >
// // //             Attendance
// // //           </button>
// // //           <button 
// // //             className={`tab-button ${activeTab === 'leave' ? 'active' : ''}`}
// // //             onClick={() => setActiveTab('leave')}
// // //           >
// // //             Leave Requests
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {error && <div className="alert-error">{error}</div>}

// // //       <div>
// // //         {activeTab === 'attendance' ? (
// // //           <div>
// // //             <div className="today-section">
// // //               <h3 className="section-title">Today's Status</h3>
// // //               {getTodayAttendance() ? (
// // //                 <div className="today-card">
// // //                   <div className="today-card-content">
// // //                     <div className="today-info">
// // //                       <h4>Checked In</h4>
// // //                       <p><strong>Time:</strong> {formatTime(getTodayAttendance().check_in)}</p>
// // //                       {getTodayAttendance().check_out && (
// // //                         <p><strong>Check Out:</strong> {formatTime(getTodayAttendance().check_out)}</p>
// // //                       )}
// // //                       {getTodayAttendance().total_hours && (
// // //                         <p><strong>Total Hours:</strong> {getTodayAttendance().total_hours.toFixed(2)}</p>
// // //                       )}
// // //                     </div>
// // //                     {getStatusBadge(getTodayAttendance().status)}
// // //                   </div>
// // //                 </div>
// // //               ) : (
// // //                 <div className="today-card not-checked-in-card">
// // //                   <p>You haven't checked in today</p>
// // //                   <button onClick={handleCheckIn} className="check-in-now-btn">Check In Now</button>
// // //                 </div>
// // //               )}
// // //             </div>

// // //             <div className="filters-section">
// // //               <div className="filter-group">
// // //                 <label className="filter-label">Start Date:</label>
// // //                 <input
// // //                   type="date"
// // //                   name="start_date"
// // //                   value={filters.start_date}
// // //                   onChange={handleFilterChange}
// // //                   className="filter-input"
// // //                 />
// // //               </div>
// // //               <div className="filter-group">
// // //                 <label className="filter-label">End Date:</label>
// // //                 <input
// // //                   type="date"
// // //                   name="end_date"
// // //                   value={filters.end_date}
// // //                   onChange={handleFilterChange}
// // //                   className="filter-input"
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div className="summary-section">
// // //               <h3 className="section-title">Attendance History</h3>
// // //               <div className="summary-grid">
// // //                 <div className="summary-card">
// // //                   <div className="summary-label">Total Days</div>
// // //                   <div className="summary-value">{attendance.length}</div>
// // //                 </div>
// // //                 <div className="summary-card">
// // //                   <div className="summary-label">Total Hours</div>
// // //                   <div className="summary-value">{calculateTotalHours(attendance).toFixed(2)}</div>
// // //                 </div>
// // //                 <div className="summary-card">
// // //                   <div className="summary-label">Present Days</div>
// // //                   <div className="summary-value">{attendance.filter(a => a.status === 'present').length}</div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {attendance.length === 0 ? (
// // //               <div className="empty-state">
// // //                 <h3>No attendance records found</h3>
// // //                 <p>No attendance records match your current filters.</p>
// // //               </div>
// // //             ) : (
// // //               <div className="table-container">
// // //                 <table className="attendance-table">
// // //                   <thead>
// // //                     <tr>
// // //                       <th>Date</th>
// // //                       <th>Check In</th>
// // //                       <th>Check Out</th>
// // //                       <th>Total Hours</th>
// // //                       <th>Status</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {attendance.map((record) => (
// // //                       <tr key={record.id}>
// // //                         <td>{formatDate(record.date)}</td>
// // //                         <td>{record.check_in ? formatTime(record.check_in) : 'N/A'}</td>
// // //                         <td>{record.check_out ? formatTime(record.check_out) : 'N/A'}</td>
// // //                         <td>{record.total_hours ? record.total_hours.toFixed(2) : 'N/A'}</td>
// // //                         <td>{getStatusBadge(record.status)}</td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             )}
// // //           </div>
// // //         ) : (
// // //           <div className="leave-requests-container">
// // //             <h2 className="section-title">My Leave Requests</h2>
            
// // //             {leaveRequests.length === 0 ? (
// // //               <div className="empty-state">
// // //                 <h3>No leave requests found</h3>
// // //                 <p>You haven't submitted any leave requests yet.</p>
// // //               </div>
// // //             ) : (
// // //               <div className="leave-grid">
// // //                 {leaveRequests.map((request) => (
// // //                   <div key={request.id} className="leave-card">
// // //                     <div className="leave-header">
// // //                       <div>
// // //                         <h4 className="leave-type">{request.leave_type}</h4>
// // //                         <p className="leave-dates">
// // //                           {formatDate(request.start_date)} to {formatDate(request.end_date)}
// // //                         </p>
// // //                       </div>
// // //                       {getLeaveStatusBadge(request.status)}
// // //                     </div>
// // //                     <div className="leave-details">
// // //                       <p><strong>Reason:</strong> {request.reason}</p>
// // //                       <p><strong>Submitted:</strong> {formatDate(request.created_at)}</p>
// // //                       {request.comments && (
// // //                         <p><strong>Admin Comments:</strong> {request.comments}</p>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {showLeaveModal && (
// // //         <RequestLeaveModal
// // //           onClose={() => setShowLeaveModal(false)}
// // //           onSave={handleRequestLeave}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // // Request Leave Modal Component
// // // function RequestLeaveModal({ onClose, onSave }) {
// // //   const [formData, setFormData] = useState({
// // //     leave_type: 'sick',
// // //     start_date: '',
// // //     end_date: '',
// // //     reason: ''
// // //   });
// // //   const [loading, setLoading] = useState(false);

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
    
// // //     if (!formData.start_date || !formData.end_date || !formData.reason) {
// // //       alert('Please fill in all required fields');
// // //       return;
// // //     }

// // //     if (new Date(formData.start_date) > new Date(formData.end_date)) {
// // //       alert('End date cannot be before start date');
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     await onSave(formData);
// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <div className="modal-overlay" onClick={onClose}>
// // //       <div className="modal-box" onClick={(e) => e.stopPropagation()}>
// // //         <button onClick={onClose} className="close-btn">×</button>
// // //         <div className="modal-header">
// // //           <h2 className="modal-title">Request Leave</h2>
// // //         </div>

// // //         <form onSubmit={handleSubmit}>
// // //           <div className="form-group">
// // //             <label className="form-label">Leave Type *</label>
// // //             <select
// // //               name="leave_type"
// // //               value={formData.leave_type}
// // //               onChange={handleChange}
// // //               className="form-select"
// // //               required
// // //             >
// // //               <option value="sick">Sick Leave</option>
// // //               <option value="casual">Casual Leave</option>
// // //               <option value="annual">Annual Leave</option>
// // //               <option value="emergency">Emergency Leave</option>
// // //               <option value="maternity">Maternity Leave</option>
// // //               <option value="paternity">Paternity Leave</option>
// // //               <option value="other">Other</option>
// // //             </select>
// // //           </div>

// // //           <div className="form-row">
// // //             <div className="form-group">
// // //               <label className="form-label">Start Date *</label>
// // //               <input
// // //                 type="date"
// // //                 name="start_date"
// // //                 value={formData.start_date}
// // //                 onChange={handleChange}
// // //                 min={new Date().toISOString().split('T')[0]}
// // //                 className="form-input"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label className="form-label">End Date *</label>
// // //               <input
// // //                 type="date"
// // //                 name="end_date"
// // //                 value={formData.end_date}
// // //                 onChange={handleChange}
// // //                 min={formData.start_date || new Date().toISOString().split('T')[0]}
// // //                 className="form-input"
// // //                 required
// // //               />
// // //             </div>
// // //           </div>

// // //           <div className="form-group">
// // //             <label className="form-label">Reason *</label>
// // //             <textarea
// // //               name="reason"
// // //               value={formData.reason}
// // //               onChange={handleChange}
// // //               placeholder="Please provide a reason for your leave request..."
// // //               className="form-textarea"
// // //               rows="4"
// // //               required
// // //             />
// // //           </div>

// // //           <div className="modal-actions">
// // //             <button type="button" onClick={onClose} className="btn-outline">Cancel</button>
// // //             <button type="submit" disabled={loading} className="btn-primary">
// // //               {loading ? 'Submitting...' : 'Submit Request'}
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default LabTechnicianAttendance;
























// // // src/pages/lab-technician/Attendance.jsx
// // import React, { useState, useEffect } from 'react';
// // import staffService from '../../services/staffService';

// // function LabTechnicianAttendance() {
// //   const [attendance, setAttendance] = useState([]);
// //   const [leaveRequests, setLeaveRequests] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeTab, setActiveTab] = useState('attendance');
// //   const [showLeaveModal, setShowLeaveModal] = useState(false);
// //   const [filters, setFilters] = useState({
// //     start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
// //     end_date: new Date().toISOString().split('T')[0]
// //   });

// //   useEffect(() => {
// //     if (activeTab === 'attendance') {
// //       fetchAttendance();
// //     } else {
// //       fetchLeaveRequests();
// //     }
// //   }, [activeTab, filters]);

// //   const fetchAttendance = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await staffService.getAttendanceHistory(filters);
// //       setAttendance(response.attendance || []);
// //     } catch (error) {
// //       setError('Failed to fetch attendance history');
// //       console.error('Error fetching attendance:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchLeaveRequests = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await staffService.getLeaveRequests();
// //       setLeaveRequests(response.leave_requests || []);
// //     } catch (error) {
// //       setError('Failed to fetch leave requests');
// //       console.error('Error fetching leave requests:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleCheckIn = async () => {
// //     try {
// //       await staffService.checkIn();
// //       alert('Checked in successfully');
// //       fetchAttendance();
// //     } catch (error) {
// //       alert('Failed to check in');
// //       console.error('Error checking in:', error);
// //     }
// //   };

// //   const handleCheckOut = async () => {
// //     try {
// //       await staffService.checkOut();
// //       alert('Checked out successfully');
// //       fetchAttendance();
// //     } catch (error) {
// //       alert('Failed to check out');
// //       console.error('Error checking out:', error);
// //     }
// //   };

// //   const handleRequestLeave = async (leaveData) => {
// //     try {
// //       await staffService.requestLeave(leaveData);
// //       alert('Leave request submitted successfully');
// //       setShowLeaveModal(false);
// //       fetchLeaveRequests();
// //     } catch (error) {
// //       alert('Failed to submit leave request');
// //       console.error('Error submitting leave request:', error);
// //     }
// //   };

// //   const handleFilterChange = (e) => {
// //     setFilters({
// //       ...filters,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric'
// //     });
// //   };

// //   const formatTime = (dateString) => {
// //     return new Date(dateString).toLocaleTimeString('en-US', {
// //       hour: '2-digit',
// //       minute: '2-digit'
// //     });
// //   };

// //   const getTodayAttendance = () => {
// //     const today = new Date().toISOString().split('T')[0];
// //     return attendance.find(record => record.date === today);
// //   };

// //   const calculateTotalHours = (attendance) => {
// //     return attendance.reduce((total, record) => {
// //       return total + (record.total_hours || 0);
// //     }, 0);
// //   };

// //   const getStatusBadge = (status) => {
// //     const statusConfig = {
// //       present: { label: 'Present', className: 'status-badge-success' },
// //       absent: { label: 'Absent', className: 'status-badge-error' },
// //       late: { label: 'Late', className: 'status-badge-warning' },
// //       half_day: { label: 'Half Day', className: 'status-badge-info' }
// //     };
    
// //     const config = statusConfig[status] || { label: status, className: 'status-badge-default' };
// //     return (
// //       <span className={`status-badge ${config.className}`}>
// //         <span className="status-dot"></span>
// //         {config.label}
// //       </span>
// //     );
// //   };

// //   const getLeaveStatusBadge = (status) => {
// //     const statusConfig = {
// //       approved: { label: 'Approved', className: 'status-badge-success' },
// //       pending: { label: 'Pending', className: 'status-badge-warning' },
// //       rejected: { label: 'Rejected', className: 'status-badge-error' }
// //     };
    
// //     const config = statusConfig[status] || { label: status, className: 'status-badge-default' };
// //     return (
// //       <span className={`status-badge ${config.className}`}>
// //         <span className="status-dot"></span>
// //         {config.label}
// //       </span>
// //     );
// //   };

// //   if (loading) {
// //     return (
// //       <div className="loading-container">
// //         <div className="loading-spinner"></div>
// //         <p className="loading-text">Loading attendance data...</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="attendance-page">
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

// //         .attendance-page {
// //           min-height: 100vh;
// //           background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
// //           padding: 2rem;
// //           font-family: 'Outfit', sans-serif;
// //           position: relative;
// //         }

// //         .attendance-page::before {
// //           content: '';
// //           position: fixed;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           background: 
// //             radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.04) 0%, transparent 50%),
// //             radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.04) 0%, transparent 50%),
// //             radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
// //           pointer-events: none;
// //           z-index: 0;
// //         }

// //         .attendance-page > * {
// //           position: relative;
// //           z-index: 1;
// //         }

// //         /* Header Section */
// //         .header-section {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: flex-start;
// //           margin-bottom: 2.5rem;
// //           animation: slideDown 0.6s ease-out;
// //           flex-wrap: wrap;
// //           gap: 1rem;
// //         }

// //         @keyframes slideDown {
// //           from {
// //             opacity: 0;
// //             transform: translateY(-20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         .page-title {
// //           font-size: 2.25rem;
// //           font-weight: 700;
// //           background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           background-clip: text;
// //           letter-spacing: -0.02em;
// //           margin: 0;
// //         }

// //         .header-actions {
// //           display: flex;
// //           gap: 0.75rem;
// //           flex-wrap: wrap;
// //         }

// //         .action-btn {
// //           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
// //           color: white;
// //           border: none;
// //           padding: 0.875rem 1.75rem;
// //           border-radius: 12px;
// //           font-weight: 600;
// //           font-size: 0.95rem;
// //           cursor: pointer;
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //           box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .action-btn::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: -100%;
// //           width: 100%;
// //           height: 100%;
// //           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
// //           transition: left 0.5s;
// //         }

// //         .action-btn:hover::before {
// //           left: 100%;
// //         }

// //         .action-btn:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
// //         }

// //         .action-btn-secondary {
// //           background: linear-gradient(135deg, #64748b 0%, #475569 100%);
// //           box-shadow: 0 4px 12px rgba(100, 116, 139, 0.2);
// //         }

// //         .action-btn-secondary:hover {
// //           box-shadow: 0 6px 20px rgba(100, 116, 139, 0.3);
// //         }

// //         /* Tabs */
// //         .tabs-container {
// //           margin-bottom: 2rem;
// //           animation: fadeIn 0.6s ease-out 0.1s backwards;
// //         }

// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //             transform: translateY(10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         .tabs-wrapper {
// //           display: inline-flex;
// //           background: rgba(255, 255, 255, 0.7);
// //           backdrop-filter: blur(10px);
// //           border-radius: 16px;
// //           padding: 6px;
// //           gap: 6px;
// //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// //           border: 1px solid rgba(0, 0, 0, 0.06);
// //         }

// //         .tab-button {
// //           padding: 0.75rem 1.75rem;
// //           border: none;
// //           background: transparent;
// //           color: #6b7280;
// //           font-weight: 600;
// //           font-size: 0.95rem;
// //           cursor: pointer;
// //           border-radius: 12px;
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //         }

// //         .tab-button.active {
// //           background: white;
// //           color: #1f2937;
// //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
// //         }

// //         .tab-button:hover:not(.active) {
// //           color: #1f2937;
// //           background: rgba(255, 255, 255, 0.5);
// //         }

// //         /* Alert */
// //         .alert-error {
// //           background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
// //           border: 1px solid #fecaca;
// //           color: #991b1b;
// //           padding: 1rem 1.25rem;
// //           border-radius: 12px;
// //           margin-bottom: 1.5rem;
// //           animation: slideIn 0.4s ease-out;
// //           font-weight: 500;
// //         }

// //         @keyframes slideIn {
// //           from {
// //             opacity: 0;
// //             transform: translateX(-20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }

// //         /* Today's Status Card */
// //         .today-section {
// //           margin-bottom: 2rem;
// //           animation: fadeIn 0.6s ease-out 0.2s backwards;
// //         }

// //         .section-title {
// //           font-size: 1.5rem;
// //           font-weight: 700;
// //           color: #1f2937;
// //           margin: 0 0 1rem 0;
// //         }

// //         .today-card {
// //           background: white;
// //           border-radius: 16px;
// //           padding: 2rem;
// //           border: 1px solid #e5e7eb;
// //           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
// //           animation: cardSlideUp 0.5s ease-out backwards;
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         @keyframes cardSlideUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         .today-card::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           height: 4px;
// //           background: linear-gradient(90deg, #10b981 0%, #059669 100%);
// //         }

// //         .today-card-content {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           gap: 1.5rem;
// //           flex-wrap: wrap;
// //         }

// //         .today-info h4 {
// //           font-size: 1.25rem;
// //           font-weight: 600;
// //           color: #1f2937;
// //           margin: 0 0 0.75rem 0;
// //         }

// //         .today-info p {
// //           margin: 0.5rem 0;
// //           color: #6b7280;
// //           font-size: 0.95rem;
// //         }

// //         .today-info p strong {
// //           color: #374151;
// //           font-weight: 600;
// //         }

// //         .not-checked-in-card {
// //           text-align: center;
// //           padding: 2.5rem;
// //         }

// //         .not-checked-in-card p {
// //           color: #6b7280;
// //           font-size: 1.05rem;
// //           margin-bottom: 1.5rem;
// //         }

// //         .check-in-now-btn {
// //           background: linear-gradient(135deg, #10b981 0%, #059669 100%);
// //           color: white;
// //           border: none;
// //           padding: 1rem 2rem;
// //           border-radius: 12px;
// //           font-weight: 600;
// //           font-size: 1rem;
// //           cursor: pointer;
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //           box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
// //         }

// //         .check-in-now-btn:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
// //         }

// //         /* Status Badge */
// //         .status-badge {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 0.4rem;
// //           padding: 0.5rem 1rem;
// //           border-radius: 20px;
// //           font-size: 0.85rem;
// //           font-weight: 600;
// //           white-space: nowrap;
// //         }

// //         .status-dot {
// //           width: 6px;
// //           height: 6px;
// //           border-radius: 50%;
// //           animation: dotPulse 2s ease-in-out infinite;
// //         }

// //         @keyframes dotPulse {
// //           0%, 100% {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //           50% {
// //             opacity: 0.5;
// //             transform: scale(1.2);
// //           }
// //         }

// //         .status-badge-success {
// //           background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
// //           color: #16a34a;
// //           border: 1px solid #bbf7d0;
// //         }

// //         .status-badge-success .status-dot {
// //           background: #16a34a;
// //         }

// //         .status-badge-error {
// //           background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
// //           color: #dc2626;
// //           border: 1px solid #fecaca;
// //         }

// //         .status-badge-error .status-dot {
// //           background: #dc2626;
// //         }

// //         .status-badge-warning {
// //           background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
// //           color: #d97706;
// //           border: 1px solid #fde68a;
// //         }

// //         .status-badge-warning .status-dot {
// //           background: #d97706;
// //         }

// //         .status-badge-info {
// //           background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
// //           color: #2563eb;
// //           border: 1px solid #bfdbfe;
// //         }

// //         .status-badge-info .status-dot {
// //           background: #2563eb;
// //         }

// //         .status-badge-default {
// //           background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
// //           color: #6b7280;
// //           border: 1px solid #e5e7eb;
// //         }

// //         .status-badge-default .status-dot {
// //           background: #6b7280;
// //         }

// //         /* Filters */
// //         .filters-section {
// //           display: flex;
// //           gap: 1.25rem;
// //           margin-bottom: 2rem;
// //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// //           flex-wrap: wrap;
// //         }

// //         .filter-group {
// //           display: flex;
// //           flex-direction: column;
// //         }

// //         .filter-label {
// //           font-size: 0.875rem;
// //           font-weight: 600;
// //           color: #374151;
// //           margin-bottom: 0.5rem;
// //         }

// //         .filter-input {
// //           background: white;
// //           border: 1.5px solid #e5e7eb;
// //           padding: 0.875rem 1.125rem;
// //           border-radius: 12px;
// //           font-size: 0.95rem;
// //           font-weight: 400;
// //           color: #374151;
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //           font-family: 'Outfit', sans-serif;
// //         }

// //         .filter-input:focus {
// //           outline: none;
// //           border-color: #6366f1;
// //           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
// //         }

// //         /* Summary Cards */
// //         .summary-section {
// //           margin-bottom: 2rem;
// //           animation: fadeIn 0.6s ease-out 0.4s backwards;
// //         }

// //         .summary-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// //           gap: 1.25rem;
// //         }

// //         .summary-card {
// //           background: white;
// //           border-radius: 16px;
// //           padding: 1.75rem;
// //           border: 1px solid #e5e7eb;
// //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //           animation: cardSlideUp 0.5s ease-out backwards;
// //         }

// //         .summary-card:nth-child(1) { animation-delay: 0.05s; }
// //         .summary-card:nth-child(2) { animation-delay: 0.1s; }
// //         .summary-card:nth-child(3) { animation-delay: 0.15s; }

// //         .summary-card:hover {
// //           transform: translateY(-4px);
// //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
// //         }

// //         .summary-label {
// //           font-size: 0.875rem;
// //           color: #6b7280;
// //           font-weight: 500;
// //           margin-bottom: 0.5rem;
// //         }

// //         .summary-value {
// //           font-size: 2rem;
// //           font-weight: 700;
// //           color: #1f2937;
// //           font-family: 'Space Mono', monospace;
// //         }

// //         /* Table */
// //         .table-container {
// //           background: white;
// //           border-radius: 16px;
// //           padding: 1.5rem;
// //           border: 1px solid #e5e7eb;
// //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// //           overflow-x: auto;
// //           animation: fadeIn 0.6s ease-out 0.5s backwards;
// //         }

// //         .attendance-table {
// //           width: 100%;
// //           border-collapse: separate;
// //           border-spacing: 0;
// //         }

// //         .attendance-table thead th {
// //           background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
// //           padding: 1rem 1.25rem;
// //           text-align: left;
// //           font-weight: 600;
// //           color: #374151;
// //           font-size: 0.875rem;
// //           text-transform: uppercase;
// //           letter-spacing: 0.05em;
// //           border-bottom: 2px solid #e5e7eb;
// //         }

// //         .attendance-table thead th:first-child {
// //           border-top-left-radius: 12px;
// //         }

// //         .attendance-table thead th:last-child {
// //           border-top-right-radius: 12px;
// //         }

// //         .attendance-table tbody tr {
// //           transition: all 0.2s;
// //         }

// //         .attendance-table tbody tr:hover {
// //           background: #f9fafb;
// //         }

// //         .attendance-table tbody td {
// //           padding: 1rem 1.25rem;
// //           border-bottom: 1px solid #f3f4f6;
// //           color: #374151;
// //           font-size: 0.95rem;
// //         }

// //         .attendance-table tbody tr:last-child td {
// //           border-bottom: none;
// //         }

// //         /* Leave Requests */
// //         .leave-requests-container {
// //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// //         }

// //         .leave-grid {
// //           display: grid;
// //           gap: 1.25rem;
// //         }

// //         .leave-card {
// //           background: white;
// //           border-radius: 16px;
// //           padding: 1.75rem;
// //           border: 1px solid #e5e7eb;
// //           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //           animation: cardSlideUp 0.5s ease-out backwards;
// //         }

// //         .leave-card:nth-child(1) { animation-delay: 0.05s; }
// //         .leave-card:nth-child(2) { animation-delay: 0.1s; }
// //         .leave-card:nth-child(3) { animation-delay: 0.15s; }
// //         .leave-card:nth-child(n+4) { animation-delay: 0.2s; }

// //         .leave-card:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
// //         }

// //         .leave-header {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: flex-start;
// //           margin-bottom: 1.25rem;
// //           gap: 1rem;
// //         }

// //         .leave-type {
// //           font-size: 1.25rem;
// //           font-weight: 600;
// //           color: #1f2937;
// //           margin: 0 0 0.5rem 0;
// //         }

// //         .leave-dates {
// //           font-size: 0.875rem;
// //           color: #6b7280;
// //         }

// //         .leave-details p {
// //           margin: 0.75rem 0;
// //           color: #374151;
// //           font-size: 0.95rem;
// //         }

// //         .leave-details strong {
// //           color: #1f2937;
// //           font-weight: 600;
// //         }

// //         /* Empty State */
// //         .empty-state {
// //           text-align: center;
// //           padding: 4rem 2rem;
// //           animation: fadeIn 0.6s ease-out 0.3s backwards;
// //         }

// //         .empty-state h3 {
// //           font-size: 1.5rem;
// //           font-weight: 600;
// //           color: #1f2937;
// //           margin: 0 0 0.5rem 0;
// //         }

// //         .empty-state p {
// //           color: #6b7280;
// //           font-size: 1rem;
// //           margin: 0;
// //         }

// //         /* Loading State */
// //         .loading-container {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           justify-content: center;
// //           min-height: 100vh;
// //           background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
// //         }

// //         .loading-spinner {
// //           width: 60px;
// //           height: 60px;
// //           border: 4px solid #e5e7eb;
// //           border-top-color: #6366f1;
// //           border-radius: 50%;
// //           animation: spin 1s linear infinite;
// //         }

// //         @keyframes spin {
// //           to {
// //             transform: rotate(360deg);
// //           }
// //         }

// //         .loading-text {
// //           margin-top: 1.5rem;
// //           color: #6b7280;
// //           font-size: 1rem;
// //           font-weight: 500;
// //         }

// //         /* Modal */
// //         .modal-overlay {
// //           position: fixed;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           background: rgba(0, 0, 0, 0.5);
// //           backdrop-filter: blur(4px);
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           z-index: 9999;
// //           animation: fadeIn 0.3s ease-out;
// //         }

// //         .modal-box {
// //           background: white;
// //           border-radius: 20px;
// //           padding: 2rem;
// //           width: 90%;
// //           max-width: 600px;
// //           max-height: 90vh;
// //           overflow-y: auto;
// //           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
// //           animation: modalSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
// //           position: relative;
// //           z-index: 10000;
// //         }

// //         @keyframes modalSlideUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(40px) scale(0.95);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0) scale(1);
// //           }
// //         }

// //         .modal-header {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           margin-bottom: 1.75rem;
// //         }

// //         .modal-title {
// //           font-size: 1.75rem;
// //           font-weight: 700;
// //           color: #1f2937;
// //           margin: 0;
// //         }

// //         .close-btn {
// //           width: 40px;
// //           height: 40px;
// //           border-radius: 10px;
// //           border: none;
// //           background: #f3f4f6;
// //           color: #6b7280;
// //           font-size: 1.5rem;
// //           cursor: pointer;
// //           transition: all 0.2s;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           position: absolute;
// //           right: 1.5rem;
// //           top: 1.5rem;
// //         }

// //         .close-btn:hover {
// //           background: #e5e7eb;
// //           color: #1f2937;
// //         }

// //         /* Form Elements */
// //         .form-group {
// //           display: flex;
// //           flex-direction: column;
// //           margin-bottom: 1.25rem;
// //         }

// //         .form-label {
// //           font-size: 0.875rem;
// //           font-weight: 600;
// //           color: #374151;
// //           margin-bottom: 0.5rem;
// //         }

// //         .form-input,
// //         .form-select,
// //         .form-textarea {
// //           background: #f9fafb;
// //           border: 1.5px solid #e5e7eb;
// //           padding: 0.875rem 1rem;
// //           border-radius: 10px;
// //           font-size: 0.95rem;
// //           font-family: 'Outfit', sans-serif;
// //           color: #1f2937;
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //         }

// //         .form-input:focus,
// //         .form-select:focus,
// //         .form-textarea:focus {
// //           outline: none;
// //           border-color: #6366f1;
// //           box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
// //           background: white;
// //         }

// //         .form-row {
// //           display: flex;
// //           gap: 1rem;
// //         }

// //         .form-row .form-group {
// //           flex: 1;
// //         }

// //         .modal-actions {
// //           display: flex;
// //           justify-content: flex-end;
// //           gap: 1rem;
// //           margin-top: 1.75rem;
// //           padding-top: 1.75rem;
// //           border-top: 1px solid #e5e7eb;
// //         }

// //         .btn-outline {
// //           background: white;
// //           border: 1.5px solid #e5e7eb;
// //           color: #6b7280;
// //           padding: 0.875rem 1.5rem;
// //           border-radius: 10px;
// //           font-weight: 600;
// //           font-size: 0.95rem;
// //           cursor: pointer;
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //         }

// //         .btn-outline:hover {
// //           background: #f9fafb;
// //           border-color: #d1d5db;
// //           color: #374151;
// //         }

// //         .btn-primary {
// //           background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
// //           border: none;
// //           color: white;
// //           padding: 0.875rem 1.5rem;
// //           border-radius: 10px;
// //           font-weight: 600;
// //           font-size: 0.95rem;
// //           cursor: pointer;
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //         }

// //         .btn-primary:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
// //         }

// //         .btn-primary:disabled {
// //           opacity: 0.6;
// //           cursor: not-allowed;
// //           transform: none;
// //         }

// //         /* Responsive */
// //         @media (max-width: 768px) {
// //           .attendance-page {
// //             padding: 1rem;
// //           }

// //           .page-title {
// //             font-size: 1.75rem;
// //           }

// //           .header-section {
// //             flex-direction: column;
// //             align-items: flex-start;
// //           }

// //           .header-actions {
// //             width: 100%;
// //           }

// //           .action-btn {
// //             flex: 1;
// //           }

// //           .summary-grid {
// //             grid-template-columns: 1fr;
// //           }

// //           .form-row {
// //             flex-direction: column;
// //           }

// //           .table-container {
// //             padding: 1rem;
// //           }

// //           .attendance-table {
// //             font-size: 0.85rem;
// //           }

// //           .attendance-table thead th,
// //           .attendance-table tbody td {
// //             padding: 0.75rem;
// //           }
// //         }

// //         /* Scrollbar Styling */
// //         .modal-box::-webkit-scrollbar {
// //           width: 8px;
// //         }

// //         .modal-box::-webkit-scrollbar-track {
// //           background: #f3f4f6;
// //           border-radius: 10px;
// //         }

// //         .modal-box::-webkit-scrollbar-thumb {
// //           background: #d1d5db;
// //           border-radius: 10px;
// //         }

// //         .modal-box::-webkit-scrollbar-thumb:hover {
// //           background: #9ca3af;
// //         }
// //       `}</style>

// //       <div className="header-section">
// //         <h1 className="page-title">Attendance & Leave Management</h1>
// //         <div className="header-actions">
// //           {activeTab === 'attendance' && (
// //             <>
// //               <button onClick={handleCheckIn} className="action-btn">Check In</button>
// //               <button onClick={handleCheckOut} className="action-btn action-btn-secondary">Check Out</button>
// //             </>
// //           )}
// //           {activeTab === 'leave' && (
// //             <button onClick={() => setShowLeaveModal(true)} className="action-btn">
// //               Request Leave
// //             </button>
// //           )}
// //         </div>
// //       </div>

// //       <div className="tabs-container">
// //         <div className="tabs-wrapper">
// //           <button 
// //             className={`tab-button ${activeTab === 'attendance' ? 'active' : ''}`}
// //             onClick={() => setActiveTab('attendance')}
// //           >
// //             Attendance
// //           </button>
// //           <button 
// //             className={`tab-button ${activeTab === 'leave' ? 'active' : ''}`}
// //             onClick={() => setActiveTab('leave')}
// //           >
// //             Leave Requests
// //           </button>
// //         </div>
// //       </div>

// //       {error && <div className="alert-error">{error}</div>}

// //       <div>
// //         {activeTab === 'attendance' ? (
// //           <div>
// //             <div className="today-section">
// //               <h3 className="section-title">Today's Status</h3>
// //               {getTodayAttendance() ? (
// //                 <div className="today-card">
// //                   <div className="today-card-content">
// //                     <div className="today-info">
// //                       <h4>Checked In</h4>
// //                       <p><strong>Time:</strong> {formatTime(getTodayAttendance().check_in)}</p>
// //                       {getTodayAttendance().check_out && (
// //                         <p><strong>Check Out:</strong> {formatTime(getTodayAttendance().check_out)}</p>
// //                       )}
// //                       {getTodayAttendance().total_hours && (
// //                         <p><strong>Total Hours:</strong> {getTodayAttendance().total_hours.toFixed(2)}</p>
// //                       )}
// //                     </div>
// //                     {getStatusBadge(getTodayAttendance().status)}
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <div className="today-card not-checked-in-card">
// //                   <p>You haven't checked in today</p>
// //                   <button onClick={handleCheckIn} className="check-in-now-btn">Check In Now</button>
// //                 </div>
// //               )}
// //             </div>

// //             <div className="filters-section">
// //               <div className="filter-group">
// //                 <label className="filter-label">Start Date:</label>
// //                 <input
// //                   type="date"
// //                   name="start_date"
// //                   value={filters.start_date}
// //                   onChange={handleFilterChange}
// //                   className="filter-input"
// //                 />
// //               </div>
// //               <div className="filter-group">
// //                 <label className="filter-label">End Date:</label>
// //                 <input
// //                   type="date"
// //                   name="end_date"
// //                   value={filters.end_date}
// //                   onChange={handleFilterChange}
// //                   className="filter-input"
// //                 />
// //               </div>
// //             </div>

// //             <div className="summary-section">
// //               <h3 className="section-title">Attendance History</h3>
// //               <div className="summary-grid">
// //                 <div className="summary-card">
// //                   <div className="summary-label">Total Days</div>
// //                   <div className="summary-value">{attendance.length}</div>
// //                 </div>
// //                 <div className="summary-card">
// //                   <div className="summary-label">Total Hours</div>
// //                   <div className="summary-value">{calculateTotalHours(attendance).toFixed(2)}</div>
// //                 </div>
// //                 <div className="summary-card">
// //                   <div className="summary-label">Present Days</div>
// //                   <div className="summary-value">{attendance.filter(a => a.status === 'present').length}</div>
// //                 </div>
// //               </div>
// //             </div>

// //             {attendance.length === 0 ? (
// //               <div className="empty-state">
// //                 <h3>No attendance records found</h3>
// //                 <p>No attendance records match your current filters.</p>
// //               </div>
// //             ) : (
// //               <div className="table-container">
// //                 <table className="attendance-table">
// //                   <thead>
// //                     <tr>
// //                       <th>Date</th>
// //                       <th>Check In</th>
// //                       <th>Check Out</th>
// //                       <th>Total Hours</th>
// //                       <th>Status</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {attendance.map((record) => (
// //                       <tr key={record.id}>
// //                         <td>{formatDate(record.date)}</td>
// //                         <td>{record.check_in ? formatTime(record.check_in) : 'N/A'}</td>
// //                         <td>{record.check_out ? formatTime(record.check_out) : 'N/A'}</td>
// //                         <td>{record.total_hours ? record.total_hours.toFixed(2) : 'N/A'}</td>
// //                         <td>{getStatusBadge(record.status)}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="leave-requests-container">
// //             <h2 className="section-title">My Leave Requests</h2>
            
// //             {leaveRequests.length === 0 ? (
// //               <div className="empty-state">
// //                 <h3>No leave requests found</h3>
// //                 <p>You haven't submitted any leave requests yet.</p>
// //               </div>
// //             ) : (
// //               <div className="leave-grid">
// //                 {leaveRequests.map((request) => (
// //                   <div key={request.id} className="leave-card">
// //                     <div className="leave-header">
// //                       <div>
// //                         <h4 className="leave-type">{request.leave_type}</h4>
// //                         <p className="leave-dates">
// //                           {formatDate(request.start_date)} to {formatDate(request.end_date)}
// //                         </p>
// //                       </div>
// //                       {getLeaveStatusBadge(request.status)}
// //                     </div>
// //                     <div className="leave-details">
// //                       <p><strong>Reason:</strong> {request.reason}</p>
// //                       <p><strong>Submitted:</strong> {formatDate(request.created_at)}</p>
// //                       {request.comments && (
// //                         <p><strong>Admin Comments:</strong> {request.comments}</p>
// //                       )}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>

// //       {showLeaveModal && (
// //         <RequestLeaveModal
// //           onClose={() => setShowLeaveModal(false)}
// //           onSave={handleRequestLeave}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // // Request Leave Modal Component
// // function RequestLeaveModal({ onClose, onSave }) {
// //   const [formData, setFormData] = useState({
// //     leave_type: 'sick',
// //     start_date: '',
// //     end_date: '',
// //     reason: ''
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
    
// //     if (!formData.start_date || !formData.end_date || !formData.reason) {
// //       alert('Please fill in all required fields');
// //       return;
// //     }

// //     if (new Date(formData.start_date) > new Date(formData.end_date)) {
// //       alert('End date cannot be before start date');
// //       return;
// //     }

// //     setLoading(true);
// //     await onSave(formData);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal-box">
// //         <button onClick={onClose} className="close-btn">×</button>
// //         <div className="modal-header">
// //           <h2 className="modal-title">Request Leave</h2>
// //         </div>

// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label className="form-label">Leave Type *</label>
// //             <select
// //               name="leave_type"
// //               value={formData.leave_type}
// //               onChange={handleChange}
// //               className="form-select"
// //               required
// //             >
// //               <option value="sick">Sick Leave</option>
// //               <option value="casual">Casual Leave</option>
// //               <option value="annual">Annual Leave</option>
// //               <option value="emergency">Emergency Leave</option>
// //               <option value="maternity">Maternity Leave</option>
// //               <option value="paternity">Paternity Leave</option>
// //               <option value="other">Other</option>
// //             </select>
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label className="form-label">Start Date *</label>
// //               <input
// //                 type="date"
// //                 name="start_date"
// //                 value={formData.start_date}
// //                 onChange={handleChange}
// //                 min={new Date().toISOString().split('T')[0]}
// //                 className="form-input"
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label className="form-label">End Date *</label>
// //               <input
// //                 type="date"
// //                 name="end_date"
// //                 value={formData.end_date}
// //                 onChange={handleChange}
// //                 min={formData.start_date || new Date().toISOString().split('T')[0]}
// //                 className="form-input"
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label className="form-label">Reason *</label>
// //             <textarea
// //               name="reason"
// //               value={formData.reason}
// //               onChange={handleChange}
// //               placeholder="Please provide a reason for your leave request..."
// //               className="form-textarea"
// //               rows="4"
// //               required
// //             />
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-outline">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Submitting...' : 'Submit Request'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default LabTechnicianAttendance;