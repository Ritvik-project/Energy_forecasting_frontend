import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import { useState, useEffect } from 'react'

const solargraph = () => {
    const [datas, setdatas] = useState({
        solar:[],
        time:[],
    })
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://192.168.167.225:5001/predict?latitude=20.59&longitude=78.9627`); 
                const data = await response.json();
                console.log(data);

                if (data && data.hourly) {
                    const times = data.hourly.formatted_time;
                    const solarenergy = data.hourly.solar_energy;
                    
                      setdatas((prev) => ({
                        ...prev,
                        time: times,
                        solar: solarenergy
                      }));
                    }
                  } catch (error) {
                    console.error('Error fetching data:', error);
                  }
                };
            
                fetchData(); 
              }, []);
        
            const hours = datas.time.slice(0, 24).map((timestamp) => {
                const date = new Date(timestamp);
                let hours = date.getHours(); 
                let minutes = date.getMinutes(); 
    
                hours = hours < 10 ? '0' + hours : hours;
                minutes = minutes < 10 ? '0' + minutes : minutes;
        
                return `${hours}`;
            });
            const solarP = datas.solar.slice(0,24).map((val)=> val/1000);
            console.log(hours)
            console.log(solarP)
  return (
    <>
    <div style={{marginTop:'30px'}}><h1 className='Gh'>Solar power generation</h1></div>
        <div>
            <LineChart
            xAxis={[{   
                data: hours,
                label: 'Time (in hours)'
            }]}
            yAxis={[{label: 'Power'}]}
            series={[{
                data: solarP,
                label: 'solar energy'
            }]}
            width={800}
            height={300}
            />
        </div>

    </>
  )
}

export default solargraph