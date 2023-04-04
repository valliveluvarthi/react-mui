import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  article: {
    articleID: "",
    category: "",
    name: "",
    codeLoc: "",
    appCode: "",
    popup: "",
    bootstrap: "",
    catSeq: "",
    pageSeq: "",
    newModal: "",
  },
  currentArticleID: null,
  articlesList: [
    {
      articleID: "AR1",
      category: "Category 1",
      name: "Article 1",
      codeLoc: "./",
      appCode: "ARCODE1",
      popup: "Popup 1",
      bootstrap: "",
      catSeq: "1",
      pageSeq: "1",
      newModal: "",
    },
    {
      articleID: "AR2",
      category: "Category 2",
      name: "Article 2",
      codeLoc: "./",
      appCode: "ARCODE2",
      popup: "Popup 2",
      bootstrap: "",
      catSeq: "2",
      pageSeq: "2",
      newModal: "",
    },
  ],
};

const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET EVENTS
    getArticleSuccess(state, action) {
      state.isLoading = false;
      state.article = action.payload;
      state.currentArticleID = action.payload.articleID;
    },
    postArticleSuccess(state, action) {
      state.isLoading = false;
      state.articlesList.push(action.payload);
      state.currentArticleID = action.payload.articleID;
      state.article = initialState.article;
    },
    updateArticleSuccess(state, action) {
      state.isLoading = false;
      const index = state.articlesList?.findIndex((col) => col.articleID === action.payload.articleID);
      if (index > 0 || index === 0) {
        state.articlesList.splice(index, 1);
      }
      state.articlesList.push(action.payload);
      state.article = initialState.article;
    },
    deleteArticleSuccess(state, action) {
      state.isLoading = false;
      const index = state.articlesList?.findIndex((col) => col.articleID === action.payload);
      if (index > 0 || index === 0) {
        state.articlesList.splice(index, 1);
      }
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getArticle(articleObj) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      dispatch(slice.actions.getArticleSuccess(articleObj));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function postArticle(articleObj) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      dispatch(slice.actions.postArticleSuccess(articleObj));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function updateArticle(articleObj) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      dispatch(slice.actions.updateArticleSuccess(articleObj));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function clearArticle(articleObj) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      dispatch(slice.actions.getArticleSuccess(articleObj));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function deleteArticle(articleObjID) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      dispatch(slice.actions.deleteArticleSuccess(articleObjID));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------
