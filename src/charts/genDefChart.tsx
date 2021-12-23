import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Title, Tooltip } from "chart.js";
import { GenAgeDataType } from "../layouts/genDefCovid";

interface GenDefChartProps {
  genCovidData: GenAgeDataType[];
}

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const GenDefChart: React.FC<GenDefChartProps> = ({ genCovidData }) => {
  const defPercentData = genCovidData?.map((item) => item.confCaseRate);
  console.log(defPercentData);

  const data = {
    labels: ["여성", "남성"],
    datasets: [
      {
        label: "",
        data: defPercentData,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default GenDefChart;
