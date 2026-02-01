// // second..
// import React, { useEffect, useState, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import heroImg from '../../assets/hero.png'
// import { FaUserMd, FaHospital, FaHeartbeat, FaTeethOpen, FaMapMarkerAlt, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
// import { TbCalendarClock } from "react-icons/tb";
// import { MdOutlineContactSupport, MdOutlineBloodtype, MdFaceRetouchingNatural, MdFamilyRestroom, MdLocalHospital, MdEmergency } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import { GiBrain, GiBoneKnife, GiEarbuds } from "react-icons/gi";
// import Doctors from "../../pages/patient/Doctors";
// import HomeDoctor from "./HomeDoctor";

// // import patientService from "../services/patientService.js";
// import patientService from "../../services/patientService"
// import { useAuth } from "../../context/AuthContext";

// // Mock data
// const FAKE_STATS = {
//   successRate: 98,
//   totalPatients: 50000,
//   rating: 4.8,
//   doctors: 150
// };

// const MOCK_REVIEWS = [
//   { review_id: 1, patient_name: "Sarah Johnson", comment: "Exceptional care and professionalism. The staff went above and beyond during my treatment.", rating: 5, review_date: "2024-12-15" },
//   { review_id: 2, patient_name: "Michael Chen", comment: "State-of-the-art facilities and compassionate doctors. Highly recommend!", rating: 5, review_date: "2024-12-20" },
//   { review_id: 3, patient_name: "Emma Williams", comment: "Quick diagnosis and effective treatment. Thank you to the entire team!", rating: 4.5, review_date: "2024-12-28" }
// ];

// const sections = [
//   {
//     title: "Map",
//     icon: <FaMapMarkerAlt className="text-7xl" />,
//     content: (
//       <div className="space-y-2">
//         <p>121/C Green Road, Dhaka</p>
//         <p>Near City Hospital</p>
//         <p>Open: 24/7</p>
//         <p>Google Maps link</p>
//       </div>
//     ),
//   },
//   {
//     title: "More Info",
//     icon: <FaInfoCircle className="text-7xl" />,
//     content: (
//       <div className="space-y-2">
//         <p>About Our Hospital</p>
//         <p>Services & Departments</p>
//         <p>Doctors & Specialists</p>
//         <p>Health Packages & Screening</p>
//       </div>
//     ),
//   },
//   {
//     title: "Contact Us",
//     icon: <FaPhoneAlt className="text-7xl" />,
//     content: (
//       <div className="space-y-2">
//         <p>Phone: +880 1777-123456</p>
//         <p>Email: info@medicarehospital.com</p>
//         <p>Support 24/7 available</p>
//         <p>Emergency: +880 1999-654321</p>
//       </div>
//     ),
//   },
// ];

// // // Appointment Modal Component
// // const AppointmentModal = ({ open, onClose, doctor }) => {
// //   const ref = useRef(null);
// //   useEffect(() => { if (open) ref.current?.focus(); }, [open]);
// //   if (!open) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
// //       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
// //       <motion.div
// //         initial={{ scale: 0.9, opacity: 0 }}
// //         animate={{ scale: 1, opacity: 1 }}
// //         exit={{ scale: 0.9, opacity: 0 }}
// //         className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 z-10"
// //       >
// //         <div className="flex items-center justify-between mb-6">
// //           <div>
// //             <h3 className="text-2xl font-bold text-gray-900">Request Appointment</h3>
// //             <p className="text-sm text-gray-500 mt-1">Fill in your details below</p>
// //           </div>
// //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
// //         </div>

// //         <div className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
// //             <input ref={ref} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-2">Phone or Email</label>
// //             <input className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="your@email.com or +880..." />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date & Time</label>
// //             <input type="datetime-local" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-2">Doctor</label>
// //             <input className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl outline-none" value={doctor ? `${doctor.name} — ${doctor.specialization}` : "Any available doctor"} readOnly />
// //           </div>
// //         </div>

// //         <div className="mt-8 flex gap-3">
// //           <button onClick={onClose} className="flex-1 px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition">Cancel</button>
// //           <button onClick={() => { alert("Appointment Requested 🎉 (demo)"); onClose(); }} className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition">Request Appointment</button>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // // doctor search modal
// // const DoctorSearchModal = () => {
// //   if (!open) return null;
// // 	return(
// // 		<Doctors></Doctors>
// // 		);
// // };

