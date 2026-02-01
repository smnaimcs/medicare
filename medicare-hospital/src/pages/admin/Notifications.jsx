// // // src/pages/admin/Notifications.jsx
// // import React, { useState, useEffect } from 'react';
// // import adminService from '../../services/adminService';

// // function AdminNotifications() {
// //   const [notifications, setNotifications] = useState([]);
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeTab, setActiveTab] = useState('send');
// //   const [showSendModal, setShowSendModal] = useState(false);

// //   useEffect(() => {
// //     fetchNotifications();
// //     fetchUsers();
// //   }, []);

// //   const fetchNotifications = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getNotifications();
// //       setNotifications(response.notifications || []);
// //     } catch (error) {
// //       setError('Failed to fetch notifications');
// //       console.error('Error fetching notifications:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchUsers = async () => {
// //     try {
// //       const response = await adminService.getUsers();
// //       setUsers(response.users || []);
// //     } catch (error) {
// //       console.error('Error fetching users:', error);
// //     }
// //   };

// //   const handleSendNotification = async (notificationData) => {
// //     try {
// //       await adminService.sendNotification(notificationData);
// //       alert('Notification sent successfully');
// //       setShowSendModal(false);
// //       fetchNotifications();
// //     } catch (error) {
// //       alert('Failed to send notification');
// //       console.error('Error sending notification:', error);
// //     }
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

// //   const getNotificationTypeBadge = (type) => {
// //     const typeColors = {
// //       appointment: 'status-confirmed',
// //       payment: 'status-completed',
// //       billing: 'status-pending',
// //       test_report: 'status-confirmed',
// //       admin: 'role-admin',
// //       system: 'role-admin'
// //     };
    
// //     return <span className={`status-badge ${typeColors[type] || ''}`}>{type}</span>;
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading notifications...</div>;
// //   }

// //   return (
// //     <div className="page-container">
// //       <div className="page-header">
// //         <h1>Notifications</h1>
// //         <button 
// //           onClick={() => setShowSendModal(true)}
// //           className="btn-primary"
// //         >
// //           Send Notification
// //         </button>
// //       </div>

// //       {/* Tabs */}
// //       <div className="tabs">
// //         <button 
// //           className={`tab ${activeTab === 'send' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('send')}
// //         >
// //           Send Notification
// //         </button>
// //         <button 
// //           className={`tab ${activeTab === 'history' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('history')}
// //         >
// //           Notification History
// //         </button>
// //       </div>

// //       {error && <div className="error-message">{error}</div>}

// //       <div className="tab-content">
// //         {activeTab === 'send' ? (
// //           <div className="send-notification">
// //             <div className="info-card">
// //               <h3>Send System Notifications</h3>
// //               <p>
// //                 Use this section to send important notifications to patients, doctors, or staff members. 
// //                 Notifications will appear in their dashboard and can be used for announcements, reminders, or alerts.
// //               </p>
// //             </div>

// //             <div className="notification-stats">
// //               <div className="stat-item">
// //                 <h4>Total Users</h4>
// //                 <p>{users.length}</p>
// //               </div>
// //               <div className="stat-item">
// //                 <h4>Recent Notifications</h4>
// //                 <p>{notifications.length}</p>
// //               </div>
// //             </div>

// //             <div className="quick-templates">
// //               <h4>Quick Templates</h4>
// //               <div className="templates-grid">
// //                 <div className="template-card">
// //                   <h5>System Maintenance</h5>
// //                   <p>Notify users about scheduled system maintenance</p>
// //                   <button 
// //                     onClick={() => setShowSendModal(true)}
// //                     className="btn-secondary"
// //                   >
// //                     Use Template
// //                   </button>
// //                 </div>
// //                 <div className="template-card">
// //                   <h5>Payment Reminder</h5>
// //                   <p>Send payment due reminders to patients</p>
// //                   <button 
// //                     onClick={() => setShowSendModal(true)}
// //                     className="btn-secondary"
// //                   >
// //                     Use Template
// //                   </button>
// //                 </div>
// //                 <div className="template-card">
// //                   <h5>Appointment Update</h5>
// //                   <p>Notify about appointment system changes</p>
// //                   <button 
// //                     onClick={() => setShowSendModal(true)}
// //                     className="btn-secondary"
// //                   >
// //                     Use Template
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="notification-history">
// //             <h2>Notification History</h2>
// //             {notifications.length === 0 ? (
// //               <div className="empty-state">
// //                 <h3>No notifications found</h3>
// //                 <p>No notifications have been sent yet.</p>
// //               </div>
// //             ) : (
// //               <div className="notifications-list">
// //                 {notifications.map((notification) => (
// //                   <div key={notification.id} className="notification-card">
// //                     <div className="notification-header">
// //                       <div>
// //                         <h3>{notification.title}</h3>
// //                         <p className="notification-receiver">
// //                           To: User #{notification.receiver_id}
// //                           {notification.sender && (
// //                             <span className="notification-sender">
// //                               From: {notification.sender.first_name} {notification.sender.last_name}
// //                             </span>
// //                           )}
// //                         </p>
// //                       </div>
// //                       {getNotificationTypeBadge(notification.notification_type)}
// //                     </div>
                    
