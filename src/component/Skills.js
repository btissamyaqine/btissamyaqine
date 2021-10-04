import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HomeIcon from '@material-ui/icons/Home';
import { green, pink } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
  span:{
    background: "#FCA311",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "5rem",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#e5e5e5",
      fontSize: "1.5rem",
      height:"90px",
      justifyContent:"space-between",
      "&:hover": {
        fill: "#fca311",
        fontSize: "2rem",
      },
    },
    },

}));
const Skills = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid className={classes.root}>
      <Avatar variant='circular' className={classes.avatar} >
        <HomeIcon />
      </Avatar>
      </Grid>
    </Box>
    // <div>
    //   <span  className={classes.span}>

    //   </span>
    // </div>
    // <section>
    //   <span >
    //   <Typography variant="body1" ><EmailIcon />btissamyaqine123@gmail.com</Typography>
    //   </span>
    // </section>
  );
};
  
export default Skills;
