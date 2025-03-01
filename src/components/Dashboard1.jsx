import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { WiDegrees } from "react-icons/wi";
import Dashboard_temp from "./Dashboard_temp";
import Dashboard3 from "./Dashboard3";
import Navigation from "./Navigation";

const Dashboard1 = () => {
  const [data, setData] = useState({
    temperature: 0,
    sunlight: 0,
    windspeed: 0,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
    location: "New Delhi",
    longitude: "77.1461",
    latitude: "12.2602",
    time: "",

    temperature: 24,
    sunlight: 3.87,
    windspeed: 7.9,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
    location: "New Delhi",
    longitude: 28.6139,
    latitude: 77.2088,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setData((prevData) => ({
        ...prevData,
        time: now.toLocaleTimeString(),
        date: now.toLocaleDateString(),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div>
          <Navigation />
        </div>
        <div className="parent">
          <div className="Dash_U bg-[#222831]">
            <div className="left_side">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "relative",
                  paddingBottom: "20px",
                }}
              >
                <div>
                  longitude:{" "}
                  <input
                    className="outline-hidden border-none"
                    value={data.longitude}
                    name="longitude"
                    onChange={handleInputChange}
                    type="text"
                  ></input>
                </div>
                <div>
                  latitude:{" "}
                  <input
                    className="outline-hidden border-none"
                    value={data.latitude}
                    name="latitude"
                    onChange={handleInputChange}
                    type="text"
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                {/* <h1 style={{position:'absolute',left:'26%'}}><WiDegrees /></h1> */}
                <h1 className="h1A">{data.temperature} </h1>{" "}
                <h1 className="h1B">{"\u00B0"}C</h1>
              </div>
              <div className="same_l">
                <div>
                  <FaCalendarAlt />
                </div>
                <div>{data.date}</div>
                <div>{data.time}</div>
              </div>
              <div className="same_l">
                <div>
                  <CiLocationOn />
                </div>
                <div>{data.location}</div>
              </div>
            </div>
            <div className="right_side">
              <div className="same_l">
                <div>
                  <FaWind size={80} className="-ml-8" />
                </div>
                <p className="text-xl">{data.windspeed ? 100 : 20} Km/h</p>
              </div>
              <div className="same_l">
                <div>
                  <IoIosSunny size={80} className="-ml-8" />
                </div>
                <p className="text-xl">{data.sunlight ? 120 : 30} °C</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Dashboard_temp />
        </div>
        <div>
          <Dashboard3 />
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
