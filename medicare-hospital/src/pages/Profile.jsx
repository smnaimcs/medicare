// // // src/pages/Profile.jsx
// // import React, { useState, useEffect } from 'react';
// // import { useAuth } from '../context/AuthContext';
// // import authService from '../services/authService';

// // function Profile() {
// //   const { user, updateProfile } = useAuth();
// //   const [profile, setProfile] = useState(null);
// //   const [editing, setEditing] = useState(false);
// //   const [formData, setFormData] = useState({});
// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {
// //     fetchProfile();
// //   }, []);

// //   const fetchProfile = async () => {
// //     try {
// //       const response = await authService.getProfile();
// //       setProfile(response);
// //       setFormData(response);
// //     } catch (error) {
// //       console.error('Error fetching profile:', error);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage('');

// //     // Prepare data for API - remove nested structures that shouldn't be sent
// //     const submitData = { ...formData };
// //     delete submitData.user; // Remove nested user object
// //     delete submitData.patient_info; // Remove nested patient info
// //     delete submitData.message; // Remove API message
// //     delete submitData.success; // Remove API success flag

// //     const result = await updateProfile(submitData);
    
// //     if (result.success) {
// //       setMessage('Profile updated successfully');
// //       setEditing(false);
// //       // No need to call fetchProfile() here because updateProfile in AuthContext already refreshes the user data
// //     } else {
// //       setMessage(result.message);
// //     }
    
// //     setLoading(false);
// //   };

// //   if (!profile) {
// //     return <div className="loading">Loading profile...</div>;
// //   }

// //   // Get the correct role - handle both user structures
// //   const userRole = user?.role || (user?.user && user.user.role);
  
// //   // Helper function to get nested values safely
// //   const getProfileValue = (path) => {
// //     if (path === 'blood_group' || path === 'insurance_info' || path === 'emergency_contact') {
// //       return profile.patient_info?.[path] || '';
// //     }
// //     return profile[path] || '';
// //   };

// //   return (
// //     <div className="profile-container">
// //       <div className="profile-header">
// //         <h2>My Profile</h2>
// //         <button 
// //           onClick={() => setEditing(!editing)}
// //           className="btn-primary"
// //         >
// //           {editing ? 'Cancel' : 'Edit Profile'}
// //         </button>
// //       </div>

// //       {message && (
// //         <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
// //           {message}
// //         </div>
// //       )}

// //       {editing ? (
// //         <form onSubmit={handleSubmit} className="profile-form">
// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>First Name:</label>
// //               <input
// //                 type="text"
// //                 name="first_name"
// //                 value={formData.first_name || ''}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
            
// //             <div className="form-group">
// //               <label>Last Name:</label>
// //               <input
// //                 type="text"
// //                 name="last_name"
// //                 value={formData.last_name || ''}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label>Phone:</label>
// //             <input
// //               type="tel"
// //               name="phone"
// //               value={formData.phone || ''}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Address:</label>
// //             <input
// //               type="text"
// //               name="address"
// //               value={formData.address || ''}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Date of Birth:</label>
// //             <input
// //               type="date"
// //               name="date_of_birth"
// //               value={formData.date_of_birth || ''}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Gender:</label>
// //             <select 
// //               name="gender" 
// //               value={formData.gender || ''} 
// //               onChange={handleChange}
// //             >
// //               <option value="">Select Gender</option>
// //               <option value="male">Male</option>
// //               <option value="female">Female</option>
// //               <option value="other">Other</option>
// //             </select>
// //           </div>

// //           {userRole === 'patient' && (
// //             <>
// //               <div className="form-group">
// //                 <label>Blood Group:</label>
// //                 <select 
// //                   name="blood_group" 
// //                   value={formData.blood_group || ''} 
// //                   onChange={handleChange}
// //                 >
// //                   <option value="">Select Blood Group</option>
// //                   <option value="A+">A+</option>
// //                   <option value="A-">A-</option>
// //                   <option value="B+">B+</option>
// //                   <option value="B-">B-</option>
// //                   <option value="O+">O+</option>
// //                   <option value="O-">O-</option>
// //                   <option value="AB+">AB+</option>
// //                   <option value="AB-">AB-</option>
// //                 </select>
// //               </div>
              
