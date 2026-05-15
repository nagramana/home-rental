import React, {

  useState

} from "react";

const OtpLogin = () => {

  const [mobile, setMobile] = useState("");

  const [generatedOtp, setGeneratedOtp] = useState("");

  const [enteredOtp, setEnteredOtp] = useState("");

  /* SEND OTP */

  const sendOtp = () => {

    if(mobile.length !== 10){

      alert("Enter Valid Mobile Number");

      return;

    }

    /* TAKE MIDDLE 4 DIGITS */

    const middleFour = mobile.slice(3, 7);

    setGeneratedOtp(middleFour);

    alert(
      `Demo OTP: ${middleFour}`
    );

  };

  /* VERIFY OTP */

  const verifyOtp = () => {

    if(enteredOtp === generatedOtp){

      alert("OTP Login Successful");

    } else {

      alert("Invalid OTP");

    }

  };

  return (

    <div
      style={{
        width:"100%",
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"#F8FAFC",
        padding:"20px"
      }}
    >

      <div
        style={{
          width:"100%",
          maxWidth:"450px",
          background:"#fff",
          padding:"40px",
          borderRadius:"20px",
          boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
        }}
      >

        <h1
          style={{
            textAlign:"center",
            marginBottom:"30px"
          }}
        >
          OTP Login
        </h1>

        {/* MOBILE NUMBER */}

        <input
          type="number"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value)
          }
          style={{
            width:"100%",
            padding:"15px",
            marginBottom:"20px",
            border:"1px solid #ddd",
            borderRadius:"10px"
          }}
        />

        <button
          onClick={sendOtp}
          style={{
            width:"100%",
            padding:"15px",
            border:"none",
            background:"#2563EB",
            color:"#fff",
            borderRadius:"10px",
            marginBottom:"20px",
            cursor:"pointer"
          }}
        >

          Send OTP

        </button>

        {/* OTP INPUT */}

        <input
          type="text"
          placeholder="Enter OTP"
          value={enteredOtp}
          onChange={(e) =>
            setEnteredOtp(e.target.value)
          }
          style={{
            width:"100%",
            padding:"15px",
            marginBottom:"20px",
            border:"1px solid #ddd",
            borderRadius:"10px"
          }}
        />

        <button
          onClick={verifyOtp}
          style={{
            width:"100%",
            padding:"15px",
            border:"none",
            background:"green",
            color:"#fff",
            borderRadius:"10px",
            cursor:"pointer"
          }}
        >

          Verify OTP

        </button>

      </div>

    </div>

  );
};

export default OtpLogin;