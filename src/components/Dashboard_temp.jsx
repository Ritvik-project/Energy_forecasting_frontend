import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Dashboard_temp = () => {
    const[datas,setdatas] = useState({
        solar:[],
        time:[],
        wind:[]
    })

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://192.168.167.225:5001/predict?latitude=20.59&longitude=78.9627`); 
            const data = await response.json();
            

            console.log(data);
            if (data && data.hourly) {
                const times = data.hourly.formatted_time;
                const solarEnergy = data.hourly.solar_energy;
                const windEnergy = data.hourly.wind_energy;
            
    
              setdatas((prev) => ({
                ...prev,
                time: times,
                solar: solarEnergy,
                wind: windEnergy
              }));
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); 
      }, []);


    const hours = datas.time.slice(0, 12).map((timestamp) => {
                const date = new Date(timestamp);
                let hours = date.getHours(); 
                let minutes = date.getMinutes(); 
    
                hours = hours < 10 ? '0' + hours : hours;
                minutes = minutes < 10 ? '0' + minutes : minutes;
        
                return `${hours}`;
            });

    const solarP = datas.solar.slice(0,12).map((val)=>val/1000);
    const windP = datas.wind.slice(0,12).map((val)=> val/1000);
    console.log(hours)
    console.log(solarP)
    console.log(windP)
    return(
        <>
        <div className='second_dash'>
        <div className='first_2'>
            <div><h3>Solar Panel</h3></div>
            <div>today's max: 6.97</div>
            <div>todays's low: 0</div>
            <div>non generating hours: 0:00 to 6:00</div>
        </div>
        <div className='second_2'>
        <Link to={'./ten_days'}>
            <div>
                <LineChart
                    xAxis={[{ data: hours,
                    label: 'Time (in hours)' }]}
                    yAxis={[{label: 'Power Generation (in kW)'}]}
                    series={[
                    {
                        data: solarP,
                        label: 'solar panel'
                    },
                    {
                        data: windP,
                        label: 'windmill'
                    }
                    ]}
                    width={500}
                    height={300}
                />
                
            </div></Link>
        </div>
        <div className='third_2'>
            <div style={{alignItems:'center',justifyContent:'center'}}><h3>Wind mill</h3></div>
            <div>today's max: 11.3</div>
            <div>todays's low: 1.9</div>
            <div>non generating hours: None</div>
            
        </div>
        </div>
    </>
    )
    
}

export default Dashboard_temp
