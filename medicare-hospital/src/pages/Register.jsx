// // // src/pages/Register.jsx
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext';

// // function Register() {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //     first_name: '',
// //     last_name: '',
// //     role: 'patient', // Changed to uppercase default
// //     phone: '',
// //     address: '',
// //     date_of_birth: '',
// //     gender: '',
// //     blood_group: '',
// //     emergency_contact: '',
// //     insurance_info: '',
// //     license_number: '',
// //     specialization: '',
// //     years_of_experience: '',
// //     qualification: '',
// //     consultation_fee: '',
// //     department: ''
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');

// //   const { register } = useAuth();
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');

// //     // Filter out empty fields but keep role always
// //     const submitData = Object.fromEntries(
// //       Object.entries(formData).filter(([key, value]) => {
// //         if (key === 'role') return true; // Always include role
// //         return value !== ''; // Filter out other empty fields
// //       })
// //     );

// //     const result = await register(submitData);
    
// //     if (result.success) {
// //       navigate('/dashboard');
// //     } else {
// //       setError(result.message);
// //     }
    
// //     setLoading(false);
// //   };

// //   const renderPatientFields = () => (
// //     <>
// //       <div className="form-group">
// //         <label>Blood Group:</label>
// //         <select name="blood_group" value={formData.blood_group} onChange={handleChange}>
// //           <option value="">Select Blood Group</option>
// //           <option value="A+">A+</option>
// //           <option value="A-">A-</option>
// //           <option value="B+">B+</option>
// //           <option value="B-">B-</option>
// //           <option value="O+">O+</option>
// //           <option value="O-">O-</option>
// //           <option value="AB+">AB+</option>
// //           <option value="AB-">AB-</option>
// //         </select>
// //       </div>
      
// //       <div className="form-group">
// //         <label>Emergency Contact:</label>
// //         <input
// //           type="tel"
// //           name="emergency_contact"
// //           value={formData.emergency_contact}
// //           onChange={handleChange}
// //         />
// //       </div>
      
// //       <div className="form-group">
// //         <label>Insurance Information:</label>
// //         <input
// //           type="text"
// //           name="insurance_info"
// //           value={formData.insurance_info}
// //           onChange={handleChange}
// //         />
// //       </div>
// //     </>
// //   );

// //   const renderDoctorFields = () => (
// //     <>
// //       <div className="form-group">
// //         <label>License Number:</label>
// //         <input
// //           type="text"
// //           name="license_number"
// //           value={formData.license_number}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>
      
// //       <div className="form-group">
// //         <label>Specialization:</label>
// //         <input
// //           type="text"
// //           name="specialization"
// //           value={formData.specialization}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>
      
// //       <div className="form-group">
// //         <label>Years of Experience:</label>
// //         <input
// //           type="number"
// //           name="years_of_experience"
// //           value={formData.years_of_experience}
// //           onChange={handleChange}
// //         />
// //       </div>
      
// //       <div className="form-group">
// //         <label>Qualification:</label>
// //         <input
// //           type="text"
// //           name="qualification"
// //           value={formData.qualification}
// //           onChange={handleChange}
// //         />
// //       </div>
      
// //       <div className="form-group">
// //         <label>Consultation Fee:</label>
// //         <input
// //           type="number"
// //           name="consultation_fee"
// //           value={formData.consultation_fee}
// //           onChange={handleChange}
// //         />
// //       </div>
// //     </>
// //   );

// //   const renderStaffFields = () => (
// //     <div className="form-group">
// //       <label>Department:</label>
// //       <input
// //         type="text"
// //         name="department"
// //         value={formData.department}
// //         onChange={handleChange}
// //         required
// //       />
// //     </div>
// //   );

