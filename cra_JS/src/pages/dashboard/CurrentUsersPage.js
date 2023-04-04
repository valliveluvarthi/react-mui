import { Helmet } from 'react-helmet-async';
// @mui
import { useState, useEffect } from 'react';
import { Container, Grid, Stack, Button, Box, Typography } from '@mui/material';
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
  const { usersList, usersAPIList } = useSelector((state) => state.user);

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
      width: 200,
      editable: true,
      align: 'left',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      align: 'left',
      renderCell: (params) => {
        const element = (
          <>
            <Stack flexDirection={'row'} alignItems="center">
              <>
                <Iconify
                  icon="material-symbols:edit-square-outline"
                  sx={{ cursor: 'pointer', mr: 1 }}
                  onClick={() => {
                    dispatch(getUser(params?.row));
                    navigate(PATH_DASHBOARD.user.editUser);
                  }}
                />
                <Iconify
                  icon="ic:baseline-delete"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                   dispatch(deleteUser(params?.row?.id))
                   dispatch(deleteUsersAPI(params?.row?.id))
                  }}
                />
              </>
            </Stack>
          </>
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
        <title> Current Users | Shapiro 360</title>
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
