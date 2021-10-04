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
import { makeStyles } from "@material-ui/core/styles";
import Avatar2 from "../image/Avatar.jpeg";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  left:{
    flex: 0.5,
    overFlow:"hidden",
  },
  right:{
    flex: 0.5,
  },
  avatar: {
    width: theme.spacing(70),
    height: theme.spacing(70),
    height: "550px",
    marginTop: "5rem",
    borderRadius: "500px",
    marginLeft: "30px",

  },
  title: {
    color: "#e5e5e5",
  },
  subtitle: {
    color: "#e5e5e5",
    padding:"2px",
  },
  mainContainer: {
    background: "#e5e5e5",
    height: "100%",
  },
  cardContainer: {
    color:"#FCA311",
    background: "#14213d",
    marginTop: "5rem",
    height: "550px",
    width: "640px",
    padding:".3em .5em .1em 2em",
  },
  icon:{
    "& .MuiSvgIcon-root": {
      fill: "#e5e5e5",
    }
  }
}));

const projects = [
  { 
    name: "Btissam YAQINE",
    about: `I'm Ibtissam YAQINE, 20 years old, I'm full stack web 
    developer with over than 2 years of experience. I adapt, 
    I learn quickly and I’m passionate about new technologies.`,

    presentationFirst: "Hello Everybody I'am",
    presentationSecond: "Full Stack Web Developer"
  }
];

const About = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        {/* Pic */}
        <Grid container item lg={6} sm={12} >
          {/* <Avatar lg={6} md={12} className={classes.avatar} src={Avatar2} alt="Btissam YAQINE" /> */}
          <CardMedia
            className={classes.avatar}
            component="img"
            image={Avatar2}
            
          />
        </Grid>  

        {/* About */}
        {projects.map((project, i) => (
          // <Grid item xs={12} sm={8} md={4} key={i}>
          <Grid container item lg={6} sm={12} key={i}>
            <Card className={classes.cardContainer} >
              <CardActionArea>
                <CardMedia
                  alt="Project 1"
                  height="100"
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
              <Typography className={classes.subtitle} variant="body1" ><EventNoteIcon />11 Nouvenbre 2000</Typography>
              <Typography className={classes.subtitle} variant="body1" ><EmailIcon />btissamyaqine123@gmail.com</Typography>
                <Typography className={classes.subtitle} variant="body1" ><PhoneIcon />0687965432</Typography>
                <Typography className={classes.subtitle} variant="body1" ><HomeIcon />Province Khouribga</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
  
export default About;
