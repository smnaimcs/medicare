// // // src/components/doctor/VitalSignsModal.jsx
// // import React, { useState } from 'react';
// // import medicalService from '../../services/medicalService';

// // function VitalSignsModal({ appointment, onClose, onSuccess }) {
// //   const [formData, setFormData] = useState({
// //     blood_pressure_systolic: '',
// //     blood_pressure_diastolic: '',
// //     heart_rate: '',
// //     respiratory_rate: '',
// //     temperature: '',
// //     oxygen_saturation: '',
// //     weight: '',
// //     height: '',
// //     blood_sugar: '',
// //     notes: ''
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
    
// //     if (!formData.blood_pressure_systolic || !formData.blood_pressure_diastolic) {
// //       alert('Please enter blood pressure readings');
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       const vitalData = {
// //         patient_id: appointment.patient.id,
// //         ...formData
// //       };
      
// //       await medicalService.recordVitalSigns(vitalData);
// //       alert('Vital signs recorded successfully');
// //       onSuccess();
// //     } catch (error) {
// //       alert('Failed to record vital signs');
// //       console.error('Error recording vital signs:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal large-modal">
// //         <div className="modal-header">
// //           <h2>Record Vital Signs</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>
        
// //         <div className="patient-info">
// //           <h4>Patient: {appointment.patient.user.first_name} {appointment.patient.user.last_name}</h4>
// //         </div>

// //         <form onSubmit={handleSubmit} className="vital-signs-form">
// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Blood Pressure (Systolic) *</label>
// //               <input
// //                 type="number"
// //                 name="blood_pressure_systolic"
// //                 value={formData.blood_pressure_systolic}
// //                 onChange={handleChange}
// //                 placeholder="120"
// //                 required
// //               />
// //             </div>
            
// //             <div className="form-group">
// //               <label>Blood Pressure (Diastolic) *</label>
// //               <input
// //                 type="number"
// //                 name="blood_pressure_diastolic"
// //                 value={formData.blood_pressure_diastolic}
// //                 onChange={handleChange}
// //                 placeholder="80"
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Heart Rate (bpm)</label>
// //               <input
// //                 type="number"
// //                 name="heart_rate"
// //                 value={formData.heart_rate}
// //                 onChange={handleChange}
// //                 placeholder="72"
// //               />
// //             </div>
            
// //             <div className="form-group">
// //               <label>Respiratory Rate</label>
// //               <input
// //                 type="number"
// //                 name="respiratory_rate"
// //                 value={formData.respiratory_rate}
// //                 onChange={handleChange}
// //                 placeholder="16"
// //               />
// //             </div>
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Temperature (°F)</label>
// //               <input
// //                 type="number"
// //                 step="0.1"
// //                 name="temperature"
// //                 value={formData.temperature}
// //                 onChange={handleChange}
// //                 placeholder="98.6"
// //               />
// //             </div>
            
// //             <div className="form-group">
// //               <label>Oxygen Saturation (%)</label>
// //               <input
// //                 type="number"
// //                 step="0.1"
// //                 name="oxygen_saturation"
// //                 value={formData.oxygen_saturation}
// //                 onChange={handleChange}
// //                 placeholder="98"
// //               />
// //             </div>
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Weight (kg)</label>
// //               <input
// //                 type="number"
// //                 step="0.1"
// //                 name="weight"
// //                 value={formData.weight}
// //                 onChange={handleChange}
// //                 placeholder="70"
// //               />
// //             </div>
            
// //             <div className="form-group">
// //               <label>Height (cm)</label>
// //               <input
// //                 type="number"
// //                 step="0.1"
// //                 name="height"
// //                 value={formData.height}
// //                 onChange={handleChange}
// //                 placeholder="175"
// //               />
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label>Blood Sugar (mg/dL)</label>
// //             <input
// //               type="number"
// //               step="0.1"
// //               name="blood_sugar"
// //               value={formData.blood_sugar}
// //               onChange={handleChange}
// //               placeholder="95"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Notes</label>
// //             <textarea
// //               name="notes"
// //               value={formData.notes}
// //               onChange={handleChange}
// //               placeholder="Additional notes..."
// //               rows="2"
// //             />
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Recording...' : 'Record Vital Signs'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default VitalSignsModal;















// import React, { useState } from 'react';
// import medicalService from '../../services/medicalService';

// function VitalSignsModal({ appointment, onClose, onSuccess }) {
//   const [formData, setFormData] = useState({
//     blood_pressure_systolic: '',
//     blood_pressure_diastolic: '',
//     heart_rate: '',
//     respiratory_rate: '',
//     temperature: '',
//     oxygen_saturation: '',
//     weight: '',
//     height: '',
//     blood_sugar: '',
//     notes: ''
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

//     if (!formData.blood_pressure_systolic || !formData.blood_pressure_diastolic) {
//       alert('Please enter blood pressure readings');
//       return;
//     }

//     try {
//       setLoading(true);
//       const vitalData = {
//         patient_id: appointment.patient.id,
//         ...formData
//       };

//       await medicalService.recordVitalSigns(vitalData);
//       alert('Vital signs recorded successfully');
//       onSuccess();
//     } catch (error) {
//       alert('Failed to record vital signs');
//       console.error('Error recording vital signs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <dialog open className="modal modal-open">
//       <div className="modal-box max-w-4xl">
        
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Record Vital Signs</h2>
//           <button onClick={onClose} className="btn btn-sm btn-circle btn-error text-white">✕</button>
//         </div>

//         <div className="mb-4">
//           <h4 className="font-semibold text-lg">
//             Patient: {appointment.patient.user.first_name} {appointment.patient.user.last_name}
//           </h4>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* BP */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <label className="form-control">
//               <span className="label-text">Blood Pressure (Systolic) *</span>
//               <input
//                 type="number"
//                 name="blood_pressure_systolic"
//                 value={formData.blood_pressure_systolic}
//                 onChange={handleChange}
//                 placeholder="120"
//                 className="input input-bordered"
//                 required
//               />
//             </label>

//             <label className="form-control">
//               <span className="label-text">Blood Pressure (Diastolic) *</span>
//               <input
//                 type="number"
//                 name="blood_pressure_diastolic"
//                 value={formData.blood_pressure_diastolic}
//                 onChange={handleChange}
//                 placeholder="80"
//                 className="input input-bordered"
//                 required
//               />
//             </label>
//           </div>

//           {/* Heart/Resp */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <label className="form-control">
//               <span className="label-text">Heart Rate (bpm)</span>
//               <input
//                 type="number"
//                 name="heart_rate"
//                 value={formData.heart_rate}
//                 onChange={handleChange}
//                 placeholder="72"
//                 className="input input-bordered"
//               />
//             </label>

//             <label className="form-control">
//               <span className="label-text">Respiratory Rate</span>
//               <input
//                 type="number"
//                 name="respiratory_rate"
//                 value={formData.respiratory_rate}
//                 onChange={handleChange}
//                 placeholder="16"
//                 className="input input-bordered"
//               />
//             </label>
//           </div>

//           {/* Temp / Oxygen */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <label className="form-control">
//               <span className="label-text">Temperature (°F)</span>
//               <input
//                 type="number"
//                 step="0.1"
//                 name="temperature"
//                 value={formData.temperature}
//                 onChange={handleChange}
//                 placeholder="98.6"
//                 className="input input-bordered"
//               />
//             </label>

//             <label className="form-control">
//               <span className="label-text">Oxygen Saturation (%)</span>
//               <input
//                 type="number"
//                 step="0.1"
//                 name="oxygen_saturation"
//                 value={formData.oxygen_saturation}
//                 onChange={handleChange}
//                 placeholder="98"
//                 className="input input-bordered"
//               />
//             </label>
//           </div>

//           {/* Weight / Height */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <label className="form-control">
//               <span className="label-text">Weight (kg)</span>
//               <input
//                 type="number"
//                 step="0.1"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//                 placeholder="70"
//                 className="input input-bordered"
//               />
//             </label>

//             <label className="form-control">
//               <span className="label-text">Height (cm)</span>
//               <input
//                 type="number"
//                 step="0.1"
//                 name="height"
//                 value={formData.height}
//                 onChange={handleChange}
//                 placeholder="175"
//                 className="input input-bordered"
//               />
//             </label>
//           </div>

//           <label className="form-control">
//             <span className="label-text">Blood Sugar (mg/dL)</span>
//             <input
//               type="number"
//               step="0.1"
//               name="blood_sugar"
//               value={formData.blood_sugar}
//               onChange={handleChange}
//               placeholder="95"
//               className="input input-bordered"
//             />
//           </label>

//           <label className="form-control">
//             <span className="label-text">Notes</span>
//             <textarea
//               name="notes"
//               value={formData.notes}
//               onChange={handleChange}
//               placeholder="Additional notes..."
//               rows="2"
//               className="textarea textarea-bordered"
//             />
//           </label>

//           {/* Actions */}
//           <div className="modal-action">
//             <button type="button" onClick={onClose} className="btn btn-secondary">Cancel</button>
//             <button type="submit" disabled={loading} className="btn btn-primary">
//               {loading ? 'Recording...' : 'Record Vital Signs'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </dialog>
//   );
// }

// export default VitalSignsModal;























import React, { useState } from 'react';
import medicalService from '../../services/medicalService';

function VitalSignsModal({ appointment, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    blood_pressure_systolic: '',
    blood_pressure_diastolic: '',
    heart_rate: '',
    respiratory_rate: '',
    temperature: '',
    oxygen_saturation: '',
    weight: '',
    height: '',
    blood_sugar: '',
    notes: ''
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

    if (!formData.blood_pressure_systolic || !formData.blood_pressure_diastolic) {
      alert('Please enter blood pressure readings');
      return;
    }

    try {
      setLoading(true);
      const vitalData = {
        patient_id: appointment.patient.id,
        ...formData
      };

      await medicalService.recordVitalSigns(vitalData);
      alert('Vital signs recorded successfully');
      onSuccess();
    } catch (error) {
      alert('Failed to record vital signs');
      console.error('Error recording vital signs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn overflow-y-auto">
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

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8 animate-slideUp">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              Record Vital Signs
            </h2>
            <p className="text-sm text-gray-500 mt-1">Document patient's current vital measurements</p>
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
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-300px)] overflow-y-auto">
          {/* Blood Pressure */}
          <div className="animate-scaleIn">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-gray-800">Blood Pressure *</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Systolic</label>
                <input
                  type="number"
                  name="blood_pressure_systolic"
                  value={formData.blood_pressure_systolic}
                  onChange={handleChange}
                  placeholder="120"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Diastolic</label>
                <input
                  type="number"
                  name="blood_pressure_diastolic"
                  value={formData.blood_pressure_diastolic}
                  onChange={handleChange}
                  placeholder="80"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>
          </div>

          {/* Heart Rate & Respiratory Rate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate-scaleIn" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-gray-800">Heart Rate</h3>
              </div>
              <input
                type="number"
                name="heart_rate"
                value={formData.heart_rate}
                onChange={handleChange}
                placeholder="72"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
              <p className="text-xs text-gray-500 mt-2">Beats per minute (bpm)</p>
            </div>

            <div className="animate-scaleIn" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-gray-800">Respiratory Rate</h3>
              </div>
              <input
                type="number"
                name="respiratory_rate"
                value={formData.respiratory_rate}
                onChange={handleChange}
                placeholder="16"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
              <p className="text-xs text-gray-500 mt-2">Breaths per minute</p>
            </div>
          </div>

          {/* Temperature & Oxygen Saturation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate-scaleIn" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-gray-800">Temperature</h3>
              </div>
              <input
                type="number"
                step="0.1"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                placeholder="98.6"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
              <p className="text-xs text-gray-500 mt-2">Degrees Fahrenheit (°F)</p>
            </div>

            <div className="animate-scaleIn" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                  <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-gray-800">Oxygen Saturation</h3>
              </div>
              <input
                type="number"
                step="0.1"
                name="oxygen_saturation"
                value={formData.oxygen_saturation}
                onChange={handleChange}
                placeholder="98"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
              <p className="text-xs text-gray-500 mt-2">Percentage (%)</p>
            </div>
          </div>

          {/* Weight & Height */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate-scaleIn" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-gray-800">Weight</h3>
              </div>
              <input
                type="number"
                step="0.1"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="70"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
              <p className="text-xs text-gray-500 mt-2">Kilograms (kg)</p>
            </div>

            <div className="animate-scaleIn" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-gray-800">Height</h3>
              </div>
              <input
                type="number"
                step="0.1"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="175"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
              <p className="text-xs text-gray-500 mt-2">Centimeters (cm)</p>
            </div>
          </div>

          {/* Blood Sugar */}
          <div className="animate-scaleIn" style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-gray-800">Blood Sugar</h3>
            </div>
            <input
              type="number"
              step="0.1"
              name="blood_sugar"
              value={formData.blood_sugar}
              onChange={handleChange}
              placeholder="95"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
            />
            <p className="text-xs text-gray-500 mt-2">Milligrams per deciliter (mg/dL)</p>
          </div>

          {/* Notes */}
          <div className="animate-scaleIn" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-gray-800">Additional Notes</h3>
            </div>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional notes..."
              rows="3"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 animate-scaleIn" style={{ animationDelay: '0.9s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-blue-700 mb-1">Recording Tips</p>
                <p className="text-xs text-blue-600">Ensure all measurements are accurate. Blood pressure readings are required. Add notes for any abnormal readings or patient concerns.</p>
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
              className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Recording...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Record Vital Signs
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VitalSignsModal;