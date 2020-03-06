import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link, withRouter } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

function _AppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={props.history.location.pathname}
          aria-label="navigation tabs"
          fullWidth
          centered
        >
          <Tab
            label="patients"
            {...a11yProps(0)}
            to="/patients"
            component={Link}
            value={'/patients'}
          />
          <Tab
            label="chat"
            {...a11yProps(1)}
            to="/chat"
            component={Link}
            value={'/chat'}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default withRouter(_AppBar);
