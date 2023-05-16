import React, { useState } from 'react';
import './Payment.css';

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!cardNumber || !cardExpiry || !cardCvv) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    const [month, year] = cardExpiry.split('/');
    if (!/^\d{2}$/.test(month) || !/^\d{2}$/.test(year)) {
      setErrorMessage('Invalid expiration date');
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/api/auth/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cardNumber,
          cardExpiry,
          cardCvv
        })
      });
      console.log(response);
      // Handle successful payment response
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='Payment'>
      <div className="auth-form-container">
        <form className="payment-form" onSubmit={handleSubmit}>
          <h2>Complete Your Payment</h2>
          <label>Card Number<input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} /></label><br />
          <label>Expiration Date<input type="text" id="cardExpiry" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} /></label><br />
          <label>CVV<input type="text" id="cardCvv" value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} /></label><br />

          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit" className="submit-button">Submit Payment</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
