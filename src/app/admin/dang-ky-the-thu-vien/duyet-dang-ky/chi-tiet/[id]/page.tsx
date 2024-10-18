"use client";
import { useParams, useRouter } from "next/navigation";
import Card from "@/modules/common/components/Card";
import React, { Suspense, useEffect, useState } from "react";
import Button from "@/modules/common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faCheck,
  faLeftLong,
  faMailBulk,
  faPhone,
  faUserCheck,
  faUserXmark,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import ReaderPublicSearch from "@/services/reader-public-search";
import styles from "./ChiTietDuyetDangKy.module.scss";
import Image from "@/modules/common/components/Image";
import LibraryCard from "@/modules/common/components/library-card";
import SkeletonData from "@/modules/common/components/skeleton-data";
import formatDateTime from "@/common/format_date";
import Link from "next/link";
import { useToastContext } from "@/lib/context/toast-context";
const page = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [userData, setUserData] = useState<any>();
  const [status, setStatus] = useState<string>("4");
  const [isPayment, setIsPayment] = useState<boolean>();
  const { HandleOpenToast } = useToastContext();
  const handleSuccessToast = () => {
    HandleOpenToast({
      type: "success",
      content: "Cập nhật trạng thái thành công!",
    });
  };
  const handleErrorToast = (message: string) => {
    HandleOpenToast({
      type: "error",
      content: `${message}! Vui lòng thử lại`,
    });
  };
  const handleOnUpdateStatus = async (status: string) => {
    const updateStatus = await ReaderPublicSearch.UpdateStatusRegister({
      id: params.id,
      status,
      note: "",
    });
    if (updateStatus && updateStatus.success) {
      setStatus(status);
      handleSuccessToast();
    } else {
      handleErrorToast("Cập nhật thất bại");
    }
  };
  const handleOnUpdatePaymentStatus = async (status: boolean) => {
    const result = await ReaderPublicSearch.UpdatePaymentStatus({
      id: params.id,
      status: status,
    });
    if (result && result.success) {
      setIsPayment(status);
      handleSuccessToast();
    } else {
      setIsPayment(!status);
      handleErrorToast("Cập nhật trạng thái thanh toán thất bại");
    }
  };
  useEffect(() => {
    ReaderPublicSearch.GetItemById(params.id).then((res) => {
      setStatus(res.data.status);
      setIsPayment(res.data.ispayment);
      setUserData(res.data);
    });
  }, []);
  return (
    <Suspense>
      <div className={styles.wrapper}>
        <div className="">
          <h2 className="fw-bold p-0">Duyệt đăng ký</h2>
          <ol className="breadcrumb mb-3 ">
            <li className="breadcrumb-item">
              <Link href="/admin">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item breadcrumb-active">
              đăng ký thẻ thư viện
            </li>
            <li className="breadcrumb-item">
              <Link href="/admin/dang-ky-the-thu-vien/duyet-dang-ky">
                duyệt đăng ký
              </Link>
            </li>
            <li className="breadcrumb-item breadcrumb-active fw-bold">
              Chi tiết
            </li>
          </ol>
        </div>
        <Card
          title={
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-12 col-md-7 mt-2">
                Đăng ký thẻ thư viện | Mã đăng ký{" "}
                <strong className="text-danger"> {params.id}</strong>
              </div>
              <div className="col-sm-12 col-md-5 row d-flex fs-5">
                <div className="col mt-2">
                  <Button
                    orange_btn
                    rounded
                    leftIcon={<FontAwesomeIcon icon={faUserCheck} />}
                    className="text-nowrap w-100 justify-content-around"
                    onClick={() => handleOnUpdateStatus("1")}
                  >
                    Duyệt đăng ký
                  </Button>
                </div>
                <div className="col mt-2">
                  <Button
                    rounded
                    success_btn
                    leftIcon={<FontAwesomeIcon icon={faCheck} />}
                    className="text-nowrap w-100 justify-content-around"
                    onClick={() => handleOnUpdateStatus("2")}
                  >
                    Hoàn thành cấp thẻ
                  </Button>
                </div>
                <div className="col mt-2">
                  <Button
                    rounded
                    danger_btn
                    leftIcon={<FontAwesomeIcon icon={faUserXmark} />}
                    className="text-nowrap w-100 justify-content-around"
                    onClick={() => handleOnUpdateStatus("3")}
                  >
                    Từ chối
                  </Button>
                </div>
                <div className="col mt-2">
                  <Button
                    rounded
                    leftIcon={<FontAwesomeIcon icon={faLeftLong} />}
                    className="text-nowrap w-100 justify-content-around"
                    transparent_btn
                    onClick={() => router.back()}
                  >
                    Quay lại
                  </Button>
                </div>
              </div>
            </div>
          }
        >
          <div className={`${styles.body} my-2`}>
            {userData ? (
              <div className="row">
                {/* Info */}
                <div className="row col-sm-12 col-md-12 col-lg-8">
                  <div className="col-md-4 col-lg-3 mt-3">
                    {/* img */}
                    <div
                      className={`${styles.card_img_wrapper} shadow-sm rounded mb-2`}
                    >
                      <div className={`${styles.card_img} shadow-sm`}>
                        <Image
                          alt="Ảnh thẻ"
                          src={process.env.FILE_URL + "/" + userData.photo}
                        />
                      </div>
                    </div>
                    {/* common info */}
                    <div className={`${styles.card_common_info_wrapper} mt-2`}>
                      {/* Gender */}
                      <div className="row">
                        <div className="col-2">
                          <FontAwesomeIcon icon={faVenusMars} />
                        </div>
                        <span className="col-10 fw-bold">
                          {userData.gender === "male" ? "Nam" : "Nữ"}
                        </span>
                      </div>
                      {/* Birth */}
                      <div className="row">
                        <div className="col-2">
                          <FontAwesomeIcon icon={faCakeCandles} />
                        </div>
                        <span className="col-10 fw-bold">{userData.dob}</span>
                      </div>

                      {/* contact */}

                      {/* phone */}
                      <div className="row">
                        <div className="col-2">
                          <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <span className="col-10 fw-bold">{userData.tel}</span>
                      </div>
                      {/* email */}
                      <div className="row">
                        <div className="col-2">
                          <FontAwesomeIcon icon={faMailBulk} />
                        </div>
                        <span className="col-10 fw-bold">{userData.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-9 mt-3">
                    {/* Is payment */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Đã thanh toán</div>
                      <div className="col d-flex">
                        <input
                          type="checkbox"
                          checked={isPayment}
                          onChange={(e) =>
                            handleOnUpdatePaymentStatus(!isPayment)
                          }
                        />
                      </div>
                    </div>
                    {/* Payment Info */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">TT chuyển khoản</div>
                      <div className="col d-flex">
                        <input
                          type="checkbox"
                          className=""
                          checked={userData.paymenttype === "1" ? true : false}
                        />
                      </div>
                    </div>
                    {/* card type */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Loại thẻ</div>
                      <div className="col d-flex">
                        <div className=" fw-bold">{userData.title}</div>
                      </div>
                    </div>
                    {/* reader type */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Loại bạn đọc</div>
                      <div className="col d-flex">
                        <div className=" fw-bold">{userData.readertype}</div>
                      </div>
                    </div>
                    {/* full name */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Họ tên bạn đọc</div>
                      <div className="col d-flex">
                        <div className=" fw-bold">{userData.fullname} </div>
                      </div>
                    </div>
                    {/* job */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Nghề nghiệp</div>
                      <div className="col d-flex">
                        <div className=" fw-bold">{userData.job} </div>
                      </div>
                    </div>
                    {/* office */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Nơi làm việc</div>
                      <div className="col d-flex">
                        <div className=" fw-bold">{userData.office} </div>
                      </div>
                    </div>
                    {/* address */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Địa chỉ</div>
                      <div className="col d-flex">
                        <div className=" fw-bold">{userData.address} </div>
                      </div>
                    </div>
                    {/* created at */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Ngày đăng ký</div>
                      <div className="col d-flex">
                        <div className=" fw-bold">
                          {formatDateTime.formatDate(userData.createddate)}{" "}
                        </div>
                      </div>
                    </div>
                    {/* Trạng thái */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Trạng thái chờ xử lý</div>
                      <div className="col d-flex">
                        <div className=" fw-bold">
                          {/*  1 - duyệt đăng ký / 2 - hoàn thành / 3 - từ chối */}
                          {status === "1" ? (
                            <span className="text-primary">Duyệt đăng ký</span>
                          ) : status === "2" ? (
                            <span className="text-success">Hoàn thành</span>
                          ) : status === "3" ? (
                            <span className="text-danger">Từ chối</span>
                          ) : (
                            <span className="text-warning">Chờ duyệt</span>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Hạn xử lý */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Hạn xử lý</div>
                      <div className="col d-flex">
                        <div className="fw-bold text-warning">
                          {userData.deadline}
                        </div>
                      </div>
                    </div>
                    {/* Hình thức nhận */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Hình thức nhận</div>
                      <div className="col d-flex">
                        <div className=" fw-bold">{userData.receivetype}</div>
                      </div>
                    </div>
                    {/* Ghi chú */}
                    <div className={`row d-flex align-items-center mb-2`}>
                      <div className="col text-end">Ghi chú</div>
                      <div className="col d-flex">
                        <div className=" fw-bold">{userData.note}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* LibraryCard */}
                <div className=" col-md-12 col-lg-4 d-flex align-items-start justify-content-end mt-3">
                  <LibraryCard researchResult={userData} custom={"w-100"} />
                </div>
              </div>
            ) : (
              <SkeletonData />
            )}
          </div>
        </Card>
      </div>
    </Suspense>
  );
};

export default page;
