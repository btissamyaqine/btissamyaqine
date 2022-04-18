import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import './Skills.css';

import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPhp,
  DiMysql,
  DiCss3,DiHeroku
} from "react-icons/di";
import { SiApache, SiBootstrap, SiNetlify, SiVisualstudio, SiMaterialui,SiExpress, SiTailwindcss } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#e5e5e5",
    // height: "10%",

    // marginTop: "25px",

  },

}));
const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer} sx={{ flexGrow: 2 }}>
      <Grid sx={{ flexGrow: 5 }} paddingBottom="50px" spacing={2}>
        <Grid item xs={12}>
            <Grid container  justifyContent="center" spacing={1}>
                <Grid className="tech-icons" item>
                  <DiReact />
                  <Grid className="tech-title">
                      ReactJs
                  </Grid>
                </Grid>
                <Grid  className="tech-icons"  item>
                  <DiNodejs alt="nodeJs" />
                    <Grid className="tech-title">
                      NodeJs
                    </Grid>
                </Grid>
                <Grid  className="tech-icons" item>
                  <SiExpress />
                  <Grid className="tech-title">
                    ExpressJs
                  </Grid>
                </Grid>
                <Grid  className="tech-icons" item>
                  <DiMongodb />
                  <Grid className="tech-title">
                    mongoodb
                  </Grid>
                </Grid>
                
            </Grid>
            <Grid container justifyContent="center" className="classes.tech-iconsPlus" spacing={1}>
                <Grid className="tech-icons" item>
                  <DiPhp />
                  <Grid className="tech-title">
                    PHP
                  </Grid>
                </Grid>
                <Grid  className="tech-icons"  item>
                  <DiMysql />
                  <Grid className="tech-title">
                    mySql
                  </Grid>
                </Grid>
                <Grid  className="tech-icons" item>
                  <SiApache />
                  <Grid className="tech-title">
                    Apache
                  </Grid>
                </Grid>
                <Grid  className="tech-icons" item>
                  <SiBootstrap />
                  <Grid className="tech-title">
                  Bootstrap
                  </Grid>
                </Grid>
                
            </Grid>
            <Grid container justifyContent="center" className="classes.tech-iconsPlus" spacing={2}>
                <Grid className="tech-icons" item>
                  <DiCss3 />
                  <Grid className="tech-title">
                  Css3
                  </Grid>
                </Grid>
                <Grid  className="tech-icons"  item>
                  <DiHeroku />
                  <Grid className="tech-title">
                  Heroku
                  </Grid>
                </Grid>
                <Grid  className="tech-icons" item>
                  <SiNetlify />
                  <Grid className="tech-title">
                  Netlify
                  </Grid>
                </Grid>
                <Grid  className="tech-icons" item>
                  <SiVisualstudio />
                  <Grid className="tech-title">
                  Visualstudio 
                  </Grid>
                </Grid>
                
            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
  
export default Skills;
