import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import datax from './datax.json'
import { useState, useEffect } from 'react'

const Windgraph = () => {
    const [dataw, setdataw] = useState({
        windspeed:[],
        windpower:[],
        time:[],
    })
    
    // useEffect(() => {
    //         const fetchData = async () => {
    //           try {
    //             const response = await fetch('192.168.167.149/predict'); 
    //             const data = await response.json();
        
    //             if (data && data.hourly) {
    //               const limitedData = {
    //                 time: data.hourly.time.slice(0, 24).map((time) => time.split('T')[1]),
    //                 wind: data.hourly.wind_speed_10m.slice(0, 24), 
    //               };
        
    //               setdataw((prev) => ({
    //                 ...prev,
    //                 ...limitedData,
    //               }));
    //             }
    //           } catch (error) {
    //             console.error('Error fetching data:', error);
    //           }
    //         };
        
    //         fetchData(); 
    //       }, []);
    useEffect(()=>{
        if(datax && datax.hourly){
            const limitedData = {
                windspeed: datax.hourly.wind_speed_10m.slice(0,24),
                time: datax.hourly.time.slice(0,24).map(time=>time.split('T')[1])
            };
            setdataw(prev=>({
                ...prev,
                ...limitedData
            }))
        }
    },[])
    console.log(dataw.time);
    console.log(dataw.windspeed);
    const hours = dataw.time.map(time => time.split(':')[0]);
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
                data: dataw.windspeed,
                label: 'wind power'
            }]}
            width={800}
            height={300}
            />
        </div>

    </>
  )
}

export default Windgraph