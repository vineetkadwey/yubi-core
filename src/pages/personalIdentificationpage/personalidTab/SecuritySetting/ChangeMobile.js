import { Box, makeStyles, Typography, Button } from "@material-ui/core";

import React from "react";
import phone from "../../../../assets/images/phone.png";
import MobileForm from "./SecurityForm/MobileForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Center: {
    padding: theme.spacing(2),
  
   
  },
  MobileForm:{
      textAlign:"start",
      margin:"30px 0 30px 0"

  }
}));

export default function ChangeMobile() {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <Box className={classes.Center}>
          <img src={phone} alt="" />
        </Box>
        <Box>
          <Typography variant="h6" className={classes.Center}>
            Change Mobile Phone
          </Typography>
        </Box>
        <Box className={classes.MobileForm} >
          <MobileForm />
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
