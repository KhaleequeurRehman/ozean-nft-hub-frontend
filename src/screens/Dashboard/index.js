import React from "react";
import styles from "./Dashboard.module.sass";
import Layout from "../../components/Layout";
import { style } from "@mui/system";
import NFTCard from "../../components/NFTCard";
import { Box ,Typography} from "@mui/material";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const card = [
    {
      img: "ozean_Images/Images/Background (1).png",
    },
    {
      img: "ozean_Images/Images/Background (2).png",
    },
    {
      img: "ozean_Images/Images/Background (3).png",
    },
    {
      img: "ozean_Images/Images/Background (4).png",
    },
    {
      img: "ozean_Images/Images/Background (5).png",
    },
    {
      img: "ozean_Images/Images/Background (6).png",
    },
    {
      img: "ozean_Images/Images/Background (7).png",
    },
    {
      img: "ozean_Images/Images/Background (8).png",
    },
  ];
  return (
    <>
      <Layout>
       <Box className={styles.container}>
          <Box className={styles.filter}>
            <Box className={styles.filterSection}>
              <Typography variant="body2">19,299 results</Typography>
              <Box className={styles.filterItems}>
                <Box className={styles.filterItem}>
                  <Typography variant='body2'>Eth</Typography>
                  <img src="./ozean_Images/Icons/Close.svg" />
                </Box>
                <Box className={styles.filterItem}>
                  <Typography variant='body2'>Pol</Typography>
                  <img src="./ozean_Images/Icons/Close.svg" />
                </Box>
                <Box className={styles.filterItem}>
                  <Typography variant='body2'>Bit</Typography>
                  <img src="./ozean_Images/Icons/Close.svg" />
                </Box>
                <Box className={styles.filterItem}>
                  <Typography variant='body2'>Mel</Typography>
                  <img src="./ozean_Images/Icons/Close.svg" />
                </Box>
                <Box className={styles.filterItem}>
                  <Typography variant='body2'>Dol</Typography>
                  <img src="./ozean_Images/Icons/Close.svg" />
                </Box>
                <Box sx={{
                  ml:'10px'
                }}><Link to="" className={styles.LinkCls}><Typography style={{color:'#00A2FD',fontSize:'0.8rem'}}>Clear All</Typography></Link></Box>
              </Box>
            </Box>
            <Box className={styles.filterIcons}>
              <img
                src="./ozean_Images/Icons/Group26.svg"
                alt="cant load imagge"
              />
              <img
                src="./ozean_Images/Icons/Group27.svg"
                alt="cant load image"
              />
            </Box>
          </Box>
          <Box className={styles.cardContainer}>
            {card.map((v, i) => {
              return (
                <NFTCard image={v.img} />
              );
            })}
          </Box>
        </Box>
      </Layout>
    </>
  );
}
