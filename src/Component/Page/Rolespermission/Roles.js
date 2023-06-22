import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Toolbar from '@mui/material/Toolbar';
import Basicpermission from './Basicpermission';
import Accesspermission from './Accesspermission';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Clientlistadd() {

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Box>
      <Typography sx={{ m: 4 }} className='Title'><h3>Roles And Permission</h3> </Typography>
      <Paper sx={{ width: '100%' }}>
        <TableContainer className="Content2">
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1,borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{bgcolor:"#effdfc"}}>
                  <Tab label="Basic Info" {...a11yProps(0)} />
                  <Tab label="Permission" {...a11yProps(1)} />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0} >
                <Basicpermission />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Accesspermission />
              </TabPanel>
            </Box>
        </TableContainer>
      </Paper>
    </Box>
  );
}
