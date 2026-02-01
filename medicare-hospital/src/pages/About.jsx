import React from 'react';
import { FaHospital, FaHistory, FaAward, FaHandHoldingHeart } from 'react-icons/fa';

export default function About() {
    return (
        <div className="min-h-screen min-w-screen bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-[#0F4C81] mb-6">About MediCare Hospital</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A legacy of healing, a future of hope. We have been serving the community with world-class healthcare for over 25 years.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="bg-[#F9FBFC] p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-[#1F2933] mb-4 flex items-center gap-2">
                            <FaHistory className="text-[#2FA4A9]" /> Our History
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Founded in 1998, MediCare started as a small clinic and has grown into a 500-bed multi-specialty tertiary care hospital. We are driven by a commitment to clinical excellence and patient-centric care.
                        </p>
                    </div>
                    <div className="bg-[#0F4C81] p-8 rounded-2xl text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <FaAward className="text-white" /> Our Excellence
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            Recognized as the "Best Hospital in the Region" for three consecutive years. JCI accredited since 2010. We combine cutting-edge technology with compassionate care.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#1F2933] mb-8">Our Core Values</h2>
                    <div className="grid sm:grid-cols-3 gap-8">
                        {[
                            { title: "Compassion", desc: "We treat everyone with kindness and empathy.", icon: <FaHandHoldingHeart className="text-4xl text-[#C62828]" /> },
                            { title: "Integrity", desc: "We adhere to the highest ethical standards.", icon: <FaAward className="text-4xl text-[#2FA4A9]" /> },
                            { title: "Excellence", desc: "We strive for the best outcomes in everything we do.", icon: <FaHospital className="text-4xl text-[#0F4C81]" /> }
                        ].map((val, i) => (
                            <div key={i} className="p-6 bg-white shadow-lg rounded-xl border border-gray-100">
                                <div className="mb-4 flex justify-center">{val.icon}</div>
                                <h3 className="font-bold text-xl mb-2 text-gray-800">{val.title}</h3>
                                <p className="text-gray-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
