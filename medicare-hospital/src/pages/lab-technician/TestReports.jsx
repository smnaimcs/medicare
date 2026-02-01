// // // src/pages/lab-technician/TestReports.jsx
// // import React, { useState, useEffect } from 'react';
// // import staffService from '../../services/staffService';

// // function LabTechnicianTestReports() {
// //   const [testReports, setTestReports] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [showUploadModal, setShowUploadModal] = useState(false);
// //   const [filters, setFilters] = useState({
// //     test_type: '',
// //     status: ''
// //   });

// //   useEffect(() => {
// //     fetchTestReports();
// //   }, [filters]);

// //   const fetchTestReports = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await staffService.getTestReports(filters);
// //       setTestReports(response.test_reports || []);
// //     } catch (error) {
// //       setError('Failed to fetch test reports');
// //       console.error('Error fetching test reports:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleUploadTestReport = async (testData) => {
// //     try {
// //       await staffService.uploadTestReport(testData);
// //       alert('Test report uploaded successfully');
// //       setShowUploadModal(false);
// //       fetchTestReports();
// //     } catch (error) {
// //       alert('Failed to upload test report');
// //       console.error('Error uploading test report:', error);
// //     }
// //   };

// //   const handleFilterChange = (e) => {
// //     setFilters({
// //       ...filters,
// //       [e.target.name]: e.target.value
// //     });
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

// //   const getStatusBadge = (status) => {
// //     return status === 'completed' ? 
// //       <span className="status-badge status-completed">Completed</span> :
// //       <span className="status-badge status-pending">Pending</span>;
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading test reports...</div>;
// //   }

// //   return (
// //     <div className="page-container">
// //       <div className="page-header">
// //         <h1>Test Reports Management</h1>
// //         <button 
// //           onClick={() => setShowUploadModal(true)}
// //           className="btn-primary"
// //         >
// //           Upload Test Report
// //         </button>
// //       </div>

// //       {/* Filters */}
// //       <div className="filters-section">
// //         <div className="filter-group">
// //           <label>Test Type:</label>
// //           <select 
// //             name="test_type" 
// //             value={filters.test_type} 
// //             onChange={handleFilterChange}
// //             className="filter-select"
// //           >
// //             <option value="">All Types</option>
// //             <option value="blood">Blood Test</option>
// //             <option value="urine">Urine Test</option>
// //             <option value="imaging">Imaging</option>
// //             <option value="biopsy">Biopsy</option>
// //             <option value="culture">Culture</option>
// //           </select>
// //         </div>
// //         <div className="filter-group">
// //           <label>Status:</label>
// //           <select 
// //             name="status" 
// //             value={filters.status} 
// //             onChange={handleFilterChange}
// //             className="filter-select"
// //           >
// //             <option value="">All Status</option>
// //             <option value="completed">Completed</option>
// //             <option value="pending">Pending</option>
// //           </select>
// //         </div>
// //       </div>

// //       {error && <div className="error-message">{error}</div>}

// //       {testReports.length === 0 ? (
// //         <div className="empty-state">
// //           <h3>No test reports found</h3>
// //           <p>No test reports match your current filters.</p>
// //         </div>
// //       ) : (
// //         <div className="test-reports-list">
// //           {testReports.map((report) => (
// //             <div key={report.id} className="test-report-card">
// //               <div className="test-report-header">
// //                 <div>
// //                   <h3>{report.test_name}</h3>
// //                   <p className="report-meta">
// //                     Patient ID: {report.patient_id} 
// //                     {report.appointment_id && ` • Appointment: #${report.appointment_id}`}
// //                   </p>
// //                 </div>
// //                 {getStatusBadge(report.status)}
// //               </div>
              
// //               <div className="test-report-details">
// //                 <div className="detail-row">
// //                   <div className="detail-item">
// //                     <label>Test Type:</label>
// //                     <span>{report.test_type}</span>
// //                   </div>
// //                   <div className="detail-item">
// //                     <label>Requested:</label>
// //                     <span>{formatDate(report.requested_date)}</span>
// //                   </div>
// //                 </div>
                
