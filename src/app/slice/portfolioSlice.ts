import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import {
  ContactMeModel,
  KeyValuePair,
  LoginModel,
  PortFolioState,
  ProjectModel,
  ResumeModel,
} from "../models";
import * as agent from "../api/agent";
import * as resumeData from "../../../public/resume.json";
import * as projectData from "../../../public/projects.json";
import { Message } from "yup";

// #region Async thunk
export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async () => {
    try {
      const mappedData: ProjectModel[] = projectData.projects;

      return {
        name: "projects",
        value: mappedData,
      };
    } catch (error) {
      return {
        name: "",
        value: [-1, (error as Error).name, (error as Error).message],
      } as KeyValuePair;
    }
  }
);

export const getResume = createAsyncThunk("projects/getResume", async () => {
  try {
    const mappedData: ResumeModel[] = resumeData.resume;

    return {
      name: "resume",
      value: mappedData,
    };
  } catch (error) {
    return {
      name: "",
      value: [-1, (error as Error).name, (error as Error).message],
    } as KeyValuePair;
  }
});

export const contactMe = createAsyncThunk(
  "portfolio/contactMe",
  async (contactMeModel: ContactMeModel) => {
    try {
      const response = await agent.contactMe({ ...contactMeModel } as Message);
      return {
        name: "contactMe",
        value: [response],
      };
    } catch (error) {
      return {
        name: "",
        value: [-1, (error as Error).name, (error as Error).message],
      } as KeyValuePair;
    }
    return "";
  }
);

export const addProject = createAsyncThunk(
  "portfolio/addProject",
  async (newProjectModel: NewProjectModel) => {
    try {
      let imageURL = "";

      // if (newProjectModel.image !== null) {
      //   imageURL = (await agent.addImage({
      //     name: newProjectModel.image!.name,
      //     extension: newProjectModel.image!.name.split(".")[1],
      //     file: newProjectModel.image!,
      //   }))!;
      // }

      // let response = await agent.addProject({
      //   header: newProjectModel.header,
      //   description: newProjectModel.description,
      //   githubURL: newProjectModel.githubURL,
      //   externalURL: newProjectModel.externalURL,
      //   imageURL: imageURL,
      // } as Project);

      // if (response !== -1) {
      //   let response2 = await agent.getProjects();
      //   return {
      //     name: "addProject",
      //     value: [response2],
      //   };
      // } else {
      //   return {
      //     name: "addProject",
      //     value: [response],
      //   };
      // }
    } catch (error) {
      return {
        name: "",
        value: [-1, (error as any).code, (error as any).message],
      } as KeyValuePair;
    }
  }
);

export const login = createAsyncThunk(
  "portfolio/login",
  async (loginModel: LoginModel) => {
    try {
      const response = await agent.login();

      return {
        name: "login",
        value: [response],
      };
    } catch (error) {
      return {
        name: "",
        value: [-1, (error as any).code, (error as any).message],
      } as KeyValuePair;
    }
  }
);

const portFolioSlice: Slice<
  PortFolioState,
  SliceCaseReducers<PortFolioState>,
  "projects"
> = createSlice({
  name: "projects",
  initialState: {
    projects: [
      {
        header: "",
        description: "",
      },
    ],
    resume: [] as ResumeModel[],
    contactMes: [] as ContactMeModel[],
  } as PortFolioState,
  reducers: {
    addContactMes: (state, action) => {
      state.contactMes = [...state.contactMes, action.payload];
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
  },
  extraReducers: (builder) => {
    builder.addCase(
      getResume.fulfilled,
      (state: PortFolioState, action: PayloadAction<KeyValuePair>) => {
        let { name, value } = action.payload;
        if (value[0] !== -1) {
          state.resume = value;
        } else {
          setErrorModal(value, state);
        }
      }
    );
    builder.addCase(
      getProjects.fulfilled,
      (state: PortFolioState, action: PayloadAction<KeyValuePair>) => {
        let { name, value } = action.payload;
        if (value[0] !== -1) {
          state.projects = value;
        } else {
          setErrorModal(value, state);
        }
      }
    );
    // builder.addCase(
    //   contactMe.fulfilled,
    //   (state: MainState, action: PayloadAction<KeyValuePair>) => {
    //     let { name, value } = action.payload;
    //     if (value[0] !== -1) {
    //     } else {
    //       setErrorModal(value, state);
    //     }
    //   }
    // );
    // builder.addCase(
    //   addProject.fulfilled,
    //   (state: MainState, action: PayloadAction<KeyValuePair>) => {
    //     let { name, value } = action.payload;
    //     if (value[0] !== -1) {
    //       state.projects = value[0];
    //     } else {
    //       setErrorModal(value, state);
    //     }
    //   }
    // );
    // builder.addCase(
    //   login.fulfilled,
    //   (state: MainState, action: PayloadAction<KeyValuePair>) => {
    //     let { name, value } = action.payload;
    //     if (value[0] !== -1) {
    //     } else {
    //       setErrorModal(value, state);
    //     }
    //   }
    // );
  },
});

const setErrorModal = (value, state: PortFolioState) => {
  state.modal.message = "";
  state.modal.header = value[value.length - 2];
  state.modal.message = value[value.length - 1];
  state.modal.isShow = true;
};

export const { addContactMes } = portFolioSlice.actions;

export default portFolioSlice.reducer;
