import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
// auth
import { useAuthContext } from '../../auth/useAuthContext';

// components
import { useSettingsContext } from '../../components/settings';
// sections

import Iconify from '../../components/iconify';
// assets
import { SeoIllustration } from '../../assets/illustrations';

// ----------------------------------------------------------------------

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
    field: 'emailAddress',
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
  // {

  //   field: 'actions',

  //   headerName: 'Actions',

  //   width: 150,

  //   align: 'left',

  //   renderCell: (params) => {

  //     const element = (

  //       <>

  //         <Stack flexDirection={'row'} alignItems="center">





  //           <>

  //             <Iconify

  //               icon="material-symbols:edit-square-outline"

  //               sx={{ cursor: 'pointer', mr: 1 }}

  //             />

  //             <Iconify

  //               icon="ic:baseline-delete"

  //               sx={{ cursor: 'pointer' }}

  //             />

  //           </>



  //         </Stack>

  //       </>

  //     );

  //     return element;

  //   },

  // },
];

const rows = [
  { userId: 1, userLogin: 'Mike', emailAddress: 'Mike@gmail.com', programsToAccess: 35 },
  { userId: 2, userLogin: 'Russel', emailAddress: 'Russel@gmail.com', programsToAccess: 35 },
  { userId: 3, userLogin: 'Rodolfo', emailAddress: 'Rodolfo@gmail.com', programsToAccess: 35 },
  { userId: 4, userLogin: 'Chandu', emailAddress: 'Chandu@gmail.com', programsToAccess: 35 },
  { userId: 5, userLogin: 'Pulkit', emailAddress: 'Pulkit@gmail.com', programsToAccess: 35 },
  { userId: 6, userLogin: 'Praveen', emailAddress: 'Praveen@gmail.com', programsToAccess: 35 },
  { userId: 7, userLogin: 'Uvashri', emailAddress: 'Uvashri@gmail.com', programsToAccess: 35 },
  { userId: 8, userLogin: 'Swathika', emailAddress: 'Swathika@gmail.com', programsToAccess: 35 },
  { userId: 9, userLogin: 'Yolonda', emailAddress: 'Yolonda@gmail.com', programsToAccess: 35 },
  { userId: 10, userLogin: 'Erik', emailAddress: 'Erik@gmail.com', programsToAccess: 35 },
];

export default function GeneralAppPage() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> General: Dashboard | Shapiro 360</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            getRowId={(row) => row?.userId}
            pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Container>
    </>
  );
}
