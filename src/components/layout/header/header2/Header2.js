import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    Box,
    Divider,
  } from "@material-ui/core";
  import React from "react";
  import logo from "../../../../assets/images/logoYubi 1.png";
import Apps from "./Profile&Apps/Apps";
import Dividers from "./Profile&Apps/Dividers";
import Profile from "./Profile&Apps/Profile";
import SearchBar from "./SearchBar";
//   import { Link as RouterLink } from "react-router-dom";
  
  const headersData = [
    {
      label: "DEPOSIT ",
    //   href: "/listings",
    },
    {
      label: "WITHDRAWAL",
    //   href: "/mentors",
    },
    {
      label: "TRANSFER",
    //   href: "/account",
    },
    {
      label: "ESCROW",
    //   href: "/logout",
    },
    {
      label: "SEND MONEY",
    //   href: "/SENDMONEY",
    },
  ];
                       
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#1C2038",
    },
    logos: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
        fontFamily: "Roboto",
        // fontWeight: 700,
        // size: "18px",
        // marginLeft: "38px",
     },
     toolbar: {
        display: "flex",
        justifyContent: "space-between",
      //  padding:"20px 20px "
      },
  }));
                       
  export default function Header2() {
    const { header, logos,menuButton,toolbar } = useStyles();
                       
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <SearchBar/>


          {getMenuButtons()}
          <Profile/>
          <Dividers/>
          <Apps/>
        </Toolbar>
      );
    };
                       
    const femmecubatorLogo = (
  

        <Box>
        <img src={logo} />
        </Box>
    );
                       
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              className: menuButton
            //   to: href,
            //   component: RouterLink,
            }}
          >
            {label}
          </Button>
        );
      });
    };
                       
    return (
      <header>
        <AppBar className={header}>{displayDesktop()}
        
        </AppBar>
      </header>
    );
  }