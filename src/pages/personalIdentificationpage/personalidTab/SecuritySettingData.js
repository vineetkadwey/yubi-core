
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChangeMobile from './SecuritySetting/ChangeMobile';
import ChangePassword from './SecuritySetting/ChangePassword';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'10px'
  },
  Center: {
    padding: theme.spacing(2),
    textAlign: 'center',
   
  },
}));

export default function SecuritySettingData() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        
        <Grid item xs={12} sm={5} className={classes.Center}>
        
       

        <ChangeMobile/>
        </Grid>
        <Grid item xs={12} sm={7} className={classes.Center}>
        <ChangePassword/>
        </Grid>
        </Grid>
       
    </div>
  );
}

