"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRotateLeft,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./FormAdminApproveRegistration.module.scss";
import InputField from "@/modules/common/components/input-field-register-library";
import Button from "@/modules/common/components/Button";
import { useEffect, useState } from "react";
import RegisterLibraryServices from "@/services/register-library-services";
import Select from "@/modules/common/components/Select";
import Tooltip from "@mui/material/Tooltip";

interface FormAdminApproveRegistrationProps {
  register: any;
  errors: any;
  handleSubmit: any;
  onSubmit: any;
  getValues: any;
  setValue: any;
  clearErrors: any;
  getRegisterSearch: () => void;
}

interface IFormValue {
  cardType?: string;
  cccd?: string;
  registrationCode?: string;
}

const FormAdminApproveRegistration: React.FC<
  FormAdminApproveRegistrationProps
> = ({
  register,
  errors,
  handleSubmit,
  onSubmit,
  getValues,
  setValue,
  clearErrors,
  getRegisterSearch,
}) => {
  const [cardType, setCardType] = useState<any>([]);
  useEffect(() => {
    RegisterLibraryServices.GetCardType().then((res) => {
      setCardType(res);
    });
  }, []);
  const resetFormValues = () => {
    const currentValues = getValues();
    Object.keys(currentValues).forEach((key) => {
      setValue(key as keyof IFormValue, "");
    });
    Object.keys(currentValues).forEach((key) => {
      clearErrors(key as keyof IFormValue);
    });
    getRegisterSearch();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} d-flex align-items-center justify-content-center`}
    >
      <div className="mt-3 d-flex row w-100 justify-content-between">
        <div className="row col-sm-12 col-md-10 align-items-center m-0">
          {/* Card type */}
          <div className="col-xs-12 col-md-4 mb-2">
            <Select
              name="cardType"
              register={register}
              validation={{}}
              errors={errors}
            >
              <option value="" hidden>
                --- Loại thẻ đăng ký ---
              </option>
              {cardType &&
                cardType.map((item: any, index: string) => (
                  <option key={index} value={item.value}>
                    {item.title}
                  </option>
                ))}
            </Select>
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
          {/* fullName */}
          <div className="col-xs-12 col-md-4 mb-2">
            <InputField
              admin_temp={true}
              text_end={true}
              name="fullName"
              register={register}
              validation={{}}
              required={false}
              placeholder="Tên người đăng ký"
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
            <Tooltip title="Delete" arrow placement="top">
              <Button
                rounded
                className="fs-3"
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

export default FormAdminApproveRegistration;
