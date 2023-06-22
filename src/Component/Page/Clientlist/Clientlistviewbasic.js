import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';

export default function NestedGrid() {
  const [labName, setLabName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [geoCoordinates, setGeoCoordinates] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [letterHead, setLetterHead] = useState(null);
  const [errors, setErrors] = useState({
    labName: false,
    address1: false,
    address2: false,
    contactNumber: false,
    geoCoordinates: false,
    pinCode: false,
    letterHead: false,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setLetterHead(file);
  };

  const handleFileRemove = () => {
    setLetterHead(null);
  };

  const handleSubmit = () => {
    const newErrors = {
      labName: labName === '',
      address1: address1 === '',
      address2: address2 === '',
      contactNumber: contactNumber === '',
      geoCoordinates: geoCoordinates === '',
      pinCode: pinCode === '',
      letterHead: !letterHead,
    };
    setErrors(newErrors);

    // Check if any errors exist
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      return; // Prevent form submission
    }

    // Proceed with form submission logic
    console.log('Form submitted successfully!');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
        <Grid container item spacing={5}>
          <Grid item xs={4}>
            <FormControl variant="standard" error={errors.labName}>
              <InputLabel htmlFor="labName">Lab Name</InputLabel>
              <Input
                id="labName"
                value={labName}
                onChange={(e) => setLabName(e.target.value)}
              />
              {errors.labName && <span className='errormessage'>Please enter a Lab Name.</span>}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="standard" error={errors.address1}>
              <InputLabel htmlFor="address1">Address 1</InputLabel>
              <Input
                id="address1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
              {errors.address1 && <span className='errormessage'>Please enter Address 1.</span>}
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="standard" error={errors.address2}>
              <InputLabel htmlFor="address2">Address 2</InputLabel>
              <Input
                id="address2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
              {errors.address2 && <span className='errormessage'>Please enter Address 2.</span>}
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={4}>
            <FormControl variant="standard" error={errors.contactNumber}>
              <InputLabel htmlFor="contactNumber">Contact Number</InputLabel>
              <Input
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
              {errors.contactNumber && <span className='errormessage'>Please enter a Contact Number.</span>}
            </FormControl>
          </Grid>
         
          <Grid item xs={4}>
            <FormControl variant="standard" error={errors.geoCoordinates}>
              <InputLabel htmlFor="geoCoordinates">Geo Coordinates</InputLabel>
              <Input
                id="geoCoordinates"
                value={geoCoordinates}
                onChange={(e) => setGeoCoordinates(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <LocationOnIcon />
                  </InputAdornment>
                }
              />
              {errors.geoCoordinates && <span className='errormessage'>Please enter Geo Coordinates.</span>}
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl variant="standard" error={errors.pinCode}>
              <InputLabel htmlFor="pinCode">Pin Code</InputLabel>
              <Input
                id="pinCode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
              {errors.pinCode && <span className='errormessage'>Please enter a Pin Code.</span>}
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={4}>
            <FormControl variant="standard" error={errors.letterHead}>
              <InputLabel htmlFor="letterHead">Letter Head</InputLabel>
              <Input
                id="letterHead"
                disabled
                value={letterHead ? letterHead.name : ''}
                endAdornment={
                  <>
                    {letterHead && (
                      <IconButton
                        aria-label="cancel"
                        onClick={handleFileRemove}
                        edge="end"
                      >
                        <CancelIcon />
                      </IconButton>
                    )}
                    <input
                      accept=".pdf,.doc,.docx"
                      style={{ display: 'none' }}
                      id="file-upload"
                      type="file"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="file-upload">
                      <IconButton
                        aria-label="upload"
                        component="span"
                        edge="end"
                      >
                        <CloudUploadIcon />
                      </IconButton>
                    </label>
                  </>
                }
              />
              {errors.letterHead && <span className='errormessage'>Please upload a Letter Head.</span>}
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ p: 3.5, pl: 60 }}>
        <Stack direction="row" spacing={5}>
          <Button variant="outlined">Cancel</Button>
          
        </Stack>
      </Box>
    </Box>
  );
}
