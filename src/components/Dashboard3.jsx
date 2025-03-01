import React, { useEffect, useState } from 'react'
import datax from './datax.json'
import { FaWind } from "react-icons/fa";

const Dashboard3 = () => {
    const [w_data, setw_data] = useState({
        temperature: [],
        solar: [],
        wind: [],
        time: []
    })

    useEffect(() => {
        if (datax && datax.hourly) {
            const limitedData = {
                time: datax.hourly.time.slice(0, 24).map(time => time.split('T')[1]),
                temperature: datax.hourly.temperature_2m.slice(0, 24),
                wind: datax.hourly.wind_speed_10m.slice(0, 24)
            };

            setw_data(prev => ({
                ...prev,
                ...limitedData
            }));
        }
    }, []);

    return (
        <>
            <div className="lower_d">
                {w_data.time.length > 0 ? (
                    w_data.time.map((time, index) => (
                        <div key={index} className="widgets">
                                <h1>{time}</h1>
                                <h2>{w_data.temperature[index]}°C</h2>
                                <div style={{display:'flex',flexDirection: 'row'}}><h2>{w_data.wind[index]}</h2></div>
                                
                        </div>
                    ))
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </>
    )
}

export default Dashboard3
