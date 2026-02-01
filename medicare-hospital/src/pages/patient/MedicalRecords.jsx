// // // // // src/pages/patient/MedicalRecords.jsx
// // // // import React, { useState, useEffect } from 'react';
// // // // import medicalService from '../../services/medicalService';

// // // // function MedicalRecords() {
// // // //   const [activeTab, setActiveTab] = useState('test-reports');
// // // //   const [testReports, setTestReports] = useState([]);
// // // //   const [vitalSigns, setVitalSigns] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState('');

// // // //   useEffect(() => {
// // // //     fetchMedicalData();
// // // //   }, [activeTab]);

// // // //   const fetchMedicalData = async () => {
// // // //     try {
// // // //       setLoading(true);
      
// // // //       if (activeTab === 'test-reports') {
// // // //         const response = await medicalService.getTestReports();
// // // //         setTestReports(response.test_reports || []);
// // // //       } else {
// // // //         const response = await medicalService.getVitalSigns();
// // // //         setVitalSigns(response.vital_signs || []);
// // // //       }
// // // //     } catch (error) {
// // // //       setError('Failed to fetch medical data');
// // // //       console.error('Error fetching medical data:', error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const formatDate = (dateString) => {
// // // //     return new Date(dateString).toLocaleDateString('en-US', {
// // // //       year: 'numeric',
// // // //       month: 'long',
// // // //       day: 'numeric',
// // // //       hour: '2-digit',
// // // //       minute: '2-digit'
// // // //     });
// // // //   };

// // // //   const renderTestReports = () => {
// // // //     if (testReports.length === 0) {
// // // //       return <div className="empty-state">No test reports found</div>;
// // // //     }

// // // //     return (
// // // //       <div className="records-list">
// // // //         {testReports.map((report) => (
// // // //           <div key={report.id} className="record-card">
// // // //             <div className="record-header">
// // // //               <h3>{report.test_name}</h3>
// // // //               <span className={`status-badge ${report.status === 'completed' ? 'status-completed' : 'status-pending'}`}>
// // // //                 {report.status}
// // // //               </span>
// // // //             </div>
            
// // // //             <div className="record-details">
// // // //               <div className="detail-row">
// // // //                 <div className="detail-item">
// // // //                   <label>Test Type:</label>
// // // //                   <span>{report.test_type}</span>
// // // //                 </div>
// // // //                 <div className="detail-item">
// // // //                   <label>Requested Date:</label>
// // // //                   <span>{formatDate(report.requested_date)}</span>
// // // //                 </div>
// // // //               </div>
              
// // // //               <div className="detail-row">
// // // //                 <div className="detail-item">
// // // //                   <label>Result:</label>
// // // //                   <span className={report.result === 'Normal ranges' ? 'normal-result' : 'abnormal-result'}>
// // // //                     {report.result}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div className="detail-item">
// // // //                   <label>Normal Range:</label>
// // // //                   <span>{report.normal_range}</span>
// // // //                 </div>
// // // //               </div>
              
// // // //               {report.units && (
// // // //                 <div className="detail-item">
// // // //                   <label>Units:</label>
// // // //                   <span>{report.units}</span>
// // // //                 </div>
// // // //               )}
              
// // // //               {report.comments && (
// // // //                 <div className="detail-item">
// // // //                   <label>Comments:</label>
// // // //                   <span>{report.comments}</span>
// // // //                 </div>
// // // //               )}
              
// // // //               {report.completed_date && (
// // // //                 <div className="detail-item">
// // // //                   <label>Completed Date:</label>
// // // //                   <span>{formatDate(report.completed_date)}</span>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     );
// // // //   };

// // // //   const renderVitalSigns = () => {
// // // //     if (vitalSigns.length === 0) {
// // // //       return <div className="empty-state">No vital signs records found</div>;
// // // //     }

// // // //     return (
// // // //       <div className="records-list">
// // // //         {vitalSigns.map((vital) => (
// // // //           <div key={vital.id} className="record-card">
// // // //             <div className="record-header">
// // // //               <h3>Vital Signs</h3>
// // // //               <span className="record-date">{formatDate(vital.recorded_at)}</span>
// // // //             </div>
            
