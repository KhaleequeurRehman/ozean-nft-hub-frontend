import React from "react";
import styles from "./Card.module.sass";
import { Link } from "react-router-dom";
import {Box ,Typography} from "@mui/material"
export default function NFTCard(props) {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.img}>
          <img src={props.image} alt="cant load image" />
        </Box>
        <Box className={styles.lowerCard}>
          <Box className={styles.upper}>
            <Box className={styles.name}>
              <Typography>Crypto Hero Marc</Typography>
              <Typography>Crypto Hero Marc</Typography>
            </Box>
            <Box className={styles.price}>
              <Typography>Price</Typography>
              <Typography>$66567</Typography>
            </Box>
          </Box>
          <Box className={styles.buy} style={props.style}>
            <Link
              to="/item"
              style={{
                color: " #FFFFFF",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Buy Now
            </Link>
            {/* <button>Buy Now</button> */}
            <Typography>2 days left</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
