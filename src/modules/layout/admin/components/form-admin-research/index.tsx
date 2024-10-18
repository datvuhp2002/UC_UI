"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRotateLeft,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./FormAdminResearch.module.scss";
import InputField from "@/modules/common/components/input-field-register-library";
import Button from "@/modules/common/components/Button";
import { Tooltip } from "@mui/material";
import { handleDateInput } from "@/modules/common/tools/date-validation";
import { useEffect, useState } from "react";
import RegisterLibraryServices from "@/services/register-library-services";
import Select from "@/modules/common/components/Select";

interface FormAdminResearchProps {
  register: any;
  errors: any;
  handleSubmit: any;
  onSubmit: any;
  getValues: any;
  setValue: any;
  clearErrors: any;
}
interface IFormValue {
  cardType?: string;
  fullName?: string;
  registrationCode?: string;
  sd?: string;
  ed?: string;
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
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} d-flex align-items-center justify-content-center`}
    >
      <div className="mt-3 d-flex row w-100 justify-content-between">
        <div className="row col-sm-12 col-md-10 align-items-center m-0">
          <div className="col-12 row">
            {/* card type */}
            <div className="col-12 mb-2">
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
            {/* status */}
            <div className="col-12 mb-2">
              <Select
                name="status"
                register={register}
                validation={{}}
                errors={errors}
              >
                <option value="" hidden>
                  --- Trạng thái ---
                </option>

                {cardType &&
                  cardType.map((item: any, index: string) => (
                    <option key={index} value={item.value}>
                      {item.title}
                    </option>
                  ))}
              </Select>
            </div>
          </div>
          <div className="col-12 row">
            {/* Start day */}
            <div className="col-xs-12 col-md-6 mb-2">
              <InputField
                name="sd"
                register={register}
                validation={{}}
                placeholder="Ngày bắt đầu"
                errors={errors}
                onInput={handleDateInput}
              />
            </div>
            {/* End day */}
            <div className="col-xs-12 col-md-6 mb-2">
              <InputField
                name="ed"
                register={register}
                validation={{}}
                placeholder="Ngày kết thúc"
                errors={errors}
                onInput={handleDateInput}
              />
            </div>
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
            <Tooltip title="Add">
              <Button
                rounded
                icon_only
                className="fs-3"
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
