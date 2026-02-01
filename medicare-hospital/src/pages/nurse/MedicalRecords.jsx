// // src/pages/nurse/MedicalRecords.jsx
// import React, { useState, useEffect } from 'react';
// import staffService from '../../services/staffService';

// function NurseMedicalRecords() {
//   const [medicalRecords, setMedicalRecords] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [filters, setFilters] = useState({
//     patient_id: '',
//     record_type: '',
//     date_from: '',
//     date_to: ''
//   });

//   useEffect(() => {
//     fetchMedicalRecords();
//   }, [filters]);

//   const fetchMedicalRecords = async () => {
//     try {
//       setLoading(true);
//       const response = await staffService.getMedicalRecords(filters);
//       setMedicalRecords(response.medical_records || []);
//     } catch (error) {
//       // setError('Failed to fetch medical records');
//       console.error('Error fetching medical records:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddMedicalRecord = async (recordData) => {
//     try {
//       await staffService.addMedicalRecord(recordData);
//       alert('Medical record added successfully');
//       setShowAddModal(false);
//       fetchMedicalRecords();
//     } catch (error) {
//       alert('Failed to add medical record');
//       console.error('Error adding medical record:', error);
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
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return <div className="loading">Loading medical records...</div>;
//   }

//   return (
//     <div className="page-container">
//       <div className="page-header">
//         <h1>Medical Records Management</h1>
//         <button 
//           onClick={() => setShowAddModal(true)}
//           className="btn-primary"
//         >
//           Add Medical Record
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
//           <label>Record Type:</label>
//           <select 
//             name="record_type" 
//             value={filters.record_type} 
//             onChange={handleFilterChange}
//             className="filter-select"
//           >
//             <option value="">All Types</option>
//             <option value="allergy">Allergy</option>
//             <option value="diagnosis">Diagnosis</option>
//             <option value="treatment">Treatment</option>
//             <option value="medication">Medication</option>
//             <option value="procedure">Procedure</option>
//             <option value="vaccination">Vaccination</option>
//             <option value="note">General Note</option>
//           </select>
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

//       {medicalRecords.length === 0 ? (
//         <div className="empty-state">
//           <h3>No medical records found</h3>
//           <p>No medical records match your current filters.</p>
//         </div>
//       ) : (
//         <div className="medical-records-list">
//           {medicalRecords.map((record) => (
//             <div key={record.id} className="medical-record-card">
//               <div className="record-header">
//                 <div>
//                   <h3 className="record-type">{record.record_type.toUpperCase()}</h3>
//                   <p className="record-meta">
//                     Patient #{record.patient_id} • Recorded: {formatDate(record.date_recorded || record.created_at)}
//                   </p>
//                 </div>
//                 <span className="record-badge">
//                   {record.record_type}
//                 </span>
//               </div>
              
//               <div className="record-content">
//                 <p><strong>Description:</strong></p>
//                 <p>{record.description}</p>
//               </div>

//               <div className="record-footer">
//                 <span className="record-added">
//                   Added: {formatDate(record.created_at)}
//                 </span>
//                 {record.recorded_by && (
//                   <span className="record-by">
//                     By: Nurse #{record.recorded_by}
//                   </span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Add Medical Record Modal */}
//       {showAddModal && (
//         <AddMedicalRecordModal
//           onClose={() => setShowAddModal(false)}
//           onSave={handleAddMedicalRecord}
//         />
//       )}
//     </div>
//   );
// }

// // Add Medical Record Modal Component
// function AddMedicalRecordModal({ onClose, onSave }) {
//   const [formData, setFormData] = useState({
//     patient_id: '',
//     record_type: 'allergy',
//     description: '',
//     date_recorded: new Date().toISOString().split('T')[0]
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
    
//     if (!formData.patient_id || !formData.description) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     setLoading(true);
//     await onSave(formData);
//     setLoading(false);
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-header">
//           <h2>Add Medical Record</h2>
//           <button onClick={onClose} className="btn-close">×</button>
//         </div>

//         <form onSubmit={handleSubmit} className="medical-record-form">
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

//           <div className="form-group">
//             <label>Record Type *</label>
//             <select
//               name="record_type"
//               value={formData.record_type}
//               onChange={handleChange}
//               required
//             >
//               <option value="allergy">Allergy</option>
//               <option value="diagnosis">Diagnosis</option>
//               <option value="treatment">Treatment</option>
//               <option value="medication">Medication</option>
//               <option value="procedure">Procedure</option>
//               <option value="vaccination">Vaccination</option>
//               <option value="note">General Note</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Date Recorded</label>
//             <input
//               type="date"
//               name="date_recorded"
//               value={formData.date_recorded}
//               onChange={handleChange}
//               max={new Date().toISOString().split('T')[0]}
//             />
//           </div>

//           <div className="form-group">
//             <label>Description *</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Enter detailed description of the medical record..."
//               rows="6"
//               required
//             />
//           </div>

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

// export default NurseMedicalRecords;

























// v1.0 – initial redesign: gray palette, staggered animations, record-type badges
// src/pages/nurse/MedicalRecords.jsx
import React, { useState, useEffect } from 'react';
import staffService from '../../services/staffService';

