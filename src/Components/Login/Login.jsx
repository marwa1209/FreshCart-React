import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Login() {
  let navigate = useNavigate();
  const [errorMessage, seterrorMessage] = useState("");
  const [loaderstate, setloaderstate] = useState(false);
  //APIS
  async function callLogin(reqbody) {
    setloaderstate(true);
    seterrorMessage("");
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, reqbody)
      .catch((err) => {
        setloaderstate(false);
        seterrorMessage(err.response.data.message);
      });
    if (data.message === "success") {
      localStorage.setItem("userToken",data.token)
      setloaderstate(false);
      navigate("/home");
    }
  }
  // validation
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });
  //formik
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: callLogin,
  });
  return (
    <section className="w-3/4 mx-auto">
      <h1 className="mb-10 text-xl font-bold">Login :</h1>
      <form onSubmit={loginForm.handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="label">
            email:
          </label>
          <input
            type="email"
            className="input"
            id="email"
            value={loginForm.values.email}
            name="email"
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
          />
          {loginForm.errors.email && loginForm.touched.email ? (
            <p className="bg-red-500 w-2/5 rounded my-3 ps-3 py-1 text-gray-200">
              {loginForm.errors.email}
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
            value={loginForm.values.password}
            name="password"
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
          />
          {loginForm.errors.password && loginForm.touched.password ? (
            <p className="bg-red-500 w-2/5 rounded my-3 ps-3 py-1 text-gray-200">
              {loginForm.errors.password}
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
          disabled={!loginForm.isValid || !loginForm.dirty}
        >
          {loaderstate ? (
            <>
              {" "}
              <i className="fas fa-spinner fa-spin"></i>
              Login
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </section>
  );
}
