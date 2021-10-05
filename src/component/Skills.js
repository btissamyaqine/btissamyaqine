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
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Skills.css';

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#e5e5e5",
    height: "100%",
  },

}));
const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer} sx={{ flexGrow: 1 }}>
      <Grid sx={{ flexGrow: 1 }} paddingBottom="50px" spacing={2}>
        <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
                <Grid  className="tech-icons" item>
                  <LinkedInIcon />
                </Grid>
                <Grid className="tech-icons" item>
                  <DiReact />
                </Grid>
                <Grid  className="tech-icons" item>
                  <DiNodejs />
                </Grid>
                <Grid  className="tech-icons" item>
                  <DiMongodb />
                </Grid>
                <Grid  className="tech-icons" item>
                  <DiGit />
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
  
export default Skills;