// //               <div className="form-group">
// //                 <label>Emergency Contact:</label>
// //                 <input
// //                   type="tel"
// //                   name="emergency_contact"
// //                   value={formData.emergency_contact || ''}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="form-group">
// //                 <label>Insurance Information:</label>
// //                 <input
// //                   type="text"
// //                   name="insurance_info"
// //                   value={formData.insurance_info || ''}
// //                   onChange={handleChange}
// //                 />
// //               </div>
// //             </>
// //           )}

// //           {userRole === 'doctor' && (
// //             <>
// //               <div className="form-group">
// //                 <label>Specialization:</label>
// //                 <input
// //                   type="text"
// //                   name="specialization"
// //                   value={formData.specialization || ''}
// //                   onChange={handleChange}
// //                 />
// //               </div>
              
// //               <div className="form-group">
// //                 <label>Years of Experience:</label>
// //                 <input
// //                   type="number"
// //                   name="years_of_experience"
// //                   value={formData.years_of_experience || ''}
// //                   onChange={handleChange}
// //                 />
// //               </div>
              
// //               <div className="form-group">
// //                 <label>Consultation Fee:</label>
// //                 <input
// //                   type="number"
// //                   name="consultation_fee"
// //                   value={formData.consultation_fee || ''}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="form-group">
// //                 <label>Qualification:</label>
// //                 <input
// //                   type="text"
// //                   name="qualification"
// //                   value={formData.qualification || ''}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="form-group">
// //                 <label>License Number:</label>
// //                 <input
// //                   type="text"
// //                   name="license_number"
// //                   value={formData.license_number || ''}
// //                   onChange={handleChange}
// //                 />
// //               </div>
// //             </>
// //           )}

// //           {userRole === 'staff' && (
// //             <div className="form-group">
// //               <label>Department:</label>
// //               <input
// //                 type="text"
// //                 name="department"
// //                 value={formData.department || ''}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //           )}

// //           <button type="submit" disabled={loading} className="btn-primary">
// //             {loading ? 'Updating...' : 'Update Profile'}
// //           </button>
// //         </form>
// //       ) : (
// //         <div className="profile-details">
// //           <div className="profile-section">
// //             <h3>Personal Information</h3>
// //             <div className="info-grid">
// //               <div className="info-item">
// //                 <label>Name:</label>
// //                 <span>{profile.first_name} {profile.last_name}</span>
// //               </div>
// //               <div className="info-item">
// //                 <label>Email:</label>
// //                 <span>{profile.email}</span>
// //               </div>
// //               <div className="info-item">
// //                 <label>Phone:</label>
// //                 <span>{profile.phone || 'Not provided'}</span>
// //               </div>
// //               <div className="info-item">
// //                 <label>Address:</label>
// //                 <span>{profile.address || 'Not provided'}</span>
// //               </div>
// //               <div className="info-item">
// //                 <label>Date of Birth:</label>
// //                 <span>{profile.date_of_birth || 'Not provided'}</span>
// //               </div>
// //               <div className="info-item">
// //                 <label>Gender:</label>
// //                 <span>{profile.gender || 'Not provided'}</span>
// //               </div>
// //               <div className="info-item">
// //                 <label>Role:</label>
// //                 <span className="user-role-badge">{userRole}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {userRole === 'patient' && (
// //             <div className="profile-section">
// //               <h3>Medical Information</h3>
// //               <div className="info-grid">
// //                 <div className="info-item">
// //                   <label>Blood Group:</label>
// //                   <span>{getProfileValue('blood_group') || 'Not provided'}</span>
// //                 </div>
// //                 <div className="info-item">
// //                   <label>Emergency Contact:</label>
// //                   <span>{getProfileValue('emergency_contact') || 'Not provided'}</span>
// //                 </div>
// //                 <div className="info-item">
// //                   <label>Insurance Information:</label>
// //                   <span>{getProfileValue('insurance_info') || 'Not provided'}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {userRole === 'doctor' && (
// //             <div className="profile-section">
// //               <h3>Professional Information</h3>
// //               <div className="info-grid">
// //                 <div className="info-item">
// //                   <label>Specialization:</label>
// //                   <span>{profile.specialization || 'Not provided'}</span>
// //                 </div>
// //                 <div className="info-item">
// //                   <label>Years of Experience:</label>
// //                   <span>{profile.years_of_experience || 'Not provided'}</span>
// //                 </div>
// //                 <div className="info-item">
// //                   <label>Consultation Fee:</label>
// //                   <span>{profile.consultation_fee ? `$${profile.consultation_fee}` : 'Not provided'}</span>
// //                 </div>
// //                 <div className="info-item">
// //                   <label>Qualification:</label>
// //                   <span>{profile.qualification || 'Not provided'}</span>
// //                 </div>
// //                 <div className="info-item">
// //                   <label>License Number:</label>
// //                   <span>{profile.license_number || 'Not provided'}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {userRole === 'staff' && profile.department && (
// //             <div className="profile-section">
// //               <h3>Staff Information</h3>
// //               <div className="info-grid">
// //                 <div className="info-item">
// //                   <label>Department:</label>
// //                   <span>{profile.department || 'Not provided'}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Profile;