// // // //             <div className="vital-signs-grid">
// // // //               <div className="vital-item">
// // // //                 <label>Blood Pressure:</label>
// // // //                 <span>{vital.blood_pressure}</span>
// // // //               </div>
// // // //               <div className="vital-item">
// // // //                 <label>Heart Rate:</label>
// // // //                 <span>{vital.heart_rate} bpm</span>
// // // //               </div>
// // // //               <div className="vital-item">
// // // //                 <label>Temperature:</label>
// // // //                 <span>{vital.temperature}°F</span>
// // // //               </div>
// // // //               <div className="vital-item">
// // // //                 <label>Oxygen Saturation:</label>
// // // //                 <span>{vital.oxygen_saturation}%</span>
// // // //               </div>
// // // //               <div className="vital-item">
// // // //                 <label>Respiratory Rate:</label>
// // // //                 <span>{vital.respiratory_rate} breaths/min</span>
// // // //               </div>
// // // //               <div className="vital-item">
// // // //                 <label>Blood Sugar:</label>
// // // //                 <span>{vital.blood_sugar} mg/dL</span>
// // // //               </div>
// // // //               {vital.weight && (
// // // //                 <div className="vital-item">
// // // //                   <label>Weight:</label>
// // // //                   <span>{vital.weight} kg</span>
// // // //                 </div>
// // // //               )}
// // // //               {vital.height && (
// // // //                 <div className="vital-item">
// // // //                   <label>Height:</label>
// // // //                   <span>{vital.height} cm</span>
// // // //                 </div>
// // // //               )}
// // // //               {vital.notes && (
// // // //                 <div className="vital-item full-width">
// // // //                   <label>Notes:</label>
// // // //                   <span>{vital.notes}</span>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div className="page-container">
// // // //       <div className="page-header">
// // // //         <h1>Medical Records</h1>
// // // //       </div>

// // // //       {/* Tabs */}
// // // //       <div className="tabs">
// // // //         <button 
// // // //           className={`tab ${activeTab === 'test-reports' ? 'active' : ''}`}
// // // //           onClick={() => setActiveTab('test-reports')}
// // // //         >
// // // //           Test Reports
// // // //         </button>
// // // //         <button 
// // // //           className={`tab ${activeTab === 'vital-signs' ? 'active' : ''}`}
// // // //           onClick={() => setActiveTab('vital-signs')}
// // // //         >
// // // //           Vital Signs
// // // //         </button>
// // // //       </div>

// // // //       {error && <div className="error-message">{error}</div>}

// // // //       {loading ? (
// // // //         <div className="loading">Loading medical records...</div>
// // // //       ) : (
// // // //         <div className="tab-content">
// // // //           {activeTab === 'test-reports' ? renderTestReports() : renderVitalSigns()}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default MedicalRecords;







// // // // src/pages/patient/MedicalRecords.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import medicalService from '../../services/medicalService';

// // // function MedicalRecords() {
// // //   const [activeTab, setActiveTab] = useState('test-reports');
// // //   const [testReports, setTestReports] = useState([]);
// // //   const [vitalSigns, setVitalSigns] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     fetchMedicalData();
// // //   }, [activeTab]);

// // //   const fetchMedicalData = async () => {
// // //     try {
// // //       setLoading(true);
      
// // //       if (activeTab === 'test-reports') {
// // //         const response = await medicalService.getTestReports();
// // //         setTestReports(response.test_reports || []);
// // //       } else {
// // //         const response = await medicalService.getVitalSigns();
// // //         setVitalSigns(response.vital_signs || []);
// // //       }
// // //     } catch (error) {
// // //       setError('Failed to fetch medical data');
// // //       console.error('Error fetching medical data:', error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const formatDate = (dateString) => {
// // //     return new Date(dateString).toLocaleDateString('en-US', {
// // //       year: 'numeric',
// // //       month: 'long',
// // //       day: 'numeric',
// // //       hour: '2-digit',
// // //       minute: '2-digit'
// // //     });
// // //   };

// // //   const renderTestReports = () => {
// // //     if (testReports.length === 0) {
// // //       return <div className="text-center text-gray-500 p-5">No test reports found</div>;
// // //     }

// // //     return (
// // //       <div className="space-y-4">
// // //         {testReports.map((report) => (
// // //           <div key={report.id} className="card shadow-md bg-base-100 p-5">
// // //             <div className="flex justify-between items-center border-b pb-2 mb-3">
// // //               <h3 className="text-xl font-semibold">{report.test_name}</h3>
// // //               <span
// // //                 className={`badge px-3 py-2 ${
// // //                   report.status === 'completed' ? 'badge-success' : 'badge-warning'
// // //                 }`}
// // //               >
// // //                 {report.status}
// // //               </span>
// // //             </div>

// // //             <div className="space-y-2">
// // //               <div className="grid grid-cols-2 gap-4">
// // //                 <div>
// // //                   <label className="font-semibold">Test Type:</label>
// // //                   <p>{report.test_type}</p>
// // //                 </div>
// // //                 <div>
// // //                   <label className="font-semibold">Requested Date:</label>
// // //                   <p>{formatDate(report.requested_date)}</p>
// // //                 </div>
// // //               </div>

// // //               <div className="grid grid-cols-2 gap-4">
// // //                 <div>
// // //                   <label className="font-semibold">Result:</label>
// // //                   <p className={`${report.result === 'Normal ranges' ? 'text-green-600' : 'text-red-600'}`}>
// // //                     {report.result}
// // //                   </p>
// // //                 </div>
// // //                 <div>
// // //                   <label className="font-semibold">Normal Range:</label>
// // //                   <p>{report.normal_range}</p>
// // //                 </div>
// // //               </div>

