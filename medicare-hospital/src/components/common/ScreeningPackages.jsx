// src/components/home/ScreeningPackages.jsx
import React, { useState, useEffect } from "react";
import screeningPackages from "../../../public/data/screeningPackages.json";

function ScreeningPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setIsOpen(false);
  };

  return (
    <div className="w-full mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Screening Packages
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
        {screeningPackages.slice(0, 6).map((pkg) => (
          <div
            key={pkg.id}
            className="bg-gray-200 hover:bg-gray-300 shadow-md rounded-xl p-4 flex flex-col items-center text-center border hover:shadow-lg transition"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-60 h-60 object-contain mb-3"
            />

            <div className="flex flex-row justify-between  items-center">
              <h3 className="text-lg font-semibold mb-2 ml-0 mr-7 ">{pkg.title}</h3>

              <button onClick={() => openModal(pkg)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-400 transition cursor-pointer">More Info</button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {isOpen && selectedPackage && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-200 w-full max-w-2xl rounded-xl p-6 overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">{selectedPackage.title}</h2>

            {/* Age-wise Amount */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Amount (Age Range)</h3>
              <table className="w-full text-left border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Age Range</th>
                    <th className="p-2 border">Amount (BDT)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(selectedPackage.ageWiseAmount).map(
                    ([age, amount]) => (
                      <tr key={age}>
                        <td className="p-2 border">{age}</td>
                        <td className="p-2 border">{amount}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            {/* Test Groups */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Included Tests</h3>

              <div className="space-y-4">
                {Object.entries(selectedPackage.tests).map(
                  ([groupName, items]) => (
                    <div key={groupName} className="border rounded-lg p-3">
                      <h4 className="font-semibold text-blue-700 mb-1">
                        {groupName}
                      </h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {items.map((test, index) => (
                          <li key={index}>{test}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Close */}
            <div className="text-right mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScreeningPackages;
