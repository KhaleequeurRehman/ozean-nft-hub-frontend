import React from "react";
import styles from "./CreateButton.module.sass";
import {Box,Typography} from "@mui/material"

export default function CreateButton() {
  return (
    <>
      <Box className={styles.bg}>
        <img src="./ozean_Images/Icons/Plus.svg" alt="cant load image" />
        <Typography variant="h6" className={styles.heading}>Create NFT</Typography>
      </Box>
    </>
  );
}