// // //               {report.units && (
// // //                 <p><span className="font-semibold">Units:</span> {report.units}</p>
// // //               )}

// // //               {report.comments && (
// // //                 <p><span className="font-semibold">Comments:</span> {report.comments}</p>
// // //               )}

// // //               {report.completed_date && (
// // //                 <p><span className="font-semibold">Completed Date:</span> {formatDate(report.completed_date)}</p>
// // //               )}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     );
// // //   };

// // //   const renderVitalSigns = () => {
// // //     if (vitalSigns.length === 0) {
// // //       return <div className="text-center text-gray-500 p-5">No vital signs records found</div>;
// // //     }

// // //     return (
// // //       <div className="space-y-4">
// // //         {vitalSigns.map((vital) => (
// // //           <div key={vital.id} className="card bg-base-100 shadow-md p-5">
// // //             <div className="flex justify-between border-b pb-2 mb-3">
// // //               <h3 className="text-xl font-semibold">Vital Signs</h3>
// // //               <span className="text-gray-600">{formatDate(vital.recorded_at)}</span>
// // //             </div>

// // //             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// // //               <div><label className="font-semibold">Blood Pressure:</label> <p>{vital.blood_pressure}</p></div>
// // //               <div><label className="font-semibold">Heart Rate:</label> <p>{vital.heart_rate} bpm</p></div>
// // //               <div><label className="font-semibold">Temperature:</label> <p>{vital.temperature}°F</p></div>
// // //               <div><label className="font-semibold">Oxygen Saturation:</label> <p>{vital.oxygen_saturation}%</p></div>
// // //               <div><label className="font-semibold">Respiratory Rate:</label> <p>{vital.respiratory_rate} breaths/min</p></div>
// // //               <div><label className="font-semibold">Blood Sugar:</label> <p>{vital.blood_sugar} mg/dL</p></div>

// // //               {vital.weight && <div><label className="font-semibold">Weight:</label> <p>{vital.weight} kg</p></div>}
// // //               {vital.height && <div><label className="font-semibold">Height:</label> <p>{vital.height} cm</p></div>}
// // //               {vital.notes && <div className="col-span-full"><label className="font-semibold">Notes:</label> <p>{vital.notes}</p></div>}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div className="p-6">
// // //       <div className="mb-6">
// // //         <h1 className="text-3xl font-bold">Medical Records</h1>
// // //       </div>

// // //       {/* Tabs */}
// // //       <div className="tabs tabs-bordered mb-4">
// // //         <button
// // //           className={`tab ${activeTab === 'test-reports' ? 'tab-active' : ''}`}
// // //           onClick={() => setActiveTab('test-reports')}
// // //         >
// // //           Test Reports
// // //         </button>
// // //         <button
// // //           className={`tab ${activeTab === 'vital-signs' ? 'tab-active' : ''}`}
// // //           onClick={() => setActiveTab('vital-signs')}
// // //         >
// // //           Vital Signs
// // //         </button>
// // //       </div>

// // //       {error && <div className="alert alert-error">{error}</div>}

// // //       {loading ? (
// // //         <div className="loading loading-spinner text-primary mx-auto"></div>
// // //       ) : (
// // //         <div className="mt-4">
// // //           {activeTab === 'test-reports' ? renderTestReports() : renderVitalSigns()}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default MedicalRecords;











// // // src/pages/patient/MedicalRecords.jsx
// // import React, { useState, useEffect } from 'react';
// // import medicalService from '../../services/medicalService';

// // function MedicalRecords() {
// //   const [activeTab, setActiveTab] = useState('test-reports');
// //   const [testReports, setTestReports] = useState([]);
// //   const [vitalSigns, setVitalSigns] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     fetchMedicalData();
// //   }, [activeTab]);

// //   const fetchMedicalData = async () => {
// //     try {
// //       setLoading(true);
      
// //       if (activeTab === 'test-reports') {
// //         const response = await medicalService.getTestReports();
// //         setTestReports(response.test_reports || []);
// //       } else {
// //         const response = await medicalService.getVitalSigns();
// //         setVitalSigns(response.vital_signs || []);
// //       }
// //     } catch (error) {
// //       setError('Failed to fetch medical data');
// //       console.error('Error fetching medical data:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric',
// //       hour: '2-digit',
// //       minute: '2-digit'
// //     });
// //   };

