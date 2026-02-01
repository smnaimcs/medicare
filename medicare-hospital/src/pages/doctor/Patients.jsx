// // src/pages/doctor/Patients.jsx
// import React, { useState, useEffect } from 'react';
// import doctorService from '../../services/doctorService';

// function DoctorPatients() {
//   const [patients, setPatients] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [medicalHistory, setMedicalHistory] = useState(null);
//   const [showMedicalHistory, setShowMedicalHistory] = useState(false);

//   useEffect(() => {
//     // Extract unique patients from appointments
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       setLoading(true);
//       const response = await doctorService.getAppointments();
//       const appointments = response.appointments || [];

//       // Extract unique patients
//       const uniquePatients = [];
//       const patientIds = new Set();

//       appointments.forEach(appointment => {
//         if (!patientIds.has(appointment.patient.id)) {
//           patientIds.add(appointment.patient.id);
//           uniquePatients.push(appointment.patient);
//         }
//       });

//       setPatients(uniquePatients);
//     } catch (error) {
//       setError('Failed to fetch patients');
//       console.error('Error fetching patients:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchMedicalHistory = async (patientId) => {
//     try {
//       const response = await doctorService.getPatientMedicalHistory(patientId);
//       setMedicalHistory(response);
//       setShowMedicalHistory(true);
//     } catch (error) {
//       alert('Failed to fetch medical history');
//       console.error('Error fetching medical history:', error);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return <div className="loading">Loading patients...</div>;
//   }

//   return (
//     <div className="page-container">
//       <div className="page-header">
//         <h1>My Patients</h1>
//       </div>

//       {error && <div className="error-message">{error}</div>}

//       {patients.length === 0 ? (
//         <div className="empty-state">
//           <h3>No patients found</h3>
//           <p>You don't have any patients yet.</p>
//         </div>
//       ) : (
//         <div className="patients-grid">
//           {patients.map((patient) => (
//             <div key={patient.id} className="patient-card">
//               <div className="patient-header">
//                 <h3>{patient.user.first_name} {patient.user.last_name}</h3>
//                 <span className="patient-age">
//                   {patient.user.date_of_birth ? 
//                     `Age: ${new Date().getFullYear() - new Date(patient.user.date_of_birth).getFullYear()}` 
//                     : 'Age: Unknown'}
//                 </span>
//               </div>

//               <div className="patient-details">
//                 <div className="detail-item">
//                   <label>Email:</label>
//                   <span>{patient.user.email}</span>
//                 </div>

//                 <div className="detail-item">
//                   <label>Phone:</label>
//                   <span>{patient.user.phone || 'Not provided'}</span>
//                 </div>

//                 <div className="detail-item">
//                   <label>Blood Group:</label>
//                   <span>{patient.blood_group || 'Not provided'}</span>
//                 </div>

//                 <div className="detail-item">
//                   <label>Emergency Contact:</label>
//                   <span>{patient.emergency_contact || 'Not provided'}</span>
//                 </div>

//                 <div className="detail-item">
//                   <label>Insurance:</label>
//                   <span>{patient.insurance_info || 'Not provided'}</span>
//                 </div>
//               </div>

//               <div className="patient-actions">
//                 <button 
//                   onClick={() => {
//                     setSelectedPatient(patient);
//                     fetchMedicalHistory(patient.id);
//                   }}
//                   className="btn-primary"
//                 >
//                   View Medical History
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Medical History Modal */}
//       {showMedicalHistory && medicalHistory && (
//         <MedicalHistoryModal
//           patient={selectedPatient}
//           medicalHistory={medicalHistory}
//           onClose={() => {
//             setShowMedicalHistory(false);
//             setMedicalHistory(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }

// // Medical History Modal Component
// function MedicalHistoryModal({ patient, medicalHistory, onClose }) {
//   const [activeTab, setActiveTab] = useState('diagnoses');

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal large-modal">
//         <div className="modal-header">
//           <h2>Medical History - {patient.user.first_name} {patient.user.last_name}</h2>
//           <button onClick={onClose} className="btn-close">×</button>
//         </div>

