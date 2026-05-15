import React, {

  useEffect,
  useState

} from "react";

import API from "../../services/api";

const Notifications = () => {

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    fetchNotifications();

  }, []);

  /* FETCH */

  const fetchNotifications = async () => {

    try {

      const res = await API.get(
        "/notifications"
      );

      setNotifications(
        res.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#0f172a",
        padding:"30px",
        color:"#fff"
      }}
    >

      {/* TOP */}

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:"40px",
          flexWrap:"wrap",
          gap:"20px"
        }}
      >

        <div>

          <h1
            style={{
              fontSize:"42px",
              marginBottom:"10px"
            }}
          >

            Notifications

          </h1>

          <p
            style={{
              color:"#94a3b8",
              fontSize:"18px"
            }}
          >

            Stay updated with your activity

          </p>

        </div>

        <div
          style={{
            background:"#1e293b",
            padding:"14px 24px",
            borderRadius:"16px",
            fontSize:"18px"
          }}
        >

          🔔 {notifications.length}

        </div>

      </div>

      {/* NOTIFICATION LIST */}

      {notifications.length > 0 ? (

        notifications.map((notification) => (

          <div
            key={notification._id}
            style={{
              background:"#1e293b",
              padding:"25px",
              borderRadius:"22px",
              marginBottom:"20px",
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center",
              flexWrap:"wrap",
              gap:"20px",
              boxShadow:
              "0 10px 25px rgba(0,0,0,0.2)"
            }}
          >

            {/* LEFT */}

            <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"20px"
              }}
            >

              <div
                style={{
                  width:"70px",
                  height:"70px",
                  borderRadius:"18px",
                  background:"#2563eb",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  fontSize:"32px"
                }}
              >

                🔔

              </div>

              <div>

                <h2
                  style={{
                    marginBottom:"10px"
                  }}
                >

                  {notification.title}

                </h2>

                <p
                  style={{
                    color:"#94a3b8",
                    lineHeight:"1.6"
                  }}
                >

                  {notification.message}

                </p>

              </div>

            </div>

            {/* STATUS */}

            <div
              style={{
                background:
                notification.read
                ? "#16a34a"
                : "#f59e0b",
                padding:"10px 18px",
                borderRadius:"30px",
                fontSize:"14px",
                fontWeight:"bold"
              }}
            >

              {notification.read
                ? "Read"
                : "New"}

            </div>

          </div>

        ))

      ) : (

        <div
          style={{
            background:"#1e293b",
            padding:"60px",
            borderRadius:"24px",
            textAlign:"center"
          }}
        >

          <h2
            style={{
              fontSize:"32px",
              marginBottom:"20px"
            }}
          >

            No Notifications

          </h2>

          <p
            style={{
              color:"#94a3b8"
            }}
          >

            Notifications will appear here

          </p>

        </div>

      )}

    </div>

  );
};

export default Notifications;