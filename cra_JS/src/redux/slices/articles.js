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
    code_loc: "",
    app_code: "",
    popup: "",
    bootstrap: "",
    cat_seq: "",
    page_seq: "",
    new_modal: "",
  },
  currentArticleID: null,
  articlesList: [
    {
      articleID: "AR1",
      category: "Category 1",
      name: "Article 1",
      code_loc: "./",
      app_code: "ARCODE1",
      popup: "Popup 1",
      bootstrap: "",
      cat_seq: "1",
      page_seq: "1",
      new_modal: "",
    },
    {
      articleID: "AR2",
      category: "Category 2",
      name: "Article 2",
      code_loc: "./",
      app_code: "ARCODE2",
      popup: "Popup 2",
      bootstrap: "",
      cat_seq: "2",
      page_seq: "2",
      new_modal: "",
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
