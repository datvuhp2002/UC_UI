"use client";
import React from "react";
import styles from "./NavLink.module.scss";
import { directPublicRoutes } from "@/config/router";
import Button from "@/modules/common/components/Button";
import { usePathname } from "next/navigation";

interface Route {
  path: string;
  name?: string; // Make 'name' optional
  icon?: React.ReactNode;
}

const NavLink: React.FC = () => {
  const pathName = usePathname();

  return (
    <div
      className={`${styles.wrapper} d-flex align-items-center d-none d-sm-block`}
    >
      <div className={`container d-flex align-items-center h-100`}>
        {directPublicRoutes.map((route: Route) => {
          // check active link
          const isActive =
            route.path === "/"
              ? pathName === route.path
              : pathName.startsWith(route.path) && route.path !== "/";

          return (
            <Button to={route.path} active={isActive} key={route.path} NavLink>
              {route.name || ""}
              {/* Handle the case where 'name' is undefined */}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default NavLink;
