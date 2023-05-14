import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(

  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GraphProps {
  data: {
    cases: Record<string, number>;
    deaths: Record<string, number>;
    recovered: Record<string, number>;
  };
}

const Graphs: React.FC<GraphProps> = ({ data }) => {
  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: "Active",
        data: Object.values(data.cases),
        fill:false,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 0.5,
        tension:1,
        showLine:true
      },
      {
        label: "Deaths",
        data: Object.values(data.deaths),
        fill:false,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 0.5,
        tension:0.1

      },
      {
        label: "Recovered",
        data: Object.values(data.recovered),
        fill:false,
        borderColor: "rgb(0, 255, 255)",
        backgroundColor: "rgba(0, 255, 255, 0.5)",
        borderWidth: 0.5,
        tension:0.1
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "World",
        position: "bottom" as const,
      },
    },
  };

  return (
    <div className="w-full max-w-[500px]">
      <Line data={chartData} options={options} itemType="line"/>
    </div>
  );
};

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// interface GraphProps {
//   data: {
//     cases: Record<string, number>;
//     deaths: Record<string, number>;
//     recovered: Record<string, number>;
//   };
// }

// const Graphs: React.FC<GraphProps> = ({ data }) => {
//   const chartData = Object.keys(data.cases).map((date) => ({
//     date,
//     active: data.cases[date],
//     deaths: data.deaths[date],
//     recovered: data.recovered[date],
//   }));

//   return (
//     <div className="">
//       <LineChart width={500} height={300} data={chartData} style={{width:"100%",margin:"auto"}}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="active"  stroke="rgb(255, 99, 132)" fill="rgba(255, 99, 132, 0.5)" strokeWidth={1} />
//         <Line type="monotone" dataKey="deaths" stroke="rgb(53, 162, 235)" fill="rgba(53, 162, 235, 0.5)" strokeWidth={1}/>
//         <Line type="monotone" dataKey="recovered" stroke="rgb(0, 255, 255)" fill="rgba(0, 255, 255, 0.5)" strokeWidth={1}/>
//       </LineChart>
//     </div>
//   );
// };


export default Graphs;

