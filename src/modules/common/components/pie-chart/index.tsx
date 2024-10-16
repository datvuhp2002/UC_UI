"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const PieChartComponent: React.FC<{
  series: number[];
  labels: string[];
  colors?: string[];
}> = ({ series, labels }) => {
  const [chartOptions] = useState<ApexOptions>({
    chart: {
      type: "pie",
      height: "100%",
    },
    labels: labels,
    tooltip: {
      theme: "light",
      custom: function ({ series, seriesIndex, w }) {
        return `
          <div style="background-color: #fff; padding: 10px; border-radius: 5px;">
            <strong>${w.config.labels[seriesIndex]}</strong>: ${series[seriesIndex]}
          </div>
        `;
      },
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        colors: ["#fff"],
      },
    },
  });

  return (
    <div style={{ width: "100%", height: "100%", margin: "0 auto" }}>
      <Chart options={chartOptions} series={series} type="pie" height="100%" />
    </div>
  );
};

export default PieChartComponent;
