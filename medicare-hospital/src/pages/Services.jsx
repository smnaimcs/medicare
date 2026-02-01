import React from 'react';
import { FaUserMd, FaAmbulance, FaVial, FaXRay, FaPills } from 'react-icons/fa';

export default function Services() {
    const services = [
        { title: "Outpatient Services", desc: "Consultations with expert specialists", icon: <FaUserMd /> },
        { title: "Emergency Care", desc: "24/7 trauma and emergency support", icon: <FaAmbulance /> },
        { title: "Laboratory", desc: "Advanced diagnostic testing", icon: <FaVial /> },
        { title: "Radiology", desc: "X-Ray, MRI, and CT Scan services", icon: <FaXRay /> },
        { title: "Pharmacy", desc: "24-hour in-house pharmacy", icon: <FaPills /> },
    ];

    return (
        <div className="min-h-screen min-w-screen bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-[#0F4C81] mb-8 text-center">Our Services</h1>
                <div className="space-y-4">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
                            <div className="text-3xl text-[#2FA4A9] bg-teal-50 p-4 rounded-full">{service.icon}</div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
