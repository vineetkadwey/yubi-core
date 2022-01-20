import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import signIcon from "../../../../assets/images/sign icon.png";
import SignaturePad from "./SignaturePad";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:"10px 20px 0 20px",
    textAlign: "center",
  },
 
  sigHeading:{
    margin:"20px 0 0 0",
    fontFamily: "Roboto",
fontWeight: 500,
fontSize:" 25px",
lineHeight: "29px",

  },
  sigText:{
    margin:"20px 0 0 0",
    fontFamily: "Roboto",
    fontSize: "20px",
    lineHeight: "23px",

  },
  sigArea:{
      margin:"50px"

  }
}));

export default function Signature() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
<Box className={classes.Center}>
        <img src={signIcon} alt="" />
      </Box>
      <Box>
        <Typography variant="h6" className={classes.sigHeading}>
          Signature
        </Typography>
        <Typography variant="subtitle1" className={classes.sigText}>
          Write your electronic signature for signing all contracts on our
          platform. You agree your electronic signature is legally binding as
          serves the same as your handwritten signature.
        </Typography>
      </Box>
      <Box className={classes.sigArea}>
          <Box>
              <SignaturePad/>

          </Box>

      </Box>
    </div> 
      
   
  );
}
