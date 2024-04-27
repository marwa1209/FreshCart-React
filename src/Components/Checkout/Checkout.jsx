/** @format */

import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";
import { paymentContext } from "../../Context/payment";
import { useNavigate, useParams } from "react-router-dom";
export default function Checkout() {
  let navigate = useNavigate();
  let { pay } = useContext(paymentContext);
  let params = useParams();
  const [loaderstate, setloaderstate] = useState(false);
  async function checkOut(address) {
    setloaderstate(true);
    let data = await pay(address, params.id);
    console.log(data.data.session.url);
    if (data.data.status === "success") {
      setloaderstate(false);
      navigate(data.data.session.url);
    }
  }
  // validation
  const validationSchema = Yup.object({
    details: Yup.string()
      .min(10, "address details is too short")
      .max(60, "address details is too long")
      .required("address details is Required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Invalid phone number")
      .required("phone is required"),
    city: Yup.string()
      .min(4, "city is too short")
      .max(15, "city is too long")
      .required("city is Required"),
  });
  //formik
  const addressForm = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    validationSchema,
    onSubmit: checkOut,
  });
  return (
    <>
      <Helmet>
        <title>Check Out</title>
      </Helmet>
      <div className="container m-auto my-12 bg-light-color p-3">
        <h1 className="text-xl my-5"> Shipping Address</h1>
        <form onSubmit={addressForm.handleSubmit}>
          <div className="mb-6">
            <label htmlFor="details" className="label">
              Address details:
            </label>
            <textarea
              type="text"
              className="input"
              id="details"
              value={addressForm.values.details}
              name="details"
              onChange={addressForm.handleChange}
              onBlur={addressForm.handleBlur}
            ></textarea>
            {addressForm.errors.details && addressForm.touched.details ? (
              <p className="bg-red-500 w-2/5 rounded my-3 ps-3 py-1 text-gray-200">
                {addressForm.errors.details}
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
              value={addressForm.values.phone}
              name="phone"
              onChange={addressForm.handleChange}
              onBlur={addressForm.handleBlur}
            />
            {addressForm.errors.phone && addressForm.touched.phone ? (
              <p className="bg-red-500 w-2/5 rounded my-3 ps-3 py-1 text-gray-200">
                {addressForm.errors.phone}
              </p>
            ) : null}
          </div>
          <div className="mb-6">
            <label htmlFor="city" className="label">
              City:
            </label>
            <input
              type="text"
              className="input"
              id="city"
              value={addressForm.values.city}
              name="city"
              onChange={addressForm.handleChange}
              onBlur={addressForm.handleBlur}
            ></input>
            {addressForm.errors.city && addressForm.touched.city ? (
              <p className="bg-red-500 w-2/5 rounded my-3 ps-3 py-1 text-gray-200">
                {addressForm.errors.city}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn-main"
            disabled={!addressForm.isValid || !addressForm.dirty}
          >
            {loaderstate ? (
              <>
                {" "}
                <i className="fas fa-spinner fa-spin"></i>
                Pay Now
              </>
            ) : (
              "Pay Now"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
