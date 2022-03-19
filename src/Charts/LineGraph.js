import { Chart as ChartJS } from 'chart.js/auto';
import React from 'react';
import {Line, LineChart} from 'react-chartjs-2';


function LineGraph({chartData}) {
    return(
        <Line 
        data={chartData} 
        options={{ maintainAspectRatio: false,
            scales: {
                y: {
                    grid: {
                    display: true,
                    color: "#eff3ff80"
                    }
                },
                x: {
                    grid: {
                    display: true,
                    color: "#eff3ff80"
                    }
                }
            }}}
            />
    );
}

export default LineGraph;