// // // src/components/doctor/PrescriptionModal.jsx
// // import React, { useState } from 'react';
// // import doctorService from '../../services/doctorService';

// // function PrescriptionModal({ appointment, onClose, onSuccess }) {
// //   const [formData, setFormData] = useState({
// //     medicine_name: '',
// //     dosage: '',
// //     frequency: '',
// //     duration: '',
// //     instructions: ''
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
    
// //     if (!formData.medicine_name || !formData.dosage) {
// //       alert('Please fill in medicine name and dosage');
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       const prescriptionData = {
// //         appointment_id: appointment.id,
// //         ...formData
// //       };
      
// //       await doctorService.addPrescription(prescriptionData);
// //       alert('Prescription added successfully');
// //       setFormData({
// //         medicine_name: '',
// //         dosage: '',
// //         frequency: '',
// //         duration: '',
// //         instructions: ''
// //       });
// //       onSuccess();
// //     } catch (error) {
// //       alert('Failed to add prescription');
// //       console.error('Error adding prescription:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal">
// //         <div className="modal-header">
// //           <h2>Add Prescription</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>
        
// //         <div className="patient-info">
// //           <h4>Patient: {appointment.patient.user.first_name} {appointment.patient.user.last_name}</h4>
// //         </div>

// //         <form onSubmit={handleSubmit} className="prescription-form">
// //           <div className="form-group">
// //             <label>Medicine Name *</label>
// //             <input
// //               type="text"
// //               name="medicine_name"
// //               value={formData.medicine_name}
// //               onChange={handleChange}
// //               placeholder="Enter medicine name..."
// //               required
// //             />
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Dosage *</label>
// //               <input
// //                 type="text"
// //                 name="dosage"
// //                 value={formData.dosage}
// //                 onChange={handleChange}
// //                 placeholder="e.g., 10mg"
// //                 required
// //               />
// //             </div>
            
// //             <div className="form-group">
// //               <label>Frequency</label>
// //               <input
// //                 type="text"
// //                 name="frequency"
// //                 value={formData.frequency}
// //                 onChange={handleChange}
// //                 placeholder="e.g., Once daily"
// //               />
// //             </div>
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Duration</label>
// //               <input
// //                 type="text"
// //                 name="duration"
// //                 value={formData.duration}
// //                 onChange={handleChange}
// //                 placeholder="e.g., 30 days"
// //               />
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label>Instructions</label>
// //             <textarea
// //               name="instructions"
// //               value={formData.instructions}
// //               onChange={handleChange}
// //               placeholder="Special instructions for the patient..."
// //               rows="3"
// //             />
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Adding...' : 'Add Prescription'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default PrescriptionModal;












// // src/components/doctor/PrescriptionModal.jsx
// import React, { useState } from 'react';
// import doctorService from '../../services/doctorService';

// function PrescriptionModal({ appointment, onClose, onSuccess }) {
//   const [formData, setFormData] = useState({
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

//     if (!formData.medicine_name || !formData.dosage) {
//       alert('Please fill in medicine name and dosage');
//       return;
//     }

//     try {
//       setLoading(true);
//       const prescriptionData = {
//         appointment_id: appointment.id,
//         ...formData
//       };

//       await doctorService.addPrescription(prescriptionData);
//       alert('Prescription added successfully');
//       setFormData({
//         medicine_name: '',
//         dosage: '',
//         frequency: '',
//         duration: '',
//         instructions: ''
//       });
//       onSuccess();
//     } catch (error) {
//       alert('Failed to add prescription');
//       console.error('Error adding prescription:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50">
//       <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 animate-fadeIn">
        
//         {/* Header */}
//         <div className="flex items-center justify-between border-b pb-3 mb-4">
//           <h2 className="text-xl font-bold">Add Prescription</h2>
//           <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost text-xl">✕</button>
//         </div>

//         {/* Patient Info */}
//         <div className="mb-4">
//           <h4 className="text-lg font-semibold">
//             Patient: {appointment.patient.user.first_name} {appointment.patient.user.last_name}
//           </h4>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
          
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text font-semibold">Medicine Name *</span>
//             </label>
//             <input
//               type="text"
//               name="medicine_name"
//               value={formData.medicine_name}
//               onChange={handleChange}
//               placeholder="Enter medicine name..."
//               required
//               className="input input-bordered w-full"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-semibold">Dosage *</span>
//               </label>
//               <input
//                 type="text"
//                 name="dosage"
//                 value={formData.dosage}
//                 onChange={handleChange}
//                 placeholder="e.g., 10mg"
//                 required
//                 className="input input-bordered w-full"
//               />
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-semibold">Frequency</span>
//               </label>
//               <input
//                 type="text"
//                 name="frequency"
//                 value={formData.frequency}
//                 onChange={handleChange}
//                 placeholder="e.g., Once daily"
//                 className="input input-bordered w-full"
//               />
//             </div>
//           </div>

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text font-semibold">Duration</span>
//             </label>
//             <input
//               type="text"
//               name="duration"
//               value={formData.duration}
//               onChange={handleChange}
//               placeholder="e.g., 30 days"
//               className="input input-bordered w-full"
//             />
//           </div>

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text font-semibold">Instructions</span>
//             </label>
//             <textarea
//               name="instructions"
//               value={formData.instructions}
//               onChange={handleChange}
//               placeholder="Special instructions for the patient..."
//               rows="3"
//               className="textarea textarea-bordered w-full"
//             />
//           </div>

//           {/* Actions */}
//           <div className="flex justify-end gap-3 pt-3 border-t mt-3">
//             <button type="button" onClick={onClose} className="btn btn-ghost">Cancel</button>
//             <button type="submit" disabled={loading} className="btn btn-primary">
//               {loading ? 'Adding...' : 'Add Prescription'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PrescriptionModal;

















// src/components/doctor/PrescriptionModal.jsx
import React, { useState } from 'react';
import doctorService from '../../services/doctorService';

function PrescriptionModal({ appointment, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
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

    if (!formData.medicine_name || !formData.dosage) {
      alert('Please fill in medicine name and dosage');
      return;
    }

    try {
      setLoading(true);
      const prescriptionData = {
        appointment_id: appointment.id,
        ...formData
      };

      await doctorService.addPrescription(prescriptionData);
      alert('Prescription added successfully');
      setFormData({
        medicine_name: '',
        dosage: '',
        frequency: '',
        duration: '',
        instructions: ''
      });
      onSuccess();
    } catch (error) {
      alert('Failed to add prescription');
      console.error('Error adding prescription:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn overflow-y-auto ">
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

          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out;
          }
        `}
      </style>

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl animate-slideUp   overflow-y-auto max-h-3/4">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              Add Prescription
            </h2>
            <p className="text-sm text-gray-500 mt-1">Prescribe medication for the patient</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Patient Info */}
        <div className="px-6 py-4 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Patient</p>
              <h4 className="text-lg font-bold text-gray-800">
                {appointment.patient.user.first_name} {appointment.patient.user.last_name}
              </h4>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Medicine Name */}
          <div className="animate-scaleIn">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Medicine Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <input
                type="text"
                name="medicine_name"
                value={formData.medicine_name}
                onChange={handleChange}
                placeholder="Enter medicine name..."
                required
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Dosage and Frequency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="animate-scaleIn" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Dosage *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="dosage"
                  value={formData.dosage}
                  onChange={handleChange}
                  placeholder="e.g., 10mg"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="animate-scaleIn" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Frequency
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  placeholder="e.g., Once daily"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="animate-scaleIn" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Duration
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 30 days"
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="animate-scaleIn" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Instructions
            </label>
            <div className="relative">
              <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                placeholder="Special instructions for the patient..."
                rows="4"
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 animate-scaleIn" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-blue-700 mb-1">Prescription Tips</p>
                <p className="text-xs text-blue-600">Include clear dosage instructions and any important warnings or side effects the patient should be aware of.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
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
              className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Adding...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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

export default PrescriptionModal;