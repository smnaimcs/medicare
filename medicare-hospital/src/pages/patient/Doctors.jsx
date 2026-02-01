// // // // src/pages/patient/Doctors.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import patientService from '../../services/patientService';

// // // function Doctors() {
// // //   const [doctors, setDoctors] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');
// // //   const [filters, setFilters] = useState({
// // //     search: '',
// // //     specialization: ''
// // //   });

// // //   useEffect(() => {
// // //     fetchDoctors();
// // //   }, [filters]);

// // //   const fetchDoctors = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const response = await patientService.getDoctors(filters);
// // //       setDoctors(response.doctors || []);
// // //     } catch (error) {
// // //       setError('Failed to fetch doctors');
// // //       console.error('Error fetching doctors:', error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleFilterChange = (e) => {
// // //     setFilters({
// // //       ...filters,
// // //       [e.target.name]: e.target.value
// // //     });
// // //   };

// // //   const handleSearch = (e) => {
// // //     e.preventDefault();
// // //     fetchDoctors();
// // //   };

// // //   const getAvailabilityBadge = (isAvailable) => {
// // //     return isAvailable ? 
// // //       <span className="status-badge status-available">Available</span> :
// // //       <span className="status-badge status-unavailable">Unavailable</span>;
// // //   };

// // //   return (
// // //     <div className="page-container">
// // //       <div className="page-header">
// // //         <h1>Find Doctors</h1>
// // //       </div>

// // //       {/* Search and Filters */}
// // //       <div className="search-filters">
// // //         <form onSubmit={handleSearch} className="search-form">
// // //           <div className="form-row">
// // //             <div className="form-group">
// // //               <input
// // //                 type="text"
// // //                 name="search"
// // //                 placeholder="Search by doctor name..."
// // //                 value={filters.search}
// // //                 onChange={handleFilterChange}
// // //                 className="search-input"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <input
// // //                 type="text"
// // //                 name="specialization"
// // //                 placeholder="Specialization..."
// // //                 value={filters.specialization}
// // //                 onChange={handleFilterChange}
// // //                 className="search-input"
// // //               />
// // //             </div>
// // //             <button type="submit" className="btn-primary">
// // //               Search
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>

// // //       {error && <div className="error-message">{error}</div>}

// // //       {loading ? (
// // //         <div className="loading">Loading doctors...</div>
// // //       ) : doctors.length === 0 ? (
// // //         <div className="empty-state">
// // //           <h3>No doctors found</h3>
// // //           <p>Try adjusting your search criteria.</p>
// // //         </div>
// // //       ) : (
// // //         <div className="doctors-grid">
// // //           {doctors.map((doctor) => (
// // //             <div key={doctor.id} className="doctor-card">
// // //               <div className="doctor-header">
// // //                 <h3>Dr. {doctor.user.first_name} {doctor.user.last_name}</h3>
// // //                 {getAvailabilityBadge(doctor.is_available)}
// // //               </div>

// // //               <div className="doctor-details">
// // //                 <div className="detail-item">
// // //                   <label>Specialization:</label>
// // //                   <span>{doctor.specialization}</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>Qualification:</label>
// // //                   <span>{doctor.qualification}</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>Experience:</label>
// // //                   <span>{doctor.years_of_experience} years</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>Consultation Fee:</label>
// // //                   <span className="fee">${doctor.consultation_fee}</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>Contact:</label>
// // //                   <span>{doctor.user.phone || 'Not provided'}</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>Address:</label>
// // //                   <span>{doctor.user.address || 'Not provided'}</span>
// // //                 </div>
// // //               </div>

// // //               <div className="doctor-actions">
// // //                 <button className="btn-primary" disabled={!doctor.is_available}>
// // //                   Book Appointment
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default Doctors;















// // // // src/pages/patient/Doctors.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import patientService from '../../services/patientService';

// // // function Doctors() {
// // //   const [doctors, setDoctors] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');
// // //   const [filters, setFilters] = useState({
// // //     search: '',
// // //     specialization: ''
// // //   });
// // //   const [selectedDoctor, setSelectedDoctor] = useState(null);
// // //   const [bookingModal, setBookingModal] = useState(false);
// // //   const [bookingData, setBookingData] = useState({
// // //     doctor_id: '',
// // //     appointment_date: '',
// // //     reason: '',
// // //     symptoms: ''
// // //   });
// // //   const [bookingLoading, setBookingLoading] = useState(false);
// // //   const [bookingSuccess, setBookingSuccess] = useState('');

// // //   useEffect(() => {
// // //     fetchDoctors();
// // //   }, [filters]);

// // //   const fetchDoctors = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const response = await patientService.getDoctors(filters);
// // //       setDoctors(response.doctors || []);
// // //     } catch (error) {
// // //       setError('Failed to fetch doctors');
// // //       console.error('Error fetching doctors:', error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleFilterChange = (e) => {
// // //     setFilters({
// // //       ...filters,
// // //       [e.target.name]: e.target.value
// // //     });
// // //   };

// // //   const handleSearch = (e) => {
// // //     e.preventDefault();
// // //     fetchDoctors();
// // //   };

// // //   const handleBookAppointment = (doctor) => {
// // //     setSelectedDoctor(doctor);
// // //     setBookingData({
// // //       doctor_id: doctor.id,
// // //       appointment_date: '',
// // //       reason: '',
// // //       symptoms: ''
// // //     });
// // //     setBookingModal(true);
// // //     setBookingSuccess('');
// // //   };

