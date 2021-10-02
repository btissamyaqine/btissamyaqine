import React from 'react';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Avatar2 from "../image/Avatar.jpeg";
import Button from "@material-ui/core/Button";
import Link from '@mui/material/Link';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@mui/material/IconButton';


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(55),
    height: theme.spacing(55),
    marginLeft: "60%",
    marginTop: "70px"
  },
  title: {
    color: "#e5e5e5",
  },
  subtitle: {
    color: "#e5e5e5",
  },
  mainContainer: {
    background: "#e5e5e5",
    height: "100%",
    
  },
  cardContainer: {
    color:"#FCA311",
    background: "#14213d",
    margin: "5rem",
    height: "550px",
    width: "500px",
    marginTop:"-450px",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#e5e5e5",
      fontSize: "2rem",
      height:"90px",
      justifyContent:"space-between",
      "&:hover": {
        fill: "#fca311",
        fontSize: "3rem",
      },
    },
  },
  
}));
const projects = [
  { name: "Btissam YAQINE",
    about: `I'm Ibtissam YAQINE, 20 years old, I'm full stack web developer with over than 2 years of experience. I adapt, 
    I learn quickly and I’m passionate about new technologies.`,

    presentationFirst: "HELLO EVERYBODY, I AM",
    presentationSecond: "Full Stack Web Developer"

  }
 
];
const About = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container >
        <Avatar className={classes.avatar} src={Avatar2} alt="Btissam YAQINE" />
      </Grid>
      <Grid container>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  alt="Project 1"
                  height="1000"
                />
                <CardContent>
                  <Typography className={classes.title} variant="body2" gutterBottom>
                    {project.presentationFirst}
                  </Typography>
                  <Typography variant="h3" gutterBottom >
                    {project.name}
                  </Typography>
                  <Typography className={classes.subtitle} variant="body2" gutterBottom>
                    {project.presentationFirst}
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Typography variant="h5" gutterBottom>
                    {project.about}
                  </Typography>
              </CardActions>
                <Typography className={classes.subtitle} variant="body1" >contacte me </Typography>
                <IconButton  className={classes.root}  href="https://animate.style/"><LinkedInIcon /></IconButton>
                <IconButton  className={classes.root}  href="https://animate.style/"><GitHubIcon /></IconButton>
                <IconButton  className={classes.root}  href="https://animate.style/"><EmailIcon /></IconButton>
            </Card>
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
  
export default About;
