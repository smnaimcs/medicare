// // // src/pages/admin/Billing.jsx
// // import React, { useState, useEffect } from 'react';
// // import adminService from '../../services/adminService';
// // import patientService from '../../services/patientService';

// // function AdminBilling() {
// //   const [bills, setBills] = useState([]);
// //   const [patients, setPatients] = useState([]);
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [activeTab, setActiveTab] = useState('bills');
// //   const [showCreateBillModal, setShowCreateBillModal] = useState(false);
// //   const [showPaymentModal, setShowPaymentModal] = useState(false);
// //   const [showExpenseModal, setShowExpenseModal] = useState(false);
// //   const [selectedBill, setSelectedBill] = useState(null);

// //   useEffect(() => {
// //     fetchBills();
// //     fetchPatients();
// //     fetchAppointments();
// //   }, []);

// //   const fetchBills = async () => {
// //     try {
// //       // Since we don't have a direct admin bills endpoint, we'll use patient bills for demo
// //       // In a real app, you'd have an admin endpoint for all bills
// //       const response = await patientService.getBills();
// //       setBills(response.bills || []);
// //     } catch (error) {
// //       setError('Failed to fetch bills');
// //       console.error('Error fetching bills:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchPatients = async () => {
// //     try {
// //       const response = await adminService.getUsers({ role: 'PATIENT' });
// //       setPatients(response.users || []);
// //     } catch (error) {
// //       console.error('Error fetching patients:', error);
// //     }
// //   };

// //   const fetchAppointments = async () => {
// //     try {
// //       const response = await adminService.getAppointments({ status: 'completed' });
// //       setAppointments(response.appointments || []);
// //     } catch (error) {
// //       console.error('Error fetching appointments:', error);
// //     }
// //   };

// //   const handleCreateBill = async (billData) => {
// //     try {
// //       await adminService.createBill(billData);
// //       alert('Bill created successfully');
// //       setShowCreateBillModal(false);
// //       fetchBills();
// //     } catch (error) {
// //       alert('Failed to create bill');
// //       console.error('Error creating bill:', error);
// //     }
// //   };

// //   const handleProcessPayment = async (paymentData) => {
// //     try {
// //       await adminService.processPayment(selectedBill.id, paymentData);
// //       alert('Payment processed successfully');
// //       setShowPaymentModal(false);
// //       setSelectedBill(null);
// //       fetchBills();
// //     } catch (error) {
// //       alert('Failed to process payment');
// //       console.error('Error processing payment:', error);
// //     }
// //   };

// //   const handleAddExpense = async (expenseData) => {
// //     try {
// //       await adminService.addExpense(expenseData);
// //       alert('Expense recorded successfully');
// //       setShowExpenseModal(false);
// //     } catch (error) {
// //       alert('Failed to record expense');
// //       console.error('Error recording expense:', error);
// //     }
// //   };

// //   const getStatusBadge = (status) => {
// //     const statusColors = {
// //       pending: 'status-pending',
// //       paid: 'status-completed',
// //       overdue: 'status-cancelled'
// //     };
    
// //     return <span className={`status-badge ${statusColors[status] || ''}`}>{status}</span>;
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric'
// //     });
// //   };

// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat('en-US', {
// //       style: 'currency',
// //       currency: 'USD'
// //     }).format(amount);
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading billing data...</div>;
// //   }

// //   return (
// //     <div className="page-container">
// //       <div className="page-header">
// //         <h1>Billing Management</h1>
// //         <div className="header-actions">
// //           <button 
// //             onClick={() => setShowCreateBillModal(true)}
// //             className="btn-primary"
// //           >
// //             Create Bill
// //           </button>
// //           <button 
// //             onClick={() => setShowExpenseModal(true)}
// //             className="btn-secondary"
// //           >
// //             Add Expense
// //           </button>
// //         </div>
// //       </div>

// //       {/* Tabs */}
// //       <div className="tabs">
// //         <button 
// //           className={`tab ${activeTab === 'bills' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('bills')}
// //         >
// //           Bills & Payments
// //         </button>
// //         <button 
// //           className={`tab ${activeTab === 'expenses' ? 'active' : ''}`}
// //           onClick={() => setActiveTab('expenses')}
// //         >
// //           Expenses
// //         </button>
// //       </div>

// //       {error && <div className="error-message">{error}</div>}

// //       <div className="tab-content">
// //         {activeTab === 'bills' ? (
// //           <div className="bills-section">
// //             <h2>All Bills</h2>
// //             {bills.length === 0 ? (
// //               <div className="empty-state">
// //                 <h3>No bills found</h3>
// //                 <p>No bills have been created yet.</p>
// //               </div>
// //             ) : (
// //               <div className="bills-list">
// //                 {bills.map((bill) => (
// //                   <div key={bill.id} className="bill-card">
// //                     <div className="bill-header">
// //                       <div>
// //                         <h3>{bill.bill_number}</h3>
// //                         <p className="bill-patient">Patient ID: {bill.patient_id}</p>
// //                       </div>
// //                       {getStatusBadge(bill.status)}
// //                     </div>
                    
// //                     <div className="bill-details">
// //                       <div className="amount-breakdown">
// //                         <div className="amount-item">
// //                           <span>Total Amount:</span>
// //                           <span>{formatCurrency(bill.total_amount)}</span>
// //                         </div>
// //                         <div className="amount-item">
// //                           <span>Tax:</span>
// //                           <span>{formatCurrency(bill.tax_amount)}</span>
// //                         </div>
// //                         <div className="amount-item">
// //                           <span>Discount:</span>
// //                           <span>-{formatCurrency(bill.discount_amount)}</span>
// //                         </div>
// //                         <div className="amount-item total">
// //                           <span>Final Amount:</span>
// //                           <span>{formatCurrency(bill.final_amount)}</span>
// //                         </div>
// //                       </div>

