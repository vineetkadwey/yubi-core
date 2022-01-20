import React from "react";
import "../Profileid.scss"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button, IconButton ,Box,Divider, FormControl, InputLabel, Input, FormHelperText} from "@material-ui/core";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

import Typography from "@material-ui/core/Typography";


import logo from "../../../assets/images/profile img.jpg";
import {  Link, TextField,RedditTextField, List, ListItem } from "@mui/material";


const useStyles = makeStyles({
  root: {
  
    textAlign: "center",
    marginTop:"64px",
    borderRadius:0,
    boxShadow: "1px 4px 10px rgb(0 0 0 / 25%)",
   
  
   
  },
//   root2:{
// padding:"10px"
//   },
cardText:{
  fontWeight:'500',
  fontSize:"25px",
  fontFamily: "Roboto",
  lineHeight: "29px",
  color:"black",
},
cardText2:{
  fontWeight:'500',
  fontSize:"18px",
  fontFamily: "Roboto",
  lineHeight: "40px",
  color:"black",
},
  
  
  cardtext2:{
    fontWeight:500,
    fontSize:"16px",
    lineHeight: "29px",
  },
  cardbtn:{
    borderRadius:0,

  },
  input: {
    display: 'none',
  },





});

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
        <Box className="media">
          
          <img src={logo} alt="" />

          <Box className="Camera">

          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
        <CameraAltOutlinedIcon
                style={{ color: "white" }}/>
        </IconButton>
        </label>
           
          </Box>
        </Box>

        <CardContent>

          <Typography gutterBottom variant="h5"className={classes.cardText}>
          Nathan Brooke
          </Typography>
          <Typography variant="body2"  className={classes.cardtext2}>
          Jakarta, Jakarta Raya ID 
          </Typography>
         </CardContent>
         <Divider/>
         <CardContent>
          
           <Button style={{borderRadius:"0" ,fontSize: "18px",margin:"10px 0 10px 0" }} variant="outlined">   View Business Profile</Button>
           <Box>
           <Typography variant="subtitle1" className={classes.cardText2}
   >
         
         Recieve money @ your public page
        </Typography>
           </Box>
         </CardContent>
{/* form */}

          <Box className="cardForm">
          <form >
          <lable className="linkInput" >
         
          
       
         <Link style={{color:""}}>https://yubi.io/</Link>
          <input type="text" />

     
        </lable>


          </form>
            
           
          </Box>
          
      <CardActions className="badge">
      <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#07D4FA",
             margin:"10px",
              borderRadius: "0",
              width: "115px",
height: "40px",
            }}
          >SUBMIT </Button>
   
      </CardActions>
    </Card>
  );
}
