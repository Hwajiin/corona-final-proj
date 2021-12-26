import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { CovidDataType } from "../layouts/sidoCovid";

interface TotalDefChartProps {
  totalDefCntOfWeekData?: CovidDataType[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    datalabels: {
      display: true,
      color: "#000",
    },
  },
};

const style = {
  width: "100%",
  height: "100%",
};

const TotalDefChart: React.FC<TotalDefChartProps> = ({
  totalDefCntOfWeekData,
}) => {
  const labels = totalDefCntOfWeekData?.map((item) => {
    const date = new Date(item.createDt);
    return `${date.getMonth() + 1}.${date.getDate()}`;
  });

  const defCntData = totalDefCntOfWeekData?.map((item) => item.incDec);

  const data = {
    labels: labels?.reverse(),
    datasets: [
      {
        label: "확진자 수",
        data: defCntData?.reverse(),
        backgroundColor: "rgba(41, 143, 255, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} style={style} />;
};

export default TotalDefChart;
