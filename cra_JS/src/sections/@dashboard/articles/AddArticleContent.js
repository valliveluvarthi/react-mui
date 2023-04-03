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
import { useSettingsContext } from '../../../components/settings';
import FormProvider, {
    RHFTextField,
} from '../../../components/hook-form';
import Iconify from '../../../components/iconify';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { postArticle, updateArticle, clearArticle } from '../../../redux/slices/articles';

// ----------------------------------------------------------------------
export default function AddUserContent() {
    const { themeStretch } = useSettingsContext();
    const dispatch = useDispatch();
    const location = useLocation();
    const { article, articlesList, currentArticleID } = useSelector((state) => state.article);
    useEffect(() => {
        if (location.pathname.includes("add")) {
            dispatch(clearArticle({
                articleID: "",
                category: "",
                name: "",
                code_loc: "",
                app_code: "",
                popup: "",
                bootstrap: "",
                cat_seq: "",
                page_seq: "",
                new_modal: "",
            }));
        }
    }, [location.pathname]);
    useEffect(() => {
        if (article && Object.keys(article)?.length > 0) {
            setValue("articleID", article.articleID);
            setValue("category", article.category);
            setValue("name", article.name);
            setValue("code_loc", article.code_loc);
            setValue("app_code", article.app_code);
            setValue("popup", article.popup);
            setValue("bootstrap", article.bootstrap);
            setValue("cat_seq", article.cat_seq);
            setValue("page_seq", article.page_seq);
            setValue("new_modal", article.new_modal);
        }
    }, [article]);
    const ArticleFormSchema = Yup.object().shape({
        articleID: Yup.string(),
        category: Yup.string(),
        name: Yup.string(),
        code_loc: Yup.string(),
        app_code: Yup.string(),
        popup: Yup.string(),
        bootstrap: Yup.string(),
        cat_seq: Yup.string(),
        page_seq: Yup.string(),
        new_modal: Yup.string(),
    });

    const defaultValues = {
        articleID : "",
        category: "",
        name: "",
        code_loc: "",
        app_code: "",
        popup: "",
        bootstrap: "",
        cat_seq: "",
        page_seq: "",
        new_modal: "",
    };
    const methods = useForm({
        resolver: yupResolver(ArticleFormSchema),
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
            if (currentArticleID) {
                const index = articlesList?.findIndex((col) => col.articleID === currentArticleID);
                const currentObj = { ...articlesList[index] };
                currentObj.articleID = data.articleID;
                currentObj.category = data.category;
                currentObj.name = data.name;
                currentObj.code_loc = data.code_loc;
                currentObj.app_code = data.app_code;
                currentObj.popup = data.popup;
                currentObj.bootstrap = data.bootstrap;
                currentObj.cat_seq = data.cat_seq;
                currentObj.page_seq = data.page_seq;
                currentObj.new_modal = data.new_modal;
                console.log(currentObj);
                dispatch(updateArticle(currentObj));
            } else {
                dispatch(postArticle({
                    articleID : `Article ${articlesList.length + 1}`,
                    category : data.category,
                    name : data.name,
                    code_loc : data.code_loc,
                    app_code : data.app_code,
                    popup : data.popup,
                    bootstrap : data.bootstrap,
                    cat_seq : data.cat_seq,
                    page_seq : data.page_seq,
                    new_modal : data.new_modal,
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
                <title> Add User Content | Shapiro 360</title>
            </Helmet>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ p: 2 }}>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Category </Typography>
                        <RHFTextField name="category" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Name </Typography>
                        <RHFTextField name="name" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Code Loc </Typography>
                        <RHFTextField name="code_loc" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> App Code </Typography>
                        <RHFTextField name="app_code" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Popup </Typography>
                        <RHFTextField name="popup" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Bootstrap </Typography>
                        <RHFTextField name="bootstrap" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Cat Seq </Typography>
                        <RHFTextField name="cat_seq" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> Page Seq </Typography>
                        <RHFTextField name="page_seq" label=""
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
                        <Typography variant='normal' sx={{ width: "33.333333%" }}> New Modal </Typography>
                        <RHFTextField name="new_modal" label=""
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
