"use client";

import { useModalContext } from "@/lib/context/modal-context";
import { useAppContext } from "@/lib/context/app-context";
import FormLogin from "@/modules/common/share-pages/form-login";
import BootstrapIcon from "@/modules/common/components/bootstrap-icon";
import { useEffect } from "react";
import { EventType, IUserLogout, SendEventLog } from "@/common/eventlog";
import FormUserInfo from "@/modules/common/share-pages/form-user-info";
import FormChangePassword from "@/modules/common/share-pages/form-change-password";
import FormBorrowing from "@/modules/common/share-pages/form-borrowing";
import FormReturned from "@/modules/common/share-pages/form-returned";
import FormExtend from "@/modules/common/share-pages/form-extend";
interface Props {
  iconColor: any;
}
const Account = (props: Props) => {
  const { HandleOpenModal } = useModalContext();
  const { setIsAuthenticated, isAuthenticated } = useAppContext();
  const HanleLogin = () => {
    HandleOpenModal({
      title: "",
      body: <FormLogin />,
      footer: "",
      width: 30,
    });
  };
  const HanleShowUserInfo = () => {
    HandleOpenModal({
      title: "",
      body: <FormUserInfo />,
      footer: "",
      width: 40,
    });
  };
  const HanleChangePassword = () => {
    HandleOpenModal({
      title: "",
      body: <FormChangePassword />,
      footer: "",
      width: 40,
    });
  };
  const HanleBorrowing = () => {
    HandleOpenModal({
      title: "",
      body: <FormBorrowing />,
      footer: "",
      width: 70,
    });
  };
  const HanleExtend = () => {
    HandleOpenModal({
      title: "",
      body: <FormExtend />,
      footer: "",
      width: 70,
    });
  };
  const HanleReturned = () => {
    -HandleOpenModal({
      title: "",
      body: <FormReturned />,
      footer: "",
      width: 70,
    });
  };
  const GetUserInfo = () => {
    let userInfo = null;
    if (typeof window !== "undefined") {
      userInfo = sessionStorage.getItem("OUserInfo");
    }
    if (userInfo) {
      return JSON.parse(userInfo);
    }
    return null;
  };
  const GetToken = () => {
    if (typeof window !== "undefined") {
      let token = sessionStorage.getItem("OToken");
      if (token) {
        return token;
      }
    }
    return null;
  };
  const UserInfo = GetUserInfo();
  const LogOut = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("OToken", "");
      sessionStorage.setItem("OUserInfo", "");
    }
    setIsAuthenticated(false);
    var userLogout: IUserLogout = {
      UserName: UserInfo.UserName,
    };
    SendEventLog(EventType.UserLogout, userLogout);
  };
  useEffect(() => {
    if (GetToken() && UserInfo) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);
  return (
    <>
      {isAuthenticated ? (
        <div className="btn-group ms-3">
          <span
            className="login-btn"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            <BootstrapIcon
              iconName="PersonVcardFill"
              className={props.iconColor}
              style={{ fontSize: 16, marginBottom: 3 }}
            />
            <span className={"p-1 mr-0-i pr-0-i pl-0-i " + props.iconColor}>
              {" "}
              {UserInfo.FullName}
            </span>
          </span>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => {
                  HanleShowUserInfo();
                }}
              >
                Thông tin cá nhân
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => {
                  HanleBorrowing();
                }}
              >
                Tài liệu đang mượn
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => {
                  HanleReturned();
                }}
              >
                Tài liệu đã trả
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => {
                  HanleExtend();
                }}
              >
                Tài liệu gia hạn
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => {
                  HanleChangePassword();
                }}
              >
                Đổi mật khẩu
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  LogOut();
                }}
                className="dropdown-item"
                type="button"
              >
                Đăng xuất
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <a
          onClick={() => {
            HanleLogin();
          }}
          className="login-btn ms-3 mr-0-i c-pointer"
        >
          <BootstrapIcon
            iconName="PersonCircle"
            className={props.iconColor}
            style={{ fontSize: 16, marginBottom: 3 }}
          />
          <span
            className={
              "d-none d-md-inline-block p-1 mr-0-i pr-0-i " + props.iconColor
            }
          >
            {" "}
            Đăng nhập
          </span>
        </a>
      )}
    </>
  );
};
export default Account;
