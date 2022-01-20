import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import Divider from '@material-ui/core/Divider';
import { Box } from '@material-ui/core';
import vector from "../../../../../assets/images/Vector 18.png"


const useStyles = makeStyles((theme) => ({
 
  dividers:{
  //  height:"30px"
     }
}));

export default function Dividers() {
  const classes = useStyles();

  return (
  <Box className={classes.dividers} >
    <img src={vector} alt="" />
  </Box>
      
      
  );
}