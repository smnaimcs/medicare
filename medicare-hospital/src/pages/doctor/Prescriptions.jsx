// // src/pages/doctor/Prescriptions.jsx
// import React, { useState, useEffect } from 'react';
// import doctorService from '../../services/doctorService';
// import medicalService from '../../services/medicalService';

// function DoctorPrescriptions() {
//   const [prescriptions, setPrescriptions] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [filters, setFilters] = useState({
//     patient_id: '',
//     status: ''
//   });

//   useEffect(() => {
//     fetchAppointments();
//     fetchPrescriptions();
//   }, [filters]);

//   const fetchAppointments = async () => {
//     try {
//       const response = await doctorService.getAppointments({ status: 'completed' });
//       setAppointments(response.appointments || []);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   const fetchPrescriptions = async () => {
//     try {
//       setLoading(true);
//       // Since we don't have a direct endpoint for doctor's prescriptions,
//       // we'll filter from appointments or create a mock data structure
//       const appointmentsResponse = await doctorService.getAppointments();
//       const allAppointments = appointmentsResponse.appointments || [];
      
//       // Extract prescriptions from appointments (this would ideally come from a dedicated endpoint)
//       const allPrescriptions = [];
//       allAppointments.forEach(appointment => {
//         if (appointment.prescriptions) {
//           appointment.prescriptions.forEach(prescription => {
//             allPrescriptions.push({
//               ...prescription,
//               patient_name: `${appointment.patient.user.first_name} ${appointment.patient.user.last_name}`,
//               appointment_date: appointment.appointment_date
//             });
//           });
//         }
//       });
      
//       setPrescriptions(allPrescriptions);
//     } catch (error) {
//       setError('Failed to fetch prescriptions');
//       console.error('Error fetching prescriptions:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddPrescription = (appointment) => {
//     setSelectedAppointment(appointment);
//     setShowAddModal(true);
//   };

//   const handlePrescriptionSuccess = () => {
//     setShowAddModal(false);
//     setSelectedAppointment(null);
//     fetchPrescriptions();
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

//   const getDispensedStatus = (isDispensed) => {
//     return isDispensed ? 
//       <span className="status-badge status-completed">Dispensed</span> :
//       <span className="status-badge status-pending">Pending</span>;
//   };

//   if (loading) {
//     return <div className="loading">Loading prescriptions...</div>;
//   }

//   return (
//     <div className="page-container">
//       <div className="page-header">
//         <h1>Prescriptions Management</h1>
//         <button 
//           onClick={() => setShowAddModal(true)}
//           className="btn-primary"
//         >
//           Add New Prescription
//         </button>
//       </div>

//       {error && <div className="error-message">{error}</div>}

//       {/* Recent Appointments for Quick Prescription */}
//       <div className="section">
//         <h2>Recent Completed Appointments</h2>
//         <div className="appointments-grid">
//           {appointments.slice(0, 5).map((appointment) => (
//             <div key={appointment.id} className="appointment-card compact">
//               <div className="appointment-header">
//                 <h4>{appointment.patient.user.first_name} {appointment.patient.user.last_name}</h4>
//                 <span className="appointment-date">
//                   {formatDate(appointment.appointment_date)}
//                 </span>
//               </div>
//               <div className="appointment-details">
//                 <p><strong>Reason:</strong> {appointment.reason}</p>
//                 {appointment.symptoms && <p><strong>Symptoms:</strong> {appointment.symptoms}</p>}
//               </div>
//               <div className="appointment-actions">
//                 <button 
//                   onClick={() => handleAddPrescription(appointment)}
//                   className="btn-primary"
//                 >
//                   Add Prescription
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Prescriptions List */}
//       <div className="section">
//         <h2>All Prescriptions</h2>
//         {prescriptions.length === 0 ? (
//           <div className="empty-state">
//             <h3>No prescriptions found</h3>
//             <p>Prescriptions you create will appear here.</p>
//           </div>
//         ) : (
//           <div className="prescriptions-list">
//             {prescriptions.map((prescription) => (
//               <div key={prescription.id} className="prescription-card">
//                 <div className="prescription-header">
//                   <div>
//                     <h3>{prescription.medicine_name}</h3>
//                     <p className="patient-name">For: {prescription.patient_name}</p>
//                   </div>
//                   {getDispensedStatus(prescription.is_dispensed)}
//                 </div>
                
