import React from "react";
import styles from "./Sidebar2.module.sass";
import CreditCard from "../CreditCard";
import WalletHolder from "../WalletHolder";
import UserList from "../UserList";
import Notification from "../Notification";
import {Box} from "@mui/material"

export default function Sidebar2() {
  return (
    <>
      <Box className={styles.bg}>
        <Box className={styles.wallet}>
          <WalletHolder />
        </Box>
        <Box className={styles.card}>
          <CreditCard />
        </Box>
        <Box className={styles.user}>
          <UserList />
        </Box>
        <Box className={styles.noti}>
          <Notification />
        </Box>
      </Box>
    </>
  );
}
