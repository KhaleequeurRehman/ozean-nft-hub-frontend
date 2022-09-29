import * as React from "react";
import Accordion from "@mui/material/Accordion";
import Box from "@mui/material/Box"
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./MarketPlace.module.sass";
import { StylesContext } from "@material-ui/styles";
import { style } from "@mui/system";

export default function MarketPlaceCard() {
  return (
    <Box className={styles.bg}>
      <Typography  className={styles.heading}>Marketplace</Typography>
      <Accordion
        className={styles.accordion}
      // sx={{
      //   backgroundColor: "black",
      //   color: "white",
      // }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.icon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Box sx={{ mr: '8px' }}>
              <img
                src="ozean_Images/Category.svg"
                alt="cant load image"
                className={styles.iconColor}
              />
            </Box>
            <Box>
              <Typography>
                Category
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.icon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Box sx={{ mr: '8px' }}>
              <img src="ozean_Images/Chart.svg" className={styles.iconColor} />
            </Box>{" "}
            <Box>
              <Typography>Stats</Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.icon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Box sx={{ mr: '8px' }}>
              <img src="ozean_Images/Paper.svg" className={styles.iconColor} />
            </Box>{" "}
            <Box>
              <Typography>Resources</Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