// //                 <div className="detail-row">
// //                   <div className="detail-item">
// //                     <label>Result:</label>
// //                     <span className="test-result">{report.result}</span>
// //                   </div>
// //                 </div>

// //                 {report.normal_range && (
// //                   <div className="detail-item">
// //                     <label>Normal Range:</label>
// //                     <span>{report.normal_range}</span>
// //                   </div>
// //                 )}

// //                 {report.units && (
// //                   <div className="detail-item">
// //                     <label>Units:</label>
// //                     <span>{report.units}</span>
// //                   </div>
// //                 )}

// //                 {report.comments && (
// //                   <div className="detail-item">
// //                     <label>Comments:</label>
// //                     <span>{report.comments}</span>
// //                   </div>
// //                 )}

// //                 <div className="detail-row">
// //                   <div className="detail-item">
// //                     <label>Completed:</label>
// //                     <span>{formatDate(report.completed_date)}</span>
// //                   </div>
// //                   <div className="detail-item">
// //                     <label>Performed By:</label>
// //                     <span>You</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="test-report-actions">
// //                 <button className="btn-secondary">
// //                   <i className="fas fa-print"></i> Print
// //                 </button>
// //                 <button className="btn-secondary">
// //                   <i className="fas fa-download"></i> Download
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* Upload Test Report Modal */}
// //       {showUploadModal && (
// //         <UploadTestReportModal
// //           onClose={() => setShowUploadModal(false)}
// //           onSave={handleUploadTestReport}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // // Upload Test Report Modal Component
// // function UploadTestReportModal({ onClose, onSave }) {
// //   const [formData, setFormData] = useState({
// //     appointment_id: '',
// //     patient_id: '',
// //     test_name: '',
// //     test_type: '',
// //     result: '',
// //     normal_range: '',
// //     units: '',
// //     comments: ''
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
    
// //     if (!formData.test_name || !formData.test_type || !formData.result) {
// //       alert('Please fill in all required fields');
// //       return;
// //     }

// //     setLoading(true);
// //     await onSave(formData);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal large-modal">
// //         <div className="modal-header">
// //           <h2>Upload Test Report</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>

// //         <form onSubmit={handleSubmit} className="test-report-form">
// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Patient ID *</label>
// //               <input
// //                 type="number"
// //                 name="patient_id"
// //                 value={formData.patient_id}
// //                 onChange={handleChange}
// //                 placeholder="Enter patient ID"
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label>Appointment ID (Optional)</label>
// //               <input
// //                 type="number"
// //                 name="appointment_id"
// //                 value={formData.appointment_id}
// //                 onChange={handleChange}
// //                 placeholder="Enter appointment ID"
// //               />
// //             </div>
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Test Name *</label>
// //               <input
// //                 type="text"
// //                 name="test_name"
// //                 value={formData.test_name}
// //                 onChange={handleChange}
// //                 placeholder="e.g., Complete Blood Count"
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label>Test Type *</label>
// //               <select
// //                 name="test_type"
// //                 value={formData.test_type}
// //                 onChange={handleChange}
// //                 required
// //               >
// //                 <option value="">Select Test Type</option>
// //                 <option value="blood">Blood Test</option>
// //                 <option value="urine">Urine Test</option>
// //                 <option value="imaging">Imaging</option>
// //                 <option value="biopsy">Biopsy</option>
// //                 <option value="culture">Culture</option>
// //                 <option value="molecular">Molecular Test</option>
// //                 <option value="other">Other</option>
// //               </select>
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label>Test Result *</label>
// //             <textarea
// //               name="result"
// //               value={formData.result}
// //               onChange={handleChange}
// //               placeholder="Enter test results in detail..."
// //               rows="4"
// //               required
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Normal Range</label>
// //             <input
// //               type="text"
// //               name="normal_range"
// //               value={formData.normal_range}
// //               onChange={handleChange}
// //               placeholder="e.g., WBC: 4.0-11.0, RBC: 4.5-6.0"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Units</label>
// //             <input
// //               type="text"
// //               name="units"
// //               value={formData.units}
// //               onChange={handleChange}
// //               placeholder="e.g., 10^9/L, 10^12/L, g/dL"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Comments</label>
// //             <textarea
// //               name="comments"
// //               value={formData.comments}
// //               onChange={handleChange}
// //               placeholder="Additional comments or observations..."
// //               rows="3"
// //             />
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Uploading...' : 'Upload Report'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default LabTechnicianTestReports;









