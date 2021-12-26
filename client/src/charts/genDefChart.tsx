import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Title, Tooltip } from "chart.js";
import { GenAgeDataType } from "../layouts/genDefCovid";

interface GenDefChartProps {
  genCovidData: GenAgeDataType[];
}

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const style = {
  width: "100%",
  height: "100%",
};

const GenDefChart: React.FC<GenDefChartProps> = ({ genCovidData }) => {
  const defPercentData = genCovidData?.map((item) => item.confCaseRate);

  const data = {
    labels: ["여성", "남성"],
    datasets: [
      {
        label: "",
        data: defPercentData,
        backgroundColor: ["rgba(255, 23, 68, 0.3)", "rgba(41, 143, 255, 0.5)"],
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      options={{ maintainAspectRatio: false }}
      style={style}
    />
  );
};

export default GenDefChart;
