// // src/pages/nurse/VitalSigns.jsx
// import React, { useState, useEffect } from 'react';
// import staffService from '../../services/staffService';

// function NurseVitalSigns() {
//   const [vitalSigns, setVitalSigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [showRecordModal, setShowRecordModal] = useState(false);
//   const [filters, setFilters] = useState({
//     patient_id: '',
//     date_from: '',
//     date_to: ''
//   });

//   useEffect(() => {
//     fetchVitalSigns();
//   }, [filters]);

//   const fetchVitalSigns = async () => {
//     try {
//       setLoading(true);
//       const response = await staffService.getVitalSigns(filters);
//       setVitalSigns(response.vital_signs || []);
//     } catch (error) {
//     //   setError('Failed to fetch vital signs');
//     //   setError('Patient Id is required to get vital signs');
//       console.error('Error fetching vital signs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRecordVitalSigns = async (vitalData) => {
//     try {
//       await staffService.recordVitalSigns(vitalData);
//       alert('Vital signs recorded successfully');
//       setShowRecordModal(false);
//       fetchVitalSigns();
//     } catch (error) {
//       alert('Failed to record vital signs');
//       console.error('Error recording vital signs:', error);
//     }
//   };

//   const handleFilterChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value
//     });
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

//   if (loading) {
//     return <div className="loading">Loading vital signs...</div>;
//   }

//   return (
//     <div className="page-container">
//       <div className="page-header">
//         <h1>Vital Signs Management</h1>
//         <button 
//           onClick={() => setShowRecordModal(true)}
//           className="btn-primary"
//         >
//           Record Vital Signs
//         </button>
//       </div>

//       {/* Filters */}
//       <div className="filters-section">
//         <div className="filter-group">
//           <label>Patient ID:</label>
//           <input
//             type="number"
//             name="patient_id"
//             value={filters.patient_id}
//             onChange={handleFilterChange}
//             placeholder="Filter by patient ID"
//             className="filter-select"
//           />
//         </div>
//         <div className="filter-group">
//           <label>From Date:</label>
//           <input
//             type="date"
//             name="date_from"
//             value={filters.date_from}
//             onChange={handleFilterChange}
//             className="filter-select"
//           />
//         </div>
//         <div className="filter-group">
//           <label>To Date:</label>
//           <input
//             type="date"
//             name="date_to"
//             value={filters.date_to}
//             onChange={handleFilterChange}
//             className="filter-select"
//           />
//         </div>
//       </div>

//       {error && <div className="error-message">{error}</div>}

//       {vitalSigns.length === 0 ? (
//         <div className="empty-state">
//           <h3>No vital signs found</h3>
//           <p>No vital signs match your current filters.</p>
//         </div>
//       ) : (
//         <div className="vital-signs-list">
//           {vitalSigns.map((vital) => (
//             <div key={vital.id} className="vital-sign-card">
//               <div className="vital-sign-header">
//                 <div>
//                   <h3>Patient #{vital.patient_id}</h3>
//                   <p className="vital-meta">
//                     Recorded: {formatDate(vital.recorded_at)} 
//                     {vital.recorded_by && ` • By: Nurse #${vital.recorded_by}`}
//                   </p>
//                 </div>
//                 <span className="status-badge status-completed">
//                   {vital.blood_pressure_systolic}/{vital.blood_pressure_diastolic}
//                 </span>
//               </div>
              
//               <div className="vital-sign-grid">
//                 <div className="vital-item">
//                   <label>Heart Rate:</label>
//                   <span className="vital-value">{vital.heart_rate} bpm</span>
//                 </div>
//                 <div className="vital-item">
//                   <label>Respiratory Rate:</label>
//                   <span className="vital-value">{vital.respiratory_rate} rpm</span>
//                 </div>
//                 <div className="vital-item">
//                   <label>Temperature:</label>
//                   <span className="vital-value">{vital.temperature}°C</span>
//                 </div>
//                 <div className="vital-item">
//                   <label>Oxygen Saturation:</label>
//                   <span className="vital-value">{vital.oxygen_saturation}%</span>
//                 </div>
//                 <div className="vital-item">
//                   <label>Blood Sugar:</label>
//                   <span className="vital-value">{vital.blood_sugar || 'N/A'} mg/dL</span>
//                 </div>
//                 <div className="vital-item">
//                   <label>Weight/Height:</label>
//                   <span className="vital-value">{vital.weight}kg / {vital.height}cm</span>
//                 </div>
//               </div>

