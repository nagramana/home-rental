import React from "react";

import { useNavigate } from "react-router-dom";

import "./BookingSuccess.css";

const BookingSuccess = () => {

  const navigate = useNavigate();

  return (

    <section className="success-page">

      <div className="success-card">

        <div className="success-icon">
          ✅
        </div>

        <h1>
          Booking Successful
        </h1>

        <p>
          Your property booking has been confirmed successfully.
        </p>

        <div className="success-buttons">

          <button
            onClick={() =>
              navigate("/bookings")
            }
          >

            View My Bookings

          </button>

          <button
            className="home-btn"
            onClick={() =>
              navigate("/")
            }
          >

            Back To Home

          </button>

        </div>

      </div>

    </section>

  );
};

export default BookingSuccess;