import React, { useState } from "react";
import styles from "./GopY.module.scss";
import Button from "@/modules/common/components/Button";
import FormCommentLibraryCard from "@/modules/common/share-pages/form-comment-library-card";
const page = () => {
  return (
    <div className={`${styles.wrapper} shadow-sm align-items-center pb-5 `}>
      <h3 className={`${styles.title} d-sm-block mb-2`}>Góp ý</h3>
      <FormCommentLibraryCard />
    </div>
  );
};

export default page;
