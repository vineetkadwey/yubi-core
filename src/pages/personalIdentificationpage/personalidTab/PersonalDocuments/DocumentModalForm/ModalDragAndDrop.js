import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import "./user.scss";
import { RiCloseCircleLine } from "react-icons/ri";
import DropzoneAreaExample from "./DropzoneAreaExample";

const signInSchema = Yup.object().shape({
  DocumentName: Yup.string().required("Document Name is required"),
  SelectFile: Yup.string().required(" SelectFile is required"),
  ExpirationDate: Yup.string().required(" Expiration Date is required"),
});

const initialValues = {
  DocumentName: "",
  SelectFile: "",
  ExpirationDate: "",
};

const ModalDragAndDrop = (props) => {
  const onContinueButton = (values) => {
    console.log(values);
    props.handleNext();
    console.log("submit");
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={onContinueButton}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <Form>
              <div className="form-row">
                <label htmlFor="DocumentName">Document name</label>
                <Field style={{borderRadius: '0', padding: "10px"
 }}
                  type="text"
                  name="DocumentName"
                  id="DocumentName"
                  className={
                    errors.DocumentName && touched.DocumentName
                      ? "input-error"
                      : null
                  }
                />
                <ErrorMessage
                  name="DocumentName"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <label htmlFor="SelectFile">Select Document Type</label>
                {/* <Field
                      type="text"
                      name="SelectFile"
                      id="SelectFile"
                      className={
                        errors.SelectFile && touched.SelectFile
                          ? "input-error"
                          : null
                      }
                    /> */}

                <Field  style={{borderRadius: '0', padding: "10px" }}
                  name="color"
                 
                  as="select"
                  id="SelectFile" 
                  className={
                    errors.SelectFile && touched.SelectFile
                      ? "input-error"
                      : null
                  }
                >
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
                <ErrorMessage
                  name="SelectFile"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <label htmlFor="ExpirationDate">Expiration Date</label>
                <Field style={{borderRadius: '0', padding: "10px"}}
                  type="date"
                  name="ExpirationDate"
                  id="ExpirationDate"
                  className={
                    errors.ExpirationDate && touched.ExpirationDate
                      ? "input-error"
                      : null
                  }
                />
                <ErrorMessage
                  name="ExpirationDate"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
              <DropzoneAreaExample/>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default ModalDragAndDrop;
