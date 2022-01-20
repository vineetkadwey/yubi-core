import { Box, makeStyles, Typography, Button } from "@material-ui/core";

import React from "react";
import lock from "../../../../assets/images/lock.png";

import PasswordForm from "./SecurityForm/PasswordForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"0 10% 0 20%"
  },
  Center: {
    padding: theme.spacing(2),
  
   
  },
  MobileForm:{
      textAlign:"start",
    margin:"30px 30px 30px 30px"

  }
}));

export default function ChangePassword() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <Box className={classes.Center}>
          <img src={lock} alt="" />
        </Box>
        <Box>
          <Typography variant="h6" className={classes.Center}>
          Change Password
          </Typography>
        </Box>
        <Box className={classes.MobileForm} >
        <PasswordForm/>
        </Box>

        <Box className={classes.center}>
          <Button
            variant="outlined"
            size="small"
            style={{
              //   margin: "10px",
              borderRadius: "0",
              width: "115px",
              height: "40px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#07D4FA",
              margin: "10px",
              borderRadius: "0",
              width: "115px",
              height: "40px",
            }}
          >
            Submit{" "}
          </Button>
        </Box>
      </Box>
    </div>
  );
}
