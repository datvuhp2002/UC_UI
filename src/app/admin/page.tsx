"use client";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./Admin.module.scss";
import StatisticsCard from "@/modules/common/components/statistics-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCommentDots,
  faMoneyBillWave,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Card from "@/modules/common/components/Card";
// import BarChartComponent from "@/modules/common/components/bar-chart";
// import PieChartComponent from "@/modules/common/components/pie-chart";
import RegisterStatisticServices from "@/services/register-statistic";
import formatNumber from "@/common/format_number";
import StatisticsSkeleton from "@/modules/common/components/statistics-skeleton";
import formatDateTime from "@/common/format_date";
import Skeleton from "@mui/material/Skeleton";

const PieChartComponent = dynamic(
  () => import("@/modules/common/components/pie-chart"),
  { ssr: false }
);
const BarChartComponent = dynamic(
  () => import("@/modules/common/components/bar-chart"),
  { ssr: false }
);
interface DataItem {
  month: string;
  count_success: string;
  count_refuse: string;
  total_count: string;
  count_pending: string;
  total_price: string;
  count_feedback: string;
  id: null | string;
}

export default function Page() {
  const [cardValues, setCardValue] = useState<DataItem>();
  const data = [10, 20, 30, 40, 50];
  const categories = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"];
  const [countSuccessStatistic, setCountSuccessStatistic] = useState<any>();
  const [countRefuseStatistic, setCountRefuseStatistic] = useState<any>();
  const [countTotalPriceStatistic, setCountTotalPriceStatistic] =
    useState<any>();
  const [countFeedbackStatistic, setCountFeedbackStatistic] = useState<any>();
  const [pieChareData, setPieChartData] = useState<any>();
  const color = "#FF5733";
  const formatChartData = (data: any[], column_name: string) => {
    const categories = data.map((item) =>
      formatDateTime.formatDate(item.month)
    );
    const series = data.map((item) => Number(item[`${column_name}`]));

    return { categories, series };
  };
  const fetchStatistics = async () => {
    try {
      const registerStatistic =
        await RegisterStatisticServices.GetRegisterStatistic();
      setCardValue(registerStatistic[0]);
      const chartData =
        await RegisterStatisticServices.GetRegisterStatisticChart();
      const pieChare =
        await RegisterStatisticServices.GetRegisterStatisticPieChart();
      setCountSuccessStatistic(formatChartData(chartData, "count_success"));
      setCountRefuseStatistic(formatChartData(chartData, "count_refuse"));
      setCountTotalPriceStatistic(formatChartData(chartData, "total_price"));
      setCountFeedbackStatistic(formatChartData(chartData, "count_feedback"));
      setPieChartData(pieChare);
      console.log(pieChare);
    } catch (error) {
      console.error("Failed to fetch statistics", error);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);
  return (
    <Suspense>
      <div className={`${styles.wrapper}`}>
        <div className="mb-3">
          <h2 className="fw-bold p-0">Trang chủ</h2>
        </div>
        {cardValues ? (
          <div className="row">
            {/* Thẻ chờ duyệt | tổng số đăng ký */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
              {countSuccessStatistic ? (
                <StatisticsCard
                  blue_card
                  icon={<FontAwesomeIcon icon={faAddressCard} />}
                  categories={countSuccessStatistic.categories}
                  series={countSuccessStatistic.series}
                >
                  <div className="d-flex justify-content-between row">
                    <div className="col-6">
                      <div>Số thẻ chờ duyệt</div>
                      <div className="fs-1 overflow-x-scroll">
                        {cardValues.count_feedback}
                      </div>
                    </div>
                    <div className="col-6">
                      <div>Tổng số đăng ký</div>
                      <div className="fs-1 overflow-x-scroll">
                        <span>
                          {formatNumber.formatNumber(cardValues.total_count)}
                        </span>
                      </div>
                    </div>
                  </div>
                </StatisticsCard>
              ) : (
                <Skeleton height={"19rem"} variant="rounded" />
              )}
            </div>
            {/* Số thẻ đã cấp  | số thẻ từ chối */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
              {countRefuseStatistic ? (
                <StatisticsCard
                  purple_card
                  icon={<FontAwesomeIcon icon={faUsersBetweenLines} />}
                  categories={countRefuseStatistic.categories}
                  series={countRefuseStatistic.series}
                >
                  <div className="row">
                    <div className="col-6">
                      <div>Số thẻ đã cấp </div>
                      <div className="fs-1 overflow-x-scroll">
                        <span>
                          {formatNumber.formatNumber(cardValues.count_success)}
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div>Từ chối</div>
                      <div className="fs-1 overflow-x-scroll">
                        <span>
                          {formatNumber.formatNumber(cardValues.count_refuse)}
                        </span>
                      </div>
                    </div>
                  </div>
                </StatisticsCard>
              ) : (
                <Skeleton height={"19rem"} variant="rounded" />
              )}
            </div>
            {/* tiền kiếm được trong tháng */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
              {countTotalPriceStatistic ? (
                <StatisticsCard
                  light_yellow_card
                  icon={<FontAwesomeIcon icon={faMoneyBillWave} />}
                  categories={countTotalPriceStatistic.categories}
                  series={countTotalPriceStatistic.series}
                >
                  <div>
                    <div>Tổng tiền thu trong tháng</div>
                    <div className="fs-1 overflow-x-scroll">
                      {" "}
                      {formatNumber.formatNumber(cardValues.total_price)}
                    </div>
                  </div>
                  <div></div>
                </StatisticsCard>
              ) : (
                <Skeleton height={"19rem"} variant="rounded" />
              )}
            </div>
            {/* Số thẻ chờ duyệt */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
              {countFeedbackStatistic ? (
                <StatisticsCard
                  light_red_card
                  categories={countFeedbackStatistic.categories}
                  icon={<FontAwesomeIcon icon={faCommentDots} />}
                  series={countFeedbackStatistic.series}
                >
                  <div>
                    <div>Số góp ý chưa duyệt trong tháng</div>
                    <div className="fs-1 overflow-x-scroll">
                      {formatNumber.formatNumber(cardValues.count_feedback)}
                    </div>
                  </div>
                  <div></div>
                </StatisticsCard>
              ) : (
                <Skeleton height={"19rem"} variant="rounded" />
              )}
            </div>
          </div>
        ) : (
          <StatisticsSkeleton />
        )}
        <Card
          title={
            <div className="d-flex align-items-center justify-content-between">
              <span>Biểu đồ</span>
              {pieChareData && (
                <select>
                  {pieChareData.map((item: any, index: any) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.month}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          }
        >
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-3">
              <Card title="Số lượng mỗi loại thẻ đăng ký vào tháng 10">
                {/* <LineChart /> */}
                <div className="" style={{ height: "40rem" }}>
                  {typeof window !== "undefined" && (
                    <PieChartComponent series={data} labels={categories} />
                  )}
                </div>
              </Card>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 mb-3">
              <Card title="Đơn đăng ký theo tháng">
                {/* <Bar chart /> */}
                <div className="" style={{ height: "40rem" }}>
                  {typeof window !== "undefined" && (
                    <BarChartComponent
                      series={data}
                      categories={categories}
                      color={color}
                    />
                  )}
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </Suspense>
  );
}
