/** @format */

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Register() {
  let navigate = useNavigate();
  const [errorMessage, seterrorMessage] = useState("");
  const [loaderstate, setloaderstate] = useState(false);
  //APIS
  async function callRegister(reqbody) {
    setloaderstate(true)
    seterrorMessage("");
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, reqbody)
      .catch((err) => {setloaderstate(false)
        seterrorMessage(err.response.data.message)});
    if (data.message === "success") {
      setloaderstate(false);
      navigate("/login");
    }
  }
  // validation
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "name is too short")
      .max(20, "name is too long")
      .required("name is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{6,10}$/,
        "password must start with upperCase then from 6 to 10 numbers or characters"
      )
      .required("Password is Required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "RePassword Must Match Password")
      .required("Password is Required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Invalid phone number")
      .required("phone is required"),
  });
  //formik
  const registerForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: callRegister,
  });
  return (
        <>
      <Helmet>
        <title>Register</title>
      </Helmet>
    <section className="w-3/4 mx-auto">
      <h1 className="mb-10 text-xl font-bold">Register :</h1>
      <form onSubmit={registerForm.handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className=" label">
            name:
          </label>
          <input
            id="name"
            type="text"
            className="input"
            value={registerForm.values.name}
            name="name"
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          {registerForm.errors.name && registerForm.touched.name ? (
            <p className="bg-red-500 w-2/5 rounded my-3 ps-3 py-1 text-gray-200">
              {registerForm.errors.name}
            </p>
          ) : null}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="label">
            email:
          </label>
          <input
            type="email"
            className="input"
            id="email"
            value={registerForm.values.email}
            name="email"
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          {registerForm.errors.email && registerForm.touched.email ? (
            <p className="bg-red-500 w-2/5 rounded my-3 ps-3 py-1 text-gray-200">
              {registerForm.errors.email}
            </p>
          ) : null}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="label">
            password:
          </label>
          <input
            type="password"
            className="input"
            id="password"
            value={registerForm.values.password}
            name="password"
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          {registerForm.errors.password && registerForm.touched.password ? (
            <p className="bg-red-500 w-2/5 rounded my-3 ps-3 py-1 text-gray-200">
              {registerForm.errors.password}
            </p>
          ) : null}
        </div>
        <div className="mb-6">
          <label htmlFor="rePassword" className="label">
            rePassword:
          </label>
          <input
            type="password"
            className="input"
            id="rePassword"
            value={registerForm.values.rePassword}
            name="rePassword"
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          {registerForm.errors.rePassword && registerForm.touched.rePassword ? (
            <p className="bg-red-500 w-2/5 rounded my-3 ps-3 py-1 text-gray-200">
              {registerForm.errors.rePassword}
            </p>
          ) : null}
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="label">
            phone:
          </label>
          <input
            type="tel"
            className="input"
            id="phone"
            value={registerForm.values.phone}
            name="phone"
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          {registerForm.errors.phone && registerForm.touched.phone ? (
            <p className="bg-red-500 w-2/5 rounded my-3 ps-3 py-1 text-gray-200">
              {registerForm.errors.phone}
            </p>
          ) : null}
        </div>
        {errorMessage ? (
          <div className="mb-6">
            <p className="text-center text-red-900 font-bold text-lg capitalize">
              {errorMessage}
            </p>
          </div>
        ) : null}
        <button
          type="submit"
          className="btn-main"
          disabled={
            !registerForm.isValid ||
            !registerForm.dirty
          }
        >
          {loaderstate ? (
            <>
              {" "}
              <i className="fas fa-spinner fa-spin"></i>
              Register
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </section>
    </>
  );
}