// //   return (
// //     <div className="auth-container">
// //       <div className="auth-form">
// //         <h2>Register for Hospital System</h2>
// //         {error && <div className="error-message">{error}</div>}
        
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label>Role:</label>
// //             <select name="role" value={formData.role} onChange={handleChange} required>
// //               <option value="patient">Patient</option>
// //               <option value="doctor">Doctor</option>
// //               <option value="staff">Staff</option>
// //               <option value="admin">Admin</option>
// //             </select>
// //           </div>
          
// //           <div className="form-group">
// //             <label>Email:</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label>Password:</label>
// //             <input
// //               type="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               required
// //               minLength="6"
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label>First Name:</label>
// //             <input
// //               type="text"
// //               name="first_name"
// //               value={formData.first_name}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label>Last Name:</label>
// //             <input
// //               type="text"
// //               name="last_name"
// //               value={formData.last_name}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label>Phone:</label>
// //             <input
// //               type="tel"
// //               name="phone"
// //               value={formData.phone}
// //               onChange={handleChange}
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label>Address:</label>
// //             <input
// //               type="text"
// //               name="address"
// //               value={formData.address}
// //               onChange={handleChange}
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label>Date of Birth:</label>
// //             <input
// //               type="date"
// //               name="date_of_birth"
// //               value={formData.date_of_birth}
// //               onChange={handleChange}
// //             />
// //           </div>
          
// //           <div className="form-group">
// //             <label>Gender:</label>
// //             <select name="gender" value={formData.gender} onChange={handleChange}>
// //               <option value="">Select Gender</option>
// //               <option value="male">Male</option>
// //               <option value="female">Female</option>
// //               <option value="other">Other</option>
// //             </select>
// //           </div>
          
// //           {formData.role === 'patient' && renderPatientFields()}
// //           {formData.role === 'doctor' && renderDoctorFields()}
// //           {formData.role === 'staff' && renderStaffFields()}
          
// //           <button type="submit" disabled={loading}>
// //             {loading ? 'Registering...' : 'Register'}
// //           </button>
// //         </form>
        
// //         <p>
// //           Already have an account? <Link to="/login">Login here</Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Register;










// // src/pages/Register.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// function Register() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     first_name: '',
//     last_name: '',
//     role: 'patient',
//     phone: '',
//     address: '',
//     date_of_birth: '',
//     gender: '',
//     blood_group: '',
//     emergency_contact: '',
//     insurance_info: '',
//     license_number: '',
//     specialization: '',
//     years_of_experience: '',
//     qualification: '',
//     consultation_fee: '',
//     department: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const submitData = Object.fromEntries(
//       Object.entries(formData).filter(([key, value]) => {
//         if (key === 'role') return true;
//         return value !== '';
//       })
//     );

//     const result = await register(submitData);

//     if (result.success) {
//       navigate('/dashboard');
//     } else {
//       setError(result.message);
//     }

//     setLoading(false);
//   };

//   const renderPatientFields = () => (
//     <>
//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Blood Group</span></label>
//         <select name="blood_group" value={formData.blood_group} onChange={handleChange} className="select select-bordered w-full">
//           <option value="">Select Blood Group</option>
//           <option value="A+">A+</option>
//           <option value="A-">A-</option>
//           <option value="B+">B+</option>
//           <option value="B-">B-</option>
//           <option value="O+">O+</option>
//           <option value="O-">O-</option>
//           <option value="AB+">AB+</option>
//           <option value="AB-">AB-</option>
//         </select>
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Emergency Contact</span></label>
//         <input type="tel" name="emergency_contact" value={formData.emergency_contact} onChange={handleChange} className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Insurance Information</span></label>
//         <input type="text" name="insurance_info" value={formData.insurance_info} onChange={handleChange} className="input input-bordered w-full" />
//       </div>
//     </>
//   );

