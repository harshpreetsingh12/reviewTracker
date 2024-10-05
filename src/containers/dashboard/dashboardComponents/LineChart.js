import React, { useRef, useEffect } from 'react';
import { Chart, LinearScale, CategoryScale, LineController, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

Chart.register(
  LinearScale,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Reference to store the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
          },
          y: {
            type: 'linear',
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts or re-renders
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
