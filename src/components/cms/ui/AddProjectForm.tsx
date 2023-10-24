import React from "react";

const AddProjectForm = () => {
  return <div>AddProjectForm</div>;
};

export default AddProjectForm;

// import { FormikErrors, FormikProps, useFormik } from "formik";
// import React from "react";
// import * as Yup from "yup";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import {
//   setExternalURLCount,
//   setGithubURLCount,
//   setTechStackCount,
// } from "../../../app/slice/uiStateSlice";
// import { useAppDispatch, useAppSelector } from "../../../app/hooks";
// import { RootState } from "../../../app/store";
// import SingleTextInput from "./custom/SingleTextInput";
// import { addProject } from "../../../app/slice/portfolioSlice";

// const formValidation = Yup.object().shape({
//   header: Yup.string().required("Required"),
//   description: Yup.string().required("Required"),
// });

// const AddProjectForm: React.FC = () => {
//   const dispatch = useAppDispatch();

//   const uiControlstate = useAppSelector((state: RootState) => state.uiState);

//   const formik: FormikProps<NewProjectModel> = useFormik<NewProjectModel>({
//     initialValues: {
//       header: "",
//       description: "",
//       externalURL: [""],
//       githubURL: [""],
//       imageURL: "",
//       image: null,
//       techStacks: [""],
//     },
//     validationSchema: formValidation,
//     onSubmit: (values, { resetForm }) => {
//       console.log(values);
//       dispatch(addProject(values));
//       // resetForm();
//     },
//   });

//   const handleAddGitHubURL = () => {
//     formik.values.githubURL!.push("");
//     dispatch(setGithubURLCount(uiControlstate.githubURLCount + 1));
//   };

//   const handleAddExternalURL = () => {
//     formik.values.externalURL!.push("");
//     dispatch(setExternalURLCount(uiControlstate.externalURLCount + 1));
//   };