// //                     <div className="notification-body">
// //                       <p>{notification.message}</p>
// //                     </div>

// //                     <div className="notification-footer">
// //                       <span className="notification-date">
// //                         {formatDate(notification.created_at)}
// //                       </span>
// //                       <span className={`read-status ${notification.is_read ? 'read' : 'unread'}`}>
// //                         {notification.is_read ? 'Read' : 'Unread'}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>

// //       {/* Send Notification Modal */}
// //       {showSendModal && (
// //         <SendNotificationModal
// //           users={users}
// //           onClose={() => setShowSendModal(false)}
// //           onSend={handleSendNotification}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // // Send Notification Modal Component
// // function SendNotificationModal({ users, onClose, onSend }) {
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     message: '',
// //     receiver_id: '',
// //     notification_type: 'admin'
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
    
// //     if (!formData.title || !formData.message) {
// //       alert('Please fill in all required fields');
// //       return;
// //     }

// //     setLoading(true);
// //     await onSend(formData);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal large-modal">
// //         <div className="modal-header">
// //           <h2>Send Notification</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>

// //         <form onSubmit={handleSubmit} className="notification-form">
// //           <div className="form-group">
// //             <label>Notification Type</label>
// //             <select
// //               name="notification_type"
// //               value={formData.notification_type}
// //               onChange={handleChange}
// //             >
// //               <option value="admin">Admin Notification</option>
// //               <option value="system">System Update</option>
// //               <option value="appointment">Appointment</option>
// //               <option value="billing">Billing</option>
// //               <option value="payment">Payment</option>
// //               <option value="test_report">Test Report</option>
// //             </select>
// //           </div>

// //           <div className="form-group">
// //             <label>Receiver (Optional)</label>
// //             <select
// //               name="receiver_id"
// //               value={formData.receiver_id}
// //               onChange={handleChange}
// //             >
// //               <option value="">All Users (Broadcast)</option>
// //               {users.map((user) => (
// //                 <option key={user.id} value={user.id}>
// //                   {user.first_name} {user.last_name} ({user.role})
// //                 </option>
// //               ))}
// //             </select>
// //             <small>Leave empty to send to all users</small>
// //           </div>

// //           <div className="form-group">
// //             <label>Title *</label>
// //             <input
// //               type="text"
// //               name="title"
// //               value={formData.title}
// //               onChange={handleChange}
// //               placeholder="Enter notification title..."
// //               required
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Message *</label>
// //             <textarea
// //               name="message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               placeholder="Enter notification message..."
// //               rows="6"
// //               required
// //             />
// //           </div>

// //           <div className="notification-preview">
// //             <h4>Preview</h4>
// //             <div className="preview-card">
// //               <div className="preview-header">
// //                 <strong>{formData.title || 'Notification Title'}</strong>
// //               </div>
// //               <div className="preview-body">
// //                 <p>{formData.message || 'Notification message will appear here...'}</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Sending...' : 'Send Notification'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminNotifications;












// // src/pages/admin/Notifications.jsx
// import React, { useState, useEffect } from 'react';
// import adminService from '../../services/adminService';

// function AdminNotifications() {
//   const [notifications, setNotifications] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activeTab, setActiveTab] = useState('send');
//   const [showSendModal, setShowSendModal] = useState(false);

