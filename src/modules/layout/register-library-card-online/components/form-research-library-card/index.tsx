"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"; // Import useForm from react-hook-form
import styles from "./FormResearchLibraryCard.module.scss";
import SimpleCaptcha from "@/modules/common/components/Captcha";
import Button from "@/modules/common/components/Button";
import DynamicFieldsResearchLibraryCard from "../dynamic-fields-research-library-card";
import { useToastContext } from "@/lib/context/toast-context";
import ReaderPublicSearch from "@/services/reader-public-search";
import { useSearchParams } from "next/navigation";
interface FormValues {
  fullName: string;
  dob: String;
  job: String;
  registrationCode: String;
}

const FormResearchLibraryCard = ({
  setRearchResult,
}: {
  setRearchResult: any;
}) => {
  const [isChosenResearchInfo, setChosenResearchInfo] = useState(true);
  const { HandleOpenToast } = useToastContext();
  const searchParams = useSearchParams();
  const handleSuccessToast = () => {
    HandleOpenToast({ type: "success", content: "Tìm kiếm thành công!" });
  };
  const handleErrorToast = (message: string) => {
    HandleOpenToast({
      type: "error",
      content: `${message}! Vui lòng thử lại`,
    });
  };
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
      setValue(key as keyof FormValues, "");
    });
    Object.keys(currentValues).forEach((key) => {
      clearErrors(key as keyof FormValues);
    });
  };
  const getReaderPublicSearchResult = (data: FormValues) => {
    console.log("data:::", data);
    ReaderPublicSearch.Search(data)
      .then((res) => {
        console.log(res[0]);
        setRearchResult(res[0]);
        if (res[0]) {
          handleSuccessToast();
        } else {
          handleErrorToast("Không có kết quả");
        }
      })
      .catch((e) => handleErrorToast("Tìm kiếm không thành công"));
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (captchaRef.current && !captchaRef.current.validateCaptcha()) {
      handleErrorToast("Mã CAPTCHA không đúng");
      return;
    }
    getReaderPublicSearchResult(data);
  };
  const handleClick = (value: boolean) => {
    setChosenResearchInfo(value);
    resetFormValues();
  };
  useEffect(() => {
    const params = searchParams.get("mã_đăng_ký");
    if (params) {
      setValue("registrationCode", params);
      setChosenResearchInfo(false);
      getReaderPublicSearchResult({
        registrationCode: params,
        fullName: "",
        dob: "",
        job: "",
      });
    }
  }, []);
  return (
    <div className={`${styles.wrapper} d-flex flex-column align-items-center`}>
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
        <DynamicFieldsResearchLibraryCard
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
            Tìm kiếm
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormResearchLibraryCard;
