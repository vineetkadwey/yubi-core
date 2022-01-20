import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import {Divider} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import "./Header2.scss"

import SearchIcon from '@material-ui/icons/Search';
import { height } from '@mui/system';
import DropDownMenu from './DropDownMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
   borderRadius: 0,
    // width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderRight:"1px solid black",
    padding:"0 0 8px",
    // textAlign:"center"
    

  },
  iconButton: {
    padding: 0,
    color:"#000000"
  
  },
  divider: {
    height: 30,
    margin: 4,
   
  },
}));

export default function SearchBar() {
  const classes = useStyles();


  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
      <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Beneficiary by..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <DropDownMenu/>
      </Paper>
  );
}
