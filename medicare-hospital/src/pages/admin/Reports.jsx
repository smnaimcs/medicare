// // // src/pages/admin/Reports.jsx
// // import React, { useState, useEffect } from 'react';
// // import adminService from '../../services/adminService';

// // function AdminReports() {
// //   const [financialReports, setFinancialReports] = useState({});
// //   const [testReports, setTestReports] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeTab, setActiveTab] = useState('financial');
// //   const [filters, setFilters] = useState({
// //     start_date: '',
// //     end_date: ''
// //   });

// //   useEffect(() => {
// //     if (activeTab === 'financial') {
// //       fetchFinancialReports();
// //     } else {
// //       fetchTestReports();
// //     }
// //   }, [activeTab, filters]);

// //   const fetchFinancialReports = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getFinancialReports(filters);
// //       setFinancialReports(response);
// //     } catch (error) {
// //       setError('Failed to fetch financial reports');
// //       console.error('Error fetching financial reports:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchTestReports = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getTestReports();
// //       setTestReports(response.test_reports || []);
// //     } catch (error) {
// //       setError('Failed to fetch test reports');
// //       console.error('Error fetching test reports:', error);
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

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat('en-US', {
// //       style: 'currency',
// //       currency: 'USD'
// //     }).format(amount);
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric'
// //     });
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading reports...</div>;
// //   }

// //   return (
// //     <div className="page-container">
// //       <div className="page-header">
// //         <h1>Reports & Analytics</h1>
// //       </div>

// //       {/* Tabs */}
// //       <div className="tabs">
// //         <button 
// //           className={`tab ${activeTab === 'financial' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('financial')}
// //         >
// //           Financial Reports
// //         </button>
// //         <button 
// //           className={`tab ${activeTab === 'test' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('test')}
// //         >
// //           Test Reports
// //         </button>
// //       </div>

// //       {error && <div className="error-message">{error}</div>}

// //       <div className="tab-content">
// //         {activeTab === 'financial' ? (
// //           <div className="financial-reports">
// //             {/* Date Filters */}
// //             <div className="filters-section">
// //               <div className="filter-group">
// //                 <label>Start Date:</label>
// //                 <input
// //                   type="date"
// //                   name="start_date"
// //                   value={filters.start_date}
// //                   onChange={handleFilterChange}
// //                   className="filter-select"
// //                 />
// //               </div>
// //               <div className="filter-group">
// //                 <label>End Date:</label>
// //                 <input
// //                   type="date"
// //                   name="end_date"
// //                   value={filters.end_date}
// //                   onChange={handleFilterChange}
// //                   className="filter-select"
// //                 />
// //               </div>
// //             </div>

// //             {/* Financial Overview */}
// //             <div className="financial-overview">
// //               <h2>Financial Overview</h2>
// //               <div className="financial-cards">
// //                 <div className="financial-card revenue">
// //                   <div className="financial-icon">
// //                     <i className="fas fa-money-bill-wave"></i>
// //                   </div>
// //                   <div className="financial-content">
// //                     <h3>{formatCurrency(financialReports.total_revenue || 0)}</h3>
// //                     <p>Total Revenue</p>
// //                   </div>
// //                 </div>

// //                 <div className="financial-card expenses">
// //                   <div className="financial-icon">
// //                     <i className="fas fa-receipt"></i>
// //                   </div>
// //                   <div className="financial-content">
// //                     <h3>{formatCurrency(financialReports.total_expenses || 0)}</h3>
// //                     <p>Total Expenses</p>
// //                   </div>
// //                 </div>

// //                 <div className="financial-card profit">
// //                   <div className="financial-icon">
// //                     <i className="fas fa-chart-line"></i>
// //                   </div>
// //                   <div className="financial-content">
// //                     <h3>{formatCurrency(financialReports.net_profit || 0)}</h3>
// //                     <p>Net Profit</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Department Expenses */}
// //             {financialReports.department_expenses && financialReports.department_expenses.length > 0 && (
// //               <div className="department-expenses">
// //                 <h3>Expenses by Department</h3>
// //                 <div className="expenses-table">
// //                   <table>
// //                     <thead>
// //                       <tr>
// //                         <th>Department</th>
// //                         <th>Total Expenses</th>
// //                         <th>Percentage</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {financialReports.department_expenses.map((dept, index) => (
// //                         <tr key={index}>
// //                           <td>{dept.department}</td>
// //                           <td>{formatCurrency(dept.total)}</td>
// //                           <td>
// //                             {((dept.total / (financialReports.total_expenses || 1)) * 100).toFixed(1)}%
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Report Period */}
// //             {financialReports.report_period && (
// //               <div className="report-period">
// //                 <h3>Report Period</h3>
// //                 <p>
// //                   {financialReports.report_period.start_date 
// //                     ? formatDate(financialReports.report_period.start_date) 
// //                     : 'All time'} 
// //                   {' to '}
// //                   {financialReports.report_period.end_date 
// //                     ? formatDate(financialReports.report_period.end_date) 
// //                     : 'Present'}
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="test-reports">
// //             <h2>Test Reports</h2>
// //             {testReports.length === 0 ? (
// //               <div className="empty-state">
// //                 <h3>No test reports found</h3>
// //                 <p>No test reports are available.</p>
// //               </div>
// //             ) : (
// //               <div className="test-reports-list">
// //                 {testReports.map((report) => (
// //                   <div key={report.id} className="test-report-card">
// //                     <div className="test-report-header">
// //                       <h3>{report.test_name}</h3>
// //                       <span className={`status-badge ${report.status === 'completed' ? 'status-completed' : 'status-pending'}`}>
// //                         {report.status}
// //                       </span>
// //                     </div>
                    
// //                     <div className="test-report-details">
// //                       <div className="detail-row">
// //                         <div className="detail-item">
// //                           <label>Patient ID:</label>
// //                           <span>{report.patient_id}</span>
// //                         </div>
// //                         <div className="detail-item">
// //                           <label>Type:</label>
// //                           <span>{report.test_type}</span>
// //                         </div>
// //                       </div>
                      
// //                       <div className="detail-row">
// //                         <div className="detail-item">
// //                           <label>Result:</label>
// //                           <span className={report.result === 'Normal' ? 'normal-result' : 'abnormal-result'}>
// //                             {report.result}
// //                           </span>
// //                         </div>
// //                         <div className="detail-item">
// //                           <label>Completed:</label>
// //                           <span>{formatDate(report.completed_date)}</span>
// //                         </div>
// //                       </div>

// //                       {report.comments && (
// //                         <div className="detail-item">
// //                           <label>Comments:</label>
// //                           <span>{report.comments}</span>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminReports;
















// // // src/pages/admin/Reports.jsx
// // import React, { useState, useEffect } from 'react';
// // import adminService from '../../services/adminService';

// // function AdminReports() {
// //   const [financialReports, setFinancialReports] = useState({});
// //   const [testReports, setTestReports] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeTab, setActiveTab] = useState('financial');
// //   const [filters, setFilters] = useState({
// //     start_date: '',
// //     end_date: ''
// //   });

// //   useEffect(() => {
// //     if (activeTab === 'financial') {
// //       fetchFinancialReports();
// //     } else {
// //       fetchTestReports();
// //     }
// //   }, [activeTab, filters]);

// //   const fetchFinancialReports = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getFinancialReports(filters);
// //       setFinancialReports(response);
// //     } catch (error) {
// //       setError('Failed to fetch financial reports');
// //       console.error('Error fetching financial reports:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchTestReports = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getTestReports();
// //       setTestReports(response.test_reports || []);
// //     } catch (error) {
// //       setError('Failed to fetch test reports');
// //       console.error('Error fetching test reports:', error);
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

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat('en-US', {
// //       style: 'currency',
// //       currency: 'USD'
// //     }).format(amount);
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric'
// //     });
// //   };

// //   if (loading) {
// //     return <div className="flex items-center justify-center h-screen text-gray-500">Loading reports...</div>;
// //   }

// //   return (
// //     <div className="p-6 space-y-6">
// //       <div className="mb-4">
// //         <h1 className="text-3xl font-bold">Reports & Analytics</h1>
// //       </div>

// //       {/* Tabs */}
// //       <div className="tabs mb-6">
// //         <button 
// //           className={`tab tab-bordered ${activeTab === 'financial' ? 'tab-active' : ''}`}
// //           onClick={() => setActiveTab('financial')}
// //         >
// //           Financial Reports
// //         </button>
// //         <button 
// //           className={`tab tab-bordered ${activeTab === 'test' ? 'tab-active' : ''}`}
// //           onClick={() => setActiveTab('test')}
// //         >
// //           Test Reports
// //         </button>
// //       </div>

// //       {error && <div className="alert alert-error shadow-lg mb-4">{error}</div>}

// //       <div className="tab-content">
// //         {activeTab === 'financial' ? (
// //           <div className="space-y-6">

// //             {/* Date Filters */}
// //             <div className="flex flex-wrap gap-4 mb-6">
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">Start Date</span>
// //                 </label>
// //                 <input
// //                   type="date"
// //                   name="start_date"
// //                   value={filters.start_date}
// //                   onChange={handleFilterChange}
// //                   className="input input-bordered"
// //                 />
// //               </div>
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">End Date</span>
// //                 </label>
// //                 <input
// //                   type="date"
// //                   name="end_date"
// //                   value={filters.end_date}
// //                   onChange={handleFilterChange}
// //                   className="input input-bordered"
// //                 />
// //               </div>
// //             </div>

// //             {/* Financial Overview */}
// //             <div className="space-y-4">
// //               <h2 className="text-2xl font-semibold">Financial Overview</h2>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                 <div className="card bg-base-200 shadow">
// //                   <div className="card-body flex items-center gap-4">
// //                     <div className="text-3xl text-green-500">
// //                       <i className="fas fa-money-bill-wave"></i>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.total_revenue || 0)}</h3>
// //                       <p>Total Revenue</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="card bg-base-200 shadow">
// //                   <div className="card-body flex items-center gap-4">
// //                     <div className="text-3xl text-red-500">
// //                       <i className="fas fa-receipt"></i>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.total_expenses || 0)}</h3>
// //                       <p>Total Expenses</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="card bg-base-200 shadow">
// //                   <div className="card-body flex items-center gap-4">
// //                     <div className="text-3xl text-blue-500">
// //                       <i className="fas fa-chart-line"></i>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.net_profit || 0)}</h3>
// //                       <p>Net Profit</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Department Expenses */}
// //             {financialReports.department_expenses && financialReports.department_expenses.length > 0 && (
// //               <div className="space-y-2">
// //                 <h3 className="text-xl font-semibold">Expenses by Department</h3>
// //                 <div className="overflow-x-auto">
// //                   <table className="table table-zebra w-full">
// //                     <thead>
// //                       <tr>
// //                         <th>Department</th>
// //                         <th>Total Expenses</th>
// //                         <th>Percentage</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {financialReports.department_expenses.map((dept, index) => (
// //                         <tr key={index}>
// //                           <td>{dept.department}</td>
// //                           <td>{formatCurrency(dept.total)}</td>
// //                           <td>{((dept.total / (financialReports.total_expenses || 1)) * 100).toFixed(1)}%</td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Report Period */}
// //             {financialReports.report_period && (
// //               <div>
// //                 <h3 className="text-xl font-semibold">Report Period</h3>
// //                 <p>
// //                   {financialReports.report_period.start_date 
// //                     ? formatDate(financialReports.report_period.start_date) 
// //                     : 'All time'} 
// //                   {' to '}
// //                   {financialReports.report_period.end_date 
// //                     ? formatDate(financialReports.report_period.end_date) 
// //                     : 'Present'}
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="space-y-6">
// //             <h2 className="text-2xl font-semibold">Test Reports</h2>
// //             {testReports.length === 0 ? (
// //               <div className="text-center py-10">
// //                 <h3 className="text-xl font-semibold">No test reports found</h3>
// //                 <p>No test reports are available.</p>
// //               </div>
// //             ) : (
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {testReports.map((report) => (
// //                   <div key={report.id} className="card bg-base-200 shadow">
// //                     <div className="card-body space-y-2">
// //                       <div className="flex justify-between items-center">
// //                         <h3 className="text-lg font-bold">{report.test_name}</h3>
// //                         <span className={`badge ${report.status === 'completed' ? 'badge-success' : 'badge-warning'}`}>
// //                           {report.status}
// //                         </span>
// //                       </div>

// //                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
// //                         <div>
// //                           <label className="font-semibold">Patient ID:</label>
// //                           <span className="ml-1">{report.patient_id}</span>
// //                         </div>
// //                         <div>
// //                           <label className="font-semibold">Type:</label>
// //                           <span className="ml-1">{report.test_type}</span>
// //                         </div>
// //                         <div>
// //                           <label className="font-semibold">Result:</label>
// //                           <span className={`ml-1 ${report.result === 'Normal' ? 'text-green-600' : 'text-red-600'}`}>
// //                             {report.result}
// //                           </span>
// //                         </div>
// //                         <div>
// //                           <label className="font-semibold">Completed:</label>
// //                           <span className="ml-1">{formatDate(report.completed_date)}</span>
// //                         </div>
// //                       </div>

// //                       {report.comments && (
// //                         <div>
// //                           <label className="font-semibold">Comments:</label>
// //                           <span className="ml-1">{report.comments}</span>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminReports;












// // import React, { useState, useEffect, useCallback } from 'react';
// // import adminService from '../../services/adminService';

// // function AdminReports() {
// //   const [financialReports, setFinancialReports] = useState({});
// //   const [testReports, setTestReports] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeTab, setActiveTab] = useState('financial');
// //   const [filters, setFilters] = useState({
// //     start_date: '',
// //     end_date: ''
// //   });

// //   const fetchFinancialReports = useCallback(async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getFinancialReports(filters);
// //       setFinancialReports(response);
// //     } catch (err) {
// //       setError('Failed to fetch financial reports');
// //       console.error('Error fetching financial reports:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [filters]);

// //   const fetchTestReports = useCallback(async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getTestReports();
// //       setTestReports(response.test_reports || []);
// //     } catch (err) {
// //       setError('Failed to fetch test reports');
// //       console.error('Error fetching test reports:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (activeTab === 'financial') {
// //       fetchFinancialReports();
// //     } else {
// //       fetchTestReports();
// //     }
// //   }, [activeTab, fetchFinancialReports, fetchTestReports]);

// //   const handleFilterChange = (e) => {
// //     setFilters({
// //       ...filters,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat('en-US', {
// //       style: 'currency',
// //       currency: 'USD'
// //     }).format(amount);
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric'
// //     });
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex items-center justify-center py-10 text-gray-500">
// //         Loading reports...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="p-6 space-y-6">
// //       {/* Main Title */}
// //       <div className="mb-4">
// //         <h1 className="text-3xl font-bold">Reports & Analytics</h1>
// //       </div>

// //       {/* Tabs */}
// //       <div className="w-full flex mb-6 space-x-2">
// //         <button 
// //           className={`tab tab-bordered ${activeTab === 'financial' ? 'tab-active' : ''}`}
// //           onClick={() => setActiveTab('financial')}
// //         >
// //           Financial Reports
// //         </button>
// //         <button 
// //           className={`tab tab-bordered ${activeTab === 'test' ? 'tab-active' : ''}`}
// //           onClick={() => setActiveTab('test')}
// //         >
// //           Test Reports
// //         </button>
// //       </div>

// //       {/* Error Message */}
// //       {error && <div className="alert alert-error shadow-lg mb-4">{error}</div>}

// //       {/* Content */}
// //       <div className="tab-content">
// //         {activeTab === 'financial' ? (
// //           <div className="space-y-6">

// //             {/* Date Filters */}
// //             <div className="flex flex-wrap gap-4 mb-6">
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">Start Date</span>
// //                 </label>
// //                 <input
// //                   type="date"
// //                   name="start_date"
// //                   value={filters.start_date}
// //                   onChange={handleFilterChange}
// //                   className="input input-bordered"
// //                 />
// //               </div>
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">End Date</span>
// //                 </label>
// //                 <input
// //                   type="date"
// //                   name="end_date"
// //                   value={filters.end_date}
// //                   onChange={handleFilterChange}
// //                   className="input input-bordered"
// //                 />
// //               </div>
// //             </div>

// //             {/* Financial Overview */}
// //             <div className="space-y-4">
// //               <h2 className="text-2xl font-semibold">Financial Overview</h2>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                 <div className="card bg-base-200 shadow">
// //                   <div className="card-body flex items-center gap-4">
// //                     <div className="text-3xl text-green-500">
// //                       <i className="fas fa-money-bill-wave"></i>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.total_revenue || 0)}</h3>
// //                       <p>Total Revenue</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="card bg-base-200 shadow">
// //                   <div className="card-body flex items-center gap-4">
// //                     <div className="text-3xl text-red-500">
// //                       <i className="fas fa-receipt"></i>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.total_expenses || 0)}</h3>
// //                       <p>Total Expenses</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="card bg-base-200 shadow">
// //                   <div className="card-body flex items-center gap-4">
// //                     <div className="text-3xl text-blue-500">
// //                       <i className="fas fa-chart-line"></i>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.net_profit || 0)}</h3>
// //                       <p>Net Profit</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Department Expenses */}
// //             {financialReports.department_expenses?.length > 0 && (
// //               <div className="space-y-2">
// //                 <h3 className="text-xl font-semibold">Expenses by Department</h3>
// //                 <div className="overflow-x-auto">
// //                   <table className="table table-zebra w-full">
// //                     <thead>
// //                       <tr>
// //                         <th>Department</th>
// //                         <th>Total Expenses</th>
// //                         <th>Percentage</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {financialReports.department_expenses.map((dept, index) => (
// //                         <tr key={index}>
// //                           <td>{dept.department}</td>
// //                           <td>{formatCurrency(dept.total)}</td>
// //                           <td>{((dept.total / (financialReports.total_expenses || 1)) * 100).toFixed(1)}%</td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Report Period */}
// //             {financialReports.report_period && (
// //               <div>
// //                 <h3 className="text-xl font-semibold">Report Period</h3>
// //                 <p>
// //                   {financialReports.report_period.start_date 
// //                     ? formatDate(financialReports.report_period.start_date) 
// //                     : 'All time'} 
// //                   {' to '}
// //                   {financialReports.report_period.end_date 
// //                     ? formatDate(financialReports.report_period.end_date) 
// //                     : 'Present'}
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="space-y-6">
// //             <h2 className="text-2xl font-semibold">Test Reports</h2>
// //             {testReports.length === 0 ? (
// //               <div className="text-center py-10">
// //                 <h3 className="text-xl font-semibold">No test reports found</h3>
// //                 <p>No test reports are available.</p>
// //               </div>
// //             ) : (
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {testReports.map((report) => (
// //                   <div key={report.id} className="card bg-base-200 shadow">
// //                     <div className="card-body space-y-2">
// //                       <div className="flex justify-between items-center">
// //                         <h3 className="text-lg font-bold">{report.test_name}</h3>
// //                         <span className={`badge ${report.status === 'completed' ? 'badge-success' : 'badge-warning'}`}>
// //                           {report.status}
// //                         </span>
// //                       </div>

// //                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
// //                         <div>
// //                           <label className="font-semibold">Patient ID:</label>
// //                           <span className="ml-1">{report.patient_id}</span>
// //                         </div>
// //                         <div>
// //                           <label className="font-semibold">Type:</label>
// //                           <span className="ml-1">{report.test_type}</span>
// //                         </div>
// //                         <div>
// //                           <label className="font-semibold">Result:</label>
// //                           <span className={`ml-1 ${report.result === 'Normal' ? 'text-green-600' : 'text-red-600'}`}>
// //                             {report.result}
// //                           </span>
// //                         </div>
// //                         <div>
// //                           <label className="font-semibold">Completed:</label>
// //                           <span className="ml-1">{formatDate(report.completed_date)}</span>
// //                         </div>
// //                       </div>

// //                       {report.comments && (
// //                         <div>
// //                           <label className="font-semibold">Comments:</label>
// //                           <span className="ml-1">{report.comments}</span>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminReports;







// // // src/pages/admin/Reports.jsx
// // import React, { useState, useEffect } from 'react';
// // import adminService from '../../services/adminService';

// // function AdminReports() {
// //   const [financialReports, setFinancialReports] = useState({});
// //   const [testReports, setTestReports] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeTab, setActiveTab] = useState('financial');
// //   const [filters, setFilters] = useState({
// //     start_date: '',
// //     end_date: ''
// //   });

// //   useEffect(() => {
// //     if (activeTab === 'financial') {
// //       fetchFinancialReports();
// //     } else {
// //       fetchTestReports();
// //     }
// //   }, [activeTab, filters]);

// //   const fetchFinancialReports = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getFinancialReports(filters);
// //       setFinancialReports(response);
// //     } catch (error) {
// //       setError('Failed to fetch financial reports');
// //       console.error('Error fetching financial reports:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchTestReports = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await adminService.getTestReports();
// //       setTestReports(response.test_reports || []);
// //     } catch (error) {
// //       setError('Failed to fetch test reports');
// //       console.error('Error fetching test reports:', error);
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

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat('en-US', {
// //       style: 'currency',
// //       currency: 'USD'
// //     }).format(amount);
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric'
// //     });
// //   };

// //   if (loading) {
// //     return <div className="flex items-center justify-center h-screen text-gray-500">Loading reports...</div>;
// //   }

// //   return (
// //     <div className="p-6 space-y-6">
// //       <div className="mb-4">
// //         <h1 className="text-3xl font-bold">Reports & Analytics</h1>
// //       </div>

// //       {/* Tabs */}
// //       <div className="tabs mb-6">
// //         <button 
// //           className={`tab bg-red-500 tab-bordered ${activeTab === 'financial' ? 'tab-active' : ''}`}
// //           onClick={() => setActiveTab('financial')}
// //         >
// //           Financial Reports
// //         </button>
// //         <button 
// //           className={`tab bg-red-500 tab-bordered ${activeTab === 'test' ? 'tab-active' : ''}`}
// //           onClick={() => setActiveTab('test')}
// //         >
// //           Test Reports
// //         </button>
// //       </div>

// //       {error && <div className="alert alert-error shadow-lg mb-4">{error}</div>}

// //       <div className="tab-content">
// //         {activeTab === 'financial' ? (
// //           <div className="space-y-6">

// //             {/* Date Filters */}
// //             <div className="flex flex-wrap gap-4 mb-6">
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="bg-red-500 label-text">Start Date</span>
// //                 </label>
// //                 <input
// //                   type="date"
// //                   name="start_date"
// //                   value={filters.start_date}
// //                   onChange={handleFilterChange}
// //                   className="input input-bordered"
// //                 />
// //               </div>
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">End Date</span>
// //                 </label>
// //                 <input
// //                   type="date"
// //                   name="end_date"
// //                   value={filters.end_date}
// //                   onChange={handleFilterChange}
// //                   className="input input-bordered"
// //                 />
// //               </div>
// //             </div>

// //             {/* Financial Overview */}
// //             <div className="space-y-4">
// //               <h2 className="text-2xl font-semibold">Financial Overview</h2>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                 <div className="card bg-base-200 shadow">
// //                   <div className="card-body flex items-center gap-4">
// //                     <div className="text-3xl text-green-500">
// //                       <i className="fas fa-money-bill-wave"></i>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.total_revenue || 0)}</h3>
// //                       <p>Total Revenue</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="card bg-base-200 shadow">
// //                   <div className="card-body flex items-center gap-4">
// //                     <div className="text-3xl text-red-500">
// //                       <i className="fas fa-receipt"></i>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.total_expenses || 0)}</h3>
// //                       <p>Total Expenses</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="card bg-base-200 shadow">
// //                   <div className="card-body flex items-center gap-4">
// //                     <div className="text-3xl text-blue-500">
// //                       <i className="fas fa-chart-line"></i>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.net_profit || 0)}</h3>
// //                       <p>Net Profit</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Department Expenses */}
// //             {financialReports.department_expenses && financialReports.department_expenses.length > 0 && (
// //               <div className="space-y-2">
// //                 <h3 className="text-xl font-semibold">Expenses by Department</h3>
// //                 <div className="overflow-x-auto">
// //                   <table className="table table-zebra w-full">
// //                     <thead>
// //                       <tr>
// //                         <th>Department</th>
// //                         <th>Total Expenses</th>
// //                         <th>Percentage</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {financialReports.department_expenses.map((dept, index) => (
// //                         <tr key={index}>
// //                           <td>{dept.department}</td>
// //                           <td>{formatCurrency(dept.total)}</td>
// //                           <td>{((dept.total / (financialReports.total_expenses || 1)) * 100).toFixed(1)}%</td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Report Period */}
// //             {financialReports.report_period && (
// //               <div>
// //                 <h3 className="text-xl font-semibold">Report Period</h3>
// //                 <p>
// //                   {financialReports.report_period.start_date 
// //                     ? formatDate(financialReports.report_period.start_date) 
// //                     : 'All time'} 
// //                   {' to '}
// //                   {financialReports.report_period.end_date 
// //                     ? formatDate(financialReports.report_period.end_date) 
// //                     : 'Present'}
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="space-y-6">
// //             <h2 className="text-2xl font-semibold">Test Reports</h2>
// //             {testReports.length === 0 ? (
// //               <div className="text-center py-10">
// //                 <h3 className="text-xl font-semibold">No test reports found</h3>
// //                 <p>No test reports are available.</p>
// //               </div>
// //             ) : (
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {testReports.map((report) => (
// //                   <div key={report.id} className="card bg-base-200 shadow">
// //                     <div className="card-body space-y-2">
// //                       <div className="flex justify-between items-center">
// //                         <h3 className="text-lg font-bold">{report.test_name}</h3>
// //                         <span className={`badge ${report.status === 'completed' ? 'badge-success' : 'badge-warning'}`}>
// //                           {report.status}
// //                         </span>
// //                       </div>

// //                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
// //                         <div>
// //                           <label className="font-semibold">Patient ID:</label>
// //                           <span className="ml-1">{report.patient_id}</span>
// //                         </div>
// //                         <div>
// //                           <label className="font-semibold">Type:</label>
// //                           <span className="ml-1">{report.test_type}</span>
// //                         </div>
// //                         <div>
// //                           <label className="font-semibold">Result:</label>
// //                           <span className={`ml-1 ${report.result === 'Normal' ? 'text-green-600' : 'text-red-600'}`}>
// //                             {report.result}
// //                           </span>
// //                         </div>
// //                         <div>
// //                           <label className="font-semibold">Completed:</label>
// //                           <span className="ml-1">{formatDate(report.completed_date)}</span>
// //                         </div>
// //                       </div>

// //                       {report.comments && (
// //                         <div>
// //                           <label className="font-semibold">Comments:</label>
// //                           <span className="ml-1">{report.comments}</span>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminReports;









// // src/pages/admin/Reports.jsx
// import React, { useState, useEffect } from 'react';
// import adminService from '../../services/adminService';

// function AdminReports() {
//   const [financialReports, setFinancialReports] = useState({});
//   const [testReports, setTestReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activeTab, setActiveTab] = useState('financial');
//   const [filters, setFilters] = useState({
//     start_date: '',
//     end_date: ''
//   });

//   // Debug logs to check data
//   console.log('financialReports:', financialReports);
//   console.log('testReports:', testReports);

//   useEffect(() => {
//     if (activeTab === 'financial') {
//       fetchFinancialReports();
//     } else {
//       fetchTestReports();
//     }
//   }, [activeTab, filters]);

//   const fetchFinancialReports = async () => {
//     try {
//       setLoading(true);
//       const response = await adminService.getFinancialReports(filters);
//       setFinancialReports(response);
//     } catch (error) {
//       setError('Failed to fetch financial reports');
//       console.error('Error fetching financial reports:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchTestReports = async () => {
//     try {
//       setLoading(true);
//       const response = await adminService.getTestReports();
//       setTestReports(response.test_reports || []);
//     } catch (error) {
//       setError('Failed to fetch test reports');
//       console.error('Error fetching test reports:', error);
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

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(amount);
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return <div className="flex items-center justify-center h-screen text-gray-500">Loading reports...</div>;
//   }

//   return (
//     <div className="p-6 space-y-6">
//       <div className="mb-4">
//         <h1 className="text-3xl font-bold">Reports & Analytics</h1>
//       </div>

//       {/* Tabs */}
//       <div className="tabs mb-6">
//         <button 
//           className={`tab tab-bordered ${activeTab === 'financial' ? 'tab-active' : ''}`}
//           onClick={() => setActiveTab('financial')}
//         >
//           Financial Reports
//         </button>
//         <button 
//           className={`tab tab-bordered ${activeTab === 'test' ? 'tab-active' : ''}`}
//           onClick={() => setActiveTab('test')}
//         >
//           Test Reports
//         </button>
//       </div>

//       {error && <div className="alert alert-error shadow-lg mb-4">{error}</div>}

//       {/* Tab Content */}
//       <div className="w-full">
//         {activeTab === 'financial' ? (
//           <div className="space-y-6">

//             {/* Date Filters */}
//             <div className="flex flex-wrap gap-4 mb-6">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Start Date</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="start_date"
//                   value={filters.start_date}
//                   onChange={handleFilterChange}
//                   className="input input-bordered"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">End Date</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="end_date"
//                   value={filters.end_date}
//                   onChange={handleFilterChange}
//                   className="input input-bordered"
//                 />
//               </div>
//             </div>

//             {/* Financial Overview */}
//             <div className="space-y-4">
//               <h2 className="text-2xl font-semibold">Financial Overview</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="card bg-base-200 shadow">
//                   <div className="card-body flex items-center gap-4">
//                     <div className="text-3xl text-green-500">
//                       <i className="fas fa-money-bill-wave"></i>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.total_revenue || 0)}</h3>
//                       <p>Total Revenue</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="card bg-base-200 shadow">
//                   <div className="card-body flex items-center gap-4">
//                     <div className="text-3xl text-red-500">
//                       <i className="fas fa-receipt"></i>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.total_expenses || 0)}</h3>
//                       <p>Total Expenses</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="card bg-base-200 shadow">
//                   <div className="card-body flex items-center gap-4">
//                     <div className="text-3xl text-blue-500">
//                       <i className="fas fa-chart-line"></i>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold">{formatCurrency(financialReports.net_profit || 0)}</h3>
//                       <p>Net Profit</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Department Expenses */}
//             {financialReports.department_expenses && financialReports.department_expenses.length > 0 && (
//               <div className="space-y-2">
//                 <h3 className="text-xl font-semibold">Expenses by Department</h3>
//                 <div className="overflow-x-auto">
//                   <table className="table table-zebra w-full">
//                     <thead>
//                       <tr>
//                         <th>Department</th>
//                         <th>Total Expenses</th>
//                         <th>Percentage</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {financialReports.department_expenses.map((dept, index) => (
//                         <tr key={index}>
//                           <td>{dept.department}</td>
//                           <td>{formatCurrency(dept.total)}</td>
//                           <td>{((dept.total / (financialReports.total_expenses || 1)) * 100).toFixed(1)}%</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             {/* Report Period */}
//             {financialReports.report_period && (
//               <div>
//                 <h3 className="text-xl font-semibold">Report Period</h3>
//                 <p>
//                   {financialReports.report_period.start_date 
//                     ? formatDate(financialReports.report_period.start_date) 
//                     : 'All time'} 
//                   {' to '}
//                   {financialReports.report_period.end_date 
//                     ? formatDate(financialReports.report_period.end_date) 
//                     : 'Present'}
//                 </p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-semibold">Test Reports</h2>
//             {testReports.length === 0 ? (
//               <div className="text-center py-10">
//                 <h3 className="text-xl font-semibold">No test reports found</h3>
//                 <p>No test reports are available.</p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {testReports.map((report) => (
//                   <div key={report.id} className="card bg-base-200 shadow">
//                     <div className="card-body space-y-2">
//                       <div className="flex justify-between items-center">
//                         <h3 className="text-lg font-bold">{report.test_name}</h3>
//                         <span className={`badge ${report.status === 'completed' ? 'badge-success' : 'badge-warning'}`}>
//                           {report.status}
//                         </span>
//                       </div>

//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                         <div>
//                           <label className="font-semibold">Patient ID:</label>
//                           <span className="ml-1">{report.patient_id}</span>
//                         </div>
//                         <div>
//                           <label className="font-semibold">Type:</label>
//                           <span className="ml-1">{report.test_type}</span>
//                         </div>
//                         <div>
//                           <label className="font-semibold">Result:</label>
//                           <span className={`ml-1 ${report.result === 'Normal' ? 'text-green-600' : 'text-red-600'}`}>
//                             {report.result}
//                           </span>
//                         </div>
//                         <div>
//                           <label className="font-semibold">Completed:</label>
//                           <span className="ml-1">{formatDate(report.completed_date)}</span>
//                         </div>
//                       </div>

//                       {report.comments && (
//                         <div>
//                           <label className="font-semibold">Comments:</label>
//                           <span className="ml-1">{report.comments}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminReports;













// src/pages/admin/Reports.jsx
import React, { useState, useEffect } from 'react';
import adminService from '../../services/adminService';

function AdminReports() {
  const [financialReports, setFinancialReports] = useState({});
  const [testReports, setTestReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('financial');
  const [filters, setFilters] = useState({
    start_date: '',
    end_date: ''
  });

  // Debug logs to check data
  console.log('financialReports:', financialReports);
  console.log('testReports:', testReports);

  useEffect(() => {
    if (activeTab === 'financial') {
      fetchFinancialReports();
    } else {
      fetchTestReports();
    }
  }, [activeTab, filters]);

  // Add keyframes for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
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
        from { opacity: 0; }
        to { opacity: 1; }
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
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }
      .animate-slideInRight {
        animation: slideInRight 0.5s ease-out forwards;
      }
      .animate-scaleIn {
        animation: scaleIn 0.4s ease-out forwards;
      }
      .animate-slideDown {
        animation: slideDown 0.4s ease-out forwards;
      }
      .animate-pulse {
        animation: pulse 2s ease-in-out infinite;
      }
      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-500 { animation-delay: 0.5s; }
      
      .stat-card-hover {
        transition: all 0.3s ease;
      }
      .stat-card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
      }
      
      .report-card-hover {
        transition: all 0.3s ease;
      }
      .report-card-hover:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const fetchFinancialReports = async () => {
    try {
      setLoading(true);
      const response = await adminService.getFinancialReports(filters);
      setFinancialReports(response);
    } catch (error) {
      setError('Failed to fetch financial reports');
      console.error('Error fetching financial reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTestReports = async () => {
    try {
      setLoading(true);
      const response = await adminService.getTestReports();
      setTestReports(response.test_reports || []);
    } catch (error) {
      setError('Failed to fetch test reports');
      console.error('Error fetching test reports:', error);
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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
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
          <p className="text-gray-600 font-medium">Loading reports...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="opacity-0 animate-fadeInUp">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Reports & Analytics
            </h1>
          </div>
          <p className="text-gray-500 ml-7">Comprehensive financial and test reports</p>
        </div>

        {/* Tabs Section */}
        <div className="opacity-0 animate-slideInRight delay-100 bg-white rounded-xl shadow-md border border-gray-200 p-2 flex gap-2">
          <button 
            className={`transition-all duration-300 flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 ${
              activeTab === 'financial' 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
                : 'text-gray-600 hover:bg-blue-50'
            }`}
            onClick={() => setActiveTab('financial')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Financial Reports
          </button>
          <button 
            className={`transition-all duration-300 flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 ${
              activeTab === 'test' 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
                : 'text-gray-600 hover:bg-blue-50'
            }`}
            onClick={() => setActiveTab('test')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Test Reports
          </button>
        </div>

        {error && (
          <div className="opacity-0 animate-slideInRight delay-200 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-red-800 font-medium">{error}</span>
            </div>
          </div>
        )}

        {/* Tab Content */}
        <div className="w-full">
          {activeTab === 'financial' ? (
            <div className="space-y-6">
              {/* Date Filters */}
              <div className="opacity-0 animate-fadeInUp delay-200 bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-800">Filter by Date Range</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="start_date"
                      value={filters.start_date}
                      onChange={handleFilterChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="end_date"
                      value={filters.end_date}
                      onChange={handleFilterChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Financial Overview */}
              <div className="space-y-4">
                <h2 className="opacity-0 animate-fadeInUp delay-300 text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Financial Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Total Revenue Card */}
                  <div className="opacity-0 animate-scaleIn delay-300 stat-card-hover bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">Total Revenue</p>
                          <h3 className="text-3xl font-bold text-green-900 mt-1">{formatCurrency(financialReports.total_revenue || 0)}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Total Expenses Card */}
                  <div className="opacity-0 animate-scaleIn delay-400 stat-card-hover bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-red-700 uppercase tracking-wide">Total Expenses</p>
                          <h3 className="text-3xl font-bold text-red-900 mt-1">{formatCurrency(financialReports.total_expenses || 0)}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Net Profit Card */}
                  <div className="opacity-0 animate-scaleIn delay-500 stat-card-hover bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Net Profit</p>
                          <h3 className="text-3xl font-bold text-blue-900 mt-1">{formatCurrency(financialReports.net_profit || 0)}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Expenses */}
              {financialReports.department_expenses && financialReports.department_expenses.length > 0 && (
                <div className="opacity-0 animate-fadeInUp delay-400 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Expenses by Department
                  </h3>
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Department</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Total Expenses</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Percentage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {financialReports.department_expenses.map((dept, index) => (
                            <tr 
                              key={index} 
                              className={`opacity-0 animate-slideDown ${
                                index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'
                              } transition-all duration-200 hover:bg-blue-50`}
                            >
                              <td className="px-6 py-4 font-semibold text-gray-800">{dept.department}</td>
                              <td className="px-6 py-4 text-gray-600">{formatCurrency(dept.total)}</td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                                      style={{ width: `${((dept.total / (financialReports.total_expenses || 1)) * 100).toFixed(1)}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-semibold text-gray-700 min-w-[50px]">
                                    {((dept.total / (financialReports.total_expenses || 1)) * 100).toFixed(1)}%
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Report Period */}
              {financialReports.report_period && (
                <div className="opacity-0 animate-fadeInUp delay-500 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md border border-purple-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900">Report Period</h3>
                      <p className="text-purple-700">
                        {financialReports.report_period.start_date 
                          ? formatDate(financialReports.report_period.start_date) 
                          : 'All time'} 
                        {' to '}
                        {financialReports.report_period.end_date 
                          ? formatDate(financialReports.report_period.end_date) 
                          : 'Present'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="opacity-0 animate-fadeInUp delay-200 text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Test Reports
              </h2>
              
              {testReports.length === 0 ? (
                <div className="opacity-0 animate-scaleIn delay-300 bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
                  <div className="max-w-md mx-auto space-y-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-gray-800">No test reports found</h3>
                      <p className="text-gray-500">No test reports are available.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testReports.map((report, index) => (
                    <div 
                      key={report.id} 
                      className={`opacity-0 animate-fadeInUp ${
                        index === 0 ? 'delay-200' : 
                        index === 1 ? 'delay-300' : 
                        index === 2 ? 'delay-400' : 
                        'delay-500'
                      } report-card-hover bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden`}
                    >
                      {/* Card Header */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {report.test_name}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            report.status === 'completed' 
                              ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-300' 
                              : 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 border border-yellow-300'
                          }`}>
                            {report.status}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Patient ID</label>
                            <span className="text-sm font-medium text-gray-800">{report.patient_id}</span>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Type</label>
                            <span className="text-sm font-medium text-gray-800">{report.test_type}</span>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Result</label>
                            <span className={`text-sm font-bold ${
                              report.result === 'Normal' ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {report.result}
                            </span>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Completed</label>
                            <span className="text-sm font-medium text-gray-800">{formatDate(report.completed_date)}</span>
                          </div>
                        </div>

                        {report.comments && (
                          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <label className="block text-xs font-semibold text-blue-700 uppercase mb-1">Comments</label>
                            <p className="text-sm text-gray-700">{report.comments}</p>
                          </div>
                        )}
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

export default AdminReports;