"use client";
import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./FormCommentLibraryCard.module.scss";
import SimpleCaptcha from "@/modules/common/components/Captcha";
import Button from "@/modules/common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faEnvelope,
  faMapLocationDot,
  faMobileRetro,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import FeedbackLibraryServices from "@/services/feedback-library-services";
import InputField from "@/modules/common/components/input-field-register-library";
import TextareaField from "@/modules/common/components/textarea-field-register-library/TextareaField";
import { useToastContext } from "@/lib/context/toast-context";

interface FormValues {
  fullName: string;
  address: string;
  email: string;
  tel: string;
  title: string;
  content: string;
}
const FormCommentLibraryCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "all" });
  const { HandleOpenToast } = useToastContext();

  const handleSuccessToast = () => {
    HandleOpenToast({ type: "success", content: "Gửi góp ý thành công!" });
  };

  const handleErrorToast = () => {
    HandleOpenToast({
      type: "error",
      content: "Có lỗi xảy ra! Vui lòng thử lại.",
    });
  };
  const captchaRef = useRef<any>(null);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (captchaRef.current && !captchaRef.current.validateCaptcha()) {
      alert("Mã CAPTCHA không đúng. Vui lòng thử lại."); // Hiển thị thông báo lỗi
      return;
    }
    FeedbackLibraryServices.Feedback(data)
      .then((res) => {
        console.log(res);
        handleSuccessToast();
      })
      .catch((e) => handleErrorToast());
  };

  return (
    <div
      className={`${styles.wrapper} d-flex flex-column align-items-center p-4 `}
    >
      <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
        {/* Dynamic fields */}
        <InputField
          label="Họ và tên"
          name="fullName"
          register={register}
          validation={{
            required: "Họ và tên là bắt buộc",
            validate: {
              twoWords: (value: any) =>
                value.trim().split(" ").length >= 2 ||
                "Họ và tên phải có ít nhất 2 từ",
            },
          }}
          placeholder="Họ và tên"
          leftIcon={<FontAwesomeIcon icon={faUser} />}
          errors={errors}
        />
        {/* Address */}
        <InputField
          label="Địa chỉ"
          name="address"
          register={register}
          required={false}
          validation={{ required: false }}
          leftIcon={<FontAwesomeIcon icon={faMapLocationDot} />}
          placeholder="Địa chỉ"
          errors={errors}
        />
        {/* Email */}
        <InputField
          label="Email"
          name="email"
          register={register}
          required={false}
          validation={{
            required: false,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email không hợp lệ",
            },
          }}
          placeholder="Nhập email"
          leftIcon={<FontAwesomeIcon icon={faEnvelope} />}
          errors={errors}
        />
        {/* Phone */}
        <InputField
          label="Điện thoại"
          name="tel"
          register={register}
          validation={{
            required: "Số điện thoại không để trống",
            pattern: {
              value: /^(0[1-9]{1}[0-9]{8}|0[1-9]{1}[0-9]{9})$/,
              message:
                "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam hợp lệ",
            },
          }}
          leftIcon={<FontAwesomeIcon icon={faMobileRetro} />}
          placeholder="Điện thoại"
          errors={errors}
        />
        {/* Phone */}
        <InputField
          label="Tiêu đề"
          name="title"
          register={register}
          validation={{
            required: "Tiêu đề không để trống",
          }}
          leftIcon={<FontAwesomeIcon icon={faCircleInfo} />}
          placeholder="Tiêu đề"
          errors={errors}
        />
        <TextareaField
          label="Góp ý"
          name="content"
          register={register}
          validation={{
            required: "Góp ý không để trống",
          }}
          placeholder="Nội dung"
          errors={errors}
        />
        {/* Captcha */}
        <div className={`${styles.form_item} row align-items-start mt-4`}>
          <label className="col-sm-4 col-xs-12">
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
            Gửi
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormCommentLibraryCard;