// //                       <div className="bill-meta">
// //                         <div className="meta-item">
// //                           <label>Due Date:</label>
// //                           <span>{formatDate(bill.due_date)}</span>
// //                         </div>
// //                         <div className="meta-item">
// //                           <label>Created:</label>
// //                           <span>{formatDate(bill.created_at)}</span>
// //                         </div>
// //                         {bill.appointment_id && (
// //                           <div className="meta-item">
// //                             <label>Appointment:</label>
// //                             <span>#{bill.appointment_id}</span>
// //                           </div>
// //                         )}
// //                       </div>
// //                     </div>

// //                     <div className="bill-actions">
// //                       {bill.status === 'pending' && (
// //                         <button 
// //                           onClick={() => {
// //                             setSelectedBill(bill);
// //                             setShowPaymentModal(true);
// //                           }}
// //                           className="btn-primary"
// //                         >
// //                           Process Payment
// //                         </button>
// //                       )}
// //                       <button className="btn-secondary">
// //                         Print Bill
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="expenses-section">
// //             <h2>Expense Management</h2>
// //             <div className="info-card">
// //               <h4>Expense Tracking</h4>
// //               <p>Use this section to record and track hospital expenses. All expenses will be included in financial reports.</p>
// //             </div>
// //             {/* Expenses list would go here */}
// //             <div className="empty-state">
// //               <h3>No expenses recorded</h3>
// //               <p>Click "Add Expense" to start recording expenses.</p>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Create Bill Modal */}
// //       {showCreateBillModal && (
// //         <CreateBillModal
// //           patients={patients}
// //           appointments={appointments}
// //           onClose={() => setShowCreateBillModal(false)}
// //           onSave={handleCreateBill}
// //         />
// //       )}

// //       {/* Process Payment Modal */}
// //       {showPaymentModal && selectedBill && (
// //         <ProcessPaymentModal
// //           bill={selectedBill}
// //           onClose={() => {
// //             setShowPaymentModal(false);
// //             setSelectedBill(null);
// //           }}
// //           onSave={handleProcessPayment}
// //         />
// //       )}

