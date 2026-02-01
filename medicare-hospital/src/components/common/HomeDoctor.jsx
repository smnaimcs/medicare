// // // src/components/common/HomeDoctor.jsx
// // import React, { useEffect, useState, useRef } from 'react';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import patientService from '../../services/patientService';
// // import { useAuth } from '../../context/AuthContext';

// // function HomeDoctor() {
// //   const { user } = useAuth();
// //   const navigate = useNavigate();
// //   const containerRef = useRef(null);

// //   const [query, setQuery] = useState('');
// //   const [doctors, setDoctors] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [showResults, setShowResults] = useState(false);

// //   /* -------------------- Live Search -------------------- */
// //   useEffect(() => {
// //     if (!query.trim()) {
// //       setDoctors([]);
// //       setShowResults(false);
// //       return;
// //     }

// //     const delayDebounce = setTimeout(async () => {
// //       try {
// //         setLoading(true);
// //         const res = await patientService.getDoctors({ search: query });
// //         setDoctors((res.doctors || []).slice(0, 3));
// //         setShowResults(true);
// //       } catch (err) {
// //         console.error('Doctor search failed:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }, 300); // debounce

// //     return () => clearTimeout(delayDebounce);
// //   }, [query]);

// //   /* -------------------- Click Outside Close -------------------- */
// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (containerRef.current && !containerRef.current.contains(e.target)) {
// //         setShowResults(false);
// //       }
// //     };
// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => document.removeEventListener('mousedown', handleClickOutside);
// //   }, []);

// //   /* -------------------- Book Action -------------------- */
// //   const handleBookClick = () => {
// //     // if (!user) {
// //     //   const ok = window.alert(
// //     //     'Please login or register first to book appointment'
// //     //   );
// //     //   if (ok === undefined) {
// //     //     navigate('/login');
// //     //   }
// //     //   return;
// //     // }
// //     if (!user) {
// //         window.alert('Please login or register first to book appointment');
// //         navigate('/login');
// //         return;
// //       }

// //     // future: navigate to booking page
// //   };

// //   return (
// //     <div className="relative z-50" ref={containerRef}>
// //       {/* Search Bar */}
// //       <div className="max-w-xl mx-auto">
// //         <input
// //           type="text"
// //           placeholder="Search doctors by name..."
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           onFocus={() => query && setShowResults(true)}
// //           className="w-full px-6 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
// //         />
// //       </div>

// //       {/* Overlay Results */}
// //       {showResults && (
// //         <div className="absolute left-0 right-0 mt-4 bg-white shadow-2xl rounded-2xl border border-gray-200 max-w-5xl mx-auto p-6">
// //           {loading ? (
// //             <p className="text-gray-500 text-center">Searching doctors...</p>
// //           ) : doctors.length === 0 ? (
// //             <p className="text-gray-500 text-center">
// //               No doctors found
// //             </p>
// //           ) : (
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //               {doctors.map((doctor) => (
// //                 <div
// //                   key={doctor.id}
// //                   className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
// //                 >
// //                   <h3 className="font-bold text-gray-800">
// //                     Dr. {doctor.user.first_name} {doctor.user.last_name}
// //                   </h3>

// //                   <p className="text-sm text-gray-600 mt-1">
// //                     {doctor.specialization}
// //                   </p>

// //                   <p className="text-sm text-gray-600 mt-1">
// //                     Experience: {doctor.years_of_experience} years
// //                   </p>

// //                   <p className="text-sm font-semibold mt-2">
// //                     Fee: ${doctor.consultation_fee}
// //                   </p>

// //                   {/* <button
// //                     onClick={handleBookClick}
// //                     className="mt-4 w-full py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
// //                   >
// //                     Book Appointment
// //                   </button> */}
// //                   <NavLink to="/login" >Book Appointment</NavLink>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default HomeDoctor;











// // src/components/common/HomeDoctor.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import patientService from '../../services/patientService';
// import { useAuth } from '../../context/AuthContext';

// export default function HomeDoctor() {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const searchRef = useRef();

//   // Fetch doctors on input change
//   useEffect(() => {
//     if (!searchTerm.trim()) {
//       setResults([]);
//       setShowResults(false);
//       return;
//     }