//   const renderDoctorFields = () => (
//     <>
//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">License Number</span></label>
//         <input type="text" name="license_number" value={formData.license_number} onChange={handleChange} required className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Specialization</span></label>
//         <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Years of Experience</span></label>
//         <input type="number" name="years_of_experience" value={formData.years_of_experience} onChange={handleChange} className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Qualification</span></label>
//         <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Consultation Fee</span></label>
//         <input type="number" name="consultation_fee" value={formData.consultation_fee} onChange={handleChange} className="input input-bordered w-full" />
//       </div>
//     </>
//   );

//   const renderStaffFields = () => (
//     <div className="form-control w-full">
//       <label className="label"><span className="label-text">Department</span></label>
//       <input type="text" name="department" value={formData.department} onChange={handleChange} required className="input input-bordered w-full" />
//     </div>
//   );

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="card w-full max-w-lg shadow-xl bg-white p-6 rounded-xl">
//         <h2 className="text-2xl font-bold mb-4 text-center">Register for Hospital System</h2>
//         {error && <div className="alert alert-error mb-4">{error}</div>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Role</span></label>
//             <select name="role" value={formData.role} onChange={handleChange} required className="select select-bordered w-full">
//               <option value="patient">Patient</option>
//               <option value="doctor">Doctor</option>
//               <option value="staff">Staff</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Email</span></label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input input-bordered w-full" />
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Password</span></label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength="6" className="input input-bordered w-full" />
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">First Name</span></label>
//             <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required className="input input-bordered w-full" />
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Last Name</span></label>
//             <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required className="input input-bordered w-full" />
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Phone</span></label>
//             <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input input-bordered w-full" />
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Address</span></label>
//             <input type="text" name="address" value={formData.address} onChange={handleChange} className="input input-bordered w-full" />
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Date of Birth</span></label>
//             <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} className="input input-bordered w-full" />
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Gender</span></label>
//             <select name="gender" value={formData.gender} onChange={handleChange} className="select select-bordered w-full">
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           {formData.role === 'patient' && renderPatientFields()}
//           {formData.role === 'doctor' && renderDoctorFields()}
//           {formData.role === 'staff' && renderStaffFields()}

//           <button type="submit" disabled={loading} className="btn btn-primary w-full">
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm">
//           Already have an account? <Link to="/login" className="link link-primary">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;




























/// src/pages/Register.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// function Register() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     first_name: '',
//     last_name: '',
//     role: 'patient',
//     phone: '',
//     address: '',
//     date_of_birth: '',
//     gender: '',
//     blood_group: '',
//     emergency_contact: '',
//     insurance_info: '',
//     license_number: '',
//     specialization: '',
//     years_of_experience: '',
//     qualification: '',
//     consultation_fee: '',
//     department: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const submitData = Object.fromEntries(
//       Object.entries(formData).filter(([key, value]) => {
//         if (key === 'role') return true;
//         return value !== '';
//       })
//     );

//     const result = await register(submitData);
    
//     if (result.success) {
//       navigate('/dashboard');
//     } else {
//       setError(result.message);
//     }
    
//     setLoading(false);
//   };

//   const renderPatientFields = () => (
//     <>
//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Blood Group</span></label>
//         <select name="blood_group" value={formData.blood_group} onChange={handleChange} className="select select-bordered w-full">
//           <option value="">Select Blood Group</option>
//           <option value="A+">A+</option>
//           <option value="A-">A-</option>
//           <option value="B+">B+</option>
//           <option value="B-">B-</option>
//           <option value="O+">O+</option>
//           <option value="O-">O-</option>
//           <option value="AB+">AB+</option>
//           <option value="AB-">AB-</option>
//         </select>
//       </div>
      
//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Emergency Contact</span></label>
//         <input type="tel" name="emergency_contact" value={formData.emergency_contact} onChange={handleChange} className="input input-bordered w-full" />
//       </div>
      
//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Insurance Information</span></label>
//         <input type="text" name="insurance_info" value={formData.insurance_info} onChange={handleChange} className="input input-bordered w-full" />
//       </div>
//     </>
//   );