// const departments = [
//   { name: "Cardiology", icon: <FaHeartbeat className="text-4xl" />, color: "from-gray-700 to-gray-800" },
//   { name: "Neurology", icon: <GiBrain className="text-4xl" />, color: "from-slate-700 to-slate-800" },
//   { name: "Mother & Child", icon: <MdFamilyRestroom className="text-4xl" />, color: "from-gray-600 to-gray-700" },
//   { name: "Orthopedics", icon: <GiBoneKnife className="text-4xl" />, color: "from-zinc-700 to-zinc-800" },
//   { name: "Renal Care", icon: <MdOutlineBloodtype className="text-4xl" />, color: "from-gray-800 to-gray-900" },
//   { name: "Dentistry", icon: <FaTeethOpen className="text-4xl" />, color: "from-slate-600 to-slate-700" },
//   { name: "Dermatology", icon: <MdFaceRetouchingNatural className="text-4xl" />, color: "from-gray-600 to-gray-800" },
//   { name: "ENT", icon: <GiEarbuds className="text-4xl" />, color: "from-zinc-600 to-zinc-700" },
//   { name: "ICU", icon: <MdLocalHospital className="text-4xl" />, color: "from-slate-800 to-slate-900" },
//   { name: "Medicine", icon: <MdEmergency className="text-4xl" />, color: "from-gray-700 to-gray-900" },
// ];

// export default function HomeModern() {
//   const [statsAnimated, setStatsAnimated] = useState({ successRate: 0, totalPatients: 0, rating: 0, doctors: 0 });
//   const [reviews] = useState(MOCK_REVIEWS);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // const [modalOpen, setModalOpen] = useState(false);
//   const [showAppointmentModal, setShowAppointmentModal] = useState(false);
//   // const [showDoctorModal, setShowDoctorModal] = useState(false);

//   const [email, setEmail] = useState("");

//   // Autoplay slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % reviews.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [reviews.length]);

//   // Animate stats
//   useEffect(() => {
//     const animateValue = (key, target, speed) => {
//       let current = 0;
//       const interval = setInterval(() => {
//         current += Math.ceil(target / speed);
//         if (current >= target) { current = target; clearInterval(interval); }
//         setStatsAnimated((p) => ({ ...p, [key]: current }));
//       }, 25);
//     };
//     animateValue("successRate", FAKE_STATS.successRate, 40);
//     animateValue("totalPatients", FAKE_STATS.totalPatients, 70);
//     animateValue("rating", FAKE_STATS.rating * 10, 20);
//     animateValue("doctors", FAKE_STATS.doctors, 30);
//   }, []);

//   return (
//     // <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100">
//     <div className="min-h-screen bg-gray-20 text-gray-800 overflow-auto">

//       {/* NAVBAR */}
//       <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-300 shadow-sm min-w-screen">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <Link to="/" className="flex items-center gap-3 group">
//             <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition transform group-hover:scale-105">
//             <FaHospital className="text-xl" />
              
//             </div>
//             <div>
//               <div className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">MediCare Hospital</div>
//               <div className="text-xs text-gray-500 font-medium">Compassion · Care · Excellence</div>
//             </div>
//           </Link>
//           <div className="min-w-1/2">  
//                   <HomeDoctor></HomeDoctor>
//             </div>
          
//           <nav className="hidden md:flex gap-6 items-center">
//              <NavLink to="/doctors" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">Doctors</NavLink>
//             <NavLink to="/departments" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">Departments</NavLink> 
//             {/* <NavLink to="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">Contact</NavLink>  */}
            
//             <NavLink to="/login" className="px-6 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition">Login</NavLink>
//           </nav>
          
//           <div className="md:hidden">
//             <NavLink to="/login" className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm font-medium">Login</NavLink>
//           </div>
//         </div>
//       </header>

