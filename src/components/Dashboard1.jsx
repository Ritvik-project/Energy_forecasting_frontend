import React from 'react'
import { useState } from 'react';

const Dashboard1 = () => {
  const [data, setData] = useState({
          temperature:0,
          sunlight:0,
          windspeed:0,
          time:0,
      });
      const onchange =(e)=>{
          const{name,value} = e.target
          setData({...data,[name]:value})
      }
      
    return (
      <>
      <div className='Dash_U'>
        <div className='left_side'>
              <div><h1>{data.temperature}</h1></div>
              <div>{data.windspeed}</div>
          </div>
          <div className='right_side'>
              <div>{data.time}</div>
              <div>{data.sunlight}</div>
          </div>
    
      </div>
          
      </>
    
  )
}

export default Dashboard1