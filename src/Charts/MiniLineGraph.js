import { Chart as ChartJS } from 'chart.js/auto';
import React from 'react';
import {Line, LineChart} from 'react-chartjs-2';


function MiniLineGraph({chartData}) {
    return(
        <Line 
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
    );
}

export default MiniLineGraph;