//   useEffect(() => {
//     fetchNotifications();
//     fetchUsers();
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       setLoading(true);
//       const response = await adminService.getNotifications();
//       setNotifications(response.notifications || []);
//     } catch (error) {
//       setError('Failed to fetch notifications');
//       console.error('Error fetching notifications:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await adminService.getUsers();
//       setUsers(response.users || []);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleSendNotification = async (notificationData) => {
//     try {
//       await adminService.sendNotification(notificationData);
//       alert('Notification sent successfully');
//       setShowSendModal(false);
//       fetchNotifications();
//     } catch (error) {
//       alert('Failed to send notification');
//       console.error('Error sending notification:', error);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const getNotificationTypeBadge = (type) => {
//     const typeColors = {
//       appointment: 'badge-success',
//       payment: 'badge-primary',
//       billing: 'badge-warning',
//       test_report: 'badge-info',
//       admin: 'badge-error',
//       system: 'badge-error'
//     };
    
//     return <span className={`badge ${typeColors[type] || 'badge-outline'}`}>{type}</span>;
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen text-gray-500">Loading notifications...</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Notifications</h1>
//         <button 
//           onClick={() => setShowSendModal(true)}
//           className="btn btn-primary"
//         >
//           Send Notification
//         </button>
//       </div>

//       {/* Tabs */}
//       <div className="tabs mb-6">
//         <button 
//           className={`tab tab-lg ${activeTab === 'send' ? 'tab-active' : ''}`}
//           onClick={() => setActiveTab('send')}
//         >
//           Send Notification
//         </button>
//         <button 
//           className={`tab tab-lg ${activeTab === 'history' ? 'tab-active' : ''}`}
//           onClick={() => setActiveTab('history')}
//         >
//           Notification History
//         </button>
//       </div>

//       {error && <div className="alert alert-error mb-4">{error}</div>}

//       <div>
//         {activeTab === 'send' ? (
//           <div className="space-y-6">
//             <div className="card bg-base-100 shadow-md p-6">
//               <h3 className="text-xl font-semibold mb-2">Send System Notifications</h3>
//               <p className="text-gray-600">
//                 Use this section to send important notifications to patients, doctors, or staff members. 
//                 Notifications will appear in their dashboard and can be used for announcements, reminders, or alerts.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="card bg-base-100 shadow-md p-4 text-center">
//                 <h4 className="text-lg font-medium">Total Users</h4>
//                 <p className="text-2xl font-bold">{users.length}</p>
//               </div>
//               <div className="card bg-base-100 shadow-md p-4 text-center">
//                 <h4 className="text-lg font-medium">Recent Notifications</h4>
//                 <p className="text-2xl font-bold">{notifications.length}</p>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-3">Quick Templates</h4>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {[
//                   { title: 'System Maintenance', desc: 'Notify users about scheduled system maintenance' },
//                   { title: 'Payment Reminder', desc: 'Send payment due reminders to patients' },
//                   { title: 'Appointment Update', desc: 'Notify about appointment system changes' }
//                 ].map((tpl) => (
//                   <div key={tpl.title} className="card bg-base-100 shadow-md p-4">
//                     <h5 className="font-semibold mb-1">{tpl.title}</h5>
//                     <p className="text-gray-600 mb-3">{tpl.desc}</p>
//                     <button 
//                       onClick={() => setShowSendModal(true)}
//                       className="btn btn-secondary btn-sm"
//                     >
//                       Use Template
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Notification History</h2>
//             {notifications.length === 0 ? (
//               <div className="text-center py-12">
//                 <h3 className="text-xl font-medium mb-2">No notifications found</h3>
//                 <p className="text-gray-500">No notifications have been sent yet.</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {notifications.map((notification) => (
//                   <div key={notification.id} className="card bg-base-100 shadow-md p-4">
//                     <div className="flex justify-between items-start mb-2">
//                       <div>
//                         <h3 className="font-semibold">{notification.title}</h3>
//                         <p className="text-gray-500 text-sm">
//                           To: User #{notification.receiver_id}
//                           {notification.sender && (
//                             <span className="ml-2 text-gray-700">
//                               From: {notification.sender.first_name} {notification.sender.last_name}
//                             </span>
//                           )}
//                         </p>
//                       </div>
//                       {getNotificationTypeBadge(notification.notification_type)}
//                     </div>
                    
//                     <p className="text-gray-700 mb-2">{notification.message}</p>

//                     <div className="flex justify-between text-sm text-gray-500">
//                       <span>{formatDate(notification.created_at)}</span>
//                       <span className={notification.is_read ? 'badge badge-success' : 'badge badge-outline'}>
//                         {notification.is_read ? 'Read' : 'Unread'}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Send Notification Modal */}
//       {showSendModal && (
//         <SendNotificationModal
//           users={users}
//           onClose={() => setShowSendModal(false)}
//           onSend={handleSendNotification}
//         />
//       )}
//     </div>
//   );
// }

