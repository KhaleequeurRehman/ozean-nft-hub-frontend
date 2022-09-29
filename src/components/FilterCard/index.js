import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box"
import styles from "./Filter.module.sass";
import { StylesContext } from "@material-ui/styles";
import { style } from "@mui/system";
import { Link } from "react-router-dom";

export default function MarketPlaceCard() {
  return (
    <Box className={styles.bg}>
      <Typography className={styles.heading}>Filter</Typography>
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
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
          }}>
            <Box sx={{mr:'8px'}}>
            <img src="ozean_Images/Category.svg" className={styles.iconColor} />
            </Box>
            <Box>
                <Typography>Status</Typography> 
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href="#" className={styles.link}>
              ABC
            </a>
            <br />
            <a href="#" className={styles.link}>
              ABC
            </a>
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
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
          }}>
            <Box sx={{mr:'8px'}}>
            <img src="ozean_Images/Chart.svg" className={styles.iconColor} />
            </Box>
            <Box>
                <Typography>Price</Typography> 
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href="#" className={styles.link}>
              ABC
            </a>
            <br />
            <a href="#" className={styles.link}>
              ABC
            </a>
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
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
          }}>
            <Box sx={{mr:'8px'}}>
            <img src="ozean_Images/3 User.svg" className={styles.iconColor} />
            </Box>
            <Box>
                <Typography>Collection</Typography> 
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href="#" className={styles.link}>
              ABC
            </a>
            <br />
            <a href="#" className={styles.link}>
              ABC
            </a>
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
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
          }}>
            <Box sx={{mr:'8px'}}>
              <img src="ozean_Images/More Circle.svg" className={styles.iconColor}/>
            </Box>
            <Box>
                <Typography>Chains</Typography> 
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href="#" className={styles.link}>
              ABC
            </a>
            <br />
            <a href="#" className={styles.link}>
              ABC
            </a>
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
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
          }}>
            <Box sx={{mr:'8px'}}>
              <img src="ozean_Images/Bag 3.svg" className={styles.iconColor} />
            </Box>
            <Box>
                <Typography>Category</Typography> 
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href="#" className={styles.link}>
              ABC
            </a>
            <br />
            <a href="#" className={styles.link}>
              ABC
            </a>
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
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
          }}>
            <Box sx={{mr:'8px'}}>
            <img src="ozean_Images/Discount.svg" className={styles.iconColor} />
            </Box>
            <Box>
                <Typography>On sale</Typography> 
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href="#" className={styles.link}>
              ABC
            </a>
            <br />
            <a href="#" className={styles.link}>
              ABC
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
