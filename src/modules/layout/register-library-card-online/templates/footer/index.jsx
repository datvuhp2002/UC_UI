import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`container`}>
        <ul>
          <li>
            <strong>THƯ VIỆN QUỐC GIA VIỆT NAM:</strong>
          </li>
          <li>
            <span>Địa chỉ: Số 31 – Tràng Thi – Hoàn Kiếm - Hà Nội</span>
          </li>
          <li>
            <span>Điện thoại: 024-38254938 (Bộ phận cấp thẻ)</span>
          </li>
          <li>
            <span>E-mail: info@nlv.gov.vn</span>
          </li>
        </ul>
        <div className="d-flex align-items-center justify-content-center">
          <span>
            <span>
              <span>Website: </span>
            </span>
          </span>
          <span>
            <span>
              <a href="http://www.nlv.gov.vn">
                <span>http://www.nlv.gov.vn</span>
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
