import React from 'react';

const SuccessfulPaymentPage = () => {
    const containerStyle = {
      textAlign: 'center',
      padding: '40px',
    };
  
    const iconStyle = {
      fontSize: '4rem',
      color: '#28a745', /* Green color */
    };
  
    const headingStyle = {
      marginTop: '20px',
      fontSize: '2rem',
      color: '#333',
    };
  
    const messageStyle = {
      marginTop: '10px',
      fontSize: '1.2rem',
      color: '#666',
    };
  
    const buttonStyle = {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#007bff', /* Blue color */
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    };
  
    const handleContinueShopping = () => {
      window.location.href = '/';
    };
  
    return (
      <div style={containerStyle}>
        <div style={iconStyle}>&#10004;</div>
        <h1 style={headingStyle}>Payment Successful!</h1>
        <p style={messageStyle}>Thank you for your purchase. Your order has been successfully processed.</p>
        <p style={messageStyle}>An email with the order details has been sent to your registered email address.</p>
        <button style={buttonStyle} onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
    );
  };
export default SuccessfulPaymentPage;