//   const handleAddTechStack = () => {
//     formik.values.techStacks!.push("");
//     dispatch(setTechStackCount(uiControlstate.techStackCount + 1));
//   };

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const file = e.target.files![0];
//     formik.values.image = file;
//   };
//   return (
//     <div className="h-full w-full flex justify-center items-center flex-col">
//       <div className="h-[80%] w-full rounded-lg overflow-y-auto flex flex-col gap-2">
//         <div className="w-full h-fit flex flex-col">
//           <input
//             id="header"
//             name="header"
//             type="text"
//             onChange={
//               formik.values.header !== undefined
//                 ? formik.handleChange(`header`)
//                 : formik.handleChange(``)
//             }
//             value={
//               formik.values.header !== undefined &&
//               formik.values.header !== null
//                 ? formik.values.header
//                 : ""
//             }
//             className={`w-full h-full border-2 border-opacity-50 border-black dark:border-white dark:bg-customDark bg-white text-base rounded-lg px-2 py-2 mx-auto ${
//               formik.errors.header !== undefined
//                 ? formik.errors.header
//                   ? "border-red-500 border-2 border-opacity-100 mb-0"
//                   : ""
//                 : ""
//             }`}
//             placeholder={"Header"}
//           />
//           {formik.errors.header !== undefined ? (
//             formik.errors.header && (
//               <div className="text-sm italic text-red-500">
//                 {(formik.errors as FormikErrors<NewProjectModel>).header}
//               </div>
//             )
//           ) : (
//             <></>
//           )}
//         </div>
//         <div className="w-full h-[30%] flex flex-col">
//           <textarea
//             id="description"
//             name="description"
//             onChange={
//               formik.values.description !== undefined
//                 ? formik.handleChange(`description`)
//                 : formik.handleChange(``)
//             }
//             value={
//               formik.values.description !== undefined &&
//               formik.values.description !== null
//                 ? formik.values.description
//                 : ""
//             }
//             className={`w-full h-full border-2 border-opacity-50 border-black dark:border-white dark:bg-customDark bg-white text-base rounded-lg px-2 py-2 mx-auto ${
//               formik.errors.description !== undefined
//                 ? formik.errors.description
//                   ? "border-red-500 border-2 border-opacity-100 mb-0"
//                   : ""
//                 : ""
//             }`}
//             placeholder={"Description"}
//           />
//           {formik.errors.description !== undefined ? (
//             formik.errors.description && (
//               <div className="text-sm italic text-red-500">
//                 {(formik.errors as FormikErrors<NewProjectModel>).description}
//               </div>
//             )
//           ) : (
//             <></>
//           )}
//         </div>
//         <div className="flex flex-col space-y-1">
//           <label>Image</label>
//           <input
//             className="h-fit"
//             name="file"
//             type="file"
//             accept="image/*"
//             onChange={(e) => handleImageUpload(e)}
//             // onChange={
//             //   formik.values.image !== undefined
//             //     ? formik.handleChange(`image`)
//             //     : formik.handleChange(``)
//             // }
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <label>Github URL(s)</label>
//           <SingleTextInput type="github" isDefault={true} formik={formik} />
//           <div className="flex flex-col w-full gap-2">
//             {formik.values.githubURL!.map((_, index: number) => {
//               if (index + 1 === 1) return;
//               else {
//                 return (
//                   <SingleTextInput
//                     key={`github${index}`}
//                     onDelete={() => {
//                       dispatch(
//                         setGithubURLCount(uiControlstate.githubURLCount - 1)
//                       );
//                       formik.values.githubURL = formik.values.githubURL!.filter(
//                         (x, idx) => index !== idx
//                       );
//                     }}
//                     index={index}
//                     formik={formik}
//                     type={"github"}
//                   />
//                 );
//               }
//             })}
//           </div>
//           <div className="flex justify-center">
//             <button
//               className="flex px-5 py-2 rounded-full dark:bg-transparent dark:border-white dark:border-thin"
//               onClick={() => handleAddGitHubURL()}
//             >
//               <h1>one more url...</h1>
//               <IoIosAddCircleOutline />
//             </button>
//           </div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <label>External URL(s)</label>
//           <SingleTextInput
//             type="externalURL"
//             isDefault={true}
//             formik={formik}
//           />
//           <div className="flex flex-col w-full gap-2">
//             {formik.values.externalURL!.map((_, index) => {
//               if (index + 1 === 1) return;
//               else {
//                 return (
//                   <SingleTextInput
//                     key={`externalURL${index}`}
//                     onDelete={() => {
//                       dispatch(
//                         setExternalURLCount(uiControlstate.externalURLCount - 1)
//                       );
//                       formik.values.externalURL =
//                         formik.values.externalURL!.filter(
//                           (x, idx) => index !== idx
//                         );
//                     }}
//                     index={index}
//                     formik={formik}
//                     type={"externalURL"}
//                   />
//                 );
//               }
//             })}
//           </div>
//           <div className="flex justify-center">
//             <button
//               className="flex px-5 py-2 rounded-full dark:bg-transparent dark:border-white dark:border-thin"
//               onClick={() => handleAddExternalURL()}
//             >
//               <h1>one more url...</h1>
//               <IoIosAddCircleOutline />
//             </button>
//           </div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <label>Tech Stack(s)</label>
//           <SingleTextInput type="techStacks" isDefault={true} formik={formik} />
//           <div className="flex flex-col w-full gap-2">
//             {formik.values.techStacks!.map((_, index: number) => {
//               if (index + 1 === 1) return;
//               else {
//                 return (
//                   <SingleTextInput
//                     key={`techStacks${index}`}
//                     onDelete={() => {
//                       dispatch(
//                         setTechStackCount(uiControlstate.techStackCount - 1)
//                       );
//                       formik.values.techStacks =
//                         formik.values.techStacks!.filter(
//                           (_, idx: number) => index !== idx
//                         );
//                     }}
//                     index={index}
//                     formik={formik}
//                     type={"techstack"}
//                   />
//                 );
//               }
//             })}
//           </div>
//           <div className="flex justify-center">
//             <button
//               className="flex px-5 py-2 rounded-full dark:bg-transparent dark:border-white dark:border-thin gap-2"
//               onClick={() => handleAddTechStack()}
//             >
//               <h1>one more tech stack</h1>
//               <IoIosAddCircleOutline />
//             </button>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="py-2 rounded-lg bg-transparent dark:border-white"
//           onClick={() => {
//             formik.handleSubmit();
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddProjectForm;
