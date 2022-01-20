import React from 'react'

import { makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import SimpleTabs from "./SimpleTabs";
import { Box, Button, Container } from "@material-ui/core";
import ProfileCard from './pCard/ProfileCard';
import PersonalTab from './personalidTab/PersonalTab';

// import "./Profileid.scss"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius:0,
      },
      marginGrid:{
        marginTop:"80px"
      }

      
}));

export default function GridPersonalIdentification() {
    const classes = useStyles();
  
    return (
      <div className="bg-profile">
          <Container maxWidth="xl">
            <div className={classes.marginGrid}>

           
          <Grid container spacing={4} className="prof">
          <Grid item xs={12} md={3} >
            <ProfileCard/>
          </Grid>
          <Grid item xs={12} md={9} >
         <PersonalTab/>

          </Grid>
        </Grid>
        </div>
          </Container>
       
      </div>
    );
  }
  