//         {/* Tabs */}
//         <div className="tabs">
//           <button 
//             className={`tab ${activeTab === 'diagnoses' ? 'active' : ''}`}
//             onClick={() => setActiveTab('diagnoses')}
//           >
//             Diagnoses
//           </button>
//           <button 
//             className={`tab ${activeTab === 'test-reports' ? 'active' : ''}`}
//             onClick={() => setActiveTab('test-reports')}
//           >
//             Test Reports
//           </button>
//           <button 
//             className={`tab ${activeTab === 'prescriptions' ? 'active' : ''}`}
//             onClick={() => setActiveTab('prescriptions')}
//           >
//             Prescriptions
//           </button>
//         </div>

//         <div className="tab-content">
//           {activeTab === 'diagnoses' && (
//             <div className="medical-history-section">
//               <h3>Diagnoses</h3>
//               {medicalHistory.diagnoses.length === 0 ? (
//                 <p>No diagnoses found.</p>
//               ) : (
//                 medicalHistory.diagnoses.map((diagnosis) => (
//                   <div key={diagnosis.id} className="medical-record-card">
//                     <h4>{diagnosis.diagnosis}</h4>
//                     <p><strong>Symptoms:</strong> {diagnosis.symptoms}</p>
//                     <p><strong>Treatment Plan:</strong> {diagnosis.treatment_plan}</p>
//                     <p><strong>Notes:</strong> {diagnosis.notes}</p>
//                     {diagnosis.follow_up_required && (
//                       <p><strong>Follow-up Date:</strong> {formatDate(diagnosis.follow_up_date)}</p>
//                     )}
//                     <p className="record-date">Recorded: {formatDate(diagnosis.created_at)}</p>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}

//           {activeTab === 'test-reports' && (
//             <div className="medical-history-section">
//               <h3>Test Reports</h3>
//               {medicalHistory.test_reports.length === 0 ? (
//                 <p>No test reports found.</p>
//               ) : (
//                 medicalHistory.test_reports.map((report) => (
//                   <div key={report.id} className="medical-record-card">
//                     <h4>{report.test_name}</h4>
//                     <p><strong>Type:</strong> {report.test_type}</p>
//                     <p><strong>Result:</strong> {report.result}</p>
//                     <p><strong>Normal Range:</strong> {report.normal_range}</p>
//                     <p><strong>Units:</strong> {report.units}</p>
//                     <p><strong>Comments:</strong> {report.comments}</p>
//                     <p className="record-date">Completed: {formatDate(report.completed_date)}</p>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}

//           {activeTab === 'prescriptions' && (
//             <div className="medical-history-section">
//               <h3>Prescriptions</h3>
//               {medicalHistory.prescriptions && medicalHistory.prescriptions.length === 0 ? (
//                 <p>No prescriptions found.</p>
//               ) : (
//                 medicalHistory.prescriptions?.map((prescription) => (
//                   <div key={prescription.id} className="medical-record-card">
//                     <h4>{prescription.medicine_name}</h4>
//                     <p><strong>Dosage:</strong> {prescription.dosage}</p>
//                     <p><strong>Frequency:</strong> {prescription.frequency}</p>
//                     <p><strong>Duration:</strong> {prescription.duration}</p>
//                     <p><strong>Instructions:</strong> {prescription.instructions}</p>
//                     <p className="record-date">Prescribed: {formatDate(prescription.created_at)}</p>
//                   </div>
//                 )) || <p>No prescriptions data available.</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DoctorPatients;















// // src/pages/doctor/Patients.jsx
// import React, { useState, useEffect } from 'react';
// import doctorService from '../../services/doctorService';

// function DoctorPatients() {
//   const [patients, setPatients] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [medicalHistory, setMedicalHistory] = useState(null);
//   const [showMedicalHistory, setShowMedicalHistory] = useState(false);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       setLoading(true);
//       const response = await doctorService.getAppointments();
//       const appointments = response.appointments || [];

//       const uniquePatients = [];
//       const patientIds = new Set();

