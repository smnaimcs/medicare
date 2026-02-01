// // src/pages/doctor/MedicalRecords.jsx
// import React, { useState, useEffect } from 'react';
// import medicalService from '../../services/medicalService';
// import doctorService from '../../services/doctorService';

// function DoctorMedicalRecords() {
//   const [medicalRecords, setMedicalRecords] = useState([]);
//   const [testReports, setTestReports] = useState([]);
//   const [vitalSigns, setVitalSigns] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activeTab, setActiveTab] = useState('records');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [modalType, setModalType] = useState('');

//   useEffect(() => {
//     fetchMedicalData();
//     fetchAppointments();
//   }, [activeTab]);

//   const fetchMedicalData = async () => {
//     try {
//       setLoading(true);
      
//       // Fetch all medical data
//       const [recordsResponse, testsResponse, vitalsResponse] = await Promise.all([
//         medicalService.getMedicalRecords(),
//         medicalService.getTestReports(),
//         medicalService.getVitalSigns()
//       ]);

//       setMedicalRecords(recordsResponse.medical_records || []);
//       setTestReports(testsResponse.test_reports || []);
//       setVitalSigns(vitalsResponse.vital_signs || []);
//     } catch (error) {
//       setError('Failed to fetch medical records');
//       console.error('Error fetching medical records:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchAppointments = async () => {
//     try {
//       const response = await doctorService.getAppointments();
//       setAppointments(response.appointments || []);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   const handleAddRecord = (type) => {
//     setModalType(type);
//     setShowAddModal(true);
//   };

//   const handleSuccess = () => {
//     setShowAddModal(false);
//     setModalType('');
//     fetchMedicalData();
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

//   const renderMedicalRecords = () => {
//     if (medicalRecords.length === 0) {
//       return <div className="empty-state">No medical records found</div>;
//     }

//     return (
//       <div className="records-list">
//         {medicalRecords.map((record) => (
//           <div key={record.id} className="record-card">
//             <div className="record-header">
//               <h3>{record.record_type}</h3>
//               <span className="record-date">{formatDate(record.date_recorded)}</span>
//             </div>
//             <div className="record-details">
//               <p>{record.description}</p>
//               <p className="meta-info">Recorded: {formatDate(record.created_at)}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderTestReports = () => {
//     if (testReports.length === 0) {
//       return <div className="empty-state">No test reports found</div>;
//     }

//     return (
//       <div className="records-list">
//         {testReports.map((report) => (
//           <div key={report.id} className="record-card">
//             <div className="record-header">
//               <h3>{report.test_name}</h3>
//               <span className={`status-badge ${report.status === 'completed' ? 'status-completed' : 'status-pending'}`}>
//                 {report.status}
//               </span>
//             </div>
//             <div className="record-details">
//               <div className="detail-row">
//                 <div className="detail-item">
//                   <label>Type:</label>
//                   <span>{report.test_type}</span>
//                 </div>
//                 <div className="detail-item">
//                   <label>Result:</label>
//                   <span className={report.result === 'Normal' ? 'normal-result' : 'abnormal-result'}>
//                     {report.result}
//                   </span>
//                 </div>
//               </div>
//               {report.normal_range && (
//                 <div className="detail-item">
//                   <label>Normal Range:</label>
//                   <span>{report.normal_range}</span>
//                 </div>
//               )}
//               {report.comments && (
//                 <div className="detail-item">
//                   <label>Comments:</label>
//                   <span>{report.comments}</span>
//                 </div>
//               )}
//               <p className="meta-info">Completed: {formatDate(report.completed_date)}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderVitalSigns = () => {
//     if (vitalSigns.length === 0) {
//       return <div className="empty-state">No vital signs records found</div>;
//     }

