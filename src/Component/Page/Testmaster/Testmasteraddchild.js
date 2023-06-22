/*import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid container item spacing={3}>
          <React.Fragment>
            <Grid item xs={2.5}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Test</InputLabel>
                <Input id="component-simple" defaultValue="Hemoglobin" />
              </FormControl>
            </Grid>
            <Grid item xs={2.5}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Value</InputLabel>
                <Input id="component-simple" defaultValue="L 12.1" />
              </FormControl>
            </Grid>
            <Grid item xs={2.5}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Unit</InputLabel>
                <Input id="component-simple" defaultValue="g/ld" />
              </FormControl>
            </Grid>
            <Grid item xs={2.5}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Reference</InputLabel>
                <Input id="component-simple" defaultValue="13-17" />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
            
                      <IconButton >
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteOutlineIcon />
                      </IconButton>
              </Grid>
          </React.Fragment>
        </Grid>

        <Grid container item spacing={3}>
        <React.Fragment>
            <Grid item xs={2.5}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Test</InputLabel>
                <Input id="component-simple" defaultValue="Total Leukocyte Count" />
              </FormControl>
            </Grid>
            <Grid item xs={2.5}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Value</InputLabel>
                <Input id="component-simple" defaultValue="4,500" />
              </FormControl>
            </Grid>
            <Grid item xs={2.5}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Unit</InputLabel>
                <Input id="component-simple" defaultValue="cumm" />
              </FormControl>
            </Grid>
            <Grid item xs={2.5}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Reference</InputLabel>
                <Input id="component-simple" defaultValue="4,000-11,000" />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
            
                      <IconButton >
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteOutlineIcon />
                      </IconButton>
              </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    </Box>
  );
}
*/
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

function Testmasteraddadult({ tests }) {
  return (
    <div>
      <h2>Printed Test Data 2</h2>
      {tests && tests.length > 0 ? (
        tests.map((test, index) => (
          <div key={index}>
            <FormControl variant="standard">
              <InputLabel htmlFor={`component-test-${index}`}>Test</InputLabel>
              <Input id={`component-test-${index}`} value={test.test} disabled />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor={`component-value-${index}`}>Value</InputLabel>
              <Input id={`component-value-${index}`} value={test.value} disabled />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor={`component-unit-${index}`}>Unit</InputLabel>
              <Input id={`component-unit-${index}`} value={test.unit} disabled />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor={`component-reference-${index}`}>Reference</InputLabel>
              <Input id={`component-reference-${index}`} value={test.reference} disabled />
            </FormControl>
            
            <hr />
          </div>
        ))
      ) : (
        <p>No tests available.</p>
      )}
    </div>
  );
}

export default Testmasteraddadult;
