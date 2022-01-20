import React from 'react'
import logo2 from "../images/logo2.png";
import dianaimg from "../images/undraw_transfer_money_rywa 1.png";
import { Box, Container } from "@material-ui/core";
import Twitter from "../images/twitter 1.png";
import iglogo from "../images/iglogo 1.png";
import linkedin from "../images/linkedln logo 1.png";
import {Typography,Button,Link } from '@material-ui/core';
import './Emailtemplete2.scss'

export default function Emailtemplete2() {
  return (
    <Box>
         <Container maxWidth="" style={{ backgroundColor: "#EFEDED" }}>
      <Box className="Dina-logo">
        <img src={logo2} alt="" />
      
       
        <Typography   variant="h3" className='font'  >
        Hi <b> Diana</b>
          </Typography>
      
        <Typography className="Diana-footer" variant="h6" >
        Amet,eget nisl venenatis pretiums sed faucibus congue quam gravida
          </Typography>
      </Box>

      <Box className="Diana">
        <Box className="Diana-imgs">
          <img src={dianaimg} alt="" />
          <Typography  variant="h6" className='font'  >
   
            Ultricies proin aliquet nisl, scelerisque lorem vitae non, nulla
            lacus
            </Typography>
       
          <Box className="home-text">
            <Button variant="contained" size="large" style={{backgroundColor:"#07D4FA",width: '', maxHeight: '50px' ,borderRadius:'0'}} >Get Started</Button>
          </Box>
        </Box>
      </Box>
      <Box className="Diana">
        <Box className="diana-text">
        <Typography  variant="h4" className='font'  >
            Nam felis faucibus purus vel!
          </Typography>
        
          <Typography  className="diana-text font " variant="subtitle1" >
          Ultricies proin aliquet nisl, scelerisque lorem vitae non, nulla lacus. scelerisque lorem vitae non, nulla lacus.scelerisque lorem vitae non, nulla lacus.
            </Typography>
        
        </Box>
      </Box>

      <Box className="Diana-footers">
        <Box className="icon">
          <img src={iglogo} alt="" />
          <img src={linkedin} alt="" />
          <img src={Twitter} alt="" />
        </Box>

        <Typography className='Diana-footer font'  variant="h4" >
       YUBI
          </Typography>
        <Link href="" className='font' > Copyright@2022</Link>
        <Typography className='Diana-footer font' variant="h6" >
        2022 Best Innovation Of The Year
          </Typography>
          

     
      </Box>


    </Container>
      
    </Box>
  )
}
