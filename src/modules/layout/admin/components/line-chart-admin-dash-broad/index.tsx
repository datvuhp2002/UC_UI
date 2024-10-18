import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChartForAdminDashboard: React.FC<{
  series: number[];
  color: string;
  categories: any;
}> = ({ series, color, categories }) => {
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
    chart: { sparkline: { enabled: true } },
    tooltip: {
      shared: false,
      style: {
        fontSize: "1.5rem",
      },
      fillSeriesColor: false,
    },
    xaxis: {
      categories: [...categories],
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

  useEffect(() => {
    // Any logic that involves window
    if (typeof window !== "undefined") {
      // Your client-side code here
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", margin: "0 auto" }}>
      {typeof window !== "undefined" && (
        <Chart
          options={chartOptions}
          series={[{ name: "", data: series }]}
          type="line"
          height={"100%"}
        />
      )}
    </div>
  );
};

export default LineChartForAdminDashboard;
