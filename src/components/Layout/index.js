import React, { useState } from "react";
import styles from "./Layout.module.sass";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Sidebar2 from "../Sidebar2";
import { AiOutlineCopyright } from "react-icons/ai";
import{Box,Typography} from "@mui/material"

export default function Layout(props) {
  const [sidebar, setsidebar] = useState(true);
  function data() {
    setsidebar(!sidebar);
    console.log("data =====", sidebar);
  }
  return (
    <>
      <Box className={styles.bg}>
        <Box className={sidebar ? `${styles.sidebar}` : `${styles.hide}`}>
          <Sidebar data={data} />
        </Box>
        <Box className={styles.rightDiv}>
          <Navbar data={data} />
          <Box className={styles.hero}>
            <Box className={styles.heroLeft}>{props.children}</Box>
            <Box className={styles.heroSide}>
              <Sidebar2 />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.footer}>
        <Typography>
          <AiOutlineCopyright /> 2021 Lowin NFT, Inc
        </Typography>
      </Box>
    </>
  );
}
