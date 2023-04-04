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
import { getArticle, deleteArticle } from '../../redux/slices/articles';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------
export default function CurrentArticlesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { themeStretch } = useSettingsContext();
  const { articlesList } = useSelector((state) => state.article);
  const columns = [
    { field: 'category', headerName: 'Category', width: 100 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      editable: true,
      align: 'left',
    },
    {
      field: 'codeLoc',
      headerName: 'Code Loc',
      width: 200,
      editable: true,
      align: 'left',
    },
    {
      field: 'appCode',
      headerName: 'App Code',
      width: 200,
      editable: true,
      align: 'left',
    },
    {
      field: 'popup',
      headerName: 'Popup',
      width: 200,
      editable: true,
      align: 'left',
    },
    {
      field: 'bootstrap',
      headerName: 'Bootstrap',
      width: 200,
      editable: true,
      align: 'left',
    },
    {
      field: 'catSeq',
      headerName: 'Cat Seq',
      width: 200,
      editable: true,
      align: 'left',
    },
    {
      field: 'pageSeq',
      headerName: 'Page Seq',
      width: 200,
      editable: true,
      align: 'left',
    },
    {
      field: 'newModal',
      headerName: 'New Modal',
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
                    dispatch(getArticle(params?.row));
                    navigate(PATH_DASHBOARD.articles.editArticles);
                  }}
                />
                <Iconify
                  icon="ic:baseline-delete"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                   dispatch(deleteArticle(params?.row?.articleID))
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
  return (
    <>
      <Helmet>
        <title> Current Articles | Shapiro 360</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h6"> Current Articles </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={articlesList}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            getRowId={(row) => row?.articleID}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </Container>
    </>
  );
}
