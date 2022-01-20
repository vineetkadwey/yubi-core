import React, {useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SignatureCanvas from "react-signature-canvas";
import { Box, Button } from '@material-ui/core';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button:{
    padding:"20px",
  },
  signCanvas:{
    border: '1px solid purple',

  }

}));

export default function SignaturePad() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [imageURL,setImageURL]=useState(null)

  const signCanvas= useRef({})

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClear = () => signCanvas.current.clear()
    
const handleSave =()=>
setImageURL(signCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
console.log(setImageURL);

  return (
    <div>
    

      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<BorderColorOutlinedIcon />}
        onClick={handleOpen}
      >
       Open Signature Pad
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1,
        }}
      >
        <Fade in={open} >
          <div className={classes.paper}>
          <h1>Signature Text Area</h1>
      <SignatureCanvas
      ref={signCanvas}
      
        penColor="Green"
        className={classes.signCanvas}
      />
      <Box>
      <Button   variant="contained"
        color="secondary" onClick={handleClose} >close</Button>
      <Button variant="contained" color="primary" onClick={handleClear} >Clear</Button>
      <Button   variant="contained"
        color="default" onClick={handleSave} >save</Button>

      </Box>
  
     
          </div>
        </Fade>
       


      </Modal>

      {/* <br />
        <br />
        { imageURL?(
            <img 
            src={imageURL}
             alt="my-signature"
             style={{
               display:"block",
               margin:"0,auto",
              width:"200px"}
             }
              />
           


          ):null
        } */}
    </div>
  );
}