// // src/pages/lab-technician/TestReports.jsx
// import React, { useState, useEffect } from 'react';
// import staffService from '../../services/staffService';

// function LabTechnicianTestReports() {
//   const [testReports, setTestReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [filters, setFilters] = useState({
//     test_type: '',
//     status: ''
//   });

//   useEffect(() => {
//     fetchTestReports();
//   }, [filters]);

//   const fetchTestReports = async () => {
//     try {
//       setLoading(true);
//       const response = await staffService.getTestReports(filters);
//       setTestReports(response.test_reports || []);
//     } catch (error) {
//       setError('Failed to fetch test reports');
//       console.error('Error fetching test reports:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUploadTestReport = async (testData) => {
//     try {
//       await staffService.uploadTestReport(testData);
//       alert('Test report uploaded successfully');
//       setShowUploadModal(false);
//       fetchTestReports();
//     } catch (error) {
//       alert('Failed to upload test report');
//       console.error('Error uploading test report:', error);
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

//   const getStatusBadge = (status) => {
//     return status === 'completed' ? 
//       <span className="badge badge-success">Completed</span> :
//       <span className="badge badge-warning">Pending</span>;
//   };

//   if (loading) {
//     return <div className="flex items-center justify-center h-screen text-gray-500">Loading test reports...</div>;
//   }

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Test Reports Management</h1>
//         <button 
//           onClick={() => setShowUploadModal(true)}
//           className="btn btn-primary"
//         >
//           Upload Test Report
//         </button>
//       </div>

//       {/* Filters */}
//       <div className="flex gap-4 flex-wrap bg-base-200 p-4 rounded-lg">
//         <div className="form-control">
//           <label className="label"><span className="label-text">Test Type:</span></label>
//           <select 
//             name="test_type" 
//             value={filters.test_type} 
//             onChange={handleFilterChange}
//             className="select select-bordered w-full max-w-xs"
//           >
//             <option value="">All Types</option>
//             <option value="blood">Blood Test</option>
//             <option value="urine">Urine Test</option>
//             <option value="imaging">Imaging</option>
//             <option value="biopsy">Biopsy</option>
//             <option value="culture">Culture</option>
//           </select>
//         </div>
//         <div className="form-control">
//           <label className="label"><span className="label-text">Status:</span></label>
//           <select 
//             name="status" 
//             value={filters.status} 
//             onChange={handleFilterChange}
//             className="select select-bordered w-full max-w-xs"
//           >
//             <option value="">All Status</option>
//             <option value="completed">Completed</option>
//             <option value="pending">Pending</option>
//           </select>
//         </div>
//       </div>

//       {error && <div className="text-error font-semibold">{error}</div>}

//       {testReports.length === 0 ? (
//         <div className="text-center py-20 text-gray-500">
//           <h3 className="text-xl font-semibold">No test reports found</h3>
//           <p>No test reports match your current filters.</p>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {testReports.map((report) => (
//             <div key={report.id} className="card bg-base-100 shadow-md">
//               <div className="card-body space-y-4">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-lg font-semibold">{report.test_name}</h3>
//                     <p className="text-sm text-gray-500">
//                       Patient ID: {report.patient_id} 
//                       {report.appointment_id && ` • Appointment: #${report.appointment_id}`}
//                     </p>
//                   </div>
//                   {getStatusBadge(report.status)}
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <p><span className="font-semibold">Test Type:</span> {report.test_type}</p>
//                     <p><span className="font-semibold">Requested:</span> {formatDate(report.requested_date)}</p>
//                     <p><span className="font-semibold">Completed:</span> {formatDate(report.completed_date)}</p>
//                     <p><span className="font-semibold">Performed By:</span> You</p>
//                   </div>

