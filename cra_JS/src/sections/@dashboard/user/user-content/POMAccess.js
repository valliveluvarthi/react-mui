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



// ----------------------------------------------------------------------
export default function POMAccess() {
    const { themeStretch } = useSettingsContext();
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
    } = methods;

    const values = watch();
    const onSubmit = async (data) => {
        try {
            console.log(data.AGENTBOOK);
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

                    <FormControlLabel control={<Checkbox name="FDVAL" onChange={(event) => setValue("FDVAL", event.target.checked)} />} label="Floor & Decor PO Validation" sx={{ display: "block" }} />
                    <FormControlLabel control={<Checkbox name="POACTION" onChange={(event) => setValue("POACTION", event.target.checked)} />} label="POM PO Actions" sx={{ display: "block" }} />
                    <FormControlLabel control={<Checkbox name="POASSIGN" onChange={(event) => setValue("POASSIGN", event.target.checked)} />} label="POM Track Assignment Rules" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POBOOK" onChange={(event) => setValue("POBOOK", event.target.checked)} />} label="POM Booking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POCONSIG" onChange={(event) => setValue("POCONSIG", event.target.checked)} />} label="POM Consignee Maintenance" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POCONSOL" onChange={(event) => setValue("POCONSOL", event.target.checked)} />} label="POM Consolidations" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="PODASH" onChange={(event) => setValue("PODASH", event.target.checked)} />} label="POM PO Dashboards" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POINQUIRE" onChange={(event) => setValue("POINQUIRE", event.target.checked)} />} label="POM Inquiry" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POINQUIRE_CN" onChange={(event) => setValue("POINQUIRE_CN", event.target.checked)} />} label="POM Inquiry CN" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POTRACK" onChange={(event) => setValue("POTRACK", event.target.checked)} />} label="POM Track Maintenance" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POTRANSIT" onChange={(event) => setValue("POTRANSIT", event.target.checked)} />} label="POM Transit Time Rules Maintenance" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="POVENDOR" onChange={(event) => setValue("POVENDOR", event.target.checked)} />} label="POM Vendor Maintenance" sx={{ display: "block" }} />

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
