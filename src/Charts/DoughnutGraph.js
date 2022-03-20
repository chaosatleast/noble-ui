import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import context from 'react-bootstrap/esm/AccordionContext';

function DoughnutGraph({chartData}) {


  return (
    <Doughnut 
    data={chartData} 
    options={{
        plugins:{
          legend:{
            position: 'bottom'
          },
          tooltip:{
            callbacks:{
              label:(context) => {
                console.log (context);
                return context.label+' : '+ context.parsed+' TB'
              },
            }
          },
        }
    }}
    />
  )
}

export default DoughnutGraph