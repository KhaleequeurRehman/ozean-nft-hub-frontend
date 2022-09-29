import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.sass";
import MarketPlaceCard from "../MarketPlaceCard";
import OfferCard from "../OfferCard";
import FilterCard from "../FilterCard";
import CreateButton from "../CreateButton";
import { AiOutlineClose } from "react-icons/ai";
import {Box} from "@mui/material"

export default function (props) {
  const [close, setclose] = useState(false);
  return (
    <>
      <Box className={styles.bg} sx={{
        height:{lg:'1508px',md:'1508px',sm:'auto',xs:'auto'},overflowY: "unset"
      }}>
        <Box className={styles.close}>
          <AiOutlineClose onClick={() => props.data} color="white" size={20} />
        </Box>
        <Box className={styles.logo}>
          <Link to={"/"}>
            <img src="./ozean_Images/Images/OzenLogo1.svg" />
          </Link>
        </Box>
        <Box className={styles.create}>
          <CreateButton />
        </Box>
        <Box className={styles.market}>
          <MarketPlaceCard />
        </Box>
        <Box className={styles.filter}>
          <FilterCard />
        </Box>
        <Box className={styles.offerCrd}>
          <OfferCard />
        </Box>
      </Box>
    </>
  );
}
