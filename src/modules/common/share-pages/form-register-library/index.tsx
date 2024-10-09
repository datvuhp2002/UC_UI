"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Select from "../../components/Select";
import styles from "./FormRegisterLibrary.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableList,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";
import ImageCropper from "@/modules/common/components/Cropper";
import SimpleCaptcha from "@/modules/common/components/Captcha";
import Button from "@/modules/common/components/Button";
import DynamicFieldsRegisterLibrary from "../dynamic-fields-register-library";
import RegisterLibraryServices from "@/services/register-library-services";

interface FormValues {
  cardType: string;
  readerType: string;
  gender: String;
  fullName: string;
  photo: File;
  representative: string;
  dob: String; // date of birth
  cccd: String;
  address: String;
  email: String;
  tel: String;
  job: String;
  office: String;
  nation: String;
  school: String;
  receiveType: String;
}

const FormRegisterLibrary = ({ setRegisterStatus, setRegisterData }: any) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<FormValues>({ mode: "all" });
  const captchaRef = useRef<any>(null);
  const [price, setPrice] = useState<string | undefined>();
  const [cardObjectType, setCardObjectType] = useState<any>([]);
  const [job, setJob] = useState<any>([]);
  const [cardType, setCardType] = useState<any>([]);
  const convertToDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day); // Lưu ý: tháng trong Date bắt đầu từ 0
  };

  const resetFormValues = () => {
    const currentValues = getValues();
    Object.keys(currentValues).forEach((key) => {
      if (key !== "cardType") {
        setValue(key as keyof FormValues, "");
      }
    });
    Object.keys(currentValues).forEach((key) => {
      clearErrors(key as keyof FormValues);
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "cardType") {
      const selectedOption = cardType.find(
        (option: any) => option.value === value
      );
      if (selectedOption) {
        setPrice(selectedOption.price);
        setValue(name, value);
      }
    }
    resetFormValues();
  };
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    // Kiểm tra kiểu dữ liệu của photo
    if (!(data.photo instanceof File)) {
      setError("photo", {
        type: "invalid",
        message: "Ảnh không hợp lệ. Vui lòng thử lại.",
      });
      return;
    }
    // Check if photo is provided
    if (!data.photo) {
      setError("photo", { type: "required", message: "Ảnh thẻ là bắt buộc" });
      return;
    } else {
      clearErrors("photo");
    }

    // Kiểm tra CAPTCHA
    if (captchaRef.current && !captchaRef.current.validateCaptcha()) {
      alert("Mã CAPTCHA không đúng. Vui lòng thử lại."); // Hiển thị thông báo lỗi
      return;
    }
    if (data.dob) {
      data.dob = convertToDate(data.dob); // Chuyển đổi thành kiểu Date
    }
    RegisterLibraryServices.UploadAvatar(data.photo).then((res) => {
      data.photo = res.avatarUrl;
      RegisterLibraryServices.Register(data).then((res) => {
        if (res) {
          setRegisterStatus(true);
          setRegisterData(res);
        }
      });
    });
  };
  useEffect(() => {
    RegisterLibraryServices.GetCardObjectType()
      .then((res) => setCardObjectType(res))
      .catch((e) => console.log(e.message));
    RegisterLibraryServices.GetCardType()
      .then((res) => {
        setCardType(res);
        setValue("cardType", res[0].value);
        setPrice(res[0].price);
      })
      .catch((e) => console.log(e.message));
    RegisterLibraryServices.GetCardCatalog()
      .then((res) => {
        setJob(res);
      })
      .catch((e) => console.log(e.message));
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* card type */}
      <div className={`${styles.form_item} row align-items-center`}>
        <label className="col-sm-4 col-xs-12 mb-2 mb-md-0">
          Loại thẻ<span className="text-danger ms-1">(*)</span>
        </label>
        <div className="col-sm-8 col-xs-12">
          <Select
            register={register}
            name="cardType"
            validation={{ required: "Loại thẻ là bắt buộc" }}
            onChange={handleChange}
            leftIcon={<FontAwesomeIcon icon={faTableList} />}
            errors={errors}
          >
            {cardType &&
              cardType.map((item: any, index: string) => (
                <option key={index} value={item.value}>
                  {item.title}
                </option>
              ))}
          </Select>
          {errors.cardType && (
            <small className="text-danger">{errors.cardType.message}</small>
          )}
        </div>
      </div>

      {/* Reader type */}
      <div className={`${styles.form_item} row align-items-center`}>
        <label className="col-sm-4 col-xs-12 mb-2 mb-md-0">
          Loại bạn đọc<span className="ms-1 text-danger">(*)</span>
        </label>
        <div className="col-sm-8 col-xs-12">
          <Select
            name="readerType"
            register={register}
            validation={{ required: "Loại bạn đọc là bắt buộc" }}
            leftIcon={<FontAwesomeIcon icon={faUsersRectangle} />}
            errors={errors}
          >
            <option hidden value="">
              Chọn Loại bạn đọc
            </option>

            {cardObjectType &&
              cardObjectType.map((item: any, index: number) => (
                <option key={index} value={item.value}>
                  {item.title}
                </option>
              ))}
          </Select>
          {errors.readerType && (
            <small className="text-danger">{errors.readerType.message}</small>
          )}
        </div>
      </div>

      {/* Dynamic fields */}
      {job && (
        <DynamicFieldsRegisterLibrary
          cardType={watch("cardType")}
          errors={errors}
          job={job}
          register={register}
        />
      )}

      {/* Image upload */}
      <div className={`${styles.form_item} row align-items-center mt-3`}>
        <label className="col-sm-4 col-xs-12 mb-2 mb-md-0">
          Ảnh làm thẻ Kích thước 3x4
          <span className="ms-1 text-danger">(*)</span>
        </label>
        <div className="col-sm-8 col-xs-12">
          <ImageCropper
            onImageCrop={(croppedImage: File) => {
              setValue("photo", croppedImage);
              clearErrors("photo");
            }}
            setError={setError}
            clearErrors={clearErrors}
            errors={errors}
          />
          {errors.photo && (
            <small className="text-danger">{errors.photo.message}</small>
          )}
        </div>
      </div>

      {/* Total price */}
      <div className={`${styles.form_item} row align-items-center`}>
        <label className="col-sm-4 col-xs-12 mb-2 mb-md-0">
          Tổng tiền
          <span className="ms-1 text-danger">(*)</span>
        </label>
        <div className="col-sm-8 col-xs-12">
          <span className="ms-1 text-danger">Tổng tiền {price} </span>
          (chưa bao gồm cước vận chuyển)
        </div>
      </div>

      {/* Destination */}
      <div className={`${styles.form_item} row align-items-center`}>
        <label className="col-sm-4 col-xs-12 mb-2 mb-md-0">
          Nơi nhận thẻ<span className="ms-1 text-danger">(*)</span>
        </label>
        <div className="col-sm-8 col-xs-12">
          <div className="w-100">
            <div className="row w-100">
              <span className="col form-check-label text-nowrap">
                <div className="w-100">
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    {...register("receiveType", {
                      required: "Nơi nhận thẻ là bắt buộc",
                    })}
                    value="home"
                  />
                  <span className="w-100"> Nhận tại nhà (có cước)</span>
                </div>
              </span>
              <span className="col form-check-label text-nowrap">
                <div className="w-100">
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    {...register("receiveType", {
                      required: "Nơi nhận thẻ là bắt buộc",
                    })}
                    value="library"
                  />
                  <span className="w-100"> Nhận tại thư viện</span>
                </div>
              </span>
            </div>
            {errors.receiveType && (
              <small className="text-danger">
                {errors.receiveType.message}
              </small>
            )}
          </div>
        </div>
      </div>

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
      <div className={`${styles.form_item_alert} my-4`}>
        Với việc nhấn vào ô đăng ký bên dưới, bạn cam kết chịu trách nhiệm về
        những thông tin mình cung cấp. Thẻ đọc dùng để sử dụng các dịch vụ tại
        Thư viện Quốc gia Việt Nam.
      </div>
      {/* Submit button */}
      <div
        className={`${styles.form_item} d-flex align-items-start mt-4 justify-content-end`}
      >
        <div>
          <Button type="submit" rounded>
            Đăng ký
          </Button>
        </div>
        <div className="ms-2">
          <Button
            type="button"
            rounded
            research_information
            onClick={resetFormValues}
          >
            Nhập lại
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormRegisterLibrary;