//               {vital.notes && (
//                 <div className="vital-notes">
//                   <p><strong>Notes:</strong> {vital.notes}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Record Vital Signs Modal */}
//       {showRecordModal && (
//         <RecordVitalSignsModal
//           onClose={() => setShowRecordModal(false)}
//           onSave={handleRecordVitalSigns}
//         />
//       )}
//     </div>
//   );
// }

// // Record Vital Signs Modal Component
// function RecordVitalSignsModal({ onClose, onSave }) {
//   const [formData, setFormData] = useState({
//     patient_id: '',
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
    
//     // Basic validation
//     const requiredFields = ['patient_id', 'blood_pressure_systolic', 'blood_pressure_diastolic', 'heart_rate'];
//     for (const field of requiredFields) {
//       if (!formData[field]) {
//         alert(`Please fill in ${field.replace(/_/g, ' ')}`);
//         return;
//       }
//     }

//     setLoading(true);
//     await onSave(formData);
//     setLoading(false);
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal large-modal">
//         <div className="modal-header">
//           <h2>Record Vital Signs</h2>
//           <button onClick={onClose} className="btn-close">×</button>
//         </div>

//         <form onSubmit={handleSubmit} className="vital-signs-form">
//           <div className="form-group">
//             <label>Patient ID *</label>
//             <input
//               type="number"
//               name="patient_id"
//               value={formData.patient_id}
//               onChange={handleChange}
//               placeholder="Enter patient ID"
//               required
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Blood Pressure (Systolic) *</label>
//               <input
//                 type="number"
//                 name="blood_pressure_systolic"
//                 value={formData.blood_pressure_systolic}
//                 onChange={handleChange}
//                 placeholder="e.g., 120"
//                 min="50"
//                 max="250"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Blood Pressure (Diastolic) *</label>
//               <input
//                 type="number"
//                 name="blood_pressure_diastolic"
//                 value={formData.blood_pressure_diastolic}
//                 onChange={handleChange}
//                 placeholder="e.g., 80"
//                 min="30"
//                 max="150"
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Heart Rate (bpm) *</label>
//               <input
//                 type="number"
//                 name="heart_rate"
//                 value={formData.heart_rate}
//                 onChange={handleChange}
//                 placeholder="e.g., 72"
//                 min="30"
//                 max="200"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Respiratory Rate (rpm)</label>
//               <input
//                 type="number"
//                 name="respiratory_rate"
//                 value={formData.respiratory_rate}
//                 onChange={handleChange}
//                 placeholder="e.g., 16"
//                 min="8"
//                 max="40"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Temperature (°C)</label>
//               <input
//                 type="number"
//                 step="0.1"
//                 name="temperature"
//                 value={formData.temperature}
//                 onChange={handleChange}
//                 placeholder="e.g., 36.6"
//                 min="35"
//                 max="42"
//               />
//             </div>
//             <div className="form-group">
//               <label>Oxygen Saturation (%)</label>
//               <input
//                 type="number"
//                 step="0.1"
//                 name="oxygen_saturation"
//                 value={formData.oxygen_saturation}
//                 onChange={handleChange}
//                 placeholder="e.g., 98.5"
//                 min="70"
//                 max="100"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Weight (kg)</label>
//               <input
//                 type="number"
//                 step="0.1"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//                 placeholder="e.g., 68.5"
//                 min="2"
//                 max="300"
//               />
//             </div>
//             <div className="form-group">
//               <label>Height (cm)</label>
//               <input
//                 type="number"
//                 step="0.1"
//                 name="height"
//                 value={formData.height}
//                 onChange={handleChange}
//                 placeholder="e.g., 170"
//                 min="30"
//                 max="250"
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label>Blood Sugar (mg/dL)</label>
//             <input
//               type="number"
//               step="0.1"
//               name="blood_sugar"
//               value={formData.blood_sugar}
//               onChange={handleChange}
//               placeholder="e.g., 95"
//               min="50"
//               max="500"
//             />
//           </div>

