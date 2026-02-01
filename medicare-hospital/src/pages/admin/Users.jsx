// // // src/pages/admin/Users.jsx
// // import React, { useState, useEffect } from 'react';
// // import adminService from '../../services/adminService';

// // function AdminUsers() {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [filters, setFilters] = useState({
// //     role: '',
// //     page: 1,
// //     per_page: 20
// //   });
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [showEditModal, setShowEditModal] = useState(false);
// //   const [showDeleteModal, setShowDeleteModal] = useState(false);

// //   useEffect(() => {
// //     fetchUsers();
// //   }, [filters]);

// //   const fetchUsers = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getUsers(filters);
// //       setUsers(response.users || []);
// //     } catch (error) {
// //       setError('Failed to fetch users');
// //       console.error('Error fetching users:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleEditUser = (user) => {
// //     setSelectedUser(user);
// //     setShowEditModal(true);
// //   };

// //   const handleDeleteUser = (user) => {
// //     setSelectedUser(user);
// //     setShowDeleteModal(true);
// //   };

// //   const handleUpdateUser = async (userData) => {
// //     try {
// //       await adminService.updateUser(selectedUser.id, userData);
// //       alert('User updated successfully');
// //       setShowEditModal(false);
// //       setSelectedUser(null);
// //       fetchUsers();
// //     } catch (error) {
// //       alert('Failed to update user');
// //       console.error('Error updating user:', error);
// //     }
// //   };

// //   const handleConfirmDelete = async () => {
// //     try {
// //       await adminService.deleteUser(selectedUser.id);
// //       alert('User deactivated successfully');
// //       setShowDeleteModal(false);
// //       setSelectedUser(null);
// //       fetchUsers();
// //     } catch (error) {
// //       alert('Failed to deactivate user');
// //       console.error('Error deleting user:', error);
// //     }
// //   };

// //   const handleFilterChange = (e) => {
// //     setFilters({
// //       ...filters,
// //       [e.target.name]: e.target.value,
// //       page: 1
// //     });
// //   };

// //   const getRoleBadge = (role) => {
// //     const roleColors = {
// //       admin: 'role-admin',
// //       doctor: 'role-doctor',
// //       patient: 'role-patient',
// //       staff: 'role-staff'
// //     };
    
// //     return <span className={`role-badge ${roleColors[role] || ''}`}>{role}</span>;
// //   };

// //   const getStatusBadge = (isActive) => {
// //     return isActive ? 
// //       <span className="status-badge status-active">Active</span> :
// //       <span className="status-badge status-inactive">Inactive</span>;
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric'
// //     });
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading users...</div>;
// //   }

// //   return (
// //     <div className="page-container">
// //       <div className="page-header">
// //         <h1>User Management</h1>
// //       </div>

// //       {/* Filters */}
// //       <div className="filters-section">
// //         <div className="filter-group">
// //           <label>Filter by Role:</label>
// //           <select 
// //             name="role" 
// //             value={filters.role} 
// //             onChange={handleFilterChange}
// //             className="filter-select"
// //           >
// //             <option value="">All Roles</option>
// //             <option value="PATIENT">Patient</option>
// //             <option value="DOCTOR">Doctor</option>
// //             <option value="STAFF">Staff</option>
// //             <option value="ADMIN">Admin</option>
// //           </select>
// //         </div>
// //       </div>

// //       {error && <div className="error-message">{error}</div>}

// //       {users.length === 0 ? (
// //         <div className="empty-state">
// //           <h3>No users found</h3>
// //           <p>No users match your current filters.</p>
// //         </div>
// //       ) : (
// //         <div className="users-table-container">
// //           <table className="users-table">
// //             <thead>
// //               <tr>
// //                 <th>Name</th>
// //                 <th>Email</th>
// //                 <th>Role</th>
// //                 <th>Phone</th>
// //                 <th>Status</th>
// //                 <th>Joined</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {users.map((user) => (
// //                 <tr key={user.id}>
// //                   <td>
// //                     <div className="user-info">
// //                       <strong>{user.first_name} {user.last_name}</strong>
// //                       {user.date_of_birth && (
// //                         <span className="user-age">
// //                           {new Date().getFullYear() - new Date(user.date_of_birth).getFullYear()} years
// //                         </span>
// //                       )}
// //                     </div>
// //                   </td>
// //                   <td>{user.email}</td>
// //                   <td>{getRoleBadge(user.role)}</td>
// //                   <td>{user.phone || 'N/A'}</td>
// //                   <td>{getStatusBadge(user.is_active)}</td>
// //                   <td>{formatDate(user.created_at)}</td>
// //                   <td>
// //                     <div className="table-actions">
// //                       <button 
// //                         onClick={() => handleEditUser(user)}
// //                         className="btn-edit"
// //                         title="Edit User"
// //                       >
// //                         <i className="fas fa-edit"></i>
// //                       </button>
// //                       {user.role !== 'admin' && (
// //                         <button 
// //                           onClick={() => handleDeleteUser(user)}
// //                           className="btn-delete"
// //                           title="Deactivate User"
// //                         >
// //                           <i className="fas fa-trash"></i>
// //                         </button>
// //                       )}
// //                     </div>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}

