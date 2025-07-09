"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HostelSchema = Yup.object().shape({
  name: Yup.string().required("Hostel name is required"),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string()
    .matches(/^[1-9][0-9]{5}$/, "Invalid pincode")
    .required("Pincode is required"),
  country: Yup.string().required("Country is required"),
});

export default function CreateHostelPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Create New Hostel
        </h2>

        <Formik
          initialValues={{
            name: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            pincode: "",
            country: "India",
          }}
          validationSchema={HostelSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await axios.post("/api/hostels/create", {
                ...values,
                ownerId: user._id,
              });

              resetForm();
              router.push("/dashboard/hostels");
            } catch (error: any) {
              alert(error.response?.data?.message || "Something went wrong.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Hostel Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Hostel Name
                </label>
                <Field name="name" className="input" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Address Line 1 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Address Line 1
                </label>
                <Field name="addressLine1" className="input" />
                <ErrorMessage
                  name="addressLine1"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Address Line 2 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Address Line 2
                </label>
                <Field name="addressLine2" className="input" />
                <ErrorMessage
                  name="addressLine2"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  City
                </label>
                <Field name="city" className="input" />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  State
                </label>
                <Field name="state" className="input" />
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Pincode
                </label>
                <Field name="pincode" className="input" />
                <ErrorMessage
                  name="pincode"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Country
                </label>
                <Field name="country" className="input" />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                {isSubmitting ? "Creating..." : "Create Hostel"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
