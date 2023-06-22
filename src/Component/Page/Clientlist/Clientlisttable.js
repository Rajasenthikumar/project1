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
    name: 'Michele',
    address: '40 Airport Court Wallingford, CT 06492',
    ratings: '5 start',
    status: 'Active',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 2,
    name: 'Amaya',
    address: '8408 Sutor AvenueMinneapolis,MN 55406',
    ratings: '4 start',
    status: 'Approved',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 3,
    name: 'Johnwick144',
    address: 'Wild Horse Ave Battle Creek, MI 49015',
    ratings: '3 start',
    status: 'Deactivates',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 4,
    name: 'Flemings',
    address: '985 Mayfair St.Morgantown, WV 26508',
    ratings: '2 start',
    status: 'Pending',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 5,
    name: 'Atlas',
    address: '681 S. Arrowhead StreetFair Lawn, NJ 07410',
    ratings: '5 start',
    status: 'Approved',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 6,
    name: 'Michelle',
    address: '9550 Pilgrim St Stockbridge, GA 30281',
    ratings: '5 start',
    status: 'Approved',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  },
  {
    id: 7,
    name: 'Amaya',
    address: '635 S. Summit Rd Canyon Country, CA 91387',
    ratings: '3 start',
    status:'Deactivate',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  }, {
    id: 8,
    name: 'Johnwick',
    address: '39 W. Parker St Medina, OH 44256',
    ratings: '3 start',
    status: 'Active',
    view: VisibilityIcon,
    edit: EditIcon,
    delete: DeleteOutlineIcon,
  }, {
    id: 9,
    name: 'Flemings',
    address: '982 Queen Street Johnston, RI 0291',
    ratings: '9 start',
    status: 'Active',
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
    navigate("/Clientlistadd");
  };
  const View = () => {
    navigate("/Clientlistview");
  };
  const Edit = () => {
    navigate("/Clientlistedit");
  };

  return (
    <Box>
      <Typography sx={{ m: 4 }} className='Title'> Client List </Typography>

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
              Client List Details
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
                    <TableCell sx={{ bgcolor: '#effdfc'}} className="first-td">SNo</TableCell>
                    <TableCell sx={{  bgcolor: '#effdfc'}} className="sec-td">Name</TableCell>
                    <TableCell sx={{  bgcolor: '#effdfc'}}className="three-td">Location</TableCell>
                    <TableCell sx={{  bgcolor: '#effdfc'}}className="four-td">Rating </TableCell>
                    <TableCell sx={{  bgcolor: '#effdfc'}}className="five-td">States </TableCell>
                    <TableCell sx={{  bgcolor: '#effdfc'}} className="Five-td">Action</TableCell>

                  </TableRow>
                </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="left">{row.ratings}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
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
