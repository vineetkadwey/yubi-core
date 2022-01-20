import {
  Box,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import Group from "../../../assets/images/Group 126.png";
import file from "../../../assets/images/file-icon.png";
import location from "../../../assets/images/location-icon.png";
import account from "../../../assets/images/account-icon.png";
import PIdForm1 from "../pIdForms/PIdForm1";
import PIdForm2 from "../pIdForms/PIdForm2";
import PIdForm3 from "../pIdForms/PIdForm3";
import ToggleMaleFemale from "../pIdForms/ToggleMaleFemale";

export default function PersonalIdContent() {
  return (
    <Container maxWidth={"md"}>
      <Box>
        <Box className="icon center">
          <img src={Group} alt="" srcset="" />
          {/* There is already an h1 in the page, let's not duplicate it. */}
          <Typography variant="h5" className="form">Personal Identification</Typography>

          <Typography variant="subtitle1" style={{ paddingBottom:"20px"}} >
            For your security, we verify users of our platform. Only provide
            information verifiable on your government-issued identification.
          </Typography>
        </Box>
        <Box>
          <List>
            <ListItem>
              <img src={account} alt="" srcset="" />
              <Toolbar>
                <Typography variant="h6">Tell us about yourself.</Typography>
              </Toolbar>
            </ListItem>
          </List>
        </Box>
        <Box className="center  form">
          <Box>Gender</Box>
          <ToggleMaleFemale/>
        </Box>
        {/* Form section */}
        <Box className="form">
          <PIdForm1 />
        </Box>
        <Box>
          <List>
            <ListItem>
              <img src={location} alt="" srcset="" />
              <Toolbar>
                <Typography variant="h6">
                  What is your legal residence address.
                </Typography>
              </Toolbar>
            </ListItem>
          </List>
        </Box>
        {/* Form section */}
        <Box className="form">
          <PIdForm2 />
        </Box>
        <Box>
          <List>
            <ListItem>
              <img src={file} alt="" srcset="" />
              <Toolbar>
                <Typography variant="h6">
                  Upload your official government -issued identifiation.
                </Typography>
              </Toolbar>
            </ListItem>
          </List>
        </Box>
        {/* Form section */}
        <Box className="form">
          <PIdForm3 />
        </Box>

        <Box className="submitbtn center">
          <Button
            variant="outlined"
            size="small"
            style={{
              margin: "10px",
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
    </Container>
  );
}
