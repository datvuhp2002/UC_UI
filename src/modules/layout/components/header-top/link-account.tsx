"use client"
import BootstrapIcon from "@/modules/common/components/bootstrap-icon";

interface Props {
  iconColor:any
}
const LinkAccount = (props: Props) => {
    const HanleLogin = () => {
      window.location.href = "/login"
    }
    return (
      <a onClick={() => {HanleLogin()}} className="login-btn ms-3 mr-0-i c-pointer">
        <BootstrapIcon iconName="PersonCircle" className={props.iconColor} style={{fontSize:16, marginBottom: 3}} />
        <span className={"d-none d-md-inline-block p-1 mr-0-i pr-0-i " + props.iconColor}>{" "}
          Đăng nhập
        </span>
      </a>
    )
}
export default LinkAccount;