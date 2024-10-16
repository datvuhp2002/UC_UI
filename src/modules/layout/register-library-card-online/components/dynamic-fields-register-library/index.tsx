import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarDays,
  faIdCard,
  faTableList,
  faEnvelope,
  faMapLocationDot,
  faMobileRetro,
  faBriefcase,
  faHouseLaptop,
  faEarth,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import InputField from "@/modules/common/components/input-field-register-library";
import RadioField from "@/modules/common/components/radio-gender-field-register-library";
import SelectField from "@/modules/common/components/select-field-register-library ";
import { countries } from "@/common/static_variable";
import {
  handleDateInput,
  validateDate,
} from "@/modules/common/tools/date-validation";

const DynamicFieldsRegisterLibrary = ({
  cardType,
  errors,
  register,
  job,
}: any) => {
  const educationLevel = [
    { title: "Cao học", value: "CH" },
    { title: "Cao đẳng", value: "CD" },
    { title: "Cử nhân", value: "CN" },
    { title: "Đại học", value: "DH" },
    { title: "Giáo sư", value: "GS" },
    { title: "Nghiên cứu sinh", value: "NCS" },
    { title: "Phổ thông", value: "PT" },
    { title: "Thạc sỹ", value: "TS" },
    { title: "Trung cấp", value: "TC" },
  ];
  // const validateDate = (value: string) => {
  //   // Kiểm tra định dạng dd/mm/yyyy
  //   const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  //   if (!regex.test(value)) {
  //     return "Ngày sinh phải có định dạng Ngày/tháng/năm";
  //   }

  //   // Tách ngày, tháng, năm
  //   const parts = value.split("/");
  //   const day = parseInt(parts[0], 10);
  //   const month = parseInt(parts[1], 10);
  //   const year = parseInt(parts[2], 10);
  //   const currentYear = new Date().getFullYear();

  //   // Kiểm tra tháng
  //   if (month < 1 || month > 12) {
  //     return "Tháng không hợp lệ. Tháng phải nằm trong khoảng 1-12.";
  //   }

  //   // Kiểm tra ngày
  //   if (day < 1) {
  //     return "Ngày không hợp lệ. Ngày phải lớn hơn 0.";
  //   }

  //   if (month === 2) {
  //     const isLeapYear = (year: any) =>
  //       (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  //     if (day > (isLeapYear(year) ? 29 : 28)) {
  //       return isLeapYear(year)
  //         ? "Tháng 2 chỉ có 29 ngày trong năm nhuận."
  //         : "Tháng 2 chỉ có 28 ngày.";
  //     }
  //   } else if ([4, 6, 9, 11].includes(month)) {
  //     if (day > 30) {
  //       return "Các tháng này chỉ có 30 ngày.";
  //     }
  //   }
  //   if (year > currentYear) {
  //     return "Năm không hợp lệ. Năm không được lớn hơn năm hiện tại.";
  //   }

  //   return true;
  // };
  switch (cardType) {
    default:
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
                twoWords: (value: string) =>
                  value.trim().split(" ").length >= 2 ||
                  "Họ và tên phải có ít nhất 2 từ",
              },
            }}
            placeholder="Họ và tên"
            leftIcon={<FontAwesomeIcon icon={faUser} />}
            errors={errors}
          />
          {/* Gender */}
          <RadioField label="Giới tính" register={register} errors={errors} />
          {/* Birth */}
          <InputField
            label="Ngày sinh"
            name="dob"
            register={register}
            validation={{
              required: "Ngày sinh không để trống",
              validate: validateDate,
            }}
            placeholder="Ngày/Tháng/Năm"
            leftIcon={<FontAwesomeIcon icon={faCalendarDays} />}
            errors={errors}
            onInput={handleDateInput}
          />
          {/* CMND/CCCD */}
          <InputField
            label="CMND/CCCD"
            name="cccd"
            register={register}
            validation={{
              required: "Căn cước công dân không để trống",
              length: {
                value: 12,
                message: "Căn cước công dân phải có 12 ký tự",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Chỉ cho phép số, không có chữ cái",
              },
            }}
            leftIcon={<FontAwesomeIcon icon={faIdCard} />}
            placeholder="CMND/CCCD"
            errors={errors}
          />
          {/* Address */}
          <InputField
            label="Địa chỉ"
            name="address"
            register={register}
            validation={{ required: "Địa chỉ không để trống" }}
            leftIcon={<FontAwesomeIcon icon={faMapLocationDot} />}
            placeholder="Địa chỉ"
            errors={errors}
          />
          {/* Email */}
          <InputField
            label="Email"
            name="email"
            register={register}
            validation={{
              required: "Email không để trống",
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
          {/* Job */}
          <SelectField
            label="Nghề nghiệp"
            name="job"
            leftIcon={<FontAwesomeIcon icon={faBriefcase} />}
            validation={{ required: "Nghề nghiệp là bắt buộc" }}
            register={register}
            data={job}
            errors={errors}
          />
          {/* Workplace */}
          <InputField
            label="Nơi làm việc"
            name="office"
            register={register}
            validation={{
              required: "Nơi làm việc không để trống",
            }}
            leftIcon={<FontAwesomeIcon icon={faHouseLaptop} />}
            placeholder="Nơi làm việc"
            errors={errors}
          />
          {/* Nationality */}
          <SelectField
            label="Quốc tịch"
            name="nation"
            leftIcon={<FontAwesomeIcon icon={faEarth} />}
            validation={{ required: "Quốc tịch là bắt buộc" }}
            register={register}
            data={countries}
            errors={errors}
          />
        </div>
      );
    case "thieunhi":
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
                twoWords: (value: any) =>
                  value.trim().split(" ").length >= 2 ||
                  "Họ và tên phải có ít nhất 2 từ",
              },
            }}
            placeholder="Họ và tên"
            leftIcon={<FontAwesomeIcon icon={faUser} />}
            errors={errors}
          />

          {/* Gender */}
          <RadioField label="Giới tính" register={register} errors={errors} />
          {/* Birth */}
          <InputField
            label="Ngày sinh"
            name="dob"
            register={register}
            validation={{
              required: "Ngày sinh không để trống",
              validate: validateDate, // Sử dụng hàm tùy chỉnh để xác thực
            }}
            placeholder="Ngày/Tháng/Năm"
            leftIcon={<FontAwesomeIcon icon={faCalendarDays} />}
            errors={errors}
            onInput={handleDateInput}
          />
          {/* CMND/CCCD */}
          <InputField
            label="CMND/CCCD"
            name="cccd"
            required={false}
            register={register}
            validation={{
              required: false,
              minLength: {
                value: 12,
                message: "Phải có ít nhất 12 ký tự",
              },
              pattern: {
                value: /^[0-9]+$/, // Chỉ cho phép các ký tự số
                message: "Chỉ cho phép số, không có chữ cái",
              },
            }}
            leftIcon={<FontAwesomeIcon icon={faIdCard} />}
            placeholder="CMND/CCCD"
            errors={errors}
          />
          {/* Address */}
          <InputField
            label="Địa chỉ"
            name="address"
            register={register}
            validation={{ required: "Địa chỉ không để trống" }}
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
          {/* Job */}
          <SelectField
            label="Nghề nghiệp"
            name="job"
            leftIcon={<FontAwesomeIcon icon={faBriefcase} />}
            validation={{ required: "Nghề nghiệp là bắt buộc" }}
            register={register}
            data={job}
            errors={errors}
          />
          {/* School / Nơi làm việc*/}
          <InputField
            label="Trường học"
            name="office"
            register={register}
            validation={{
              required: "Trường học không được để trống",
            }}
            leftIcon={<FontAwesomeIcon icon={faSchool} />}
            placeholder="Trường học"
            errors={errors}
          />
          {/* Nationality */}
          <SelectField
            label="Quốc tịch"
            name="nation"
            leftIcon={<FontAwesomeIcon icon={faTableList} />}
            validation={{ required: "Quốc tịch là bắt buộc" }}
            register={register}
            data={countries}
            errors={errors}
          />
        </div>
      );

    case "thieunhigiamho":
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
                twoWords: (value: string) =>
                  value.trim().split(" ").length >= 2 ||
                  "Họ và tên phải có ít nhất 2 từ",
              },
            }}
            placeholder="Họ và tên"
            leftIcon={<FontAwesomeIcon icon={faUser} />}
            errors={errors}
          />
          {/* representative */}
          <InputField
            label="Họ và tên người giám hộ"
            name="representative"
            register={register}
            validation={{
              required: "Họ và tên người giám hộ là bắt buộc",
              validate: {
                twoWords: (value: string) =>
                  value.trim().split(" ").length >= 2 ||
                  "Họ và tên người giám hộ phải có ít nhất 2 từ",
              },
            }}
            placeholder="Họ và tên người giám hộ"
            leftIcon={<FontAwesomeIcon icon={faUser} />}
            errors={errors}
          />
          {/* Gender */}
          <RadioField label="Giới tính" register={register} errors={errors} />
          {/* Birth */}
          <InputField
            label="Ngày sinh"
            name="dob"
            register={register}
            validation={{
              required: "Ngày sinh không để trống",
              validate: validateDate, // Sử dụng hàm tùy chỉnh để xác thực
            }}
            placeholder="Ngày/Tháng/Năm"
            leftIcon={<FontAwesomeIcon icon={faCalendarDays} />}
            errors={errors}
            onInput={handleDateInput}
          />
          {/* CMND/CCCD */}
          <InputField
            label="CMND/CCCD"
            name="cccd"
            required={false}
            register={register}
            validation={{
              required: false,
              minLength: {
                value: 12,
                message: "Phải có ít nhất 12 ký tự",
              },
              pattern: {
                value: /^[0-9]+$/, // Chỉ cho phép các ký tự số
                message: "Chỉ cho phép số, không có chữ cái",
              },
            }}
            leftIcon={<FontAwesomeIcon icon={faIdCard} />}
            placeholder="CMND/CCCD"
            errors={errors}
          />
          {/* Address */}
          <InputField
            label="Địa chỉ"
            name="address"
            register={register}
            validation={{ required: "Địa chỉ không để trống" }}
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
          {/* Job */}
          <SelectField
            label="Nghề nghiệp"
            name="job"
            leftIcon={<FontAwesomeIcon icon={faBriefcase} />}
            validation={{ required: "Nghề nghiệp là bắt buộc" }}
            register={register}
            data={job}
            errors={errors}
          />
          {/* Workplace */}
          <InputField
            label="Trường học"
            name="school"
            register={register}
            validation={{
              required: "Trường học không được để trống",
            }}
            leftIcon={<FontAwesomeIcon icon={faSchool} />}
            placeholder="Trường học"
            errors={errors}
          />
          {/* Nationality */}
          <SelectField
            label="Quốc tịch"
            name="nation"
            leftIcon={<FontAwesomeIcon icon={faTableList} />}
            validation={{ required: "Quốc tịch là bắt buộc" }}
            register={register}
            data={countries}
            errors={errors}
          />
        </div>
      );

    case "canbohuutri":
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
                twoWords: (value: string) =>
                  value.trim().split(" ").length >= 2 ||
                  "Họ và tên phải có ít nhất 2 từ",
              },
            }}
            placeholder="Họ và tên"
            leftIcon={<FontAwesomeIcon icon={faUser} />}
            errors={errors}
          />
          {/* Gender */}
          <RadioField label="Giới tính" register={register} errors={errors} />
          {/* Birth */}
          <InputField
            label="Ngày sinh"
            name="dob"
            register={register}
            validation={{
              required: "Ngày sinh không để trống",
              validate: validateDate, // Sử dụng hàm tùy chỉnh để xác thực
            }}
            placeholder="Ngày/Tháng/Năm"
            leftIcon={<FontAwesomeIcon icon={faCalendarDays} />}
            errors={errors}
            onInput={handleDateInput}
          />
          {/* CMND/CCCD */}
          <InputField
            label="CMND/CCCD"
            name="cccd"
            register={register}
            validation={{
              required: "Căn cước công dân không để trống",
              minLength: {
                value: 12,
                message: "Phải có ít nhất 12 ký tự",
              },
              pattern: {
                value: /^[0-9]+$/, // Chỉ cho phép các ký tự số
                message: "Chỉ cho phép số, không có chữ cái",
              },
            }}
            leftIcon={<FontAwesomeIcon icon={faIdCard} />}
            placeholder="CMND/CCCD"
            errors={errors}
          />
          {/* Address */}
          <InputField
            label="Địa chỉ"
            name="address"
            register={register}
            validation={{ required: "Địa chỉ không để trống" }}
            leftIcon={<FontAwesomeIcon icon={faMapLocationDot} />}
            placeholder="Địa chỉ"
            errors={errors}
          />
          {/* Email */}
          <InputField
            label="Email"
            name="email"
            required={false}
            register={register}
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
          {/* Job */}
          <SelectField
            label="Nghề nghiệp"
            name="job"
            leftIcon={<FontAwesomeIcon icon={faBriefcase} />}
            validation={{ required: "Nghề nghiệp là bắt buộc" }}
            register={register}
            data={job}
            errors={errors}
          />
          {/* Workplace */}
          <InputField
            label="Đơn vị"
            name="office"
            register={register}
            validation={{
              required: "Đơn vị không để trống",
            }}
            leftIcon={<FontAwesomeIcon icon={faHouseLaptop} />}
            placeholder="Nơi làm việc"
            errors={errors}
          />
          {/* Nationality */}
          <SelectField
            label="Quốc tịch"
            name="nation"
            leftIcon={<FontAwesomeIcon icon={faEarth} />}
            validation={{ required: "Quốc tịch là bắt buộc" }}
            register={register}
            data={countries}
            errors={errors}
          />
        </div>
      );

    case "doanhnhan":
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
                twoWords: (value: string) =>
                  value.trim().split(" ").length >= 2 ||
                  "Họ và tên phải có ít nhất 2 từ",
              },
            }}
            placeholder="Họ và tên"
            leftIcon={<FontAwesomeIcon icon={faUser} />}
            errors={errors}
          />
          {/* Gender */}
          <RadioField label="Giới tính" register={register} errors={errors} />
          {/* CMND/CCCD */}
          <InputField
            label="Số CCCD/hộ chiếu"
            name="cccd"
            register={register}
            validation={{
              required: "Căn cước công dân không để trống",
              minLength: {
                value: 12,
                message: "Phải có ít nhất 12 ký tự",
              },
              pattern: {
                value: /^[0-9]+$/, // Chỉ cho phép các ký tự số
                message: "Chỉ cho phép số, không có chữ cái",
              },
            }}
            leftIcon={<FontAwesomeIcon icon={faIdCard} />}
            placeholder="Số CCCD/hộ chiếu"
            errors={errors}
          />
          {/* Education level */}
          <SelectField
            label="Trình độ học vấn"
            name="educationLevel"
            leftIcon={<FontAwesomeIcon icon={faEarth} />}
            validation={{ required: "Trình độ học vấn là bắt buộc" }}
            register={register}
            data={educationLevel}
            errors={errors}
          />
          {/* Birth */}
          <InputField
            label="Ngày sinh"
            name="dob"
            register={register}
            validation={{
              required: "Ngày sinh không để trống",
              validate: validateDate, // Sử dụng hàm tùy chỉnh để xác thực
            }}
            placeholder="Ngày/Tháng/Năm"
            leftIcon={<FontAwesomeIcon icon={faCalendarDays} />}
            errors={errors}
            onInput={handleDateInput}
          />
          {/* Job */}
          <SelectField
            label="Nghề nghiệp"
            name="job"
            leftIcon={<FontAwesomeIcon icon={faBriefcase} />}
            validation={{ required: "Nghề nghiệp là bắt buộc" }}
            register={register}
            data={job}
            errors={errors}
          />
          {/* Email */}
          <InputField
            label="Email"
            name="email"
            register={register}
            validation={{
              required: "Email không để trống",
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
          {/* Workplace */}
          <InputField
            label="Đơn vị công tác"
            name="office"
            register={register}
            validation={{
              required: "Đơn vị công tác không để trống",
            }}
            leftIcon={<FontAwesomeIcon icon={faHouseLaptop} />}
            placeholder="Đơn vị công tác"
            errors={errors}
          />
          {/* Address */}
          <InputField
            label="Chỗ ở hiện tại"
            name="address"
            register={register}
            validation={{ required: "Chỗ ở hiện tại không để trống" }}
            leftIcon={<FontAwesomeIcon icon={faMapLocationDot} />}
            placeholder="Chỗ ở hiện tại"
            errors={errors}
          />
          {/* Nationality */}
          <SelectField
            label="Quốc tịch"
            name="nation"
            leftIcon={<FontAwesomeIcon icon={faEarth} />}
            validation={{ required: "Quốc tịch là bắt buộc" }}
            register={register}
            data={countries}
            errors={errors}
          />
        </div>
      );
  }
};

export default DynamicFieldsRegisterLibrary;