// //   const renderTestReports = () => {
// //     if (testReports.length === 0) {
// //       return (
// //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
// //           <div className="text-center max-w-md mx-auto">
// //             <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
// //               <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //               </svg>
// //             </div>
// //             <p className="text-gray-500">No test reports found</p>
// //           </div>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div className="space-y-6">
// //         {testReports.map((report) => (
// //           <div
// //             key={report.id}
// //             className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
// //           >
// //             {/* Report Header */}
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
// //               <div className="flex items-start gap-4">
// //                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
// //                   <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
// //                   </svg>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-lg font-bold text-gray-800">{report.test_name}</h3>
// //                   <p className="text-sm text-gray-500 mt-1">{report.test_type}</p>
// //                 </div>
// //               </div>
// //               <span
// //                 className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full ${
// //                   report.status === 'completed'
// //                     ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
// //                     : 'bg-amber-50 text-amber-700 border border-amber-200'
// //                 }`}
// //               >
// //                 {report.status.toUpperCase()}
// //               </span>
// //             </div>

// //             {/* Report Details */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
// //               <div className="flex items-start gap-3">
// //                 <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
// //                   <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                   </svg>
// //                 </div>
// //                 <div className="flex-1">
// //                   <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Requested Date</label>
// //                   <span className="text-gray-800 font-medium">{formatDate(report.requested_date)}</span>
// //                 </div>
// //               </div>

// //               {report.completed_date && (
// //                 <div className="flex items-start gap-3">
// //                   <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
// //                     <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                     </svg>
// //                   </div>
// //                   <div className="flex-1">
// //                     <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Completed Date</label>
// //                     <span className="text-gray-800 font-medium">{formatDate(report.completed_date)}</span>
// //                   </div>
// //                 </div>
// //               )}

// //               <div className="flex items-start gap-3">
// //                 <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
// //                   <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// //                   </svg>
// //                 </div>
// //                 <div className="flex-1">
// //                   <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Result</label>
// //                   <span
// //                     className={`font-semibold ${
// //                       report.result === 'Normal ranges' ? 'text-emerald-600' : 'text-red-600'
// //                     }`}
// //                   >
// //                     {report.result}
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="flex items-start gap-3">
// //                 <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
// //                   <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
// //                   </svg>
// //                 </div>
// //                 <div className="flex-1">
// //                   <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Normal Range</label>
// //                   <span className="text-gray-800 font-medium">{report.normal_range}</span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Additional Information */}
// //             {(report.units || report.comments) && (
// //               <div className="space-y-3 pt-5 border-t border-gray-100">
// //                 {report.units && (
// //                   <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
// //                     <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Units</label>
// //                     <p className="text-gray-800">{report.units}</p>
// //                   </div>
// //                 )}

// //                 {report.comments && (
// //                   <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
// //                     <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Comments</label>
// //                     <p className="text-gray-800">{report.comments}</p>
// //                   </div>
// //                 )}
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };

// //   const renderVitalSigns = () => {
// //     if (vitalSigns.length === 0) {
// //       return (
// //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
// //           <div className="text-center max-w-md mx-auto">
// //             <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
// //               <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
// //               </svg>
// //             </div>
// //             <p className="text-gray-500">No vital signs records found</p>
// //           </div>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div className="space-y-6">
// //         {vitalSigns.map((vital) => (
// //           <div
// //             key={vital.id}
// //             className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
// //           >
// //             {/* Vital Header */}
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
// //               <div className="flex items-start gap-4">
// //                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
// //                   <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
// //                   </svg>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-lg font-bold text-gray-800">Vital Signs</h3>
// //                   <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
// //                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                     </svg>
// //                     {formatDate(vital.recorded_at)}
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Vital Signs Grid */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
// //               <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
// //                 <div className="flex items-center gap-3 mb-2">
// //                   <div className="w-8 h-8 rounded-lg bg-red-200 flex items-center justify-center">
// //                     <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
// //                     </svg>
// //                   </div>
// //                   <label className="text-xs font-semibold text-red-700 uppercase tracking-wide">Blood Pressure</label>
// //                 </div>
// //                 <p className="text-xl font-bold text-red-800">{vital.blood_pressure}</p>
// //               </div>

// //               <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
// //                 <div className="flex items-center gap-3 mb-2">
// //                   <div className="w-8 h-8 rounded-lg bg-pink-200 flex items-center justify-center">
// //                     <svg className="w-4 h-4 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
// //                     </svg>
// //                   </div>
// //                   <label className="text-xs font-semibold text-pink-700 uppercase tracking-wide">Heart Rate</label>
// //                 </div>
// //                 <p className="text-xl font-bold text-pink-800">{vital.heart_rate} <span className="text-sm font-normal">bpm</span></p>
// //               </div>

// //               <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
// //                 <div className="flex items-center gap-3 mb-2">
// //                   <div className="w-8 h-8 rounded-lg bg-orange-200 flex items-center justify-center">
// //                     <svg className="w-4 h-4 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// //                     </svg>
// //                   </div>
// //                   <label className="text-xs font-semibold text-orange-700 uppercase tracking-wide">Temperature</label>
// //                 </div>
// //                 <p className="text-xl font-bold text-orange-800">{vital.temperature}<span className="text-sm font-normal">°F</span></p>
// //               </div>

