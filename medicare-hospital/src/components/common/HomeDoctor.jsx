import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import patientService from "../../services/patientService";
import { FaUserMd, FaSearch } from "react-icons/fa";

function HomeDoctor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setLoading(true);
      setShowResults(true);

      const timer = setTimeout(() => {
        patientService
          .publicSearchDoctors(searchTerm)
          .then((res) => {
            setResults(res.data || []);
            setLoading(false);
          })
          .catch((err) => {
            console.error('Doctor search error:', err);
            setResults([]);
            setLoading(false);
          });
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setShowResults(false);
      setResults([]);
    }
  }, [searchTerm]);

  const handleBookClick = () => {
    navigate("/appointment-form");
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search doctor by name..."
          className="w-full px-4 py-2.5 pl-10 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Overlay Results */}
      {showResults && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 shadow-xl rounded-lg z-50 overflow-hidden max-h-96 overflow-y-auto">
          {loading && (
            <div className="p-4 text-gray-600 text-center">Searching...</div>
          )}

          {!loading && results.length === 0 && (
            <div className="p-4 text-gray-600 text-center">No doctor found</div>
          )}

          {!loading && results.map((doctor) => (
            <div
              key={doctor.id}
              className="border-b border-gray-100 last:border-0 p-4 hover:bg-[#F9FBFC] transition duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-[#E6EDF3] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserMd className="text-xl text-[#0F4C81]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2933]">
                    Dr. {doctor.user.first_name} {doctor.user.last_name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {doctor.specialization}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3">
                <p className="text-xs font-semibold text-[#2FA4A9] uppercase tracking-wider">
                  {doctor.years_of_experience} Years Experience
                </p>
                <p className="text-sm font-bold text-[#1F2933]">
                  ${doctor.consultation_fee}
                </p>
              </div>

              <button
                onClick={handleBookClick}
                className="w-full py-2 rounded-lg bg-[#2FA4A9] text-white text-sm font-semibold hover:bg-[#278a8e] transition"
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeDoctor;
