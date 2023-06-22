import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';


const rows = [
  {
 
    id: 1,
    name: 'Hematology',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 2,
    name: 'red blood cell count',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 3,
    name: 'Hematocrit red blood cell volume',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 4,
    name: 'Hemoglobin Concentration',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 5,
    name: 'Differential',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 6,
    name: 'Platelet count',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 7,
    name: 'Hemotology',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  }, {
    id: 8,
    name: 'crematoria red blood',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  }, {
    id: 9,
    name: 'Red Blood cell Count',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
 
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const Addnew = () => {
    navigate("/Testmasteradd");
  };
  const View = () => {
    navigate("/Testmasterview");
  };
  const Edit = () => {
    navigate("/Testmasteredit");
  };

  return (
    <Box>
      <Typography sx={{ m: 4 }} className='Title'><h4>TEST MASTER</h4> </Typography>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer className="Content1">
          <Toolbar
            sx={{
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 },
            }}
          >
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Test Master Details
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant='outlined' endIcon={<FilterListIcon />}>
                Filter
              </Button>
              <Button variant="contained" endIcon={<AddIcon />} onClick={Addnew}>
                Add
              </Button>
            </Stack>
          </Toolbar>
          <Table stickyHeader aria-label="sticky table">
          <TableHead  >
                  <TableRow>
                    <TableCell sx={{ bgcolor: '#effdfc'}} className="equal-td">SNo</TableCell>
                    <TableCell sx={{  bgcolor: '#effdfc'}} className="equal-td">Test Name</TableCell>
                      <TableCell sx={{  bgcolor: '#effdfc'}} className="equal-td">Action</TableCell>

                  </TableRow>
                </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="Left">
                      <IconButton onClick={View}>
                      <VisibilityIcon />
                      </IconButton>
                      <IconButton onClick={Edit}>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
