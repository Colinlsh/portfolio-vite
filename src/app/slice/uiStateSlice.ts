import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import { UIState } from "../models";

// #region Async thunk
// export const getProjects = createAsyncThunk(
//   "projects/getProjects",
//   async () => {
//     try {
//       const response = await agent.getProjects();

//       return {
//         name: "projects",
//         value: [response],
//       };
//     } catch (error) {
//       return {
//         name: "",
//         value: [-1, (error as any).code, (error as any).message],
//       } as KeyValuePair;
//     }
//   }
// );

const initialState = {
  modal: {
    header: "",
    message: "",
    isShow: false,
    isError: false,
    result: false,
    messageJSX: undefined,
  },
  carouselElementCount: 0,
  carouselPosition: 0,
  cookie: {
    isPersist: false,
    isCookieAnswered: false,
    cookieExpiry: 100000,
  },
  isCMS: false,
  githubURLCount: 0,
  externalURLCount: 0,
  techStackCount: 0,
} as UIState;

const uiStateSlice: Slice<
  UIState,
  SliceCaseReducers<UIState>,
  "uiState"
> = createSlice({
  name: "uiState",
  initialState: initialState,
  reducers: {
    setCarouselPosition: (state, action) => {
      if (action.payload >= state.carouselElementCount) {
        state.carouselPosition = 0;
      } else {
        state.carouselPosition = action.payload;
      }
    },
    setCarouselElementCount: (state, action) => {
      state.carouselElementCount = action.payload;
    },
    setIsPersist: (state, action) => {
      state.cookie.isPersist = action.payload;
      state.cookie.isCookieAnswered = true;
    },
    setIsCookiesAnswered: (state, action) => {
      state.cookie.isPersist = false;
      state.cookie.isCookieAnswered = false;
    },
    setModal: (state, action) => {
      const { header, message, yesCallback, noCallback, messageJSX } =
        action.payload;
      state.modal.isShow = true;
      state.modal.header = header;
      state.modal.message = message;
      state.modal.yesCallback = yesCallback;
      state.modal.noCallback = noCallback;
      state.modal.messageJSX = messageJSX;
    },
    setCloseModal: (state, action) => {
      state.modal.isShow = false;
      state.modal.isError = false;
    },
    resetState: (state, action) => {
      state = { ...initialState };
    },
    setIsCMS: (state, action) => {
      state.isCMS = action.payload;
    },
    setGithubURLCount: (state, action) => {
      state.githubURLCount = action.payload;
    },
    setExternalURLCount: (state, action) => {
      state.externalURLCount = action.payload;
    },
    setTechStackCount: (state, action) => {
      state.techStackCount = action.payload;
    },
    resetGithubExternalURLCount: (state, action) => {
      state.githubURLCount = 0;
      state.externalURLCount = 0;
      state.techStackCount = 0;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setModal,
  setCloseModal,
  setCarouselPosition,
  setCarouselElementCount,
  setIsPersist,
  setIsCookiesAnswered,
  resetState,
  setIsCMS,
  setGithubURLCount,
  setExternalURLCount,
  setTechStackCount,
  resetGithubExternalURLCount,
} = uiStateSlice.actions;

export default uiStateSlice.reducer;
