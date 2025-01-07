import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { FaBook } from "react-icons/fa6";

const HomeComp = () => {
  // Validation Schema
  const validationSchema = Yup.object({
    gstNo: Yup.string()
      .matches(/^\d{15}$/, "GST Number must be 15 characters")
      .required("GST Number is required"),
    name: Yup.string().required("Name is required"),
    printName: Yup.string().required("Print Name is required"),
    code: Yup.string().required("Code is required"),
    underLedger: Yup.string().required("Under Ledger is required"),
  });

  // Initial Values
  const initialValues = {
    gstNo: "",
    name: "",
    printName: "",
    identification: "",
    code: "",
    underLedger: "",
    vendorCommon: false,
    isSubVendor: false,
    firmStatus: "",
    territory: "",
    vendorCategory: "",
    contactPerson: "",
    registrationDate: "",
    gstCategory: "Registered",
    gstSuspend: false,
    cin: "",
  };

  // Handle Submit
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    alert("Form Submitted!");
  };

  return (
    <div className="w-full h-full p-4">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-1">
          <FaBook color="#2362df" />
          <h2 className="text-md font-semibold appColor">Basic</h2>
        </div>
        <BiSolidDownArrowCircle size={25} className="cursor-pointer" />
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      GST No
                    </label>
                    <Field
                      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[500px]"
                      name="gstNo"
                      type="text"
                    />
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div>
                      <Field
                        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[500px]"
                        name="name"
                        type="text"
                        required
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Print Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <Field
                      name="printName"
                      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[500px]"
                      type="text"
                    />
                    <ErrorMessage
                      name="printName"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Identification
                    </label>
                    <Field
                      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[500px]"
                      name="identification"
                      type="text"
                    />
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Code <span className="text-red-500 ml-1">*</span>
                    </label>
                    <Field
                      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[500px]"
                      name="code"
                      type="text"
                    />
                    <ErrorMessage
                      name="code"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Under Ledger <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div>
                      <Field
                        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[500px]"
                        name="underLedger"
                        as="select"
                      >
                        <option value="">Select...</option>
                        <option value="ledger1">Ledger 1</option>
                        <option value="ledger2">Ledger 2</option>
                      </Field>
                      <ErrorMessage
                        name="underLedger"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Vendor Common for Sales Purchase
                    </label>
                    <div>
                      <Field
                        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="vendorCommon"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Is Sub Vendor
                    </label>
                    <div>
                      <Field
                        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="isSubVendor"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Firm Status
                    </label>
                    <Field
                      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[500px]"
                      name="firmStatus"
                      as="select"
                    >
                      <option value="">None</option>
                      <option value="status1">Status 1</option>
                      <option value="status2">Status 2</option>
                    </Field>
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Territory
                    </label>
                    <Field
                      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[500px]"
                      name="territory"
                      as="select"
                    >
                      <option value="">Select...</option>
                      <option value="territory1">Territory 1</option>
                      <option value="territory2">Territory 2</option>
                    </Field>
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Vendor Category
                    </label>
                    <Field
                      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[500px]"
                      name="vendorCategory"
                      as="select"
                    >
                      <option value="">Select...</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                    </Field>
                  </div>
                  <div className="flex gap-[20rem] items-start justify-between">
                    <label className="flex items-center font-medium">
                      Contact Person
                    </label>
                    <Field
                      className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[500px]"
                      name="contactPerson"
                      type="text"
                    />
                  </div>
                </div>
                <div>Image</div>
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default HomeComp;