// ─── vanilla CSS: only @keyframes + delay helpers (Tailwind can't do these) ──
const ANIM_STYLES = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes modalSlideIn {
    from { opacity: 0; transform: scale(0.96) translateY(16px); }
    to   { opacity: 1; transform: scale(1)    translateY(0); }
  }
  .anim-fadeInUp     { animation: fadeInUp 0.5s ease-out both; }
  .anim-fadeIn       { animation: fadeIn 0.3s ease-out both; }
  .anim-modalSlideIn { animation: modalSlideIn 0.3s ease-out both; }
  .delay-50  { animation-delay: 0.05s; }
  .delay-100 { animation-delay: 0.1s;  }
  .delay-150 { animation-delay: 0.15s; }
  .delay-200 { animation-delay: 0.2s;  }
  .delay-250 { animation-delay: 0.25s; }
  .delay-300 { animation-delay: 0.3s;  }
  .delay-350 { animation-delay: 0.35s; }
  .delay-400 { animation-delay: 0.4s;  }
  .delay-450 { animation-delay: 0.45s; }
  .delay-500 { animation-delay: 0.5s;  }
`;

// ─── tiny reusable Icon primitive (same pattern as Attendance.jsx) ────────────
const Icon = ({ d, cls = 'w-5 h-5' }) => (
  <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d={d} />
  </svg>
);
const ClipboardIcon = (p) => <Icon {...p} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />;
const PlusIcon      = (p) => <Icon {...p} d="M12 4v16m8-8H4" />;
const FilterIcon    = (p) => <Icon {...p} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />;
const CalIcon       = (p) => <Icon {...p} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
const UserIcon      = (p) => <Icon {...p} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;
const DocIcon       = (p) => <Icon {...p} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
const ExclamIcon    = (p) => <Icon {...p} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />;

// ─── record-type → badge colour map ────────────────────────────────────────
const TYPE_BADGE = {
  allergy:      { bg: 'bg-red-100',    text: 'text-red-700',    border: 'border-red-200',    accent: 'bg-red-400' },
  diagnosis:    { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', accent: 'bg-orange-400' },
  treatment:    { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200', accent: 'bg-yellow-400' },
  medication:   { bg: 'bg-green-100',  text: 'text-green-700',  border: 'border-green-200',  accent: 'bg-green-400' },
  procedure:    { bg: 'bg-gray-100',   text: 'text-gray-700',   border: 'border-gray-300',   accent: 'bg-gray-400' },
  vaccination:  { bg: 'bg-emerald-100',text: 'text-emerald-700',border: 'border-emerald-200',accent: 'bg-emerald-400' },
  note:         { bg: 'bg-gray-100',   text: 'text-gray-600',   border: 'border-gray-200',   accent: 'bg-gray-300' },
};
const getType = (t) => TYPE_BADGE[t] || TYPE_BADGE.note;

function NurseMedicalRecords() {
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [filters, setFilters] = useState({
    patient_id: '',
    record_type: '',
    date_from: '',
    date_to: ''
  });

  // inject keyframes once
  useEffect(() => {
    const tag = document.createElement('style');
    tag.textContent = ANIM_STYLES;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  useEffect(() => { fetchMedicalRecords(); }, [filters]);

  const fetchMedicalRecords = async () => {
    try {
      const response = await staffService.getMedicalRecords(filters);
      setMedicalRecords(response.medical_records || []);
    } catch (error) {
      // setError('Failed to fetch medical records');   ← kept commented exactly as original
      console.error('Error fetching medical records:', error);
    } finally {
      setPageLoading(false);
    }
  };

  const handleAddMedicalRecord = async (recordData) => {
    try {
      await staffService.addMedicalRecord(recordData);
      alert('Medical record added successfully');
      setShowAddModal(false);
      fetchMedicalRecords();
    } catch (error) {
      alert('Failed to add medical record');
      console.error('Error adding medical record:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // ─── loading ──────────────────────────────────────────────────────────────
  if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center space-y-4">
          <div className="relative w-14 h-14 mx-auto">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
            <div className="absolute inset-0 border-4 border-gray-600 border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-gray-500 font-medium text-sm">Loading medical records...</p>
        </div>
      </div>
    );
  }

  // ─── main render ──────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-5 md:p-8">
      <div className="max-w-6xl mx-auto space-y-5">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="anim-fadeInUp opacity-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-11 bg-gradient-to-b from-gray-600 to-gray-400 rounded-full" />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
                  Medical Records
                </h1>
                <p className="text-gray-400 text-sm ml-0.5">Manage patient medical records</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-105"
            >
              <PlusIcon cls="w-4 h-4" /> Add Medical Record
            </button>
          </div>
        </div>

        {/* ── Filters ─────────────────────────────────────────────────────── */}
        <div className="anim-fadeInUp opacity-0 delay-100 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <FilterIcon cls="w-4 h-4 text-gray-400" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Filters</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Patient ID */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Patient ID</label>
              <input
                type="number"
                name="patient_id"
                value={filters.patient_id}
                onChange={handleFilterChange}
                placeholder="e.g. 12345"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            {/* Record Type */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Record Type</label>
              <select
                name="record_type"
                value={filters.record_type}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              >
                <option value="">All Types</option>
                <option value="allergy">Allergy</option>
                <option value="diagnosis">Diagnosis</option>
                <option value="treatment">Treatment</option>
                <option value="medication">Medication</option>
                <option value="procedure">Procedure</option>
                <option value="vaccination">Vaccination</option>
                <option value="note">General Note</option>
              </select>
            </div>
            {/* From Date */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">From Date</label>
              <input
                type="date"
                name="date_from"
                value={filters.date_from}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            {/* To Date */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">To Date</label>
              <input
                type="date"
                name="date_to"
                value={filters.date_to}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* ── Error ───────────────────────────────────────────────────────── */}
        {error && (
          <div className="flex items-center gap-3 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
            <ExclamIcon cls="w-5 h-5 text-red-500 shrink-0" />
            <span className="text-red-700 font-medium text-sm">{error}</span>
          </div>
        )}

        {/* ── Summary strip (total count) ─────────────────────────────────── */}
        <div className="anim-fadeInUp opacity-0 delay-150 flex items-center justify-between">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            {medicalRecords.length} Record{medicalRecords.length !== 1 ? 's' : ''} Found
          </span>
        </div>

        {/* ── Records list / Empty state ──────────────────────────────────── */}
        {medicalRecords.length === 0 ? (
          <div className="anim-fadeInUp opacity-0 delay-200 bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <ClipboardIcon cls="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">No medical records found</h3>
            <p className="text-gray-400 text-sm mt-1">No medical records match your current filters.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {medicalRecords.map((record, i) => {
              const type = getType(record.record_type);
              return (
                <div
                  key={record.id}
                  className={`anim-fadeInUp opacity-0 delay-${Math.min((i + 1) * 50, 500)} bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                >
                  {/* colour accent bar – unique per record type */}
                  <div className={`h-1 ${type.accent}`} />

                  <div className="p-5">
                    {/* ── card header ─────────────────────────────────────── */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-lg ${type.bg} flex items-center justify-center`}>
                          <ClipboardIcon cls={`w-5 h-5 ${type.text}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 uppercase text-sm tracking-wide">
                            {record.record_type}
                          </h3>
                          <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5">
                            <UserIcon cls="w-3 h-3" />
                            Patient #{record.patient_id}
                            <span className="text-gray-300">•</span>
                            <CalIcon cls="w-3 h-3" />
                            {formatDate(record.date_recorded || record.created_at)}
                          </p>
                        </div>
                      </div>
                      {/* type badge */}
                      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold capitalize border ${type.bg} ${type.text} ${type.border}`}>
                        {record.record_type}
                      </span>
                    </div>

                    {/* ── description box ───────────────────────────────── */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <DocIcon cls="w-3.5 h-3.5" /> Description
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">{record.description}</p>
                    </div>

                    {/* ── footer meta ────────────────────────────────────── */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <CalIcon cls="w-3.5 h-3.5" />
                        <span>Added: {formatDate(record.created_at)}</span>
                      </div>
                      {record.recorded_by && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <UserIcon cls="w-3.5 h-3.5" />
                          <span>By: Nurse #{record.recorded_by}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Add Medical Record Modal ────────────────────────────────────── */}
      {showAddModal && (
        <AddMedicalRecordModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddMedicalRecord}
        />
      )}
    </div>
  );
}

// ─── Add Medical Record Modal ─────────────────────────────────────────────────
function AddMedicalRecordModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    patient_id: '',
    record_type: 'allergy',
    description: '',
    date_recorded: new Date().toISOString().split('T')[0]
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.patient_id || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    await onSave(formData);
    // onSave closes the modal via the parent – do NOT touch local state after this point
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4 anim-fadeIn opacity-0">
      <div className="anim-modalSlideIn opacity-0 bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-gray-200 flex flex-col">

        {/* header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" cls="w-5 h-5 text-gray-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-800">Add Medical Record</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:rotate-90">
            <Icon d="M6 18L18 6M6 6l12 12" cls="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* form body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 bg-gradient-to-br from-gray-50 to-white flex-1">
          {/* patient id + record type side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Patient ID *</label>
              <input
                type="number"
                name="patient_id"
                value={formData.patient_id}
                onChange={handleChange}
                placeholder="Enter patient ID"
                required
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Record Type *</label>
              <select
                name="record_type"
                value={formData.record_type}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              >
                <option value="allergy">Allergy</option>
                <option value="diagnosis">Diagnosis</option>
                <option value="treatment">Treatment</option>
                <option value="medication">Medication</option>
                <option value="procedure">Procedure</option>
                <option value="vaccination">Vaccination</option>
                <option value="note">General Note</option>
              </select>
            </div>
          </div>

          {/* date recorded */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Date Recorded</label>
            <input
              type="date"
              name="date_recorded"
              value={formData.date_recorded}
              onChange={handleChange}
              max={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* description */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter detailed description of the medical record..."
              rows="6"
              required
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          {/* actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Adding...' : 'Add Record'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NurseMedicalRecords;