//       appointments.forEach(appointment => {
//         if (!patientIds.has(appointment.patient.id)) {
//           patientIds.add(appointment.patient.id);
//           uniquePatients.push(appointment.patient);
//         }
//       });

//       setPatients(uniquePatients);
//     } catch (error) {
//       setError('Failed to fetch patients');
//       console.error('Error fetching patients:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchMedicalHistory = async (patientId) => {
//     try {
//       const response = await doctorService.getPatientMedicalHistory(patientId);
//       setMedicalHistory(response);
//       setShowMedicalHistory(true);
//     } catch (error) {
//       alert('Failed to fetch medical history');
//       console.error('Error fetching medical history:', error);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-64 text-gray-500">Loading patients...</div>;
//   }

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-3xl font-bold">My Patients</h1>

//       {error && <div className="alert alert-error">{error}</div>}

//       {patients.length === 0 ? (
//         <div className="text-center text-gray-500 space-y-2">
//           <h3 className="text-xl font-semibold">No patients found</h3>
//           <p>You don't have any patients yet.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {patients.map((patient) => (
//             <div key={patient.id} className="card bg-base-100 shadow-lg border border-gray-200 p-4">
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="text-lg font-semibold">{patient.user.first_name} {patient.user.last_name}</h3>
//                 <span className="text-sm text-gray-500">
//                   {patient.user.date_of_birth ? 
//                     `Age: ${new Date().getFullYear() - new Date(patient.user.date_of_birth).getFullYear()}` 
//                     : 'Age: Unknown'}
//                 </span>
//               </div>

//               <div className="space-y-2 text-sm text-gray-600 mb-4">
//                 <div className="flex justify-between"><span>Email:</span> <span>{patient.user.email}</span></div>
//                 <div className="flex justify-between"><span>Phone:</span> <span>{patient.user.phone || 'Not provided'}</span></div>
//                 <div className="flex justify-between"><span>Blood Group:</span> <span>{patient.blood_group || 'Not provided'}</span></div>
//                 <div className="flex justify-between"><span>Emergency Contact:</span> <span>{patient.emergency_contact || 'Not provided'}</span></div>
//                 <div className="flex justify-between"><span>Insurance:</span> <span>{patient.insurance_info || 'Not provided'}</span></div>
//               </div>

//               <button 
//                 onClick={() => {
//                   setSelectedPatient(patient);
//                   fetchMedicalHistory(patient.id);
//                 }}
//                 className="btn btn-primary w-full"
//               >
//                 View Medical History
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Medical History Modal */}
//       {showMedicalHistory && medicalHistory && (
//         <MedicalHistoryModal
//           patient={selectedPatient}
//           medicalHistory={medicalHistory}
//           onClose={() => {
//             setShowMedicalHistory(false);
//             setMedicalHistory(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }

// // Medical History Modal Component
// function MedicalHistoryModal({ patient, medicalHistory, onClose }) {
//   const [activeTab, setActiveTab] = useState('diagnoses');

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="modal modal-lg bg-base-100 rounded-lg shadow-lg w-full max-w-4xl p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">Medical History - {patient.user.first_name} {patient.user.last_name}</h2>
//           <button onClick={onClose} className="btn btn-circle btn-outline">×</button>
//         </div>

//         {/* Tabs */}
//         <div className="tabs tabs-boxed mb-4">
//           <button 
//             className={`tab ${activeTab === 'diagnoses' ? 'tab-active' : ''}`}
//             onClick={() => setActiveTab('diagnoses')}
//           >
//             Diagnoses
//           </button>
//           <button 
//             className={`tab ${activeTab === 'test-reports' ? 'tab-active' : ''}`}
//             onClick={() => setActiveTab('test-reports')}
//           >
//             Test Reports
//           </button>
//           <button 
//             className={`tab ${activeTab === 'prescriptions' ? 'tab-active' : ''}`}
//             onClick={() => setActiveTab('prescriptions')}
//           >
//             Prescriptions
//           </button>
//         </div>

