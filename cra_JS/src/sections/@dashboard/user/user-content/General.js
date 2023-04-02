import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography,Grid } from '@mui/material';
import { useState, useEffect } from 'react';
// form
import { useForm } from 'react-hook-form';
// components
import { useSettingsContext } from '../../../../components/settings';
import FormProvider, {
    RHFTextField,
  } from '../../../../components/hook-form';


// ----------------------------------------------------------------------
export default function General() {
    const { themeStretch } = useSettingsContext();
    const GeneralFormSchema = Yup.object().shape({
       
      });
    return (
        <>
            <Helmet>
                <title> General Form Content | Shapiro 360</title>
            </Helmet>
        </>
    );
}
