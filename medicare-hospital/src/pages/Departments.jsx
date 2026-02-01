import React from 'react';
import { FaHeartbeat, FaBrain, FaBone, FaBaby, FaRibbon, FaTooth, FaFirstAid, FaProcedures } from 'react-icons/fa';

export default function Departments() {
    const departments = [
        { name: "Cardiology", description: "Comprehensive heart care services", icon: <FaHeartbeat className="text-4xl text-red-500" /> },
        { name: "Neurology", description: "Advanced brain and spine treatment", icon: <FaBrain className="text-4xl text-purple-500" /> },
        { name: "Orthopedics", description: "Joint replacement and sports medicine", icon: <FaBone className="text-4xl text-blue-500" /> },
        { name: "Pediatrics", description: "Specialized care for children", icon: <FaBaby className="text-4xl text-green-500" /> },
        { name: "Oncology", description: "Cancer treatment and research", icon: <FaRibbon className="text-4xl text-pink-500" /> },
        { name: "Dentistry", description: "Complete dental care services", icon: <FaTooth className="text-4xl text-yellow-500" /> },
        { name: "Emergency", description: "24/7 critical care services", icon: <FaFirstAid className="text-4xl text-red-600" /> },
        { name: "ICU", description: "Intensive care units", icon: <FaProcedures className="text-4xl text-gray-500" /> },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-[#0F4C81] mb-8 text-center">Our Medical Departments</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {departments.map((dept, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="mb-4 flex justify-center">{dept.icon}</div>
                            <h2 className="text-xl font-bold text-gray-800 text-center mb-2">{dept.name}</h2>
                            <p className="text-gray-600 text-center">{dept.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