//                 <div className="prescription-details">
//                   <div className="detail-row">
//                     <div className="detail-item">
//                       <label>Dosage:</label>
//                       <span>{prescription.dosage}</span>
//                     </div>
//                     <div className="detail-item">
//                       <label>Frequency:</label>
//                       <span>{prescription.frequency}</span>
//                     </div>
//                   </div>
                  
//                   <div className="detail-row">
//                     <div className="detail-item">
//                       <label>Duration:</label>
//                       <span>{prescription.duration}</span>
//                     </div>
//                     <div className="detail-item">
//                       <label>Prescribed:</label>
//                       <span>{formatDate(prescription.created_at)}</span>
//                     </div>
//                   </div>

//                   {prescription.instructions && (
//                     <div className="detail-item">
//                       <label>Instructions:</label>
//                       <span>{prescription.instructions}</span>
//                     </div>
//                   )}

//                   {prescription.dispensed_at && (
//                     <div className="detail-item">
//                       <label>Dispensed:</label>
//                       <span>{formatDate(prescription.dispensed_at)}</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="prescription-actions">
//                   {!prescription.is_dispensed && (
//                     <button className="btn-success">
//                       Mark as Dispensed
//                     </button>
//                   )}
//                   <button className="btn-secondary">
//                     Print
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Add Prescription Modal */}
//       {showAddModal && (
//         <PrescriptionModal
//           appointment={selectedAppointment}
//           appointments={appointments}
//           onClose={() => {
//             setShowAddModal(false);
//             setSelectedAppointment(null);
//           }}
//           onSuccess={handlePrescriptionSuccess}
//         />
//       )}
//     </div>
//   );
// }

// // Enhanced Prescription Modal for standalone use
// function PrescriptionModal({ appointment, appointments, onClose, onSuccess }) {
//   const [formData, setFormData] = useState({
//     appointment_id: appointment?.id || '',
//     medicine_name: '',
//     dosage: '',
//     frequency: '',
//     duration: '',
//     instructions: ''
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
    
//     if (!formData.medicine_name || !formData.dosage || !formData.appointment_id) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     try {
//       setLoading(true);
//       await doctorService.addPrescription(formData);
//       alert('Prescription added successfully');
//       onSuccess();
//     } catch (error) {
//       alert('Failed to add prescription');
//       console.error('Error adding prescription:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-header">
//           <h2>Add New Prescription</h2>
//           <button onClick={onClose} className="btn-close">×</button>
//         </div>

//         <form onSubmit={handleSubmit} className="prescription-form">
//           <div className="form-group">
//             <label>Appointment *</label>
//             <select
//               name="appointment_id"
//               value={formData.appointment_id}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Appointment</option>
//               {appointments.map((apt) => (
//                 <option key={apt.id} value={apt.id}>
//                   {apt.patient.user.first_name} {apt.patient.user.last_name} - {new Date(apt.appointment_date).toLocaleDateString()}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Medicine Name *</label>
//             <input
//               type="text"
//               name="medicine_name"
//               value={formData.medicine_name}
//               onChange={handleChange}
//               placeholder="Enter medicine name..."
//               required
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Dosage *</label>
//               <input
//                 type="text"
//                 name="dosage"
//                 value={formData.dosage}
//                 onChange={handleChange}
//                 placeholder="e.g., 10mg"
//                 required
//               />
//             </div>
            
