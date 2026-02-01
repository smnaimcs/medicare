import React from 'react';
import { FaUserTie } from 'react-icons/fa';

export default function Leadership() {
    const leaders = [
        { name: "Dr. Ahmed Khan", role: "Medical Director", desc: "Cardiologist with 30 years experience", image: "https://via.placeholder.com/150" },
        { name: "Sarah Uddin", role: "Chief Executive Officer", desc: "Healthcare management expert", image: "https://via.placeholder.com/150" },
        { name: "Dr. Rahman Ali", role: "Head of Surgery", desc: "Pioneer in robotic surgery", image: "https://via.placeholder.com/150" },
        { name: "Ms. Fatima Begum", role: "Director of Nursing", desc: "Champion of patient care quality", image: "https://via.placeholder.com/150" }
    ];

    return (
        <div className="min-h-screen min-w-screen bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-[#0F4C81] mb-6 text-center">Our Leadership</h1>
                <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                    Guided by visionary leaders dedicated to redefining healthcare standards.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {leaders.map((leader, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition text-center p-6 border border-gray-100">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <FaUserTie className="text-5xl text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2933]">{leader.name}</h3>
                            <p className="text-[#2FA4A9] font-semibold mb-2">{leader.role}</p>
                            <p className="text-sm text-gray-600">{leader.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
