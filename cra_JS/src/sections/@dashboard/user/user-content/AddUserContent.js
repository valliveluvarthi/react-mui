import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// components
import { useSettingsContext } from '../../../../components/settings';
import TabContent from "./TabContent";

// ----------------------------------------------------------------------
export default function AddUserContent() {
    const { themeStretch } = useSettingsContext();
    return (
        <>
            <Helmet>
                <title> Add User Content | Shapiro 360</title>
            </Helmet>

            <TabContent/>
        </>
    );
}
