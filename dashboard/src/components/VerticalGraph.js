import React from 'react';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  // 1. Configure chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Holdings' },
    },
  };

  // 2. Format your data structure
//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'Revenue',
//         data: [4000, 3000, 2000, 2780, 1890],
//         backgroundColor: 'rgba(136, 132, 216, 0.6)',
//       },
//       {
//         label: 'Profit',
//         data: [2400, 1398, 9800, 3908, 4800],
//         backgroundColor: 'rgba(130, 202, 157, 0.6)',
//       },
//     ],
//   };


 export default function VerticalGraph({ data }) {
  return (
   
      <Bar options={options} data={data} />
    
  );
 }