// // Send Notification Modal Component
// function SendNotificationModal({ users, onClose, onSend }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     message: '',
//     receiver_id: '',
//     notification_type: 'admin'
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!formData.title || !formData.message) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     setLoading(true);
//     await onSend(formData);
//     setLoading(false);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//       <div className="modal modal-open modal-bottom sm:modal-middle bg-base-100 p-6 rounded-lg shadow-lg w-full max-w-3xl">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Send Notification</h2>
//           <button onClick={onClose} className="btn btn-circle btn-sm">×</button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="form-control w-full">
//             <label className="label">Notification Type</label>
//             <select
//               name="notification_type"
//               value={formData.notification_type}
//               onChange={handleChange}
//               className="select select-bordered w-full"
//             >
//               <option value="admin">Admin Notification</option>
//               <option value="system">System Update</option>
//               <option value="appointment">Appointment</option>
//               <option value="billing">Billing</option>
//               <option value="payment">Payment</option>
//               <option value="test_report">Test Report</option>
//             </select>
//           </div>

//           <div className="form-control w-full">
//             <label className="label">Receiver (Optional)</label>
//             <select
//               name="receiver_id"
//               value={formData.receiver_id}
//               onChange={handleChange}
//               className="select select-bordered w-full"
//             >
//               <option value="">All Users (Broadcast)</option>
//               {users.map((user) => (
//                 <option key={user.id} value={user.id}>
//                   {user.first_name} {user.last_name} ({user.role})
//                 </option>
//               ))}
//             </select>
//             <span className="label-text-alt">Leave empty to send to all users</span>
//           </div>

//           <div className="form-control w-full">
//             <label className="label">Title *</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="Enter notification title..."
//               className="input input-bordered w-full"
//               required
//             />
//           </div>

//           <div className="form-control w-full">
//             <label className="label">Message *</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Enter notification message..."
//               className="textarea textarea-bordered w-full"
//               rows="6"
//               required
//             />
//           </div>

//           <div className="card bg-base-200 p-4">
//             <h4 className="font-semibold mb-2">Preview</h4>
//             <div className="p-4 border rounded-lg bg-base-100">
//               <div className="font-bold mb-1">{formData.title || 'Notification Title'}</div>
//               <p>{formData.message || 'Notification message will appear here...'}</p>
//             </div>
//           </div>

//           <div className="flex justify-end gap-2 mt-2">
//             <button type="button" onClick={onClose} className="btn btn-outline">Cancel</button>
//             <button type="submit" disabled={loading} className="btn btn-primary">
//               {loading ? 'Sending...' : 'Send Notification'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AdminNotifications;


















// src/pages/admin/Notifications.jsx
import React, { useState, useEffect } from 'react';
import adminService from '../../services/adminService';

