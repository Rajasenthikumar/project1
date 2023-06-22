import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Clientlistadd = () => {
  const [value, setValue] = useState(0);

  const [testName, setTestName] = useState('');
  const [testNameError, setTestNameError] = useState('');

  const [testRange, setTestRange] = useState('');
  const [testRangeError, setTestRangeError] = useState('');

  const [testResult, setTestResult] = useState('');
  const [testResultError, setTestResultError] = useState('');

  const [tips, setTips] = useState('Tips\n*\n*\n*\n*\n*\n*');

  const currencies = [
    {
      value: '',
      label: '',
    },
    {
      value: 'Normal',
      label: 'Normal',
    },
    {
      value: 'Medium',
      label: 'Medium',
    },
    {
      value: 'Low',
      label: 'Low',
    },
    {
      value: 'High',
      label: 'High',
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    let isValid = true;

    if (testName === '') {
      setTestNameError('Test Name is required');
      isValid = false;
    } else {
      setTestNameError('');
    }

    if (testRange === '') {
      setTestRangeError('Test Range is required');
      isValid = false;
    } else {
      setTestRangeError('');
    }

    if (testResult === '') {
      setTestResultError('Test Result is required');
      isValid = false;
    } else {
      setTestResultError('');
    }

    if (testResult === '' && document.activeElement?.id === 'component-simple') {
      setTestResultError('Test Result is required');
      isValid = false;
    }

    if (isValid) {
      // Perform submit logic
    }
  };

  return (
    <Box>
      <Typography sx={{ m: 4 }} className="Title">
        {' '}
       Test tips Add{' '}
      </Typography>
      <Paper sx={{ width: '100%' }}>
        <TableContainer className="Content2">
          <Box sx={{ width: '100%' }}>
            <Toolbar sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
              <Grid>
                <Typography variant="h6" id="tableTitle" component="div">
                  Add Details
                </Typography>
              </Grid>
            </Toolbar>
            <Grid>
              <Box sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={4}>
                  <Grid container item spacing={5}>
                    <React.Fragment>
                      <Grid item xs={4}>
                        <FormControl variant="standard" sx={{ width: '300px' }}>
                          <InputLabel htmlFor="component-simple">Test Name</InputLabel>
                          <Input id="component-simple" value={testName} onChange={(e) => setTestName(e.target.value)} />
                          {testNameError && <FormHelperText error>{testNameError}</FormHelperText>}
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <FormControl variant="standard" sx={{ width: '300px' }}>
                          <InputLabel htmlFor="component-simple">Test Range</InputLabel>
                          <Input id="component-simple" value={testRange} onChange={(e) => setTestRange(e.target.value)} />
                          {testRangeError && <FormHelperText error>{testRangeError}</FormHelperText>}
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="standard-select-currency-native"
                          select
                          label="Test Result"
                          value={testResult}
                          onChange={(e) => setTestResult(e.target.value)}
                          inputProps={{
                            style: { width: '300px' },
                          }}
                          SelectProps={{
                            native: true,
                          }}
                          variant="standard"
                        >
                          {testResultError && <FormHelperText error>{testResultError}</FormHelperText>}
                          {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                    </React.Fragment>
                  </Grid>
                  <Grid container item spacing={3} sx={{ pl: 3 }}>
                    <TextField
                      sx={{ flexGrow: 1, p: 3 }}
                      multiline
                      rows={6}
                      value={tips}
                      onChange={(e) => setTips(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Box sx={{ p: 3.5, pl: 60 }}>
        <Stack direction="row" spacing={5}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
          </Stack>
          </Box>
          </Box>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Clientlistadd;
