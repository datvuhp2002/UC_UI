import React from "react";
import styles from "./ResearchResult.module.scss";
import LibraryCard from "@/modules/common/components/library-card";

const ResearchResult = ({ researchResult }: { researchResult: any }) => {
  return (
    <>
      <div className={`${styles.result} w-100 `}>
        <h2 className="pt-4 text-center">
          <strong>KẾT QUẢ TRA CỨU</strong>
        </h2>
        <div className={`${styles.status}`}>
          <div className="mb-3">
            <div>
              <span>
                <strong>
                  Mã đăng ký:{" "}
                  <span className="text-danger">
                    {researchResult?.registrationCode}
                  </span>
                </strong>
              </span>
            </div>
            <div>
              <strong>
                Tình trạng xử lý:{" "}
                {researchResult?.status === "4" ? (
                  <span className="text-danger">Đăng ký đang chờ duyệt!</span>
                ) : (
                  <span className="text-success">Đăng ký đã được duyệt!</span>
                )}
              </strong>
            </div>
            <div>
              {researchResult?.isPayment ? (
                <strong className="text-success">
                  Bạn đã thanh toán chi phí làm thẻ.
                </strong>
              ) : (
                <span className="text-danger">
                  Bạn chưa thanh toán chi phí làm thẻ!
                </span>
              )}
            </div>
          </div>
        </div>
        <LibraryCard researchResult={researchResult} />
      </div>
    </>
  );
};

export default ResearchResult;
