import React from 'react'
import { Button } from '@material-ui/core'
import { Box, Toolbar } from '@mui/material'

export default function Header() {
  return (

<div>
  
  
  <Toolbar style={{ justifyContent:" space-around", color: "white"}}>
            <Button color="inherit" m={5}> DEPOSIT</Button>
            <Button color="inherit"> WITHDRAWAL</Button>
            <Button color="inherit"> TRANSFER</Button>
            <Button color="inherit"> ESCROW</Button>
            <Button color="inherit"> SEND MONEY</Button>
   
   
  </Toolbar>

</div>
    
  
  )
}
