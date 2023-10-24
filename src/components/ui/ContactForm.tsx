import React from "react";

const ContactForm = () => {
  return <div>ContactForm</div>;
};

export default ContactForm;
// import { FormikErrors, FormikProps, useFormik } from "formik";
// import React from "react";
// import { ContactMeModel } from "../../app/models";
// import * as Yup from "yup";
// import Button from "./custom/Button";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { addContactMes, contactMe } from "../../app/slice/portfolioSlice";
// import { RootState } from "../../app/store";
// import { setModal } from "../../app/slice/uiStateSlice";

// const formValidation = Yup.object().shape({
//   name: Yup.string().min(2, "Too short").required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   subject: Yup.string().required("Required"),
//   message: Yup.string().required("Required"),
// });

// const ContactForm = () => {
//   const portFolioState = useAppSelector((state: RootState) => state.portFolio);
//   const dispatch = useAppDispatch();

//   const formik: FormikProps<ContactMeModel> = useFormik<ContactMeModel>({
//     initialValues: {
//       name: "",
//       subject: "",
//       email: "",
//       message: "",
//     },
//     validationSchema: formValidation,
//     onSubmit: (values, { resetForm }) => {
//       if (portFolioState.contactMes.length >= 2) {
//         dispatch(
//           setModal({
//             header: "Exceeded number of request",
//             message:
//               "Request received! Please wait 2 - 3 working days for a reply! Thank you!",
//           })
//         );
//       } else {
//         dispatch(contactMe(values));
//         dispatch(
//           setModal({
//             header: "Got your message!",
//             message:
//               "Request received! Please wait 2 - 3 working days for a reply! Thank you!",
//           })
//         );
//         dispatch(addContactMes(values));
//         resetForm();
//       }
//     },
//   });
//   return (
//     <div
//       id="contact"
//       className="w-full h-full justify-center px-20 md:px-60 flex flex-col space-y-2"
//     >
//       <h1 className="h-[10%] font-bold flex justify-center lg:text-2xl">
//         Need something? Hit me up!
//       </h1>
//       <div className="w-full flex space-x-2">
//         <div className="w-[50%] h-full flex flex-col">
//           <input
//             id="name"
//             name="name"
//             type="text"
//             onChange={
//               formik.values.name !== undefined
//                 ? formik.handleChange(`name`)
//                 : formik.handleChange(``)
//             }
//             value={formik.values.name !== undefined ? formik.values.name : ""}
//             className={`w-full h-full border-2 border-opacity-50 border-black dark:border-white dark:bg-customDark bg-white text-base rounded-lg px-2 py-2 mx-auto ${
//               formik.errors.name !== undefined
//                 ? formik.errors.name
//                   ? "border-red-500 border-2 border-opacity-100 mb-0"
//                   : ""
//                 : ""
//             }`}
//             placeholder={"Name"}
//           />
//           {formik.errors.name !== undefined ? (
//             formik.errors.name && (
//               <div className="text-sm italic text-red-500">
//                 {(formik.errors as FormikErrors<ContactMeModel>).name}
//               </div>
//             )
//           ) : (
//             <></>
//           )}
//         </div>
//         <div className="w-[50%] flex flex-col">
//           <input
//             id="email"
//             name="email"
//             type="email"
//             onChange={
//               formik.values.email !== undefined
//                 ? formik.handleChange(`email`)
//                 : formik.handleChange(``)
//             }
//             value={formik.values.email !== undefined ? formik.values.email : ""}
//             className={`w-full h-full border-2 border-opacity-50 border-black dark:border-white dark:bg-customDark bg-white text-base rounded-lg px-2 py-2 mx-auto ${
//               formik.errors.email !== undefined
//                 ? formik.errors.email
//                   ? "border-red-500 border-2 border-opacity-100 mb-0"
//                   : ""
//                 : ""
//             }`}
//             placeholder={"Email"}
//           />
//           {formik.errors.email !== undefined ? (
//             formik.errors.email && (
//               <div className="text-sm italic text-red-500">
//                 {(formik.errors as FormikErrors<ContactMeModel>).email}
//               </div>
//             )
//           ) : (
//             <></>
//           )}
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <input
//           id="subject"
//           name="subject"
//           type="text"
//           onChange={
//             formik.values.subject !== undefined
//               ? formik.handleChange(`subject`)
//               : formik.handleChange(``)
//           }
//           value={
//             formik.values.subject !== undefined ? formik.values.subject : ""
//           }
//           className={`w-full h-full border-2 border-opacity-50 border-black dark:border-white text-base rounded-lg px-2 py-2 mx-auto dark:bg-customDark bg-white ${
//             formik.errors.subject !== undefined
//               ? formik.errors.subject
//                 ? "border-red-500 border-2 border-opacity-100 mb-0"
//                 : ""
//               : ""
//           }`}
//           placeholder={"Subject"}
//         />
//         {formik.errors.subject !== undefined ? (
//           formik.errors.subject && (
//             <div className="text-sm italic text-red-500">
//               {(formik.errors as FormikErrors<ContactMeModel>).subject}
//             </div>
//           )
//         ) : (
//           <></>
//         )}
//       </div>
//       <div className="h-[50%] flex flex-col">
//         <textarea
//           id="message"
//           name="message"
//           onChange={
//             formik.values.message !== undefined
//               ? formik.handleChange(`message`)
//               : formik.handleChange(``)
//           }
//           value={
//             formik.values.message !== undefined ? formik.values.message : ""
//           }
//           className={`inline-block w-full h-full border-2 border-opacity-50 border-black dark:border-white dark:bg-customDark bg-white text-base rounded-lg px-2 py-2 mx-auto align-top ${
//             formik.errors.message !== undefined
//               ? formik.errors.message
//                 ? "border-red-500 border-2 border-opacity-100 mb-0"
//                 : ""
//               : ""
//           }`}
//           placeholder={"Message"}
//         />
//         {formik.errors.message !== undefined ? (
//           formik.errors.message && (
//             <div className="text-sm italic text-red-500">
//               {(formik.errors as FormikErrors<ContactMeModel>).message}
//             </div>
//           )
//         ) : (
//           <></>
//         )}
//       </div>
//       <Button
//         className="h-10 drop-shadow-lg bg-transparent dark:text-white text-customDark dark:border-white"
//         onClick={() => formik.handleSubmit()}
//         label={"Hit me up!"}
//       />
//     </div>
//   );
// };

// export default ContactForm;