//           <div className="form-group">
//             <label>Notes</label>
//             <textarea
//               name="notes"
//               value={formData.notes}
//               onChange={handleChange}
//               placeholder="Additional notes about the patient's condition..."
//               rows="3"
//             />
//           </div>

//           <div className="modal-actions">
//             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
//             <button type="submit" disabled={loading} className="btn-primary">
//               {loading ? 'Recording...' : 'Record Vital Signs'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default NurseVitalSigns;


















import React, { useState, useEffect } from 'react';
import staffService from '../../services/staffService';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaPlus, FaFilter, FaUser, FaClock, FaThermometerHalf, FaTint, FaWind, FaWeight, FaClipboardCheck } from 'react-icons/fa';
import { MdBloodtype } from 'react-icons/md';

function NurseVitalSigns() {
  const [vitalSigns, setVitalSigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [filters, setFilters] = useState({
    patient_id: '',
    date_from: '',
    date_to: ''
  });

  useEffect(() => {
    fetchVitalSigns();
  }, [filters]);

  const fetchVitalSigns = async () => {
    try {
      setLoading(true);
      const response = await staffService.getVitalSigns(filters);
      setVitalSigns(response.vital_signs || []);
    } catch (error) {
      console.error('Error fetching vital signs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRecordVitalSigns = async (vitalData) => {
    try {
      await staffService.recordVitalSigns(vitalData);
      alert('Vital signs recorded successfully');
      setShowRecordModal(false);
      fetchVitalSigns();
    } catch (error) {
      alert('Failed to record vital signs');
      console.error('Error recording vital signs:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium text-lg">Loading vital signs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Vital Signs Management
          </h1>
          <p className="text-gray-600 mt-2">Record and monitor patient vital signs</p>
        </div>
        <button 
          onClick={() => setShowRecordModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
        >
          <FaPlus />
          Record Vital Signs
        </button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <FaFilter className="text-gray-600" />
          <h3 className="font-semibold text-gray-800">Filters</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Patient ID</label>
            <input
              type="number"
              name="patient_id"
              value={filters.patient_id}
              onChange={handleFilterChange}
              placeholder="Filter by patient ID"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">From Date</label>
            <input
              type="date"
              name="date_from"
              value={filters.date_from}
              onChange={handleFilterChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">To Date</label>
            <input
              type="date"
              name="date_to"
              value={filters.date_to}
              onChange={handleFilterChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
            />
          </div>
        </div>
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-2xl shadow-sm flex items-center gap-3"
        >
          <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">{error}</span>
        </motion.div>
      )}

      {/* Vital Signs List */}
      {vitalSigns.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 py-20 px-6"
        >
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHeartbeat className="text-5xl text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Vital Signs Found</h3>
            <p className="text-gray-500">No vital signs match your current filters.</p>
          </div>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {vitalSigns.map((vital, index) => (
            <motion.div
              key={vital.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Vital Sign Header */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <FaUser className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Patient #{vital.patient_id}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <FaClock className="text-gray-500" />
                          {formatDate(vital.recorded_at)}
                        </span>
                        {vital.recorded_by && (
                          <span className="flex items-center gap-1">
                            <FaClipboardCheck className="text-gray-500" />
                            Nurse #{vital.recorded_by}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-full font-bold shadow-lg">
                    <FaTint className="mr-2" />
                    {vital.blood_pressure_systolic}/{vital.blood_pressure_diastolic}
                  </div>
                </div>
              </div>

              {/* Vital Sign Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 border border-gray-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                        <FaHeartbeat className="text-white" />
                      </div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Heart Rate</label>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{vital.heart_rate} <span className="text-sm font-normal text-gray-600">bpm</span></p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 border border-gray-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                        <FaWind className="text-white" />
                      </div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Respiratory Rate</label>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{vital.respiratory_rate} <span className="text-sm font-normal text-gray-600">rpm</span></p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 border border-gray-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                        <FaThermometerHalf className="text-white" />
                      </div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Temperature</label>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{vital.temperature}<span className="text-sm font-normal text-gray-600">°C</span></p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 border border-gray-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">O2 Saturation</label>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{vital.oxygen_saturation}<span className="text-sm font-normal text-gray-600">%</span></p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 border border-gray-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                        <MdBloodtype className="text-white text-xl" />
                      </div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Blood Sugar</label>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{vital.blood_sugar || 'N/A'} <span className="text-sm font-normal text-gray-600">mg/dL</span></p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 border border-gray-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                        <FaWeight className="text-white" />
                      </div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Weight / Height</label>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{vital.weight}<span className="text-sm font-normal text-gray-600">kg</span> / {vital.height}<span className="text-sm font-normal text-gray-600">cm</span></p>
                  </div>
                </div>

                {/* Notes */}
                {vital.notes && (
                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-200">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Notes</label>
                    <p className="text-gray-800">{vital.notes}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Record Vital Signs Modal */}
      {showRecordModal && (
        <RecordVitalSignsModal
          onClose={() => setShowRecordModal(false)}
          onSave={handleRecordVitalSigns}
        />
      )}
    </div>
  );
}

// Record Vital Signs Modal Component
function RecordVitalSignsModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    patient_id: '',
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
    
    const requiredFields = ['patient_id', 'blood_pressure_systolic', 'blood_pressure_diastolic', 'heart_rate'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in ${field.replace(/_/g, ' ')}`);
        return;
      }
    }

    setLoading(true);
    await onSave(formData);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl my-8"
      >
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 rounded-t-3xl flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Record Vital Signs</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 rounded-full p-2 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Patient ID *</label>
              <input
                type="number"
                name="patient_id"
                value={formData.patient_id}
                onChange={handleChange}
                placeholder="Enter patient ID"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Pressure (Systolic) *</label>
                <input
                  type="number"
                  name="blood_pressure_systolic"
                  value={formData.blood_pressure_systolic}
                  onChange={handleChange}
                  placeholder="e.g., 120"
                  min="50"
                  max="250"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Pressure (Diastolic) *</label>
                <input
                  type="number"
                  name="blood_pressure_diastolic"
                  value={formData.blood_pressure_diastolic}
                  onChange={handleChange}
                  placeholder="e.g., 80"
                  min="30"
                  max="150"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Heart Rate (bpm) *</label>
                <input
                  type="number"
                  name="heart_rate"
                  value={formData.heart_rate}
                  onChange={handleChange}
                  placeholder="e.g., 72"
                  min="30"
                  max="200"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Respiratory Rate (rpm)</label>
                <input
                  type="number"
                  name="respiratory_rate"
                  value={formData.respiratory_rate}
                  onChange={handleChange}
                  placeholder="e.g., 16"
                  min="8"
                  max="40"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Temperature (°C)</label>
                <input
                  type="number"
                  step="0.1"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  placeholder="e.g., 36.6"
                  min="35"
                  max="42"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Oxygen Saturation (%)</label>
                <input
                  type="number"
                  step="0.1"
                  name="oxygen_saturation"
                  value={formData.oxygen_saturation}
                  onChange={handleChange}
                  placeholder="e.g., 98.5"
                  min="70"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="e.g., 68.5"
                  min="2"
                  max="300"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Height (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="e.g., 170"
                  min="30"
                  max="250"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Sugar (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                name="blood_sugar"
                value={formData.blood_sugar}
                onChange={handleChange}
                placeholder="e.g., 95"
                min="50"
                max="500"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Additional notes about the patient's condition..."
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 rounded-b-3xl flex justify-end gap-3 border-t border-gray-200">
          <button type="button" onClick={onClose} className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition">Cancel</button>
          <button onClick={handleSubmit} disabled={loading} className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
            {loading ? 'Recording...' : 'Record Vital Signs'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default NurseVitalSigns;