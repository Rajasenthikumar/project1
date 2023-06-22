import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGrid() {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [descriptionError, setDescriptionError] = React.useState('');

  const handleSubmit = () => {
    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }

    if (!description) {
      setDescriptionError('Description is required');
    } else {
      setDescriptionError('');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <React.Fragment>
            <Grid item xs={4}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input
                  id="component-simple"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <FormHelperText error>{nameError}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Description</InputLabel>
                <Input
                  id="component-simple"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {descriptionError && (
                  <FormHelperText error>{descriptionError}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4}>
             
            </Grid>
          </React.Fragment>
        </Grid>
        <Box sx={{ p: 3.5,pt:30, pl: 60 }}>
        <Stack direction="row" spacing={5}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="outlined" onClick={handleSubmit}>
            Save & next
          </Button>
        </Stack>
      </Box>
      </Grid>
    </Box>
  );
}
