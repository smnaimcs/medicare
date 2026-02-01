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
  // Inside patientService.js, at the bottom of the class
async publicSearchDoctors(searchTerm) {
  const params = new URLSearchParams();
  if (searchTerm) params.append('search', searchTerm);

  // No auth headers, works for public (non-logged-in) users
  const response = await axios.get(`${API_BASE_URL}/patient/public/doctors?${params}`);
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








// // // src/services/patientService.js
// // import axios from 'axios';
// // import authService from './authService';

// // const API_BASE_URL = 'http://localhost:5000/api';

// // class PatientService {
// //   // Helper: get headers with token if available
// //   getHeaders() {
// //     const token = authService.getToken() || localStorage.getItem('token');
// //     return token
// //       ? { Authorization: `Bearer ${token}` }
// //       : {};
// //   }

// //   /**
// //    * Get all doctors with optional filters
// //    * @param {Object} filters
// //    */
// //   async getDoctors(filters = {}) {
// //     try {
// //       const params = new URLSearchParams();
// //       Object.keys(filters).forEach((key) => {
// //         if (filters[key]) params.append(key, filters[key]);
// //       });

// //       const response = await axios.get(
// //         `${API_BASE_URL}/patient/doctors`,
// //         {
// //           params,
// //           headers: this.getHeaders(),
// //         }
// //       );
// //       return response;
// //     } catch (error) {
// //       console.error('Doctor search failed:', error);
// //       throw error;
// //     }
// //   }

// //   /**
// //    * Book a new appointment
// //    * @param {Object} appointmentData
// //    */
// //   async bookAppointment(appointmentData) {
// //     try {
// //       const response = await axios.post(
// //         `${API_BASE_URL}/patient/appointments`,
// //         appointmentData,
// //         { headers: this.getHeaders() }
// //       );
// //       return response;
// //     } catch (error) {
// //       console.error('Booking appointment failed:', error);
// //       throw error;
// //     }
// //   }

// //   /**
// //    * Get patient dashboard statistics
// //    */
// //   async getDashboardStats() {
// //     try {
// //       const response = await axios.get(
// //         `${API_BASE_URL}/patient/dashboard/stats`,
// //         { headers: this.getHeaders() }
// //       );
// //       return response.data;
// //     } catch (error) {
// //       console.error('Fetching dashboard stats failed:', error);
// //       throw error;
// //     }
// //   }

// //   /**
// //    * Get patient appointments with optional filters
// //    * @param {Object} filters
// //    */
// //   async getAppointments(filters = {}) {
// //     try {
// //       const params = new URLSearchParams();
// //       Object.keys(filters).forEach((key) => {
// //         if (filters[key]) params.append(key, filters[key]);
// //       });

// //       const response = await axios.get(
// //         `${API_BASE_URL}/patient/appointments`,
// //         { params, headers: this.getHeaders() }
// //       );
// //       return response;
// //     } catch (error) {
// //       console.error('Fetching appointments failed:', error);
// //       throw error;
// //     }
// //   }

// //   /**
// //    * Cancel an appointment
// //    * @param {string} appointmentId
// //    */
// //   async cancelAppointment(appointmentId) {
// //     try {
// //       const response = await axios.put(
// //         `${API_BASE_URL}/patient/appointments/${appointmentId}/cancel`,
// //         null,
// //         { headers: this.getHeaders() }
// //       );
// //       return response;
// //     } catch (error) {
// //       console.error('Canceling appointment failed:', error);
// //       throw error;
// //     }
// //   }

// //   /**
// //    * Get patient bills
// //    */
// //   async getBills() {
// //     try {
// //       const response = await axios.get(
// //         `${API_BASE_URL}/patient/bills`,
// //         { headers: this.getHeaders() }
// //       );
// //       return response;
// //     } catch (error) {
// //       console.error('Fetching bills failed:', error);
// //       throw error;
// //     }
// //   }

// //   /**
// //    * Pay a bill
// //    * @param {string} billId
// //    * @param {Object} paymentData
// //    */
// //   async payBill(billId, paymentData) {
// //     try {
// //       const response = await axios.post(
// //         `${API_BASE_URL}/billing/bills/${billId}/pay`,
// //         paymentData,
// //         { headers: this.getHeaders() }
// //       );
// //       return response;
// //     } catch (error) {
// //       console.error('Paying bill failed:', error);
// //       throw error;
// //     }
// //   }
// // }

// // export default new PatientService();














// // src/services/patientService.js
// import axios from 'axios';
// import authService from './authService'; // keep for token handling in logged-in methods

// const API_BASE_URL = 'http://localhost:5000/api';

// class PatientService {
//   // Existing methods for logged-in users
//   async getDoctors(filters = {}) {
//     const params = new URLSearchParams();
//     Object.keys(filters).forEach(key => {
//       if (filters[key]) params.append(key, filters[key]);
//     });

//     const token = authService.getToken(); // keep existing token logic
//     const response = await axios.get(`${API_BASE_URL}/patient/doctors?${params}`, {
//       headers: token ? { Authorization: `Bearer ${token}` } : {},
//     });
//     return response;
//   }

//   async bookAppointment(appointmentData) {
//     const token = authService.getToken();
//     const response = await axios.post(`${API_BASE_URL}/patient/appointments`, appointmentData, {
//       headers: token ? { Authorization: `Bearer ${token}` } : {},
//     });
//     return response;
//   }

//   async getDashboardStats() {
//     const token = authService.getToken();
//     const response = await axios.get(`${API_BASE_URL}/patient/dashboard/stats`, {
//       headers: token ? { Authorization: `Bearer ${token}` } : {},
//     });
//     return response.data;
//   }

//   async getAppointments(filters = {}) {
//     const params = new URLSearchParams();
//     Object.keys(filters).forEach(key => {
//       if (filters[key]) params.append(key, filters[key]);
//     });

//     const token = authService.getToken();
//     const response = await axios.get(`${API_BASE_URL}/patient/appointments?${params}`, {
//       headers: token ? { Authorization: `Bearer ${token}` } : {},
//     });
//     return response;
//   }

//   async cancelAppointment(appointmentId) {
//     const token = authService.getToken();
//     const response = await axios.put(`${API_BASE_URL}/patient/appointments/${appointmentId}/cancel`, {}, {
//       headers: token ? { Authorization: `Bearer ${token}` } : {},
//     });
//     return response;
//   }

//   async getBills() {
//     const token = authService.getToken();
//     const response = await axios.get(`${API_BASE_URL}/patient/bills`, {
//       headers: token ? { Authorization: `Bearer ${token}` } : {},
//     });
//     return response;
//   }

//   async payBill(billId, paymentData) {
//     const token = authService.getToken();
//     const response = await axios.post(`${API_BASE_URL}/billing/bills/${billId}/pay`, paymentData, {
//       headers: token ? { Authorization: `Bearer ${token}` } : {},
//     });
//     return response;
//   }

//   // ---------- NEW METHOD: Public doctor search (no login required) ----------
//   async publicSearchDoctors(searchTerm) {
//     if (!searchTerm) return { data: [] };
//     const params = new URLSearchParams({ search: searchTerm });
//     const response = await axios.get(`${API_BASE_URL}/patient/doctors?${params}`);
//     return response;
//   }
// }

// export default new PatientService();
