
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Testmasteraddadult from '../Page/Testmaster/Testmasteraddadult';
function TestHeader({ testHeader, handleHeaderTextChange, isHeaderTextEditable, handleEditHeader, handleSaveHeader }) {
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <FormControl variant="standard" sx={{ width: '100%' }}>
          <Input
            id="component-simple"
            value={testHeader}
            disabled={!isHeaderTextEditable}
            onChange={handleHeaderTextChange}
          />
        </FormControl>
      </Grid>
      <Grid item>
        {!isHeaderTextEditable && !testHeader ? (
          <IconButton onClick={handleEditHeader}>
            <EditIcon />
          </IconButton>
        ) : null}
      </Grid>
    </Grid>
  );
}


export default function AlertDialog({ isDialogOpened, handleCloseDialog }) {
  const [tests, setTests] = useState([]);
  const [testFields, setTestFields] = useState({
    test: '',
    value: '',
    unit: '',
    reference: '',
    deleteIcon: <DeleteOutlineIcon />,
  });
  const [isPrintClicked, setIsPrintClicked] = useState(false);
  const [headerText, setHeaderText] = useState('');
  const [isHeaderTextEditable, setIsHeaderTextEditable] = useState(false);

  const handleClose = () => {
    handleCloseDialog(false);
  };

  const handleAddTest = () => {
    const newTest = { ...testFields };
    setTests(tests.concat(newTest));
    setTestFields({
      test: '',
      value: '',
      unit: '',
      reference: '',
      deleteIcon: <DeleteOutlineIcon />,
    });
  };

  const handleDeleteTest = (index) => {
    const updatedTests = [...tests];
    updatedTests.splice(index, 1);
    setTests(updatedTests);
  };

  const handlePrint = () => {
    setIsPrintClicked(true);
    handleClose();
  };

  const handleHeaderTextChange = (e) => {
    setHeaderText(e.target.value);
  };

  const handleEditHeader = () => {
    setIsHeaderTextEditable(true);
  };

  const handleSaveHeader = () => {
    setIsHeaderTextEditable(false);
  };

  return (
    <div>
      <Dialog
        open={isDialogOpened}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        width="100%"
      >
        <DialogTitle id="alert-dialog-title" >
          <Grid sx={{ borderBottom: 1, borderColor: 'divider', Width: '100%', pb:2}}>
            {"New Test Title"}
          </Grid>
          
          <TestHeader
          sx={{mt:1}}
            testHeader={headerText}
            handleHeaderTextChange={handleHeaderTextChange}
            isHeaderTextEditable={isHeaderTextEditable}
            handleEditHeader={handleEditHeader}
            handleSaveHeader={handleSaveHeader}
          />
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {tests.map((test, index) => (
              <Grid container item spacing={3} key={index} sx={{ pt: 3 }}>
                <Grid item xs={2.5}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor={`component-test-${index}`}>Test</InputLabel>
                    <Input id={`component-test-${index}`} value={test.test} disabled />
                  </FormControl>
                </Grid>
                <Grid item xs={2.5}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor={`component-value-${index}`}>Value</InputLabel>
                    <Input id={`component-value-${index}`} value={test.value} disabled />
                  </FormControl>
                </Grid>
                <Grid item xs={2.5}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor={`component-unit-${index}`}>Unit</InputLabel>
                    <Input id={`component-unit-${index}`} value={test.unit} disabled />
                  </FormControl>
                </Grid>
                <Grid item xs={2.5}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor={`component-reference-${index}`}>Reference</InputLabel>
                    <Input id={`component-reference-${index}`} value={test.reference} disabled />
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <IconButton onClick={() => handleDeleteTest(index)}>
                    {test.deleteIcon}
                  </IconButton>
                </Grid>
              </Grid>
            ))}

            <Grid container item spacing={3} sx={{ pt: 3 }}>
              <Grid item xs={2.5}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-test">Test</InputLabel>
                  <Input
                    id="component-test"
                    value={testFields.test}
                    onChange={(e) => setTestFields({ ...testFields, test: e.target.value })}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2.5}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-value">Value</InputLabel>
                  <Input
                    id="component-value"
                    value={testFields.value}
                    onChange={(e) => setTestFields({ ...testFields, value: e.target.value })}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2.5}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-unit">Unit</InputLabel>
                  <Input
                    id="component-unit"
                    value={testFields.unit}
                    onChange={(e) => setTestFields({ ...testFields, unit: e.target.value })}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2.5}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-reference">Reference</InputLabel>
                  <Input
                    id="component-reference"
                    value={testFields.reference}
                    onChange={(e) => setTestFields({ ...testFields, reference: e.target.value })}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={handleAddTest}>
                  <AddCircleIcon />
                </IconButton>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePrint} autoFocus>
            Print
          </Button>
        </DialogActions>
      </Dialog>
      {isPrintClicked && (
        <div>
          <Testmasteraddadult headerText={headerText} tests={tests} />
        </div>
      )}
    </div>
  );
}
