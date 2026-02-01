import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import staffService from '../../services/staffService';
import { motion } from 'framer-motion';
import { FaVial, FaFileMedical, FaClock, FaHistory, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

function LabTechnicianDashboard({ setActiveSection }) {
  const [stats, setStats] = useState({
    totalTests: 0,
    pendingTests: 0,
    completedTests: 0
  });
  const [recentTests, setRecentTests] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch recent test reports
      let tests = [];
      try {
        const testsResponse = await staffService.getTestReports();
        tests = testsResponse.test_reports || [];
      } catch (err) {
        console.warn("Using mock test reports data");
        tests = [
          { id: 1, test_name: 'Blood Grouping', patient_id: 'P101', status: 'completed' },
          { id: 2, test_name: 'Lipid Profile', patient_id: 'P102', status: 'pending' },
          { id: 3, test_name: 'Liver Function Test', patient_id: 'P103', status: 'completed' }
        ];
      }
      setRecentTests(tests.slice(0, 5));

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
        totalTests: tests.length,
        pendingTests: tests.filter(test => test.status !== 'completed').length,
        completedTests: tests.filter(test => test.status === 'completed').length
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

  if (loading) return <div className="p-8 text-center text-gray-500">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Lab Technician Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage laboratory tests and reports.</p>
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

        {/* Attendance Action Bar */}
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
          {/* Main Stats & Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-blue-500 text-3xl mb-3"><FaVial /></div>
                <h3 className="text-2xl font-bold text-gray-900">{stats.totalTests}</h3>
                <p className="text-gray-600">Total Tests</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-green-500 text-3xl mb-3"><FaCheckCircle /></div>
                <h3 className="text-2xl font-bold text-gray-900">{stats.completedTests}</h3>
                <p className="text-gray-600">Completed</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-amber-500 text-3xl mb-3"><FaExclamationCircle /></div>
                <h3 className="text-2xl font-bold text-gray-900">{stats.pendingTests}</h3>
                <p className="text-gray-600">Pending</p>
              </motion.div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Recent Test Reports</h2>
                <Link to="/lab-technician/test-reports" className="text-blue-600 font-medium hover:underline text-sm">View All</Link>
              </div>

              {recentTests.length === 0 ? (
                <div className="p-8 text-center text-gray-500">No test reports uploaded recently.</div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {recentTests.map((test) => (
                    <div key={test.id} className="p-4 hover:bg-gray-50 transition flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${test.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                          <FaVial />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">{test.test_name}</p>
                          <p className="text-sm text-gray-500">Patient ID: {test.patient_id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${test.status === 'completed' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-amber-50 text-amber-700 border border-amber-100'}`}>
                          {test.status}
                        </span>
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
              <h3 className="font-bold text-gray-800 mb-6">Lab Actions</h3>
              <div className="space-y-3">
                <button onClick={() => setActiveSection('/testreports', { openUploadModal: true })} className="block w-full text-left p-4 rounded-xl bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition flex items-center gap-3">
                  <FaFileMedical /> Upload Test Report
                </button>
                <button onClick={() => setActiveSection('/testreports')} className="block w-full text-left p-4 rounded-xl bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition flex items-center gap-3">
                  <FaVial /> Manage Lab Tests
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LabTechnicianDashboard;