// //               <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-4 border border-sky-200">
// //                 <div className="flex items-center gap-3 mb-2">
// //                   <div className="w-8 h-8 rounded-lg bg-sky-200 flex items-center justify-center">
// //                     <svg className="w-4 h-4 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
// //                     </svg>
// //                   </div>
// //                   <label className="text-xs font-semibold text-sky-700 uppercase tracking-wide">Oxygen Saturation</label>
// //                 </div>
// //                 <p className="text-xl font-bold text-sky-800">{vital.oxygen_saturation}<span className="text-sm font-normal">%</span></p>
// //               </div>

// //               <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
// //                 <div className="flex items-center gap-3 mb-2">
// //                   <div className="w-8 h-8 rounded-lg bg-teal-200 flex items-center justify-center">
// //                     <svg className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
// //                     </svg>
// //                   </div>
// //                   <label className="text-xs font-semibold text-teal-700 uppercase tracking-wide">Respiratory Rate</label>
// //                 </div>
// //                 <p className="text-xl font-bold text-teal-800">{vital.respiratory_rate} <span className="text-sm font-normal">breaths/min</span></p>
// //               </div>

// //               <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
// //                 <div className="flex items-center gap-3 mb-2">
// //                   <div className="w-8 h-8 rounded-lg bg-purple-200 flex items-center justify-center">
// //                     <svg className="w-4 h-4 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
// //                     </svg>
// //                   </div>
// //                   <label className="text-xs font-semibold text-purple-700 uppercase tracking-wide">Blood Sugar</label>
// //                 </div>
// //                 <p className="text-xl font-bold text-purple-800">{vital.blood_sugar} <span className="text-sm font-normal">mg/dL</span></p>
// //               </div>

// //               {vital.weight && (
// //                 <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
// //                   <div className="flex items-center gap-3 mb-2">
// //                     <div className="w-8 h-8 rounded-lg bg-indigo-200 flex items-center justify-center">
// //                       <svg className="w-4 h-4 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
// //                       </svg>
// //                     </div>
// //                     <label className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">Weight</label>
// //                   </div>
// //                   <p className="text-xl font-bold text-indigo-800">{vital.weight} <span className="text-sm font-normal">kg</span></p>
// //                 </div>
// //               )}

// //               {vital.height && (
// //                 <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
// //                   <div className="flex items-center gap-3 mb-2">
// //                     <div className="w-8 h-8 rounded-lg bg-emerald-200 flex items-center justify-center">
// //                       <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
// //                       </svg>
// //                     </div>
// //                     <label className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Height</label>
// //                   </div>
// //                   <p className="text-xl font-bold text-emerald-800">{vital.height} <span className="text-sm font-normal">cm</span></p>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Notes */}
// //             {vital.notes && (
// //               <div className="pt-5 border-t border-gray-100">
// //                 <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
// //                   <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Notes</label>
// //                   <p className="text-gray-800">{vital.notes}</p>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-600 mb-4"></div>
// //           <p className="text-gray-600 text-lg font-medium">Loading medical data...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-7xl mx-auto space-y-8">
// //         {/* Header Section */}
// //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6">
// //           <div>
// //             <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
// //               Medical Records
// //             </h1>
// //             <p className="text-gray-500 mt-1 text-sm">View your test reports and vital signs history</p>
// //           </div>
// //         </div>

// //         {/* Tabs */}
// //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-2">
// //           <div className="flex gap-2">
// //             <button
// //               className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
// //                 activeTab === 'test-reports'
// //                   ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md'
// //                   : 'text-gray-600 hover:bg-gray-100'
// //               }`}
// //               onClick={() => setActiveTab('test-reports')}
// //             >
// //               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //               </svg>
// //               Test Reports
// //             </button>
// //             <button
// //               className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
// //                 activeTab === 'vital-signs'
// //                   ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md'
// //                   : 'text-gray-600 hover:bg-gray-100'
// //               }`}
// //               onClick={() => setActiveTab('vital-signs')}
// //             >
// //               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
// //               </svg>
// //               Vital Signs
// //             </button>
// //           </div>
// //         </div>

// //         {/* Error Message */}
// //         {error && (
// //           <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl shadow-sm flex items-center gap-3">
// //             <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
// //               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
// //             </svg>
// //             <span className="font-medium">{error}</span>
// //           </div>
// //         )}

// //         {/* Content */}
// //         <div>
// //           {activeTab === 'test-reports' ? renderTestReports() : renderVitalSigns()}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default MedicalRecords;














// import React, { useState, useEffect } from 'react';
// import medicalService from '../../services/medicalService';
// import { motion } from 'framer-motion';
// import { FaClipboardList, FaHeartbeat, FaCalendarAlt, FaCheckCircle, FaFileMedical, FaThermometerHalf, FaTint, FaWind, FaWeight } from 'react-icons/fa';

