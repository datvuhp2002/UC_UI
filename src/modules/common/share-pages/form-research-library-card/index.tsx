"use client";
import React, { useRef, useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form"; // Import useForm from react-hook-form
import styles from "./FormResearchLibraryCard.module.scss";
import SimpleCaptcha from "@/modules/common/components/Captcha";
import Button from "@/modules/common/components/Button";
import DynamicFieldsRegisterLibrary from "../dynamic-fields-research-library-card";

interface FormValues {
  fullName: string;
  birthDate: String;
  job: String;
  key: String;
}
const cardTypeOptions = [
  {
    title: "Thẻ bạn đọc thông thường: 120.000đ",
    value: "standard",
    price: "120.000",
  },
  { title: "Thẻ dành cho trẻ em: 40.000đ", value: "child", price: "40.000" },
  {
    title: "Thẻ cặp dành cho trẻ em và người giám hộ: (80.000đ/02 thẻ)",
    value: "pair",
    price: "80.000",
  },
  {
    title: "Thẻ dành cho hưu trí: 50.000đ",
    value: "retiree",
    price: "50.000",
  },
  {
    title: "Thẻ dành cho các nhà nghiên cứu & doanh nhân: 660.000đ",
    value: "researcher",
    price: "660.000",
  },
];
const FormResearchLibraryCard = () => {
  const [isChosenResearchInfo, setChosenResearchInfo] = useState(true);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>({ mode: "all" });
  const captchaRef = useRef<any>(null);
  const resetFormValues = () => {
    const currentValues = getValues();
    Object.keys(currentValues).forEach((key) => {
      if (key !== "cardType") {
        setValue(key as keyof FormValues, "");
      }
    });
    Object.keys(currentValues).forEach((key) => {
      if (key !== "cardType") {
        clearErrors(key as keyof FormValues);
      }
    });
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (captchaRef.current && !captchaRef.current.validateCaptcha()) {
      alert("Mã CAPTCHA không đúng. Vui lòng thử lại."); // Hiển thị thông báo lỗi
      return;
    }
    console.log("Form Data:", data);
  };
  const handleClick = (value: boolean) => {
    setChosenResearchInfo(value);
    resetFormValues();
  };
  return (
    <div
      className={`${styles.wrapper} d-flex flex-column align-items-center p-4  `}
    >
      <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row align-items-center justify-content-center my-3">
        <Button
          rounded
          research_information
          active_research={isChosenResearchInfo}
          onClick={() => handleClick(true)}
        >
          Theo thông tin cá nhân
        </Button>
        <Button
          rounded
          research_information
          active_research={!isChosenResearchInfo}
          onClick={() => handleClick(false)}
        >
          Theo mã đăng ký
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
        {/* Dynamic fields */}
        <DynamicFieldsRegisterLibrary
          isChosenResearchInfo={isChosenResearchInfo}
          errors={errors}
          register={register}
        />
        {/* Captcha */}
        <div className={`${styles.form_item} row align-items-start mt-4`}>
          <label className="col-sm-4 col-xs-12 mb-2 mb-md-0">
            Mã xác thực
            <span className="ms-1 text-danger">(*)</span>
          </label>
          <div className="col-sm-8 col-xs-12">
            <SimpleCaptcha ref={captchaRef} />
          </div>
        </div>

        {/* Submit button */}
        <div
          className={`${styles.form_item} d-flex align-items-start mt-4 justify-content-end`}
        >
          <Button type="submit" rounded>
            Đăng ký
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormResearchLibraryCard;
