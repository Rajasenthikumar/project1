import React, { Component, useEffect } from "react";
import Box from '@mui/material/Box';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import addicon from "../../../Assest/Layer_1 (1).png";
import adminedit from "../../../Assest/Layer_1 (1).png";
import admindelete from "../../../Assest/Layer_1 (1).png";
import adminview from"../../../Assest/Layer_1 (1).png";
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import TablePagination from '@mui/material/TablePagination';
import Tooltip from '@mui/material/Tooltip';
import { toast } from "react-toastify";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const Role = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [deletdone, setDeletdone] = useState(false);
  const [message, setMessage] = useState('');
  const [roleUser, setRoleUser] = useState('');

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleFilter = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSwitchToggle = (checked, id) => {
    // Handle switch toggle logic
  };

  const handleDeleteRole = (id) => {
    // Handle delete role logic
  };

  const newdeal = () => {
    // Handle new deal logic
  };

  const viewrole = (id) => {
    // Handle view role logic
  };

  const editrole = (id) => {
    // Handle edit role logic
  };

  const rollinfo = []; // Replace with the actual array of role information
  const roleName = ''; // Replace with the actual role name
  const permissions = {}; // Replace with the actual permissions object

  return (
    <>
      <div>
        <Grid container spacing={2} className="welcome-user">
          <Grid item xl={5} lg={5} md={6} sm={12} xs={12} className="userfield">
            <Typography variant="p" component="p" className="username">
              Roles and Permissions
            </Typography>
          </Grid>
          <Grid item xl={7} lg={7} md={6} sm={12} xs={12}>
            <Grid container spacing={2} className="add-btn" style={{ justifyContent: 'flex-end' }}>
              <Grid item xl={4} lg={4} md={6} sm={4} xs={12}>
                <Input
                  className="search-input"
                  placeholder="Search"
                  onChange={handleSearch}
                  value={searchValue}
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: '#cccccc' }} />
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={4} xs={12}>
                <Box className="newdeal-select onlyselect">
                  <FormControl fullWidth>
                    <InputLabel className="demo-simple-select-label" style={{ color: '#CDCDCD' }}>
                      Status
                    </InputLabel>
                    <Select
                      id="deal-select1"
                      label="Age"
                      className="deal-select select-drop selected select-input"
                      name="loan_purpose_id"
                      value={selectedFilter}
                      onChange={handleFilter}
                    >
                      <MenuItem value="All">All</MenuItem>
                      <MenuItem value={true} className="listtext">
                        Active
                      </MenuItem>
                      <MenuItem value={false} className="listtext">
                        In-Active
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xl={3} lg={4} md={6} sm={3} xs={12} className="admin-role">
                {roleName === 'Admin' || permissions.create === 1 ? (
                  <Button onClick={newdeal} className="admin-btn">
                    <img src={addicon} alt="add-icon" />
                    <span>Create Role</span>
                  </Button>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="dashboard-table">
          <Box sx={{ overflow: 'auto' }}>
            <TableContainer sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
              <Table className="table-section" stickyHeader aria-label="sticky table">
                <TableHead className="table-header">
                  <TableRow>
                    <TableCell className="first-td">Role Name</TableCell>
                    <TableCell className="sec-td">Status</TableCell>
                    <TableCell className="six-td action-btn">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <>
                    {rollinfo.length > 0 ? (
                      rollinfo
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((item, key) => (
                          <TableRow key={key}>
                            <TableCell className="first-td">{item.role_name}</TableCell>
                            <TableCell className="sec-td toggle-green">
                              <Box
                                inputProps={{ 'aria-label': 'ant design' }}
                                checked={item.is_active}
                                onChange={(e) => handleSwitchToggle(e.target.checked, item.id)}
                              />
                            </TableCell>
                            <TableCell className="six-td editicon">
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& > :not(style)': { m: 1 } }}>
                                {roleName === 'Admin' || permissions.view === 1 ? (
                                  <Tooltip title="View" placement="top-start">
                                    <img src={adminview} alt="admin-view" onClick={() => viewrole(item.id)} />
                                  </Tooltip>
                                ) : null}
                                {roleName === 'Admin' || permissions.edit === 1 ? (
                                  <Tooltip title="Edit" placement="top-start">
                                    <img src={adminedit} alt="admin-edit" onClick={() => editrole(item.id)} />
                                  </Tooltip>
                                ) : null}
                                {roleName === 'Admin' || permissions.delete === 1 ? (
                                  <Tooltip title="Delete" placement="top-start">
                                    <img src={admindelete} alt="admin-delete" onClick={() => handleDeleteRole(item.id)} />
                                  </Tooltip>
                                ) : null}
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan="7" sx={{ borderBottom: '0px !important' }}>
                          <Typography className="no-record" variant="h5" component="h5">
                            No Records Found
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          {rollinfo !== null ? (
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              component="div"
              count={rollinfo.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          ) : (
            ''
          )}
        </Grid>
      </div>
      <Box
        isDialogOpened={isOpen}
        handleCloseDialog={() => setIsOpen(false)}
        setdeletdone={setDeletdone}
        message={message}
        roleUser={roleUser}
      />
    </>
  );
};

export default Role;
