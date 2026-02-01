import React from 'react';
import { FaGlobe, FaLanguage, FaHotel, FaFileAlt } from 'react-icons/fa';

export default function International() {
    return (
        <div className="min-h-screen min-w-screen bg-white py-12 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-[#0F4C81] mb-4">International Patients</h1>
                    <p className="text-xl text-gray-600">World-class care for patients from around the globe</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#F9FBFC] p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#1F2933] mb-6 flex items-center gap-2">
                            <FaGlobe className="text-[#2FA4A9]" /> Why Choose Us?
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li>• JCI Accredited quality standards</li>
                            <li>• Interpretation services in 30+ languages</li>
                            <li>• Visa assistance and travel support</li>
                            <li>• Dedicated International Patient lounge</li>
                        </ul>
                    </div>

                    <div className="bg-[#0F4C81] text-white p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-6">Plan Your Visit</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaFileAlt className="text-2xl mt-1 opacity-80" />
                                <div>
                                    <h3 className="font-bold">Medical Visa</h3>
                                    <p className="text-sm opacity-90">We provide invitation letters and support for medical visas.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaHotel className="text-2xl mt-1 opacity-80" />
                                <div>
                                    <h3 className="font-bold">Accommodation</h3>
                                    <p className="text-sm opacity-90">Partner hotels and guest houses near the hospital.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaLanguage className="text-2xl mt-1 opacity-80" />
                                <div>
                                    <h3 className="font-bold">Language Support</h3>
                                    <p className="text-sm opacity-90">Translators available for Arabic, French, Spanish, and more.</p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-8 w-full bg-[#2FA4A9] py-3 rounded-lg font-bold hover:bg-[#278a8e] transition">
                            Contact International Desk
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
