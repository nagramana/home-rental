import React from "react";

import {

  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell

} from "recharts";

const Analytics = () => {

  /* BAR CHART DATA */

  const revenueData = [

    {
      month:"Jan",
      revenue:12000
    },

    {
      month:"Feb",
      revenue:18000
    },

    {
      month:"Mar",
      revenue:25000
    },

    {
      month:"Apr",
      revenue:32000
    },

    {
      month:"May",
      revenue:42000
    },

    {
      month:"Jun",
      revenue:50000
    }

  ];

  /* PIE CHART DATA */

  const bookingData = [

    {
      name:"Bookings",
      value:235
    },

    {
      name:"Favorites",
      value:780
    },

    {
      name:"Views",
      value:12450
    }

  ];

  const COLORS = [

    "#2563eb",

    "#16a34a",

    "#f59e0b"

  ];

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#0f172a",
        color:"#fff",
        padding:"30px"
      }}
    >

      {/* TOP */}

      <div
        style={{
          marginBottom:"40px"
        }}
      >

        <h1
          style={{
            fontSize:"42px",
            marginBottom:"10px"
          }}
        >

          Property Analytics

        </h1>

        <p
          style={{
            color:"#94a3b8",
            fontSize:"18px"
          }}
        >

          Real Estate Insights Dashboard

        </p>

      </div>

      {/* STATS */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
          gap:"25px",
          marginBottom:"40px"
        }}
      >

        {/* CARD */}

        <div
          style={{
            background:"#1e293b",
            padding:"30px",
            borderRadius:"24px"
          }}
        >

          <h3>
            Total Views
          </h3>

          <h1
            style={{
              fontSize:"42px",
              marginTop:"15px"
            }}
          >

            12,450

          </h1>

        </div>

        {/* CARD */}

        <div
          style={{
            background:"#1e293b",
            padding:"30px",
            borderRadius:"24px"
          }}
        >

          <h3>
            Bookings
          </h3>

          <h1
            style={{
              fontSize:"42px",
              marginTop:"15px"
            }}
          >

            235

          </h1>

        </div>

        {/* CARD */}

        <div
          style={{
            background:"#1e293b",
            padding:"30px",
            borderRadius:"24px"
          }}
        >

          <h3>
            Favorites
          </h3>

          <h1
            style={{
              fontSize:"42px",
              marginTop:"15px"
            }}
          >

            780

          </h1>

        </div>

      </div>

      {/* CHARTS */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(400px,1fr))",
          gap:"30px"
        }}
      >

        {/* BAR CHART */}

        <div
          style={{
            background:"#1e293b",
            padding:"30px",
            borderRadius:"24px",
            height:"400px"
          }}
        >

          <h2
            style={{
              marginBottom:"20px"
            }}
          >

            Revenue Overview

          </h2>

          <ResponsiveContainer
            width="100%"
            height="85%"
          >

            <BarChart
              data={revenueData}
            >

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="revenue"
                fill="#2563eb"
                radius={[8,8,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}

        <div
          style={{
            background:"#1e293b",
            padding:"30px",
            borderRadius:"24px",
            height:"400px"
          }}
        >

          <h2
            style={{
              marginBottom:"20px"
            }}
          >

            User Activity

          </h2>

          <ResponsiveContainer
            width="100%"
            height="85%"
          >

            <PieChart>

              <Pie
                data={bookingData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label
              >

                {bookingData.map(
                  (entry, index) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />

                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );
};

export default Analytics;