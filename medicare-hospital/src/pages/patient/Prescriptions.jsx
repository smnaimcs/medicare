import React, { useState, useEffect } from 'react';
import patientService from '../../services/patientService';
import doctorService from '../../services/doctorService';
import { FaPrescription, FaPills, FaClock, FaCalendarAlt, FaFileMedicalAlt, FaUserMd, FaSearch } from 'react-icons/fa';

function PatientPrescriptions() {
    const [prescriptions, setPrescriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchPrescriptions();
    }, []);

    // const fetchPrescriptions = async () => {
    //     try {
    //         setLoading(true);
    //         // Fetch completed appointments which contain prescriptions
    //         const response = await patientService.getAppointments({ status: 'completed' });
    //         const appointments = response.appointments || [];

    //         // Extract prescriptions from appointments
    //         const allPrescriptions = [];
    //         appointments.forEach(appointment => {
    //             if (appointment.prescriptions && appointment.prescriptions.length > 0) {
    //                 appointment.prescriptions.forEach(prescription => {
    //                     allPrescriptions.push({
    //                         ...prescription,
    //                         doctorName: `Dr. ${appointment.doctor.user.first_name} ${appointment.doctor.user.last_name}`,
    //                         specialization: appointment.doctor.specialization,
    //                         appointmentDate: appointment.appointment_date,
    //                         appointmentId: appointment.id
    //                     });
    //                 });
    //             }
    //         });

    //         // Sort by date (newest first)
    //         allPrescriptions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    //         setPrescriptions(allPrescriptions);
    //     } catch (err) {
    //         console.error('Error fetching prescriptions:', err);
    //         setError('Failed to load prescriptions. Please try again later.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const fetchPrescriptions = async () => {
        try {
            setLoading(true);

            const appointmentsResponse = await patientService.getAppointments();
            const allAppts = appointmentsResponse.appointments || [];
            const allPrescriptions = [];

            allAppts.forEach(apt => {
                if (apt.prescriptions) {
                    apt.prescriptions.forEach(p => {
                        allPrescriptions.push({
                            ...p,
                            patientName: `${apt.patient.user.first_name} ${apt.patient.user.last_name}`,
                            date: apt.appointment_date
                        });
                    });
                }
            });

            setPrescriptions(allPrescriptions);

        } catch (error) {
            console.error('Error fetching prescriptions:', error);
            setError('Failed to load prescriptions.');
        } finally {
            setLoading(false);
        }
    };


    const filteredPrescriptions = prescriptions.filter(p =>
        p.medicine_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500 font-medium">Loading your prescriptions...</p>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Header section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                            <FaPrescription className="text-3xl text-blue-600" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">My Prescriptions</h1>
                            <p className="text-gray-500 font-medium mt-1">View and manage your current medications</p>
                        </div>
                    </div>

                    <div className="relative max-w-sm w-full">
                        <input
                            type="text"
                            placeholder="Search by medicine or doctor..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                        />
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-100 text-red-700 px-6 py-4 rounded-2xl flex items-center gap-3">
                    <FaFileMedicalAlt className="text-xl" />
                    <p className="font-medium">{error}</p>
                </div>
            )}

            {filteredPrescriptions.length === 0 ? (
                <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaPills className="text-4xl text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No prescriptions found</h3>
                    <p className="text-gray-500 max-w-xs mx-auto">
                        {searchTerm ? "We couldn't find any prescriptions matching your search." : "You don't have any prescriptions on file yet."}
                    </p>
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            className="mt-6 text-blue-600 font-bold hover:underline"
                        >
                            Clear search
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredPrescriptions.map((prescription, idx) => (
                        <div
                            key={`${prescription.appointmentId}-${idx}`}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all group lg:animate-fadeIn"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center transition-colors">
                                        <FaPills className="text-2xl text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{prescription.medicine_name}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <FaUserMd className="text-blue-500 text-sm" />
                                            <p className="text-sm font-semibold text-gray-600">{prescription.doctorName}</p>
                                        </div>
                                    </div>
                                </div>
                                {prescription.is_dispensed ? (
                                    <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200 uppercase tracking-wider">Dispensed</span>
                                ) : (
                                    <span className="px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-bold rounded-full border border-amber-200 uppercase tracking-wider">Pending</span>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="bg-gray-50 rounded-2xl p-4">
                                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                                        <FaClock className="text-xs" />
                                        <p className="text-[10px] font-black uppercase tracking-widest">Dosage & Freq</p>
                                    </div>
                                    <p className="text-sm font-bold text-gray-800">{prescription.dosage} · {prescription.frequency}</p>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-4">
                                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                                        <FaCalendarAlt className="text-xs" />
                                        <p className="text-[10px] font-black uppercase tracking-widest">Duration</p>
                                    </div>
                                    <p className="text-sm font-bold text-gray-800">{prescription.duration || 'As needed'}</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-2 text-gray-500 mb-2">
                                    <FaFileMedicalAlt className="text-xs" />
                                    <p className="text-[10px] font-black uppercase tracking-widest">Instructions</p>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed italic">
                                    "{prescription.instructions || 'No specific instructions provided.'}"
                                </p>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                                <div className="text-xs text-gray-400 flex items-center gap-2">
                                    <FaCalendarAlt />
                                    Prescribed on {formatDate(prescription.created_at)}
                                </div>
                                <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-2">
                                    Download PDF
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PatientPrescriptions;