// function MedicalRecords() {
//   const [activeTab, setActiveTab] = useState('test-reports');
//   const [testReports, setTestReports] = useState([]);
//   const [vitalSigns, setVitalSigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchMedicalData();
//   }, [activeTab]);

//   // const fetchMedicalData = async () => {
//   //   try {
//   //     setLoading(true);
      
//   //     if (activeTab === 'test-reports') {
//   //       const response = await medicalService.getTestReports();
//   //       // setTestReports(response.test_reports || []);
//   //       setTestReports(response || []);
//   //     } else {
//   //       const response = await medicalService.getVitalSigns();
//   //       // setVitalSigns(response.vital_signs || []);
//   //       setVitalSigns(response || []);
//   //     }
//   //   } catch (error) {
//   //     setError('Failed to fetch medical data');
//   //     console.error('Error fetching medical data:', error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const fetchMedicalData = async () => {
//     try {
//       setLoading(true);
//       setError('');
  
//       if (activeTab === 'test-reports') {
//         const response = await medicalService.getTestReports();
//         setTestReports(Array.isArray(response) ? response : []);
//       } else {
//         const response = await medicalService.getVitalSigns();
//         setVitalSigns(Array.isArray(response) ? response : []);
//       }
  
//     } catch (error) {
//       console.error('Error fetching medical data:', error);
//       setError('Failed to fetch medical records');
//     } finally {
//       setLoading(false);
//     }
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

//   const renderTestReports = () => {
//     if (testReports.length === 0) {
//       return (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 py-20 px-6"
//         >
//           <div className="text-center max-w-md mx-auto">
//             <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <FaClipboardList className="text-5xl text-gray-400" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">No Test Reports Found</h3>
//             <p className="text-gray-500">You don't have any test reports at the moment.</p>
//           </div>
//         </motion.div>
//       );
//     }

//     return (
//       <div className="space-y-6">
//         {testReports.map((report, index) => (
//           <motion.div
//             // key={report.id}
//             key={report.id || report._id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
//           >
//             {/* Report Header */}
//             <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-5 border-b border-gray-200">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                 <div className="flex items-start gap-4">
//                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center shadow-lg flex-shrink-0">
//                     <FaFileMedical className="text-2xl text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800">{report.test_name}</h3>
//                     <p className="text-sm text-gray-600 mt-1">{report.test_type}</p>
//                   </div>
//                 </div>
//                 <span
//                   className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full shadow-sm ${
//                     report.status === 'completed'
//                       ? 'bg-green-100 text-green-800 border border-green-200'
//                       : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
//                   }`}
//                 >
//                   {report.status === 'completed' ? <FaCheckCircle className="mr-2" /> : <FaCalendarAlt className="mr-2" />}
//                   {report.status.toUpperCase()}
//                 </span>
//               </div>
//             </div>

//             {/* Report Details */}
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
//                     <FaCalendarAlt className="text-gray-600" />
//                   </div>
//                   <div>
//                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Requested Date</label>
//                     <span className="text-gray-800 font-semibold">{formatDate(report.requested_date)}</span>
//                   </div>
//                 </div>

//                 {report.completed_date && (
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
//                       <FaCheckCircle className="text-gray-600" />
//                     </div>
//                     <div>
//                       <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Completed Date</label>
//                       <span className="text-gray-800 font-semibold">{formatDate(report.completed_date)}</span>
//                     </div>
//                   </div>
//                 )}

//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
//                     <FaFileMedical className="text-gray-600" />
//                   </div>
//                   <div>
//                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Result</label>
//                     <span
//                       className={`font-bold text-lg ${
//                         report.result === 'Normal ranges' ? 'text-green-600' : 'text-red-600'
//                       }`}
//                     >
//                       {report.result}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
//                     <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                     </svg>
//                   </div>
//                   <div>
//                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Normal Range</label>
//                     <span className="text-gray-800 font-semibold">{report.normal_range}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Additional Information */}
//               {(report.units || report.comments) && (
//                 <div className="space-y-4 pt-4 border-t border-gray-200">
//                   {report.units && (
//                     <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-200">
//                       <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Units</label>
//                       <p className="text-gray-800 font-medium">{report.units}</p>
//                     </div>
//                   )}

//                   {report.comments && (
//                     <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-200">
//                       <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Comments</label>
//                       <p className="text-gray-800">{report.comments}</p>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     );
//   };

//   const renderVitalSigns = () => {
//     if (vitalSigns.length === 0) {
//       return (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 py-20 px-6"
//         >
//           <div className="text-center max-w-md mx-auto">
//             <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <FaHeartbeat className="text-5xl text-gray-400" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">No Vital Signs Found</h3>
//             <p className="text-gray-500">You don't have any vital signs records at the moment.</p>
//           </div>
//         </motion.div>
//       );
//     }

