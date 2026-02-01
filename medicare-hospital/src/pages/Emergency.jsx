import React from 'react';
import { FaAmbulance, FaPhoneAlt, FaHospital, FaHeartbeat } from 'react-icons/fa';

export default function Emergency() {
    const services = [
        { title: "Trauma Center", desc: "Level 1 trauma care for critical injuries", icon: <FaAmbulance /> },
        { title: "Cardiac Emergency", desc: "24/7 care for heart attacks and strokes", icon: <FaHeartbeat /> },
        { title: "Pediatric Emergency", desc: "Specialized urgent care for children", icon: <FaHospital /> },
        { title: "Ambulance Service", desc: "Rapid response medical transport", icon: <FaAmbulance /> },
    ];

    return (
        <div className="min-h-screen min-w-screen bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-[#C62828] mb-4 flex justify-center items-center gap-3">
                        <FaAmbulance /> Emergency Services
                    </h1>
                    <p className="text-2xl text-gray-800 font-semibold">
                        For Immediate Assistance Call: <span className="text-[#C62828]">+880 1777-123456</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#C62828] hover:shadow-xl transition">
                            <div className="mb-6 flex justify-center w-16 h-16 bg-red-50 rounded-full items-center mx-auto">
                                <div className="text-3xl text-[#C62828]">{service.icon}</div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 text-center mb-2">{service.title}</h2>
                            <p className="text-gray-600 text-center">{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
                    <h2 className="text-2xl font-bold text-[#0F4C81] mb-4">When to Visit the ER?</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto mt-8">
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Chest pain or difficulty breathing</li>
                            <li>Severe bleeding or trauma</li>
                            <li>Loss of consciousness</li>
                        </ul>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Sudden severe headache or confusion</li>
                            <li>Broken bones or deep cuts</li>
                            <li>Severe burns</li>
                        </ul>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Seizures or convulsions</li>
                            <li>Severe allergic reactions</li>
                            <li>Poisoning or drug overdose</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
