"use client"

import BootstrapIcon from "@/modules/common/components/bootstrap-icon";
import styles from './style.module.css'
import Image from "next/image";
import { useAppContext } from "@/lib/context/app-context";

const FooterBottom = () => {
    const { webInfo } = useAppContext();
    return (<>
        <div className="container">
            <div className="row pt-4 pb-2">
                <div className="col-sm-6 mb-2">
                    <div className="d-flex mb-2 ms-1">
                        <div className="me-2 d-none d-md-block">
                            <a href="/">
                                <img width={40} height={40} src={process.env.FILE_URL + "images/logo.png"} alt="..." />
                            </a>
                        </div>
                        <div className="pt-2">
                            <a  className={"fs-6 font-weight-bold " + styles["title-footer"]}>{webInfo && webInfo.title}</a>
                            {/* <br />
                            <a className={styles["description-footer"]}><small className="mb-1">Điện thoại:</small> {webInfo && webInfo.phone}</a>
                            <br />
                            <a className={styles["description-footer"]}><small className="mb-1">E-mail:</small> {webInfo && webInfo.email}</a>
                            <br />
                            <a className={styles["description-footer"]}><small className="mb-1">Địa chỉ:</small> {webInfo && webInfo.address}</a> */}
                        </div>
                    </div>
                    <div className="ms-1">
                        <label className={"mb-1 " +styles["info-footer"]}>Điện thoại: {webInfo && webInfo.phone}</label>
                        <label className={"mb-1 " +styles["info-footer"]}>E-mail: {webInfo && webInfo.email}</label>
                        <label className={"" +styles["info-footer"]}>Địa chỉ: {webInfo && webInfo.address}</label> 
                    </div>
                </div>
                <div className="col-sm-3 mb-2">
                    <ul className="ms-1">
                        <li className="mb-2"><span className={"fs-5 " + styles["ft-hd-collection"]}>Bộ sưu tập</span></li>
                        <li className="mb-1">
                            <a href="/bo-suu-tap-tai-lieu-in" className={styles["ft-text-collection"]}>
                                Tài liệu in
                            </a>
                        </li>
                        <li className="mb-1">
                            <a href="/bo-suu-tap-tai-lieu-so" className={styles["ft-text-collection"]}>
                                Tài liệu số
                            </a>
                        </li>
                    </ul>  
                </div>
                <div className="col-sm-3 mb-2 downapp">
                    <ul className="ms-1">
                        <li><span className="fs-5 mb-2 mt-2">Theo dõi chúng tôi</span></li>
                        <li>
                            <a target="_blank" href="https://www.youtube.com/@UCVN-2014" className="fs-4 me-2">
                                <BootstrapIcon iconName="Facebook" />
                            </a>
                            {" "}
                            <a target="_blank" href="https://www.youtube.com/@UCVN-2014" className="fs-4 me-2">
                                <BootstrapIcon iconName="Youtube"/>
                            </a>
                            {" "}
                            <a target="_blank" href="https://www.youtube.com/@UCVN-2014" className="fs-4 me-2">
                                <BootstrapIcon iconName="Telegram"/>
                            </a>
                        </li>
                    </ul>  
                    {
                        process.env.TENANT == "sl" ? <div className="ms-1 mt-2 chplay">
                        <img src={process.env.FILE_URL + "images/chplay.jpg"} style={{ width: 30 }} />
                        <a href={process.env.FILE_URL + "download/OPAC-SonLa.apk"} className="ms-2">Ứng dụng OPAC</a>
                        </div>:<></>
                    }
                </div>
            </div>
        </div>
        {/* <div style={{ height:5, background: "linear-gradient(90deg, #69BE28 22%, #109070 22% 40%, #3890a4 40%)" }}></div> */}
        </>
    )
}
export default FooterBottom;