//     return (
//       <div className="space-y-6">
//         {vitalSigns.map((vital, index) => (
//           <motion.div
//             // key={vital.id}
//             key={vital.id || vital._id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
//           >
//             {/* Vital Header */}
//             <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-5 border-b border-gray-200">
//               <div className="flex items-start gap-4">
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center shadow-lg flex-shrink-0">
//                   <FaHeartbeat className="text-2xl text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800">Vital Signs Record</h3>
//                   <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
//                     <FaCalendarAlt className="text-gray-500" />
//                     {formatDate(vital.recorded_at)}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Vital Signs Grid */}
//             <div className="p-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 border border-gray-300 shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
//                       <FaTint className="text-white" />
//                     </div>
//                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Blood Pressure</label>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">{vital.blood_pressure}</p>
//                 </div>

//                 <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 border border-gray-300 shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
//                       <FaHeartbeat className="text-white" />
//                     </div>
//                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Heart Rate</label>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">{vital.heart_rate} <span className="text-sm font-normal text-gray-600">bpm</span></p>
//                 </div>

//                 <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 border border-gray-300 shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
//                       <FaThermometerHalf className="text-white" />
//                     </div>
//                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Temperature</label>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">{vital.temperature}<span className="text-sm font-normal text-gray-600">°F</span></p>
//                 </div>

//                 <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 border border-gray-300 shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
//                       <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
//                       </svg>
//                     </div>
//                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">O2 Saturation</label>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">{vital.oxygen_saturation}<span className="text-sm font-normal text-gray-600">%</span></p>
//                 </div>

//                 <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 border border-gray-300 shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
//                       <FaWind className="text-white" />
//                     </div>
//                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Respiratory Rate</label>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">{vital.respiratory_rate} <span className="text-sm font-normal text-gray-600">br/min</span></p>
//                 </div>

//                 <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 border border-gray-300 shadow-sm">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
//                       <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//                       </svg>
//                     </div>
//                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Blood Sugar</label>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">{vital.blood_sugar} <span className="text-sm font-normal text-gray-600">mg/dL</span></p>
//                 </div>

//                 {vital.weight && (
//                   <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 border border-gray-300 shadow-sm">
//                     <div className="flex items-center gap-3 mb-3">
//                       <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
//                         <FaWeight className="text-white" />
//                       </div>
//                       <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Weight</label>
//                     </div>
//                     <p className="text-2xl font-bold text-gray-900">{vital.weight} <span className="text-sm font-normal text-gray-600">kg</span></p>
//                   </div>
//                 )}

//                 {vital.height && (
//                   <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 border border-gray-300 shadow-sm">
//                     <div className="flex items-center gap-3 mb-3">
//                       <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
//                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
//                         </svg>
//                       </div>
//                       <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Height</label>
//                     </div>
//                     <p className="text-2xl font-bold text-gray-900">{vital.height} <span className="text-sm font-normal text-gray-600">cm</span></p>
//                   </div>
//                 )}
//               </div>

//               {/* Notes */}
//               {vital.notes && (
//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-200">
//                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Notes</label>
//                     <p className="text-gray-800">{vital.notes}</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-96">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600 font-medium text-lg">Loading medical data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div>
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//             Medical Records
//           </h1>
//           <p className="text-gray-600 mt-2">View your test reports and vital signs history</p>
//         </div>
//       </motion.div>

//       {/* Tabs */}
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.1 }}
//         className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 p-2"
//       >
//         <div className="flex gap-2">
//           <button
//             className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
//               activeTab === 'test-reports'
//                 ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg transform scale-105'
//                 : 'text-gray-600 hover:bg-gray-100'
//             }`}
//             onClick={() => setActiveTab('test-reports')}
//           >
//             <FaClipboardList className="text-lg" />
//             Test Reports
//           </button>
//           <button
//             className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
//               activeTab === 'vital-signs'
//                 ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg transform scale-105'
//                 : 'text-gray-600 hover:bg-gray-100'
//             }`}
//             onClick={() => setActiveTab('vital-signs')}
//           >
//             <FaHeartbeat className="text-lg" />
//             Vital Signs
//           </button>
//         </div>
//       </motion.div>

//       {/* Error Message */}
//       {error && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-2xl shadow-sm flex items-center gap-3"
//         >
//           <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//           </svg>
//           <span className="font-medium">{error}</span>
//         </motion.div>
//       )}

//       {/* Content */}
//       <div>
//         {activeTab === 'test-reports' ? renderTestReports() : renderVitalSigns()}
//       </div>
//     </div>
//   );
// }

// export default MedicalRecords;















// src/pages/patient/MedicalRecords.jsx
import React, { useState, useEffect } from 'react';
import medicalService from '../../services/medicalService';

