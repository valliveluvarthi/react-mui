import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// _mock_
import {
  _appFeatured,
  _appAuthors,
  _appInstalled,
  _appRelated,
  _appInvoices,
} from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';
import Iconify from '../../components/iconify';
// assets
import { SeoIllustration } from '../../assets/illustrations';

// ----------------------------------------------------------------------

const columns = [
  { field: 'userID', headerName: 'User ID', width: 100 },
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

              />

              <Iconify

                icon="ic:baseline-delete"

                sx={{ cursor: 'pointer' }}

              />

            </>



          </Stack>

        </>

      );

      return element;

    },

  },
];

const rows = [
  { userID: 1, userLogin: 'Mike', emailAddress: 'Mike@gmail.com', programsToAccess: 35 },
  { userID: 2, userLogin: 'Russel', emailAddress: 'Russel@gmail.com', programsToAccess: 35 },
  { userID: 3, userLogin: 'Rodolfo', emailAddress: 'Rodolfo@gmail.com', programsToAccess: 35 },
  { userID: 4, userLogin: 'Chandu', emailAddress: 'Chandu@gmail.com', programsToAccess: 35 },
  { userID: 5, userLogin: 'Pulkit', emailAddress: 'Pulkit@gmail.com', programsToAccess: 35 },
  { userID: 6, userLogin: 'Praveen', emailAddress: 'Praveen@gmail.com', programsToAccess: 35 },
  { userID: 7, userLogin: 'Uvashri', emailAddress: 'Uvashri@gmail.com', programsToAccess: 35 },
  { userID: 8, userLogin: 'Swathika', emailAddress: 'Swathika@gmail.com', programsToAccess: 35 },
  { userID: 9, userLogin: 'Yolonda', emailAddress: 'Yolonda@gmail.com', programsToAccess: 35 },
  { userID: 10, userLogin: 'Erik', emailAddress: 'Erik@gmail.com', programsToAccess: 35 },
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
            getRowId={(row) => row?.userID}
            pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Container>
    </>
  );
}