// // //   const handleBookingSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!bookingData.appointment_date || !bookingData.reason) {
// // //       alert('Please fill in all required fields');
// // //       return;
// // //     }

// // //     try {
// // //       setBookingLoading(true);
// // //       const response = await patientService.bookAppointment(bookingData);
// // //       setBookingSuccess('Appointment booked successfully!');
// // //       setTimeout(() => {
// // //         setBookingModal(false);
// // //         setBookingSuccess('');
// // //         // Refresh doctors list to update availability if needed
// // //         fetchDoctors();
// // //       }, 2000);
// // //     } catch (error) {
// // //       setError('Failed to book appointment');
// // //       console.error('Error booking appointment:', error);
// // //     } finally {
// // //       setBookingLoading(false);
// // //     }
// // //   };

// // //   const handleBookingChange = (e) => {
// // //     setBookingData({
// // //       ...bookingData,
// // //       [e.target.name]: e.target.value
// // //     });
// // //   };

// // //   const getAvailabilityBadge = (isAvailable) => {
// // //     return isAvailable ? 
// // //       <span className="status-badge status-available">Available</span> :
// // //       <span className="status-badge status-unavailable">Unavailable</span>;
// // //   };

// // //   const getNextAvailableTimeSlots = () => {
// // //     const today = new Date();
// // //     const slots = [];

// // //     for (let i = 1; i <= 7; i++) {
// // //       const date = new Date(today);
// // //       date.setDate(today.getDate() + i);

// // //       // Generate time slots from 9 AM to 5 PM
// // //       for (let hour = 9; hour <= 17; hour++) {
// // //         const timeString = `${hour.toString().padStart(2, '0')}:00`;
// // //         const dateTimeString = `${date.toISOString().split('T')[0]}T${timeString}`;
// // //         slots.push(dateTimeString);
// // //       }
// // //     }

// // //     return slots;
// // //   };

// // //   const formatDateTime = (dateTimeString) => {
// // //     return new Date(dateTimeString).toLocaleString('en-US', {
// // //       year: 'numeric',
// // //       month: 'long',
// // //       day: 'numeric',
// // //       hour: '2-digit',
// // //       minute: '2-digit'
// // //     });
// // //   };

// // //   return (
// // //     <div className="page-container">
// // //       <div className="page-header">
// // //         <h1>Find Doctors</h1>
// // //       </div>

// // //       {/* Search and Filters */}
// // //       <div className="search-filters">
// // //         <form onSubmit={handleSearch} className="search-form">
// // //           <div className="form-row">
// // //             <div className="form-group">
// // //               <input
// // //                 type="text"
// // //                 name="search"
// // //                 placeholder="Search by doctor name..."
// // //                 value={filters.search}
// // //                 onChange={handleFilterChange}
// // //                 className="search-input"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <input
// // //                 type="text"
// // //                 name="specialization"
// // //                 placeholder="Specialization..."
// // //                 value={filters.specialization}
// // //                 onChange={handleFilterChange}
// // //                 className="search-input"
// // //               />
// // //             </div>
// // //             <button type="submit" className="btn-primary">
// // //               Search
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>

// // //       {error && <div className="error-message">{error}</div>}

// // //       {loading ? (
// // //         <div className="loading">Loading doctors...</div>
// // //       ) : doctors.length === 0 ? (
// // //         <div className="empty-state">
// // //           <h3>No doctors found</h3>
// // //           <p>Try adjusting your search criteria.</p>
// // //         </div>
// // //       ) : (
// // //         <div className="doctors-grid">
// // //           {doctors.map((doctor) => (
// // //             <div key={doctor.id} className="doctor-card">
// // //               <div className="doctor-header">
// // //                 <h3>Dr. {doctor.user.first_name} {doctor.user.last_name}</h3>
// // //                 {getAvailabilityBadge(doctor.is_available)}
// // //               </div>

// // //               <div className="doctor-details">
// // //                 <div className="detail-item">
// // //                   <label>Specialization:</label>
// // //                   <span>{doctor.specialization}</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>Qualification:</label>
// // //                   <span>{doctor.qualification}</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>Experience:</label>
// // //                   <span>{doctor.years_of_experience} years</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>Consultation Fee:</label>
// // //                   <span className="fee">${doctor.consultation_fee}</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>Contact:</label>
// // //                   <span>{doctor.user.phone || 'Not provided'}</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>Address:</label>
// // //                   <span>{doctor.user.address || 'Not provided'}</span>
// // //                 </div>

// // //                 <div className="detail-item">
// // //                   <label>License Number:</label>
// // //                   <span>{doctor.license_number}</span>
// // //                 </div>
// // //               </div>

// // //               <div className="doctor-actions">
// // //                 <button 
// // //                   onClick={() => handleBookAppointment(doctor)}
// // //                   className="btn-primary" 
// // //                   disabled={!doctor.is_available}
// // //                 >
// // //                   {doctor.is_available ? 'Book Appointment' : 'Not Available'}
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}