// /// src/pages/Profile.jsx
// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// import authService from '../services/authService';

// function Profile() {
//   const { user, updateProfile } = useAuth();
//   const [profile, setProfile] = useState(null);
//   const [editing, setEditing] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const response = await authService.getProfile();
//       setProfile(response);
//       setFormData(response);
//     } catch (error) {
//       console.error('Error fetching profile:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     const submitData = { ...formData };
//     delete submitData.user;
//     delete submitData.patient_info;
//     delete submitData.message;
//     delete submitData.success;

//     const result = await updateProfile(submitData);

//     if (result.success) {
//       setMessage('Profile updated successfully');
//       setEditing(false);
//     } else {
//       setMessage(result.message);
//     }

//     setLoading(false);
//   };

//   if (!profile) {
//     return <div className="w-full flex justify-center items-center text-gray-500">Loading profile...</div>;
//   }

//   const userRole = user?.role || (user?.user && user.user.role);

//   const getProfileValue = (path) => {
//     if (['blood_group', 'insurance_info', 'emergency_contact'].includes(path)) {
//       return profile.patient_info?.[path] || '';
//     }
//     return profile[path] || '';
//   };

//   return (
//     <div className="p-6 w-full">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold text-gray-800">My Profile</h2>
//         <button 
//           onClick={() => setEditing(!editing)}
//           className="btn btn-primary btn-sm"
//         >
//           {editing ? 'Cancel' : 'Edit Profile'}
//         </button>
//       </div>

//       {message && (
//         <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-error'} mb-4`}>
//           {message}
//         </div>
//       )}

//       {editing ? (
//         <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
//           {/* ROW 1 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="form-control">
//               <label className="label font-semibold">First Name:</label>
//               <input
//                 type="text"
//                 name="first_name"
//                 value={formData.first_name || ''}
//                 onChange={handleChange}
//                 required
//                 className="input input-bordered"
//               />
//             </div>

//             <div className="form-control">
//               <label className="label font-semibold">Last Name:</label>
//               <input
//                 type="text"
//                 name="last_name"
//                 value={formData.last_name || ''}
//                 onChange={handleChange}
//                 required
//                 className="input input-bordered"
//               />
//             </div>
//           </div>

//           {/* COMMON FIELDS */}
//           <div className="form-control">
//             <label className="label font-semibold">Phone:</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone || ''}
//               onChange={handleChange}
//               className="input input-bordered"
//             />
//           </div>

//           <div className="form-control">
//             <label className="label font-semibold">Address:</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address || ''}
//               onChange={handleChange}
//               className="input input-bordered"
//             />
//           </div>

//           <div className="form-control">
//             <label className="label font-semibold">Date of Birth:</label>
//             <input
//               type="date"
//               name="date_of_birth"
//               value={formData.date_of_birth || ''}
//               onChange={handleChange}
//               className="input input-bordered"
//             />
//           </div>

