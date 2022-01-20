import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import PersonalIdContent from '../personalIdContent/PersonalIdContent';
import SecuritySettingData from './SecuritySettingData';
import PersonalDocuments from './PersonalDocuments/PersonalDocuments';
import Signature from './Signature/Signature';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
      boxShadow: "1px 4px 10px rgb(0 0 0 / 25%)",
  },
  bgColors:{
    backgroundColor:"white",
    color:"black",
    marginTop:"73px",

  },
}));

export default function PersonalTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper  className={classes.bgColors}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Personal Identification" {...a11yProps(0)} />
          <Tab label="Security & Setting" {...a11yProps(1)} />
          <Tab label="Personal Documents" {...a11yProps(2)} />
          <Tab label="Signature" {...a11yProps(3)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
      <PersonalIdContent/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SecuritySettingData/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <PersonalDocuments/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Signature/>
      </TabPanel>
    </div>
  );
}
