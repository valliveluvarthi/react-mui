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
            setValue("email", user.email);
            setValue("password", user.password);
            setValue("confirmPassword", user.confirmPassword);
            setValue("firstName", user.firstName);
            setValue("lastName", user.lastName);
            setValue("role", user.role);
            setValue("userLogin", user.userLogin);
        }
    }, [user]);
    const WebLoginFormSchema = Yup.object().shape({
        userID: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        confirmPassword: Yup.string().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        role: Yup.string().required(),
        userLogin: Yup.string().required(),
    });

    const defaultValues = {
        userID : "",
        email : "",
        password : "",
        confirmPassword : "",
        firstName : "",
        lastName : "",
        role : "",
        userLogin : "",
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
                currentObj.email = data.email;
                currentObj.password = data.password;
                currentObj.confirmPassword = data.confirmPassword;
                currentObj.firstName = data.firstName;
                currentObj.lastName = data.lastName;
                currentObj.role = data.role;
                currentObj.userLogin = data.userLogin;
                
                console.log(currentObj);
                dispatch(updateUser(currentObj));
            } else {
                dispatch(postUser({
                    userID : data.userID,
                    email : data.email,
                    password : data.password,
                    confirmPassword : data.confirmPassword,
                    firstName : data.firstName,
                    lastName : data.lastName,
                    role : data.role,
                    userLogin : data.userLogin,
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> userID </Typography>
                        <RHFTextField name="userID" label=""
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
                        <RHFTextField name="email" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Confirm Password </Typography>

                        <RHFTextField
                            name="confirmPassword"
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> First Name </Typography>
                        <RHFTextField name="firstName" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Last Name </Typography>
                        <RHFTextField name="lastName" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Role </Typography>
                        <RHFTextField name="role" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> User LogIn </Typography>
                        <RHFTextField name="userLogin" label=""
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