//     return (
//       <div className="records-list">
//         {vitalSigns.map((vital) => (
//           <div key={vital.id} className="record-card">
//             <div className="record-header">
//               <h3>Vital Signs</h3>
//               <span className="record-date">{formatDate(vital.recorded_at)}</span>
//             </div>
//             <div className="vital-signs-grid">
//               {vital.blood_pressure && (
//                 <div className="vital-item">
//                   <label>Blood Pressure:</label>
//                   <span>{vital.blood_pressure}</span>
//                 </div>
//               )}
//               {vital.heart_rate && (
//                 <div className="vital-item">
//                   <label>Heart Rate:</label>
//                   <span>{vital.heart_rate} bpm</span>
//                 </div>
//               )}
//               {vital.temperature && (
//                 <div className="vital-item">
//                   <label>Temperature:</label>
//                   <span>{vital.temperature}°F</span>
//                 </div>
//               )}
//               {vital.oxygen_saturation && (
//                 <div className="vital-item">
//                   <label>Oxygen Saturation:</label>
//                   <span>{vital.oxygen_saturation}%</span>
//                 </div>
//               )}
//               {vital.respiratory_rate && (
//                 <div className="vital-item">
//                   <label>Respiratory Rate:</label>
//                   <span>{vital.respiratory_rate} breaths/min</span>
//                 </div>
//               )}
//               {vital.blood_sugar && (
//                 <div className="vital-item">
//                   <label>Blood Sugar:</label>
//                   <span>{vital.blood_sugar} mg/dL</span>
//                 </div>
//               )}
//               {vital.notes && (
//                 <div className="vital-item full-width">
//                   <label>Notes:</label>
//                   <span>{vital.notes}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   if (loading) {
//     return <div className="loading">Loading medical records...</div>;
//   }

//   return (
//     <div className="page-container">
//       <div className="page-header">
//         <h1>Medical Records</h1>
//         <div className="header-actions">
//           <button 
//             onClick={() => handleAddRecord('test-report')}
//             className="btn-primary"
//           >
//             Add Test Report
//           </button>
//           <button 
//             onClick={() => handleAddRecord('medical-record')}
//             className="btn-primary"
//           >
//             Add Medical Record
//           </button>
//         </div>
//       </div>

//       {error && <div className="error-message">{error}</div>}

//       {/* Tabs */}
//       <div className="tabs">
//         <button 
//           className={`tab ${activeTab === 'records' ? 'active' : ''}`}
//           onClick={() => setActiveTab('records')}
//         >
//           Medical Records
//         </button>
//         <button 
//           className={`tab ${activeTab === 'tests' ? 'active' : ''}`}
//           onClick={() => setActiveTab('tests')}
//         >
//           Test Reports
//         </button>
//         <button 
//           className={`tab ${activeTab === 'vitals' ? 'active' : ''}`}
//           onClick={() => setActiveTab('vitals')}
//         >
//           Vital Signs
//         </button>
//       </div>

//       <div className="tab-content">
//         {activeTab === 'records' && renderMedicalRecords()}
//         {activeTab === 'tests' && renderTestReports()}
//         {activeTab === 'vitals' && renderVitalSigns()}
//       </div>

//       {/* Add Modal */}
//       {showAddModal && (
//         <AddMedicalRecordModal
//           type={modalType}
//           appointments={appointments}
//           onClose={() => {
//             setShowAddModal(false);
//             setModalType('');
//           }}
//           onSuccess={handleSuccess}
//         />
//       )}
//     </div>
//   );
// }

// // Add Medical Record Modal
// function AddMedicalRecordModal({ type, appointments, onClose, onSuccess }) {
//   const [formData, setFormData] = useState({
//     appointment_id: '',
//     patient_id: '',
//     record_type: '',
//     description: '',
//     date_recorded: new Date().toISOString().split('T')[0],
//     // Test report fields
//     test_name: '',
//     test_type: '',
//     result: '',
//     normal_range: '',
//     units: '',
//     comments: ''
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
    
//     try {
//       setLoading(true);
      
//       if (type === 'medical-record') {
//         if (!formData.record_type || !formData.description) {
//           alert('Please fill in all required fields');
//           return;
//         }
//         await medicalService.addMedicalRecord(formData);
//         alert('Medical record added successfully');
//       } else if (type === 'test-report') {
//         if (!formData.test_name || !formData.test_type || !formData.result) {
//           alert('Please fill in all required fields');
//           return;
//         }
//         await medicalService.uploadTestReport(formData);
//         alert('Test report uploaded successfully');
//       }
      
