import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from '../../assets/hero.png'
import {
  FaUserMd, FaHospital, FaHeartbeat, FaTeethOpen,
  FaMapMarkerAlt, FaInfoCircle, FaPhoneAlt, FaAward,
  FaStethoscope, FaHospitalAlt, FaAmbulance, FaFlask,
  FaGlobe, FaUserCircle, FaFileMedical, FaMoneyBillWave,
  FaMapMarkedAlt, FaMicroscope, FaBook, FaGraduationCap
} from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";
import {
  MdOutlineContactSupport, MdOutlineBloodtype,
  MdFaceRetouchingNatural, MdFamilyRestroom,
  MdLocalHospital, MdEmergency, MdVerified
} from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { GiBrain, GiBoneKnife, GiEarbuds } from "react-icons/gi";
import { RiRobot2Fill, RiHeartPulseFill } from "react-icons/ri";

import HomeDoctor from "./HomeDoctor";
import patientService from "../../services/patientService";
import { useAuth } from "../../context/AuthContext";

/* ---------------- MOCK DATA ---------------- */

const FAKE_STATS = {
  successRate: 98,
  totalPatients: 50000,
  rating: 48,
  doctors: 500,
  specialties: 30
};

const MOCK_REVIEWS = [
  {
    review_id: 1,
    patient_name: "Sarah Johnson",
    comment: "Received exceptional cardiac care. The team's expertise and compassionate approach made my recovery smooth and reassuring.",
    rating: 5,
    review_date: "January 2025",
    treatment: "Cardiac Surgery"
  },
  {
    review_id: 2,
    patient_name: "Michael Chen",
    comment: "State-of-the-art diagnostic facilities and highly qualified specialists. Professional care throughout my treatment journey.",
    rating: 5,
    review_date: "December 2024",
    treatment: "Neurology"
  },
  {
    review_id: 3,
    patient_name: "Emma Williams",
    comment: "Quick diagnosis and effective treatment protocol. The multidisciplinary team approach ensured comprehensive care.",
    rating: 5,
    review_date: "February 2025",
    treatment: "Oncology"
  }
];

