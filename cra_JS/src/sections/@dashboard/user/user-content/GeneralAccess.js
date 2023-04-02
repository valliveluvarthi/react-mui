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
export default function GeneralAccess() {
    const { themeStretch } = useSettingsContext();
    const dispatch = useDispatch();
    const { user, usersList, currentUserID } = useSelector((state) => state.user);
    useEffect(() => {
        if(user && Object.keys(user)?.length > 0){
            setValue("AGENTBOOK",user.AGENTBOOK);
            setValue("AGENTTEMP",user.AGENTTEMP);
            setValue("AMAZFBA",user.AMAZFBA);
            setValue("ARSTMT",user.ARSTMT);
            setValue("BKAPPCN",user.BKAPPCN);
            setValue("BMM_NEW",user.BMM_NEW);
            setValue("BOOKACTION",user.BOOKACTION);
            setValue("BOOKAPP",user.BOOKAPP);
            setValue("CAM_BULK",user.CAM_BULK);
            setValue("CLASSAD",user.CLASSAD);
            setValue("CUSTPROF",user.CUSTPROF);
            setValue("DASHCNFR",user.DASHCNFR);
            setValue("DASHCONT",user.DASHCONT);
            setValue("DASHDOAU",user.DASHDOAU);
            setValue("DASHMQC",user.DASHMQC);
            setValue("DASHORDT",user.DASHORDT);
            setValue("DASHPOM",user.DASHPOM);
            setValue("DASHSHIP",user.DASHSHIP);
            setValue("DASHTEST",user.DASHTEST);
            setValue("DASHTRAN",user.DASHTRAN);
            setValue("EDASH",user.EDASH);
            setValue("EXPBOOK",user.EXPBOOK);
            setValue("EXPLIC",user.EXPLIC);
            setValue("EXPTEMPL",user.EXPTEMPL);
            setValue("EXPTRACK",user.EXPTRACK);
            setValue("IMPPER",user.IMPPER);
            setValue("ISFPORTAL",user.ISFPORTAL);
            setValue("ISFTEMPL",user.ISFTEMPL);
            setValue("IT",user.IT);
            setValue("IT_CN",user.IT_CN);
            setValue("LANDCOST",user.LANDCOST);
            setValue("ONLINEPAY",user.ONLINEPAY);
            setValue("PARTS",user.PARTS);
            setValue("QUOTE",user.QUOTE);
            setValue("REPORT",user.REPORT);
            setValue("SAILADMIN",user.SAILADMIN);
            setValue("SELECTSAIL",user.SELECTSAIL);
            setValue("SHIPTRACK",user.SHIPTRACK);
            setValue("SNAPSHOT",user.SNAPSHOT);
            setValue("TRANDASH",user.TRANDASH);
            setValue("TRUCKPORT",user.TRUCKPORT);
            setValue("USP",user.USP);
            setValue("WAREWITH",user.WAREWITH);
        }
      }, [user]);
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
            if(currentUserID){
                const index = usersList?.findIndex((col) => col.userID === currentUserID);
                const currentObj = {...usersList[index]};
                currentObj.AGENTBOOK = data.AGENTBOOK;
                currentObj.AGENTTEMP = data.AGENTTEMP;
                currentObj.AMAZFBA = data.AMAZFBA;
                currentObj.ARSTMT = data.ARSTMT;
                currentObj.BKAPPCN = data.BKAPPCN;
                currentObj.BMM_NEW = data.BMM_NEW;
                currentObj.BOOKACTION = data.BOOKACTION;
                currentObj.BOOKAPP = data.BOOKAPP;
                currentObj.CAM_BULK = data.CAM_BULK;
                currentObj.CLASSAD = data.CLASSAD;
                currentObj.CUSTPROF = data.CUSTPROF;
                currentObj.DASHCNFR = data.DASHCNFR;
                currentObj.DASHCONT = data.DASHCONT;
                currentObj.DASHDOAU = data.DASHDOAU;
                currentObj.DASHMQC = data.DASHMQC;
                currentObj.DASHORDT = data.DASHORDT;
                currentObj.DASHPOM = data.DASHPOM;
                currentObj.DASHSHIP = data.DASHSHIP;
                currentObj.DASHTEST = data.DASHTEST;
                currentObj.DASHTRAN = data.DASHTRAN;
                currentObj.EDASH = data.EDASH;
                currentObj.EXPBOOK = data.EXPBOOK;
                currentObj.EXPLIC = data.EXPLIC;
                currentObj.EXPTEMPL = data.EXPTEMPL;
                currentObj.EXPTRACK = data.EXPTRACK;
                currentObj.IMPPER = data.IMPPER;
                currentObj.ISFPORTAL = data.ISFPORTAL;
                currentObj.ISFTEMPL = data.ISFTEMPL;
                currentObj.IT = data.IT;
                currentObj.IT_CN = data.IT_CN;
                currentObj.LANDCOST = data.LANDCOST;
                currentObj.ONLINEPAY = data.ONLINEPAY;
                currentObj.PARTS = data.PARTS;
                currentObj.QUOTE = data.QUOTE;
                currentObj.REPORT = data.REPORT;
                currentObj.SAILADMIN = data.SAILADMIN;
                currentObj.SELECTSAIL = data.SELECTSAIL;
                currentObj.SHIPTRACK = data.SHIPTRACK;
                currentObj.SNAPSHOT = data.SNAPSHOT;
                currentObj.TRANDASH = data.TRANDASH;
                currentObj.TRUCKPORT = data.TRUCKPORT;
                currentObj.USP = data.USP;
                currentObj.WAREWITH = data.WAREWITH;
                console.log(currentObj);
                dispatch(updateUser(currentObj));
            }else{
                dispatch(postUser({
                    userID: usersList.length + 1, userLogin: `User ${usersList.length + 1}`, emailAddress: `user${usersList.length + 1}@gmail.com`, programsToAccess: 35,
                    AGENTBOOK: data.AGENTBOOK,
                    AGENTTEMP: data.AGENTTEMP,
                    AMAZFBA: data.AMAZFBA,
                    ARSTMT: data.ARSTMT,
                    BKAPPCN: data.BKAPPCN,
                    BMM_NEW: data.BMM_NEW,
                    BOOKACTION: data.BOOKACTION,
                    BOOKAPP: data.BOOKAPP,
                    CAM_BULK: data.CAM_BULK,
                    CLASSAD: data.CLASSAD,
                    CUSTPROF: data.CUSTPROF,
                    DASHCNFR: data.DASHCNFR,
                    DASHCONT: data.DASHCONT,
                    DASHDOAU: data.DASHDOAU,
                    DASHMQC: data.DASHMQC,
                    DASHORDT: data.DASHORDT,
                    DASHPOM: data.DASHPOM,
                    DASHSHIP: data.DASHSHIP,
                    DASHTEST: data.DASHTEST,
                    DASHTRAN: data.DASHTRAN,
                    EDASH: data.EDASH,
                    EXPBOOK: data.EXPBOOK,
                    EXPLIC: data.EXPLIC,
                    EXPTEMPL: data.EXPTEMPL,
                    EXPTRACK: data.EXPTRACK,
                    IMPPER: data.IMPPER,
                    ISFPORTAL: data.ISFPORTAL,
                    ISFTEMPL: data.ISFTEMPL,
                    IT: data.IT,
                    IT_CN: data.IT_CN,
                    LANDCOST: data.LANDCOST,
                    ONLINEPAY: data.ONLINEPAY,
                    PARTS: data.PARTS,
                    QUOTE: data.QUOTE,
                    REPORT: data.REPORT,
                    SAILADMIN: data.SAILADMIN,
                    SELECTSAIL: data.SELECTSAIL,
                    SHIPTRACK: data.SHIPTRACK,
                    SNAPSHOT: data.SNAPSHOT,
                    TRANDASH: data.TRANDASH,
                    TRUCKPORT: data.TRUCKPORT,
                    USP: data.USP,
                    WAREWITH: data.WAREWITH,
               }))
            }
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

                    <FormControlLabel control={<Checkbox name="AGENTBOOK" defaultChecked={user?.AGENTBOOK} onChange={(event) => setValue("AGENTBOOK", event.target.checked)} />} label="Agent Booking" sx={{ display: "block" }} />
                    <FormControlLabel control={<Checkbox name="AGENTTEMP" defaultChecked={user?.AGENTTEMP} onChange={(event) => setValue("AGENTBOOK", event.target.checked)} />} label="Agent Booking Templates" sx={{ display: "block" }} />
                    <FormControlLabel control={<Checkbox name="AMAZFBA" defaultChecked={user?.AMAZFBA} onChange={(event) => setValue("AMAZFBA", event.target.checked)} />} label="Amazon FBA Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="ARSTMT" defaultChecked={user?.ARSTMT} onChange={(event) => setValue("ARSTMT", event.target.checked)} />} label=" A/R Statements " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="BKAPPCN" defaultChecked={user?.BKAPPCN} onChange={(event) => setValue("BKAPPCN", event.target.checked)} />} label=" Booking Managment China " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="BMM_NEW" defaultChecked={user?.BMM_NEW} onChange={(event) => setValue("BMM_NEW", event.target.checked)} />} label=" Booking Management " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="BOOKACTION" defaultChecked={user?.BOOKACTION} onChange={(event) => setValue("BOOKACTION", event.target.checked)} />} label=" POM Booking Actions " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="BOOKAPP" defaultChecked={user?.BOOKAPP} onChange={(event) => setValue("BOOKAPP", event.target.checked)} />} label=" Booking Managment " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="CAM_BULK" defaultChecked={user?.CAM_BULK} onChange={(event) => setValue("CAM_BULK", event.target.checked)} />} label=" Bulk CAM Request Uploader " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="CLASSAD" defaultChecked={user?.CLASSAD} onChange={(event) => setValue("CLASSAD", event.target.checked)} />} label=" Classification Advisory " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="CUSTPROF" defaultChecked={user?.CUSTPROF} onChange={(event) => setValue("CUSTPROF", event.target.checked)} />} label=" Customer Profile " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHCNFR" defaultChecked={user?.DASHCNFR} onChange={(event) => setValue("DASHCNFR", event.target.checked)} />} label=" Dashboard - Container Forecast " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHCONT" defaultChecked={user?.DASHCONT} onChange={(event) => setValue("DASHCONT", event.target.checked)} />} label=" Dashboard Container" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHDOAU" defaultChecked={user?.DASHDOAU} onChange={(event) => setValue("DASHDOAU", event.target.checked)} />} label=" Dashboard - Document Audit" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHMQC" defaultChecked={user?.DASHMQC} onChange={(event) => setValue("DASHMQC", event.target.checked)} />} label=" Dashboard - MQC" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHORDT" defaultChecked={user?.DASHORDT} onChange={(event) => setValue("DASHORDT", event.target.checked)} />} label=" Dashboard - Origin/Destination" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHPOM" defaultChecked={user?.DASHPOM} onChange={(event) => setValue("DASHPOM", event.target.checked)} />} label=" Dashboard - POM" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHSHIP" defaultChecked={user?.DASHSHIP} onChange={(event) => setValue("DASHSHIP", event.target.checked)} />} label=" Shipment Dashboards" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHTEST" defaultChecked={user?.DASHTEST} onChange={(event) => setValue("DASHTEST", event.target.checked)} />} label=" Dashboard Test" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="DASHTRAN" defaultChecked={user?.DASHTRAN} onChange={(event) => setValue("DASHTRAN", event.target.checked)} />} label=" Transit Time Dashboard" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="EDASH" defaultChecked={user?.EDASH} onChange={(event) => setValue("EDASH", event.target.checked)} />} label=" Entry Dashboards" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="EXPBOOK" defaultChecked={user?.EXPBOOK} onChange={(event) => setValue("EXPBOOK", event.target.checked)} />} label=" Export Booking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="EXPLIC" defaultChecked={user?.EXPLIC} onChange={(event) => setValue("EXPLIC", event.target.checked)} />} label=" Export License Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="EXPTEMPL" defaultChecked={user?.EXPTEMPL} onChange={(event) => setValue("EXPTEMPL", event.target.checked)} />} label=" Export Templates" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="EXPTRACK" defaultChecked={user?.EXPTRACK} onChange={(event) => setValue("EXPTRACK", event.target.checked)} />} label=" Export Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="IMPPER" defaultChecked={user?.IMPPER} onChange={(event) => setValue("IMPPER", event.target.checked)} />} label=" Import Permit Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="ISFPORTAL" defaultChecked={user?.ISFPORTAL} onChange={(event) => setValue("ISFPORTAL", event.target.checked)} />} label=" ISF Filing Portal" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="ISFTEMPL" defaultChecked={user?.ISFTEMPL} onChange={(event) => setValue("ISFTEMPL", event.target.checked)} />} label=" ISF Templates" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="IT" defaultChecked={user?.IT} onChange={(event) => setValue("IT", event.target.checked)} />} label=" Import Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="IT_CN" defaultChecked={user?.IT_CN} onChange={(event) => setValue("IT_CN", event.target.checked)} />} label=" Import Tracking CN" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="LANDCOST" defaultChecked={user?.LANDCOST} onChange={(event) => setValue("LANDCOST", event.target.checked)} />} label=" Landed Cost" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="ONLINEPAY" defaultChecked={user?.ONLINEPAY} onChange={(event) => setValue("ONLINEPAY", event.target.checked)} />} label=" On-Line Payment" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="PARTS" defaultChecked={user?.PARTS} onChange={(event) => setValue("PARTS", event.target.checked)} />} label=" Parts Table" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="QUOTE" defaultChecked={user?.QUOTE} onChange={(event) => setValue("QUOTE", event.target.checked)} />} label=" Quote Book" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="REPORT" defaultChecked={user?.REPORT} onChange={(event) => setValue("REPORT", event.target.checked)} />} label=" Reports" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="SAILADMIN" defaultChecked={user?.SAILADMIN} onChange={(event) => setValue("SAILADMIN", event.target.checked)} />} label=" Sailing Schedule Maintenace" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="SELECTSAIL" defaultChecked={user?.SELECTSAIL} onChange={(event) => setValue("SELECTSAIL", event.target.checked)} />} label=" Select Sail Schedule " sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="SHIPTRACK" defaultChecked={user?.SHIPTRACK} onChange={(event) => setValue("SHIPTRACK", event.target.checked)} />} label=" Shipment Tracking" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="SNAPSHOT" defaultChecked={user?.SNAPSHOT} onChange={(event) => setValue("SNAPSHOT", event.target.checked)} />} label=" Snapshot" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="TRANDASH" defaultChecked={user?.TRANDASH} onChange={(event) => setValue("TRANDASH", event.target.checked)} />} label=" Transportation Dashboards" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="TRUCKPORT" defaultChecked={user?.TRUCKPORT} onChange={(event) => setValue("TRUCKPORT", event.target.checked)} />} label=" Trucker Portal" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="USP" defaultChecked={user?.USP} onChange={(event) => setValue("USP", event.target.checked)} />} label=" Parts Table" sx={{ display: "block" }} />

                    <FormControlLabel control={<Checkbox name="WAREWITH" defaultChecked={user?.WAREWITH} onChange={(event) => setValue("WAREWITH", event.target.checked)} />} label=" Warehouse Withdrawals" sx={{ display: "block" }} />



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
