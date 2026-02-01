import React from 'react';
import { FaBriefcase, FaUserNurse, FaStethoscope } from 'react-icons/fa';

export default function Careers() {
    const openings = [
        { title: "Senior Cardiologist", type: "Full-Time", dept: "Cardiology", icon: <FaStethoscope /> },
        { title: "ICU Nurse", type: "Shift-Based", dept: "Nursing", icon: <FaUserNurse /> },
        { title: "Medical Officer", type: "Full-Time", dept: "Emergency", icon: <FaBriefcase /> },
    ];

    return (
        <div className="min-h-screen min-w-screen bg-gray-50 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#0F4C81] mb-4">Join Our Team</h1>
                    <p className="text-xl text-gray-600">Build a rewarding career at MediCare Hospital</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-8 bg-[#0F4C81] text-white">
                        <h2 className="text-2xl font-bold">Current Openings</h2>
                        <p className="opacity-90">We are always looking for talented individuals.</p>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {openings.map((job, i) => (
                            <div key={i} className="p-6 hover:bg-gray-50 transition flex justify-between items-center group">
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-50 p-3 rounded-full text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white transition">
                                        {job.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">{job.title}</h3>
                                        <p className="text-gray-500 text-sm">{job.dept} • {job.type}</p>
                                    </div>
                                </div>
                                <button className="px-6 py-2 border border-[#2FA4A9] text-[#2FA4A9] rounded-lg font-semibold hover:bg-[#2FA4A9] hover:text-white transition">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 text-center bg-gray-50">
                        <p className="text-gray-600">Don't see a matching role? Send your CV to <a href="mailto:careers@medicare.com" className="text-[#2FA4A9] font-bold">careers@medicare.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
