interface Dataset {
  label: string;
  backgroundColor: string[];
  data: number[];
}

interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

interface Chart {
  data: ChartData;
  update: () => void;
}

interface Utils {
  numbers: (config: { count: number; min: number; max: number }) => number[];
  rand: (min: number, max: number) => number;
  CHART_COLORS: { [key: string]: string };
}

const Utils = {
  numbers: (config: { count: number; min: number; max: number }) => {
    const { count, min, max } = config;
    const result: number[] = [];
    for (let i = 0; i < count; i++) {
      result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return result;
  },
  rand: (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  CHART_COLORS: {
    Red: "#FF6384",
    Orange: "#FF9F40",
    Yellow: "#FFCD56",
    Green: "#4BC0C0",
    Blue: "#36A2EB",
  },
};

const actions = [
  {
    name: "Randomize",
    handler: (chart: Chart) => {
      chart.data.datasets.forEach((dataset) => {
        dataset.data = Utils.numbers({
          count: chart.data.labels.length,
          min: 0,
          max: 100,
        });
      });
      chart.update();
    },
  },
];

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { Doughnut, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { ThemeContext } from "@/contexts/themeContext";
type Props = {};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function DoughnutChart({}: Props) {
  const data = {
    labels: ["Active", "Inactive", "Repair", "Out of Service"],
    datasets: [
      {
        label: "Tractors",
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: ["#666", "#d6d6d6", "#f7f7f7", "#262626"],
        borderColor: ["#666", "#d6d6d6", "#f7f7f7", "#262626"],
      },
    ],
  };
  return (
    <div className="h-[22.42481rem] ">
      <div className="flex flex-row items-start mt-4 h-[65%]">
        <Doughnut
          data={data}
          options={{
            cutout: "60%",
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      <div className="px-4 mt-4">
        <h6 className="font-medium text-base mb-2 dark:text-neutral-300">
          Labels
        </h6>
        {data.labels.map((label, index) => (
          <div className="flex justify-between" key={label}>
            <div className="flex items-center">
              <div
                className="w-[0.75rem] h-[0.75rem] rounded-sm mr-[0.625rem]"
                style={{
                  backgroundColor: `${data.datasets[0].backgroundColor[index]}`,
                }}
              ></div>
              <div className="text-[#696969] text-[0.75rem] font-[400]">
                {label}
              </div>
            </div>
            <div className="text-[#696969] text-[0.75rem] font-[600]">
              {data.datasets[0].data[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PieChart({}: Props) {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: ["#666", "#d6d6d6", "#f7f7f7", "#262626"],
        borderColor: ["#666", "#d6d6d6", "#f7f7f7", "#262626"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="h-[22.42481rem] ">
      <div className="flex flex-row items-start mt-4 h-[65%]">
        <Pie
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      <div className="px-4 mt-4">
        <h6 className="font-medium text-base mb-2 dark:text-neutral-300">
          Labels
        </h6>
        {data.labels.map((label, index) => (
          <div className="flex justify-between" key={label}>
            <div className="flex items-center">
              <div
                className="w-[0.75rem] h-[0.75rem] rounded-sm mr-[0.625rem]"
                style={{
                  backgroundColor: `${data.datasets[0].backgroundColor[index]}`,
                }}
              ></div>
              <div className="text-[#696969] text-[0.75rem] font-[400]">
                {label}
              </div>
            </div>
            <div className="text-[#696969] text-[0.75rem] font-[600]">
              {data.datasets[0].data[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GraphChart({}: Props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: true,
          font: {
            family: "Raleway", // Specify the desired font family
            size: 14, // Specify the desired font size
            // weight: 400, // Specify the font weight
          },
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          min: 0, // Set the minimum value to 0
          max: 10000, // Set the maximum value to 10000
          stepSize: 2000, // Set the step size to 2000
          callback: function (value: any) {
            if (value === 0) return "0";
            if (value === 2000) return "200";
            if (value === 4000) return "400";
            if (value === 6000) return "600";
            if (value === 8000) return "800";
            return "";
          },
          font: {
            family: "Raleway", // Specify the desired font family
            size: 14, // Specify the desired font size
            // weight: 400, // Specify the font weight
          },
        },
      },
    },
  };

  const data = {
    labels: [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    datasets: [
      {
        fill: true,
        label: "Dataset 1",
        data: [8000, 4000, 8000, 4000, 6000, 0, 6000, 4000, 8000, 6000],
        borderColor: theme === "light" ? "#757373" : "#222",
        backgroundColor: (ctx: any) => {
          const gradient = ctx.chart.ctx.createLinearGradient(
            0,
            0,
            0,
            ctx.chart.height
          );
          gradient.addColorStop(
            0,
            theme === "light" ? "rgba(227,227,227,1)" : "rgba(63,63,63,.6)"
          ); // Top color
          gradient.addColorStop(
            1,
            theme === "light" ? "rgba(227,227,227,1)" : "rgba(64,64,64,.6)"
          ); // Bottom color (transparent)
          return gradient;
        },
      },
    ],
  };
  return (
    <>
      <div className="h-[18rem] mt-[0.6rem] ">
        <Line options={options} data={data} />
      </div>
    </>
  );
}
