import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// components
import { useSettingsContext } from '../../components/settings';

// ----------------------------------------------------------------------
export default function BlankPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Blank Page | Shapiro 360</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h6"> Blank </Typography>
      </Container>
    </>
  );
}