//           <div className="form-control">
//             <label className="label font-semibold">Gender:</label>
//             <select
//               name="gender"
//               value={formData.gender || ''}
//               onChange={handleChange}
//               className="select select-bordered"
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           {/* PATIENT SECTION */}
//           {userRole === 'patient' && (
//             <>
//               <div className="form-control">
//                 <label className="label font-semibold">Blood Group:</label>
//                 <select
//                   name="blood_group"
//                   value={formData.blood_group || ''}
//                   onChange={handleChange}
//                   className="select select-bordered"
//                 >
//                   <option value="">Select Blood Group</option>
//                   {['A+','A-','B+','B-','O+','O-','AB+','AB-'].map((g) => (
//                     <option key={g} value={g}>{g}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-control">
//                 <label className="label font-semibold">Emergency Contact:</label>
//                 <input
//                   type="tel"
//                   name="emergency_contact"
//                   value={formData.emergency_contact || ''}
//                   onChange={handleChange}
//                   className="input input-bordered"
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label font-semibold">Insurance Information:</label>
//                 <input
//                   type="text"
//                   name="insurance_info"
//                   value={formData.insurance_info || ''}
//                   onChange={handleChange}
//                   className="input input-bordered"
//                 />
//               </div>
//             </>
//           )}

//           {/* DOCTOR SECTION */}
//           {userRole === 'doctor' && (
//             <>
//               <div className="form-control">
//                 <label className="label font-semibold">Specialization:</label>
//                 <input
//                   type="text"
//                   name="specialization"
//                   value={formData.specialization || ''}
//                   onChange={handleChange}
//                   className="input input-bordered"
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label font-semibold">Years of Experience:</label>
//                 <input
//                   type="number"
//                   name="years_of_experience"
//                   value={formData.years_of_experience || ''}
//                   onChange={handleChange}
//                   className="input input-bordered"
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label font-semibold">Consultation Fee:</label>
//                 <input
//                   type="number"
//                   name="consultation_fee"
//                   value={formData.consultation_fee || ''}
//                   onChange={handleChange}
//                   className="input input-bordered"
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label font-semibold">Qualification:</label>
//                 <input
//                   type="text"
//                   name="qualification"
//                   value={formData.qualification || ''}
//                   onChange={handleChange}
//                   className="input input-bordered"
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label font-semibold">License Number:</label>
//                 <input
//                   type="text"
//                   name="license_number"
//                   value={formData.license_number || ''}
//                   onChange={handleChange}
//                   className="input input-bordered"
//                 />
//               </div>
//             </>
//           )}

//           {/* STAFF SECTION */}
//           {userRole === 'staff' && (
//             <div className="form-control">
//               <label className="label font-semibold">Department:</label>
//               <input
//                 type="text"
//                 name="department"
//                 value={formData.department || ''}
//                 onChange={handleChange}
//                 className="input input-bordered"
//               />
//             </div>
//           )}

//           <button type="submit" disabled={loading} className="btn btn-primary mt-4">
//             {loading ? 'Updating...' : 'Update Profile'}
//           </button>
//         </form>
//       ) : (
//         /** VIEW PROFILE MODE */
//         <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
//           <div>
//             <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div><strong>Name:</strong> {profile.first_name} {profile.last_name}</div>
//               <div><strong>Email:</strong> {profile.email}</div>
//               <div><strong>Phone:</strong> {profile.phone || 'Not provided'}</div>
//               <div><strong>Address:</strong> {profile.address || 'Not provided'}</div>
//               <div><strong>Date of Birth:</strong> {profile.date_of_birth || 'Not provided'}</div>
//               <div><strong>Gender:</strong> {profile.gender || 'Not provided'}</div>
//               <div><strong>Role:</strong> <span className="badge badge-primary text-white capitalize">{userRole}</span></div>
//             </div>
//           </div>

