import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography, Grid, Card, Stack, InputAdornment, IconButton } from '@mui/material';
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
import Iconify from '../../../../components/iconify';
// redux
import { useDispatch, useSelector } from '../../../../redux/store';
import { postUser, updateUser } from '../../../../redux/slices/users';

// ----------------------------------------------------------------------
export default function General() {
    const { themeStretch } = useSettingsContext();
    const dispatch = useDispatch();
    const { user, usersList, currentUserID } = useSelector((state) => state.user);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (user && Object.keys(user)?.length > 0) {
            setValue("userID", user.userID);
            setValue("password", user.password);
            setValue("userLogin", user.userLogin);
            setValue("emailAddress", user.emailAddress);
        }
    }, [user]);
    const WebLoginFormSchema = Yup.object().shape({
        userID: Yup.string().required(),
        password: Yup.string().required(),
        userLogin: Yup.string().required(),
        emailAddress: Yup.string().required(),
    });

    const defaultValues = {
        userID: "",
        password: "",
        userLogin: "",
        emailAddress: "",
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
                currentObj.userID = data.userID;
                currentObj.password = data.password;
                currentObj.userLogin = data.userLogin;
                currentObj.emailAddress = data.email;
                console.log(currentObj);
                dispatch(updateUser(currentObj));
            } else {
                dispatch(postUser({
                    userID: data.userID, userLogin: data.userLogin, emailAddress: data.emailAddress, programsToAccess: 35,
                    password: data.password,
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
                <title> General Form Content | Shapiro 360</title>
            </Helmet>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ p: 2 }}>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> User ID </Typography>
                        <RHFTextField name="userID" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Password </Typography>

                        <RHFTextField
                            name="password"
                            label=""
                            type={showPassword ? 'text' : 'password'}
                            sx={{
                                borderRadius: '10px',
                                marginBottom: "5px",
                                width: "50%",
                                '& .MuiOutlinedInput-input': {
                                    padding: 1,
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> User LogIn </Typography>
                        <RHFTextField name="userLogIn" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Email </Typography>
                        <RHFTextField name="emailAddress" label=""
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
