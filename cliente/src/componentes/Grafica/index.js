import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
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
      label: 'Servicios',
      backgroundColor: 'rgba(0,255,0,1)',
      borderColor: 'black',
      data: [0]
    },
    {
      label: 'Ganancia',
      backgroundColor: 'rgba(125,150,0,1)',
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

  return <Bar options={options} data={intervalos} />;
}
