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
export default function GeneralAccess() {
    const { themeStretch } = useSettingsContext();
    const GeneralAccessFormSchema = Yup.object().shape({
        AGENTBOOK: Yup.bool(),
        AGENTTEMP: Yup.bool(),
        AMAZFBA: Yup.bool(),
        ARSTMT: Yup.bool(),
        BKAPPCN: Yup.bool(),
        BMM_NEW: Yup.bool(),
        BOOKACTION: Yup.bool(),
        BOOKAPP: Yup.bool(),
        CAM_BULK: Yup.bool(),
        CLASSAD: Yup.bool(),
        CUSTPROF: Yup.bool(),
        DASHCNFR: Yup.bool(),
        DASHCONT: Yup.bool(),
        DASHDOAU: Yup.bool(),
        DASHMQC: Yup.bool(),
        DASHORDT: Yup.bool(),
        DASHPOM: Yup.bool(),
        DASHSHIP: Yup.bool(),
        DASHTEST: Yup.bool(),
        DASHTRAN: Yup.bool(),
        EDASH: Yup.bool(),
        EXPBOOK: Yup.bool(),
        EXPLIC: Yup.bool(),
        EXPTEMPL: Yup.bool(),
        EXPTRACK: Yup.bool(),
        IMPPER: Yup.bool(),
        ISFPORTAL: Yup.bool(),
        ISFTEMPL: Yup.bool(),
        IT: Yup.bool(),
        IT_CN: Yup.bool(),
        LANDCOST: Yup.bool(),
        ONLINEPAY: Yup.bool(),
        PARTS: Yup.bool(),
        QUOTE: Yup.bool(),
        REPORT: Yup.bool(),
        SAILADMIN: Yup.bool(),
        SELECTSAIL: Yup.bool(),
        SHIPTRACK: Yup.bool(),
        SNAPSHOT: Yup.bool(),
        TRANDASH: Yup.bool(),
        TRUCKPORT: Yup.bool(),
        USP: Yup.bool(),
        WAREWITH: Yup.bool(),
    });
    const defaultValues = {
        AGENTBOOK: false,
        AGENTTEMP: false,
        AMAZFBA: false,
        ARSTMT: false,
        BKAPPCN: false,
        BMM_NEW: false,
        BOOKACTION: false,
        BOOKAPP: false,
        CAM_BULK: false,
        CLASSAD: false,
        CUSTPROF: false,
        DASHCNFR: false,
        DASHCONT: false,
        DASHDOAU: false,
        DASHMQC: false,
        DASHORDT: false,
        DASHPOM: false,
        DASHSHIP: false,
        DASHTEST: false,
        DASHTRAN: false,
        EDASH: false,
        EXPBOOK: false,
        EXPLIC: false,
        EXPTEMPL: false,
        EXPTRACK: false,
        IMPPER: false,
        ISFPORTAL: false,
        ISFTEMPL: false,
        IT: false,
        IT_CN: false,
        LANDCOST: false,
        ONLINEPAY: false,
        PARTS: false,
        QUOTE: false,
        REPORT: false,
        SAILADMIN: false,
        SELECTSAIL: false,
        SHIPTRACK: false,
        SNAPSHOT: false,
        TRANDASH: false,
        TRUCKPORT: false,
        USP: false,
        WAREWITH: false,
    };
    const methods = useForm({
        resolver: yupResolver(GeneralAccessFormSchema),
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
                <title> General Access Form Content | Shapiro 360</title>
            </Helmet>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ p: 2 }}>

                    <FormControlLabel control={<Checkbox name="AGENTBOOK" onChange={(event) => setValue("AGENTBOOK", event.target.checked)} />} label="Agent Booking" sx={{ display: "block" }} />
                    <FormControlLabel control={<Checkbox name="AGENTTEMP" onChange={(event) => setValue("AGENTBOOK", event.target.checked)} />} label="Agent Booking Templates" sx={{ display: "block" }} />
                    <FormControlLabel control={<Checkbox name="AMAZFBA" onChange={(event) => setValue("AMAZFBA", event.target.checked)} />} label="Amazon FBA Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="ARSTMT" onChange={(event) => setValue("ARSTMT", event.target.checked)} />} label=" A/R Statements " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="BKAPPCN" onChange={(event) => setValue("BKAPPCN", event.target.checked)} />} label=" Booking Managment China " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="BMM_NEW" onChange={(event) => setValue("BMM_NEW", event.target.checked)} />} label=" Booking Management " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="BOOKACTION" onChange={(event) => setValue("BOOKACTION", event.target.checked)} />} label=" POM Booking Actions " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="BOOKAPP" onChange={(event) => setValue("BOOKAPP", event.target.checked)} />} label=" Booking Managment " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="CAM_BULK" onChange={(event) => setValue("CAM_BULK", event.target.checked)} />} label=" Bulk CAM Request Uploader " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="CLASSAD" onChange={(event) => setValue("CLASSAD", event.target.checked)} />} label=" Classification Advisory " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="CUSTPROF" onChange={(event) => setValue("CUSTPROF", event.target.checked)} />} label=" Customer Profile " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHCNFR" onChange={(event) => setValue("DASHCNFR", event.target.checked)} />} label=" Dashboard - Container Forecast " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHCONT" onChange={(event) => setValue("DASHCONT", event.target.checked)} />} label=" Dashboard Container" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHDOAU" onChange={(event) => setValue("DASHDOAU", event.target.checked)} />} label=" Dashboard - Document Audit" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHMQC" onChange={(event) => setValue("DASHMQC", event.target.checked)} />} label=" Dashboard - MQC" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHORDT" onChange={(event) => setValue("DASHORDT", event.target.checked)} />} label=" Dashboard - Origin/Destination" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHPOM" onChange={(event) => setValue("DASHPOM", event.target.checked)} />} label=" Dashboard - POM" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHSHIP" onChange={(event) => setValue("DASHSHIP", event.target.checked)} />} label=" Shipment Dashboards" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHTEST" onChange={(event) => setValue("DASHTEST", event.target.checked)} />} label=" Dashboard Test" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHTRAN" onChange={(event) => setValue("DASHTRAN", event.target.checked)} />} label=" Transit Time Dashboard" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="EDASH" onChange={(event) => setValue("EDASH", event.target.checked)} />} label=" Entry Dashboards" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="EXPBOOK" onChange={(event) => setValue("EXPBOOK", event.target.checked)} />} label=" Export Booking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="EXPLIC" onChange={(event) => setValue("EXPLIC", event.target.checked)} />} label=" Export License Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="EXPTEMPL" onChange={(event) => setValue("EXPTEMPL", event.target.checked)} />} label=" Export Templates" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="EXPTRACK" onChange={(event) => setValue("EXPTRACK", event.target.checked)} />} label=" Export Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="IMPPER" onChange={(event) => setValue("IMPPER", event.target.checked)} />} label=" Import Permit Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="ISFPORTAL" onChange={(event) => setValue("ISFPORTAL", event.target.checked)} />} label=" ISF Filing Portal" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="ISFTEMPL" onChange={(event) => setValue("ISFTEMPL", event.target.checked)} />} label=" ISF Templates" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="IT" onChange={(event) => setValue("IT", event.target.checked)} />} label=" Import Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="IT_CN" onChange={(event) => setValue("IT_CN", event.target.checked)} />} label=" Import Tracking CN" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="LANDCOST" onChange={(event) => setValue("LANDCOST", event.target.checked)} />} label=" Landed Cost" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="ONLINEPAY" onChange={(event) => setValue("ONLINEPAY", event.target.checked)} />} label=" On-Line Payment" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="PARTS" onChange={(event) => setValue("PARTS", event.target.checked)} />} label=" Parts Table" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="QUOTE" onChange={(event) => setValue("QUOTE", event.target.checked)} />} label=" Quote Book" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="REPORT" onChange={(event) => setValue("REPORT", event.target.checked)} />} label=" Reports" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="SAILADMIN" onChange={(event) => setValue("SAILADMIN", event.target.checked)} />} label=" Sailing Schedule Maintenace" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="SELECTSAIL" onChange={(event) => setValue("SELECTSAIL", event.target.checked)} />} label=" Select Sail Schedule " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="SHIPTRACK" onChange={(event) => setValue("SHIPTRACK", event.target.checked)} />} label=" Shipment Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="SNAPSHOT" onChange={(event) => setValue("SNAPSHOT", event.target.checked)} />} label=" Snapshot" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="TRANDASH" onChange={(event) => setValue("TRANDASH", event.target.checked)} />} label=" Transportation Dashboards" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="TRUCKPORT" onChange={(event) => setValue("TRUCKPORT", event.target.checked)} />} label=" Trucker Portal" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="USP" onChange={(event) => setValue("USP", event.target.checked)} />} label=" Parts Table" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="WAREWITH" onChange={(event) => setValue("WAREWITH", event.target.checked)} />} label=" Warehouse Withdrawals" sx={{ display: "block" }} />



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