// // //       {/* Booking Modal */}
// // //       {bookingModal && selectedDoctor && (
// // //         <div className="modal-overlay">
// // //           <div className="modal">
// // //             <div className="modal-header">
// // //               <h2>Book Appointment</h2>
// // //               <button 
// // //                 onClick={() => setBookingModal(false)}
// // //                 className="btn-close"
// // //               >
// // //                 ×
// // //               </button>
// // //             </div>

// // //             {bookingSuccess ? (
// // //               <div className="success-message">
// // //                 <h3>Success!</h3>
// // //                 <p>{bookingSuccess}</p>
// // //                 <p>You will be redirected shortly...</p>
// // //               </div>
// // //             ) : (
// // //               <form onSubmit={handleBookingSubmit} className="booking-form">
// // //                 <div className="doctor-info">
// // //                   <h4>Doctor Information</h4>
// // //                   <p><strong>Name:</strong> Dr. {selectedDoctor.user.first_name} {selectedDoctor.user.last_name}</p>
// // //                   <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
// // //                   <p><strong>Fee:</strong> ${selectedDoctor.consultation_fee}</p>
// // //                 </div>

// // //                 <div className="form-group">
// // //                   <label>Appointment Date & Time *</label>
// // //                   <input
// // //                     type="datetime-local"
// // //                     name="appointment_date"
// // //                     value={bookingData.appointment_date}
// // //                     onChange={handleBookingChange}
// // //                     min={new Date().toISOString().slice(0, 16)}
// // //                     required
// // //                   />
// // //                   <small>Select a date and time for your appointment</small>
// // //                 <div className="form-group">
// // //                 <label>Quick Time Slots (Optional)</label>
// // //                 <div className="time-slots">
// // //                     {getNextAvailableTimeSlots().slice(0, 6).map((slot) => (
// // //                     <button
// // //                         key={slot}
// // //                         type="button"
// // //                         className={`time-slot ${
// // //                         bookingData.appointment_date === slot ? 'selected' : ''
// // //                         }`}
// // //                         onClick={() => setBookingData({
// // //                         ...bookingData,
// // //                         appointment_date: slot
// // //                         })}
// // //                     >
// // //                         {formatDateTime(slot)}
// // //                     </button>
// // //                     ))}
// // //                 </div>
// // //                 <small>Click on a time slot to select it quickly</small>
// // //                 </div>
// // //                 </div>

// // //                 <div className="form-group">
// // //                   <label>Reason for Visit *</label>
// // //                   <textarea
// // //                     name="reason"
// // //                     value={bookingData.reason}
// // //                     onChange={handleBookingChange}
// // //                     placeholder="Please describe the reason for your visit..."
// // //                     rows="3"
// // //                     required
// // //                   />
// // //                 </div>

// // //                 <div className="form-group">
// // //                   <label>Symptoms (Optional)</label>
// // //                   <textarea
// // //                     name="symptoms"
// // //                     value={bookingData.symptoms}
// // //                     onChange={handleBookingChange}
// // //                     placeholder="Describe any symptoms you're experiencing..."
// // //                     rows="3"
// // //                   />
// // //                 </div>

// // //                 <div className="booking-summary">
// // //                   <h4>Appointment Summary</h4>
// // //                   <div className="summary-item">
// // //                     <span>Consultation Fee:</span>
// // //                     <span>${selectedDoctor.consultation_fee}</span>
// // //                   </div>
// // //                   <div className="summary-item total">
// // //                     <span>Total Amount:</span>
// // //                     <span>${selectedDoctor.consultation_fee}</span>
// // //                   </div>
// // //                 </div>

// // //                 <div className="modal-actions">
// // //                   <button 
// // //                     type="button" 
// // //                     onClick={() => setBookingModal(false)}
// // //                     className="btn-secondary"
// // //                   >
// // //                     Cancel
// // //                   </button>
// // //                   <button 
// // //                     type="submit" 
// // //                     disabled={bookingLoading}
// // //                     className="btn-primary"
// // //                   >
// // //                     {bookingLoading ? 'Booking...' : 'Confirm Booking'}
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default Doctors;















// // import React, { useState, useEffect } from 'react';
// // import patientService from '../../services/patientService';

// // function Doctors() {
// //   const [doctors, setDoctors] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [filters, setFilters] = useState({
// //     search: '',
// //     specialization: ''
// //   });
// //   const [selectedDoctor, setSelectedDoctor] = useState(null);
// //   const [bookingModal, setBookingModal] = useState(false);
// //   const [bookingData, setBookingData] = useState({
// //     doctor_id: '',
// //     appointment_date: '',
// //     reason: '',
// //     symptoms: ''
// //   });
// //   const [bookingLoading, setBookingLoading] = useState(false);
// //   const [bookingSuccess, setBookingSuccess] = useState('');

// //   useEffect(() => {
// //     fetchDoctors();
// //   }, [filters]);

// //   const fetchDoctors = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await patientService.getDoctors(filters);
// //       setDoctors(response.doctors || []);
// //     } catch (error) {
// //       setError('Failed to fetch doctors');
// //       console.error('Error fetching doctors:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleFilterChange = (e) => {
// //     setFilters({
// //       ...filters,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     fetchDoctors();
// //   };

// //   const handleBookAppointment = (doctor) => {
// //     setSelectedDoctor(doctor);
// //     setBookingData({
// //       doctor_id: doctor.id,
// //       appointment_date: '',
// //       reason: '',
// //       symptoms: ''
// //     });
// //     setBookingModal(true);
// //     setBookingSuccess('');
// //   };

