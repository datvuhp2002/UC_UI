import React from "react";
import styles from "./RegisterLibrary.module.scss";
import Step from "@/modules/layout/register-library-card-online/components/step";
import Note from "@/modules/layout/register-library-card-online/components/note";
const page = () => {
  return (
    <div className={`${styles.wrapper} mt-5`}>
      <div className="">
        <div className=" text-center">
          <h1
            className={`${styles.welcome_title} ${styles.primary_color} mb-3`}
          >
            CHÀO MỪNG BẠN ĐỌC
          </h1>
          <div className="row text-center mt-4">
            <div className="col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0 w-100">
              <h2 className={`${styles.welcome} mb-3`}>
                Đến với trang đăng ký trực tuyến thẻ thư viện
              </h2>
              <h2 className={`${styles.welcome} mb-3`}>
                của Thư viện quốc gia Việt Nam
              </h2>
            </div>
          </div>
        </div>
        <div className=" d-flex align-items-center justify-content-center">
          <Step />
        </div>
        <div className=" d-flex align-items-center justify-content-center">
          <Note />
        </div>
      </div>
    </div>
  );
};

export default page;
