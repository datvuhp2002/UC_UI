import React, { ReactNode } from "react";
import Styles from "./StatisticsCard.module.scss";
import classNames from "classnames/bind";
// import LineChartForAdminDashboard from "@/modules/layout/admin/components/line-chart-admin-dash-broad";
import dynamic from "next/dynamic";

const LineChartForAdminDashboard = dynamic(
  () => import("@/modules/layout/admin/components/line-chart-admin-dash-broad"),
  { ssr: false }
);
const cx = classNames.bind(Styles);

const StatisticsCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  blue_card?: boolean;
  purple_card?: boolean;
  light_yellow_card?: boolean;
  light_red_card?: boolean;
  icon?: ReactNode;
  categories: string[];
  series: number[];
}> = ({
  children,
  className,
  blue_card,
  purple_card,
  light_yellow_card,
  light_red_card,
  icon,
  series,
  categories,
}) => {
  const classes = cx("wrapper", {
    blue_card,
    purple_card,
    light_yellow_card,
    light_red_card,
    [className as string]: className,
  });
  // Xác định màu sắc dựa trên các props
  const color = blue_card
    ? "#042174" // màu xanh
    : purple_card
      ? "#27097a" // màu tím
      : light_yellow_card
        ? "#7a4100" // màu vàng sáng
        : light_red_card
          ? "#7a0916" // màu đỏ sáng
          : "042174"; // Mặc định màu đen nếu không có màu nào được chọn
  return (
    <div className={classes}>
      <span
        className={cx(`bg_img`)}
        style={{
          mask: `url(${process.env.FILE_URL}/images/shape-square.svg) center center / contain no-repeat`,
        }}
      ></span>
      <div className={cx(`body`)}>
        <div
          className={cx("header", "d-flex justify-content-between w-100 row")}
        >
          {icon && <span className={cx("icon", "col-6")}>{icon}</span>}
          <div className={cx("chart", "col-6")}>
            {typeof window !== "undefined" && (
              <LineChartForAdminDashboard
                color={`${color}`}
                series={series}
                categories={categories}
              />
            )}
          </div>
        </div>
        <div className={cx("children")}>{children}</div>
      </div>
    </div>
  );
};

export default StatisticsCard;
