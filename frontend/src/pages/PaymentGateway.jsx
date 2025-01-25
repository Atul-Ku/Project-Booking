import React from 'react';

const PaymentGateway = () => {
  const loadRazorpay = () => {
    console.log("Loading Razorpay SDK...");
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpay();

    if (!res) {
      alert('Failed to load Razorpay SDK. Check your internet connection.');
      return;
    }

    // Call the Django backend to create an order
    const data = await fetch('http://localhost:8000/api/razorpay/order', {
      method: 'POST',
    }).then((t) => t.json());

    const options = {
      key: 'your-razorpay-key-id', // Replace with your Razorpay Key ID
      amount: data.amount,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://your-logo-url.com',
      order_id: data.id, // This is the order_id from your backend
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <h1>Book Your Tickets</h1>
      <button onClick={handlePayment}>Proceed to Pay</button>
    </div>
  );
};

export default PaymentGateway;
