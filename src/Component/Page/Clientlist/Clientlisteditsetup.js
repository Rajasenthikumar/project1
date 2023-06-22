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

const UploadTextField = () => {
  const [letterHead, setLetterHead] = useState(null);
  const [errors, setErrors] = useState({ letterHead: false });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setLetterHead(selectedFile);
    setErrors({ letterHead: false });
  };

  const handleFileRemove = () => {
    setLetterHead(null);
    setErrors({ letterHead: false });
  };

  const handleSubmit = () => {
    const newErrors = {
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
        {errors.letterHead && (
          <span className='errormessage'>Please upload a Letter Head.</span>
        )}
      </FormControl>
      <Box sx={{ p: 3.5, pl: 60 }}>
        <Stack direction="row" spacing={5}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
};

export default UploadTextField;
