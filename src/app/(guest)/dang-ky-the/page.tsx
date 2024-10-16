"use client";
import React, { useEffect, useState } from "react";
import styles from "./DangKyThe.module.scss";
import { libraryInfo } from "@/common/static_variable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormRegisterLibrary from "@/modules/layout/register-library-card-online/components/form-register-library";
import {
  faCircleExclamation,
  faDownload,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Image from "@/modules/common/components/Image";
import RegisterResult from "@/modules/layout/register-library-card-online/components/register-result";

const Page = () => {
  const [registerData, setRegisterData] = useState<any>();

  return (
    <div className={`${styles.wrapper} row`}>
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
          {/* Form register */}
          <div className={`${styles.thong_tin_the_form} p-4`}>
            <FormRegisterLibrary setRegisterData={setRegisterData} />
          </div>
          {/* result */}
          {registerData ? (
            <RegisterResult
              registerData={registerData.registerData}
              qrCode={registerData.qrCode}
            />
          ) : null}
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
            {libraryInfo.map((i, index) => (
              <div className="mt-2" key={index}>
                <strong>
                  <span className="me-2">{index + 1}.</span>
                  <span className="text-decoration-underline">{i.title}</span>
                </strong>
                <ul>
                  {i.content.map((j, idx) => (
                    <li key={idx}>
                      {j.title}{" "}
                      {j.link && (
                        <a href={j.link} target="_blank">
                          [{j.link_title}]
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
