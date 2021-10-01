import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons//LinkedIn';
import Link from '@mui/material/Link';


const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#fafafa",
    position:"absolute",
    bottom:"0",
    width:"100%",
    height:"90px",   /* Height of the footer */
    
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#14213d",
      fontSize: "2rem",
      "&:hover": {
        fill: "#fca311",
        fontSize: "3rem",
      },
    },
  },
  
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <Link href="https://www.linkedin.com/in/btissamyaqine/" >
          <BottomNavigationAction className={classes.root} label="Recents" icon={<LinkedInIcon />} />
      </Link  >
      <Link href="https://www.facebook.com/btissam.yaqine/" >
          <BottomNavigationAction  icon={<Facebook />} className={classes.root} />
      </Link  >
      <Link href="https://www.instagram.com/iambtissam.yqn/?hl=fr" >
          <BottomNavigationAction icon={<Instagram />} className={classes.root}/>
      </Link  >
      <Link href="https://github.com/btissamyaqine/" >
          <BottomNavigationAction icon={<GitHubIcon />} className={classes.root}/>
      </Link  >
    </BottomNavigation>
  );
};
export default Footer;