/* ---------------- HOME COMPONENT ---------------- */

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState({
    successRate: 0,
    totalPatients: 0,
    rating: 0,
    doctors: 0,
    specialties: 0
  });

  const [activeDept, setActiveDept] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState(MOCK_REVIEWS);

  // Animate stats on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setStatsAnimated(prev => {
        const newStats = {};
        Object.keys(FAKE_STATS).forEach(key => {
          const target = FAKE_STATS[key];
          const current = prev[key];
          const increment = target / steps;
          newStats[key] = Math.min(current + increment, target);
        });
        return newStats;
      });
    }, interval);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  // Fetch doctors when department selected
  useEffect(() => {
    if (activeDept) {
      setLoading(true);
      patientService.getDoctorsBySpecialization(activeDept)
        .then(res => {
          setDoctors(res.data || []);
          setLoading(false);
        })
        .catch(() => {
          setDoctors([]);
          setLoading(false);
        });
    }
  }, [activeDept]);

  const handleBookAppointment = () => {
    navigate('/doctors');
  };

  const departments = [
    { name: "Cardiology", icon: <FaHeartbeat className="text-3xl" />, color: "from-red-500 to-pink-500" },
    { name: "Neurology", icon: <GiBrain className="text-3xl" />, color: "from-purple-500 to-indigo-500" },
    { name: "Orthopedics", icon: <GiBoneKnife className="text-3xl" />, color: "from-blue-500 to-cyan-500" },
    { name: "Pediatrics", icon: <MdFamilyRestroom className="text-3xl" />, color: "from-green-500 to-teal-500" },
    { name: "Oncology", icon: <MdOutlineBloodtype className="text-3xl" />, color: "from-orange-500 to-red-500" },
    { name: "Dermatology", icon: <MdFaceRetouchingNatural className="text-3xl" />, color: "from-pink-500 to-rose-500" },
    { name: "ENT", icon: <GiEarbuds className="text-3xl" />, color: "from-yellow-500 to-orange-500" },
    { name: "Dentistry", icon: <FaTeethOpen className="text-3xl" />, color: "from-cyan-500 to-blue-500" },
    { name: "Emergency", icon: <MdEmergency className="text-3xl" />, color: "from-red-600 to-red-700" },
    { name: "ICU", icon: <MdLocalHospital className="text-3xl" />, color: "from-gray-600 to-gray-700" }
  ];

  const sections = [
    {
      title: "Contact",
      icon: <IoCall className="text-5xl" />,
      content: (
        <>
          <p className="font-semibold">24/7 Helpline</p>
          <p>+880 1777-123456</p>
          <p className="mt-2">info@medicare.com</p>
        </>
      )
    },
    {
      title: "Location",
      icon: <FaMapMarkerAlt className="text-5xl" />,
      content: (
        <>
          <p>123 Medical Avenue</p>
          <p>Dhaka, Bangladesh</p>
          <p className="mt-2">Open 24/7</p>
        </>
      )
    },
    {
      title: "Support",
      icon: <MdOutlineContactSupport className="text-5xl" />,
      content: (
        <>
          <p>Patient Relations</p>
          <p>International Desk</p>
          <p>Insurance Support</p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen min-w-screen bg-white text-gray-900 overflow-auto">

      {/* TOP UTILITY BAR */}
      <div className="bg-[#0F4C81] text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+8801777123456" className="flex items-center gap-2 hover:text-gray-200 transition">
              <FaPhoneAlt className="text-[#C62828]" />
              <span className="font-medium">Emergency: +880 1777-123456</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button className="hover:text-gray-200 transition flex items-center gap-1">
              <FaGlobe className="text-sm" />
              <span>English</span>
            </button>
            {user ? (
              <NavLink to="/dashboard" className="hover:text-gray-200 transition flex items-center gap-1 font-semibold">
                <FaUserCircle className="text-sm" />
                <span>Hi, {user.first_name || 'User'}</span>
              </NavLink>
            ) : (
              <NavLink to="/login" className="hover:text-gray-200 transition flex items-center gap-1">
                <FaUserCircle className="text-sm" />
                <span>Login / Register</span>
              </NavLink>
            )}
            <NavLink to="/international" className="hover:text-gray-200 transition">
              International Patients
            </NavLink>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0F4C81] rounded-lg flex items-center justify-center">
              <FaHospital className="text-2xl text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0F4C81]">MediCare Hospital</div>
              <div className="text-xs text-gray-600 tracking-wide">Excellence in Healthcare</div>
            </div>
          </Link>

          <nav className="hidden lg:flex gap-8 items-center">
            <NavLink to="/doctors" className="text-sm font-medium text-gray-700 hover:text-[#0F4C81] transition">
              Find a Doctor
            </NavLink>
            <NavLink to="/departments" className="text-sm font-medium text-gray-700 hover:text-[#0F4C81] transition">
              Departments
            </NavLink>
            {(!user || user.role === 'patient') && (
              <NavLink to="/appointments" className="text-sm font-medium text-gray-700 hover:text-[#0F4C81] transition">
                Appointments
              </NavLink>
            )}
            <NavLink to="/services" className="text-sm font-medium text-gray-700 hover:text-[#0F4C81] transition">
              Services
            </NavLink>
            <NavLink to="/research" className="text-sm font-medium text-gray-700 hover:text-[#0F4C81] transition">
              Research & Academics
            </NavLink>
            <NavLink to="/international" className="text-sm font-medium text-gray-700 hover:text-[#0F4C81] transition">
              International Patients
            </NavLink>
          </nav>

          <button
            onClick={handleBookAppointment}
            className="px-6 py-2.5 bg-[#2FA4A9] text-white rounded-lg text-sm font-semibold hover:bg-[#278a8e] transition shadow-sm"
          >
            Book Appointment
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F9FBFC] to-[#E6EDF3] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #0F4C81 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1F2933] leading-tight mb-6">
                Compassionate Care.<br />
                <span className="text-[#0F4C81]">Advanced Medicine.</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                World-class healthcare with expert physicians, advanced diagnostics, and patient-centered care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleBookAppointment}
                  className="px-8 py-4 bg-[#2FA4A9] text-white rounded-lg font-semibold hover:bg-[#278a8e] transition shadow-md flex items-center justify-center gap-2"
                >
                  <TbCalendarClock className="text-xl" />
                  Book Appointment
                </button>
                <button
                  onClick={() => navigate('/doctors')}
                  className="px-8 py-4 bg-white text-[#0F4C81] border-2 border-[#0F4C81] rounded-lg font-semibold hover:bg-[#0F4C81] hover:text-white transition flex items-center justify-center gap-2"
                >
                  <FaUserMd className="text-xl" />
                  Find a Doctor
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImg}
                alt="MediCare Hospital"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS STRIP */}
      <section className="bg-white py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { icon: <FaAward className="text-4xl text-[#2FA4A9]" />, label: "JCI Accredited", sublabel: "International Standards" },
              { icon: <FaStethoscope className="text-4xl text-[#2FA4A9]" />, label: "30+ Specialties", sublabel: "Comprehensive Care" },
              { icon: <FaUserMd className="text-4xl text-[#2FA4A9]" />, label: "500+ Doctors", sublabel: "Expert Physicians" },
              { icon: <FaAmbulance className="text-4xl text-[#C62828]" />, label: "24/7 Emergency", sublabel: "Always Available" },
              { icon: <MdVerified className="text-4xl text-[#2FA4A9]" />, label: "ISO Certified", sublabel: "Quality Assured" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="mb-3">{item.icon}</div>
                <div className="font-bold text-[#1F2933] text-lg">{item.label}</div>
                <div className="text-sm text-gray-600">{item.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ACCESS ACTIONS */}
      <section className="bg-[#F9FBFC] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1F2933] mb-12">Quick Access</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Book Appointment", icon: <TbCalendarClock className="text-4xl" />, action: () => navigate('/doctors') },
              { title: "Online Reports", icon: <FaFileMedical className="text-4xl" />, action: () => navigate('/dashboard') },
              { title: "Pay Bills", icon: <FaMoneyBillWave className="text-4xl" />, action: () => navigate('/dashboard') },
              { title: "Emergency Services", icon: <FaAmbulance className="text-4xl" />, color: "text-[#C62828]", action: () => navigate('/emergency') },
              { title: "Find Location", icon: <FaMapMarkedAlt className="text-4xl" />, action: () => navigate('/contact') }
            ].map((item, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={item.action}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
              >
                <div className={`mb-4 ${item.color || 'text-[#2FA4A9]'} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="font-semibold text-[#1F2933]">{item.title}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CENTERS OF EXCELLENCE */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Centers of Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized clinical departments equipped with advanced technology and expert medical professionals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {departments.slice(0, 10).map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setActiveDept(dept.name)}
                className={`bg-white border-2 ${activeDept === dept.name ? 'border-[#2FA4A9]' : 'border-gray-200'} rounded-xl p-6 hover:border-[#2FA4A9] transition-all cursor-pointer group`}
              >
                <div className="text-[#0F4C81] mb-4 group-hover:scale-110 transition-transform">
                  {dept.icon}
                </div>
                <div className="font-semibold text-[#1F2933] mb-2">{dept.name}</div>
                <div className="text-xs text-[#2FA4A9] font-medium">Learn More →</div>
              </motion.div>
            ))}
          </div>

          {/* DOCTORS IN SELECTED DEPARTMENT */}
          {activeDept && (
            <div className="mt-16 bg-[#F9FBFC] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#1F2933] mb-6 border-l-4 border-[#2FA4A9] pl-4">
                Specialists in {activeDept}
              </h3>

              {loading && (
                <div className="text-gray-600 text-center py-8">Loading specialists...</div>
              )}

              {!loading && doctors.length === 0 && (
                <div className="text-gray-600 text-center py-8">No specialists found</div>
              )}

              <div className="space-y-6">
                {doctors.map((doctor, idx) => (
                  <motion.div
                    key={doctor._id || doctor.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2FA4A9] transition-all duration-300 flex flex-col md:flex-row items-center gap-8 group"
                  >
                    {/* Doctor Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#F0F7F7] to-[#E6EDF3] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <FaUserMd className="text-4xl text-[#0F4C81]" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                        <h4 className="text-2xl font-bold text-[#1F2933]">
                          Dr. {doctor.user?.first_name ? `${doctor.user.first_name} ${doctor.user.last_name}` : (doctor.name || 'Specialist')}
                        </h4>
                        <span className="inline-block px-3 py-1 bg-[#E6EDF3] text-[#0F4C81] text-xs font-bold rounded-full uppercase tracking-wider">
                          {doctor.specialization}
                        </span>
                      </div>

                      <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <FaAward className="text-[#2FA4A9] text-lg" />
                          <span className="font-medium">{doctor.years_of_experience || '10+'} Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaHospitalAlt className="text-[#2FA4A9] text-lg" />
                          <span className="font-medium">MediCare Main Campus</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaAward className="text-[#2FA4A9] text-lg" />
                          <span className="font-medium">{doctor.qualification || 'MBBS, MD'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Section */}
                    <div className="flex flex-col gap-4 w-full md:w-auto min-w-[200px] border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-8">
                      <div className="text-center md:text-right">
                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Fee per Visit</p>
                        <p className="text-3xl font-bold text-[#0F4C81]">${doctor.consultation_fee || '50'}</p>
                      </div>
                      <button
                        onClick={handleBookAppointment}
                        className="w-full px-8 py-3 bg-[#2FA4A9] text-white rounded-xl font-bold hover:bg-[#278a8e] transition-all shadow-lg shadow-[#2FA4A9]/20 transform hover:-translate-y-1 active:scale-95"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PATIENT JOURNEY */}
      <section className="bg-[#F9FBFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Your Healthcare Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined process designed for your comfort and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Search Doctor", desc: "Find specialists by department or name", icon: <FaUserMd /> },
              { step: "02", title: "Book Appointment", desc: "Schedule consultation at your convenience", icon: <TbCalendarClock /> },
              { step: "03", title: "Diagnosis & Treatment", desc: "Receive expert medical care", icon: <FaStethoscope /> },
              { step: "04", title: "Follow-up Care", desc: "Continuous monitoring and support", icon: <RiHeartPulseFill /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#2FA4A9] text-3xl text-[#0F4C81]">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-[#2FA4A9] mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold text-[#1F2933] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & INFRASTRUCTURE */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Advanced Technology & Infrastructure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              State-of-the-art medical equipment and cutting-edge diagnostic capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Advanced MRI & CT", desc: "High-resolution imaging technology", icon: <FaFlask className="text-5xl" /> },
              { title: "Robotic Surgery", desc: "Precision-guided surgical systems", icon: <RiRobot2Fill className="text-5xl" /> },
              { title: "Digital Health Records", desc: "Secure electronic medical records", icon: <FaFileMedical className="text-5xl" /> },
              { title: "Laboratory Services", desc: "Comprehensive diagnostic testing", icon: <FaMicroscope className="text-5xl" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F9FBFC] rounded-xl p-8 text-center border border-gray-200"
              >
                <div className="text-[#0F4C81] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2933] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & OUTCOMES */}
      <section className="bg-[#F9FBFC] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Patient Testimonials</h2>
            <p className="text-gray-600">Real experiences from our patients</p>
          </div>

          <div className="relative h-96">
            {reviews.map((review, i) => (
              <motion.div
                key={review.review_id}
                initial={false}
                animate={{
                  opacity: i === currentIndex ? 1 : 0,
                  scale: i === currentIndex ? 1 : 0.95,
                  zIndex: i === currentIndex ? 10 : 0
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white rounded-2xl shadow-xl p-12 max-w-3xl border border-gray-200">
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <span key={idx} className={`text-2xl ${idx < review.rating ? 'text-[#2FA4A9]' : 'text-gray-300'}`}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 text-center mb-6 leading-relaxed">"{review.comment}"</p>
                  <div className="text-center">
                    <h3 className="font-bold text-[#1F2933] text-lg flex items-center justify-center gap-2">
                      {review.patient_name}
                      <span className="text-[#2FA4A9] text-xs bg-[#E6EDF3] px-3 py-1 rounded-full border border-[#2FA4A9] flex items-center gap-1">
                        <MdVerified /> Verified Patient
                      </span>
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{review.treatment} • {review.review_date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-[#2FA4A9] w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH & EDUCATION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2933] mb-4">Research, Education & Innovation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advancing medical science through research and academic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Collaborations",
                desc: "Partnerships with leading medical universities worldwide",
                icon: <FaGraduationCap className="text-5xl" />,
                items: ["Harvard Medical School", "Johns Hopkins", "Mayo Clinic"]
              },
              {
                title: "Clinical Research",
                desc: "Active participation in groundbreaking medical studies",
                icon: <FaMicroscope className="text-5xl" />,
                items: ["50+ Active Trials", "Published Research", "Innovation Lab"]
              },
              {
                title: "Medical Education",
                desc: "Training the next generation of healthcare professionals",
                icon: <FaBook className="text-5xl" />,
                items: ["Residency Programs", "CME Courses", "Fellowship Training"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F9FBFC] rounded-xl p-8 border border-gray-200"
              >
                <div className="text-[#0F4C81] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1F2933] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.items.map((subitem, j) => (
                    <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2FA4A9] rounded-full"></span>
                      {subitem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#0F4C81] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Your Health Deserves the Best Care</h2>
          <p className="text-xl text-gray-200 mb-8">Schedule a consultation with our expert physicians today</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookAppointment}
              className="px-8 py-4 bg-[#2FA4A9] text-white rounded-lg font-semibold hover:bg-[#278a8e] transition shadow-lg"
            >
              Book Appointment
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-[#0F4C81] rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B3C66] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Hospital</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/mission" className="hover:text-white transition">Mission & Vision</Link></li>
                <li><Link to="/leadership" className="hover:text-white transition">Leadership</Link></li>
                <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Departments</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/departments/cardiology" className="hover:text-white transition">Cardiology</Link></li>
                <li><Link to="/departments/neurology" className="hover:text-white transition">Neurology</Link></li>
                <li><Link to="/departments/oncology" className="hover:text-white transition">Oncology</Link></li>
                <li><Link to="/departments" className="hover:text-white transition">View All</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Patient Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {(!user || user.role === 'patient') && (
                  <>
                    <li><Link to="/appointments" className="hover:text-white transition">Appointments</Link></li>
                    <li><Link to="/reports" className="hover:text-white transition">Medical Reports</Link></li>
                    <li><Link to="/billing" className="hover:text-white transition">Billing & Insurance</Link></li>
                  </>
                )}
                <li><Link to="/international" className="hover:text-white transition">International Patients</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#2FA4A9]" />
                  +880 1777-123456
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#2FA4A9]" />
                  123 Medical Avenue, Dhaka
                </li>
                <li>info@medicare.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 MediCare Hospital — All Rights Reserved</p>
            <p className="mt-2">JCI Accredited | NABH Certified | ISO 9001:2015</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
