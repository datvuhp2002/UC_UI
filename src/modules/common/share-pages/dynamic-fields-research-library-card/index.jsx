import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarDays,
  faMobileRetro,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import InputField from "@/modules/common/components/input-field-register-library";
const DynamicFieldsResearchLibraryCard = ({
  isChosenResearchInfo,
  errors,
  register,
}) => {
  switch (isChosenResearchInfo) {
    case true:
      return (
        <div className="mt-3">
          {/* Name */}
          <InputField
            label="Họ và tên"
            name="fullName"
            register={register}
            validation={{
              required: "Họ và tên là bắt buộc",
              validate: {
                twoWords: (value) =>
                  value.trim().split(" ").length >= 2 ||
                  "Họ và tên phải có ít nhất 2 từ",
              },
            }}
            placeholder="Họ và tên"
            leftIcon={<FontAwesomeIcon icon={faUser} />}
            errors={errors}
          />
          {/* Birth */}
          <InputField
            label="Ngày sinh"
            name="dob"
            register={register}
            validation={{ required: "Ngày sinh không để trống" }}
            placeholder="Ngày/Tháng/Năm"
            leftIcon={<FontAwesomeIcon icon={faCalendarDays} />}
            errors={errors}
            type="date"
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
        </div>
      );
    case false:
      return (
        <div className="mt-3">
          {/* Key */}
          <InputField
            label="Mã đăng ký"
            name="key"
            register={register}
            validation={{
              required: "Mã đăng ký là bắt buộc",
            }}
            placeholder="Mã đăng ký"
            leftIcon={<FontAwesomeIcon icon={faKey} />}
            errors={errors}
          />
        </div>
      );
    default:
      return <div></div>;
  }
};

export default DynamicFieldsResearchLibraryCard;
