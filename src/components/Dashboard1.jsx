import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { WiDegrees } from "react-icons/wi";

const Dashboard1 = () => {
  const [data, setData] = useState({
      temperature: 0,
      sunlight: 0,
      windspeed: 0,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      location: 'New Delhi',
      longitude: '',
      latitude: ''
  });

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
          ...prevData,
          [name]: value
      }));
  }

  useEffect(() => {
      const interval = setInterval(() => {
          const now = new Date();
          setData((prevData) => ({
              ...prevData,
              time: now.toLocaleTimeString(),
              date: now.toLocaleDateString()
          }));
      }, 1000);

      return () => clearInterval(interval);
  }, []);

  return (
      <>
          <div>
              <div className='parent'>
              
                  <div className='Dash_U bg-gray-700'>
                      <div className='left_side'>
                      <div style={{position:'relative', paddingBottom:'20px'}}>
                        <div style={{position:'absolute'}}>
                           longitude: <input className="outline-hidden border-none" value={data.longitude} name='longitude' onChange={handleInputChange} type='text'></input> 
                        </div>
                        <div style={{position:'relative', left:'70%'}}>
                        latitude: <input value={data.latitude} name='latitude' onChange={handleInputChange} type='text' />
                        </div>
                        
                        
                      </div>

                          <div>
                              <h1 style={{position:'absolute',left:'26%'}}><WiDegrees /></h1>
                              <h1>{data.temperature}</h1>
                              
                          </div>
                          <div className='same_l'>
                              <div><FaCalendarAlt /></div>
                              <div>{data.date}</div>
                              <div>{data.time}</div>
                          </div>
                          <div className='same_l'>
                              <div><CiLocationOn /></div>
                              <div>{data.location}</div>
                          </div>
                      </div>
                      <div className='right_side'>
                          <div className='same_l'>
                              <div><FaWind /></div>
                              <div>{data.windspeed}</div>
                          </div>
                          <div className='same_l'>
                              <div><IoIosSunny /></div>
                              <div>{data.sunlight}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Dashboard1;