import React from "react";
import styles from "./Notification.module.sass";
import {Box,Typography} from "@mui/material"

export default function Notification() {
  return (
    <>
      <Box className={styles.bg}>
        <Typography className={styles.heading}>Notification</Typography>
        {[1, 2, 3].map((v, i) => {
          return (
            <Box className={styles.container}>
              <Box className={styles.profile}>
                <img
                  src="./ozean_Images/Images/circle_3.png"
                  alt="cant load image"
                />
              </Box>
              <Box className={styles.text}>
                <Typography variant="body2">Juliet:Revenant #61</Typography>
                <Typography variant="body2">
                  Has been sold <span>2 Eth</span>
                </Typography>
                <Typography variant="body2">27 oct 2021 at 07:05 pm</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
