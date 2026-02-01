import React from 'react';
import { FaEye, FaBullseye } from 'react-icons/fa';

export default function Mission() {
    return (
        <div className="min-h-screen min-w-screen bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-[#0F4C81] mb-12 text-center">Mission & Vision</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-10 rounded-2xl shadow-lg border-t-8 border-[#2FA4A9]">
                        <div className="flex justify-center mb-6">
                            <div className="bg-teal-50 p-4 rounded-full">
                                <FaBullseye className="text-5xl text-[#2FA4A9]" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-[#1F2933] text-center mb-4">Our Mission</h2>
                        <p className="text-gray-600 text-center text-lg leading-relaxed">
                            "To provide accessible, affordable, and high-quality healthcare services to all, preserving the dignity of every individual and promoting healing through compassionate care and advanced medicine."
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-2xl shadow-lg border-t-8 border-[#0F4C81]">
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-50 p-4 rounded-full">
                                <FaEye className="text-5xl text-[#0F4C81]" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-[#1F2933] text-center mb-4">Our Vision</h2>
                        <p className="text-gray-600 text-center text-lg leading-relaxed">
                            "To be the most trusted healthcare institution globally, recognized for clinical excellence, innovation, and a patient-first approach that sets the benchmark for medical care."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
