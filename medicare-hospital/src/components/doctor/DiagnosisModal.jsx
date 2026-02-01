// // // src/components/doctor/DiagnosisModal.jsx
// // import React, { useState } from 'react';
// // import doctorService from '../../services/doctorService';

// // function DiagnosisModal({ appointment, onClose, onSuccess }) {
// //   const [formData, setFormData] = useState({
// //     diagnosis: '',
// //     symptoms: '',
// //     treatment_plan: '',
// //     notes: '',
// //     follow_up_required: false,
// //     follow_up_date: ''
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
    
// //     if (!formData.diagnosis) {
// //       alert('Please enter a diagnosis');
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       const diagnosisData = {
// //         appointment_id: appointment.id,
// //         ...formData
// //       };
      
// //       await doctorService.addDiagnosis(diagnosisData);
// //       alert('Diagnosis added successfully');
// //       onSuccess();
// //     } catch (error) {
// //       alert('Failed to add diagnosis');
// //       console.error('Error adding diagnosis:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal large-modal">
// //         <div className="modal-header">
// //           <h2>Add Diagnosis</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>
        
// //         <div className="patient-info">
// //           <h4>Patient: {appointment.patient.user.first_name} {appointment.patient.user.last_name}</h4>
// //           <p><strong>Appointment Reason:</strong> {appointment.reason}</p>
// //           {appointment.symptoms && <p><strong>Symptoms:</strong> {appointment.symptoms}</p>}
// //         </div>

// //         <form onSubmit={handleSubmit} className="diagnosis-form">
// //           <div className="form-group">
// //             <label>Diagnosis *</label>
// //             <textarea
// //               name="diagnosis"
// //               value={formData.diagnosis}
// //               onChange={handleChange}
// //               placeholder="Enter the diagnosis..."
// //               rows="3"
// //               required
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Symptoms</label>
// //             <textarea
// //               name="symptoms"
// //               value={formData.symptoms}
// //               onChange={handleChange}
// //               placeholder="Describe the symptoms observed..."
// //               rows="3"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Treatment Plan</label>
// //             <textarea
// //               name="treatment_plan"
// //               value={formData.treatment_plan}
// //               onChange={handleChange}
// //               placeholder="Describe the treatment plan..."
// //               rows="3"
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

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label className="checkbox-label">
// //                 <input
// //                   type="checkbox"
// //                   name="follow_up_required"
// //                   checked={formData.follow_up_required}
// //                   onChange={handleChange}
// //                 />
// //                 Follow-up Required
// //               </label>
// //             </div>
            
// //             {formData.follow_up_required && (
// //               <div className="form-group">
// //                 <label>Follow-up Date</label>
// //                 <input
// //                   type="datetime-local"
// //                   name="follow_up_date"
// //                   value={formData.follow_up_date}
// //                   onChange={handleChange}
// //                   min={new Date().toISOString().slice(0, 16)}
// //                 />
// //               </div>
// //             )}
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Adding...' : 'Add Diagnosis'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DiagnosisModal;









// // src/components/doctor/DiagnosisModal.jsx
// import React, { useState } from 'react';
// import doctorService from '../../services/doctorService';

// function DiagnosisModal({ appointment, onClose, onSuccess }) {
//   const [formData, setFormData] = useState({
//     diagnosis: '',
//     symptoms: '',
//     treatment_plan: '',
//     notes: '',
//     follow_up_required: false,
//     follow_up_date: ''
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
    
//     if (!formData.diagnosis) {
//       alert('Please enter a diagnosis');
//       return;
//     }

//     try {
//       setLoading(true);
//       const diagnosisData = {
//         appointment_id: appointment.id,
//         ...formData
//       };
      
//       await doctorService.addDiagnosis(diagnosisData);
//       alert('Diagnosis added successfully');
//       onSuccess();
//     } catch (error) {
//       alert('Failed to add diagnosis');
//       console.error('Error adding diagnosis:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 bg-opacity-50  flex items-center justify-center ">
//       <div className="bg-white rounded-xl w-full max-w-2xl shadow-xl p-6 animate-fade-up">
        
//         {/* Header */}
//         <div className="flex justify-between items-center border-b pb-3">
//           <h2 className="text-2xl font-bold">Add Diagnosis</h2>
//           <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost text-xl">✕</button>
//         </div>
        
//         {/* Patient Info */}
//         <div className="mt-4 mb-4 space-y-1">
//           <h4 className="font-semibold text-lg">
//             Patient: {appointment.patient.user.first_name} {appointment.patient.user.last_name}
//           </h4>
//           <p><span className="font-semibold">Appointment Reason:</span> {appointment.reason}</p>
//           {appointment.symptoms && (
//             <p><span className="font-semibold">Symptoms:</span> {appointment.symptoms}</p>
//           )}
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">

//           <div className="form-control">
//             <label className="label font-semibold">Diagnosis* : </label>
//             <textarea
//               name="diagnosis"
//               value={formData.diagnosis}
//               onChange={handleChange}
//               placeholder="Enter the diagnosis..."
//               rows="3"
//               required
//               className="textarea bg-gray-300 textarea-bordered"
//             />
//           </div>

//           <div className="form-control">
//             <label className="label font-semibold">Symptoms : </label>
//             <textarea
//               name="symptoms"
//               value={formData.symptoms}
//               onChange={handleChange}
//               placeholder="Describe the symptoms observed..."
//               rows="3"
//               className="textarea bg-gray-300 textarea-bordered"
//             />
//           </div>

//           <div className="form-control">
//             <label className="label font-semibold">Treatment Plan : </label>
//             <textarea
//               name="treatment_plan"
//               value={formData.treatment_plan}
//               onChange={handleChange}
//               placeholder="Describe the treatment plan..."
//               rows="3"
//               className="textarea bg-gray-300 textarea-bordered"
//             />
//           </div>

//           <div className="form-control">
//             <label className="label font-semibold">Notes : </label>
//             <textarea
//               name="notes"
//               value={formData.notes}
//               onChange={handleChange}
//               placeholder="Additional notes..."
//               rows="2"
//               className="textarea bg-gray-300 textarea-bordered "/>
//           </div>

//           <div className="flex items-center gap-4">
//             <label className="cursor-pointer flex items-center gap-2 font-semibold">
//               <input
//                 type="checkbox"
//                 name="follow_up_required"
//                 checked={formData.follow_up_required}
//                 onChange={handleChange}
//                 className="checkbox"
//               />
//               Follow-up Required
//             </label>

//             {formData.follow_up_required && (
//               <div className="form-control">
//                 <label className="label font-semibold">Follow-up Date</label>
//                 <input
//                   type="datetime-local"
//                   name="follow_up_date"
//                   value={formData.follow_up_date}
//                   onChange={handleChange}
//                   min={new Date().toISOString().slice(0, 16)}
//                   className="input input-bordered"
//                 />
//               </div>
//             )}
//           </div>

//           {/* Actions */}
//           <div className="flex justify-end gap-3 mt-4">
//             <button type="button" onClick={onClose} className="btn btn-outline">
//               Cancel
//             </button>
//             <button type="submit" className="btn btn-primary" disabled={loading}>
//               {loading ? "Adding..." : "Add Diagnosis"}
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default DiagnosisModal;













import React, { useState } from 'react';
import doctorService from '../../services/doctorService';
import { motion } from 'framer-motion';
import { FaStethoscope, FaNotesMedical, FaFileMedical, FaCalendarCheck, FaUser, FaClipboardList } from 'react-icons/fa';

function DiagnosisModal({ appointment, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    diagnosis: '',
    symptoms: '',
    treatment_plan: '',
    notes: '',
    follow_up_required: false,
    follow_up_date: ''
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
    
    if (!formData.diagnosis) {
      alert('Please enter a diagnosis');
      return;
    }

    try {
      setLoading(true);
      const diagnosisData = {
        appointment_id: appointment.id,
        ...formData
      };
      
      await doctorService.addDiagnosis(diagnosisData);
      alert('Diagnosis added successfully');
      onSuccess();
    } catch (error) {
      alert('Failed to add diagnosis');
      console.error('Error adding diagnosis:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl my-8"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-5 rounded-t-3xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <FaStethoscope className="text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Add Diagnosis</h2>
              <p className="text-sm text-gray-300 mt-0.5">Complete patient diagnosis form</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-white hover:bg-white/20 rounded-full p-2 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Patient Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-5 mb-6 border border-gray-200"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center flex-shrink-0">
                <FaUser className="text-white" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Patient Information</label>
                <h4 className="text-lg font-bold text-gray-900">
                  {appointment.patient.user.first_name} {appointment.patient.user.last_name}
                </h4>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <FaClipboardList className="text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-700">Appointment Reason:</span>
                  <span className="text-gray-800 ml-2">{appointment.reason}</span>
                </div>
              </div>
              {appointment.symptoms && (
                <div className="flex items-start gap-2">
                  <FaNotesMedical className="text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-700">Symptoms:</span>
                    <span className="text-gray-800 ml-2">{appointment.symptoms}</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Form */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FaFileMedical className="text-gray-600" />
                Diagnosis *
              </label>
              <textarea
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleChange}
                placeholder="Enter the diagnosis..."
                rows="3"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FaNotesMedical className="text-gray-600" />
                Symptoms
              </label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                placeholder="Describe the symptoms observed..."
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FaStethoscope className="text-gray-600" />
                Treatment Plan
              </label>
              <textarea
                name="treatment_plan"
                value={formData.treatment_plan}
                onChange={handleChange}
                placeholder="Describe the treatment plan..."
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FaClipboardList className="text-gray-600" />
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Additional notes..."
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-5 border border-gray-200"
            >
              <label className="flex items-center gap-3 cursor-pointer mb-4">
                <input
                  type="checkbox"
                  name="follow_up_required"
                  checked={formData.follow_up_required}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-gray-300 text-gray-800 focus:ring-gray-800 cursor-pointer"
                />
                <div className="flex items-center gap-2">
                  <FaCalendarCheck className="text-gray-600" />
                  <span className="font-bold text-gray-800">Follow-up Required</span>
                </div>
              </label>

              {formData.follow_up_required && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Follow-up Date & Time</label>
                  <input
                    type="datetime-local"
                    name="follow_up_date"
                    value={formData.follow_up_date}
                    onChange={handleChange}
                    min={new Date().toISOString().slice(0, 16)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-3xl flex justify-end gap-3 border-t border-gray-200">
          <button 
            type="button" 
            onClick={onClose} 
            className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            disabled={loading} 
            className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Adding...
              </span>
            ) : (
              'Add Diagnosis'
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default DiagnosisModal;