//             <div className="form-group">
//               <label>Frequency</label>
//               <input
//                 type="text"
//                 name="frequency"
//                 value={formData.frequency}
//                 onChange={handleChange}
//                 placeholder="e.g., Once daily"
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label>Duration</label>
//             <input
//               type="text"
//               name="duration"
//               value={formData.duration}
//               onChange={handleChange}
//               placeholder="e.g., 30 days"
//             />
//           </div>

//           <div className="form-group">
//             <label>Instructions</label>
//             <textarea
//               name="instructions"
//               value={formData.instructions}
//               onChange={handleChange}
//               placeholder="Special instructions for the patient..."
//               rows="3"
//             />
//           </div>

//           <div className="modal-actions">
//             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
//             <button type="submit" disabled={loading} className="btn-primary">
//               {loading ? 'Adding...' : 'Add Prescription'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default DoctorPrescriptions;

















// src/pages/doctor/Prescriptions.jsx
import React, { useState, useEffect } from 'react';
import doctorService from '../../services/doctorService';
import medicalService from '../../services/medicalService';

// Enhanced Prescription Modal for standalone use
function PrescriptionModal({ appointment, appointments, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    appointment_id: appointment?.id || '',
    medicine_name: '',
    dosage: '',
    frequency: '',
    duration: '',
    instructions: ''
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
    
    if (!formData.medicine_name || !formData.dosage || !formData.appointment_id) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      await doctorService.addPrescription(formData);
      alert('Prescription added successfully');
      onSuccess();
    } catch (error) {
      alert('Failed to add prescription');
      console.error('Error adding prescription:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Add New Prescription</h2>
            <p className="text-sm text-gray-500 mt-1">Fill in the prescription details</p>
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
          {/* Appointment Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Appointment *
            </label>
            <select
              name="appointment_id"
              value={formData.appointment_id}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Select Appointment</option>
              {appointments.map((apt) => (
                <option key={apt.id} value={apt.id}>
                  {apt.patient.user.first_name} {apt.patient.user.last_name} - {new Date(apt.appointment_date).toLocaleDateString()}
                </option>
              ))}
            </select>
          </div>

          {/* Medicine Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Medicine Name *
            </label>
            <input
              type="text"
              name="medicine_name"
              value={formData.medicine_name}
              onChange={handleChange}
              placeholder="Enter medicine name..."
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Dosage and Frequency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Dosage *
              </label>
              <input
                type="text"
                name="dosage"
                value={formData.dosage}
                onChange={handleChange}
                placeholder="e.g., 10mg"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Frequency
              </label>
              <input
                type="text"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                placeholder="e.g., Once daily"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 30 days"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Instructions
            </label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="Special instructions for the patient..."
              rows="4"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
            />
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
                  Adding...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add Prescription
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function DoctorPrescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filters, setFilters] = useState({
    patient_id: '',
    status: ''
  });

  useEffect(() => {
    fetchAppointments();
    fetchPrescriptions();
  }, [filters]);

  const fetchAppointments = async () => {
    try {
      const response = await doctorService.getAppointments({ status: 'completed' });
      setAppointments(response.appointments || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchPrescriptions = async () => {
    try {
      setLoading(true);
      // Since we don't have a direct endpoint for doctor's prescriptions,
      // we'll filter from appointments or create a mock data structure
      const appointmentsResponse = await doctorService.getAppointments();
      const allAppointments = appointmentsResponse.appointments || [];
      
      // Extract prescriptions from appointments (this would ideally come from a dedicated endpoint)
      const allPrescriptions = [];
      allAppointments.forEach(appointment => {
        if (appointment.prescriptions) {
          appointment.prescriptions.forEach(prescription => {
            allPrescriptions.push({
              ...prescription,
              patient_name: `${appointment.patient.user.first_name} ${appointment.patient.user.last_name}`,
              appointment_date: appointment.appointment_date
            });
          });
        }
      });
      
      setPrescriptions(allPrescriptions);
    } catch (error) {
      setError('Failed to fetch prescriptions');
      console.error('Error fetching prescriptions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPrescription = (appointment) => {
    setSelectedAppointment(appointment);
    setShowAddModal(true);
  };

  const handlePrescriptionSuccess = () => {
    setShowAddModal(false);
    setSelectedAppointment(null);
    fetchPrescriptions();
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

  const getDispensedStatus = (isDispensed) => {
    return isDispensed ? (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
        Dispensed
      </span>
    ) : (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-200">
        <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
        Pending
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-600 mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading prescriptions...</p>
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

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
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

          .animate-slideInRight {
            animation: slideInRight 0.5s ease-out;
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
                Prescriptions Management
              </h1>
              <p className="text-gray-500 mt-1 text-sm">Create and manage patient prescriptions</p>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add New Prescription
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

        {/* Recent Appointments Section */}
        {appointments.length > 0 && (
          <div className="space-y-6 animate-slideInLeft">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Recent Completed Appointments</h2>
                <p className="text-sm text-gray-500">Quick access to add prescriptions</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appointments.slice(0, 5).map((appointment, index) => (
                <div
                  key={appointment.id}
                  className={`group bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-all duration-300 hover:border-gray-300 animate-slideUp stagger-${index + 1}`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 truncate">
                        {appointment.patient.user.first_name} {appointment.patient.user.last_name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(appointment.appointment_date)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <p className="text-gray-700">
                      <span className="font-semibold">Reason:</span> {appointment.reason}
                    </p>
                    {appointment.symptoms && (
                      <p className="text-gray-700">
                        <span className="font-semibold">Symptoms:</span> {appointment.symptoms}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddPrescription(appointment)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Add Prescription
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Prescriptions Section */}
        <div className="space-y-6 animate-slideInRight">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">All Prescriptions</h2>
              <p className="text-sm text-gray-500">Complete list of all prescriptions</p>
            </div>
          </div>

          {prescriptions.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
              <div className="text-center max-w-md mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No prescriptions found</h3>
                <p className="text-gray-500">Prescriptions you create will appear here.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {prescriptions.map((prescription, index) => (
                <div
                  key={prescription.id}
                  className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 animate-slideUp stagger-${Math.min(index + 1, 6)}`}
                >
                  {/* Prescription Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {prescription.medicine_name}
                        </h3>
                        <p className="text-sm text-gray-500">For: {prescription.patient_name}</p>
                      </div>
                    </div>
                    {getDispensedStatus(prescription.is_dispensed)}
                  </div>

                  {/* Prescription Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Dosage</label>
                        <span className="text-gray-800 font-medium">{prescription.dosage}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Frequency</label>
                        <span className="text-gray-800 font-medium">{prescription.frequency}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Duration</label>
                        <span className="text-gray-800 font-medium">{prescription.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Prescribed</label>
                        <span className="text-gray-800 font-medium text-sm">{formatDate(prescription.created_at)}</span>
                      </div>
                    </div>

                    {prescription.dispensed_at && (
                      <div className="flex items-start gap-3 md:col-span-2">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Dispensed</label>
                          <span className="text-gray-800 font-medium text-sm">{formatDate(prescription.dispensed_at)}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Instructions */}
                  {prescription.instructions && (
                    <div className="py-5 border-t border-gray-100">
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Instructions
                        </label>
                        <p className="text-gray-800">{prescription.instructions}</p>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-5 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {!prescription.is_dispensed && (
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Mark as Dispensed
                        </button>
                      )}
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Prescription Modal */}
      {showAddModal && (
        <PrescriptionModal
          appointment={selectedAppointment}
          appointments={appointments}
          onClose={() => {
            setShowAddModal(false);
            setSelectedAppointment(null);
          }}
          onSuccess={handlePrescriptionSuccess}
        />
      )}
    </div>
  );
}

export default DoctorPrescriptions;