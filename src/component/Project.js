import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#14213D",
    height: "100%",
  },
  cardContainer: {
    color:"#FCA311",
    background: "#E5E5E5",
    margin: "3rem auto",
    height: "345px",
    width: "345px",
    
  },
 
  
}));

const projects = [
  {
    name: "Human Resource Management",
    description: `is open-source Application for Human Resources Management written
    in XAMP Stack (Linux, Apache, MySQL and PHP) and distributed under the GNU General Public License. 
    As an open source technology, anyone can run, modify or develop the code!`,
    href: "https://github.com/btissamyaqine/Human-Resource-Management",
  },
  {
    name: "Memories-app-mern-Stack",
    description: `A complete social media application using React, Node.js, Express and MongoDB,
    then deployed to heroku and netlify.`,
    href:"https://github.com/btissamyaqine/Memories-app-mern-Stack"
  },
  {
    name: "Restaurant Management “Noa-App” ",
    description: `is an open source Restaurant Management application 
    written in XAMP Stack allows you to manage the operations of your restaurant. 
    Generate everything from ingredients, 
    recipes, costs, purchase orders and inventory on one platform.
     and count the rest of your customers and your customer files!`,
    href: "https://github.com/btissamyaqine/Noa-App",
  },
  {
    name: "School management",
    description: `GSBSUP is an open source restaurant management application
    written in XAMP Stack allows  you to Student management, 
    Teacher management, Staff management, Payment management(evening classes), 
    Room and material management, Class management, 
    Consultation of absences, Category of memos according to the needs of the school!`,
    href: "https://github.com/issamelferkh/gsbsup"
  },
  {
    name: "COVID-19",
    description: `In this app we can track Covid-19 patients via geolocation and 
    turn it into a React app using hooks (useState, useEffect) and Material-ui, Firebase, Numeral .  !`,
    href:"https://github.com/btissamyaqine/COVID-19-Tracker"
  },
  {
    name: "Expense Tracker",
    description: `In this project we will take a vanilla JS expense tracker app and turn it into a React app
     using hooks (useState, useContext, useReducer) and the context API.`,
    href: "https://github.com/btissamyaqine/-Expense_Tracker_React_JS"
  },
  {
    name: "Context_Api_React",
    description: `Context_Api_React is a context to how we can management a list of the Movies,
     from how we can Add a movie, how we can show it, 
    know how many movies we hane in our list and update our state`,
    href:"https://github.com/btissamyaqine/Context_Api_React"
  },
  
];

const Project = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  alt="Project 1"
                  height="140"
                  href={project.href}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.CardFooter} >
                  <Button  size="small" color="primary">
                    <a href="https://github.com/btissamyaqine/Human-Resource-Management">See On GitHub</a> 
                  </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;