//       {/* HERO SECTION */}
//       <section
//   className="pt-10 relative bg-black/30 bg-blend-darken pb-16 overflow-hidden"
//   style={{
//     backgroundImage: `url(${heroImg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}>
//       {/* <section className="relative py-20 overflow-hidden"> */}
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-slate-800/5 to-transparent"></div>
//         <div className="absolute top-0 right-0 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl"></div>
        
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="text-center max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-semibold mb-6">
//                 ✨ Trusted Healthcare Since 2010
//               </div>
//               <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
//                 World-class care,<br />
//                 <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">close to home</span>
//               </h1>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
//                 Modern diagnostics, experienced doctors & personalized treatment plans — available 24/7 for your family's health
//               </p>
//             </motion.div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
//               {[
//                 { key: "successRate", label: "Success Rate", suffix: "%" },
//                 { key: "totalPatients", label: "Patients Treated", suffix: "+" },
//                 { key: "rating", label: "Rating", suffix: "★" },
//                 { key: "doctors", label: "Expert Doctors", suffix: "" }
//               ].map((stat, i) => (
//                 <motion.div
//                   key={stat.key}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition transform hover:scale-105"
//                 >
//                   <div className="text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
//                     {stat.key === "rating" 
//                       ? (statsAnimated[stat.key] / 10).toFixed(1) 
//                       : stat.key === "totalPatients" 
//                       ? statsAnimated[stat.key].toLocaleString() 
//                       : statsAnimated[stat.key]}{stat.suffix}
//                   </div>
//                   <div className="text-sm text-gray-600 font-medium mt-2">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* QUICK ACTIONS */}
// <section className="py-12 bg-white">
//   <div className="max-w-7xl mx-auto px-6">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {[
//         { title: "Find a Doctor", icon: <FaUserMd className="text-4xl" />, action: "modal", gradient: "from-gray-700 to-gray-800" },
//         { title: "Book Appointment", icon: <TbCalendarClock className="text-4xl" />, action: "modal", gradient: "from-gray-600 to-gray-700" },
//         { title: "Send Inquiry", icon: <MdOutlineContactSupport className="text-4xl" />, link: "/contact", gradient: "from-slate-700 to-slate-800" },
//         { title: "Emergency Call", icon: <IoCall className="text-4xl" />, link: "/contact", gradient: "from-gray-800 to-gray-900" }
//       ].map((item, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5, delay: i * 0.1 }}
//         >
//           {item.action === "modal" ? (
//             <button
//             onClick={() => {
//               if (item.title === "Find a Doctor") setShowDoctorModal(true);
//               else if (item.title === "Book Appointment") setShowAppointmentModal(true);
//             }}
//               // onClick={() => setModalOpen(true)}
//               className={`group relative block w-full bg-gradient-to-br ${item.gradient} rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden`}
//             >
//               <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition"></div>
//               <div className="relative flex flex-col items-center text-center gap-4">
//                 <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">{item.icon}</div>
//                 <div className="text-lg font-bold">{item.title}</div>
//               </div>
//             </button>
//           ) : (
//             <Link
//               to={item.link}
//               className={`group relative block bg-gradient-to-br ${item.gradient} rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden`}
//             >
//               <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition"></div>
//               <div className="relative flex flex-col items-center text-center gap-4">
//                 <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">{item.icon}</div>
//                 <div className="text-lg font-bold">{item.title}</div>
//               </div>
//             </Link>
//           )}
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>

// {/* <AppointmentModal
//       open={showAppointmentModal}
//       onClose={() => setShowAppointmentModal(false)}
//     /> */}

//     {/* <Doctors
//       open={showDoctorModal}
//       onClose={() => setShowDoctorModal(false)}
//     /> */}


//       {/* DEPARTMENTS */}
//       <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-100">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Departments</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive healthcare services across multiple specialties</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {[
//               { name: "Cardiology", icon: <FaHeartbeat className="text-4xl" />, color: "from-gray-700 to-gray-800" },
//               { name: "Neurology", icon: <GiBrain className="text-4xl" />, color: "from-slate-700 to-slate-800" },
//               { name: "Mother & Child", icon: <MdFamilyRestroom className="text-4xl" />, color: "from-gray-600 to-gray-700" },
//               { name: "Orthopedics", icon: <GiBoneKnife className="text-4xl" />, color: "from-zinc-700 to-zinc-800" },
//               { name: "Renal Care", icon: <MdOutlineBloodtype className="text-4xl" />, color: "from-gray-800 to-gray-900" },
//               { name: "Dentistry", icon: <FaTeethOpen className="text-4xl" />, color: "from-slate-600 to-slate-700" },
//               { name: "Dermatology", icon: <MdFaceRetouchingNatural className="text-4xl" />, color: "from-gray-600 to-gray-800" },
//               { name: "ENT", icon: <GiEarbuds className="text-4xl" />, color: "from-zinc-600 to-zinc-700" },
//               { name: "ICU", icon: <MdLocalHospital className="text-4xl" />, color: "from-slate-800 to-slate-900" },
//               { name: "Medicine", icon: <MdEmergency className="text-4xl" />, color: "from-gray-700 to-gray-900" }
//             ].map((dept, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.4, delay: i * 0.05 }}
//                 className="group cursor-pointer"
//               >
//                 <div className={`bg-gradient-to-br ${dept.color} rounded-3xl p-6 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105`}>
//                   <div className="flex flex-col items-center text-center gap-3">
//                     <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 transition">{dept.icon}</div>
//                     <div className="text-sm font-bold">{dept.name}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* REVIEWS SLIDER */}
//       <section className="py-16 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-slate-50/50"></div>
//         <div className="max-w-5xl mx-auto px-6 relative">
//           <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Patients Say</h2>