//                   <div className="space-y-2">
//                     <p><span className="font-semibold">Result:</span> <span className="font-mono">{report.result}</span></p>
//                     {report.normal_range && <p><span className="font-semibold">Normal Range:</span> {report.normal_range}</p>}
//                     {report.units && <p><span className="font-semibold">Units:</span> {report.units}</p>}
//                     {report.comments && <p><span className="font-semibold">Comments:</span> {report.comments}</p>}
//                   </div>
//                 </div>

//                 <div className="flex gap-2 justify-end">
//                   <button className="btn btn-outline btn-secondary">
//                     <i className="fas fa-print"></i> Print
//                   </button>
//                   <button className="btn btn-outline btn-secondary">
//                     <i className="fas fa-download"></i> Download
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Upload Test Report Modal */}
//       {showUploadModal && (
//         <UploadTestReportModal
//           onClose={() => setShowUploadModal(false)}
//           onSave={handleUploadTestReport}
//         />
//       )}
//     </div>
//   );
// }

// // Upload Test Report Modal Component
// function UploadTestReportModal({ onClose, onSave }) {
//   const [formData, setFormData] = useState({
//     appointment_id: '',
//     patient_id: '',
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
    
//     if (!formData.test_name || !formData.test_type || !formData.result) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     setLoading(true);
//     await onSave(formData);
//     setLoading(false);
//   };

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box max-w-4xl">
//         <h3 className="font-bold text-lg">Upload Test Report</h3>
//         <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="form-control">
//               <label className="label"><span className="label-text">Patient ID *</span></label>
//               <input
//                 type="number"
//                 name="patient_id"
//                 value={formData.patient_id}
//                 onChange={handleChange}
//                 placeholder="Enter patient ID"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label"><span className="label-text">Appointment ID (Optional)</span></label>
//               <input
//                 type="number"
//                 name="appointment_id"
//                 value={formData.appointment_id}
//                 onChange={handleChange}
//                 placeholder="Enter appointment ID"
//                 className="input input-bordered w-full"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="form-control">
//               <label className="label"><span className="label-text">Test Name *</span></label>
//               <input
//                 type="text"
//                 name="test_name"
//                 value={formData.test_name}
//                 onChange={handleChange}
//                 placeholder="e.g., Complete Blood Count"
//                 className="input input-bordered w-full"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label"><span className="label-text">Test Type *</span></label>
//               <select
//                 name="test_type"
//                 value={formData.test_type}
//                 onChange={handleChange}
//                 className="select select-bordered w-full"
//                 required
//               >
//                 <option value="">Select Test Type</option>
//                 <option value="blood">Blood Test</option>
//                 <option value="urine">Urine Test</option>
//                 <option value="imaging">Imaging</option>
//                 <option value="biopsy">Biopsy</option>
//                 <option value="culture">Culture</option>
//                 <option value="molecular">Molecular Test</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>

//           <div className="form-control">
//             <label className="label"><span className="label-text">Test Result *</span></label>
//             <textarea
//               name="result"
//               value={formData.result}
//               onChange={handleChange}
//               placeholder="Enter test results in detail..."
//               className="textarea textarea-bordered w-full"
//               rows="4"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="form-control">
//               <label className="label"><span className="label-text">Normal Range</span></label>
//               <input
//                 type="text"
//                 name="normal_range"
//                 value={formData.normal_range}
//                 onChange={handleChange}
//                 placeholder="e.g., WBC: 4.0-11.0, RBC: 4.5-6.0"
//                 className="input input-bordered w-full"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label"><span className="label-text">Units</span></label>
//               <input
//                 type="text"
//                 name="units"
//                 value={formData.units}
//                 onChange={handleChange}
//                 placeholder="e.g., 10^9/L, 10^12/L, g/dL"
//                 className="input input-bordered w-full"
//               />
//             </div>
//           </div>

