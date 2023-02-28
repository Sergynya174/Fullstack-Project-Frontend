import { Avatar } from "@mui/material";
import React from "react";
import styles from "./UserInfo.module.css";

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div className={styles.root}>
      <Avatar
        className={styles.avatar}
        src={avatarUrl || "/static/images/avatar/1.jpg"}
        alt={fullName}
      />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
