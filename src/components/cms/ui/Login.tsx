import { FormikErrors, FormikProps, useFormik } from "formik";
import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { LoginModel } from "../../../app/models";
import * as Yup from "yup";
import { login } from "../../../app/slice/portfolioSlice";

const formValidation = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const dispatch = useAppDispatch();

  const formik: FormikProps<LoginModel> = useFormik<LoginModel>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: formValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(login(values));
      resetForm();
    },
  });

  return (
    <div className="dark:bg-customDark dark:text-white h-screen w-full px-10 flex justify-center items-center">
      <div className="h-[60%] w-full rounded-lg flex flex-col gap-2">
        <h1 className="font-semibold w-full flex justify-center">LOGIN YO!</h1>
        <div className={`w-full flex flex-col`}>
          <input
            id="username"
            name="username"
            type="text"
            onChange={
              formik.values.username! !== undefined
                ? formik.handleChange(`username`)
                : formik.handleChange(``)
            }
            value={
              formik.values.username! !== undefined &&
              formik.values.username! !== null
                ? formik.values.username!!
                : ""
            }
            className={`w-full h-full border-2 border-opacity-50 dark:border-white border-black bg-transparent text-base rounded-md px-2 py-2 mx-auto ${
              formik.errors.username! !== undefined
                ? formik.errors.username!
                  ? "border-red-500 border-2 border-opacity-100 mb-0"
                  : ""
                : ""
            }`}
            placeholder="Username"
          />
          {formik.errors.username! !== undefined ? (
            formik.errors.username! && (
              <div className="text-sm italic text-red-500">
                {(formik.errors as FormikErrors<LoginModel>).username}
              </div>
            )
          ) : (
            <></>
          )}
        </div>
        <div className={`w-full flex flex-col`}>
          <input
            id="password"
            name="password"
            type="password"
            onChange={
              formik.values.password! !== undefined
                ? formik.handleChange(`password`)
                : formik.handleChange(``)
            }
            value={
              formik.values.password! !== undefined &&
              formik.values.password! !== null
                ? formik.values.password!!
                : ""
            }
            className={`w-full h-full border-2 border-opacity-50 dark:border-white border-black bg-transparent text-base rounded-md px-2 py-2 mx-auto ${
              formik.errors.password! !== undefined
                ? formik.errors.password!
                  ? "border-red-500 border-2 border-opacity-100 mb-0"
                  : ""
                : ""
            }`}
            placeholder="Password"
          />
          {formik.errors.password! !== undefined ? (
            formik.errors.password! && (
              <div className="text-sm italic text-red-500">
                {(formik.errors as FormikErrors<LoginModel>).password}
              </div>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="py-2 px-5 rounded-lg bg-transparent dark:border-white"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
