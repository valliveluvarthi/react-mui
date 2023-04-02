import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography, Grid, Card, Stack, FormControlLabel, Checkbox } from '@mui/material';
import { useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// components
import { useSettingsContext } from '../../../../components/settings';
import FormProvider from '../../../../components/hook-form';
// redux
import { useDispatch, useSelector } from '../../../../redux/store';
import { postUser, updateUser } from '../../../../redux/slices/users';



// ----------------------------------------------------------------------
export default function POMAccess() {
    const { themeStretch } = useSettingsContext();
    const dispatch = useDispatch();
    const { user, usersList, currentUserID } = useSelector((state) => state.user);
    useEffect(() => {
        if (user && Object.keys(user)?.length > 0) {
            setValue("FDVAL", user.FDVAL);
            setValue("POACTION", user.POACTION);
            setValue("POASSIGN", user.POASSIGN);
            setValue("POBOOK", user.POBOOK);
            setValue("POCONSIG", user.POCONSIG);
            setValue("POCONSOL", user.POCONSOL);
            setValue("PODASH", user.PODASH);
            setValue("POINQUIRE", user.POINQUIRE);
            setValue("POINQUIRE_CN", user.POINQUIRE_CN);
            setValue("POTRACK", user.POTRACK);
            setValue("POTRANSIT", user.POTRANSIT);
            setValue("POVENDOR", user.POVENDOR);
        }
    }, [user]);
    const POMAccessFormSchema = Yup.object().shape({
        FDVAL: Yup.bool(),
        POACTION: Yup.bool(),
        POASSIGN: Yup.bool(),
        POBOOK: Yup.bool(),
        POCONSIG: Yup.bool(),
        POCONSOL: Yup.bool(),
        PODASH: Yup.bool(),
        POINQUIRE: Yup.bool(),
        POINQUIRE_CN: Yup.bool(),
        POTRACK: Yup.bool(),
        POTRANSIT: Yup.bool(),
        POVENDOR: Yup.bool(),
    });
    const defaultValues = {
        FDVAL: false,
        POACTION: false,
        POASSIGN: false,
        POBOOK: false,
        POCONSIG: false,
        POCONSOL: false,
        PODASH: false,
        POINQUIRE: false,
        POINQUIRE_CN: false,
        POTRACK: false,
        POTRANSIT: false,
        POVENDOR: false,
    };
    const methods = useForm({
        resolver: yupResolver(POMAccessFormSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        setValue,
        handleSubmit,
        formState: { isSubmitting, isValid },
        getValues,
    } = methods;

    const values = watch();
    const onSubmit = async (data) => {
        try {
            if (currentUserID) {
                const index = usersList?.findIndex((col) => col.userID === currentUserID);
                const currentObj = { ...usersList[index] };
                currentObj.FDVAL = data.FDVAL;
                currentObj.POACTION = data.POACTION;
                currentObj.POASSIGN = data.POASSIGN;
                currentObj.POBOOK = data.POBOOK;
                currentObj.POCONSIG = data.POCONSIG;
                currentObj.POCONSOL = data.POCONSOL;
                currentObj.PODASH = data.PODASH;
                currentObj.POINQUIRE = data.POINQUIRE;
                currentObj.POINQUIRE_CN = data.POINQUIRE_CN;
                currentObj.POTRACK = data.POTRACK;
                currentObj.POTRANSIT = data.POTRANSIT;
                currentObj.POVENDOR = data.POVENDOR;
                console.log(currentObj);
                dispatch(updateUser(currentObj));
            } else {
                dispatch(postUser({
                    userID: usersList.length + 1, userLogin: `User ${usersList.length + 1}`, emailAddress: `user${usersList.length + 1}@gmail.com`, programsToAccess: 35,
                    FDVAL: data.FDVAL,
                    POACTION: data.POACTION,
                    POASSIGN: data.POASSIGN,
                    POBOOK: data.POBOOK,
                    POCONSIG: data.POCONSIG,
                    POCONSOL: data.POCONSOL,
                    PODASH: data.PODASH,
                    POINQUIRE: data.POINQUIRE,
                    POINQUIRE_CN: data.POINQUIRE_CN,
                    POTRACK: data.POTRACK,
                    POTRANSIT: data.POTRANSIT,
                    POVENDOR: data.POVENDOR,
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
                <title>POM Access Form Content | Shapiro 360</title>
            </Helmet>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ p: 2 }}>

                    <FormControlLabel control={<Checkbox name="FDVAL" checked={getValues("FDVAL")} onChange={(event) => setValue("FDVAL", event.target.checked)} />} label="Floor & Decor PO Validation" sx={{ display: "block" }} />
                    <FormControlLabel control={<Checkbox name="POACTION" checked={getValues("POACTION")} onChange={(event) => setValue("POACTION", event.target.checked)} />} label="POM PO Actions" sx={{ display: "block" }} />
                    <FormControlLabel control={<Checkbox name="POASSIGN" checked={getValues("POASSIGN")} onChange={(event) => setValue("POASSIGN", event.target.checked)} />} label="POM Track Assignment Rules" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POBOOK" checked={getValues("POBOOK")} onChange={(event) => setValue("POBOOK", event.target.checked)} />} label="POM Booking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POCONSIG" checked={getValues("POCONSIG")} onChange={(event) => setValue("POCONSIG", event.target.checked)} />} label="POM Consignee Maintenance" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POCONSOL" checked={getValues("POCONSOL")} onChange={(event) => setValue("POCONSOL", event.target.checked)} />} label="POM Consolidations" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="PODASH" checked={getValues("PODASH")} onChange={(event) => setValue("PODASH", event.target.checked)} />} label="POM PO Dashboards" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POINQUIRE" checked={getValues("POINQUIRE")} onChange={(event) => setValue("POINQUIRE", event.target.checked)} />} label="POM Inquiry" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POINQUIRE_CN" checked={getValues("POINQUIRE_CN")} onChange={(event) => setValue("POINQUIRE_CN", event.target.checked)} />} label="POM Inquiry CN" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POTRACK" checked={getValues("POTRACK")} onChange={(event) => setValue("POTRACK", event.target.checked)} />} label="POM Track Maintenance" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POTRANSIT" checked={getValues("POTRANSIT")} onChange={(event) => setValue("POTRANSIT", event.target.checked)} />} label="POM Transit Time Rules Maintenance" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POVENDOR" checked={getValues("POVENDOR")} onChange={(event) => setValue("POVENDOR", event.target.checked)} />} label="POM Vendor Maintenance" sx={{ display: "block" }} />

                    <Stack flexDirection={"row"} alignItems={"center"} justifyContent="flex-end" sx={{ mt: 2, mr: "2%" }}>
                        <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                            Save
                        </LoadingButton>
                    </Stack>
                </Card>
            </FormProvider>
        </>
    );
}
