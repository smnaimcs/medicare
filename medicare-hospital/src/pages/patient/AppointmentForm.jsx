import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AppointmentForm() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedDoctor = location.state?.doctor;

  const [bookingData, setBookingData] = useState({
    appointment_date: "",
    reason: "",
    symptoms: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  if (!user) {
    // hard guard (extra safety)
    navigate("/login", {
      state: { redirectTo: "/appointment-form" }
    });
    return null;
  }

  if (!selectedDoctor) {
    return <h2 className="p-8 text-center">No doctor selected</h2>;
  }

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO: replace with real API call
    setTimeout(() => {
      setSuccess("Appointment booked successfully");
      setLoading(false);

      setTimeout(() => {
        alert("Go to Dashboard for further activity");
        navigate("/dashboard");
      }, 800);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-6">Book Appointment</h2>

        {success ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
            <h3 className="text-emerald-800 font-bold text-lg">{success}</h3>
            <p className="text-sm text-emerald-600 mt-2">
              Redirecting to dashboard...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Doctor Info */}
            <div className="bg-gray-100 rounded-xl p-4">
              <p><strong>Doctor:</strong> Dr. {selectedDoctor.user.first_name} {selectedDoctor.user.last_name}</p>
              <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
              <p><strong>Fee:</strong> ${selectedDoctor.consultation_fee}</p>
            </div>

            <input
              type="datetime-local"
              name="appointment_date"
              required
              min={new Date().toISOString().slice(0, 16)}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

            <textarea
              name="reason"
              required
              placeholder="Reason for visit"
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

            <textarea
              name="symptoms"
              placeholder="Symptoms (optional)"
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gray-800 text-white rounded-xl font-semibold"
            >
              {loading ? "Booking..." : "Confirm Appointment"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