//     const fetchDoctors = async () => {
//       setLoading(true);
//       try {
//         const response = await patientService.publicSearchDoctors(searchTerm);
//         // Limit results to 3
//         setResults(response.data.slice(0, 3));
//         setShowResults(true);
//       } catch (error) {
//         console.error('Doctor search failed:', error);
//         setResults([]);
//         setShowResults(false);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const debounce = setTimeout(fetchDoctors, 300); // debounce for typing
//     return () => clearTimeout(debounce);
//   }, [searchTerm]);

//   // Close results if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (searchRef.current && !searchRef.current.contains(e.target)) {
//         setShowResults(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleBookClick = () => {
//     if (!user) {
//       // Native alert
//       if (window.confirm('Please login or register first to book appointment')) {
//         navigate('/login');
//       }
//       return;
//     }

//     // Future: navigate to booking page if logged in
//     alert('Booking feature coming soon.');
//   };

//   return (
//     <div className="relative w-full max-w-2xl mx-auto mt-6" ref={searchRef}>
//       <input
//         type="text"
//         className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Search your doctor..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Overlay results */}
//       {showResults && (
//         <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 z-50">
//           {loading ? (
//             <div className="p-4 text-gray-500">Loading...</div>
//           ) : results.length === 0 ? (
//             <div className="p-4 text-gray-500">No doctor found</div>
//           ) : (
//             results.map((doc) => (
//               <div
//                 key={doc.id || doc._id}
//                 className="flex justify-between items-center p-4 border-b last:border-b-0 hover:bg-gray-100 transition"
//               >
//                 <div>
//                   <div className="font-medium text-gray-800">{doc.name}</div>
//                   <div className="text-sm text-gray-500">{doc.specialization}</div>
//                 </div>
//                 <button
//                   onClick={handleBookClick}
//                   className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm hover:shadow-lg transform hover:scale-105 transition"
//                 >
//                   Book Appointment
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// }








// src/components/common/HomeDoctor.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import patientService from '../../services/patientService';
import { useAuth } from '../../context/AuthContext';

function HomeDoctor() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  // Live search whenever searchTerm changes
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const res = await patientService.publicSearchDoctors(searchTerm);

        console.log('Full response:', res); // ← Add this
        console.log('res.data:', res.data); // ← Add this
        // setResults(res.data.slice(0, 3)); // limit results to 3
        setResults(res.doctors?.slice(0, 3) || []);
        setShowResults(true);
      } catch (err) {
        console.error('Doctor search failed:', err);
        setResults([]);
        setShowResults(false);
      } finally {
        setLoading(false);
      }
    };

    // Debounce to avoid too many API calls
    const timer = setTimeout(() => fetchDoctors(), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Handle clicking "Book Appointment"
  const handleBookClick = () => {
    if (!user) {
      // Show alert and navigate on OK
      if (window.confirm('Please login or register first to book appointment')) {
        navigate('/login');
      }
      return;
    }

    // Future: navigate to booking page for logged-in user
    // navigate(`/book-appointment/${doctorId}`);
  };

  return (
    <div className="relative w-full">
      {/* Search Bar */}
      <div className="w-full max-w-md mx-auto mt-4 relative z-50">
        <input
          type="text"
          placeholder="Search doctor by name..."
          className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Overlay Results */}
      {showResults && (
        <div className="absolute top-16 left-0 w-full max-w-md mx-auto bg-white shadow-lg rounded-lg z-50">
          {loading && (
            <div className="p-4 text-gray-500">Loading...</div>
          )}

          {!loading && results.length === 0 && (
            <div className="p-4 text-gray-500">No doctor found</div>
          )}

          {!loading && results.map((doctor) => (
            // 
            <div
            key={doctor.id}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
            >
            <h3 className="font-bold text-gray-800">
                     Dr. {doctor.user.first_name} {doctor.user.last_name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
                     {doctor.specialization}
            </p>
            <p className="text-sm text-gray-600 mt-1">
                     Experience: {doctor.years_of_experience} years
            </p>
            <p className="text-sm font-semibold mt-2">
                    Fee: ${doctor.consultation_fee}
            </p>

              {/* <div>
                <h3 className="font-medium">{doctor.name}</h3>
                <p className="text-sm text-gray-500">{doctor.specialization}</p>
              </div> */}
              <button
                onClick={handleBookClick}
                // className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:scale-105 transform transition"
                className="mt-4 w-full py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
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
