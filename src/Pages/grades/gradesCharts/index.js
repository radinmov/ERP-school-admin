import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Sidebar from '../../../componets/Sidebar';
import useTitle from "../../../componets/Hook/useTitle";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export const GradesChart = () => {
  useTitle("charting-grades")
  const data = {
    labels: ['مهر', 'آذر', 'بهمن', 'اردیبهشت', 'خرداد'], 
    datasets: [
      {
        label: 'نمرات',
        data: [15, 10, 12, 17, 18], 
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'نمودار نمرات دانش‌آموز',
      },
    },
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="flex flex-row max-md:hidden">
        <Sidebar />
        <main className="flex-1 flex-col p-4 md:p-8">
          <h1 className="text-2xl font-bold mb-6">نمودار نمرات</h1>
          <div className="bg-white shadow-md rounded-md p-6">
            <Line data={data} options={options} />
          </div>
        </main>
      </div>
    </div>
  );
};
