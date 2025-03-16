import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function DonationsPage() {
  const [showUpiDetails, setShowUpiDetails] = useState(null); // Initialize as null, can be category name
  const [donationAmount, setDonationAmount] = useState('');

  const sectionStyle = {
    margin: '20px 0',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };
  const headingStyle = {
    marginBottom: '15px',
    color: '#333',
  };
  const categoryStyle = {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '10px',
    border: '1px solid #dee2e6',
  };
  const paymentButtonStyle = {
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  };
  const upiDetailsStyle = {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#e0f7fa',
    borderRadius: '5px',
    border: '1px solid #b2ebf2',
  };
  const inputStyle = {
    padding: '8px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ced4da',
  };

  const handleUpiClick = (category) => {
    setShowUpiDetails(category); // Set the category for which UPI is shown
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2><FaHeart style={{ marginRight: '10px' }} />Support Our Farmers Through Donations</h2>
      <p>Your donations can make a significant impact on the lives of farmers in need. Choose a category to donate to and help us support the farming community.</p>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Donation Categories</h3>

        <div style={categoryStyle}>
          <h4>Education for Children of Farmers</h4>
          <p>Help ensure the children of farmers receive quality education, breaking the cycle of poverty and empowering future generations.</p>
          <button style={paymentButtonStyle} onClick={() => handleUpiClick('education')}>Donate via UPI</button>
          <button style={paymentButtonStyle}>Donate via Bank Transfer</button>
          <button style={paymentButtonStyle}>Donate via Card</button>
          {showUpiDetails === 'education' && ( // Conditional rendering based on category
            <div style={upiDetailsStyle}>
              <p>UPI ID: <b>123456789@icici</b></p>
              <input
                type="number"
                style={inputStyle}
                placeholder="Enter Amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
              {donationAmount && <p>You are donating ₹{donationAmount} via UPI.</p>}
            </div>
          )}
        </div>

        <div style={categoryStyle}>
          <h4>Debt Relief for Farmers</h4>
          <p>Many farmers are burdened by debt. Your donation can help alleviate their financial stress and provide them with a fresh start.</p>
          <button style={paymentButtonStyle} onClick={() => handleUpiClick('debtRelief')}>Donate via UPI</button>
          <button style={paymentButtonStyle}>Donate via Bank Transfer</button>
          <button style={paymentButtonStyle}>Donate via Card</button>
          {showUpiDetails === 'debtRelief' && ( // Conditional rendering based on category
            <div style={upiDetailsStyle}>
              <p>UPI ID: <b>123456789@icici</b></p>
              <input
                type="number"
                style={inputStyle}
                placeholder="Enter Amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
              {donationAmount && <p>You are donating ₹{donationAmount} via UPI.</p>}
            </div>
          )}
        </div>

        <div style={categoryStyle}>
          <h4>Support for Farm Improvements</h4>
          <p>Contribute to improving farm infrastructure and technology, leading to better yields and sustainable farming practices.</p>
          <button style={paymentButtonStyle} onClick={() => handleUpiClick('farmImprovement')}>Donate via UPI</button>
          <button style={paymentButtonStyle}>Donate via Bank Transfer</button>
          <button style={paymentButtonStyle}>Donate via Card</button>
          {showUpiDetails === 'farmImprovement' && ( // Conditional rendering based on category
            <div style={upiDetailsStyle}>
              <p>UPI ID: <b>123456789@icici</b></p>
              <input
                type="number"
                style={inputStyle}
                placeholder="Enter Amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
              {donationAmount && <p>You are donating ₹{donationAmount} via UPI.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DonationsPage;
