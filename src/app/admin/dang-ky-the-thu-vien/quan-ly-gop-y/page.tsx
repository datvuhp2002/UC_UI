"use client";
import Link from "next/link";
import React from "react";
import styles from "./QuanLyGopY.module.scss";
import DataTable from "@/modules/common/components/data-table";
import { SubmitHandler, useForm } from "react-hook-form";
import Card from "@/modules/common/components/Card";
import FormAdminResearch from "@/modules/layout/admin/components/form-admin-research";
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
        <h2 className="fw-bold p-0">Quản lý góp ý</h2>
        <ol className="breadcrumb mb-3 ">
          <li className="breadcrumb-item">
            <Link href="/admin">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item breadcrumb-active">
            đăng ký thẻ thư viện
          </li>
          <li className="breadcrumb-item breadcrumb-active fw-bold">
            quản lý góp ý
          </li>
        </ol>
      </div>
      {/* Data Table */}
      <Card title="Quản lý góp ý">
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
        {/* <DataTable /> */}
      </Card>
    </div>
  );
};

export default page;
