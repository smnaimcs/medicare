// src/services/patientService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

class PatientService {
  // Get all doctors with optional filters
  async getDoctors(filters = {}) {
    const params = new URLSearchParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params.append(key, filters[key]);
      }
    });

    const response = await axios.get(`${API_BASE_URL}/patient/doctors?${params}`);
    return response;
  }

  // Book a new appointment
  async bookAppointment(appointmentData) {
    const response = await axios.post(`${API_BASE_URL}/patient/appointments`, appointmentData);
    return response;
  }



  //get dashboard stats
  // Get patient dashboard statistics
  async getDashboardStats() {
    const response = await axios.get(`${API_BASE_URL}/patient/dashboard/stats`);
    return response;
  }




  // Get patient appointments
  async getAppointments(filters = {}) {
    const params = new URLSearchParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params.append(key, filters[key]);
      }
    });

    const response = await axios.get(`${API_BASE_URL}/patient/appointments?${params}`);
    return response;
  }

  // Cancel an appointment
  async cancelAppointment(appointmentId) {
    const response = await axios.put(`${API_BASE_URL}/patient/appointments/${appointmentId}/cancel`);
    return response;
  }

  // Get patient bills
  async getBills() {
    const response = await axios.get(`${API_BASE_URL}/patient/bills`);
    return response;
  }

  // Pay a bill
  async payBill(billId, paymentData) {
    const response = await axios.post(`${API_BASE_URL}/billing/bills/${billId}/pay`, paymentData);
    return response;
  }
  // Public search for doctors by name (no authentication required)
  async publicSearchDoctors(searchTerm) {
    const params = new URLSearchParams();
    if (searchTerm) params.append('search', searchTerm);

    // No auth headers, works for public (non-logged-in) users
    const response = await axios.get(`${API_BASE_URL}/patient/public/doctors?${params}`);
    return response;
  }

  // General doctor search (can be used with or without auth)
  async searchDoctors(searchTerm) {
    const params = new URLSearchParams();
    if (searchTerm) params.append('search', searchTerm);

    const response = await axios.get(`${API_BASE_URL}/patient/doctors?${params}`);
    return response;
  }

  // Get doctors by specialization/department
  async getDoctorsBySpecialization(specialization) {
    const params = new URLSearchParams();
    if (specialization) params.append('specialization', specialization);

    const response = await axios.get(`${API_BASE_URL}/patient/doctors?${params}`);
    return response;
  }

  // // Public search without token
  // async publicSearchDoctors(search) {
  //   const params = new URLSearchParams({ search });
  //   const response = await axios.get(`${API_BASE_URL}/patient/doctors-public?${params}`);
  //   return response;
  // }


}

export default new PatientService();