//       onSuccess();
//     } catch (error) {
//       alert(`Failed to add ${type === 'medical-record' ? 'medical record' : 'test report'}`);
//       console.error('Error adding record:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getModalTitle = () => {
//     return type === 'medical-record' ? 'Add Medical Record' : 'Upload Test Report';
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal large-modal">
//         <div className="modal-header">
//           <h2>{getModalTitle()}</h2>
//           <button onClick={onClose} className="btn-close">×</button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Appointment</label>
//             <select
//               name="appointment_id"
//               value={formData.appointment_id}
//               onChange={handleChange}
//             >
//               <option value="">Select Appointment (Optional)</option>
//               {appointments.map((apt) => (
//                 <option key={apt.id} value={apt.id}>
//                   {apt.patient.user.first_name} {apt.patient.user.last_name} - {new Date(apt.appointment_date).toLocaleDateString()}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {type === 'medical-record' ? (
//             <>
//               <div className="form-group">
//                 <label>Record Type *</label>
//                 <input
//                   type="text"
//                   name="record_type"
//                   value={formData.record_type}
//                   onChange={handleChange}
//                   placeholder="e.g., Surgery, Allergy, Chronic Condition"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Description *</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="Describe the medical record..."
//                   rows="4"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Date Recorded</label>
//                 <input
//                   type="date"
//                   name="date_recorded"
//                   value={formData.date_recorded}
//                   onChange={handleChange}
//                 />
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Test Name *</label>
//                   <input
//                     type="text"
//                     name="test_name"
//                     value={formData.test_name}
//                     onChange={handleChange}
//                     placeholder="e.g., Complete Blood Count"
//                     required
//                   />
//                 </div>
                
//                 <div className="form-group">
//                   <label>Test Type *</label>
//                   <input
//                     type="text"
//                     name="test_type"
//                     value={formData.test_type}
//                     onChange={handleChange}
//                     placeholder="e.g., Blood Test, Urine Test"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Result *</label>
//                 <textarea
//                   name="result"
//                   value={formData.result}
//                   onChange={handleChange}
//                   placeholder="Enter the test results..."
//                   rows="3"
//                   required
//                 />
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Normal Range</label>
//                   <input
//                     type="text"
//                     name="normal_range"
//                     value={formData.normal_range}
//                     onChange={handleChange}
//                     placeholder="e.g., 4.0 - 5.5"
//                   />
//                 </div>
                
//                 <div className="form-group">
//                   <label>Units</label>
//                   <input
//                     type="text"
//                     name="units"
//                     value={formData.units}
//                     onChange={handleChange}
//                     placeholder="e.g., x10^6/μL"
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Comments</label>
//                 <textarea
//                   name="comments"
//                   value={formData.comments}
//                   onChange={handleChange}
//                   placeholder="Additional comments..."
//                   rows="2"
//                 />
//               </div>
//             </>
//           )}

//           <div className="modal-actions">
//             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
//             <button type="submit" disabled={loading} className="btn-primary">
//               {loading ? 'Adding...' : 'Add Record'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default DoctorMedicalRecords;













// src/pages/doctor/MedicalRecords.jsx
import React, { useState, useEffect } from 'react';
import medicalService from '../../services/medicalService';
import doctorService from '../../services/doctorService';

