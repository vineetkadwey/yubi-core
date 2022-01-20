import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import ModalDragAndDrop from "./DocumentModalForm/ModalDragAndDrop";
import DragAndDrop from "./DocumentModalForm/DropzoneAreaExample";
import FileUpload from "./DocumentModalForm/DragAndDropJs/FileUpload";
import DropzoneAreaExample from "./DocumentModalForm/DropzoneAreaExample";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    background: "#EFEDED;",
    border: "1px solid #6A6A6A",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // boxSizing: "borderbox",
  },
  documentHead: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "25px",
    lineHeight: "29px",
    display: " flex",
    alignItems: "center",
margin:"20px 0px  20px 10px" ,
    color: "#6A6A6A",
  },
}));

export default function DocumentModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={handleOpen}
      >
        Add Doucument
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* There is already an h1 in the page, let's not duplicate it. */}
            <Typography variant="h4" className={classes.documentHead}>
              NEW DOCUMENT UPLOAD
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={7}>
                {/* <Paper className={classes.paper}>xs=12 sm=8hyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Paper> */}
                <ModalDragAndDrop />
              </Grid>
              <Grid item xs={12} sm={5}>
                <FileUpload />
                {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
