import React from 'react';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Grafica({ intervalos = {
  labels: ['Retificaciones', 'Cortes CNC', 'Ensanchados', 'Modificaciones', 'Barrenaciones'],
  datasets: [
    {
      type:'bar',
      // label: 'Servicios',
      // backgroundColor: 'rgba(0,255,0,1)',
      borderColor: 'black',
      data: [0]
    },
    {
      type:'bar',
      // label: 'Ganancia',
      // backgroundColor: 'rgba(125,150,0,1)',
      borderColor: 'black',
      data: [0]
    }
  ]
} }) {

  const options = {
    maintainAspctRatio: false,
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }

  return <Chart options={options} data={intervalos} />
  // return <Bar options={options} data={intervalos} />
}
