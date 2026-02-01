// src/components/DoctorSearchHome.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function DoctorSearchHome() {
  const [query, setQuery] = useState("");
  const [allDoctors, setAllDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 Fetch doctors same as Doctors.jsx (NO CHANGE IN BACKEND CALL)
  const fetchDoctors = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/doctors?search=${query}`
      );
      const data = await res.json();

      setAllDoctors(data || []);
      setFilteredDoctors(data || []);
    } catch (error) {
      console.log("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  // fetch doctors on first load
  useEffect(() => {
    fetchDoctors();
  }, []);

  // 🔥 Live filtering (front-end only)
  useEffect(() => {
    if (!query.trim()) {
      setFilteredDoctors(allDoctors);
      return;
    }

    const filtered = allDoctors.filter((doc) =>
      `${doc.name} ${doc.specialization}`.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredDoctors(filtered);
  }, [query, allDoctors]);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Search Bar */}
      <div className="flex items-center bg-white border rounded-full shadow px-4 py-2">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search doctors..."
          className="w-full outline-none text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Search Results Dropdown */}
      {query.length > 0 && (
        <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg border max-h-80 overflow-y-auto z-50">
          {loading ? (
            <div className="p-4 text-gray-500 text-center text-sm">
              Loading...
            </div>
          ) : filteredDoctors.length === 0 ? (
            <div className="p-4 text-gray-500 text-center text-sm">
              No doctors found
            </div>
          ) : (
            filteredDoctors.map((doc) => (
              <Link
                key={doc._id}
                to={`/doctor/${doc._id}`}
                className="block px-4 py-3 hover:bg-gray-100 transition border-b"
              >
                <div className="font-semibold text-gray-900">{doc.name}</div>
                <div className="text-sm text-gray-600">{doc.specialization}</div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default DoctorSearchHome;
