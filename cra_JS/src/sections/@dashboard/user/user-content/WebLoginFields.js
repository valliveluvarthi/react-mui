import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography, Grid, Card, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// components
import { useSettingsContext } from '../../../../components/settings';
import FormProvider, {
    RHFTextField,
} from '../../../../components/hook-form';


// ----------------------------------------------------------------------
export default function WebLoginFields() {
    const { themeStretch } = useSettingsContext();
    const WebLoginFormSchema = Yup.object().shape({
        usStatsCustAllowed: Yup.string(),
        chargeCust: Yup.string(),
        usExceptionCodes: Yup.string(),
        usPartsCustNo: Yup.string(),
        accountTeamMail: Yup.string(),
        usScannedDocsCustNo: Yup.string(),
        exportStatsCustNoAllowed: Yup.string(),
        exportBookingTemplateCustNo: Yup.string(),
        exportBookingNotifyEmailAddress: Yup.string(),
        ISFCustNo: Yup.string(),
        ISFBranch: Yup.string(),
        ISFDepartment: Yup.string(),
    });
    const defaultValues = {
        usStatsCustAllowed: "",
        chargeCust: "",
        usExceptionCodes: "",
        usPartsCustNo: "",
        accountTeamMail: "",
        usScannedDocsCustNo: "",
        exportStatsCustNoAllowed: "",
        exportBookingTemplateCustNo: "",
        exportBookingNotifyEmailAddress: "",
        ISFCustNo: "",
        ISFBranch: "",
        ISFDepartment: "",
    };
    const methods = useForm({
        resolver: yupResolver(WebLoginFormSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;

    const values = watch();
    const onSubmit = async (data) => {
        try {
            console.log(data);
            reset();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Helmet>
                <title>Web Login Fields Form Content | Shapiro 360</title>
            </Helmet>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ p: 2 }}>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> US Stats Cust Allowed </Typography>
                        <RHFTextField name="usStatsCustAllowed" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Charge Cust </Typography>
                        <RHFTextField name="chargeCust" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> US Exception Codes </Typography>
                        <RHFTextField name="usExceptionCodes" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> US Parts Cust No </Typography>
                        <RHFTextField name="usPartsCustNo" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Account Team Mail </Typography>
                        <RHFTextField name="accountTeamMail" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}>  US Scanned Docs Cust No </Typography>
                        <RHFTextField name="usScannedDocsCustNo" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Export Stats Cust No Allowed </Typography>
                        <RHFTextField name="exportStatsCustNoAllowed" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Export Booking Template Cust No </Typography>
                        <RHFTextField name="exportBookingTemplateCustNo" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Export Booking Notify Email Address </Typography>
                        <RHFTextField name="exportBookingNotifyEmailAddress" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> ISF Cust No </Typography>
                        <RHFTextField name="ISFCustNo" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> ISF Branch </Typography>
                        <RHFTextField name="ISFBranch" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> ISF Department </Typography>
                        <RHFTextField name="ISFDepartment" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }} />
                    </Stack>

                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent="flex-end" sx={{mt : 2, mr : "16%"}}>
                        <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                            Save
                        </LoadingButton>
                    </Stack>
                </Card>
            </FormProvider>
        </>
    );
}
