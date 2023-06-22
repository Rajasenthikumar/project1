
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AlertDialog from '../../Popup/Createnewtesttitle';
import Testmasteraddadult from './Testmasteraddadult';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Toolbar from '@mui/material/Toolbar';
import Testmasteraddchild from './Testmasteraddchild'
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const [tests, setTests] = useState([]);
const handleOpenDialog = () => {
    setIsDialogOpened(true);
  };

  const handleCloseDialog = (newTests) => {
    setIsDialogOpened(false);
    if (newTests) {
      setTests(newTests);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
<Typography sx={{ m: 4 }} className='Title'> Testmaster Add </Typography>
      <Paper sx={{ width: '100%' }}>
        <TableContainer className="Content2">
          <Box sx={{ width: '100%' ,borderBottom: 1, borderColor: 'divider'}}>
            <Toolbar direction="row" position="absolute" display="flex" alignItems="center" textAlign="right">
              <Grid>
                <Typography
                  variant="h6"
                  id="tableTitle"
                  component="div"
                >
                  Haematology Complete Blood Count(CBC) Details
                </Typography>
              </Grid>
              <Grid>
                <Box sx={{ pl: 65 }} display="flex" alignItems="center">

                  <AddCircleIcon  onClick={handleOpenDialog} />
                  <Typography variant="p">Create New Test Title </Typography>
                </Box>
              </Grid>
            </Toolbar>
            </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Adult" {...a11yProps(0)} />
                <Tab label="Child" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
      <AlertDialog isDialogOpened={isDialogOpened} handleCloseDialog={handleCloseDialog} setTests={setTests} />
      <Testmasteraddadult tests={tests} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    
    </TableContainer>
    </Paper>
    </Box>


  );
}