// //       {/* Edit User Modal */}
// //       {showEditModal && selectedUser && (
// //         <EditUserModal
// //           user={selectedUser}
// //           onClose={() => {
// //             setShowEditModal(false);
// //             setSelectedUser(null);
// //           }}
// //           onSave={handleUpdateUser}
// //         />
// //       )}

// //       {/* Delete Confirmation Modal */}
// //       {showDeleteModal && selectedUser && (
// //         <DeleteConfirmationModal
// //           user={selectedUser}
// //           onClose={() => {
// //             setShowDeleteModal(false);
// //             setSelectedUser(null);
// //           }}
// //           onConfirm={handleConfirmDelete}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // // Edit User Modal Component
// // function EditUserModal({ user, onClose, onSave }) {
// //   const [formData, setFormData] = useState({
// //     first_name: user.first_name,
// //     last_name: user.last_name,
// //     email: user.email,
// //     phone: user.phone || '',
// //     address: user.address || '',
// //     is_active: user.is_active
// //   });
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: type === 'checkbox' ? checked : value
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
// //           <h2>Edit User</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>

// //         <form onSubmit={handleSubmit}>
// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>First Name *</label>
// //               <input
// //                 type="text"
// //                 name="first_name"
// //                 value={formData.first_name}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label>Last Name *</label>
// //               <input
// //                 type="text"
// //                 name="last_name"
// //                 value={formData.last_name}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label>Email *</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Phone</label>
// //             <input
// //               type="tel"
// //               name="phone"
// //               value={formData.phone}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Address</label>
// //             <input
// //               type="text"
// //               name="address"
// //               value={formData.address}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label className="checkbox-label">
// //               <input
// //                 type="checkbox"
// //                 name="is_active"
// //                 checked={formData.is_active}
// //                 onChange={handleChange}
// //               />
// //               Active User
// //             </label>
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Updating...' : 'Update User'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // // Delete Confirmation Modal Component
// // function DeleteConfirmationModal({ user, onClose, onConfirm }) {
// //   const [loading, setLoading] = useState(false);

// //   const handleConfirm = async () => {
// //     setLoading(true);
// //     await onConfirm();
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal">
// //         <div className="modal-header">
// //           <h2>Deactivate User</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>

// //         <div className="confirmation-content">
// //           <div className="warning-icon">
// //             <i className="fas fa-exclamation-triangle"></i>
// //           </div>
// //           <h3>Are you sure?</h3>
// //           <p>
// //             You are about to deactivate {user.first_name} {user.last_name}. 
// //             This action cannot be undone.
// //           </p>
// //           <p><strong>Email:</strong> {user.email}</p>
// //           <p><strong>Role:</strong> {user.role}</p>
// //         </div>

// //         <div className="modal-actions">
// //           <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //           <button 
// //             onClick={handleConfirm} 
// //             disabled={loading}
// //             className="btn-danger"
// //           >
// //             {loading ? 'Deactivating...' : 'Yes, Deactivate'}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminUsers;

























// // src/pages/admin/Users.jsx
// import React, { useState, useEffect } from 'react';
// import adminService from '../../services/adminService';

