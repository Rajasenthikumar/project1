import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import ConfirmationPopup from '../../Popup/Deleteconformtestmaster';
import { Grid, Button } from '@mui/material';

function Testmasteraddadult({ tests, headerText, onSubmit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editedTests, setEditedTests] = useState([]);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [stateTests, setTests] = useState(tests);
  const [showHeader, setShowHeader] = useState(true);

  const handleEdit = (index) => {
    if (editIndex === index) {
      setEditIndex(null);
    } else {
      setEditIndex(index);
    }
  };

  const handleInputChange = (event, index, field) => {
    const { value } = event.target;
    const updatedTests = [...stateTests];
    updatedTests[index][field] = value;
    setTests(updatedTests);

    if (value === '') {
      setEditIndex(null);
    } else if (field === 'test' && (value.length > 1 || editIndex === index)) {
      setEditIndex(index);
    }

    const editedTest = { ...editedTests[index] };
    editedTest[field] = value;
    const newEditedTests = [...editedTests];
    newEditedTests[index] = editedTest;
    setEditedTests(newEditedTests);
  };

  const handleKeyDown = (event, index, field) => {
    if (event.key === 'Backspace') {
      event.preventDefault();
      const updatedTests = [...stateTests];
      updatedTests[index][field] = '';
      setTests(updatedTests);
      const inputElement = document.getElementById(`component-${field}-${index}`);
      inputElement.value = '';
    }
  };

  const handleSave = () => {
    const updatedTests = [...stateTests];
    editedTests.forEach((editedTest, index) => {
      updatedTests[index] = { ...updatedTests[index], ...editedTest };
    });
    setTests(updatedTests);
    setEditedTests([]);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditedTests([]);
    setEditIndex(null);
  };

  const handleDeleteTest = (index) => {
    setDeleteIndex(index);
    setDeleteConfirmationOpen(true);
  };

  const handleConfirmDelete = (index) => {
    const updatedTests = [...stateTests];
    updatedTests.splice(index, 1);
    setTests(updatedTests);

    const editedTestsCopy = [...editedTests];
    editedTestsCopy.splice(index, 1);
    setEditedTests(editedTestsCopy);

    if (editIndex === index) {
      setEditIndex(null);
    } else if (editIndex > index) {
      setEditIndex(editIndex - 1);
    }

    // Check if the deleted test field exists and became empty
    const deletedTestField = updatedTests[index];
    const isDeletedTestFieldEmpty = deletedTestField && deletedTestField.test === '';
    if (isDeletedTestFieldEmpty) {
      setShowHeader(false); // Hide the header if the deleted test field became empty
    }

    // Check if there are no test fields left
    const noTestFieldsLeft = updatedTests.length === 0;
    if (noTestFieldsLeft) {
      setTests([]); // Reset the stateTests to an empty array
      setEditedTests([]); // Reset the editedTests to an empty array
      setEditIndex(null); // Reset the editIndex
      setShowHeader(false); // Hide the header if no test fields are left
    }

    // Check if the last text field is being deleted
    const isLastTextField = stateTests.length === 1;
    if (isLastTextField) {
      setShowHeader(false);
    }
    setDeleteConfirmationOpen(false);
  };

  useEffect(() => {
    setTests(tests);
  }, [tests]);

  useEffect(() => {
    setShowHeader(true); // Show the header when the prop is updated
  }, [headerText]);

  const handleSubmit = () => {
    const submittedHeaderText = headerText; // Modify this line as needed
    onSubmit(submittedHeaderText);
  };

  return (

    <div>
      {Array.isArray(tests) && tests.length > 0 && showHeader && (
        <h4
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            backgroundColor: '#F5F5F5',
            padding: '10px',
            width: '100%',
          }}
        >
          {headerText}
        </h4>
      )}

      {Array.isArray(tests) && tests.length > 0 && (
        <Grid>
          <Grid container spacing={2}>
            {stateTests.map((test, index) => {
              const isEditing = editIndex === index;
              const editedTest = editedTests[index];
              const displayTest = isEditing && editedTest ? editedTest.test : test.test;
              const displayValue = isEditing && editedTest ? editedTest.value : test.value;
              const displayUnit = isEditing && editedTest ? editedTest.unit : test.unit;
              const displayReference = isEditing && editedTest ? editedTest.reference : test.reference;

              return (
                <React.Fragment key={index}>
                  <Grid item xs={2.5}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor={`component-test-${index}`}>Test</InputLabel>
                      <Input
                        id={`component-test-${index}`}
                        value={displayTest}
                        onChange={(event) => handleInputChange(event, index, 'test')}
                        onKeyDown={(event) => handleKeyDown(event, index, 'test')}
                        disabled={!isEditing}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={2.5}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor={`component-value-${index}`}>Value</InputLabel>
                      <Input
                        id={`component-value-${index}`}
                        value={displayValue}
                        onChange={(event) => handleInputChange(event, index, 'value')}
                        onKeyDown={(event) => handleKeyDown(event, index, 'value')}
                        disabled={!isEditing}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={2.5}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor={`component-unit-${index}`}>Unit</InputLabel>
                      <Input
                        id={`component-unit-${index}`}
                        value={displayUnit}
                        onChange={(event) => handleInputChange(event, index, 'unit')}
                        onKeyDown={(event) => handleKeyDown(event, index, 'unit')}
                        disabled={!isEditing}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={2.5}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor={`component-reference-${index}`}>Reference</InputLabel>
                      <Input
                        id={`component-reference-${index}`}
                        value={displayReference}
                        onChange={(event) => handleInputChange(event, index, 'reference')}
                        onKeyDown={(event) => handleKeyDown(event, index, 'reference')}
                        disabled={!isEditing}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={1}>
                    {isEditing ? (
                      <IconButton color="primary" onClick={() => handleSave()} size="small">
                        <SaveIcon />
                      </IconButton>
                    ) : (
                      <IconButton color="primary" onClick={() => handleEdit(index)} size="small">
                        <EditIcon />
                      </IconButton>
                    )}
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton color="error" onClick={() => handleDeleteTest(index)} size="small">
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
            <Grid container spacing={2} justifyContent="center" sx={{p:3}}>
              <Grid item>
                <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                  Submit
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" size="large" onClick={handleCancel}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
        </Grid>

      )}

      {deleteConfirmationOpen && (
        <ConfirmationPopup
          open={deleteConfirmationOpen}
          onClose={() => setDeleteConfirmationOpen(false)}
          onConfirm={() => handleConfirmDelete(deleteIndex)}
        />
      )}

    </div>


  );
}

export default Testmasteraddadult;
