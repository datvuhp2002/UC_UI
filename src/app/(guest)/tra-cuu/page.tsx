import React, { useState } from "react";
import styles from "./TraCuu.module.scss";
import Button from "@/modules/common/components/Button";
import FormResearchLibraryCard from "@/modules/common/share-pages/form-research-library-card";
const page = () => {
  return (
    <div className={`${styles.wrapper} shadow-sm align-items-center pb-5 `}>
      <h3 className={`${styles.title} d-sm-block m-0`}>
        TRA CỨU THÔNG TIN ĐĂNG KÝ THẺ THƯ VIỆN
      </h3>
      <FormResearchLibraryCard />
    </div>
  );
};

export default page;