//           {userRole === 'patient' && (
//             <div>
//               <h3 className="text-xl font-semibold mb-3">Medical Information</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div><strong>Blood Group:</strong> {getProfileValue('blood_group') || 'Not provided'}</div>
//                 <div><strong>Emergency Contact:</strong> {getProfileValue('emergency_contact') || 'Not provided'}</div>
//                 <div><strong>Insurance Info:</strong> {getProfileValue('insurance_info') || 'Not provided'}</div>
//               </div>
//             </div>
//           )}

//           {userRole === 'doctor' && (
//             <div>
//               <h3 className="text-xl font-semibold mb-3">Professional Information</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div><strong>Specialization:</strong> {profile.specialization || 'Not provided'}</div>
//                 <div><strong>Experience:</strong> {profile.years_of_experience || 'Not provided'}</div>
//                 <div><strong>Consultation Fee:</strong> {profile.consultation_fee || 'Not provided'}</div>
//                 <div><strong>Qualification:</strong> {profile.qualification || 'Not provided'}</div>
//                 <div><strong>License Number:</strong> {profile.license_number || 'Not provided'}</div>
//               </div>
//             </div>
//           )}

//           {userRole === 'staff' && profile.department && (
//             <div>
//               <h3 className="text-xl font-semibold mb-3">Staff Information</h3>
//               <div><strong>Department:</strong> {profile.department}</div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;













import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import authService from '../services/authService';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendar, FaEdit, FaSave, FaTimes, FaUserMd, FaHospital } from 'react-icons/fa';
import { MdBloodtype } from 'react-icons/md';

