import React from 'react'
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function MiniBarGraph({chartData}) {
  return (
    <Bar 
    data={chartData} 
    options={{ maintainAspectRatio: false,
            
        scales: {
            y: {
                display:false,
                grid: {
                display: false,
                }
            },
            x: {
                display:false,
                grid: {
                display: false,
                }
            }
        },
        plugins:{
            legend:{
                display:false
            },
            tooltip:{
                displayColors:false,
                callbacks:{
                  label:(context) => {
                    console.log (context);
                    return  context.raw;
                  },
                }
              },
        }
    }}
    />
  )
}

export default MiniBarGraph