function MedicalRecords() {
  const [activeTab, setActiveTab] = useState('test-reports');
  const [testReports, setTestReports] = useState([]);
  const [vitalSigns, setVitalSigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMedicalData();
  }, [activeTab]);

  const fetchMedicalData = async () => {
    try {
      setLoading(true);
      
      if (activeTab === 'test-reports') {
        const response = await medicalService.getTestReports();
        setTestReports(response.test_reports || []);
      } else {
        const response = await medicalService.getVitalSigns();
        setVitalSigns(response.vital_signs || []);
      }
    } catch (error) {
      setError('Failed to fetch medical data');
      console.error('Error fetching medical data:', error);
    } finally {
      setLoading(false);
    }
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

  const renderTestReports = () => {
    if (testReports.length === 0) {
      return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
          <div className="text-center max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500">No test reports found</p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {testReports.map((report) => (
          <div
            key={report.id}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
          >
            {/* Report Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{report.test_name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{report.test_type}</p>
                </div>
              </div>
              <span
                className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full ${
                  report.status === 'completed'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}
              >
                {report.status.toUpperCase()}
              </span>
            </div>

            {/* Report Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Requested Date</label>
                  <span className="text-gray-800 font-medium">{formatDate(report.requested_date)}</span>
                </div>
              </div>

              {report.completed_date && (
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Completed Date</label>
                    <span className="text-gray-800 font-medium">{formatDate(report.completed_date)}</span>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Result</label>
                  <span
                    className={`font-semibold ${
                      report.result === 'Normal ranges' ? 'text-emerald-600' : 'text-red-600'
                    }`}
                  >
                    {report.result}
                  </span>
                </div>
              </div>

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
            </div>

            {/* Additional Information */}
            {(report.units || report.comments) && (
              <div className="space-y-3 pt-5 border-t border-gray-100">
                {report.units && (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Units</label>
                    <p className="text-gray-800">{report.units}</p>
                  </div>
                )}

                {report.comments && (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Comments</label>
                    <p className="text-gray-800">{report.comments}</p>
                  </div>
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
      <div className="space-y-6">
        {vitalSigns.map((vital) => (
          <div
            key={vital.id}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
          >
            {/* Vital Header */}
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

            {/* Vital Signs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <label className="text-xs font-semibold text-red-700 uppercase tracking-wide">Blood Pressure</label>
                </div>
                <p className="text-xl font-bold text-red-800">{vital.blood_pressure}</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-pink-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <label className="text-xs font-semibold text-pink-700 uppercase tracking-wide">Heart Rate</label>
                </div>
                <p className="text-xl font-bold text-pink-800">{vital.heart_rate} <span className="text-sm font-normal">bpm</span></p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <label className="text-xs font-semibold text-orange-700 uppercase tracking-wide">Temperature</label>
                </div>
                <p className="text-xl font-bold text-orange-800">{vital.temperature}<span className="text-sm font-normal">°F</span></p>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-4 border border-sky-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <label className="text-xs font-semibold text-sky-700 uppercase tracking-wide">Oxygen Saturation</label>
                </div>
                <p className="text-xl font-bold text-sky-800">{vital.oxygen_saturation}<span className="text-sm font-normal">%</span></p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <label className="text-xs font-semibold text-teal-700 uppercase tracking-wide">Respiratory Rate</label>
                </div>
                <p className="text-xl font-bold text-teal-800">{vital.respiratory_rate} <span className="text-sm font-normal">breaths/min</span></p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <label className="text-xs font-semibold text-purple-700 uppercase tracking-wide">Blood Sugar</label>
                </div>
                <p className="text-xl font-bold text-purple-800">{vital.blood_sugar} <span className="text-sm font-normal">mg/dL</span></p>
              </div>

              {vital.weight && (
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <label className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">Weight</label>
                  </div>
                  <p className="text-xl font-bold text-indigo-800">{vital.weight} <span className="text-sm font-normal">kg</span></p>
                </div>
              )}

              {vital.height && (
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                    <label className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Height</label>
                  </div>
                  <p className="text-xl font-bold text-emerald-800">{vital.height} <span className="text-sm font-normal">cm</span></p>
                </div>
              )}
            </div>

            {/* Notes */}
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
          <p className="text-gray-600 text-lg font-medium">Loading medical data...</p>
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
              Medical Records
            </h1>
            <p className="text-gray-500 mt-1 text-sm">View your test reports and vital signs history</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-2">
          <div className="flex gap-2">
            <button
              className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === 'test-reports'
                  ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('test-reports')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Test Reports
            </button>
            <button
              className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === 'vital-signs'
                  ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('vital-signs')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Vital Signs
            </button>
          </div>
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

        {/* Content */}
        <div>
          {activeTab === 'test-reports' ? renderTestReports() : renderVitalSigns()}
        </div>
      </div>
    </div>
  );
}

export default MedicalRecords;