import React from "react";
import styles from "./OfferCard.module.sass";
import {Box, Typography} from "@mui/material"

export default function OfferCard() {
  return (
    <>
      <Box className={styles.bg}>
        <Box className={styles.img}>
          <img
            src="./ozean_Images/Images/Rectangle 10@4x.png"
            alt="cant load image"
          />
        </Box>
        <Box className={styles.lowerCard}>
          <Typography sx={{fontWeight:'bold'}}>Crypto Hero Marce</Typography>
          <Box className={styles.name}>
            <Typography>Crypto hero Marce</Typography>
            <Typography>
              <img src="./ozean_Images/Discount.svg" />
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
