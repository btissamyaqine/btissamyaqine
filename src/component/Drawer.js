import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        fontSize: "20px",
        position:"relative",
        
        
    },
    icon:{
        color: "#FFC745",
    },
    list: {
      width: 400,
      color:'white',
    },
    MuiDrawer: {
      backgroundColor: "#FFC745",
    },
}));

function DrawerComponent() {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className={classes.MuiDrawer}
      >
        <List className={classes.list}>
         <ListItem  onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/Project">Project</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/Skills">Skills</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton  className={classes.icon} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;