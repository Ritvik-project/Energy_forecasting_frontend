import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import { useState, useEffect } from 'react'

const Windgraph = () => {
    const [dataw, setdataw] = useState({
        windspeed:[],
        windpower:[],
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
                    const windEnergy = data.hourly.wind_energy;
                
        
                  setdataw((prev) => ({
                    ...prev,
                    time: times,
                    windpower: windEnergy
                  }));
                }
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        
            fetchData(); 
          }, []);
    
        const hours = dataw.time.slice(0, 24).map((timestamp) => {
            const date = new Date(timestamp);
            let hours = date.getHours(); 
            let minutes = date.getMinutes(); 

            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
    
            return `${hours}`;
        });
        const windP = dataw.windpower.slice(0,24).map((val)=> val/1000);
        console.log(hours)
        console.log(windP)
  return (
    <>
    <div><h1 className='Gh'>Wind power generation</h1></div>
        <div>
            <LineChart
            xAxis={[{   
                data: hours,
                label: 'Time (in hours)'
            }]}
            yAxis={[{label: 'Speed'}]}
            series={[{
                data: windP,
                label: 'wind power (in kW)'
            }]}
            width={800}
            height={300}
            />
        </div>

    </>
  )
}

export default Windgraph
