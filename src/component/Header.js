import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Avatar2 from "../image/Avatar.jpeg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(45),
    height: theme.spacing(45),
    margin: theme.spacing(1),
  },
  title: {
    color: "#FFC745",
  },
  subtitle: {
    color: "#14213d",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    
    textAlign: "center",
    zIndex: 1,
    // background: "#fca311"
 
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={Avatar2} alt="Btissam YAQINE" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Btissam YAQINE"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;