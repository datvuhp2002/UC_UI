import React from "react";
import styles from "./Card.module.scss";
import { Divider } from "@mui/material";
const Card: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <hr />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Card;
