import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="min-h-screen min-w-screen bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-[#0F4C81] mb-12 text-center">Contact & Location</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-[#F9FBFC] p-8 rounded-2xl border border-gray-200">
                            <h2 className="text-2xl font-bold text-[#1F2933] mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-[#2FA4A9]">
                                        <FaMapMarkerAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Hospital Address</h3>
                                        <p className="text-gray-600">123 Medical Avenue,<br />Dhaka, Bangladesh</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-[#2FA4A9]">
                                        <FaPhoneAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Phone Numbers</h3>
                                        <p className="text-gray-600">General: +880 1777-123456</p>
                                        <p className="text-[#C62828] font-semibold">Emergency: +880 1777-123456</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-[#2FA4A9]">
                                        <FaEnvelope className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Email</h3>
                                        <p className="text-gray-600">info@medicare.com</p>
                                        <p className="text-gray-600">appointments@medicare.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-[#2FA4A9]">
                                        <FaClock className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Opening Hours</h3>
                                        <p className="text-gray-600">Emergency: 24/7</p>
                                        <p className="text-gray-600">OPD: 8:00 AM - 9:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-full min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-inner relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                        <div className="relative z-10 text-center p-6">
                            <FaMapMarkerAlt className="text-6xl text-gray-400 mx-auto mb-4" />
                            <p className="text-xl font-bold text-gray-500">Google Map Integration</p>
                            <p className="text-gray-400">Map view will be embedded here</p>
                        </div>
                        {/* 
                    To embed a real map, replace above div with:
                    <iframe 
                        src="https://www.google.com/maps/embed?..." 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                 */}
                    </div>
                </div>
            </div>
        </div>
    );
}
