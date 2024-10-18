"use client";
import Link from "next/link";
import React from "react";
import styles from "./TraCuuBaoCao.module.scss";
import DataTable from "@/modules/common/components/data-table";
import { SubmitHandler, useForm } from "react-hook-form";
import Card from "@/modules/common/components/Card";
import FormAdminResearch from "@/modules/layout/admin/components/form-admin-research";
import Button from "@/modules/common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
const page = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<any>({ mode: "all" });
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <div className={`${styles.wrapper} mb-5`}>
      <div className="">
        <h2 className="fw-bold p-0">Tra cứu báo cáo</h2>
        <ol className="breadcrumb mb-3 ">
          <li className="breadcrumb-item">
            <Link href="/admin">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item breadcrumb-active">
            đăng ký thẻ thư viện
          </li>
          <li className="breadcrumb-item breadcrumb-active fw-bold">
            tra cứu báo cáo
          </li>
        </ol>
      </div>
      {/* Data Table */}
      <Card
        title={
          <div className="d-flex align-items-center justify-content-between">
            <span> Tra cứu bạn đọc</span>
            <Button
              transparent_btn
              leftIcon={<FontAwesomeIcon icon={faSquarePollVertical} />}
              className="fs-3"
            >
              Báo cáo
            </Button>
          </div>
        }
      >
        <FormAdminResearch
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          getValues={getValues}
          setValue={setValue}
          clearErrors={clearErrors}
        />
        <hr></hr>
        {/* <DataTable
          data={formData}
          selectedColumn={selectedColumn}
          edit_direction={"duyet-dang-ky/chi-tiet"}
        /> */}
      </Card>
    </div>
  );
};

export default page;
