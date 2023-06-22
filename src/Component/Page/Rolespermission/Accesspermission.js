import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const label = { inputProps: { "aria-label": "Checkbox" } };

function Createrole() {
  const navigate = useNavigate();
  const [error, setErrors] = useState({
    role_status: "",
    Role_name: "",
  });
  const [roleuserdata, setRoleUserData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Role_name: "",
    role_status: "",
    Client_all: false,
    Client_create: false,
    Client_edit: false,
    Client_delete: false,
    Client_view: false,
    TestMaster_all: false,
    TestMaster_delete: false,
    TestMaster_create: false,
    TestMaster_edit: false,
    TestMaster_view: false,
    Testtips_all: false,
    Testtips_create: false,
    Testtips_edit: false,
    Testtips_delete: false,
    Testtips_view: false,
    Admin_Users_all: false,
    Admin_Users_create: false,
    Admin_Users_edit: false,
    Admin_Users_delete: false,
    Admin_Users_view: false,
    Mobile_Users_all: false,
    Mobile_Users_create: false,
    Mobile_Users_edit: false,
    Mobile_Users_delete: false,
    Mobile_Users_view: false,
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
    if (formData.Role_name) {
      setErrors((prevErrors) => ({ ...prevErrors, Role_name: "" }));
    }
    if (formData.role_status) {
      setErrors((prevErrors) => ({ ...prevErrors, role_status: "" }));
    }
  }, []);

  const validate = () => {
    if (!formData.Role_name) {
      setErrors((prevErrors) => ({ ...prevErrors, Role_name: "Please enter Role name" }));
    }
    if (!formData.role_status) {
      setErrors((prevErrors) => ({ ...prevErrors, role_status: "Please select status" }));
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "Client_all") {
      setFormData({
        ...formData,
        Client_all: checked,
        Client_create: checked,
        Client_edit: checked,
        Client_delete: checked,
        Client_view: checked,
      });
      if (!checked) {
        setFormData({
          ...formData,
          Client_all: false,
          Client_create: false,
          Client_edit: false,
          Client_delete: false,
          Client_view: false,
        });
      }
    } else if (name === "TestMaster_all") {
      setFormData({
        ...formData,
        TestMaster_all: checked,
        TestMaster_create: checked,
        TestMaster_edit: checked,
        TestMaster_delete: checked,
        TestMaster_view: checked,
      });
      if (!checked) {
        setFormData({
          ...formData,
          TestMaster_all: false,
          TestMaster_create: false,
          TestMaster_edit: false,
          TestMaster_delete: false,
          TestMaster_view: false,
        });
      }
    } else if (name === "Testtips_all") {
      setFormData({
        ...formData,
        Testtips_all: checked,
        Testtips_create: checked,
        Testtips_edit: checked,
        Testtips_delete: checked,
        Testtips_view: checked,
      });
      if (!checked) {
        setFormData({
          ...formData,
          Testtips_all: false,
          Testtips_create: false,
          Testtips_edit: false,
          Testtips_delete: false,
          Testtips_view: false,
        });
      }
    } else if (name === "Admin_Users_all") {
      setFormData({
        ...formData,
        Admin_Users_all: checked,
        Admin_Users_create: checked,
        Admin_Users_edit: checked,
        Admin_Users_delete: checked,
        Admin_Users_view: checked,
      });
      if (!checked) {
        setFormData({
          ...formData,
          Admin_Users_all: false,
          Admin_Users_create: false,
          Admin_Users_edit: false,
          Admin_Users_delete: false,
          Admin_Users_view: false,
        });
      }
    } else if (name === "Mobile_Users_all") {
      setFormData({
        ...formData,
        Mobile_Users_all: checked,
        Mobile_Users_create: checked,
        Mobile_Users_edit: checked,
        Mobile_Users_delete: checked,
        Mobile_Users_view: checked,
      });
      if (!checked) {
        setFormData({
          ...formData,
          Mobile_Users_all: false,
          Mobile_Users_create: false,
          Mobile_Users_edit: false,
          Mobile_Users_delete: false,
          Mobile_Users_view: false,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();

    // Additional code for handling form submission
    // ...
  };

  return (
    <Box>
      <Typography variant="h5">Create Role</Typography>
      <form onSubmit={handleSubmit}>
       
       
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Module</TableCell>
                <TableCell>All</TableCell>
                <TableCell>Create</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Client</TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Client_all"
                    checked={formData.Client_all}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                <Switch
                    {...label}
                    name="Client_create"
                    checked={formData.Client_create}
                    onChange={handleInputChange}
                  />
                </TableCell>

                <TableCell>
                  <Switch
                    {...label}
                    name="Client_edit"
                    checked={formData.Client_edit}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Client_delete"
                    checked={formData.Client_delete}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Client_view"
                    checked={formData.Client_view}
                    onChange={handleInputChange}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TestMaster</TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="TestMaster_all"
                    checked={formData.TestMaster_all}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                <Switch
                    {...label}
                    name="TestMaster_create"
                    checked={formData.TestMaster_create}
                    onChange={handleInputChange}
                  />
                </TableCell>

                <TableCell>
                  <Switch
                    {...label}
                    name="TestMaster_edit"
                    checked={formData.TestMaster_edit}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="TestMaster_delete"
                    checked={formData.TestMaster_delete}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="TestMaster_view"
                    checked={formData.TestMaster_view}
                    onChange={handleInputChange}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Testtips</TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Testtips_all"
                    checked={formData.Testtips_all}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                <Switch
                    {...label}
                    name="Testtips_create"
                    checked={formData.Testtips_create}
                    onChange={handleInputChange}
                  />
                </TableCell>

                <TableCell>
                  <Switch
                    {...label}
                    name="Testtips_edit"
                    checked={formData.Testtips_edit}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Testtips_delete"
                    checked={formData.Testtips_delete}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Testtips_view"
                    checked={formData.Testtips_view}
                    onChange={handleInputChange}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Admin Users</TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Admin_Users_all"
                    checked={formData.Admin_Users_all}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                <Switch
                    {...label}
                    name="Admin_Users_create"
                    checked={formData.Admin_Users_create}
                    onChange={handleInputChange}
                  />
                </TableCell>

                <TableCell>
                  <Switch
                    {...label}
                    name="Admin_Users_edit"
                    checked={formData.Admin_Users_edit}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Admin_Users_delete"
                    checked={formData.Admin_Users_delete}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Admin_Users_view"
                    checked={formData.Admin_Users_view}
                    onChange={handleInputChange}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mobile Users</TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Mobile_Users_all"
                    checked={formData.Mobile_Users_all}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                <Switch
                    {...label}
                    name="Mobile_Users_create"
                    checked={formData.Mobile_Users_create}
                    onChange={handleInputChange}
                  />
                </TableCell>

                <TableCell>
                  <Switch
                    {...label}
                    name="Mobile_Users_edit"
                    checked={formData.Mobile_Users_edit}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Mobile_Users_delete"
                    checked={formData.Mobile_Users_delete}
                    onChange={handleInputChange}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    {...label}
                    name="Mobile_Users_view"
                    checked={formData.Mobile_Users_view}
                    onChange={handleInputChange}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={4} display="flex" justifyContent="center">
          <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Role"}
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Createrole;
