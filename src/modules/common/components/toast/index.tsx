import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useToastContext } from "@/lib/context/toast-context";

interface Props {}

const Index = (props: Props) => {
  let { showToast, setShowToast, configToast } = useToastContext();
  const TypeToastHeader = () => {
    let html: any = [];
    if (configToast.type == "success") {
      html.push(
        <Toast.Header className="bg-success">
          <span className="me-auto">Thành công</span>
        </Toast.Header>
      );
    } else if (configToast.type == "info") {
      html.push(
        <Toast.Header>
          <span className="me-auto">Thông tin</span>
        </Toast.Header>
      );
    } else if (configToast.type == "warning") {
      html.push(
        <Toast.Header className="bg-warning">
          <span className="me-auto">Cảnh báo</span>
        </Toast.Header>
      );
    } else if (configToast.type == "error") {
      html.push(
        <Toast.Header className="bg-danger">
          <span className="me-auto">Lỗi</span>
        </Toast.Header>
      );
    }
    return html;
  };
  return (
    <ToastContainer
      position="top-end"
      className="p-3"
      style={{ position: "fixed", zIndex: 99999999999999999999 }}
    >
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide={true}
      >
        {TypeToastHeader()}
        <Toast.Body>{configToast.content}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
export default Index;
