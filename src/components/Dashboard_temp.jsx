import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { useState, useEffect } from 'react';
import { bottomNavigationActionClasses } from '@mui/material';
import { Link } from 'react-router-dom';


const Dashboard_temp = () => {
    return(
        <>
        <div className='second_dash'>
        <div className='first_2'>
            <div><h3>Solar Panel</h3></div>
            <div>today's max:</div>
            <div>todays's low:</div>
            <div>non generating hours:</div>
        </div>
        <div className='second_2'>
            <div>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10],
                    label: 'Time (in hours)' }]}
                    yAxis={[{label: 'Power Generation (in kW)'}]}
                    series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        label: 'solar panel'
                    },
                    {
                        data: [3, 4.5, 4, 8.5, 1, 5],
                        label: 'windmill'
                    }
                    ]}
                    width={500}
                    height={300}
                />
                
            </div>
        </div>
        <div className='third_2'>
            <div style={{alignItems:'center',justifyContent:'center'}}><h3>Wind mill</h3></div>
            <div>today's max:</div>
            <div>todays's low:</div>
            <div>non generating hours:</div>
            
        </div>
        </div>
    </>
    );
}

export default Dashboard_temp