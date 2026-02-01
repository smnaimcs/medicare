import React from 'react';

export default function Research() {
    return (
        <div className="min-h-screen min-w-screen bg-white py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-[#0F4C81] mb-6">Research & Academics</h1>
                <p className="text-xl text-gray-700 mb-12">
                    Leading the way in medical innovation through groundbreaking research and clinical trials.
                </p>

                <div className="grid gap-8 text-left">
                    <div className="bg-[#F9FBFC] p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-[#1F2933] mb-4">Ongoing Clinical Trials</h2>
                        <p className="text-gray-600">We are currently conducting advanced trials in oncology and cardiology to develop better treatment protocols.</p>
                    </div>

                    <div className="bg-[#F9FBFC] p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-[#1F2933] mb-4">Academic Partnerships</h2>
                        <p className="text-gray-600">Collaborating with top medical universities to train the next generation of healthcare professionals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