// function AdminUsers() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({
//     role: '',
//     page: 1,
//     per_page: 20
//   });
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   useEffect(() => {
//     fetchUsers();
//   }, [filters]);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await adminService.getUsers(filters);
//       setUsers(response.users || []);
//     } catch (error) {
//       setError('Failed to fetch users');
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditUser = (user) => {
//     setSelectedUser(user);
//     setShowEditModal(true);
//   };

//   const handleDeleteUser = (user) => {
//     setSelectedUser(user);
//     setShowDeleteModal(true);
//   };

//   const handleUpdateUser = async (userData) => {
//     try {
//       await adminService.updateUser(selectedUser.id, userData);
//       alert('User updated successfully');
//       setShowEditModal(false);
//       setSelectedUser(null);
//       fetchUsers();
//     } catch (error) {
//       alert('Failed to update user');
//       console.error('Error updating user:', error);
//     }
//   };

//   const handleConfirmDelete = async () => {
//     try {
//       await adminService.deleteUser(selectedUser.id);
//       alert('User deactivated successfully');
//       setShowDeleteModal(false);
//       setSelectedUser(null);
//       fetchUsers();
//     } catch (error) {
//       alert('Failed to deactivate user');
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleFilterChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//       page: 1
//     });
//   };

//   const getRoleBadge = (role) => {
//     const roleColors = {
//       admin: 'badge badge-primary',
//       doctor: 'badge badge-accent',
//       patient: 'badge badge-info',
//       staff: 'badge badge-secondary'
//     };
    
//     return <span className={roleColors[role] || 'badge'}>{role}</span>;
//   };

//   const getStatusBadge = (isActive) => {
//     return isActive ? 
//       <span className="badge badge-success">Active</span> :
//       <span className="badge badge-error">Inactive</span>;
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen text-gray-500">Loading users...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold">User Management</h1>
//       </div>

//       {/* Filters */}
//       <div className="mb-4 flex flex-wrap gap-4 items-center">
//         <div className="form-control w-60">
//           <label className="label">
//             <span className="label-text">Filter by Role:</span>
//           </label>
//           <select 
//             name="role" 
//             value={filters.role} 
//             onChange={handleFilterChange}
//             className="select select-bordered w-full"
//           >
//             <option value="">All Roles</option>
//             <option value="PATIENT">Patient</option>
//             <option value="DOCTOR">Doctor</option>
//             <option value="STAFF">Staff</option>
//             <option value="ADMIN">Admin</option>
//           </select>
//         </div>
//       </div>

//       {error && <div className="alert alert-error mb-4">{error}</div>}

//       {users.length === 0 ? (
//         <div className="text-center py-10">
//           <h3 className="text-xl font-semibold mb-2">No users found</h3>
//           <p className="text-gray-500">No users match your current filters.</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table table-zebra w-full">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Phone</th>
//                 <th>Status</th>
//                 <th>Joined</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td>
//                     <div>
//                       <strong>{user.first_name} {user.last_name}</strong>
//                       {user.date_of_birth && (
//                         <span className="ml-2 text-sm text-gray-500">
//                           ({new Date().getFullYear() - new Date(user.date_of_birth).getFullYear()} yrs)
//                         </span>
//                       )}
//                     </div>
//                   </td>
//                   <td>{user.email}</td>
//                   <td>{getRoleBadge(user.role)}</td>
//                   <td>{user.phone || 'N/A'}</td>
//                   <td>{getStatusBadge(user.is_active)}</td>
//                   <td>{formatDate(user.created_at)}</td>
//                   <td>
//                     <div className="flex gap-2">
//                       <button 
//                         onClick={() => handleEditUser(user)}
//                         className="btn btn-sm btn-outline btn-primary"
//                         title="Edit User"
//                       >
//                         <i className="fas fa-edit"></i>
//                       </button>
//                       {user.role !== 'admin' && (
//                         <button 
//                           onClick={() => handleDeleteUser(user)}
//                           className="btn btn-sm btn-outline btn-error"
//                           title="Deactivate User"
//                         >
//                           <i className="fas fa-trash"></i>
//                         </button>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Edit User Modal */}
//       {showEditModal && selectedUser && (
//         <EditUserModal
//           user={selectedUser}
//           onClose={() => {
//             setShowEditModal(false);
//             setSelectedUser(null);
//           }}
//           onSave={handleUpdateUser}
//         />
//       )}

//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && selectedUser && (
//         <DeleteConfirmationModal
//           user={selectedUser}
//           onClose={() => {
//             setShowDeleteModal(false);
//             setSelectedUser(null);
//           }}
//           onConfirm={handleConfirmDelete}
//         />
//       )}
//     </div>
//   );
// }

// // Edit User Modal Component
// function EditUserModal({ user, onClose, onSave }) {
//   const [formData, setFormData] = useState({
//     first_name: user.first_name,
//     last_name: user.last_name,
//     email: user.email,
//     phone: user.phone || '',
//     address: user.address || '',
//     is_active: user.is_active
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     await onSave(formData);
//     setLoading(false);
//   };

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box relative">
//         <h3 className="text-lg font-bold mb-4">Edit User</h3>
//         <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onClose}>×</button>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex gap-4">
//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">First Name *</span></label>
//               <input
//                 type="text"
//                 name="first_name"
//                 value={formData.first_name}
//                 onChange={handleChange}
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">Last Name *</span></label>
//               <input
//                 type="text"
//                 name="last_name"
//                 value={formData.last_name}
//                 onChange={handleChange}
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Email *</span></label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="input input-bordered w-full"
//               required
//             />
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Phone</span></label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="input input-bordered w-full"
//             />
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Address</span></label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="input input-bordered w-full"
//             />
//           </div>

//           <div className="form-control">
//             <label className="cursor-pointer label">
//               <input
//                 type="checkbox"
//                 name="is_active"
//                 checked={formData.is_active}
//                 onChange={handleChange}
//                 className="checkbox checkbox-primary mr-2"
//               />
//               <span className="label-text">Active User</span>
//             </label>
//           </div>

//           <div className="flex justify-end gap-2">
//             <button type="button" onClick={onClose} className="btn btn-outline">Cancel</button>
//             <button type="submit" disabled={loading} className="btn btn-primary">
//               {loading ? 'Updating...' : 'Update User'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// // Delete Confirmation Modal Component
// function DeleteConfirmationModal({ user, onClose, onConfirm }) {
//   const [loading, setLoading] = useState(false);

//   const handleConfirm = async () => {
//     setLoading(true);
//     await onConfirm();
//     setLoading(false);
//   };

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box relative">
//         <h3 className="text-lg font-bold mb-4">Deactivate User</h3>
//         <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onClose}>×</button>

//         <div className="text-center">
//           <div className="text-6xl text-yellow-400 mb-2">
//             <i className="fas fa-exclamation-triangle"></i>
//           </div>
//           <h4 className="text-lg font-semibold mb-2">Are you sure?</h4>
//           <p className="mb-2">
//             You are about to deactivate <strong>{user.first_name} {user.last_name}</strong>. 
//             This action cannot be undone.
//           </p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Role:</strong> {user.role}</p>
//         </div>

//         <div className="flex justify-end gap-2 mt-4">
//           <button type="button" onClick={onClose} className="btn btn-outline">Cancel</button>
//           <button 
//             onClick={handleConfirm} 
//             disabled={loading}
//             className="btn btn-error"
//           >
//             {loading ? 'Deactivating...' : 'Yes, Deactivate'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminUsers;












// src/pages/admin/Users.jsx
import React, { useState, useEffect } from 'react';
import adminService from '../../services/adminService';

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    role: '',
    page: 1,
    per_page: 20
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [filters]);

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
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
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
      .animate-slideDown {
        animation: slideDown 0.4s ease-out forwards;
      }
      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-500 { animation-delay: 0.5s; }
      
      .table-row-hover {
        transition: all 0.2s ease;
      }
      .table-row-hover:hover {
        background-color: rgba(59, 130, 246, 0.05);
        transform: scale(1.01);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await adminService.getUsers(filters);
      setUsers(response.users || []);
    } catch (error) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleUpdateUser = async (userData) => {
    try {
      await adminService.updateUser(selectedUser.id, userData);
      alert('User updated successfully');
      setShowEditModal(false);
      setSelectedUser(null);
      fetchUsers();
    } catch (error) {
      alert('Failed to update user');
      console.error('Error updating user:', error);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await adminService.deleteUser(selectedUser.id);
      alert('User deactivated successfully');
      setShowDeleteModal(false);
      setSelectedUser(null);
      fetchUsers();
    } catch (error) {
      alert('Failed to deactivate user');
      console.error('Error deleting user:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
      page: 1
    });
  };

  const getRoleBadge = (role) => {
    const roleStyles = {
      admin: 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 border border-purple-300',
      doctor: 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border border-blue-300',
      patient: 'bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-300',
      staff: 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 border border-orange-300'
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${roleStyles[role.toLowerCase()] || 'bg-gray-100 text-gray-700'}`}>
        {role}
      </span>
    );
  };

  const getStatusBadge = (isActive) => {
    return isActive ? 
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-300">Active</span> :
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-100 to-red-200 text-red-700 border border-red-300">Inactive</span>;
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
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center space-y-4">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
          </div>
          <p className="text-gray-600 font-medium">Loading users...</p>
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
              User Management
            </h1>
          </div>
          <p className="text-gray-500 ml-7">Manage and monitor all system users</p>
        </div>

        {/* Filters Section */}
        <div className="opacity-0 animate-slideInRight delay-100 bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[250px]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter by Role
              </label>
              <select 
                name="role" 
                value={filters.role} 
                onChange={handleFilterChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">All Roles</option>
                <option value="PATIENT">Patient</option>
                <option value="DOCTOR">Doctor</option>
                <option value="STAFF">Staff</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            
            <div className="flex items-end gap-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-4 rounded-lg border border-blue-200">
                <div className="text-sm text-blue-600 font-semibold">Total Users</div>
                <div className="text-3xl font-bold text-blue-700">{users.length}</div>
              </div>
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

        {users.length === 0 ? (
          <div className="opacity-0 animate-scaleIn delay-300 bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
            <div className="max-w-md mx-auto space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-800">No users found</h3>
                <p className="text-gray-500">No users match your current filters.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="opacity-0 animate-fadeInUp delay-300 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Name
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Role
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Phone
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Status
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Joined
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {users.map((user, index) => (
                    <tr 
                      key={user.id} 
                      className={`table-row-hover opacity-0 animate-slideDown ${
                        index === 0 ? 'delay-100' : 
                        index === 1 ? 'delay-200' : 
                        index === 2 ? 'delay-300' : 
                        index === 3 ? 'delay-400' : 
                        'delay-500'
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">
                              {user.first_name?.[0]}{user.last_name?.[0]}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">
                              {user.first_name} {user.last_name}
                            </div>
                            {user.date_of_birth && (
                              <span className="text-xs text-gray-500">
                                {new Date().getFullYear() - new Date(user.date_of_birth).getFullYear()} years old
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                      <td className="px-6 py-4">{getRoleBadge(user.role)}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.phone || 'N/A'}</td>
                      <td className="px-6 py-4">{getStatusBadge(user.is_active)}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{formatDate(user.created_at)}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleEditUser(user)}
                            className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-all duration-200 hover:scale-110"
                            title="Edit User"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          {user.role !== 'admin' && (
                            <button 
                              onClick={() => handleDeleteUser(user)}
                              className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-all duration-200 hover:scale-110"
                              title="Deactivate User"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Edit User Modal */}
        {showEditModal && selectedUser && (
          <EditUserModal
            user={selectedUser}
            onClose={() => {
              setShowEditModal(false);
              setSelectedUser(null);
            }}
            onSave={handleUpdateUser}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && selectedUser && (
          <DeleteConfirmationModal
            user={selectedUser}
            onClose={() => {
              setShowDeleteModal(false);
              setSelectedUser(null);
            }}
            onConfirm={handleConfirmDelete}
          />
        )}
      </div>
    </div>
  );
}

// Edit User Modal Component
function EditUserModal({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone || '',
    address: user.address || '',
    is_active: user.is_active
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSave(formData);
    setLoading(false);
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
            <h3 className="text-2xl font-bold text-gray-800">Edit User</h3>
          </div>
          <button 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:rotate-90"
            onClick={onClose}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label className="text-sm font-semibold text-gray-700">
              Active User
            </label>
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
              {loading ? 'Updating...' : 'Update User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Delete Confirmation Modal Component
function DeleteConfirmationModal({ user, onClose, onConfirm }) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm();
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="opacity-0 animate-modalSlideIn bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Deactivate User</h3>
          </div>
          <button 
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:rotate-90"
            onClick={onClose}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center space-y-4">
            <div className="text-6xl">⚠️</div>
            <h4 className="text-lg font-semibold text-gray-800">Are you sure?</h4>
            <p className="text-gray-600">
              You are about to deactivate <strong className="text-gray-800">{user.first_name} {user.last_name}</strong>. 
              This action cannot be undone.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg space-y-2 text-left">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm"><strong>Email:</strong> {user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm"><strong>Role:</strong> {user.role}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all duration-200"
            >
              Cancel
            </button>
            <button 
              onClick={handleConfirm} 
              disabled={loading}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Deactivating...' : 'Yes, Deactivate'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;