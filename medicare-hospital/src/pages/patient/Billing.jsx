
import React, { useState, useEffect } from 'react';
import patientService from '../../services/patientService';
import { motion } from 'framer-motion';
import { FaFileInvoiceDollar, FaCalendarAlt, FaDollarSign, FaCheckCircle, FaClock, FaExclamationCircle, FaCreditCard, FaMoneyBillWave, FaUniversity } from 'react-icons/fa';

function Billing() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedBill, setSelectedBill] = useState(null);
  const [paymentData, setPaymentData] = useState({
    payment_method: 'cash',
    amount: 0
  });

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      setLoading(true);
      const response = await patientService.getBills();
      setBills(response.bills || []);
    } catch (error) {
      setError('Failed to fetch bills');
      console.error('Error fetching bills:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePayBill = async (bill) => {
    setSelectedBill(bill);
    setPaymentData({
      payment_method: 'cash',
      amount: bill.final_amount
    });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!selectedBill) return;

    try {
      await patientService.payBill(selectedBill.id, paymentData);
      alert('Payment processed successfully!');
      setSelectedBill(null);
      fetchBills();
    } catch (error) {
      alert('Failed to process payment');
      console.error('Error processing payment:', error);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        border: 'border-yellow-200',
        icon: <FaClock className="inline mr-1" />
      },
      paid: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        border: 'border-green-200',
        icon: <FaCheckCircle className="inline mr-1" />
      },
      overdue: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        border: 'border-red-200',
        icon: <FaExclamationCircle className="inline mr-1" />
      }
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${config.bg} ${config.text} ${config.border}`}>
        {config.icon}
        <span className="capitalize">{status}</span>
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getPaymentMethodIcon = (method) => {
    switch (method) {
      case 'card': return <FaCreditCard className="text-xl" />;
      case 'cash': return <FaMoneyBillWave className="text-xl" />;
      case 'bank': return <FaUniversity className="text-xl" />;
      default: return <FaDollarSign className="text-xl" />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium text-lg">Loading bills...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            My Bills
          </h1>
          <p className="text-gray-600 mt-1">Manage and pay your medical bills</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-sm">
          <FaFileInvoiceDollar className="text-gray-600" />
          <span className="font-semibold text-gray-800">{bills.length} Bills</span>
        </div>
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-2xl"
        >
          <p className="text-red-800 font-medium">{error}</p>
        </motion.div>
      )}

      {/* Empty State */}
      {bills.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 p-12"
        >
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaFileInvoiceDollar className="text-5xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Bills Found</h3>
            <p className="text-gray-600">You don't have any bills at the moment.</p>
          </div>
        </motion.div>
      ) : (
        /* Bills Grid */
        <div className="grid gap-6">
          {bills.map((bill, index) => (
            <motion.div
              key={bill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
            >
              {/* Bill Header */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <FaFileInvoiceDollar className="text-gray-600" />
                      {bill.bill_number}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <FaCalendarAlt className="text-gray-400" />
                      Due: {formatDate(bill.due_date)}
                    </p>
                  </div>
                  {getStatusBadge(bill.status)}
                </div>
              </div>

              {/* Bill Details */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">Total Amount:</span>
                    <span className="text-gray-800 font-semibold text-lg">{formatCurrency(bill.total_amount)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <span className="text-gray-600 font-medium">Tax:</span>
                    <span className="text-gray-800 font-semibold">{formatCurrency(bill.tax_amount)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-gray-100">
                    <span className="text-gray-600 font-medium">Discount:</span>
                    <span className="text-green-600 font-semibold">-{formatCurrency(bill.discount_amount)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-t-2 border-gray-300 bg-gradient-to-r from-gray-50 to-slate-50 -mx-6 px-6 mt-4">
                    <span className="text-gray-800 font-bold text-lg">Final Amount:</span>
                    <span className="text-gray-900 font-bold text-2xl">{formatCurrency(bill.final_amount)}</span>
                  </div>
                </div>

                {/* Pay Button */}
                {bill.status === 'pending' && (
                  <button
                    onClick={() => handlePayBill(bill)}
                    className="w-full py-3 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <FaDollarSign />
                    Pay Now
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Payment Modal */}
      {selectedBill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <FaDollarSign />
                Pay Bill
              </h2>
              <button
                onClick={() => setSelectedBill(null)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Bill Summary */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Bill Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bill Number:</span>
                    <span className="font-semibold text-gray-800">{selectedBill.bill_number}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Due:</span>
                    <span className="font-bold text-gray-900 text-lg">{formatCurrency(selectedBill.final_amount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="font-semibold text-gray-800">{formatDate(selectedBill.due_date)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <select
                    name="payment_method"
                    value={paymentData.payment_method}
                    onChange={(e) => setPaymentData({ ...paymentData, payment_method: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                    required
                  >
                    <option value="cash">💵 Cash</option>
                    <option value="card">💳 Credit/Debit Card</option>
                    <option value="bank">🏦 Bank Transfer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                    <input
                      type="number"
                      step="0.01"
                      value={paymentData.amount}
                      onChange={(e) => setPaymentData({ ...paymentData, amount: parseFloat(e.target.value) })}
                      required
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedBill(null)}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePaymentSubmit}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Process Payment
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Billing;