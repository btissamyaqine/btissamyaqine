import React from 'react';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Avatar2 from "../image/Avatar.jpeg";
const useStyles = makeStyles((theme) => ({
  // avatar: {
  //   width: theme.spacing(45),
  //   height: theme.spacing(45),
  //   margin: theme.spacing(1),
  // },
  // title: {
  //   color: "#FFC745",
  // },
  // subtitle: {
  //   color: "#14213d",
  //   textTransform: "uppercase",
  // },
  // typedContainer: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "20%",
  //   transform: "translate(-50%,-50%)",
  //   width: "100vw",
  //   textAlign: "left",
  //   zIndex: 1,
 
  // },
}));
const projects = [
 
   { name: "Human Resource Management",}
 
];
const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
    {/* <Grid container justify="center">
      <Avatar className={classes.avatar} src={Avatar2} alt="Btissam YAQINE" />
    </Grid> */}
    {/* <h1></h1>
    {projects.map((project) =>{
      return {project.name}
    })}; */}
  </Box>
  );
};
  
export default About;