//         <div className="space-y-4 max-h-[60vh] overflow-y-auto">
//           {activeTab === 'diagnoses' && (
//             <div className="space-y-4">
//               {medicalHistory.diagnoses.length === 0 ? (
//                 <p>No diagnoses found.</p>
//               ) : (
//                 medicalHistory.diagnoses.map((diagnosis) => (
//                   <div key={diagnosis.id} className="card bg-base-200 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-semibold">{diagnosis.diagnosis}</h4>
//                     <p><strong>Symptoms:</strong> {diagnosis.symptoms}</p>
//                     <p><strong>Treatment Plan:</strong> {diagnosis.treatment_plan}</p>
//                     <p><strong>Notes:</strong> {diagnosis.notes}</p>
//                     {diagnosis.follow_up_required && (
//                       <p><strong>Follow-up Date:</strong> {formatDate(diagnosis.follow_up_date)}</p>
//                     )}
//                     <p className="text-xs text-gray-500 mt-2">Recorded: {formatDate(diagnosis.created_at)}</p>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}

//           {activeTab === 'test-reports' && (
//             <div className="space-y-4">
//               {medicalHistory.test_reports.length === 0 ? (
//                 <p>No test reports found.</p>
//               ) : (
//                 medicalHistory.test_reports.map((report) => (
//                   <div key={report.id} className="card bg-base-200 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-semibold">{report.test_name}</h4>
//                     <p><strong>Type:</strong> {report.test_type}</p>
//                     <p><strong>Result:</strong> {report.result}</p>
//                     <p><strong>Normal Range:</strong> {report.normal_range}</p>
//                     <p><strong>Units:</strong> {report.units}</p>
//                     <p><strong>Comments:</strong> {report.comments}</p>
//                     <p className="text-xs text-gray-500 mt-2">Completed: {formatDate(report.completed_date)}</p>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}

//           {activeTab === 'prescriptions' && (
//             <div className="space-y-4">
//               {medicalHistory.prescriptions && medicalHistory.prescriptions.length === 0 ? (
//                 <p>No prescriptions found.</p>
//               ) : (
//                 medicalHistory.prescriptions?.map((prescription) => (
//                   <div key={prescription.id} className="card bg-base-200 p-4 rounded-lg shadow-sm">
//                     <h4 className="font-semibold">{prescription.medicine_name}</h4>
//                     <p><strong>Dosage:</strong> {prescription.dosage}</p>
//                     <p><strong>Frequency:</strong> {prescription.frequency}</p>
//                     <p><strong>Duration:</strong> {prescription.duration}</p>
//                     <p><strong>Instructions:</strong> {prescription.instructions}</p>
//                     <p className="text-xs text-gray-500 mt-2">Prescribed: {formatDate(prescription.created_at)}</p>
//                   </div>
//                 )) || <p>No prescriptions data available.</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DoctorPatients;




// src/pages/doctor/Patients.jsx
import React, { useState, useEffect } from 'react';
import doctorService from '../../services/doctorService';

function DoctorPatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [medicalHistory, setMedicalHistory] = useState(null);
  const [showMedicalHistory, setShowMedicalHistory] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await doctorService.getAppointments();
      const appointments = response.appointments || [];

      const uniquePatients = [];
      const patientIds = new Set();

      appointments.forEach(appointment => {
        if (!patientIds.has(appointment.patient.id)) {
          patientIds.add(appointment.patient.id);
          uniquePatients.push(appointment.patient);
        }
      });

      setPatients(uniquePatients);
    } catch (error) {
      setError('Failed to fetch patients');
      console.error('Error fetching patients:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMedicalHistory = async (patientId) => {
    try {
      const response = await doctorService.getPatientMedicalHistory(patientId);
      setMedicalHistory(response);
      setShowMedicalHistory(true);
    } catch (error) {
      alert('Failed to fetch medical history');
      console.error('Error fetching medical history:', error);
    }
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
          <p className="text-gray-600 font-medium">Loading patients...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-6 md:p-8">
      <style>{`
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .info-row {
          transition: all 0.2s ease;
        }

        .info-row:hover {
          background-color: rgba(59, 130, 246, 0.05);
          padding-left: 0.5rem;
          border-radius: 0.375rem;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="animate-fadeInUp">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              My Patients
            </h1>
          </div>
          <p className="text-gray-500 ml-7">Manage and view your patient information</p>
        </div>

        {error && (
          <div className="animate-slideInRight bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-red-800 font-medium">{error}</span>
            </div>
          </div>
        )}

        {patients.length === 0 ? (
          <div className="animate-scaleIn bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
            <div className="max-w-md mx-auto space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-800">No patients found</h3>
                <p className="text-gray-500">You don't have any patients yet.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.map((patient, index) => (
              <div
                key={patient.id}
                className={`opacity-0 animate-fadeInUp stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="card-hover bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 p-6 h-full flex flex-col">
                  {/* Patient Header */}
                  <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">
                          {patient.user.first_name?.[0]}{patient.user.last_name?.[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {patient.user.first_name} {patient.user.last_name}
                        </h3>
                        <span className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {patient.user.date_of_birth ?
                            `Age: ${new Date().getFullYear() - new Date(patient.user.date_of_birth).getFullYear()}`
                            : 'Age: Unknown'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Patient Information */}
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="info-row flex items-center justify-between text-sm py-2">
                      <span className="text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </span>
                      <span className="text-gray-700 font-medium truncate ml-2" title={patient.user.email}>
                        {patient.user.email}
                      </span>
                    </div>

                    <div className="info-row flex items-center justify-between text-sm py-2">
                      <span className="text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Phone
                      </span>
                      <span className="text-gray-700 font-medium">
                        {patient.user.phone || 'Not provided'}
                      </span>
                    </div>

                    <div className="info-row flex items-center justify-between text-sm py-2">
                      <span className="text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Blood Group
                      </span>
                      <span className="text-gray-700 font-medium">
                        {patient.blood_group || 'Not provided'}
                      </span>
                    </div>

                    <div className="info-row flex items-center justify-between text-sm py-2">
                      <span className="text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Emergency
                      </span>
                      <span className="text-gray-700 font-medium">
                        {patient.emergency_contact || 'Not provided'}
                      </span>
                    </div>

                    <div className="info-row flex items-center justify-between text-sm py-2">
                      <span className="text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Insurance
                      </span>
                      <span className="text-gray-700 font-medium">
                        {patient.insurance_info || 'Not provided'}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => {
                      setSelectedPatient(patient);
                      fetchMedicalHistory(patient.id);
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Medical History
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Medical History Modal */}
        {showMedicalHistory && medicalHistory && (
          <MedicalHistoryModal
            patient={selectedPatient}
            medicalHistory={medicalHistory}
            onClose={() => {
              setShowMedicalHistory(false);
              setMedicalHistory(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

// Medical History Modal Component
function MedicalHistoryModal({ patient, medicalHistory, onClose }) {
  const [activeTab, setActiveTab] = useState('diagnoses');

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <style>{`
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

        .modal-content {
          animation: modalSlideIn 0.3s ease-out forwards;
        }

        .tab-button {
          transition: all 0.3s ease;
        }

        .tab-button:hover {
          background-color: rgba(59, 130, 246, 0.1);
        }

        .tab-button.active {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
        }

        .history-card {
          transition: all 0.3s ease;
        }

        .history-card:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col border border-gray-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">
                {patient.user.first_name?.[0]}{patient.user.last_name?.[0]}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Medical History</h2>
              <p className="text-gray-600">{patient.user.first_name} {patient.user.last_name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:rotate-90"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-6 pb-0 border-b border-gray-100">
          <button
            className={`tab-button flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 ${activeTab === 'diagnoses' ? 'active' : 'text-gray-600'
              }`}
            onClick={() => setActiveTab('diagnoses')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Diagnoses
          </button>
          <button
            className={`tab-button flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 ${activeTab === 'test-reports' ? 'active' : 'text-gray-600'
              }`}
            onClick={() => setActiveTab('test-reports')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Test Reports
          </button>
          <button
            className={`tab-button flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 ${activeTab === 'prescriptions' ? 'active' : 'text-gray-600'
              }`}
            onClick={() => setActiveTab('prescriptions')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Prescriptions
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-white">
          {activeTab === 'diagnoses' && (
            <div className="space-y-4">
              {medicalHistory.diagnoses.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">No diagnoses found.</p>
                </div>
              ) : (
                medicalHistory.diagnoses.map((diagnosis) => (
                  <div key={diagnosis.id} className="history-card bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-800">{diagnosis.diagnosis}</h4>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                        Diagnosis
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <span className="font-semibold text-gray-700 min-w-[140px]">Symptoms:</span>
                        <span className="text-gray-600">{diagnosis.symptoms}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-gray-700 min-w-[140px]">Treatment Plan:</span>
                        <span className="text-gray-600">{diagnosis.treatment_plan}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-gray-700 min-w-[140px]">Notes:</span>
                        <span className="text-gray-600">{diagnosis.notes}</span>
                      </div>
                      {diagnosis.follow_up_required && (
                        <div className="flex gap-2">
                          <span className="font-semibold text-gray-700 min-w-[140px]">Follow-up Date:</span>
                          <span className="text-gray-600">{formatDate(diagnosis.follow_up_date)}</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Recorded: {formatDate(diagnosis.created_at)}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'test-reports' && (
            <div className="space-y-4">
              {medicalHistory.test_reports.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">No test reports found.</p>
                </div>
              ) : (
                medicalHistory.test_reports.map((report) => (
                  <div key={report.id} className="history-card bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-800">{report.test_name}</h4>
                      <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full">
                        {report.test_type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Result:</span>
                        <p className="text-gray-600 mt-1">{report.result}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Normal Range:</span>
                        <p className="text-gray-600 mt-1">{report.normal_range}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Units:</span>
                        <p className="text-gray-600 mt-1">{report.units}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="text-sm font-semibold text-gray-700">Comments:</span>
                        <p className="text-gray-600 mt-1">{report.comments}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Completed: {formatDate(report.completed_date)}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'prescriptions' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">Prescription History</h3>
                <span className="text-sm text-gray-500 font-medium">
                  {medicalHistory.prescriptions?.length || 0} Records Found
                </span>
              </div>

              {!medicalHistory.prescriptions || medicalHistory.prescriptions.length === 0 ? (
                <div className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">No prescriptions found</h4>
                  <p className="text-gray-500 mt-1">This patient does not have any recorded prescriptions.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {medicalHistory.prescriptions.map((prescription, idx) => (
                    <div
                      key={prescription.id}
                      className={`group bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all stagger-${Math.min(idx + 1, 6)}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                            <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 uppercase tracking-tight">{prescription.medicine_name}</h4>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-xs font-bold px-2 py-0.5 bg-gray-100 rounded text-gray-600">PRESCRIBED</span>
                              <span className="text-xs text-gray-400">#PRES-{prescription.id}</span>
                            </div>
                          </div>
                        </div>
                        {prescription.is_dispensed ? (
                          <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black rounded-full border border-green-100 uppercase tracking-wider">Dispensed</span>
                        ) : (
                          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-black rounded-full border border-amber-100 uppercase tracking-wider">Pending</span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-xl p-3">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Dosage</label>
                          <p className="text-sm font-bold text-gray-800">{prescription.dosage}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Freq</label>
                          <p className="text-sm font-bold text-gray-800">{prescription.frequency}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Duration</label>
                          <p className="text-sm font-bold text-gray-800">{prescription.duration || 'N/A'}</p>
                        </div>
                      </div>

                      {prescription.instructions && (
                        <div className="bg-blue-50/30 rounded-xl p-4 border border-blue-50/50 mb-4">
                          <label className="text-[10px] font-bold text-blue-500 uppercase tracking-widest block mb-1">Clinical Instructions</label>
                          <p className="text-sm text-gray-700 leading-relaxed italic">"{prescription.instructions}"</p>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-[11px] font-medium text-gray-400">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Created on {formatDate(prescription.created_at)}
                        </div>
                        <button className="text-blue-600 font-bold text-xs hover:underline flex items-center gap-1.5 p-1">
                          Print Prescription
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorPatients;












