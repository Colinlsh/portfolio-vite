import React from "react";

const SingleTextInput = () => {
  return <div>SingleTextInput</div>;
};

export default SingleTextInput;

// import { FormikErrors, FormikProps } from "formik";
// import React from "react";
// import { IoIosRemoveCircleOutline } from "react-icons/io";

// interface SingleTextInputProps {
//   onDelete?: () => void;
//   formik: FormikProps<object>;
//   type: string;
//   index?: number;
//   isDefault?: boolean;
// }

// const SingleTextInput: React.FC<SingleTextInputProps> = ({
//   onDelete,
//   formik,
//   type,
//   index = 1,
//   isDefault = false,
// }) => {
//   return (
//     <div className="flex justify-center items-center gap-2">
//       {type === "github" ? (
//         <div className={`w-full flex `}>
//           <input
//             id="githubURL"
//             name="githubURL"
//             type="text"
//             onChange={
//               formik.values.githubURL![index] !== undefined
//                 ? formik.handleChange(`githubURL[${index}]`)
//                 : formik.handleChange(``)
//             }
//             value={
//               formik.values.githubURL![index] !== undefined &&
//               formik.values.githubURL![index] !== null
//                 ? formik.values.githubURL![index]!
//                 : ""
//             }
//             className={`w-full h-full border-2 border-opacity-50 dark:border-white border-black bg-transparent text-base rounded-md px-2 py-2 mx-auto ${
//               formik.errors.githubURL! !== undefined
//                 ? formik.errors.githubURL![index]
//                   ? "border-red-500 border-2 border-opacity-100 mb-0"
//                   : ""
//                 : ""
//             }`}
//             placeholder="Github URL"
//           />
//           {formik.errors.githubURL! !== undefined ? (
//             formik.errors.githubURL![index] && (
//               <div className="text-sm italic text-red-500">
//                 {
//                   (
//                     formik.errors.githubURL![
//                       index
//                     ] as FormikErrors<NewProjectModel>
//                   ).githubURL![index]
//                 }
//               </div>
//             )
//           ) : (
//             <></>
//           )}
//         </div>
//       ) : type === "externalURL" ? (
//         <div className={`w-full flex `}>
//           <input
//             id="externalURL"
//             name="externalURL"
//             type="text"
//             onChange={
//               formik.values.externalURL![index] !== undefined
//                 ? formik.handleChange(`externalURL[${index}]`)
//                 : formik.handleChange(``)
//             }
//             value={
//               formik.values.externalURL![index] !== undefined &&
//               formik.values.externalURL![index] !== null
//                 ? formik.values.externalURL![index]!
//                 : ""
//             }
//             className={`w-full h-full border-2 border-opacity-50 dark:border-white border-black bg-transparent text-base rounded-md px-2 py-2 mx-auto ${
//               formik.errors.externalURL! !== undefined
//                 ? formik.errors.externalURL![index]
//                   ? "border-red-500 border-2 border-opacity-100 mb-0"
//                   : ""
//                 : ""
//             }`}
//             placeholder="External URL"
//           />
//           {formik.errors.externalURL! !== undefined ? (
//             formik.errors.externalURL![index] && (
//               <div className="text-sm italic text-red-500">
//                 {
//                   (
//                     formik.errors.externalURL![
//                       index
//                     ] as FormikErrors<NewProjectModel>
//                   ).externalURL![index]
//                 }
//               </div>
//             )
//           ) : (
//             <></>
//           )}
//         </div>
//       ) : (
//         <div className={`w-full flex `}>
//           <input
//             id="techStacks"
//             name="techStacks"
//             type="text"
//             onChange={
//               formik.values.techStacks![index] !== undefined
//                 ? formik.handleChange(`techStacks[${index}]`)
//                 : formik.handleChange(``)
//             }
//             value={
//               formik.values.techStacks![index] !== undefined &&
//               formik.values.techStacks![index] !== null
//                 ? formik.values.techStacks![index]!
//                 : ""
//             }
//             className={`w-full h-full border-2 border-opacity-50 dark:border-white border-black bg-transparent text-base rounded-md px-2 py-2 mx-auto ${
//               formik.errors.techStacks! !== undefined
//                 ? formik.errors.techStacks![index]
//                   ? "border-red-500 border-2 border-opacity-100 mb-0"
//                   : ""
//                 : ""
//             }`}
//             placeholder="Tech Stack"
//           />
//           {formik.errors.techStacks! !== undefined ? (
//             formik.errors.techStacks![index] && (
//               <div className="text-sm italic text-red-500">
//                 {
//                   (
//                     formik.errors.techStacks![
//                       index
//                     ] as FormikErrors<NewProjectModel>
//                   ).techStacks![index]
//                 }
//               </div>
//             )
//           ) : (
//             <></>
//           )}
//         </div>
//       )}
//       {isDefault ? (
//         <></>
//       ) : (
//         <div className="flex items-center justify-center h-full">
//           <IoIosRemoveCircleOutline
//             size={20}
//             className="cursor-pointer"
//             onClick={onDelete}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default SingleTextInput;
