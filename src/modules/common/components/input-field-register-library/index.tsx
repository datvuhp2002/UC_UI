import React, { useState } from "react";
import styles from "./InputField.module.scss"; // Nhớ import CSS modules nếu cần
import Input from "../Input";

interface InputFieldProps {
  label: string;
  name: string;
  register: any;
  required?: boolean;
  validation?: any;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  errors: any;
  type?: string;
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  required = true,
  validation,
  placeholder,
  leftIcon,
  errors,
  type = "text",
  onInput,
}) => {
  return (
    <div className={`${styles.form_item} row align-items-center`}>
      <label className="col-sm-4 col-xs-12 mb-2 mb-md-0">
        {label}
        {required && <span className="ms-1 text-danger">(*)</span>}
      </label>
      <div className="col-sm-8 col-xs-12">
        <Input
          type={type}
          name={name}
          register={register}
          validation={validation}
          placeholder={placeholder}
          leftIcon={leftIcon}
          errors={errors}
          onInput={onInput}
        />
        {errors[name] && ( // Hiển thị thông báo lỗi chỉ khi đã tương tác
          <small className="text-danger">{errors[name]?.message}</small>
        )}
      </div>
    </div>
  );
};

export default InputField;
