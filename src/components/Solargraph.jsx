import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import datax from './datax.json'
import { useState, useEffect } from 'react'

const solargraph = () => {
    const [datas, setdatas] = useState({
        solar:[],
        time:[],
    })
    
    // useEffect(() => {
    //         const fetchData = async () => {
    //           try {
    //             const response = await fetch('192.168.167.149/predict'); 
    //             const data = await response.json();
        
    //             if (data && data.hourly) {
    //               const limitedData = {
    //                 solar: data.hourly.direct_radiation.slice(0, 24),
    //                 time: data.hourly.time.slice(0, 24).map((time) => time.split('T')[1]),
    //               };
        
    //               setdatas((prev) => ({
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
                solar: datax.hourly.direct_radiation.slice(0,24),
                time: datax.hourly.time.slice(0,24).map(time=>time.split('T')[1])
            };
            setdatas(prev=>({
                ...prev,
                ...limitedData
            }))
        }
    },[])
    console.log(datas.time);
    console.log(datas.solar);
    const hours = datas.time.map(time => time.split(':')[0]);
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
                data: datas.solar,
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