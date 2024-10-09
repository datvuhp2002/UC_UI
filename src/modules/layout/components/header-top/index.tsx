"use client";

import Account from "./account";
import LinkAccount from "./link-account";
import { useAppContext } from "@/lib/context/app-context";
interface Props {
  label: any;
  isLinkAccount: any;
}
const HeaderTop = (props: Props) => {
  const { webInfo } = useAppContext();

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="container d-flex align-items-center mt-2 mb-2">
          <div className="d-flex align-items-center mb-0 mt-2 mb-2">
            <a href="/">
              <img
                width={40}
                height={40}
                src={process.env.FILE_URL + "images/logo.png"}
                alt="..."
              />
            </a>
            <a href="/" className="ms-2">
              <h6 className="d-none d-md-inline-block mb-0 font-weight-bold">
                {webInfo && webInfo.title}
              </h6>
              <p className="d-md-none d-inline-block mb-0 font-weight-bold">
                {webInfo && webInfo.title}
              </p>
            </a>{" "}
          </div>
          <div className={"ms-auto "}>
            {props.isLinkAccount ? (
              <LinkAccount iconColor={"text-theme"} />
            ) : (
              <Account iconColor={"text-theme"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
