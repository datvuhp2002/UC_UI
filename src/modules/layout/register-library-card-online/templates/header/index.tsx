"use client";
import React, { useRef, useState } from "react";
import styles from "./Header.module.scss";
import Image from "@/modules/common/components/Image";
import Button from "@/modules/common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Tooltip, Overlay } from "react-bootstrap";
import { directPublicRoutes } from "@/config/router";
import { usePathname } from "next/navigation";

interface Route {
  path: string;
  name?: string; // 'name' là tùy chọn
  icon?: React.ReactNode;
}

const Header = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const pathName = usePathname();

  const handleToggleMenu = () => {
    setShow(!show);
  };

  return (
    <div className={`${styles.wrapper} d-flex align-items-center`}>
      <div className="container d-flex align-items-center">
        <Image alt="logo" src={process.env.FILE_URL + "images/logo.jpg"} logo />
        <span className={`${styles.title} ms-2 d-none d-sm-block`}>
          MỤC LỤC LIÊN HỢP DÙNG CHUNG - UC.KMS
        </span>
      </div>

      <button
        ref={target}
        onClick={handleToggleMenu}
        aria-controls="tooltip-menu"
        aria-expanded={show}
        className={`${styles.barButton} me-5 d-block d-md-none d-lg-none d-xl-none d-xxl-none`}
      >
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
      </button>

      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip
            id="tooltip-menu"
            {...props}
            className={`${styles.menu_tooltip} shadow rounded-5 d-md-none `}
          >
            <div className={`${styles.tooltip_wrapper} py-1`}>
              {directPublicRoutes.map((route: Route) => {
                const isActive =
                  route.path === "/"
                    ? pathName === route.path
                    : pathName.startsWith(route.path) && route.path !== "/";
                return (
                  <Button
                    to={route.path}
                    active={isActive}
                    rightIcon={route.icon}
                    key={route.path}
                    onClick={handleToggleMenu}
                    toggleMenu
                    className="rounded-2"
                  >
                    {route.name}
                  </Button>
                );
              })}
            </div>
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
};

export default Header;
