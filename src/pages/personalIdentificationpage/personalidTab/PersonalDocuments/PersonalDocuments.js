import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";
import clipboard from "../../../../assets/images/clipboard.png";
import DocumentModal from "./DocumentModal";
import PersonalDocumentsTable from "./PersonalDocumentsTable";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Center: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  // button: {

  // },
  addDocuments: {
    textAlign: "end",
    marginBottom: "30px",
  },
}));

export default function PersonalDocuments() {
  const classes = useStyles();
  return (
    <div >
      <Box>
        <Box className={classes.Center}>
          <img src={clipboard} alt="" />
        </Box>
        <Box>
          <Typography variant="h6" className={classes.Center}>
            Personal Document
          </Typography>
          <Typography variant="subtitle1" className={classes.Center}>
            Increase your transaction limits by verifying your personal
            identity.
          </Typography>
        </Box>
{/* Modal */}
        <Box className={classes.Center}>
          <Box className={classes.addDocuments}>
            <DocumentModal />
            {/* PersonalDocumentsTable  */}
          </Box>
          <PersonalDocumentsTable />
        </Box>
      </Box>
    </div>
  );
}