//           <div className="relative h-80">
//             {reviews.map((review, i) => (
//               <motion.div
//                 key={review.review_id}
//                 initial={false}
//                 animate={{
//                   opacity: i === currentIndex ? 1 : 0,
//                   scale: i === currentIndex ? 1 : 0.9,
//                   zIndex: i === currentIndex ? 10 : 0
//                 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-3xl border border-gray-100">
//                   <div className="flex justify-center mb-4">
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, idx) => (
//                         <span key={idx} className={`text-2xl ${idx < Math.round(review.rating) ? 'text-gray-900' : 'text-gray-300'}`}>★</span>
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-xl text-gray-700 italic text-center mb-6">"{review.comment}"</p>
//                   <div className="text-center">
//                     <h3 className="font-bold text-gray-900 text-lg">{review.patient_name}</h3>
//                     <p className="text-sm text-gray-500 mt-1">{review.review_date}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Navigation Dots */}
//           <div className="flex justify-center gap-3 mt-8">
//             {reviews.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentIndex(i)}
//                 className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* NEWSLETTER CTA */}
//       <section className="py-16 bg-gradient-to-br from-gray-600 to-gray-700">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
//             <div className="text-center mb-8">
//               <h3 className="text-3xl font-bold text-white mb-3">Stay Healthy, Stay Informed</h3>
//               <p className="text-gray-300">Subscribe to our newsletter for health tips, wellness updates & exclusive offers</p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
//               <input 
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email address" 
//                 className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-white/60 transition"
//               />
//               <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-gray-600 text-white">
//         <div className="grid grid-cols-1 md:grid-cols-3">
//           {sections.map((sec, idx) => (
//             <div key={idx} className="group relative h-72 overflow-hidden border-r border-gray-800 last:border-r-0">
//               <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-full">
//                 <div className="text-gray-400 mb-4">{sec.icon}</div>
//                 <h3 className="text-2xl font-bold">{sec.title}</h3>
//               </div>

//               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
//                 <div className="space-y-3 text-gray-300">
//                   {sec.content}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="border-t border-gray-800 py-8 text-center text-gray-400 text-sm">
//           <p>© 2025 MediCare Hospital — All Rights Reserved</p>
//           <p className="mt-2">Compassion · Care · Excellence</p>
//         </div>
//       </footer>

//       {/* <AppointmentModal open={showAppointmentModal} onClose={() => setShowAppointmentModal (false)} doctor={null} /> */}
//       {/* <DoctorSearchModal open={  showDoctorModal}   setShowDoctorModal></DoctorSearchModal> */}
//     </div>
//   );
// }





















// second..
import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from '../../assets/hero.png'
import { FaUserMd, FaHospital, FaHeartbeat, FaTeethOpen, FaMapMarkerAlt, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";
import { MdOutlineContactSupport, MdOutlineBloodtype, MdFaceRetouchingNatural, MdFamilyRestroom, MdLocalHospital, MdEmergency } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { GiBrain, GiBoneKnife, GiEarbuds } from "react-icons/gi";
import Doctors from "../../pages/patient/Doctors";
import HomeDoctor from "./HomeDoctor";

// import patientService from "../services/patientService.js";
import patientService from "../../services/patientService"
import { useAuth } from "../../context/AuthContext";

// Mock data
const FAKE_STATS = {
  successRate: 98,
  totalPatients: 50000,
  rating: 4.8,
  doctors: 150
};

const MOCK_REVIEWS = [
  { review_id: 1, patient_name: "Sarah Johnson", comment: "Exceptional care and professionalism. The staff went above and beyond during my treatment.", rating: 5, review_date: "2024-12-15" },
  { review_id: 2, patient_name: "Michael Chen", comment: "State-of-the-art facilities and compassionate doctors. Highly recommend!", rating: 5, review_date: "2024-12-20" },
  { review_id: 3, patient_name: "Emma Williams", comment: "Quick diagnosis and effective treatment. Thank you to the entire team!", rating: 4.5, review_date: "2024-12-28" }
];

const sections = [
  {
    title: "Map",
    icon: <FaMapMarkerAlt className="text-7xl" />,
    content: (
      <div className="space-y-2">
        <p>121/C Green Road, Dhaka</p>
        <p>Near City Hospital</p>
        <p>Open: 24/7</p>
        <p>Google Maps link</p>
      </div>
    ),
  },
  {
    title: "More Info",
    icon: <FaInfoCircle className="text-7xl" />,
    content: (
      <div className="space-y-2">
        <p>About Our Hospital</p>
        <p>Services & Departments</p>
        <p>Doctors & Specialists</p>
        <p>Health Packages & Screening</p>
      </div>
    ),
  },
  {
    title: "Contact Us",
    icon: <FaPhoneAlt className="text-7xl" />,
    content: (
      <div className="space-y-2">
        <p>Phone: +880 1777-123456</p>
        <p>Email: info@medicarehospital.com</p>
        <p>Support 24/7 available</p>
        <p>Emergency: +880 1999-654321</p>
      </div>
    ),
  },
];

// // Appointment Modal Component
// const AppointmentModal = ({ open, onClose, doctor }) => {
//   const ref = useRef(null);
//   useEffect(() => { if (open) ref.current?.focus(); }, [open]);
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 z-10"
//       >
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900">Request Appointment</h3>
//             <p className="text-sm text-gray-500 mt-1">Fill in your details below</p>
//           </div>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
//             <input ref={ref} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Phone or Email</label>
//             <input className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="your@email.com or +880..." />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date & Time</label>
//             <input type="datetime-local" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Doctor</label>
//             <input className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl outline-none" value={doctor ? `${doctor.name} — ${doctor.specialization}` : "Any available doctor"} readOnly />
//           </div>
//         </div>

//         <div className="mt-8 flex gap-3">
//           <button onClick={onClose} className="flex-1 px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition">Cancel</button>
//           <button onClick={() => { alert("Appointment Requested 🎉 (demo)"); onClose(); }} className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition">Request Appointment</button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // doctor search modal
// const DoctorSearchModal = () => {
//   if (!open) return null;
// 	return(
// 		<Doctors></Doctors>
// 		);
// };

const departments = [
  { name: "Cardiology", icon: <FaHeartbeat className="text-4xl" />, color: "from-gray-700 to-gray-800" },
  { name: "Neurology", icon: <GiBrain className="text-4xl" />, color: "from-slate-700 to-slate-800" },
  { name: "Mother & Child", icon: <MdFamilyRestroom className="text-4xl" />, color: "from-gray-600 to-gray-700" },
  { name: "Orthopedics", icon: <GiBoneKnife className="text-4xl" />, color: "from-zinc-700 to-zinc-800" },
  { name: "Renal Care", icon: <MdOutlineBloodtype className="text-4xl" />, color: "from-gray-800 to-gray-900" },
  { name: "Dentistry", icon: <FaTeethOpen className="text-4xl" />, color: "from-slate-600 to-slate-700" },
  { name: "Dermatology", icon: <MdFaceRetouchingNatural className="text-4xl" />, color: "from-gray-600 to-gray-800" },
  { name: "ENT", icon: <GiEarbuds className="text-4xl" />, color: "from-zinc-600 to-zinc-700" },
  { name: "ICU", icon: <MdLocalHospital className="text-4xl" />, color: "from-slate-800 to-slate-900" },
  { name: "Medicine", icon: <MdEmergency className="text-4xl" />, color: "from-gray-700 to-gray-900" },
];

export default function HomeModern() {
  const [statsAnimated, setStatsAnimated] = useState({ successRate: 0, totalPatients: 0, rating: 0, doctors: 0 });
  const [reviews] = useState(MOCK_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  // const [showDoctorModal, setShowDoctorModal] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const [activeDept, setActiveDept] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
 // fetch doctors when department changes
 useEffect(() => {
  if (!activeDept) {
    setDoctors([]);
    return;
  }

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const res = await patientService.publicSearchDoctors(activeDept);
      setDoctors(res.doctors || []);
    } catch (err) {
      console.error("Failed to fetch doctors", err);
      setDoctors([]);
    } finally {
      setLoading(false);
    }
  };

  fetchDoctors();
}, [activeDept]);

const handleBookAppointment = () => {
  if (!user) {
    if (window.confirm("Please log in or sign up to book appointment")) {
      navigate("/login");
    }
  }
};






  const [email, setEmail] = useState("");

  // Autoplay slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Animate stats
  useEffect(() => {
    const animateValue = (key, target, speed) => {
      let current = 0;
      const interval = setInterval(() => {
        current += Math.ceil(target / speed);
        if (current >= target) { current = target; clearInterval(interval); }
        setStatsAnimated((p) => ({ ...p, [key]: current }));
      }, 25);
    };
    animateValue("successRate", FAKE_STATS.successRate, 40);
    animateValue("totalPatients", FAKE_STATS.totalPatients, 70);
    animateValue("rating", FAKE_STATS.rating * 10, 20);
    animateValue("doctors", FAKE_STATS.doctors, 30);
  }, []);

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100">
    <div className="min-h-screen bg-gray-20 text-gray-800 overflow-auto">

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-300 shadow-sm min-w-screen">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition transform group-hover:scale-105">
            <FaHospital className="text-xl" />
              
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">MediCare Hospital</div>
              <div className="text-xs text-gray-500 font-medium">Compassion · Care · Excellence</div>
            </div>
          </Link>
          <div className="min-w-1/2">  
                  <HomeDoctor></HomeDoctor>
            </div>
          
          <nav className="hidden md:flex gap-6 items-center">
             <NavLink to="/doctors" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">Doctors</NavLink>
            <NavLink to="/departments" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">Departments</NavLink> 
            {/* <NavLink to="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition">Contact</NavLink>  */}
            
            <NavLink to="/login" className="px-6 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition">Login</NavLink>
          </nav>
          
          <div className="md:hidden">
            <NavLink to="/login" className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm font-medium">Login</NavLink>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
  className="pt-10 relative bg-black/30 bg-blend-darken pb-16 overflow-hidden"
  style={{
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
      {/* <section className="relative py-20 overflow-hidden"> */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-slate-800/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-semibold mb-6">
                ✨ Trusted Healthcare Since 2010
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                World-class care,<br />
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">close to home</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Modern diagnostics, experienced doctors & personalized treatment plans — available 24/7 for your family's health
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { key: "successRate", label: "Success Rate", suffix: "%" },
                { key: "totalPatients", label: "Patients Treated", suffix: "+" },
                { key: "rating", label: "Rating", suffix: "★" },
                { key: "doctors", label: "Expert Doctors", suffix: "" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition transform hover:scale-105"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {stat.key === "rating" 
                      ? (statsAnimated[stat.key] / 10).toFixed(1) 
                      : stat.key === "totalPatients" 
                      ? statsAnimated[stat.key].toLocaleString() 
                      : statsAnimated[stat.key]}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Find a Doctor", icon: <FaUserMd className="text-4xl" />, action: "modal", gradient: "from-gray-700 to-gray-800" },
        { title: "Book Appointment", icon: <TbCalendarClock className="text-4xl" />, action: "modal", gradient: "from-gray-600 to-gray-700" },
        { title: "Send Inquiry", icon: <MdOutlineContactSupport className="text-4xl" />, link: "/contact", gradient: "from-slate-700 to-slate-800" },
        { title: "Emergency Call", icon: <IoCall className="text-4xl" />, link: "/contact", gradient: "from-gray-800 to-gray-900" }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {item.action === "modal" ? (
            <button
            onClick={() => {
              if (item.title === "Find a Doctor") setShowDoctorModal(true);
              else if (item.title === "Book Appointment") setShowAppointmentModal(true);
            }}
              // onClick={() => setModalOpen(true)}
              className={`group relative block w-full bg-gradient-to-br ${item.gradient} rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition"></div>
              <div className="relative flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">{item.icon}</div>
                <div className="text-lg font-bold">{item.title}</div>
              </div>
            </button>
          ) : (
            <Link
              to={item.link}
              className={`group relative block bg-gradient-to-br ${item.gradient} rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition"></div>
              <div className="relative flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">{item.icon}</div>
                <div className="text-lg font-bold">{item.title}</div>
              </div>
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* <AppointmentModal
      open={showAppointmentModal}
      onClose={() => setShowAppointmentModal(false)}
    /> */}

    {/* <Doctors
      open={showDoctorModal}
      onClose={() => setShowDoctorModal(false)}
    /> */}


      {/* DEPARTMENTS */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive healthcare services across multiple specialties</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Cardiology", icon: <FaHeartbeat className="text-4xl" />, color: "from-gray-700 to-gray-800" },
              { name: "Neurology", icon: <GiBrain className="text-4xl" />, color: "from-slate-700 to-slate-800" },
              { name: "Mother & Child", icon: <MdFamilyRestroom className="text-4xl" />, color: "from-gray-600 to-gray-700" },
              { name: "Orthopedics", icon: <GiBoneKnife className="text-4xl" />, color: "from-zinc-700 to-zinc-800" },
              { name: "Renal Care", icon: <MdOutlineBloodtype className="text-4xl" />, color: "from-gray-800 to-gray-900" },
              { name: "Dentistry", icon: <FaTeethOpen className="text-4xl" />, color: "from-slate-600 to-slate-700" },
              { name: "Dermatology", icon: <MdFaceRetouchingNatural className="text-4xl" />, color: "from-gray-600 to-gray-800" },
              { name: "ENT", icon: <GiEarbuds className="text-4xl" />, color: "from-zinc-600 to-zinc-700" },
              { name: "ICU", icon: <MdLocalHospital className="text-4xl" />, color: "from-slate-800 to-slate-900" },
              { name: "Medicine", icon: <MdEmergency className="text-4xl" />, color: "from-gray-700 to-gray-900" }
            ].map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${dept.color} rounded-3xl p-6 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105`}>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 transition">{dept.icon}</div>
                    <div className="text-sm font-bold">{dept.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* <> */}
      {/* OUR MEDICAL DEPARTMENTS */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Medical Departments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services across multiple specialties
            </p>
          </div>

          {/* Departments grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {departments.map((dept, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveDept(dept.name)}
                className="group cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${dept.color} rounded-3xl p-6 text-white shadow-lg ${
                    activeDept === dept.name ? "ring-4 ring-gray-400" : ""
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-4 bg-white/20 rounded-2xl">
                      {dept.icon}
                    </div>
                    <div className="text-sm font-bold">{dept.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* HORIZONTAL DOCTOR LIST (PART OF SAME SECTION) */}
          {activeDept && (
            <div className="mt-14">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Doctors in {activeDept}
              </h3>

              {loading && (
                <div className="text-gray-500">Loading doctors...</div>
              )}

              {!loading && doctors.length === 0 && (
                <div className="text-gray-500">No doctors found</div>
              )}

              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {doctors.map((doctor) => (
                  <div
                    key={doctor._id || doctor.id}
                    className="min-w-[220px] bg-white rounded-xl border border-gray-200 p-4 flex-shrink-0"
                  >
                    <h4 className="font-semibold text-gray-800">
                      {doctor.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-3">
                      {doctor.specialization}
                    </p>

                    <button
                      onClick={handleBookAppointment}
                      className="w-full text-sm py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
                    >
                      Book Appointment
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    {/* </>
  );
} */}

      {/* REVIEWS SLIDER */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-slate-50/50"></div>
        <div className="max-w-5xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Patients Say</h2>

          <div className="relative h-80">
            {reviews.map((review, i) => (
              <motion.div
                key={review.review_id}
                initial={false}
                animate={{
                  opacity: i === currentIndex ? 1 : 0,
                  scale: i === currentIndex ? 1 : 0.9,
                  zIndex: i === currentIndex ? 10 : 0
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-3xl border border-gray-100">
                  <div className="flex justify-center mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <span key={idx} className={`text-2xl ${idx < Math.round(review.rating) ? 'text-gray-900' : 'text-gray-300'}`}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 italic text-center mb-6">"{review.comment}"</p>
                  <div className="text-center">
                    <h3 className="font-bold text-gray-900 text-lg">{review.patient_name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{review.review_date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-600 to-gray-700">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">Stay Healthy, Stay Informed</h3>
              <p className="text-gray-300">Subscribe to our newsletter for health tips, wellness updates & exclusive offers</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-white/60 transition"
              />
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-600 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {sections.map((sec, idx) => (
            <div key={idx} className="group relative h-72 overflow-hidden border-r border-gray-800 last:border-r-0">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-full">
                <div className="text-gray-400 mb-4">{sec.icon}</div>
                <h3 className="text-2xl font-bold">{sec.title}</h3>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="space-y-3 text-gray-300">
                  {sec.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 py-8 text-center text-gray-400 text-sm">
          <p>© 2025 MediCare Hospital — All Rights Reserved</p>
          <p className="mt-2">Compassion · Care · Excellence</p>
        </div>
      </footer>

      {/* <AppointmentModal open={showAppointmentModal} onClose={() => setShowAppointmentModal (false)} doctor={null} /> */}
      {/* <DoctorSearchModal open={  showDoctorModal}   setShowDoctorModal></DoctorSearchModal> */}
    </div>
  );
}













// // second..
// // import React, { useEffect, useState, useRef } from "react";
// // import { Link, NavLink, useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import heroImg from '../../assets/hero.png'
// // import {
// //   FaUserMd, FaHospital, FaHeartbeat, FaTeethOpen,
// //   FaMapMarkerAlt, FaInfoCircle, FaPhoneAlt
// // } from "react-icons/fa";
// // import { TbCalendarClock } from "react-icons/tb";
// // import {
// //   MdOutlineContactSupport, MdOutlineBloodtype,
// //   MdFaceRetouchingNatural, MdFamilyRestroom,
// //   MdLocalHospital, MdEmergency
// // } from "react-icons/md";
// // import { IoCall } from "react-icons/io5";
// // import { GiBrain, GiBoneKnife, GiEarbuds } from "react-icons/gi";

// // import HomeDoctor from "./HomeDoctor";
// // import patientService from "../../services/patientService";
// // import { useAuth } from "../../context/AuthContext";

// // /* ---------------- EXISTING MOCK DATA (UNCHANGED) ---------------- */

// // const FAKE_STATS = {
// //   successRate: 98,
// //   totalPatients: 50000,
// //   rating: 4.8,
// //   doctors: 150
// // };

// // const MOCK_REVIEWS = [
// //   { review_id: 1, patient_name: "Sarah Johnson", comment: "Exceptional care and professionalism.", rating: 5, review_date: "2024-12-15" },
// //   { review_id: 2, patient_name: "Michael Chen", comment: "State-of-the-art facilities.", rating: 5, review_date: "2024-12-20" },
// //   { review_id: 3, patient_name: "Emma Williams", comment: "Quick diagnosis and effective treatment.", rating: 4.5, review_date: "2024-12-28" }
// // ];

// // /* ---------------- HOME COMPONENT ---------------- */

// // export default function HomeModern() {
// //   const navigate = useNavigate();
// //   const { user } = useAuth();

// //   const [statsAnimated, setStatsAnimated] = useState({
// //     successRate: 0, totalPatients: 0, rating: 0, doctors: 0
// //   });

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   /* 🔴 NEW STATE */
// //   const [activeDepartment, setActiveDepartment] = useState(null);
// //   const [departmentDoctors, setDepartmentDoctors] = useState([]);
// //   const [loadingDoctors, setLoadingDoctors] = useState(false);

// //   /* ---------------- EFFECTS ---------------- */

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((p) => (p + 1) % MOCK_REVIEWS.length);
// //     }, 4000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   useEffect(() => {
// //     const animate = (key, target, speed) => {
// //       let current = 0;
// //       const i = setInterval(() => {
// //         current += Math.ceil(target / speed);
// //         if (current >= target) {
// //           current = target;
// //           clearInterval(i);
// //         }
// //         setStatsAnimated(p => ({ ...p, [key]: current }));
// //       }, 25);
// //     };

// //     animate("successRate", FAKE_STATS.successRate, 40);
// //     animate("totalPatients", FAKE_STATS.totalPatients, 70);
// //     animate("rating", FAKE_STATS.rating * 10, 20);
// //     animate("doctors", FAKE_STATS.doctors, 30);
// //   }, []);

// //   /* 🔴 FETCH DOCTORS WHEN DEPARTMENT CHANGES */
// //   useEffect(() => {
// //     if (!activeDepartment) {
// //       setDepartmentDoctors([]);
// //       return;
// //     }

// //     const fetchDoctors = async () => {
// //       setLoadingDoctors(true);
// //       try {
// //         const res = await patientService.publicSearchDoctors(activeDepartment);
// //         setDepartmentDoctors(res.doctors || []);
// //       } catch (e) {
// //         setDepartmentDoctors([]);
// //       } finally {
// //         setLoadingDoctors(false);
// //       }
// //     };

// //     fetchDoctors();
// //   }, [activeDepartment]);

// //   /* 🔴 BOOK CLICK */
// //   const handleBookClick = () => {
// //     if (!user) {
// //       if (window.confirm("Please log in or sign up to book appointment")) {
// //         navigate("/login");
// //       }
// //     }
// //   };

// //   /* ---------------- RENDER ---------------- */

// //   return (
// //     <div className="min-h-screen bg-gray-20 text-gray-800 overflow-auto">

// //       {/* NAVBAR (UNCHANGED) */}
// //       {/* ... NAVBAR CODE STAYS SAME ... */}

// //       {/* ================== DEPARTMENTS SECTION ================== */}
// //       <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-100">
// //         <div className="max-w-7xl mx-auto px-6">

// //           <div className="text-center mb-12">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //               Our Medical Departments
// //             </h2>
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Comprehensive healthcare services across multiple specialties
// //             </p>
// //           </div>

// //           {/* DEPARTMENT GRID */}
// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
// //             {[
// //               { name: "Cardiology", icon: <FaHeartbeat className="text-4xl" /> },
// //               { name: "Neurology", icon: <GiBrain className="text-4xl" /> },
// //               { name: "Mother & Child", icon: <MdFamilyRestroom className="text-4xl" /> },
// //               { name: "Orthopedics", icon: <GiBoneKnife className="text-4xl" /> },
// //               { name: "Renal Care", icon: <MdOutlineBloodtype className="text-4xl" /> },
// //               { name: "Dentistry", icon: <FaTeethOpen className="text-4xl" /> },
// //               { name: "Dermatology", icon: <MdFaceRetouchingNatural className="text-4xl" /> },
// //               { name: "ENT", icon: <GiEarbuds className="text-4xl" /> },
// //               { name: "ICU", icon: <MdLocalHospital className="text-4xl" /> },
// //               { name: "Medicine", icon: <MdEmergency className="text-4xl" /> }
// //             ].map((dept, i) => (
// //               <motion.div
// //                 key={i}
// //                 onClick={() => setActiveDepartment(dept.name)}
// //                 className={`cursor-pointer rounded-3xl p-6 text-center shadow-lg transition
// //                   ${activeDepartment === dept.name ? "ring-4 ring-gray-400" : "bg-white"}`}
// //               >
// //                 <div className="mb-3 flex justify-center">{dept.icon}</div>
// //                 <div className="font-bold text-sm">{dept.name}</div>
// //               </motion.div>
// //             ))}
// //           </div>

// //           {/* 🔴 HORIZONTAL DOCTOR ROW (PART OF SAME SECTION) */}
// //           {activeDepartment && (
// //             <div className="mt-14">
// //               <h3 className="text-xl font-semibold mb-4">
// //                 Doctors in {activeDepartment}
// //               </h3>

// //               {loadingDoctors && <p className="text-gray-500">Loading...</p>}

// //               {!loadingDoctors && departmentDoctors.length === 0 && (
// //                 <p className="text-gray-500">No doctors found</p>
// //               )}

// //               <div className="flex gap-4 overflow-x-auto pb-4">
// //                 {departmentDoctors.map(doc => (
// //                   <div
// //                     key={doc._id}
// //                     className="min-w-[200px] border border-gray-300 rounded-xl p-4"
// //                   >
// //                     <p className="font-semibold">{doc.name}</p>
// //                     <p className="text-sm text-gray-500 mb-3">
// //                       {doc.specialization}
// //                     </p>
// //                     <button
// //                       onClick={handleBookClick}
// //                       className="w-full text-sm py-2 bg-gray-900 text-white rounded-full"
// //                     >
// //                       Book Appointment
// //                     </button>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //         </div>
// //       </section>

// //       {/* REST OF YOUR FILE (REVIEWS, FOOTER, ETC.) REMAINS UNCHANGED */}
// //     </div>
// //   );
// // }