//   const renderDoctorFields = () => (
//     <>
//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">License Number</span></label>
//         <input type="text" name="license_number" value={formData.license_number} onChange={handleChange} required className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Specialization</span></label>
//         <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Years of Experience</span></label>
//         <input type="number" name="years_of_experience" value={formData.years_of_experience} onChange={handleChange} className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Qualification</span></label>
//         <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Consultation Fee</span></label>
//         <input type="number" name="consultation_fee" value={formData.consultation_fee} onChange={handleChange} className="input input-bordered w-full" />
//       </div>
//     </>
//   );

//   const renderStaffFields = () => (
//     <div className="form-control w-full">
//       <label className="label"><span className="label-text">Department</span></label>
//       <input type="text" name="department" value={formData.department} onChange={handleChange} required className="input input-bordered w-full" />
//     </div>
//   );

//   const renderLabTechnicianFields = () => (
//     <>
//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Employee ID</span></label>
//         <input type="text" name="employee_id" value={formData.employee_id} onChange={handleChange} required className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Department</span></label>
//         <input type="text" name="department" value={formData.department} onChange={handleChange} required className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Staff Type</span></label>
//         <input type="text" name="staff_type" value={formData.staff_type} onChange={handleChange} required className="input input-bordered w-full" />
//       </div>
//     </>
//   );

//   const renderNurseFields = () => (
//     <>
//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Employee ID</span></label>
//         <input type="text" name="employee_id" value={formData.employee_id} onChange={handleChange} required className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Department</span></label>
//         <input type="text" name="department" value={formData.department} onChange={handleChange} required className="input input-bordered w-full" />
//       </div>

//       <div className="form-control w-full">
//         <label className="label"><span className="label-text">Staff Type</span></label>
//         <input type="text" name="staff_type" value={formData.staff_type} onChange={handleChange} defaultValue="nurse" required className="input input-bordered w-full" />
//       </div>
//     </>
//   );

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
//       <div className="card w-full max-w-lg shadow-xl bg-base-100">
//         <div className="card-body">
//           <h2 className="card-title text-2xl mb-4">Register for Hospital System</h2>
//           {error && <div className="alert alert-error mb-4">{error}</div>}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">Role</span></label>
//               <select name="role" value={formData.role} onChange={handleChange} required className="select select-bordered w-full">
//                 <option value="patient">Patient</option>
//                 <option value="doctor">Doctor</option>
//                 <option value="staff">Staff</option>
//                 <option value="admin">Admin</option>
//                 <option value="lab_technician">Lab Technician</option>
//                 <option value="nurse">Nurse</option>
//               </select>
//             </div>

//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">Email</span></label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input input-bordered w-full" />
//             </div>

//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">Password</span></label>
//               <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength="6" className="input input-bordered w-full" />
//             </div>

//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">First Name</span></label>
//               <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required className="input input-bordered w-full" />
//             </div>

//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">Last Name</span></label>
//               <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required className="input input-bordered w-full" />
//             </div>

//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">Phone</span></label>
//               <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input input-bordered w-full" />
//             </div>

//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">Address</span></label>
//               <input type="text" name="address" value={formData.address} onChange={handleChange} className="input input-bordered w-full" />
//             </div>

//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">Date of Birth</span></label>
//               <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} className="input input-bordered w-full" />
//             </div>

//             <div className="form-control w-full">
//               <label className="label"><span className="label-text">Gender</span></label>
//               <select name="gender" value={formData.gender} onChange={handleChange} className="select select-bordered w-full">
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </div>

//             {formData.role === 'patient' && renderPatientFields()}
//             {formData.role === 'doctor' && renderDoctorFields()}
//             {formData.role === 'staff' && renderStaffFields()}
//             {formData.role === 'lab_technician' && renderLabTechnicianFields()}
//             {formData.role === 'nurse' && renderNurseFields()}

//             <button type="submit" disabled={loading} className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}>
//               {loading ? 'Registering...' : 'Register'}
//             </button>
//           </form>

