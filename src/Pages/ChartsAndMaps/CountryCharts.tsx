
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale,LinearScale,BarElement,Legend, Chart as ChartJS } from 'chart.js';


ChartJS.register(CategoryScale,LinearScale,BarElement,Legend);

interface CountryChartsProps {
    data: any
  }

const CountryCharts: React.FC<CountryChartsProps>= ({data}) => {


  const showData = {
    labels: ['Active', 'Recovered',"Deaths"],
    datasets: [
      {
        label: "Data",
        data: [data.active, data.recovered, data.deaths],
        backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)'],
        borderColor:[ 'rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
    

  };

  const options :any = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
      
    },
    plugins: {
      legend: {
        display:false,
      },
      title: {
        display: false,
        text: 'World',
      },
    },
    responsive:true,
  };



  return (
    <div>
      <Bar data={showData} options={options} />
    </div>
  );
};

export default CountryCharts;
