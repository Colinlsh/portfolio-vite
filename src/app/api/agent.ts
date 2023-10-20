import axios, { AxiosResponse } from "axios";

// const getProjects = async () => {
//   // try {
//   // } catch (error) {}
// };

// const getResume = async () => {
//   try {
//   } catch (error) {}
// };

// const addImage = async () => {
//   // try {
//   // } catch (error) {
//   //   console.log("Error uploading file: ", error);
//   // }
// };

// const addProject = async () => {
//   // try {
//   // } catch (error) {}
// };

// const contactMe = async () => {
//   // try {
//   // } catch (error) {}
// };

// export const login = async () => {
//   // try {
//   // } catch (error) {
//   // }
// };

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
  //   postForm: (url: string, file: Blob) => {
  //     let formData = new FormData();
  //     formData.append("File", file);
  //     return axios
  //       .post(url, formData, {
  //         headers: { "Content-type": "multipart/form-data" },
  //       })
  //       .then(responseBody);
  //   },
};

const PortFolio = {
  getResume: (url: string) => requests.get(url),
  getProjects: (url: string) => requests.get(url),
};

export { PortFolio };
