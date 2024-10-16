import React, { useState } from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { publicRequest } from "../RequestApiCalls/Request";
import { Spinner } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { ContactValidation } from "../validationSchemas/ContactValidation";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };

  const { values, errors, handleChange, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: ContactValidation,
      onSubmit: (values, action) => {
        // console.log(values);
        setIsLoading(true); // Show the loader
        // Make a POST request to the server
        publicRequest
          .post("/contact/sendmail", values)
          .then((response) => {
            //console.log(response.data); // Log the response from the server
            setIsLoading(false); // Hide the loader

            // If the form submission is successful
            toast.success(response.data.message);
          })
          .catch((error) => {
            // If the form submission is unsuccessful
            toast.error(error.response.data.message);
            setIsLoading(false); // Hide the loader
          })
          .finally(() => {
            setIsLoading(false); // Hide the loader
            action.resetForm();
          });
      },
    });

  return (
    <div className="relative isolate flex flex-col w-[95%]">
      {/* <p className="uppercase p-16 text-gray-400 xsm:tracking-[0.7em] sm:tracking-[0.8em] mx-auto xsm:mt-6"> */}
      <p className="uppercase p-9 sm:text-2xl font-bold text-gray-400 xsm:tracking-[0.7em] sm:tracking-[0.3em] xsm:pt-12  xsm:mt-12 mx-auto text-center">
        Contact
      </p>
      <div className=" mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 ">
        <form
          onSubmit={handleSubmit}
          className="px-6 pb-24 sm:pb-32 lg:px-8 lg:py-12"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name ? (
                    <p className="text-sm mt-1 form-error">{errors.name}</p>
                  ) : null}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    // type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? (
                    <p className="text-sm mt-1 form-error">{errors.email}</p>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="off"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.subject && errors.subject ? (
                    <p className="text-sm mt-1 form-error">{errors.subject}</p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.message && errors.message ? (
                    <p className="text-sm mt-1 form-error">{errors.message}</p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-md bg-[#1da1f2] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {isLoading ? <Spinner size="sm" /> : "Send"}
              </button>
            </div>
          </div>
        </form>
        <div className="relative px-6 pb-20 pt-24 xsm:pt-1 lg:static lg:px-8 lg:py-12">
          <div className="mx-auto max-w-xl lg:mx-0 pt-8  ">
            <h2 className="sm:text-xl xsm:text-lg md:text-3xl font-bold tracking-tight text-white">
              Get in touch
            </h2>
            <p className="mt-6 sm:text-base xsm:text-sm md:text-lg leading-8 text-gray-300 ">
              I'm just a click away, ready to communicate, Feel free to drop a
              line, I'll appreciate! Contact me here, let's start a
              conversation, I look forward to hearing from you, with
              anticipation!
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-white sm:text-base xsm:text-sm md:text-lg"
                    href="tel:+92 (315) 068-3895"
                  >
                    +92 (322) 475-3237
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-white"
                    href="mailto:arshannawaz.dev@gmail.com"
                  >
                    zohiabmalik02000@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
