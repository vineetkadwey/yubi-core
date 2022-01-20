import React from "react";
import "./Fotter.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Divider, Typography, Link, Box } from "@material-ui/core";

function Footer() {
  return (
    <Box className="footer">
      <Divider />

      <Box className="copyright">
        <Typography variant="body1" className=".footer" >Copyright@2021</Typography>
      </Box>


      <Box class="footer-menus">
          <ul class="f-menus">
            <li>
              <Link class="active" href="#home">
              yubi.help.gmail.com
              </Link>
            </li>|
            <li>
              <Link href="#contact">+13438432443</Link>
            </li>|
            <li>
              <Link href="#about">Unsubscribe</Link>
            </li>
           
          </ul>
        </Box>

   
      <Box className="media-icons">
        <Link href="">
        <FacebookIcon   />
        </Link>
        <Link href="">
        <InstagramIcon />
        </Link>
        <Link href="">
        <LinkedInIcon />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