// Send Notification Modal Component
function SendNotificationModal({ users, onClose, onSend }) {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    receiver_id: '',
    notification_type: 'admin'
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    await onSend(formData);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Send Notification</h2>
            <p className="text-sm text-gray-500 mt-1">Compose and send notifications to users</p>
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
          {/* Notification Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Notification Type
            </label>
            <select
              name="notification_type"
              value={formData.notification_type}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
            >
              <option value="admin">Admin Notification</option>
              <option value="system">System Update</option>
              <option value="appointment">Appointment</option>
              <option value="billing">Billing</option>
              <option value="payment">Payment</option>
              <option value="test_report">Test Report</option>
            </select>
          </div>

          {/* Receiver */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Receiver (Optional)
            </label>
            <select
              name="receiver_id"
              value={formData.receiver_id}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
            >
              <option value="">All Users (Broadcast)</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.first_name} {user.last_name} ({user.role})
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-2">Leave empty to send to all users</p>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter notification title..."
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter notification message..."
              rows="6"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
              required
            />
          </div>

          {/* Preview */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-base text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview
            </h4>
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="font-bold text-gray-800 mb-1">
                {formData.title || 'Notification Title'}
              </div>
              <p className="text-gray-600 text-sm">
                {formData.message || 'Notification message will appear here...'}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Notification
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AdminNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('send');
  const [showSendModal, setShowSendModal] = useState(false);

  useEffect(() => {
    fetchNotifications();
    fetchUsers();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const response = await adminService.getNotifications();
      setNotifications(response.notifications || []);
    } catch (error) {
      setError('Failed to fetch notifications');
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await adminService.getUsers();
      setUsers(response.users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSendNotification = async (notificationData) => {
    try {
      await adminService.sendNotification(notificationData);
      alert('Notification sent successfully');
      setShowSendModal(false);
      fetchNotifications();
    } catch (error) {
      alert('Failed to send notification');
      console.error('Error sending notification:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getNotificationTypeBadge = (type) => {
    const typeColors = {
      appointment: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      payment: 'bg-blue-50 text-blue-700 border-blue-200',
      billing: 'bg-amber-50 text-amber-700 border-amber-200',
      test_report: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      admin: 'bg-purple-50 text-purple-700 border-purple-200',
      system: 'bg-red-50 text-red-700 border-red-200'
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full border ${typeColors[type] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
        {type.replace('_', ' ').toUpperCase()}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-600 mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading notifications...</p>
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

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }

          .animate-slideUp {
            animation: slideUp 0.4s ease-out;
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.5s ease-out;
          }

          .animate-scaleIn {
            animation: scaleIn 0.4s ease-out;
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Notifications
              </h1>
              <p className="text-gray-500 mt-1 text-sm">Manage and send system notifications to users</p>
            </div>

            <button
              onClick={() => setShowSendModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Notification
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-2 animate-slideUp">
          <div className="flex gap-2">
            <button
              className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === 'send'
                  ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('send')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Notification
            </button>
            <button
              className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === 'history'
                  ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('history')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Notification History
            </button>
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

        {/* Content */}
        <div>
          {activeTab === 'send' ? (
            <div className="space-y-6 animate-slideInLeft">
              {/* Info Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Send System Notifications</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Use this section to send important notifications to patients, doctors, or staff members. 
                      Notifications will appear in their dashboard and can be used for announcements, reminders, or alerts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 animate-scaleIn stagger-1">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                      <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Total Users</h4>
                      <p className="text-3xl font-bold text-gray-800 mt-1">{users.length}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 animate-scaleIn stagger-2">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                      <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Recent Notifications</h4>
                      <p className="text-3xl font-bold text-gray-800 mt-1">{notifications.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Templates */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Quick Templates</h4>
                    <p className="text-sm text-gray-500">Pre-configured notification templates</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'System Maintenance', desc: 'Notify users about scheduled system maintenance', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', color: 'from-red-100 to-red-200', textColor: 'text-red-600' },
                    { title: 'Payment Reminder', desc: 'Send payment due reminders to patients', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-green-100 to-green-200', textColor: 'text-green-600' },
                    { title: 'Appointment Update', desc: 'Notify about appointment system changes', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', color: 'from-blue-100 to-blue-200', textColor: 'text-blue-600' }
                  ].map((tpl, index) => (
                    <div
                      key={tpl.title}
                      className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-all duration-300 hover:border-gray-300 animate-scaleIn stagger-${index + 3}`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tpl.color} flex items-center justify-center mb-4`}>
                        <svg className={`w-6 h-6 ${tpl.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tpl.icon} />
                        </svg>
                      </div>
                      <h5 className="font-bold text-gray-800 mb-2">{tpl.title}</h5>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tpl.desc}</p>
                      <button
                        onClick={() => setShowSendModal(true)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Use Template
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-slideInLeft">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Notification History</h2>
                  <p className="text-sm text-gray-500">View all sent notifications</p>
                </div>
              </div>

              {notifications.length === 0 ? (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
                  <div className="text-center max-w-md mx-auto">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No notifications found</h3>
                    <p className="text-gray-500">No notifications have been sent yet.</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {notifications.map((notification, index) => (
                    <div
                      key={notification.id}
                      className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 animate-slideUp stagger-${Math.min(index + 1, 6)}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-800 text-lg mb-1">{notification.title}</h3>
                              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                                <span>To: User #{notification.receiver_id}</span>
                                {notification.sender && (
                                  <>
                                    <span>•</span>
                                    <span className="text-gray-700">
                                      From: {notification.sender.first_name} {notification.sender.last_name}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {getNotificationTypeBadge(notification.notification_type)}
                      </div>
                      
                      <p className="text-gray-700 mb-4 pl-13 leading-relaxed">{notification.message}</p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pl-13 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {formatDate(notification.created_at)}
                        </div>
                        <span className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full ${
                          notification.is_read 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}>
                          {notification.is_read ? 'Read' : 'Unread'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Send Notification Modal */}
      {showSendModal && (
        <SendNotificationModal
          users={users}
          onClose={() => setShowSendModal(false)}
          onSend={handleSendNotification}
        />
      )}
    </div>
  );
}

export default AdminNotifications;