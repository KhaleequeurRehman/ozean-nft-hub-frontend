import React from "react";
import styles from "./Wallet.module.sass";
import { Box , Typography} from "@mui/material";

export default function WalletHolder() {
  return (
    <>
      <Box className={styles.bg}>
        <img src="./ozean_Images/Images/BG.svg" />
        <Box className={styles.text}>
          <Typography className={styles.heading}>Wallet Holder</Typography>
          <Box className={styles.wallet}>
            <img src="./ozean_Images/Icons/Wallet.svg" />
            <Typography>$98001</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
