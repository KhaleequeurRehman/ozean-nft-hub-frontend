import React, { useState } from "react";
import styles from "./Navbar.module.sass";
import Sidebar from "../Sidebar";
import Sidebar2 from "../Sidebar2";
import { FaBars } from "react-icons/fa";
// _____________________________________
import Box from "@mui/material/Box";
import Box2 from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import List2 from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItem2 from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";


export default function Navbar(props) {
  // ______________________________
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleDrawer2 = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    if (anchor == "left") {
      return (
        <Box
          sx={{
            width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
            backgroundColor: "black",
          }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {["Inbox"].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} /> */}
                <Sidebar />
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
          {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
        </Box>
      );
    }
    if (anchor == "right") {
      return (
        <Box2
          sx={{
            width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
            backgroundColor: "#010613",
          }}
          role="presentation"
          onClick={toggleDrawer2(anchor, false)}
          onKeyDown={toggleDrawer2(anchor, false)}
        >
          <List2>
            {["Inbox"].map((text, index) => (
              <ListItem2 button key={text}>
                {/* <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
        <ListItemText primary={text} /> */}
                <Sidebar2 />
              </ListItem2>
            ))}
          </List2>
          {/* <Divider /> */}
          {/* <List>
    {["All mail", "Trash", "Spam"].map((text, index) => (
      <ListItem button key={text}>
      <ListItemIcon>
      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
      </ListItem>
      ))}
    </List> */}
        </Box2>
      );
    }
  };

  // ______________________________
  const [sidebar, setsidebar] = useState(false);
  const [IsActive, setIsActive] = useState(false);
  // handler = () => {
  //   setIsActive(!IsActive);
  // };

  const handleToggle = () => {
    setIsActive(!IsActive);
  };
  console.log("haaal putarrr", IsActive);
  return (
    <>
      <Box className={styles.bg}>
        <Typography variant="h6" className={styles.heading}>
          Sell extraordinary NFTs{" "}
          <FaBars onClick={toggleDrawer("left", true)} className={styles.ham} />
        </Typography>
        <Box className={styles.navAside}>
          <Box className={styles.search}>
            <input
              placeholder="Search Item, collections and accounts"
              type="text"
            />
            <img
              src="./ozean_Images/Icons/Search_Icon.svg"
              alt="cant load image"
            />
          </Box>
          <Box className={styles.icons}>
            <Box className={styles.icon}>
              <img
                src="./ozean_Images/Icons/Activity.svg"
                alt="cant load image"
              />
            </Box>
            <Box className={styles.icon}>
              <img
                src="./ozean_Images/Icons/Notification.svg"
                alt="cant load image"
              />
            </Box>
            {/* <Box className={styles.icon}>
              <img src="No _ Circle _ 64px@4x.png" alt="cant load image" />
            </Box> */}
            {/* <Box className={styles.icon}> */}
            <Box className={styles.dropdown}>
              <img
                onClick={handleToggle}
                src="ozean_Images/Images/No _ Circle _ 64px@4x.png"
                className={styles.avatar}
              />
              <Box className={IsActive ? `${styles.links}` : `${styles.hide}`}>
                <Link
                  to="#"
                  className={styles.link}
                  onClick={handleToggle}
                >
                  My Profile
                </Link>
                <Link to="#" className={styles.link} onClick={handleToggle}>
                  Connect Wallet
                </Link>
                <Link to="#" className={styles.link} onClick={handleToggle}>
                  Log Out
                </Link>
              </Box>
            </Box>
            {/* </Box> */}
            <Box className={styles.icon}>
              <img
                onClick={toggleDrawer("right", true)}
                src="./ozean_Images/Icons/Arrow - Left Circle.svg"
                alt="cant load image"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ________________________ */}
      <Box>
        {["left", "right"].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
}
