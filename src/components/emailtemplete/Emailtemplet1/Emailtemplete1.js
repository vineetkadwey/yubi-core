import {
  Box,
  Divider,
  List,
  ListItem,
  Typography,
  Button,
  Toolbar,
} from "@mui/material";
import React from "react";
import logo from "../images/header-logo.png";
import business from "../images/business-3d-e-wallet 1.png";
import "./Emailtemplete1.scss";
import StopIcon from "@material-ui/icons/Stop";
import { Container } from "react-bootstrap";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Emailtemplete1() {
  return (
    <Box>
      <Box className="">
        <Box className="template template-logo">
          <img src={logo} alt="" />
        </Box>
        <div className="template " style={{ hight: "100px" }}>
          <Header />
        </div>

        <Box className="home-img">
          <Typography variant="h2" className="template-hading">
            Pharetra augue
          </Typography>
        </Box>

        <Box className="templat_list">
          <Container>
            <Typography variant="h4" className="template-hading2">
              Enim amet, ut cursus mauris iaculis vitae dignissim id, Vel odio
              ultrices risus
            </Typography>

            <List className="templat_list">
              <ListItem>
                <StopIcon style={{ fontSize: 10 }} />
                <Toolbar>
                  Elit diam vel nulla mattis. Leo quis felis sit in ultrices
                  elementum, at integer ultricies.
                </Toolbar>
              </ListItem>
              <ListItem>
                <StopIcon style={{ fontSize: 10 }} />
                <Toolbar>
                  Elit diam vel nulla mattis. Leo quis felis sit in ultrices
                  elementum, at integer ultricies.
                </Toolbar>
              </ListItem>
            </List>
          </Container>
        </Box>
        <hr />
        <Box>
          <Container>
            <Typography variant="h4" className="template-hading2">
              Enim amet, ut cursus mauris iaculis vitae dignissim id, Vel odio
              ultrices risus
            </Typography>
            <List className="templat_list">
              <ListItem>
                <StopIcon style={{ fontSize: 10 }} />
                <Toolbar>
                  Elit diam vel nulla mattis. Leo quis felis sit in ultrices
                  elementum, at integer ultricies.
                </Toolbar>
              </ListItem>
              <ListItem>
                {" "}
                <StopIcon style={{ fontSize: 10 }} />
                <Toolbar>
                  Elit diam vel nulla mattis. Leo quis felis sit in ultrices
                  elementum, at integer ultricies.
                </Toolbar>
              </ListItem>
              <ListItem>
                {" "}
                <StopIcon style={{ fontSize: 10 }} />
                <Toolbar>
                  Elit diam vel nulla mattis. Leo quis felis sit in ultrices
                  elementum, at integer ultricies.
                </Toolbar>
              </ListItem>
            </List>
            <div style={{ textAlign: "center", margin: "50px" }}>
              <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: "#07D4FA",
                  width: "296px",
                  height: "36px",
                  borderRadius: "0",
                  color: "black",
                }}
              >
                Lobortis phasellus
              </Button>
            </div>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
