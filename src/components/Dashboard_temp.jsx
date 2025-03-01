import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useState, useEffect } from "react";
import { bottomNavigationActionClasses } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard_temp = () => {
  return (
    <>
      <div className="second_dash my-10">
        <div className="first_2 bg-[#222831] text-white rounded-xl mx-2 px-5 ">
          <div>
            <h3 className="font-extrabold">Solar Panel Generation</h3>
          </div>
          <p>today's max: {100} KWH</p>
          <p>todays's low: {90} KWH</p>
          <p>non generating hours: {11}</p>
        </div>
        <div className="second_2">
          <Link to={"./ten_days"}>
            <div>
              <LineChart
                xAxis={[
                  { data: [1, 2, 3, 5, 8, 10], label: "Time (in hours)" },
                ]}
                yAxis={[{ label: "Power Generation (in kWh)" }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    label: "solar panel",
                  },
                  {
                    data: [3, 4.5, 4, 8.5, 1, 5],
                    label: "windmill",
                  },
                ]}
                width={800}
                height={350}
              />
            </div>
          </Link>
        </div>
        <div className="third_2 px-5 bg-[#222831] text-white rounded-xl m-5 p-5">
          <div
            className="font-extrabold"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <h3>Wind Trubine Generation</h3>
          </div>
          <p>today's max:</p>
          <p>todays's low:</p>
          <p>non generating hours:</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard_temp;
