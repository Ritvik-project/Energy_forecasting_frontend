import React from 'react'
import { useState, useEffect } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { LineChart } from '@mui/x-charts/LineChart';

const Dashboard1 = () => {
  const [data, setData] = useState({
          temperature:0,
          sunlight:0,
          windspeed:0,
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
          location:0
      });
      
      const onchange =(e)=>{
          const{name,value} = e.target
          setData({...data,[name]:value})
      }
      useEffect(() => {
        const interval = setInterval(()=>{
            const now = new Date();
            setData((prevdata)=>({
                ...prevdata,
                time: now.toLocaleTimeString(),
                date: now.toLocaleDateString()
            }))
        },1000);
      
        return () => clearInterval(interval)
      }, []);
      

      
    return (
      <>
      <div className='parent'>
        <div className='Dash_U'>
            <div className='left_side'>
              <div>
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
      
      </>
    
  )
}

export default Dashboard1