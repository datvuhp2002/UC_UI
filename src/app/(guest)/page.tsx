import React from "react";
import styles from "./RegisterLibrary.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-regular-svg-icons";
const page = () => {
  return (
    <div className={`${styles.wrapper} border p-5 shadow-sm`}>
      <div className="row mb-3">
        <div className="col-xs-12 col-md-6 text-center d-none d-md-block">
          <h1 className={`${styles.welcome_title} ${styles.primary_color}`}>
            CHÀO MỪNG BẠN ĐỌC
          </h1>
          <div className="row text-center">
            <div className="col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0 w-100">
              <div className={`${styles.welcome}`}>
                Đến với trang đăng ký trực tuyến thẻ thư viện
              </div>
              <div className={`${styles.welcome}`}>
                của Thư viện quốc gia Việt Nam
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="text-center">
            <div style={{ fontSize: "3.5rem" }}>Đăng ký làm</div>
            <div
              className={`${styles.primary_color}`}
              style={{ fontSize: "3.5rem", fontWeight: 700 }}
            >
              thẻ thư viện
            </div>
            <div style={{ fontSize: "3.5rem" }}>
              Qua{" "}
              <span
                className={`${styles.primary_color}`}
                style={{ fontWeight: 700 }}
              >
                4
              </span>{" "}
              bước
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className={`${styles.wrapper_step} col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3`}
        >
          <div className={`${styles.step} text-center p-1`}>
            BƯỚC 1
            <div className={`${styles.step_content}`}>
              <div className="w-100">
                Truy cập vào
                <div>
                  <FontAwesomeIcon
                    icon={faHandPointDown}
                    className={`${styles.icon_bounce}`}
                  />
                </div>
                <div className="">
                  <Link href={`dang-ky-the`}>
                    <div
                      className={`${styles.primary_color}`}
                      style={{ fontWeight: 700 }}
                    >
                      ĐĂNG KÝ THẺ THƯ VIỆN
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.wrapper_step} col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3`}
        >
          <div className={`${styles.step} text-center p-1`}>
            BƯỚC 2
            <div className={`${styles.step_content}`}>
              <div className="w-100">
                Nhập thông tin cá nhân.
                <div>
                  Bạn đọc nhận được{" "}
                  <span
                    className={`${styles.primary_color}`}
                    style={{ fontWeight: 700 }}
                  >
                    Mã_đăng_ký
                  </span>{" "}
                  làm thẻ sau khi hoàn thành nhập.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.wrapper_step} col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3`}
        >
          <div className={`${styles.step} text-center p-1`}>
            BƯỚC 3
            <div className={`${styles.step_content}`}>
              <div className="w-100">
                Nộp tiền phí làm thẻ qua QR-Code với nội dung chuyển khoản ghi:
                <div>
                  <span
                    className={`${styles.primary_color}`}
                    style={{ fontWeight: 700 }}
                  >
                    Mã_đăng_ký + Họ và tên
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.wrapper_step} col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3`}
        >
          <div className={`${styles.step} text-center p-1`}>
            BƯỚC 4
            <div className={`${styles.step_content}`}>
              <div className="w-100">
                <div>
                  <span
                    className={`${styles.primary_color}`}
                    style={{ fontWeight: 700 }}
                  >
                    Nhận Thẻ thư viện
                  </span>
                  <div> - Nhận tại Nhà (có phí Dịch vụ chuyển phát)</div>
                  <div>- Nhận tại Thư viện Quốc gia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
