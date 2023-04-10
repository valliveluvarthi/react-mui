import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Helmet } from 'react-helmet-async';
// @mui
import { useState, useEffect } from 'react';
import { Container, Grid, Stack, Button, Box, Typography, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

// components
import { useSettingsContext } from '../../components/settings';
import Iconify from '../../components/iconify';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getUser, deleteUser, getUsersAPI, deleteUsersAPI } from '../../redux/slices/users';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

export default function CurrentUsersPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { themeStretch } = useSettingsContext();
  const { usersList, usersAPIList, alertMessage } = useSelector((state) => state.user);
  const [selectedParams, setSelectedParams] = useState(null);
  const columns = [
    { field: 'userId', headerName: 'User ID', width: 100 },
    {
      field: 'userLogin',
      headerName: 'User Login',
      width: 200,
      editable: true,
      align: 'left',
    },
    {
      field: 'email',
      headerName: 'User Email Address',
      width: 200,
      editable: true,
      align: 'left',
    },
    {
      field: 'programsToAccess',
      headerName: 'Programs To Access',
      width: 250,
      editable: true,
      align: 'left',
      renderCell: (params) => {
        const element = (
          <Box title = {params?.row?.programsToAccess}>
            {params?.row?.programsToAccess}
          </Box>
        );
        return element;
      },
    },
    {
      field: 'pomRoles',
      headerName: 'POM Roles',
      width: 250,
      editable: true,
      align: 'left',
      renderCell: (params) => {
        const element = (
          <Box title = {params?.row?.pomRoles}>
            {params?.row?.pomRoles}
          </Box>
        );
        return element;
      },
    },
  ];
  useEffect(() => {
    dispatch(getUsersAPI());
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard | Shapiro 360</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h6"> Current Users </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={usersAPIList}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            getRowId={(row) => row?.userId || row?.id}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </Container>
    </>
  );
}