//           <p className="mt-4 text-center">
//             Already have an account? <Link to="/login" className="link link-primary">Login here</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;













//first...

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaMapMarkerAlt, FaHospital, FaCalendar, FaUserMd, FaFlask, FaUserNurse } from 'react-icons/fa';
import { MdBloodtype } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    role: 'patient',
    phone: '',
    address: '',
    date_of_birth: '',
    gender: '',
    blood_group: '',
    emergency_contact: '',
    insurance_info: '',
    license_number: '',
    specialization: '',
    years_of_experience: '',
    qualification: '',
    consultation_fee: '',
    department: '',
    employee_id: '',
    staff_type: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError('');

  //   // Simulate API call
  //   setTimeout(() => {
  //     if (formData.email && formData.password && formData.first_name && formData.last_name) {
  //       alert('Registration successful! (Demo)');
  //     } else {
  //       setError('Please fill in all required fields');
  //     }
  //     setLoading(false);
  //   }, 1500);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    const submitData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => {
        if (key === 'role') return true;
        return value !== '';
      })
    );
  
    const result = await register(submitData);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };



  const renderPatientFields = () => (
    <>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <MdBloodtype className="inline mr-1" />
          Blood Group
        </label>
        <select 
          name="blood_group" 
          value={formData.blood_group} 
          onChange={handleChange} 
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <FaPhone className="inline mr-1" />
          Emergency Contact
        </label>
        <input 
          type="tel" 
          name="emergency_contact" 
          value={formData.emergency_contact} 
          onChange={handleChange} 
          placeholder="+880 1XXX-XXXXXX"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Insurance Information
        </label>
        <input 
          type="text" 
          name="insurance_info" 
          value={formData.insurance_info} 
          onChange={handleChange} 
          placeholder="Insurance policy number"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>
    </>
  );

  const renderDoctorFields = () => (
    <>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          License Number *
        </label>
        <input 
          type="text" 
          name="license_number" 
          value={formData.license_number} 
          onChange={handleChange} 
          required 
          placeholder="Medical license number"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Specialization *
        </label>
        <input 
          type="text" 
          name="specialization" 
          value={formData.specialization} 
          onChange={handleChange} 
          required 
          placeholder="e.g., Cardiology, Neurology"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Years of Experience
        </label>
        <input 
          type="number" 
          name="years_of_experience" 
          value={formData.years_of_experience} 
          onChange={handleChange} 
          placeholder="Years"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Qualification
        </label>
        <input 
          type="text" 
          name="qualification" 
          value={formData.qualification} 
          onChange={handleChange} 
          placeholder="e.g., MBBS, MD"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Consultation Fee
        </label>
        <input 
          type="number" 
          name="consultation_fee" 
          value={formData.consultation_fee} 
          onChange={handleChange} 
          placeholder="Fee amount"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>
    </>
  );

  const renderStaffFields = () => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Department *
      </label>
      <input 
        type="text" 
        name="department" 
        value={formData.department} 
        onChange={handleChange} 
        required 
        placeholder="Department name"
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
      />
    </div>
  );

  const renderLabTechnicianFields = () => (
    <>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Employee ID *
        </label>
        <input 
          type="text" 
          name="employee_id" 
          value={formData.employee_id} 
          onChange={handleChange} 
          required 
          placeholder="Employee ID"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Department *
        </label>
        <input 
          type="text" 
          name="department" 
          value={formData.department} 
          onChange={handleChange} 
          required 
          placeholder="Lab department"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Staff Type *
        </label>
        <input 
          type="text" 
          name="staff_type" 
          value={formData.staff_type} 
          onChange={handleChange} 
          required 
          placeholder="Technician type"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>
    </>
  );

  const renderNurseFields = () => (
    <>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Employee ID *
        </label>
        <input 
          type="text" 
          name="employee_id" 
          value={formData.employee_id} 
          onChange={handleChange} 
          required 
          placeholder="Employee ID"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Department *
        </label>
        <input 
          type="text" 
          name="department" 
          value={formData.department} 
          onChange={handleChange} 
          required 
          placeholder="Department name"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Staff Type *
        </label>
        <input 
          type="text" 
          name="staff_type" 
          value={formData.staff_type} 
          onChange={handleChange} 
          defaultValue="nurse"
          required 
          placeholder="nurse"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
        />
      </div>
    </>
  );

  const getRoleIcon = () => {
    switch(formData.role) {
      case 'doctor': return <FaUserMd className="text-3xl" />;
      case 'lab_technician': return <FaFlask className="text-3xl" />;
      case 'nurse': return <FaUserNurse className="text-3xl" />;
      default: return <FaHospital className="text-3xl" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100 p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl">
                {getRoleIcon()}
              </div>
            </motion.div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              Create Your Account
            </h1>
            <p className="text-gray-600">Join our hospital management system</p>
          </div>

          {/* Register Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-8">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl"
              >
                <p className="text-red-800 text-sm font-medium">{error}</p>
              </motion.div>
            )}

            <div className="space-y-6">
              {/* Role Selection - Prominent */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-2xl border border-gray-200">
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  Select Your Role *
                </label>
                <select 
                  name="role" 
                  value={formData.role} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white font-medium text-gray-800"
                >
                  <option value="patient">🏥 Patient</option>
                  <option value="doctor">👨‍⚕️ Doctor</option>
                  <option value="nurse">👩‍⚕️ Nurse</option>
                  <option value="lab_technician">🔬 Lab Technician</option>
                  <option value="staff">👤 Staff</option>
                  <option value="admin">⚙️ Admin</option>
                </select>
              </div>

              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaUser className="inline mr-1" />
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    name="first_name" 
                    value={formData.first_name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaUser className="inline mr-1" />
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    name="last_name" 
                    value={formData.last_name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
                  />
                </div>
              </div>

              {/* Email & Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-1" />
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaLock className="inline mr-1" />
                    Password *
                  </label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"}
                      name="password" 
                      value={formData.password} 
                      onChange={handleChange} 
                      required 
                      minLength="6"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaPhone className="inline mr-1" />
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaCalendar className="inline mr-1" />
                    Date of Birth
                  </label>
                  <input 
                    type="date" 
                    name="date_of_birth" 
                    value={formData.date_of_birth} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
                  />
                </div>
              </div>

              {/* Address & Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline mr-1" />
                    Address
                  </label>
                  <input 
                    type="text" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    placeholder="Street address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender
                  </label>
                  <select 
                    name="gender" 
                    value={formData.gender} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              Role-specific fields
              {formData.role === 'patient' && (
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 space-y-5">
                  <h3 className="font-bold text-gray-800 mb-4">Patient Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {renderPatientFields()}
                  </div>
                </div>
              )}

              {formData.role === 'doctor' && (
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100 space-y-5">
                  <h3 className="font-bold text-gray-800 mb-4">Doctor Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {renderDoctorFields()}
                  </div>
                </div>
              )}

              {formData.role === 'staff' && (
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 space-y-5">
                  <h3 className="font-bold text-gray-800 mb-4">Staff Information</h3>
                  {renderStaffFields()}
                </div>
              )}

              {formData.role === 'lab_technician' && (
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 space-y-5">
                  <h3 className="font-bold text-gray-800 mb-4">Lab Technician Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {renderLabTechnicianFields()}
                  </div>
                </div>
              )}

              {formData.role === 'nurse' && (
                <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100 space-y-5">
                  <h3 className="font-bold text-gray-800 mb-4">Nurse Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {renderNurseFields()}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-4 px-6 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-xl transform hover:scale-105 transition-all ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </div>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm mt-6 text-gray-600">
            Already have an account?{' '}
            <button className="text-gray-900 font-semibold hover:underline transition">
              Login here
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}