// //   const handleBookingSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!bookingData.appointment_date || !bookingData.reason) {
// //       alert('Please fill in all required fields');
// //       return;
// //     }

// //     try {
// //       setBookingLoading(true);
// //       await patientService.bookAppointment(bookingData);
// //       setBookingSuccess('Appointment booked successfully!');
// //       setTimeout(() => {
// //         setBookingModal(false);
// //         setBookingSuccess('');
// //         fetchDoctors();
// //       }, 2000);
// //     } catch (error) {
// //       setError('Failed to book appointment');
// //       console.error('Error booking appointment:', error);
// //     } finally {
// //       setBookingLoading(false);
// //     }
// //   };

// //   const handleBookingChange = (e) => {
// //     setBookingData({
// //       ...bookingData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const getAvailabilityBadge = (isAvailable) => {
// //     return isAvailable ? (
// //       <span className="badge badge-success">Available</span>
// //     ) : (
// //       <span className="badge badge-error">Unavailable</span>
// //     );
// //   };

// //   const getNextAvailableTimeSlots = () => {
// //     const today = new Date();
// //     const slots = [];

// //     for (let i = 1; i <= 7; i++) {
// //       const date = new Date(today);
// //       date.setDate(today.getDate() + i);

// //       for (let hour = 9; hour <= 17; hour++) {
// //         const timeString = `${hour.toString().padStart(2, '0')}:00`;
// //         const dateTimeString = `${date.toISOString().split('T')[0]}T${timeString}`;
// //         slots.push(dateTimeString);
// //       }
// //     }

// //     return slots;
// //   };

// //   const formatDateTime = (dateTimeString) => {
// //     return new Date(dateTimeString).toLocaleString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric',
// //       hour: '2-digit',
// //       minute: '2-digit'
// //     });
// //   };

// //   return (
// //     <div className="p-6">
// //       <div className="mb-6">
// //         <h1 className="text-3xl font-bold">Find Doctors</h1>
// //       </div>

// //       {/* Search and Filters */}
// //       <div className="mb-4">
// //         <form onSubmit={handleSearch} className="flex gap-4 items-center">
// //           <input
// //             type="text"
// //             name="search"
// //             placeholder="Search by doctor name..."
// //             value={filters.search}
// //             onChange={handleFilterChange}
// //             className="input input-bordered w-full max-w-xs"
// //           />

// //           <input
// //             type="text"
// //             name="specialization"
// //             placeholder="Specialization..."
// //             value={filters.specialization}
// //             onChange={handleFilterChange}
// //             className="input input-bordered w-full max-w-xs"
// //           />

// //           <button type="submit" className="btn btn-primary">
// //             Search
// //           </button>
// //         </form>
// //       </div>

// //       {error && <div className="alert alert-error">{error}</div>}

// //       {loading ? (
// //         <div className="text-center text-lg font-semibold">Loading doctors...</div>
// //       ) : doctors.length === 0 ? (
// //         <div className="text-center p-8">
// //           <h3 className="text-xl font-semibold">No doctors found</h3>
// //           <p>Try adjusting your search criteria.</p>
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
// //           {doctors.map((doctor) => (
// //             <div key={doctor.id} className="card bg-white shadow-md p-5">
// //               <div className="flex items-center justify-between mb-3">
// //                 <h3 className="text-xl font-bold">
// //                   Dr. {doctor.user.first_name} {doctor.user.last_name}
// //                 </h3>
// //                 {getAvailabilityBadge(doctor.is_available)}
// //               </div>

// //               <div className="space-y-1 text-sm">
// //                 <p><span className="font-semibold">Specialization:</span> {doctor.specialization}</p>
// //                 <p><span className="font-semibold">Qualification:</span> {doctor.qualification}</p>
// //                 <p><span className="font-semibold">Experience:</span> {doctor.years_of_experience} years</p>
// //                 <p><span className="font-semibold">Consultation Fee:</span> ${doctor.consultation_fee}</p>
// //                 <p><span className="font-semibold">Contact:</span> {doctor.user.phone || 'Not provided'}</p>
// //                 <p><span className="font-semibold">Address:</span> {doctor.user.address || 'Not provided'}</p>
// //                 <p><span className="font-semibold">License Number:</span> {doctor.license_number}</p>
// //               </div>

