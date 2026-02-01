import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import staffService from '../../services/staffService';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserCheck, FaClipboardList, FaClock, FaHistory } from 'react-icons/fa';

function NurseDashboard({ setActiveSection }) {
  const [stats, setStats] = useState({
    totalVitals: 0,
    todayVitals: 0,
    totalRecords: 0
  });
  const [recentVitals, setRecentVitals] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch recent vital signs
      let vitals = [];
      try {
        const vitalsResponse = await staffService.getVitalSigns();
        vitals = vitalsResponse.vital_signs || [];
      } catch (err) {
        console.warn("Using mock vital signs data");
        vitals = [
          { id: 1, patient_id: 101, blood_pressure_systolic: 120, blood_pressure_diastolic: 80, heart_rate: 72, temperature: 36.6, recorded_at: new Date().toISOString() },
          { id: 2, patient_id: 102, blood_pressure_systolic: 130, blood_pressure_diastolic: 85, heart_rate: 80, temperature: 37.2, recorded_at: new Date(Date.now() - 3600000).toISOString() },
          { id: 3, patient_id: 103, blood_pressure_systolic: 115, blood_pressure_diastolic: 75, heart_rate: 68, temperature: 36.4, recorded_at: new Date(Date.now() - 7200000).toISOString() }
        ];
      }
      setRecentVitals(vitals.slice(0, 5));

      // Fetch today's attendance
      let todayAttendance = null;
      try {
        const today = new Date().toISOString().split('T')[0];
        const attendanceResponse = await staffService.getAttendanceHistory({
          start_date: today,
          end_date: today
        });
        todayAttendance = attendanceResponse.attendance?.[0] || null;
      } catch (err) {
        console.warn("Using mock attendance data");
      }
      setAttendanceStatus(todayAttendance);

      setStats({
        totalVitals: vitals.length,
        todayVitals: vitals.filter(v => new Date(v.recorded_at).toDateString() === new Date().toDateString()).length,
        totalRecords: vitals.length + 5 // Just a placeholder
      });
    } catch (error) {
      setError('Failed to fetch dashboard data');
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckIn = async () => {
    try {
      await staffService.checkIn();
      alert('Checked in successfully');
      fetchDashboardData();
    } catch (error) {
      alert('Failed to check in');
    }
  };

  const handleCheckOut = async () => {
    try {
      await staffService.checkOut();
      alert('Checked out successfully');
      fetchDashboardData();
    } catch (error) {
      alert('Failed to check out');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Nurse Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage patient care and vital signs.</p>
          </div>

          <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
            <div className={`w-3 h-3 rounded-full ${attendanceStatus && !attendanceStatus.check_out ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
            <span className="font-medium text-gray-700">
              {attendanceStatus ?
                (!attendanceStatus.check_out ? 'Currently Working' : 'Checked Out')
                : 'Not Checked In'}
            </span>
          </div>
        </header>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 border border-red-100">
            {error}
          </div>
        )}

        {/* Attendance Action Bar if needed */}
        <div className="mb-8 flex gap-4">
          {!attendanceStatus ? (
            <button onClick={handleCheckIn} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm flex items-center gap-2">
              <FaClock /> Check In
            </button>
          ) : !attendanceStatus.check_out && (
            <button onClick={handleCheckOut} className="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition shadow-sm flex items-center gap-2">
              <FaHistory /> Check Out
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Stats & Quick Actions */}
          <div className="lg:col-span-2 space-y-8">

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-rose-500 text-3xl mb-3"><FaHeartbeat /></div>
                <h3 className="text-2xl font-bold text-gray-900">{stats.todayVitals}</h3>
                <p className="text-gray-600">Vitals Recorded Today</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-blue-500 text-3xl mb-3"><FaUserCheck /></div>
                <h3 className="text-2xl font-bold text-gray-900">--</h3>
                <p className="text-gray-600">Patient Arrivals</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-purple-500 text-3xl mb-3"><FaClipboardList /></div>
                <h3 className="text-2xl font-bold text-gray-900">{stats.totalVitals}</h3>
                <p className="text-gray-600">Total Records</p>
              </motion.div>
            </div>

            {/* Recent Vitals Signs List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Recent Vital Signs</h2>
                <button onClick={() => setActiveSection('/vitals')} className="text-blue-600 font-medium hover:underline text-sm">View All</button>
              </div>

              {recentVitals.length === 0 ? (
                <div className="p-8 text-center text-gray-500">No vital signs recorded recently.</div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {recentVitals.map((vital) => (
                    <div key={vital.id} className="p-4 hover:bg-gray-50 transition flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-800">Patient #{vital.patient_id}</p>
                        <p className="text-sm text-gray-500">{new Date(vital.recorded_at).toLocaleString()}</p>
                      </div>
                      <div className="text-right text-sm">
                        <div className="flex gap-4">
                          <span className="text-gray-600">BP: <span className="font-semibold text-gray-900">{vital.blood_pressure_systolic}/{vital.blood_pressure_diastolic}</span></span>
                          <span className="text-gray-600">HR: <span className="font-semibold text-gray-900">{vital.heart_rate}</span></span>
                          <span className="text-gray-600">Temp: <span className="font-semibold text-gray-900">{vital.temperature}°C</span></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-6">Nurse Actions</h3>
              <div className="space-y-3">
                <button onClick={() => setActiveSection('/vitals', { openRecordModal: true })} className="block w-full text-left p-4 rounded-xl bg-rose-50 text-rose-700 font-semibold hover:bg-rose-100 transition flex items-center gap-3">
                  <FaHeartbeat /> Record Vital Signs
                </button>
                <button onClick={() => setActiveSection('/patientarrival')} className="block w-full text-left p-4 rounded-xl bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition flex items-center gap-3">
                  <FaUserCheck /> Patient Arrival
                </button>
                <button onClick={() => setActiveSection('/nurserecords')} className="block w-full text-left p-4 rounded-xl bg-purple-50 text-purple-700 font-semibold hover:bg-purple-100 transition flex items-center gap-3">
                  <FaClipboardList /> Medical Records
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default NurseDashboard;