// Add Medical Record Modal
function AddMedicalRecordModal({ type, appointments, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    appointment_id: '',
    patient_id: '',
    record_type: '',
    description: '',
    date_recorded: new Date().toISOString().split('T')[0],
    test_name: '',
    test_type: '',
    result: '',
    normal_range: '',
    units: '',
    comments: ''
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
    
    try {
      setLoading(true);
      
      if (type === 'medical-record') {
        if (!formData.record_type || !formData.description) {
          alert('Please fill in all required fields');
          return;
        }
        await medicalService.addMedicalRecord(formData);
        alert('Medical record added successfully');
      } else if (type === 'test-report') {
        if (!formData.test_name || !formData.test_type || !formData.result) {
          alert('Please fill in all required fields');
          return;
        }
        await medicalService.uploadTestReport(formData);
        alert('Test report uploaded successfully');
      }
      
      onSuccess();
    } catch (error) {
      alert(`Failed to add ${type === 'medical-record' ? 'medical record' : 'test report'}`);
      console.error('Error adding record:', error);
    } finally {
      setLoading(false);
    }
  };

  const getModalTitle = () => {
    return type === 'medical-record' ? 'Add Medical Record' : 'Upload Test Report';
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 animate-slideUp">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{getModalTitle()}</h2>
            <p className="text-sm text-gray-500 mt-1">Add detailed medical information</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Appointment</label>
            <select name="appointment_id" value={formData.appointment_id} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200">
              <option value="">Select Appointment (Optional)</option>
              {appointments.map((apt) => (
                <option key={apt.id} value={apt.id}>
                  {apt.patient.user.first_name} {apt.patient.user.last_name} - {new Date(apt.appointment_date).toLocaleDateString()}
                </option>
              ))}
            </select>
          </div>

          {type === 'medical-record' ? (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Record Type *</label>
                <input type="text" name="record_type" value={formData.record_type} onChange={handleChange} placeholder="e.g., Surgery, Allergy, Chronic Condition" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Describe the medical record..." rows="4" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date Recorded</label>
                <input type="date" name="date_recorded" value={formData.date_recorded} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Test Name *</label>
                  <input type="text" name="test_name" value={formData.test_name} onChange={handleChange} placeholder="e.g., Complete Blood Count" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Test Type *</label>
                  <input type="text" name="test_type" value={formData.test_type} onChange={handleChange} placeholder="e.g., Blood Test, Urine Test" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Result *</label>
                <textarea name="result" value={formData.result} onChange={handleChange} placeholder="Enter the test results..." rows="3" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Normal Range</label>
                  <input type="text" name="normal_range" value={formData.normal_range} onChange={handleChange} placeholder="e.g., 4.0 - 5.5" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Units</label>
                  <input type="text" name="units" value={formData.units} onChange={handleChange} placeholder="e.g., x10^6/μL" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Comments</label>
                <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Additional comments..." rows="2" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none" />
              </div>
            </>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200">Cancel</button>
            <button type="submit" disabled={loading} className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {loading ? (
                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>Adding...</>
              ) : (
                <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Add Record</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function DoctorMedicalRecords() {
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [testReports, setTestReports] = useState([]);
  const [vitalSigns, setVitalSigns] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('records');
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    fetchMedicalData();
    fetchAppointments();
  }, [activeTab]);

  const fetchMedicalData = async () => {
    try {
      setLoading(true);
      
      const [recordsResponse, testsResponse, vitalsResponse] = await Promise.all([
        medicalService.getMedicalRecords(),
        medicalService.getTestReports(),
        medicalService.getVitalSigns()
      ]);

      setMedicalRecords(recordsResponse.medical_records || []);
      setTestReports(testsResponse.test_reports || []);
      setVitalSigns(vitalsResponse.vital_signs || []);
    } catch (error) {
      setError('Failed to fetch medical records');
      console.error('Error fetching medical records:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await doctorService.getAppointments();
      setAppointments(response.appointments || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleAddRecord = (type) => {
    setModalType(type);
    setShowAddModal(true);
  };

  const handleSuccess = () => {
    setShowAddModal(false);
    setModalType('');
    fetchMedicalData();
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

  const renderMedicalRecords = () => {
    if (medicalRecords.length === 0) {
      return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
          <div className="text-center max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500">No medical records found</p>
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-6">
        {medicalRecords.map((record, index) => (
          <div key={record.id} className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 animate-slideUp stagger-${Math.min(index + 1, 6)}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{record.record_type}</h3>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(record.date_recorded)}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed mb-3">{record.description}</p>
              <p className="text-xs text-gray-500 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Recorded: {formatDate(record.created_at)}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTestReports = () => {
    if (testReports.length === 0) {
      return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
          <div className="text-center max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <p className="text-gray-500">No test reports found</p>
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-6">
        {testReports.map((report, index) => (
          <div key={report.id} className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 animate-slideUp stagger-${Math.min(index + 1, 6)}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{report.test_name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{report.test_type}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full ${report.status === 'completed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                {report.status.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Type</label>
                  <span className="text-gray-800 font-medium">{report.test_type}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Result</label>
                  <span className={`font-semibold ${report.result === 'Normal' ? 'text-emerald-600' : 'text-red-600'}`}>{report.result}</span>
                </div>
              </div>

              {report.normal_range && (
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Normal Range</label>
                    <span className="text-gray-800 font-medium">{report.normal_range}</span>
                  </div>
                </div>
              )}
            </div>

            {(report.comments || report.completed_date) && (
              <div className="pt-5 border-t border-gray-100 space-y-3">
                {report.comments && (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Comments</label>
                    <p className="text-gray-800">{report.comments}</p>
                  </div>
                )}
                {report.completed_date && (
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed: {formatDate(report.completed_date)}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderVitalSigns = () => {
    if (vitalSigns.length === 0) {
      return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
          <div className="text-center max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-gray-500">No vital signs records found</p>
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-6">
        {vitalSigns.map((vital, index) => (
          <div key={vital.id} className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 animate-slideUp stagger-${Math.min(index + 1, 6)}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Vital Signs</h3>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formatDate(vital.recorded_at)}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
              {vital.blood_pressure && (
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
                  <label className="text-xs font-semibold text-red-700 uppercase tracking-wide block mb-2">Blood Pressure</label>
                  <p className="text-xl font-bold text-red-800">{vital.blood_pressure}</p>
                </div>
              )}
              {vital.heart_rate && (
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
                  <label className="text-xs font-semibold text-pink-700 uppercase tracking-wide block mb-2">Heart Rate</label>
                  <p className="text-xl font-bold text-pink-800">{vital.heart_rate} <span className="text-sm font-normal">bpm</span></p>
                </div>
              )}
              {vital.temperature && (
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                  <label className="text-xs font-semibold text-orange-700 uppercase tracking-wide block mb-2">Temperature</label>
                  <p className="text-xl font-bold text-orange-800">{vital.temperature}<span className="text-sm font-normal">°F</span></p>
                </div>
              )}
              {vital.oxygen_saturation && (
                <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-4 border border-sky-200">
                  <label className="text-xs font-semibold text-sky-700 uppercase tracking-wide block mb-2">Oxygen Saturation</label>
                  <p className="text-xl font-bold text-sky-800">{vital.oxygen_saturation}<span className="text-sm font-normal">%</span></p>
                </div>
              )}
              {vital.respiratory_rate && (
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
                  <label className="text-xs font-semibold text-teal-700 uppercase tracking-wide block mb-2">Respiratory Rate</label>
                  <p className="text-xl font-bold text-teal-800">{vital.respiratory_rate} <span className="text-sm font-normal">breaths/min</span></p>
                </div>
              )}
              {vital.blood_sugar && (
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                  <label className="text-xs font-semibold text-purple-700 uppercase tracking-wide block mb-2">Blood Sugar</label>
                  <p className="text-xl font-bold text-purple-800">{vital.blood_sugar} <span className="text-sm font-normal">mg/dL</span></p>
                </div>
              )}
            </div>

            {vital.notes && (
              <div className="pt-5 border-t border-gray-100">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Notes</label>
                  <p className="text-gray-800">{vital.notes}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-600 mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading medical records...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
          .animate-slideUp { animation: slideUp 0.4s ease-out; }
          .stagger-1 { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
          .stagger-2 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
          .stagger-3 { animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards; }
          .stagger-4 { animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards; }
          .stagger-5 { animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards; }
          .stagger-6 { animation-delay: 0.6s; opacity: 0; animation-fill-mode: forwards; }
        `}
      </style>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 animate-slideUp">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Medical Records</h1>
              <p className="text-gray-500 mt-1 text-sm">Manage patient medical records and test reports</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => handleAddRecord('test-report')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                Add Test Report
              </button>
              <button onClick={() => handleAddRecord('medical-record')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                Add Medical Record
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl shadow-sm flex items-center gap-3 animate-slideUp">
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-2 animate-slideUp">
          <div className="flex gap-2">
            <button className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${activeTab === 'records' ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('records')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Medical Records
            </button>
            <button className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${activeTab === 'tests' ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('tests')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              Test Reports
            </button>
            <button className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${activeTab === 'vitals' ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('vitals')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Vital Signs
            </button>
          </div>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'records' && renderMedicalRecords()}
          {activeTab === 'tests' && renderTestReports()}
          {activeTab === 'vitals' && renderVitalSigns()}
        </div>
      </div>

      {showAddModal && (
        <AddMedicalRecordModal
          type={modalType}
          appointments={appointments}
          onClose={() => {
            setShowAddModal(false);
            setModalType('');
          }}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
}

export default DoctorMedicalRecords;