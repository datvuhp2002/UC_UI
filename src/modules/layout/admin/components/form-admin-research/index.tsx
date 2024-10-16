"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRotateLeft,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./FormAdminResearch.module.scss"; // Import any relevant styles
import InputField from "@/modules/common/components/input-field-register-library";
import Button from "@/modules/common/components/Button";
import { Tooltip } from "@mui/material";

interface FormAdminResearchProps {
  register: any; // Adjust with correct type based on react-hook-form
  errors: any; // Adjust type for error handling
  handleSubmit: any;
  onSubmit: any;
  getValues: any;
  setValue: any;
  clearErrors: any;
}
interface IFormValue {
  cccd?: string;
  fullName?: string;
  registrationCode?: string;
}
const FormAdminResearch: React.FC<FormAdminResearchProps> = ({
  register,
  errors,
  handleSubmit,
  onSubmit,
  getValues,
  setValue,
  clearErrors,
}) => {
  const resetFormValues = () => {
    const currentValues = getValues();
    Object.keys(currentValues).forEach((key) => {
      setValue(key as keyof IFormValue, "");
    });
    Object.keys(currentValues).forEach((key) => {
      clearErrors(key as keyof IFormValue);
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} d-flex align-items-center justify-content-center`}
    >
      <div className="mt-3 d-flex row w-100 justify-content-between">
        <div className="row col-sm-12 col-md-10 align-items-center m-0">
          {/* Full Name */}
          <div className="col-xs-12 col-md-4 mb-2">
            <InputField
              text_end={true}
              admin_temp={true}
              name="fullName"
              register={register}
              required={false}
              validation={{}}
              placeholder="Tên người đăng ký"
              errors={errors}
            />
          </div>
          {/* Registration Code */}
          <div className="col-xs-12 col-md-4 mb-2">
            <InputField
              admin_temp={true}
              text_end={true}
              name="registrationCode"
              register={register}
              required={false}
              placeholder="Mã đăng ký"
              errors={errors}
            />
          </div>
          {/* CCCD */}
          <div className="col-xs-12 col-md-4 mb-2">
            <InputField
              admin_temp={true}
              text_end={true}
              name="cccd"
              register={register}
              validation={{
                length: {
                  value: 12,
                  message: "Căn cước công dân phải có 12 ký tự",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Chỉ cho phép số, không có chữ cái",
                },
              }}
              required={false}
              placeholder="Số căn cước công dân"
              errors={errors}
            />
          </div>
        </div>
        <div className="col-xs-12 col-md-2 d-flex align-items-center justify-content-center">
          <div className={styles.space}>
            <Button
              rounded
              icon_only
              orange_btn
              type="submit"
              leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            />
          </div>
          <div className={styles.space}>
            <Button
              rounded
              icon_only
              grey_btn
              onClick={resetFormValues}
              leftIcon={<FontAwesomeIcon icon={faArrowRotateLeft} />}
            />
          </div>
          <div className={styles.space}>
            <Tooltip title="Delete" arrow placement="top" className="fs-3">
              <Button
                rounded
                icon_only
                transparent_btn
                leftIcon={<FontAwesomeIcon icon={faSliders} />}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormAdminResearch;
