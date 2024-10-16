"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const BarChartComponent: React.FC<{
  series: number[];
  categories: string[];
  color: string;
}> = ({ series, categories, color }) => {
  const [chartOptions] = useState<ApexOptions>({
    chart: {
      type: "bar",
      height: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: [color],
    xaxis: {
      categories: categories,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  });

  return (
    <div style={{ width: "100%", height: "100%", margin: "0 auto" }}>
      <Chart
        options={chartOptions}
        series={[{ name: "Data", data: series }]}
        type="bar"
        height={"100%"}
      />
    </div>
  );
};

export default BarChartComponent;
