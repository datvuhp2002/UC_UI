"use client";
import React, { useState } from "react";
import styles from "./DangKyThe.module.scss";
import { libraryInfo } from "@/common/static_variable";
import FormRegisterLibraryCard from "@/modules/common/share-pages/form-register-library";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faDownload,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Image from "@/modules/common/components/Image";
import Button from "@/modules/common/components/Button";

const Page = () => {
  const [registerStatus, setRegisterStatus] = useState(false);
  const [registerData, setRegisterData] = useState<any>({});
  return (
    <div className={`${styles.wrapper} row `}>
      <div className={`col-xs-12 col-md-7 mt-2`}>
        <div className={`${styles.thong_tin_the}`}>
          <header className={`${styles.thong_tin_the_header} text-center`}>
            THÔNG TIN THẺ
          </header>
          <div
            className={`${styles.thong_tin_the_fix_header} text-start px-4 py-2`}
          >
            Thông tin cá nhân
          </div>
          <div className={`${styles.thong_tin_the_form} p-4`}>
            <FormRegisterLibraryCard
              setRegisterStatus={setRegisterStatus}
              setRegisterData={setRegisterData}
            />
          </div>
          {registerData && registerStatus ? (
            <div className={`${styles.register_status} p-4`}>
              <h2
                className={`${styles.register_status_title} text-center  text-success fw-bolder my-2`}
              >
                Bạn đã gửi đăng ký thành công
              </h2>
              <div className={`${styles.register_code} my-2`}>
                <span>
                  <strong>Mã đăng ký của bạn</strong> N4ABC
                </span>
              </div>
              <div className="text-center">
                <div className="my-2">Qúy khách quét mã QR để thanh toán</div>
                <div className="my-2">
                  Với nội dung chuyển khoản là:{" "}
                  <span className="text-danger">{registerData.code}</span>
                </div>
                <div className="my-2">
                  Hoặc vào trang{" "}
                  <Button directionLink to="huong-dan">
                    Hướng dẫn thanh toán
                  </Button>{" "}
                  để biết thông tin chi tiết
                </div>
              </div>
              <div className={`${styles.register_status_action} my-2`}>
                <div>
                  <Button
                    leftIcon={<FontAwesomeIcon icon={faDownload} />}
                    rounded
                  >
                    Tải QR
                  </Button>
                </div>
                <div className="ms-2">
                  <Button leftIcon={<FontAwesomeIcon icon={faEye} />} rounded>
                    Xem thẻ
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={`col-xs-12 col-md-5 mt-2`}>
        <div className={`${styles.luu_y}`}>
          <header className={`${styles.luu_y_header} text-center`}>
            LƯU Ý ĐĂNG KÝ THẺ THƯ VIỆN
          </header>
          <div className={`${styles.luu_y_fix_header} text-start px-4 py-2`}>
            <FontAwesomeIcon icon={faCircleExclamation} /> Bạn đọc đọc kỹ lưu ý
          </div>
          <div className={`${styles.luu_y_body}`}>
            <div className="w-100 text-center fst-italic">
              <span className={`text-danger`}>
                Thẻ bạn đọc tạm thời chỉ sử dụng trực tiếp tại thư viện.
              </span>
            </div>
            {libraryInfo.map((i, index) => {
              return (
                <div className="mt-2" key={index}>
                  <span>
                    <strong className="">
                      <span className="me-2">{index + 1}.</span>
                      <span className="text-decoration-underline">
                        {i.title}
                      </span>
                    </strong>
                  </span>
                  <div>
                    <ul>
                      {i.content.map((j, index) => (
                        <li key={index}>
                          {j.title}{" "}
                          {j.link ? (
                            <a href={j.link} target="_blank">
                              [{j.link_title}]
                            </a>
                          ) : (
                            ""
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
            <div className="w-100 fst-italic text-danger d-flex align-items-center justify-content-center">
              <span>
                Nếu &quot;Đơn đăng ký&quot; không đúng các quy định trên, hệ
                thống sẽ tự động hủy đơn.
              </span>
            </div>
            <div className="w-100">
              <Image
                src={`${process.env.FILE_URL}/images/thethuvien.jpg`}
                alt="Hình ảnh thẻ bạn đọc"
              />
              <div className="text-center">Hình ảnh thẻ bạn đọc</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