function Profile() {
  const { user, updateProfile } = useAuth();
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await authService.getProfile();
      setProfile(response);
      setFormData(response);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const submitData = { ...formData };
    delete submitData.user;
    delete submitData.patient_info;
    delete submitData.message;
    delete submitData.success;

    const result = await updateProfile(submitData);

    if (result.success) {
      setMessage('Profile updated successfully');
      setEditing(false);
      fetchProfile();
    } else {
      setMessage(result.message);
    }

    setLoading(false);
  };

  if (!profile) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading profile...</p>
        </div>
      </div>
    );
  }

  const userRole = user?.role || (user?.user && user.user.role);

  const getProfileValue = (path) => {
    if (['blood_group', 'insurance_info', 'emergency_contact'].includes(path)) {
      return profile.patient_info?.[path] || '';
    }
    return profile[path] || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              My Profile
            </h2>
            <p className="text-gray-600 mt-1">Manage your personal information</p>
          </div>
          <button 
            onClick={() => setEditing(!editing)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center gap-2 ${
              editing 
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-lg'
            }`}
          >
            {editing ? (
              <>
                <FaTimes /> Cancel
              </>
            ) : (
              <>
                <FaEdit /> Edit Profile
              </>
            )}
          </button>
        </motion.div>

        {/* Success/Error Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-2xl border ${
              message.includes('success') 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}
          >
            <p className="font-medium">{message}</p>
          </motion.div>
        )}

        {editing ? (
          /* EDIT MODE */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="space-y-6">
                {/* Personal Information Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaUser className="text-gray-600" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        placeholder="+880 1XXX-XXXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                      <input
                        type="date"
                        name="date_of_birth"
                        value={formData.date_of_birth || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address || ''}
                        onChange={handleChange}
                        placeholder="Street address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* PATIENT SECTION */}
                {userRole === 'patient' && (
                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <MdBloodtype className="text-gray-600" />
                      Medical Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Group</label>
                        <select
                          name="blood_group"
                          value={formData.blood_group || ''}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                        >
                          <option value="">Select Blood Group</option>
                          {['A+','A-','B+','B-','O+','O-','AB+','AB-'].map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact</label>
                        <input
                          type="tel"
                          name="emergency_contact"
                          value={formData.emergency_contact || ''}
                          onChange={handleChange}
                          placeholder="+880 1XXX-XXXXXX"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Insurance Information</label>
                        <input
                          type="text"
                          name="insurance_info"
                          value={formData.insurance_info || ''}
                          onChange={handleChange}
                          placeholder="Insurance policy number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* DOCTOR SECTION */}
                {userRole === 'doctor' && (
                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaUserMd className="text-gray-600" />
                      Professional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Specialization</label>
                        <input
                          type="text"
                          name="specialization"
                          value={formData.specialization || ''}
                          onChange={handleChange}
                          placeholder="e.g., Cardiology"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience</label>
                        <input
                          type="number"
                          name="years_of_experience"
                          value={formData.years_of_experience || ''}
                          onChange={handleChange}
                          placeholder="Years"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Consultation Fee</label>
                        <input
                          type="number"
                          name="consultation_fee"
                          value={formData.consultation_fee || ''}
                          onChange={handleChange}
                          placeholder="Fee amount"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Qualification</label>
                        <input
                          type="text"
                          name="qualification"
                          value={formData.qualification || ''}
                          onChange={handleChange}
                          placeholder="e.g., MBBS, MD"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">License Number</label>
                        <input
                          type="text"
                          name="license_number"
                          value={formData.license_number || ''}
                          onChange={handleChange}
                          placeholder="Medical license number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STAFF SECTION */}
                {userRole === 'staff' && (
                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-2xl border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FaHospital className="text-gray-600" />
                      Staff Information
                    </h3>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department || ''}
                        onChange={handleChange}
                        placeholder="Department name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                      />
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  onClick={handleSubmit}
                  disabled={loading} 
                  className={`w-full py-4 px-6 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2 ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Updating...</span>
                    </>
                  ) : (
                    <>
                      <FaSave />
                      <span>Update Profile</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* VIEW MODE */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Personal Information Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaUser className="text-gray-600" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <FaUser className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Full Name</p>
                    <p className="text-gray-900 font-semibold">{profile.first_name} {profile.last_name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-gray-900 font-semibold">{profile.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhone className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <p className="text-gray-900 font-semibold">{profile.phone || 'Not provided'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCalendar className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Date of Birth</p>
                    <p className="text-gray-900 font-semibold">{profile.date_of_birth || 'Not provided'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Address</p>
                    <p className="text-gray-900 font-semibold">{profile.address || 'Not provided'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaUser className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Gender</p>
                    <p className="text-gray-900 font-semibold capitalize">{profile.gender || 'Not provided'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full mt-1"></div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Role</p>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm font-semibold capitalize mt-1">
                      {userRole}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PATIENT INFO CARD */}
            {userRole === 'patient' && (
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <MdBloodtype className="text-gray-600" />
                  Medical Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <MdBloodtype className="text-gray-400 mt-1 text-xl" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Blood Group</p>
                      <p className="text-gray-900 font-semibold">{getProfileValue('blood_group') || 'Not provided'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaPhone className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Emergency Contact</p>
                      <p className="text-gray-900 font-semibold">{getProfileValue('emergency_contact') || 'Not provided'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:col-span-2">
                    <FaHospital className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Insurance Information</p>
                      <p className="text-gray-900 font-semibold">{getProfileValue('insurance_info') || 'Not provided'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DOCTOR INFO CARD */}
            {userRole === 'doctor' && (
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaUserMd className="text-gray-600" />
                  Professional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <FaUserMd className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Specialization</p>
                      <p className="text-gray-900 font-semibold">{profile.specialization || 'Not provided'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCalendar className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Years of Experience</p>
                      <p className="text-gray-900 font-semibold">{profile.years_of_experience ? `${profile.years_of_experience} years` : 'Not provided'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-gray-400 mt-1">💰</div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Consultation Fee</p>
                      <p className="text-gray-900 font-semibold">{profile.consultation_fee ? `$${profile.consultation_fee}` : 'Not provided'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-gray-400 mt-1">🎓</div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Qualification</p>
                      <p className="text-gray-900 font-semibold">{profile.qualification || 'Not provided'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:col-span-2">
                    <div className="text-gray-400 mt-1">📋</div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">License Number</p>
                      <p className="text-gray-900 font-semibold">{profile.license_number || 'Not provided'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STAFF INFO CARD */}
            {userRole === 'staff' && profile.department && (
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaHospital className="text-gray-600" />
                  Staff Information
                </h3>
                <div className="flex items-start gap-3">
                  <FaHospital className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Department</p>
                    <p className="text-gray-900 font-semibold">{profile.department}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Profile;