// //       {/* Add Expense Modal */}
// //       {showExpenseModal && (
// //         <AddExpenseModal
// //           onClose={() => setShowExpenseModal(false)}
// //           onSave={handleAddExpense}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // // Create Bill Modal Component
// // function CreateBillModal({ patients, appointments, onClose, onSave }) {
// //   const [formData, setFormData] = useState({
// //     patient_id: '',
// //     appointment_id: '',
// //     total_amount: '',
// //     tax_amount: '0',
// //     discount_amount: '0',
// //     due_date: '',
// //     items: [
// //       { description: '', quantity: 1, unit_price: '', type: 'service' }
// //     ]
// //   });
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleItemChange = (index, field, value) => {
// //     const newItems = [...formData.items];
// //     newItems[index][field] = value;
// //     setFormData({
// //       ...formData,
// //       items: newItems
// //     });
// //   };

// //   const addItem = () => {
// //     setFormData({
// //       ...formData,
// //       items: [...formData.items, { description: '', quantity: 1, unit_price: '', type: 'service' }]
// //     });
// //   };

// //   const removeItem = (index) => {
// //     if (formData.items.length > 1) {
// //       const newItems = formData.items.filter((_, i) => i !== index);
// //       setFormData({
// //         ...formData,
// //         items: newItems
// //       });
// //     }
// //   };

// //   const calculateTotal = () => {
// //     const itemsTotal = formData.items.reduce((sum, item) => {
// //       return sum + (parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 0);
// //     }, 0);
    
// //     const tax = parseFloat(formData.tax_amount) || 0;
// //     const discount = parseFloat(formData.discount_amount) || 0;
    
// //     return itemsTotal + tax - discount;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     if (!formData.patient_id || !formData.total_amount) {
// //       alert('Please fill in all required fields');
// //       return;
// //     }

// //     const billData = {
// //       ...formData,
// //       total_amount: parseFloat(formData.total_amount),
// //       tax_amount: parseFloat(formData.tax_amount),
// //       discount_amount: parseFloat(formData.discount_amount),
// //       final_amount: calculateTotal()
// //     };

// //     setLoading(true);
// //     await onSave(billData);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal large-modal">
// //         <div className="modal-header">
// //           <h2>Create New Bill</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>

// //         <form onSubmit={handleSubmit} className="bill-form">
// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Patient *</label>
// //               <select
// //                 name="patient_id"
// //                 value={formData.patient_id}
// //                 onChange={handleChange}
// //                 required
// //               >
// //                 <option value="">Select Patient</option>
// //                 {patients.map((patient) => (
// //                   <option key={patient.id} value={patient.id}>
// //                     {patient.first_name} {patient.last_name} ({patient.email})
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //             <div className="form-group">
// //               <label>Appointment (Optional)</label>
// //               <select
// //                 name="appointment_id"
// //                 value={formData.appointment_id}
// //                 onChange={handleChange}
// //               >
// //                 <option value="">Select Appointment</option>
// //                 {appointments.map((appointment) => (
// //                   <option key={appointment.id} value={appointment.id}>
// //                     #{appointment.id} - {appointment.patient.user.first_name} {appointment.patient.user.last_name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Due Date *</label>
// //               <input
// //                 type="date"
// //                 name="due_date"
// //                 value={formData.due_date}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="bill-items-section">
// //             <h4>Bill Items</h4>
// //             {formData.items.map((item, index) => (
// //               <div key={index} className="bill-item">
// //                 <div className="form-row">
// //                   <div className="form-group">
// //                     <label>Description *</label>
// //                     <input
// //                       type="text"
// //                       value={item.description}
// //                       onChange={(e) => handleItemChange(index, 'description', e.target.value)}
// //                       placeholder="e.g., Consultation Fee"
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group">
// //                     <label>Type</label>
// //                     <select
// //                       value={item.type}
// //                       onChange={(e) => handleItemChange(index, 'type', e.target.value)}
// //                     >
// //                       <option value="service">Service</option>
// //                       <option value="test">Test</option>
// //                       <option value="medicine">Medicine</option>
// //                       <option value="other">Other</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //                 <div className="form-row">
// //                   <div className="form-group">
// //                     <label>Quantity</label>
// //                     <input
// //                       type="number"
// //                       value={item.quantity}
// //                       onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
// //                       min="1"
// //                     />
// //                   </div>
// //                   <div className="form-group">
// //                     <label>Unit Price ($) *</label>
// //                     <input
// //                       type="number"
// //                       step="0.01"
// //                       value={item.unit_price}
// //                       onChange={(e) => handleItemChange(index, 'unit_price', e.target.value)}
// //                       placeholder="0.00"
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group">
// //                     <label>Total</label>
// //                     <input
// //                       type="text"
// //                       value={`$${((parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 1)).toFixed(2)}`}
// //                       readOnly
// //                       className="readonly-input"
// //                     />
// //                   </div>
// //                   {formData.items.length > 1 && (
// //                     <div className="form-group">
// //                       <button
// //                         type="button"
// //                         onClick={() => removeItem(index)}
// //                         className="btn-danger"
// //                         style={{ marginTop: '1.5rem' }}
// //                       >
// //                         Remove
// //                       </button>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             ))}
// //             <button type="button" onClick={addItem} className="btn-secondary">
// //               Add Another Item
// //             </button>
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Tax Amount ($)</label>
// //               <input
// //                 type="number"
// //                 step="0.01"
// //                 name="tax_amount"
// //                 value={formData.tax_amount}
// //                 onChange={handleChange}
// //                 placeholder="0.00"
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label>Discount Amount ($)</label>
// //               <input
// //                 type="number"
// //                 step="0.01"
// //                 name="discount_amount"
// //                 value={formData.discount_amount}
// //                 onChange={handleChange}
// //                 placeholder="0.00"
// //               />
// //             </div>
// //           </div>

// //           <div className="bill-summary">
// //             <h4>Bill Summary</h4>
// //             <div className="summary-item">
// //               <span>Items Total:</span>
// //               <span>${formData.items.reduce((sum, item) => sum + ((parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 1)), 0).toFixed(2)}</span>
// //             </div>
// //             <div className="summary-item">
// //               <span>Tax:</span>
// //               <span>${formData.tax_amount}</span>
// //             </div>
// //             <div className="summary-item">
// //               <span>Discount:</span>
// //               <span>-${formData.discount_amount}</span>
// //             </div>
// //             <div className="summary-item total">
// //               <span>Final Amount:</span>
// //               <span>${calculateTotal().toFixed(2)}</span>
// //             </div>
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Creating...' : 'Create Bill'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // // Process Payment Modal Component
// // function ProcessPaymentModal({ bill, onClose, onSave }) {
// //   const [formData, setFormData] = useState({
// //     payment_method: 'cash',
// //     amount: bill.final_amount
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
    
// //     if (!formData.amount || formData.amount <= 0) {
// //       alert('Please enter a valid amount');
// //       return;
// //     }

// //     setLoading(true);
// //     await onSave(formData);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal">
// //         <div className="modal-header">
// //           <h2>Process Payment</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>

// //         <div className="payment-info">
// //           <h4>Bill Information</h4>
// //           <p><strong>Bill Number:</strong> {bill.bill_number}</p>
// //           <p><strong>Amount Due:</strong> ${bill.final_amount}</p>
// //         </div>

// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label>Payment Method *</label>
// //             <select
// //               name="payment_method"
// //               value={formData.payment_method}
// //               onChange={handleChange}
// //               required
// //             >
// //               <option value="cash">Cash</option>
// //               <option value="card">Credit/Debit Card</option>
// //               <option value="online">Online Payment</option>
// //               <option value="insurance">Insurance</option>
// //               <option value="bank">Bank Transfer</option>
// //             </select>
// //           </div>

// //           <div className="form-group">
// //             <label>Amount ($) *</label>
// //             <input
// //               type="number"
// //               step="0.01"
// //               name="amount"
// //               value={formData.amount}
// //               onChange={handleChange}
// //               min="0.01"
// //               max={bill.final_amount}
// //               required
// //             />
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Processing...' : 'Process Payment'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // // Add Expense Modal Component
// // function AddExpenseModal({ onClose, onSave }) {
// //   const [formData, setFormData] = useState({
// //     category: 'medical_supplies',
// //     description: '',
// //     amount: '',
// //     expense_date: new Date().toISOString().split('T')[0],
// //     department: 'general',
// //     receipt_url: ''
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
    
// //     if (!formData.description || !formData.amount) {
// //       alert('Please fill in all required fields');
// //       return;
// //     }

// //     const expenseData = {
// //       ...formData,
// //       amount: parseFloat(formData.amount)
// //     };

// //     setLoading(true);
// //     await onSave(expenseData);
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal">
// //         <div className="modal-header">
// //           <h2>Record Expense</h2>
// //           <button onClick={onClose} className="btn-close">×</button>
// //         </div>

// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label>Category *</label>
// //             <select
// //               name="category"
// //               value={formData.category}
// //               onChange={handleChange}
// //               required
// //             >
// //               <option value="medical_supplies">Medical Supplies</option>
// //               <option value="equipment">Equipment</option>
// //               <option value="medicines">Medicines</option>
// //               <option value="staff_salary">Staff Salary</option>
// //               <option value="utilities">Utilities</option>
// //               <option value="maintenance">Maintenance</option>
// //               <option value="office_supplies">Office Supplies</option>
// //               <option value="other">Other</option>
// //             </select>
// //           </div>

// //           <div className="form-group">
// //             <label>Description *</label>
// //             <textarea
// //               name="description"
// //               value={formData.description}
// //               onChange={handleChange}
// //               placeholder="Describe the expense..."
// //               rows="3"
// //               required
// //             />
// //           </div>

// //           <div className="form-row">
// //             <div className="form-group">
// //               <label>Amount ($) *</label>
// //               <input
// //                 type="number"
// //                 step="0.01"
// //                 name="amount"
// //                 value={formData.amount}
// //                 onChange={handleChange}
// //                 placeholder="0.00"
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label>Expense Date *</label>
// //               <input
// //                 type="date"
// //                 name="expense_date"
// //                 value={formData.expense_date}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label>Department</label>
// //             <select
// //               name="department"
// //               value={formData.department}
// //               onChange={handleChange}
// //             >
// //               <option value="general">General</option>
// //               <option value="surgery">Surgery</option>
// //               <option value="cardiology">Cardiology</option>
// //               <option value="pediatrics">Pediatrics</option>
// //               <option value="emergency">Emergency</option>
// //               <option value="administration">Administration</option>
// //             </select>
// //           </div>

// //           <div className="form-group">
// //             <label>Receipt URL (Optional)</label>
// //             <input
// //               type="url"
// //               name="receipt_url"
// //               value={formData.receipt_url}
// //               onChange={handleChange}
// //               placeholder="https://receipts.com/123"
// //             />
// //           </div>

// //           <div className="modal-actions">
// //             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
// //             <button type="submit" disabled={loading} className="btn-primary">
// //               {loading ? 'Recording...' : 'Record Expense'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminBilling;



















// // src/pages/admin/Billing.jsx
// import React, { useState, useEffect } from 'react';
// import adminService from '../../services/adminService';
// import patientService from '../../services/patientService';

// function AdminBilling() {
//   const [bills, setBills] = useState([]);
//   const [patients, setPatients] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activeTab, setActiveTab] = useState('bills');
//   const [showCreateBillModal, setShowCreateBillModal] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showExpenseModal, setShowExpenseModal] = useState(false);
//   const [selectedBill, setSelectedBill] = useState(null);

//   useEffect(() => {
//     fetchBills();
//     fetchPatients();
//     fetchAppointments();
//   }, []);

//   const fetchBills = async () => {
//     try {
//       const response = await patientService.getBills();
//       setBills(response.bills || []);
//     } catch (error) {
//       setError('Failed to fetch bills');
//       console.error('Error fetching bills:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPatients = async () => {
//     try {
//       const response = await adminService.getUsers({ role: 'PATIENT' });
//       setPatients(response.users || []);
//     } catch (error) {
//       console.error('Error fetching patients:', error);
//     }
//   };

//   const fetchAppointments = async () => {
//     try {
//       const response = await adminService.getAppointments({ status: 'completed' });
//       setAppointments(response.appointments || []);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   const handleCreateBill = async (billData) => {
//     try {
//       await adminService.createBill(billData);
//       alert('Bill created successfully');
//       setShowCreateBillModal(false);
//       fetchBills();
//     } catch (error) {
//       alert('Failed to create bill');
//       console.error('Error creating bill:', error);
//     }
//   };

//   const handleProcessPayment = async (paymentData) => {
//     try {
//       await adminService.processPayment(selectedBill.id, paymentData);
//       alert('Payment processed successfully');
//       setShowPaymentModal(false);
//       setSelectedBill(null);
//       fetchBills();
//     } catch (error) {
//       alert('Failed to process payment');
//       console.error('Error processing payment:', error);
//     }
//   };

//   const handleAddExpense = async (expenseData) => {
//     try {
//       await adminService.addExpense(expenseData);
//       alert('Expense recorded successfully');
//       setShowExpenseModal(false);
//     } catch (error) {
//       alert('Failed to record expense');
//       console.error('Error recording expense:', error);
//     }
//   };

//   const getStatusBadge = (status) => {
//     const statusColors = {
//       pending: 'badge-warning',
//       paid: 'badge-success',
//       overdue: 'badge-error',
//     };

//     return <span className={`badge ${statusColors[status] || ''}`}>{status}</span>;
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format(amount);
//   };

//   if (loading) {
//     return <div className="flex items-center justify-center h-screen text-gray-500">Loading billing data...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       {/* Page Header */}
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
//         <h1 className="text-3xl font-bold mb-4 md:mb-0">Billing Management</h1>
//         <div className="flex gap-2">
//           <button onClick={() => setShowCreateBillModal(true)} className="btn btn-primary">Create Bill</button>
//           <button onClick={() => setShowExpenseModal(true)} className="btn btn-secondary">Add Expense</button>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="tabs mb-4">
//         <button className={`tab tab-bordered ${activeTab === 'bills' ? 'tab-active' : ''}`} onClick={() => setActiveTab('bills')}>Bills & Payments</button>
//         <button className={`tab tab-bordered ${activeTab === 'expenses' ? 'tab-active' : ''}`} onClick={() => setActiveTab('expenses')}>Expenses</button>
//       </div>

//       {error && <div className="alert alert-error mb-4">{error}</div>}

//       {/* Tab Content */}
//       {activeTab === 'bills' ? (
//         <div className="space-y-4">
//           {bills.length === 0 ? (
//             <div className="text-center p-6 border border-dashed rounded-lg">
//               <h3 className="text-xl font-semibold mb-2">No bills found</h3>
//               <p>No bills have been created yet.</p>
//             </div>
//           ) : (
//             bills.map((bill) => (
//               <div key={bill.id} className="card shadow-lg border border-base-300">
//                 <div className="card-body">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl font-bold">{bill.bill_number}</h3>
//                       <p className="text-gray-500">Patient ID: {bill.patient_id}</p>
//                     </div>
//                     {getStatusBadge(bill.status)}
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                     <div>
//                       <h4 className="font-semibold mb-2">Amount Breakdown</h4>
//                       <div className="space-y-1">
//                         <div className="flex justify-between"><span>Total Amount:</span><span>{formatCurrency(bill.total_amount)}</span></div>
//                         <div className="flex justify-between"><span>Tax:</span><span>{formatCurrency(bill.tax_amount)}</span></div>
//                         <div className="flex justify-between"><span>Discount:</span><span>-{formatCurrency(bill.discount_amount)}</span></div>
//                         <div className="flex justify-between font-bold"><span>Final Amount:</span><span>{formatCurrency(bill.final_amount)}</span></div>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-2">Bill Details</h4>
//                       <div className="space-y-1">
//                         <div className="flex justify-between"><span>Due Date:</span><span>{formatDate(bill.due_date)}</span></div>
//                         <div className="flex justify-between"><span>Created:</span><span>{formatDate(bill.created_at)}</span></div>
//                         {bill.appointment_id && (
//                           <div className="flex justify-between"><span>Appointment:</span><span>#{bill.appointment_id}</span></div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="card-actions mt-4 justify-end gap-2">
//                     {bill.status === 'pending' && (
//                       <button onClick={() => { setSelectedBill(bill); setShowPaymentModal(true); }} className="btn btn-primary">Process Payment</button>
//                     )}
//                     <button className="btn btn-outline">Print Bill</button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       ) : (
//         <div className="space-y-4">
//           <div className="card p-4 shadow border border-base-300">
//             <h4 className="font-semibold mb-2">Expense Tracking</h4>
//             <p>Use this section to record and track hospital expenses. All expenses will be included in financial reports.</p>
//           </div>
//           <div className="text-center p-6 border border-dashed rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">No expenses recorded</h3>
//             <p>Click "Add Expense" to start recording expenses.</p>
//           </div>
//         </div>
//       )}

//       {/* Modals */}
//       {showCreateBillModal && <CreateBillModal patients={patients} appointments={appointments} onClose={() => setShowCreateBillModal(false)} onSave={handleCreateBill} />}
//       {showPaymentModal && selectedBill && <ProcessPaymentModal bill={selectedBill} onClose={() => { setShowPaymentModal(false); setSelectedBill(null); }} onSave={handleProcessPayment} />}
//       {showExpenseModal && <AddExpenseModal onClose={() => setShowExpenseModal(false)} onSave={handleAddExpense} />}
//     </div>
//   );
// }

// // ==================== CREATE BILL MODAL ====================
// function CreateBillModal({ patients, appointments, onClose, onSave }) {
//   const [formData, setFormData] = useState({
//     patient_id: '',
//     appointment_id: '',
//     total_amount: '',
//     tax_amount: '0',
//     discount_amount: '0',
//     due_date: '',
//     items: [{ description: '', quantity: 1, unit_price: '', type: 'service' }],
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleItemChange = (index, field, value) => {
//     const newItems = [...formData.items];
//     newItems[index][field] = value;
//     setFormData({ ...formData, items: newItems });
//   };

//   const addItem = () => setFormData({ ...formData, items: [...formData.items, { description: '', quantity: 1, unit_price: '', type: 'service' }] });
//   const removeItem = (index) => formData.items.length > 1 && setFormData({ ...formData, items: formData.items.filter((_, i) => i !== index) });

//   const calculateTotal = () => {
//     const itemsTotal = formData.items.reduce((sum, item) => sum + (parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 0), 0);
//     return itemsTotal + (parseFloat(formData.tax_amount) || 0) - (parseFloat(formData.discount_amount) || 0);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.patient_id || !formData.total_amount) { alert('Please fill in all required fields'); return; }
//     setLoading(true);
//     await onSave({ ...formData, total_amount: parseFloat(formData.total_amount), tax_amount: parseFloat(formData.tax_amount), discount_amount: parseFloat(formData.discount_amount), final_amount: calculateTotal() });
//     setLoading(false);
//   };

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box w-11/12 max-w-5xl">
//         <h2 className="text-2xl font-bold mb-4">Create New Bill</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="form-control">
//               <label className="label"><span className="label-text">Patient *</span></label>
//               <select name="patient_id" value={formData.patient_id} onChange={handleChange} className="select select-bordered" required>
//                 <option value="">Select Patient</option>
//                 {patients.map((p) => <option key={p.id} value={p.id}>{p.first_name} {p.last_name} ({p.email})</option>)}
//               </select>
//             </div>
//             <div className="form-control">
//               <label className="label"><span className="label-text">Appointment (Optional)</span></label>
//               <select name="appointment_id" value={formData.appointment_id} onChange={handleChange} className="select select-bordered">
//                 <option value="">Select Appointment</option>
//                 {appointments.map((a) => <option key={a.id} value={a.id}>#{a.id} - {a.patient.user.first_name} {a.patient.user.last_name}</option>)}
//               </select>
//             </div>
//           </div>

//           <div className="form-control w-full">
//             <label className="label"><span className="label-text">Due Date *</span></label>
//             <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} className="input input-bordered" required />
//           </div>

//           {/* Bill Items */}
//           <div className="space-y-4">
//             <h4 className="font-semibold text-lg">Bill Items</h4>
//             {formData.items.map((item, index) => (
//               <div key={index} className="border p-4 rounded-lg space-y-2">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="form-control">
//                     <label className="label"><span className="label-text">Description *</span></label>
//                     <input type="text" value={item.description} onChange={(e) => handleItemChange(index, 'description', e.target.value)} placeholder="e.g., Consultation Fee" className="input input-bordered" required />
//                   </div>
//                   <div className="form-control">
//                     <label className="label"><span className="label-text">Type</span></label>
//                     <select value={item.type} onChange={(e) => handleItemChange(index, 'type', e.target.value)} className="select select-bordered">
//                       <option value="service">Service</option>
//                       <option value="test">Test</option>
//                       <option value="medicine">Medicine</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
//                   <div className="form-control">
//                     <label className="label"><span className="label-text">Quantity</span></label>
//                     <input type="number" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))} min="1" className="input input-bordered" />
//                   </div>
//                   <div className="form-control">
//                     <label className="label"><span className="label-text">Unit Price ($) *</span></label>
//                     <input type="number" step="0.01" value={item.unit_price} onChange={(e) => handleItemChange(index, 'unit_price', e.target.value)} placeholder="0.00" className="input input-bordered" required />
//                   </div>
//                   <div className="form-control">
//                     <label className="label"><span className="label-text">Total</span></label>
//                     <input type="text" value={`$${((parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 1)).toFixed(2)}`} readOnly className="input input-bordered input-disabled" />
//                   </div>
//                   {formData.items.length > 1 && (
//                     <div className="form-control mt-2">
//                       <button type="button" onClick={() => removeItem(index)} className="btn btn-error">Remove</button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//             <button type="button" onClick={addItem} className="btn btn-secondary">Add Another Item</button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="form-control">
//               <label className="label"><span className="label-text">Tax Amount ($)</span></label>
//               <input type="number" step="0.01" name="tax_amount" value={formData.tax_amount} onChange={handleChange} className="input input-bordered" />
//             </div>
//             <div className="form-control">
//               <label className="label"><span className="label-text">Discount Amount ($)</span></label>
//               <input type="number" step="0.01" name="discount_amount" value={formData.discount_amount} onChange={handleChange} className="input input-bordered" />
//             </div>
//           </div>

//           <div className="border-t pt-4">
//             <h4 className="font-semibold mb-2">Bill Summary</h4>
//             <div className="space-y-1">
//               <div className="flex justify-between"><span>Items Total:</span><span>${formData.items.reduce((sum, item) => sum + ((parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 1)), 0).toFixed(2)}</span></div>
//               <div className="flex justify-between"><span>Tax:</span><span>${formData.tax_amount}</span></div>
//               <div className="flex justify-between"><span>Discount:</span><span>-${formData.discount_amount}</span></div>
//               <div className="flex justify-between font-bold"><span>Final Amount:</span><span>${calculateTotal().toFixed(2)}</span></div>
//             </div>
//           </div>

//           <div className="modal-action justify-end">
//             <button type="button" onClick={onClose} className="btn btn-outline">Cancel</button>
//             <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Creating...' : 'Create Bill'}</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// // ==================== PROCESS PAYMENT MODAL ====================
// function ProcessPaymentModal({ bill, onClose, onSave }) {
//   const [formData, setFormData] = useState({ payment_method: 'cash', amount: bill.final_amount });
//   const [loading, setLoading] = useState(false);
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.amount || formData.amount <= 0) { alert('Please enter a valid amount'); return; }
//     setLoading(true);
//     await onSave(formData);
//     setLoading(false);
//   };

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box">
//         <h2 className="text-2xl font-bold mb-4">Process Payment</h2>
//         <div className="mb-4">
//           <h4 className="font-semibold">Bill Information</h4>
//           <p><strong>Bill Number:</strong> {bill.bill_number}</p>
//           <p><strong>Amount Due:</strong> ${bill.final_amount}</p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="form-control">
//             <label className="label"><span className="label-text">Payment Method *</span></label>
//             <select name="payment_method" value={formData.payment_method} onChange={handleChange} className="select select-bordered" required>
//               <option value="cash">Cash</option>
//               <option value="card">Credit/Debit Card</option>
//               <option value="online">Online Payment</option>
//               <option value="insurance">Insurance</option>
//               <option value="bank">Bank Transfer</option>
//             </select>
//           </div>
//           <div className="form-control">
//             <label className="label"><span className="label-text">Amount ($) *</span></label>
//             <input type="number" step="0.01" name="amount" value={formData.amount} onChange={handleChange} min="0.01" max={bill.final_amount} className="input input-bordered" required />
//           </div>
//           <div className="modal-action justify-end">
//             <button type="button" onClick={onClose} className="btn btn-outline">Cancel</button>
//             <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Processing...' : 'Process Payment'}</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// // ==================== ADD EXPENSE MODAL ====================
// function AddExpenseModal({ onClose, onSave }) {
//   const [formData, setFormData] = useState({ category: 'medical_supplies', description: '', amount: '', expense_date: new Date().toISOString().split('T')[0], department: 'general', receipt_url: '' });
//   const [loading, setLoading] = useState(false);
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.description || !formData.amount) { alert('Please fill in all required fields'); return; }
//     setLoading(true);
//     await onSave({ ...formData, amount: parseFloat(formData.amount) });
//     setLoading(false);
//   };

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box">
//         <h2 className="text-2xl font-bold mb-4">Record Expense</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="form-control">
//             <label className="label"><span className="label-text">Category *</span></label>
//             <select name="category" value={formData.category} onChange={handleChange} className="select select-bordered" required>
//               <option value="medical_supplies">Medical Supplies</option>
//               <option value="equipment">Equipment</option>
//               <option value="medicines">Medicines</option>
//               <option value="staff_salary">Staff Salary</option>
//               <option value="utilities">Utilities</option>
//               <option value="maintenance">Maintenance</option>
//               <option value="office_supplies">Office Supplies</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="form-control">
//             <label className="label"><span className="label-text">Description *</span></label>
//             <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Describe the expense..." rows="3" className="textarea textarea-bordered" required />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="form-control">
//               <label className="label"><span className="label-text">Amount ($) *</span></label>
//               <input type="number" step="0.01" name="amount" value={formData.amount} onChange={handleChange} placeholder="0.00" className="input input-bordered" required />
//             </div>
//             <div className="form-control">
//               <label className="label"><span className="label-text">Expense Date *</span></label>
//               <input type="date" name="expense_date" value={formData.expense_date} onChange={handleChange} className="input input-bordered" required />
//             </div>
//           </div>
//           <div className="form-control">
//             <label className="label"><span className="label-text">Department</span></label>
//             <select name="department" value={formData.department} onChange={handleChange} className="select select-bordered">
//               <option value="general">General</option>
//               <option value="surgery">Surgery</option>
//               <option value="cardiology">Cardiology</option>
//               <option value="pediatrics">Pediatrics</option>
//               <option value="emergency">Emergency</option>
//               <option value="administration">Administration</option>
//             </select>
//           </div>
//           <div className="form-control">
//             <label className="label"><span className="label-text">Receipt URL (Optional)</span></label>
//             <input type="url" name="receipt_url" value={formData.receipt_url} onChange={handleChange} placeholder="https://receipts.com/123" className="input input-bordered" />
//           </div>
//           <div className="modal-action justify-end">
//             <button type="button" onClick={onClose} className="btn btn-outline">Cancel</button>
//             <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Recording...' : 'Record Expense'}</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AdminBilling;







