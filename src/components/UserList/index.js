import React from "react";
import styles from "./UserList.module.sass";
import {Box,Typography} from "@mui/material"

export default function UserList() {
  return (
    <>
      <Box className={styles.bg}>
        <Typography className={styles.heading}>Top Creator NFTs</Typography>
        {[1, 2, 3, 4, 5].map((v, i) => {
          return (
            <Box className={styles.user}>
              <Box className={styles.profile}>
                <img src="./ozean_Images/Images/circle_2.png" />
                <Box className={styles.name}>
                  <Typography variant="body2">Meka Vers</Typography>
                  <Typography variant="body2">@meka</Typography>
                </Box>
              </Box>
              <img src="./ozean_Images/Icons/Bookmark.svg" />
            </Box>
          );
        })}
      </Box>
    </>
  );
}
