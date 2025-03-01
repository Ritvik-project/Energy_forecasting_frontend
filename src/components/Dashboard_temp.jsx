import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { useState, useEffect } from 'react';
import { bottomNavigationActionClasses } from '@mui/material';
import { Link } from 'react-router-dom';
import datax from './datax.json'


const Dashboard_temp = () => {
    const[datas,setdatas] = useState({
        solar:[],
        time:[],
        wind:[]
    })
    // useEffect(()=>{
    //     if(datax && datax.hourly){
    //         const limitedData = {
    //             solar: datax.hourly.direct_radiation.slice(0,12).map((sl)=>sl/100),
    //             time: datax.hourly.time.slice(0,12).map(time=>time.split('T')[1]),
    //             wind: datax.hourly.wind_speed_10m.slice(0,12)
    //         };
    //         setdatas(prev=>({
    //             ...prev,
    //             ...limitedData
    //         }))
    //     }
    // },[])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://192.168.167.225:5001/predict?latitude=20.12&longitude=12.50`); 
            const data = await response.json();
            

            console.log(data);
            if (data && data.hourly) {
              const limitedData = {
                solar: data.hourly.direct_radiation.slice(0, 12).map((sl) => sl / 100),
                time: data.hourly.time.slice(0, 12).map((time) => time.split('T')[1]),
                wind: data.hourly.wind_speed_10m.slice(0, 12), 
              };
            
    
              setDatas((prev) => ({
                ...prev,
                ...limitedData,
              }));
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); 
      }, []);
    console.log(datas.time);
    console.log(datas.solar);
    const hours = datas.time.map(time => time.split(':')[0]);
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
                        data: datas.solar,
                        label: 'solar panel'
                    },
                    {
                        data: datas.wind,
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
    );
}

export default Dashboard_temp