// src/pages/admin/Billing.jsx
import React, { useState, useEffect } from 'react';
import adminService from '../../services/adminService';
import patientService from '../../services/patientService';

// ==================== CREATE BILL MODAL ====================
function CreateBillModal({ patients, appointments, onClose, onSave }) {
  const [formData, setFormData] = useState({
    patient_id: '',
    appointment_id: '',
    total_amount: '',
    tax_amount: '0',
    discount_amount: '0',
    due_date: '',
    items: [{ description: '', quantity: 1, unit_price: '', type: 'service' }],
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = value;
    setFormData({ ...formData, items: newItems });
  };

  const addItem = () => setFormData({ ...formData, items: [...formData.items, { description: '', quantity: 1, unit_price: '', type: 'service' }] });
  const removeItem = (index) => formData.items.length > 1 && setFormData({ ...formData, items: formData.items.filter((_, i) => i !== index) });

  const calculateTotal = () => {
    const itemsTotal = formData.items.reduce((sum, item) => sum + (parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 0), 0);
    return itemsTotal + (parseFloat(formData.tax_amount) || 0) - (parseFloat(formData.discount_amount) || 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.patient_id || !formData.total_amount) { alert('Please fill in all required fields'); return; }
    setLoading(true);
    await onSave({ ...formData, total_amount: parseFloat(formData.total_amount), tax_amount: parseFloat(formData.tax_amount), discount_amount: parseFloat(formData.discount_amount), final_amount: calculateTotal() });
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl my-8 animate-slideUp">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Create New Bill</h2>
            <p className="text-sm text-gray-500 mt-1">Generate a bill for patient services</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Patient *</label>
              <select name="patient_id" value={formData.patient_id} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required>
                <option value="">Select Patient</option>
                {patients.map((p) => <option key={p.id} value={p.id}>{p.first_name} {p.last_name} ({p.email})</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Appointment (Optional)</label>
              <select name="appointment_id" value={formData.appointment_id} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200">
                <option value="">Select Appointment</option>
                {appointments.map((a) => <option key={a.id} value={a.id}>#{a.id} - {a.patient.user.first_name} {a.patient.user.last_name}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Due Date *</label>
            <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required />
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-gray-800 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Bill Items
            </h4>
            {formData.items.map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 p-4 rounded-xl space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                    <input type="text" value={item.description} onChange={(e) => handleItemChange(index, 'description', e.target.value)} placeholder="e.g., Consultation Fee" className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
                    <select value={item.type} onChange={(e) => handleItemChange(index, 'type', e.target.value)} className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200">
                      <option value="service">Service</option>
                      <option value="test">Test</option>
                      <option value="medicine">Medicine</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
                    <input type="number" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))} min="1" className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Unit Price ($) *</label>
                    <input type="number" step="0.01" value={item.unit_price} onChange={(e) => handleItemChange(index, 'unit_price', e.target.value)} placeholder="0.00" className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Total</label>
                    <input type="text" value={`$${((parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 1)).toFixed(2)}`} readOnly className="w-full px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg text-gray-700" />
                  </div>
                  {formData.items.length > 1 && (
                    <button type="button" onClick={() => removeItem(index)} className="px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200">Remove</button>
                  )}
                </div>
              </div>
            ))}
            <button type="button" onClick={addItem} className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add Another Item
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tax Amount ($)</label>
              <input type="number" step="0.01" name="tax_amount" value={formData.tax_amount} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Discount Amount ($)</label>
              <input type="number" step="0.01" name="discount_amount" value={formData.discount_amount} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-base text-gray-800 mb-3">Bill Summary</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700"><span>Items Total:</span><span className="font-semibold">${formData.items.reduce((sum, item) => sum + ((parseFloat(item.unit_price) || 0) * (parseInt(item.quantity) || 1)), 0).toFixed(2)}</span></div>
              <div className="flex justify-between text-gray-700"><span>Tax:</span><span className="font-semibold">${formData.tax_amount}</span></div>
              <div className="flex justify-between text-gray-700"><span>Discount:</span><span className="font-semibold">-${formData.discount_amount}</span></div>
              <div className="border-t border-gray-300 pt-2 mt-2"></div>
              <div className="flex justify-between text-lg font-bold text-gray-800"><span>Final Amount:</span><span>${calculateTotal().toFixed(2)}</span></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200">Cancel</button>
            <button type="submit" disabled={loading} className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {loading ? (
                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>Creating...</>
              ) : (
                <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Create Bill</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ==================== PROCESS PAYMENT MODAL ====================
function ProcessPaymentModal({ bill, onClose, onSave }) {
  const [formData, setFormData] = useState({ payment_method: 'cash', amount: bill.final_amount });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.amount || formData.amount <= 0) { alert('Please enter a valid amount'); return; }
    setLoading(true);
    await onSave(formData);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-slideUp">
        <div className="bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Process Payment</h2>
            <p className="text-sm text-gray-500 mt-1">Record payment for this bill</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-base text-gray-800 mb-3">Bill Information</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Bill Number:</span><span className="font-semibold text-gray-800">{bill.bill_number}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Amount Due:</span><span className="font-bold text-lg text-gray-800">${bill.final_amount}</span></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Method *</label>
              <select name="payment_method" value={formData.payment_method} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required>
                <option value="cash">Cash</option>
                <option value="card">Credit/Debit Card</option>
                <option value="online">Online Payment</option>
                <option value="insurance">Insurance</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amount ($) *</label>
              <input type="number" step="0.01" name="amount" value={formData.amount} onChange={handleChange} min="0.01" max={bill.final_amount} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button type="button" onClick={onClose} className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200">Cancel</button>
              <button type="submit" disabled={loading} className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {loading ? (
                  <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>Processing...</>
                ) : (
                  <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Process Payment</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ==================== ADD EXPENSE MODAL ====================
function AddExpenseModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({ category: 'medical_supplies', description: '', amount: '', expense_date: new Date().toISOString().split('T')[0], department: 'general', receipt_url: '' });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) { alert('Please fill in all required fields'); return; }
    setLoading(true);
    await onSave({ ...formData, amount: parseFloat(formData.amount) });
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn overflow-y-auto ">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full animate-slideUp">
        <div className="bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Record Expense</h2>
            <p className="text-sm text-gray-500 mt-1">Track hospital expenses</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
            <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required>
              <option value="medical_supplies">Medical Supplies</option>
              <option value="equipment">Equipment</option>
              <option value="medicines">Medicines</option>
              <option value="staff_salary">Staff Salary</option>
              <option value="utilities">Utilities</option>
              <option value="maintenance">Maintenance</option>
              <option value="office_supplies">Office Supplies</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Describe the expense..." rows="3" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amount ($) *</label>
              <input type="number" step="0.01" name="amount" value={formData.amount} onChange={handleChange} placeholder="0.00" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Expense Date *</label>
              <input type="date" name="expense_date" value={formData.expense_date} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
            <select name="department" value={formData.department} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200">
              <option value="general">General</option>
              <option value="surgery">Surgery</option>
              <option value="cardiology">Cardiology</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="emergency">Emergency</option>
              <option value="administration">Administration</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Receipt URL (Optional)</label>
            <input type="url" name="receipt_url" value={formData.receipt_url} onChange={handleChange} placeholder="https://receipts.com/123" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-200">Cancel</button>
            <button type="submit" disabled={loading} className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {loading ? (
                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>Recording...</>
              ) : (
                <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Record Expense</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AdminBilling() {
  const [bills, setBills] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('bills');
  const [showCreateBillModal, setShowCreateBillModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    fetchBills();
    fetchPatients();
    fetchAppointments();
  }, []);

  const fetchBills = async () => {
    try {
      const response = await patientService.getBills();
      setBills(response.bills || []);
    } catch (error) {
      setError('Failed to fetch bills');
      console.error('Error fetching bills:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPatients = async () => {
    try {
      const response = await adminService.getUsers({ role: 'PATIENT' });
      setPatients(response.users || []);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await adminService.getAppointments({ status: 'completed' });
      setAppointments(response.appointments || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleCreateBill = async (billData) => {
    try {
      await adminService.createBill(billData);
      alert('Bill created successfully');
      setShowCreateBillModal(false);
      fetchBills();
    } catch (error) {
      alert('Failed to create bill');
      console.error('Error creating bill:', error);
    }
  };

  const handleProcessPayment = async (paymentData) => {
    try {
      await adminService.processPayment(selectedBill.id, paymentData);
      alert('Payment processed successfully');
      setShowPaymentModal(false);
      setSelectedBill(null);
      fetchBills();
    } catch (error) {
      alert('Failed to process payment');
      console.error('Error processing payment:', error);
    }
  };

  const handleAddExpense = async (expenseData) => {
    try {
      await adminService.addExpense(expenseData);
      alert('Expense recorded successfully');
      setShowExpenseModal(false);
    } catch (error) {
      alert('Failed to record expense');
      console.error('Error recording expense:', error);
    }
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
      paid: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      overdue: 'bg-red-50 text-red-700 border-red-200',
    };

    return <span className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full border ${statusColors[status] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>{status.toUpperCase()}</span>;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-600 mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading billing data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
          .animate-slideUp { animation: slideUp 0.4s ease-out; }
          .animate-slideInLeft { animation: slideInLeft 0.5s ease-out; }
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
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Billing Management</h1>
              <p className="text-gray-500 mt-1 text-sm">Manage bills, payments, and expenses</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setShowCreateBillModal(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                Create Bill
              </button>
              <button onClick={() => setShowExpenseModal(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Add Expense
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-2 animate-slideUp">
          <div className="flex gap-2">
            <button className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${activeTab === 'bills' ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('bills')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Bills & Payments
            </button>
            <button className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${activeTab === 'expenses' ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('expenses')}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Expenses
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl shadow-sm flex items-center gap-3 animate-slideUp">
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* Content */}
        {activeTab === 'bills' ? (
          <div className="space-y-6 animate-slideInLeft">
            {bills.length === 0 ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
                <div className="text-center max-w-md mx-auto">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No bills found</h3>
                  <p className="text-gray-500">No bills have been created yet.</p>
                </div>
              </div>
            ) : (
              bills.map((bill, index) => (
                <div key={bill.id} className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 animate-slideUp stagger-${Math.min(index + 1, 6)}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{bill.bill_number}</h3>
                        <p className="text-sm text-gray-500">Patient ID: {bill.patient_id}</p>
                      </div>
                    </div>
                    {getStatusBadge(bill.status)}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
                    <div className="space-y-3">
                      <h4 className="font-bold text-base text-gray-800 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Amount Breakdown
                      </h4>
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-2">
                        <div className="flex justify-between text-sm"><span className="text-gray-600">Total Amount:</span><span className="font-semibold text-gray-800">{formatCurrency(bill.total_amount)}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-gray-600">Tax:</span><span className="font-semibold text-gray-800">{formatCurrency(bill.tax_amount)}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-gray-600">Discount:</span><span className="font-semibold text-gray-800">-{formatCurrency(bill.discount_amount)}</span></div>
                        <div className="border-t border-gray-300 pt-2 mt-2"></div>
                        <div className="flex justify-between"><span className="font-bold text-gray-800">Final Amount:</span><span className="font-bold text-lg text-gray-800">{formatCurrency(bill.final_amount)}</span></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-base text-gray-800 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Bill Details
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          </div>
                          <div className="flex-1"><label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Due Date</label><span className="text-gray-800 font-medium">{formatDate(bill.due_date)}</span></div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                          </div>
                          <div className="flex-1"><label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Created</label><span className="text-gray-800 font-medium">{formatDate(bill.created_at)}</span></div>
                        </div>
                        {bill.appointment_id && (
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            </div>
                            <div className="flex-1"><label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Appointment</label><span className="text-gray-800 font-medium">#{bill.appointment_id}</span></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {bill.status === 'pending' && (
                        <button onClick={() => { setSelectedBill(bill); setShowPaymentModal(true); }} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                          Process Payment
                        </button>
                      )}
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                        Print Bill
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-6 animate-slideInLeft">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Expense Tracking</h4>
                  <p className="text-gray-600 leading-relaxed">Use this section to record and track hospital expenses. All expenses will be included in financial reports.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 py-20 px-6">
              <div className="text-center max-w-md mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No expenses recorded</h3>
                <p className="text-gray-500">Click "Add Expense" to start recording expenses.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showCreateBillModal && <CreateBillModal patients={patients} appointments={appointments} onClose={() => setShowCreateBillModal(false)} onSave={handleCreateBill} />}
      {showPaymentModal && selectedBill && <ProcessPaymentModal bill={selectedBill} onClose={() => { setShowPaymentModal(false); setSelectedBill(null); }} onSave={handleProcessPayment} />}
      {showExpenseModal && <AddExpenseModal onClose={() => setShowExpenseModal(false)} onSave={handleAddExpense} />}
    </div>
  );
}

export default AdminBilling;