//           <div className="form-control">
//             <label className="label"><span className="label-text">Comments</span></label>
//             <textarea
//               name="comments"
//               value={formData.comments}
//               onChange={handleChange}
//               placeholder="Additional comments or observations..."
//               className="textarea textarea-bordered w-full"
//               rows="3"
//             />
//           </div>

//           <div className="flex justify-end gap-2 mt-4">
//             <button type="button" onClick={onClose} className="btn btn-secondary">Cancel</button>
//             <button type="submit" disabled={loading} className="btn btn-primary">
//               {loading ? 'Uploading...' : 'Upload Report'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LabTechnicianTestReports;














// src/pages/lab-technician/TestReports.jsx
import React, { useState, useEffect } from 'react';
import staffService from '../../services/staffService';

function LabTechnicianTestReports() {
  const [testReports, setTestReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [filters, setFilters] = useState({
    test_type: '',
    status: ''
  });

  useEffect(() => {
    fetchTestReports();
  }, [filters]);

  const fetchTestReports = async () => {
    try {
      setLoading(true);
      const response = await staffService.getTestReports(filters);
      setTestReports(response.test_reports || []);
    } catch (error) {
      setError('Failed to fetch test reports');
      console.error('Error fetching test reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadTestReport = async (testData) => {
    try {
      await staffService.uploadTestReport(testData);
      alert('Test report uploaded successfully');
      setShowUploadModal(false);
      fetchTestReports();
    } catch (error) {
      alert('Failed to upload test report');
      console.error('Error uploading test report:', error);
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

  const getStatusBadge = (status) => {
    return status === 'completed' ? 
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-br from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
        Completed
      </span> :
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-br from-amber-50 to-yellow-50 text-amber-700 border border-amber-200">
        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
        Pending
      </span>;
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium animate-pulse">Loading test reports...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-6 relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes cardSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-cardSlideUp {
          animation: cardSlideUp 0.5s ease-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 animate-slideDown">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent tracking-tight">
            Test Reports Management
          </h1>
          <button 
            onClick={() => setShowUploadModal(true)}
            className="group relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Upload Test Report
            </span>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md border border-gray-200/50 p-6 mb-6 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Test Type:</label>
              <select 
                name="test_type" 
                value={filters.test_type} 
                onChange={handleFilterChange}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none font-medium text-gray-700"
              >
                <option value="">All Types</option>
                <option value="blood">Blood Test</option>
                <option value="urine">Urine Test</option>
                <option value="imaging">Imaging</option>
                <option value="biopsy">Biopsy</option>
                <option value="culture">Culture</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Status:</label>
              <select 
                name="status" 
                value={filters.status} 
                onChange={handleFilterChange}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none font-medium text-gray-700"
              >
                <option value="">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-500 rounded-xl p-4 mb-6 animate-fadeIn">
            <p className="text-red-800 font-semibold">{error}</p>
          </div>
        )}

        {testReports.length === 0 ? (
          <div className="text-center py-20 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No test reports found</h3>
            <p className="text-gray-600">No test reports match your current filters.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {testReports.map((report, index) => (
              <div 
                key={report.id} 
                className="bg-white rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-cardSlideUp"
                style={{ 
                  animationDelay: `${0.3 + index * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                {/* Card top accent */}
                <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{report.test_name}</h3>
                      <p className="text-sm text-gray-500 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded-lg font-medium">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Patient ID: {report.patient_id}
                        </span>
                        {report.appointment_id && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded-lg font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Appointment: #{report.appointment_id}
                          </span>
                        )}
                      </p>
                    </div>
                    {getStatusBadge(report.status)}
                  </div>
                  
                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-3 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 font-medium">Test Type</p>
                          <p className="text-base font-semibold text-gray-900 capitalize">{report.test_type}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 font-medium">Requested</p>
                          <p className="text-base font-semibold text-gray-900">{formatDate(report.requested_date)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 font-medium">Completed</p>
                          <p className="text-base font-semibold text-gray-900">{formatDate(report.completed_date)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 font-medium">Performed By</p>
                          <p className="text-base font-semibold text-gray-900">You</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-xl p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 font-medium">Result</p>
                          <p className="text-base font-mono font-bold text-gray-900 bg-white px-3 py-1.5 rounded-lg border border-gray-200 mt-1">{report.result}</p>
                        </div>
                      </div>
                      
                      {report.normal_range && (
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 font-medium">Normal Range</p>
                            <p className="text-base font-semibold text-gray-900">{report.normal_range}</p>
                          </div>
                        </div>
                      )}
                      
                      {report.units && (
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 font-medium">Units</p>
                            <p className="text-base font-semibold text-gray-900">{report.units}</p>
                          </div>
                        </div>
                      )}
                      
                      {report.comments && (
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 font-medium">Comments</p>
                            <p className="text-base font-semibold text-gray-900">{report.comments}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 justify-end pt-4 border-t border-gray-200">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:-translate-y-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      Print
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:-translate-y-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload Test Report Modal */}
        {showUploadModal && (
          <UploadTestReportModal
            onClose={() => setShowUploadModal(false)}
            onSave={handleUploadTestReport}
          />
        )}
      </div>
    </div>
  );
}

// Upload Test Report Modal Component
function UploadTestReportModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    appointment_id: '',
    patient_id: '',
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
    
    if (!formData.test_name || !formData.test_type || !formData.result) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    await onSave(formData);
    setLoading(false);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-modalSlideUp {
          animation: modalSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-modalSlideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-3xl z-10">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Upload Test Report
          </h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Patient ID <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="patient_id"
                value={formData.patient_id}
                onChange={handleChange}
                placeholder="Enter patient ID"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none font-medium"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Appointment ID <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="number"
                name="appointment_id"
                value={formData.appointment_id}
                onChange={handleChange}
                placeholder="Enter appointment ID"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Test Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="test_name"
                value={formData.test_name}
                onChange={handleChange}
                placeholder="e.g., Complete Blood Count"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none font-medium"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Test Type <span className="text-red-500">*</span>
              </label>
              <select
                name="test_type"
                value={formData.test_type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none font-medium"
                required
              >
                <option value="">Select Test Type</option>
                <option value="blood">Blood Test</option>
                <option value="urine">Urine Test</option>
                <option value="imaging">Imaging</option>
                <option value="biopsy">Biopsy</option>
                <option value="culture">Culture</option>
                <option value="molecular">Molecular Test</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Test Result <span className="text-red-500">*</span>
            </label>
            <textarea
              name="result"
              value={formData.result}
              onChange={handleChange}
              placeholder="Enter test results in detail..."
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none font-medium resize-none"
              rows="4"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Normal Range</label>
              <input
                type="text"
                name="normal_range"
                value={formData.normal_range}
                onChange={handleChange}
                placeholder="e.g., WBC: 4.0-11.0, RBC: 4.5-6.0"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none font-medium"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Units</label>
              <input
                type="text"
                name="units"
                value={formData.units}
                onChange={handleChange}
                placeholder="e.g., 10^9/L, 10^12/L, g/dL"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Additional comments or observations..."
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none font-medium resize-none"
              rows="3"
            />
          </div>

          {/* Modal Footer */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end pt-6 border-t border-gray-200">
            <button 
              type="button" 
              onClick={onClose}
              className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              {loading ? 'Uploading...' : 'Upload Report'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LabTechnicianTestReports;