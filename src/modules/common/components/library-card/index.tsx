import React from "react";
import styles from "./LibraryCard.module.scss";
import Image from "../Image";
import formatDateTime from "@/common/format_date";
const index = ({ researchResult }: any) => {
  return (
    <div className={`${styles.library_card}`}>
      <div className={`${styles.library_card_header} p-3`}>
        <h4>
          <strong>THƯ VIỆN QUỐC GIA VIỆT NAM</strong>
        </h4>
        <div className={`${styles.library_card_header_el_title}`}>
          <strong> NATIONAL LIBRARY OF VIETNAM</strong>
        </div>
      </div>
      <div className={`${styles.library_card_body} p-3`}>
        <div className="row">
          <div className="col">
            <Image
              alt="ảnh thẻ"
              src={`${process.env.FLIPBOOK_URL}${researchResult.photo}`}
            />
          </div>
          <div className="col-7">
            <div className="fs-4 text-center mb-2">
              <strong>Thẻ bạn đọc</strong>
            </div>
            <div className="text-start">
              {/* Họ tên */}
              <div className="row mb-1">
                <div className="col">
                  <div className="fs-5">
                    <strong>Họ tên:</strong>
                  </div>
                  <div className="fs-5">Full name</div>
                </div>
                <div className="col-7">
                  <span className={`${styles.value} `}>
                    {researchResult.fullName}
                  </span>
                </div>
              </div>
              {/* Đơn vị */}
              <div className="row mb-1">
                <div className="col">
                  <div className="fs-5">
                    <strong>Đơn vị:</strong>
                  </div>
                  <div className="fs-5">Institution</div>
                </div>
                <div className="col-7">
                  <span className={`${styles.value}`}>
                    {researchResult.office}
                  </span>
                </div>
              </div>
              {/* Ngày cấp */}
              <div className="row mb-1">
                <div className="col">
                  <div className="fs-5">
                    <strong>Ngày cấp:</strong>
                  </div>
                  <div className="fs-5">Date of issue</div>
                </div>
                <div className="col-7">
                  <span className={`${styles.value}`}>
                    {formatDateTime.formatDate(researchResult.createdDate)}
                  </span>
                </div>
              </div>
              {/* Ngày hết hạn */}
              <div className="row mb-1">
                <div className="col">
                  <div className="fs-5">
                    <strong>Hết hạn:</strong>
                  </div>
                  <div className="fs-5 ">Date of expiry</div>
                </div>
                <div className="col-7">
                  <span className={`${styles.value}`}>
                    {formatDateTime.formatDatePlusOneYear(
                      researchResult.createdDate
                    )}
                  </span>
                </div>
              </div>
              {/* Code */}
              <div className="row mb-1">
                <div className="col">
                  <div className="fs-5">
                    <strong>Mã thẻ:</strong>
                  </div>
                  <div className="fs-5 ">Card code</div>
                </div>
                <div className="col-7">
                  <span className={`${styles.value}`}>00000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
