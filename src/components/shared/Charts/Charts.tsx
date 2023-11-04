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

const data: ChartData = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      label: "Dataset 1",
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Object.values(Utils.CHART_COLORS),
    },
  ],
};

const config = {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Pie Chart",
      },
    },
  },
};

import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

type Props = {};

ChartJS.register(ArcElement, Tooltip, Legend);

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
        <h6 className="font-medium text-base mb-2">Labels</h6>
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
        <h6 className="font-medium text-base mb-2">Labels</h6>
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
