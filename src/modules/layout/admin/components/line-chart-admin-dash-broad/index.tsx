"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const LineChartForAdminDashboard: React.FC<{
  series: number[];
  color: string;
}> = ({ series, color }) => {
  const [chartOptions] = useState<ApexOptions>({
    chart: { sparkline: { enabled: true } },
    tooltip: {
      shared: false,
      style: {
        fontSize: "1.5rem",
      },
      fillSeriesColor: false,
    },
    xaxis: {
      categories: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
    },
    grid: {
      padding: {
        top: 6,
        left: 6,
        right: 6,
        bottom: 6,
      },
    },
    colors: [`${color}`],
    stroke: {
      width: 3,
      curve: "smooth",
    },
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
      }}
    >
      <Chart
        options={chartOptions}
        series={[{ name: "", data: series }]}
        type="line"
        height={"100%"}
      />
    </div>
  );
};

export default LineChartForAdminDashboard;
