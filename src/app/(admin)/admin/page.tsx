import * as React from "react";
import styles from "./Admin.module.scss";
import StatisticsCard from "@/modules/common/components/statistics-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCommentDots,
  faMoneyBillWave,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";
import Card from "@/modules/common/components/Card";
import BarChartComponent from "@/modules/common/components/bar-chart";
import PieChartComponent from "@/modules/common/components/pie-chart";

export default function Page() {
  const data = [10, 20, 30, 40, 50];
  const categories = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"];
  const color = "#FF5733";
  return (
    <div className={`${styles.wrapper}`}>
      <div className="mb-3">
        <h2 className="fw-bold p-0">Trang chủ</h2>
      </div>
      <div className="row">
        {/* Thẻ chờ duyệt */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
          <StatisticsCard
            blue_card
            icon={<FontAwesomeIcon icon={faAddressCard} />}
            series={[22, 8, 35, 50, 82, 84, 77, 12, 1, 23, 100, 12]}
          >
            <div>
              <div>Số thẻ chờ duyệt</div>
              <div className="fs-1">200</div>
            </div>
          </StatisticsCard>
        </div>
        {/* Số thẻ đã cấp */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
          <StatisticsCard
            purple_card
            icon={<FontAwesomeIcon icon={faUsersBetweenLines} />}
            series={[22, 100, 21, 50, 32, 84, 32, 111, 1, 23, 12, 12]}
          >
            <div className="d-flex justify-content-between">
              <div>
                <div>Số thẻ đã cấp </div>
                <div className="fs-1">
                  <span>820</span>
                </div>
              </div>
              <div>
                <div> / Từ chối</div>
                <div className="fs-1 ">
                  <span>128</span>
                </div>
              </div>
              <div>
                <div> / Tổng số đang ký</div>
                <div className="fs-1">
                  <span>975</span>
                </div>
              </div>
            </div>
          </StatisticsCard>
        </div>
        {/* tiền kiếm được trong tháng */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
          <StatisticsCard
            light_yellow_card
            icon={<FontAwesomeIcon icon={faMoneyBillWave} />}
            series={[333, 123, 33, 212, 93, 231, 221, 111, 1, 213, 323, 332]}
          >
            <div>
              <div>Tổng tiền thu trong tháng</div>
              <div className="fs-1">200</div>
            </div>
            <div></div>
          </StatisticsCard>
        </div>
        {/* Số thẻ chờ duyệt */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3">
          <StatisticsCard
            light_red_card
            icon={<FontAwesomeIcon icon={faCommentDots} />}
            series={[12, 3, 33, 23, 93, 54, 62, 111, 1, 32, 12, 21]}
          >
            <div>
              <div>Số góp ý chưa duyệt trong tháng</div>
              <div className="fs-1">200</div>
            </div>
            <div></div>
          </StatisticsCard>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-3">
          <Card title="Số lượng mỗi loại thẻ đăng ký vào tháng 10">
            {/* <LineChart /> */}
            <div className="" style={{ height: "40rem" }}>
              <PieChartComponent series={data} labels={categories} />
            </div>
          </Card>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 mb-3">
          <Card title="Đơn đăng ký theo tháng">
            {/* <Bar chart /> */}
            <div className="" style={{ height: "40rem" }}>
              <BarChartComponent
                series={data}
                categories={categories}
                color={color}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
