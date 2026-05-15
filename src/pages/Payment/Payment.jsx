import React from "react";

import { useNavigate } from "react-router-dom";

import API from "../../services/api";

import "./Payment.css";

const Payment = () => {

  const navigate = useNavigate();

  const handlePayment = async () => {

    try {

      await API.post(

        "/bookings",

        {
          propertyId:"123456789",
          amount:5000
        }

      );

      alert(
        "✅ Payment Successful"
      );

      navigate(
        "/booking-success"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Payment Failed"
      );

    }

  };

  return (

    <section className="payment-page">

      <div className="payment-card">

        <h1>
          Home Rent Booking
        </h1>

        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
          alt=""
        />

        <div className="payment-info">

          <h2>
            Luxury 2BHK Apartment
          </h2>

          <p>
            📍 Hyderabad, India
          </p>

          <h3>
            ₹5,000
          </h3>

          <button
            onClick={handlePayment}
          >

            Pay Now

          </button>

        </div>

      </div>

    </section>

  );
};

export default Payment;