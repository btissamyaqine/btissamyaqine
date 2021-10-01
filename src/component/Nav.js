import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#14213d",
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "5",
    cursor: "pointer",
    color:"#FFC745"
  },
  link: {
    textDecoration: "none",
    color: "#FFC745",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "#FFC745",
      borderBottom: "1px solid white",
    },
  },
}));

function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
      <AppBar className={classes.appBar} position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Portfolio
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/about" className={classes.link}>
                About
              </Link>
              <Link to="/Project" className={classes.link}>
              Project
              </Link>
              <Link to="/experience" className={classes.link}>
              Experience
              </Link>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
  );
}
export default Nav;