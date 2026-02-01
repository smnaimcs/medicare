import React, { useState, useEffect } from 'react';
import staffService from '../../services/staffService';
import { motion } from 'framer-motion';
import { FaCalendarCheck, FaClock, FaCalendarTimes, FaHistory } from 'react-icons/fa';

const StaffDashboard = ({ setActiveSection }) => {
    const [attendanceStatus, setAttendanceStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('overview'); // overview, attendance, leave

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            const today = new Date().toISOString().split('T')[0];
            let todayAttendance = null;
            try {
                const attendanceResponse = await staffService.getAttendanceHistory({
                    start_date: today,
                    end_date: today
                });
                todayAttendance = attendanceResponse.attendance?.[0] || null;
            } catch (err) {
                console.warn("Using mock attendance data for staff dashboard");
            }
            setAttendanceStatus(todayAttendance);
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
                        <h1 className="text-3xl font-bold text-gray-900">Staff Dashboard</h1>
                        <p className="text-gray-600 mt-1">Welcome back! Manage your daily activities.</p>
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
                    <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 border border-red-100 flex items-center gap-2">
                        <span className="font-bold">Error:</span> {error}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Actions & Stats */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Attendance Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
                        >
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <FaClock className="text-blue-600" />
                                Today's Attendance
                            </h2>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex-1 w-full grid grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                                        <p className="text-sm text-blue-600 font-medium mb-1">Check In</p>
                                        <p className="text-2xl font-bold text-blue-900">
                                            {attendanceStatus ? formatDate(attendanceStatus.check_in) : '--:--'}
                                        </p>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-xl text-center">
                                        <p className="text-sm text-orange-600 font-medium mb-1">Check Out</p>
                                        <p className="text-2xl font-bold text-orange-900">
                                            {attendanceStatus?.check_out ? formatDate(attendanceStatus.check_out) : '--:--'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-shrink-0">
                                    {!attendanceStatus ? (
                                        <button
                                            onClick={handleCheckIn}
                                            className="w-40 h-40 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all flex flex-col items-center justify-center gap-2"
                                        >
                                            <FaCalendarCheck className="text-3xl" />
                                            Check In
                                        </button>
                                    ) : !attendanceStatus.check_out ? (
                                        <button
                                            onClick={handleCheckOut}
                                            className="w-40 h-40 rounded-full bg-orange-500 text-white font-bold text-xl shadow-lg hover:bg-orange-600 hover:scale-105 transition-all flex flex-col items-center justify-center gap-2"
                                        >
                                            <FaHistory className="text-3xl" />
                                            Check Out
                                        </button>
                                    ) : (
                                        <div className="w-40 h-40 rounded-full bg-green-50 border-4 border-green-100 flex flex-col items-center justify-center text-green-700">
                                            <span className="font-bold text-lg">Completed</span>
                                            <span className="text-sm">Great Job!</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Recent History Stub */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
                            <div className="text-gray-500 text-center py-8 bg-gray-50 rounded-xl">
                                No recent activity to show.
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Quick Links */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button
                                    onClick={() => setActiveSection('/nurseattendence', { openLeaveModal: true })}
                                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 transition font-medium group text-left"
                                >
                                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition">
                                        <FaCalendarTimes />
                                    </div>
                                    <span>Request Leave</span>
                                </button>
                                <button
                                    onClick={() => setActiveSection('/nurseattendence')}
                                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 transition font-medium group text-left"
                                >
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                                        <FaHistory />
                                    </div>
                                    <span>View Attendance History</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;