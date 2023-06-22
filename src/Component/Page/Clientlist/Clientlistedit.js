import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Toolbar from '@mui/material/Toolbar';
import Clientlisteditbasic from './Clientlisteditbasic';
import Clientlisteditsetup from './Clientlisteditsetup'
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

export default function Clientlistadd () {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
        <Box> 
    <Typography sx={{ m:4 }} className='Title'> Client List Edit  </Typography>
    <Paper sx={{ width: '100%' }}>
      <TableContainer className="Content2">
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...({
              bgcolor: 'white'

            }),
          }}
        >
<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Basic Details" {...a11yProps(0)}  />
          <Tab label="Set up" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0} >
      <Clientlisteditbasic/> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Clientlisteditsetup/>
      </TabPanel>
    </Box>
        </Toolbar>
      </TableContainer>
    </Paper>
    </Box>
  );
}
