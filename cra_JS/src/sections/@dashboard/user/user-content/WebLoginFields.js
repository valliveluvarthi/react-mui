import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography, Grid, Card, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
import { useLocation } from 'react-router-dom';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// components
import { useSettingsContext } from '../../../../components/settings';
import FormProvider, {
    RHFTextField,
} from '../../../../components/hook-form';
// redux
import { useDispatch, useSelector } from '../../../../redux/store';
import { postUser, updateUser } from '../../../../redux/slices/users';


// ----------------------------------------------------------------------
export default function WebLoginFields() {
    const { themeStretch } = useSettingsContext();
    const dispatch = useDispatch();
    const { user, usersList, currentUserID } = useSelector((state) => state.user);
    const location = useLocation();
    useEffect(() => {
        if (user && Object.keys(user)?.length > 0) {
            setValue("custNoAllowed", user.custNoAllowed);
            setValue("chargeCustAllowed", user.chargeCustAllowed);
            // setValue("usStatsCustAllowed", user.usStatsCustAllowed);
            // setValue("chargeCust", user.chargeCust);
            // setValue("usExceptionCodes", user.usExceptionCodes);
            // setValue("usPartsCustNo", user.usPartsCustNo);
            // setValue("accountTeamMail", user.accountTeamMail);
            // setValue("usScannedDocsCustNo", user.usScannedDocsCustNo);
            // setValue("exportStatsCustNoAllowed", user.exportStatsCustNoAllowed);
            // setValue("exportBookingTemplateCustNo", user.exportBookingTemplateCustNo);
            // setValue("exportBookingNotifyEmailAddress", user.exportBookingNotifyEmailAddress);
            // setValue("ISFCustNo", user.ISFCustNo);
            // setValue("ISFBranch", user.ISFBranch);
            // setValue("ISFDepartment", user.ISFDepartment);
        }
    }, [user]);
    const WebLoginFormSchema = Yup.object().shape({
        // usStatsCustAllowed: Yup.string(),
        custNoAllowed: Yup.string(),
        // chargeCust: Yup.string(),
        chargeCustAllowed: Yup.string(),

        // usExceptionCodes: Yup.string(),
        // usPartsCustNo: Yup.string(),
        // accountTeamMail: Yup.string(),
        // usScannedDocsCustNo: Yup.string(),
        // exportStatsCustNoAllowed: Yup.string(),
        // exportBookingTemplateCustNo: Yup.string(),
        // exportBookingNotifyEmailAddress: Yup.string(),
        // ISFCustNo: Yup.string(),
        // ISFBranch: Yup.string(),
        // ISFDepartment: Yup.string(),
    });

    const defaultValues = {
        custNoAllowed: "",
        chargeCustAllowed: "",
        // usStatsCustAllowed: "",
        // chargeCust: "",
        // usExceptionCodes: "",
        // usPartsCustNo: "",
        // accountTeamMail: "",
        // usScannedDocsCustNo: "",
        // exportStatsCustNoAllowed: "",
        // exportBookingTemplateCustNo: "",
        // exportBookingNotifyEmailAddress: "",
        // ISFCustNo: "",
        // ISFBranch: "",
        // ISFDepartment: "",
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
            if (currentUserID) {
                const index = usersList?.findIndex((col) => col.userID === currentUserID);
                const currentObj = { ...usersList[index] };
                currentObj.custNoAllowed = data.custNoAllowed;
                currentObj.chargeCustAllowed = data.chargeCustAllowed;
                // currentObj.usStatsCustAllowed = data.usStatsCustAllowed;
                // currentObj.chargeCust = data.chargeCust;
                // currentObj.usExceptionCodes = data.usExceptionCodes;
                // currentObj.usPartsCustNo = data.usPartsCustNo;
                // currentObj.accountTeamMail = data.accountTeamMail;
                // currentObj.usScannedDocsCustNo = data.usScannedDocsCustNo;
                // currentObj.exportStatsCustNoAllowed = data.exportStatsCustNoAllowed;
                // currentObj.exportBookingTemplateCustNo = data.exportBookingTemplateCustNo;
                // currentObj.exportBookingNotifyEmailAddress = data.exportBookingNotifyEmailAddress;
                // currentObj.ISFCustNo = data.ISFCustNo;
                // currentObj.ISFBranch = data.ISFBranch;
                // currentObj.ISFDepartment = data.ISFDepartment;
                console.log(currentObj);
                dispatch(updateUser(currentObj));
            } else {
                dispatch(postUser({
                    userID: usersList.length + 1,
                    userLogin: `User ${usersList.length + 1}`,
                    email: `user${usersList.length + 1}@gmail.com`,
                    password: `Shapiro@2023`,
                    confirmPassword: `Shapiro@2023`,
                    programsToAccess: 0,
                    custNoAllowed: data.custNoAllowed,
                    chargeCustAllowed: data.chargeCustAllowed,
                    firstName: `User ${usersList.length + 1}`,
                    lastName: `User ${usersList.length + 1}`,
                    role: `Admin`,
                    // usStatsCustAllowed: data.usStatsCustAllowed,
                    // chargeCust: data.chargeCust,
                    // usExceptionCodes: data.usExceptionCodes,
                    // usPartsCustNo: data.usPartsCustNo,
                    // accountTeamMail: data.accountTeamMail,
                    // usScannedDocsCustNo: data.usScannedDocsCustNo,
                    // exportStatsCustNoAllowed: data.exportStatsCustNoAllowed,
                    // exportBookingTemplateCustNo: data.exportBookingTemplateCustNo,
                    // exportBookingNotifyEmailAddress: data.exportBookingNotifyEmailAddress,
                    // ISFCustNo: data.ISFCustNo,
                    // ISFBranch: data.ISFBranch,
                    // ISFDepartment: data.ISFDepartment,
                }));
            }
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
                        <RHFTextField name="custNoAllowed" label=""
                            variant="outlined"
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }}
                        />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Charge Cust </Typography>
                        <RHFTextField name="chargeCustAllowed" label=""
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
                    {/* <Stack flexDirection={"row"} alignItems={"center"}>
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
                    </Stack> */}

                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent="flex-end" sx={{ mt: 2, mr: "16%" }}>
                        <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                            Save
                        </LoadingButton>
                    </Stack>
                </Card>
            </FormProvider>
        </>
    );
}