// //               <div className="mt-4">
// //                 <button
// //                   onClick={() => handleBookAppointment(doctor)}
// //                   className="btn btn-primary w-full"
// //                   disabled={!doctor.is_available}
// //                 >
// //                   {doctor.is_available ? 'Book Appointment' : 'Not Available'}
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {bookingModal && selectedDoctor && (
// //         <dialog open className="modal modal-open">
// //           <div className="modal-box max-w-3xl">
// //             <div className="flex justify-between items-center mb-4">
// //               <h2 className="text-2xl font-bold">Book Appointment</h2>
// //               <button onClick={() => setBookingModal(false)} className="btn btn-sm btn-circle btn-ghost">✕</button>
// //             </div>

// //             {bookingSuccess ? (
// //               <div className="alert alert-success p-4 text-center">
// //                 {bookingSuccess}
// //                 <p>You will be redirected shortly...</p>
// //               </div>
// //             ) : (
// //               <form onSubmit={handleBookingSubmit} className="space-y-4">
// //                 <div className="bg-gray-100 p-4 rounded-lg">
// //                   <h4 className="font-bold text-lg mb-2">Doctor Information</h4>
// //                   <p><b>Name:</b> Dr. {selectedDoctor.user.first_name} {selectedDoctor.user.last_name}</p>
// //                   <p><b>Specialization:</b> {selectedDoctor.specialization}</p>
// //                   <p><b>Fee:</b> ${selectedDoctor.consultation_fee}</p>
// //                 </div>

// //                 <label className="form-control w-full">
// //                   <span className="label-text font-semibold">Appointment Date & Time *</span>
// //                   <input
// //                     type="datetime-local"
// //                     name="appointment_date"
// //                     value={bookingData.appointment_date}
// //                     onChange={handleBookingChange}
// //                     min={new Date().toISOString().slice(0, 16)}
// //                     className="input input-bordered"
// //                     required
// //                   />
// //                 </label>

// //                 <div>
// //                   <label className="label font-semibold">Quick Time Slots (Optional)</label>
// //                   <div className="grid grid-cols-2 gap-2">
// //                     {getNextAvailableTimeSlots().slice(0, 6).map((slot) => (
// //                       <button
// //                         key={slot}
// //                         type="button"
// //                         className={`btn btn-outline ${bookingData.appointment_date === slot && 'btn-active'}`}
// //                         onClick={() =>
// //                           setBookingData({
// //                             ...bookingData,
// //                             appointment_date: slot
// //                           })
// //                         }
// //                       >
// //                         {formatDateTime(slot)}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <label className="form-control">
// //                   <span className="label-text font-semibold">Reason for Visit *</span>
// //                   <textarea
// //                     name="reason"
// //                     value={bookingData.reason}
// //                     onChange={handleBookingChange}
// //                     className="textarea textarea-bordered"
// //                     rows="3"
// //                     required
// //                   />
// //                 </label>

// //                 <label className="form-control">
// //                   <span className="label-text font-semibold">Symptoms (Optional)</span>
// //                   <textarea
// //                     name="symptoms"
// //                     value={bookingData.symptoms}
// //                     onChange={handleBookingChange}
// //                     className="textarea textarea-bordered"
// //                     rows="3"
// //                   />
// //                 </label>

// //                 <div className="flex justify-between font-bold text-lg">
// //                   <span>Total Fee:</span>
// //                   <span>${selectedDoctor.consultation_fee}</span>
// //                 </div>

// //                 <div className="modal-action">
// //                   <button type="button" onClick={() => setBookingModal(false)} className="btn btn-secondary">Cancel</button>
// //                   <button type="submit" disabled={bookingLoading} className="btn btn-primary">
// //                     {bookingLoading ? 'Booking...' : 'Confirm Booking'}
// //                   </button>
// //                 </div>
// //               </form>
// //             )}
// //           </div>
// //         </dialog>
// //       )}
// //     </div>
// //   );
// // }

// // export default Doctors;













// // src/pages/patient/Doctors.jsx
// import React, { useState, useEffect } from 'react';
// import patientService from '../../services/patientService';

// function Doctors() {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({
//     search: '',
//     specialization: ''
//   });
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [bookingModal, setBookingModal] = useState(false);
//   const [bookingData, setBookingData] = useState({
//     doctor_id: '',
//     appointment_date: '',
//     reason: '',
//     symptoms: ''
//   });
//   const [bookingLoading, setBookingLoading] = useState(false);
//   const [bookingSuccess, setBookingSuccess] = useState('');

//   useEffect(() => {
//     fetchDoctors();
//   }, [filters]);

//   const fetchDoctors = async () => {
//     try {
//       setLoading(true);
//       const response = await patientService.getDoctors(filters);
//       setDoctors(response.doctors || []);
//     } catch (error) {
//       setError('Failed to fetch doctors');
//       console.error('Error fetching doctors:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFilterChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchDoctors();
//   };

//   const handleBookAppointment = (doctor) => {
//     setSelectedDoctor(doctor);
//     setBookingData({
//       doctor_id: doctor.id,
//       appointment_date: '',
//       reason: '',
//       symptoms: ''
//     });
//     setBookingModal(true);
//     setBookingSuccess('');
//   };

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();

//     if (!bookingData.appointment_date || !bookingData.reason) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     try {
//       setBookingLoading(true);
//       await patientService.bookAppointment(bookingData);
//       setBookingSuccess('Appointment booked successfully!');
//       setTimeout(() => {
//         setBookingModal(false);
//         setBookingSuccess('');
//         fetchDoctors();
//       }, 2000);
//     } catch (error) {
//       setError('Failed to book appointment');
//       console.error('Error booking appointment:', error);
//     } finally {
//       setBookingLoading(false);
//     }
//   };

//   const handleBookingChange = (e) => {
//     setBookingData({
//       ...bookingData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const getAvailabilityBadge = (isAvailable) => {
//     return isAvailable ? (
//       <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
//         <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
//         Available
//       </span>
//     ) : (
//       <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
//         <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
//         Unavailable
//       </span>
//     );
//   };

//   const getNextAvailableTimeSlots = () => {
//     const today = new Date();
//     const slots = [];

//     for (let i = 1; i <= 7; i++) {
//       const date = new Date(today);
//       date.setDate(today.getDate() + i);

//       for (let hour = 9; hour <= 17; hour++) {
//         const timeString = `${hour.toString().padStart(2, '0')}:00`;
//         const dateTimeString = `${date.toISOString().split('T')[0]}T${timeString}`;
//         slots.push(dateTimeString);
//       }
//     }

//     return slots;
//   };

//   const formatDateTime = (dateTimeString) => {
//     return new Date(dateTimeString).toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-600 mb-4"></div>
//           <p className="text-gray-600 text-lg font-medium">Loading doctors...</p>
//         </div>
//       </div>
//     );
//   }


//   return (
//     <div className="h-1/2 w-1/2 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto space-y-8">
//         {/* Header Section */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6">
//           <div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//               Find Doctors
//             </h1>
//             <p className="text-gray-500 mt-1 text-sm">Search and book appointments with healthcare professionals</p>
//           </div>
//         </div>

//         {/* Search and Filters */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6">
//           <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
//             <div className="relative flex-1">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 name="search"
//                 placeholder="Search by doctor name..."
//                 value={filters.search}
//                 onChange={handleFilterChange}
//                 className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 shadow-sm"
//               />
//             </div>

//             <div className="relative flex-1">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 name="specialization"
//                 placeholder="Specialization..."
//                 value={filters.specialization}
//                 onChange={handleFilterChange}
//                 className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 shadow-sm"
//               />
//             </div>

//             <button
//               type="submit"
//               className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//               Search
//             </button>
//           </form>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl shadow-sm flex items-center gap-3">
//             <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//             </svg>
//             <span className="font-medium">{error}</span>
//           </div>
//         )}

//         {/* Empty State */}
//         {doctors.length === 0 ? (
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
//             <div className="text-center max-w-md mx-auto">
//               <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
//                 <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">No doctors found</h3>
//               <p className="text-gray-500">Try adjusting your search criteria.</p>
//             </div>
//           </div>
//         ) : (
//           /* Doctors Grid */
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//             {doctors.map((doctor) => (
//               <div
//                 key={doctor.id}
//                 className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 flex flex-col"
//               >
//                 {/* Doctor Header */}
//                 <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
//                   <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
//                     <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">
//                       Dr. {doctor.user.first_name} {doctor.user.last_name}
//                     </h3>
//                     {getAvailabilityBadge(doctor.is_available)}
//                   </div>
//                 </div>

//                 {/* Doctor Details */}
//                 <div className="flex-1 py-5 space-y-3">
//                   <div className="flex items-start gap-3">
//                     <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
//                       <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Specialization</p>
//                       <p className="text-gray-800 font-medium">{doctor.specialization}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
//                       <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Qualification</p>
//                       <p className="text-gray-800 font-medium">{doctor.qualification}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
//                       <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Experience</p>
//                       <p className="text-gray-800 font-medium">{doctor.years_of_experience} years</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
//                     <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center">
//                       <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Consultation Fee</p>
//                       <p className="text-lg font-bold text-gray-800">${doctor.consultation_fee}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
//                       <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact</p>
//                       <p className="text-gray-800 font-medium text-sm">{doctor.user.phone || 'Not provided'}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
//                       <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address</p>
//                       <p className="text-gray-800 font-medium text-sm">{doctor.user.address || 'Not provided'}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
//                       <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">License Number</p>
//                       <p className="text-gray-800 font-medium text-sm">{doctor.license_number}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Button */}
//                 <div className="pt-5 border-t border-gray-100">
//                   <button
//                     onClick={() => handleBookAppointment(doctor)}
//                     disabled={!doctor.is_available}
//                     className={`w-full py-3 px-4 rounded-xl font-semibold shadow-sm transition-all duration-200 flex items-center justify-center gap-2 ${
//                       doctor.is_available
//                         ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white hover:shadow-md'
//                         : 'bg-gray-200 text-gray-500 cursor-not-allowed'
//                     }`}
//                   >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                     {doctor.is_available ? 'Book Appointment' : 'Not Available'}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Booking Modal */}
//         {bookingModal && selectedDoctor && (
//           <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
//               {/* Modal Header */}
//               <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800">Book Appointment</h2>
//                   <p className="text-sm text-gray-500 mt-1">Fill in the details to schedule your visit</p>
//                 </div>
//                 <button
//                   onClick={() => setBookingModal(false)}
//                   className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
//                 >
//                   <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="p-6">
//                 {bookingSuccess ? (
//                   <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
//                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
//                       <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <h3 className="text-xl font-bold text-emerald-800 mb-2">Success!</h3>
//                     <p className="text-emerald-700 font-medium">{bookingSuccess}</p>
//                     <p className="text-emerald-600 text-sm mt-2">You will be redirected shortly...</p>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleBookingSubmit} className="space-y-6">
//                     {/* Doctor Information */}
//                     <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
//                       <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                         </svg>
//                         Doctor Information
//                       </h4>
//                       <div className="space-y-2 text-sm">
//                         <p className="flex justify-between">
//                           <span className="text-gray-600 font-medium">Name:</span>
//                           <span className="text-gray-800 font-semibold">Dr. {selectedDoctor.user.first_name} {selectedDoctor.user.last_name}</span>
//                         </p>
//                         <p className="flex justify-between">
//                           <span className="text-gray-600 font-medium">Specialization:</span>
//                           <span className="text-gray-800 font-semibold">{selectedDoctor.specialization}</span>
//                         </p>
//                         <p className="flex justify-between">
//                           <span className="text-gray-600 font-medium">Consultation Fee:</span>
//                           <span className="text-gray-800 font-bold text-lg">${selectedDoctor.consultation_fee}</span>
//                         </p>
//                       </div>
//                     </div>

//                     {/* Appointment Date & Time */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Appointment Date & Time *
//                       </label>
//                       <input
//                         type="datetime-local"
//                         name="appointment_date"
//                         value={bookingData.appointment_date}
//                         onChange={handleBookingChange}
//                         min={new Date().toISOString().slice(0, 16)}
//                         className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
//                         required
//                       />
//                       <p className="text-xs text-gray-500 mt-2">Select a date and time for your appointment</p>
//                     </div>

//                     {/* Quick Time Slots */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-3">
//                         Quick Time Slots (Optional)
//                       </label>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                         {getNextAvailableTimeSlots().slice(0, 6).map((slot) => (
//                           <button
//                             key={slot}
//                             type="button"
//                             className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
//                               bookingData.appointment_date === slot
//                                 ? 'bg-gray-700 text-white shadow-md'
//                                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
//                             }`}
//                             onClick={() =>
//                               setBookingData({
//                                 ...bookingData,
//                                 appointment_date: slot
//                               })
//                             }
//                           >
//                             {formatDateTime(slot)}
//                           </button>
//                         ))}
//                       </div>
//                       <p className="text-xs text-gray-500 mt-2">Click on a time slot to select it quickly</p>
//                     </div>

//                     {/* Reason for Visit */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Reason for Visit *
//                       </label>
//                       <textarea
//                         name="reason"
//                         value={bookingData.reason}
//                         onChange={handleBookingChange}
//                         placeholder="Please describe the reason for your visit..."
//                         rows="3"
//                         className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
//                         required
//                       />
//                     </div>

//                     {/* Symptoms */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Symptoms (Optional)
//                       </label>
//                       <textarea
//                         name="symptoms"
//                         value={bookingData.symptoms}
//                         onChange={handleBookingChange}
//                         placeholder="Describe any symptoms you're experiencing..."
//                         rows="3"
//                         className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
//                       />
//                     </div>

//                     {/* Booking Summary */}
//                     <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
//                       <h4 className="font-bold text-base text-gray-800 mb-3">Payment Summary</h4>
//                       <div className="space-y-2">
//                         <div className="flex justify-between text-gray-700">
//                           <span>Consultation Fee:</span>
//                           <span className="font-semibold">${selectedDoctor.consultation_fee}</span>
//                         </div>
//                         <div className="border-t border-gray-300 pt-2 mt-2">
//                           <div className="flex justify-between text-lg font-bold text-gray-800">
//                             <span>Total Amount:</span>
//                             <span>${selectedDoctor.consultation_fee}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-3 pt-4">
//                       <button
//                         type="button"
//                         onClick={() => setBookingModal(false)}
//                         className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         disabled={bookingLoading}
//                         className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                       >
//                         {bookingLoading ? (
//                           <>
//                             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                             Booking...
//                           </>
//                         ) : (
//                           <>
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                             </svg>
//                             Confirm Booking
//                           </>
//                         )}
//                       </button>
//                     </div>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Doctors;
















// src/pages/patient/Doctors.jsx
import React, { useState, useEffect } from 'react';
import patientService from '../../services/patientService';

import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Doctors() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    search: '',
    specialization: ''
  });
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookingModal, setBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    doctor_id: '',
    appointment_date: '',
    reason: '',
    symptoms: ''
  });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, [filters]);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const response = await patientService.getDoctors(filters);
      setDoctors(response.doctors || []);
    } catch (error) {
      setError('Failed to fetch doctors');
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDoctors();
  };

  const handleBookAppointment = (doctor) => {
    if (!user) {
      // Redirect to login with return url
      navigate('/login', { state: { redirectTo: '/doctors' } });
      return;
    }

    if (user.role !== 'patient') {
      alert("Access Denied: Only patients can book appointments. Please log in as a patient.");
      return;
    }

    setSelectedDoctor(doctor);
    setBookingData({
      doctor_id: doctor.id,
      appointment_date: '',
      reason: '',
      symptoms: ''
    });
    setBookingModal(true);
    setBookingSuccess('');
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (!bookingData.appointment_date || !bookingData.reason) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setBookingLoading(true);
      await patientService.bookAppointment(bookingData);
      setBookingSuccess('Appointment booked successfully!');
      setTimeout(() => {
        setBookingModal(false);
        setBookingSuccess('');
        fetchDoctors();
      }, 2000);
    } catch (error) {
      setError('Failed to book appointment');
      console.error('Error booking appointment:', error);
    } finally {
      setBookingLoading(false);
    }
  };

  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const getAvailabilityBadge = (isAvailable) => {
    return isAvailable ? (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
        Available
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        Unavailable
      </span>
    );
  };

  const getNextAvailableTimeSlots = () => {
    const today = new Date();
    const slots = [];

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      for (let hour = 9; hour <= 17; hour++) {
        const timeString = `${hour.toString().padStart(2, '0')}:00`;
        const dateTimeString = `${date.toISOString().split('T')[0]}T${timeString}`;
        slots.push(dateTimeString);
      }
    }

    return slots;
  };

  const formatDateTime = (dateTimeString) => {
    return new Date(dateTimeString).toLocaleString('en-US', {
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
          <p className="text-gray-600 text-lg font-medium">Loading doctors...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Find Doctors
            </h1>
            <p className="text-gray-500 mt-1 text-sm">Search and book appointments with healthcare professionals</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                name="search"
                placeholder="Search by doctor name..."
                value={filters.search}
                onChange={handleFilterChange}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>

            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <input
                type="text"
                name="specialization"
                placeholder="Specialization..."
                value={filters.specialization}
                onChange={handleFilterChange}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </form>
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
        {doctors.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
            <div className="text-center max-w-md mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No doctors found</h3>
              <p className="text-gray-500">Try adjusting your search criteria.</p>
            </div>
          </div>
        ) : (
          /* Doctors Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 flex flex-col"
              >
                {/* Doctor Header */}
                <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">
                      Dr. {doctor.user.first_name} {doctor.user.last_name}
                    </h3>
                    {getAvailabilityBadge(doctor.is_available)}
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="flex-1 py-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Specialization</p>
                      <p className="text-gray-800 font-medium">{doctor.specialization}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Qualification</p>
                      <p className="text-gray-800 font-medium">{doctor.qualification}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Experience</p>
                      <p className="text-gray-800 font-medium">{doctor.years_of_experience} years</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Consultation Fee</p>
                      <p className="text-lg font-bold text-gray-800">${doctor.consultation_fee}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact</p>
                      <p className="text-gray-800 font-medium text-sm">{doctor.user.phone || 'Not provided'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Address</p>
                      <p className="text-gray-800 font-medium text-sm">{doctor.user.address || 'Not provided'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">License Number</p>
                      <p className="text-gray-800 font-medium text-sm">{doctor.license_number}</p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-5 border-t border-gray-100">
                  <button
                    onClick={() => handleBookAppointment(doctor)}
                    disabled={!doctor.is_available}
                    className={`w-full py-3 px-4 rounded-xl font-semibold shadow-sm transition-all duration-200 flex items-center justify-center gap-2 ${doctor.is_available
                      ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white hover:shadow-md'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {doctor.is_available ? 'Book Appointment' : 'Not Available'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Booking Modal */}
        {bookingModal && selectedDoctor && (
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Book Appointment</h2>
                  <p className="text-sm text-gray-500 mt-1">Fill in the details to schedule your visit</p>
                </div>
                <button
                  onClick={() => setBookingModal(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                {bookingSuccess ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Success!</h3>
                    <p className="text-emerald-700 font-medium">{bookingSuccess}</p>
                    <p className="text-emerald-600 text-sm mt-2">You will be redirected shortly...</p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    {/* Doctor Information */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
                      <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Doctor Information
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p className="flex justify-between">
                          <span className="text-gray-600 font-medium">Name:</span>
                          <span className="text-gray-800 font-semibold">Dr. {selectedDoctor.user.first_name} {selectedDoctor.user.last_name}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-gray-600 font-medium">Specialization:</span>
                          <span className="text-gray-800 font-semibold">{selectedDoctor.specialization}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-gray-600 font-medium">Consultation Fee:</span>
                          <span className="text-gray-800 font-bold text-lg">${selectedDoctor.consultation_fee}</span>
                        </p>
                      </div>
                    </div>

                    {/* Appointment Date & Time */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Appointment Date & Time *
                      </label>
                      <input
                        type="datetime-local"
                        name="appointment_date"
                        value={bookingData.appointment_date}
                        onChange={handleBookingChange}
                        min={new Date().toISOString().slice(0, 16)}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-2">Select a date and time for your appointment</p>
                    </div>

                    {/* Quick Time Slots */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Quick Time Slots (Optional)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {getNextAvailableTimeSlots().slice(0, 6).map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${bookingData.appointment_date === slot
                              ? 'bg-gray-700 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                              }`}
                            onClick={() =>
                              setBookingData({
                                ...bookingData,
                                appointment_date: slot
                              })
                            }
                          >
                            {formatDateTime(slot)}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Click on a time slot to select it quickly</p>
                    </div>

                    {/* Reason for Visit */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Reason for Visit *
                      </label>
                      <textarea
                        name="reason"
                        value={bookingData.reason}
                        onChange={handleBookingChange}
                        placeholder="Please describe the reason for your visit..."
                        rows="3"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
                        required
                      />
                    </div>

                    {/* Symptoms */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Symptoms (Optional)
                      </label>
                      <textarea
                        name="symptoms"
                        value={bookingData.symptoms}
                        onChange={handleBookingChange}
                        placeholder="Describe any symptoms you're experiencing..."
                        rows="3"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Booking Summary */}
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                      <h4 className="font-bold text-base text-gray-800 mb-3">Payment Summary</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-gray-700">
                          <span>Consultation Fee:</span>
                          <span className="font-semibold">${selectedDoctor.consultation_fee}</span>
                        </div>
                        <div className="border-t border-gray-300 pt-2 mt-2">
                          <div className="flex justify-between text-lg font-bold text-gray-800">
                            <span>Total Amount:</span>
                            <span>${selectedDoctor.consultation_fee}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setBookingModal(false)}
                        className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={bookingLoading}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {bookingLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Booking...
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Confirm Booking
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Doctors;