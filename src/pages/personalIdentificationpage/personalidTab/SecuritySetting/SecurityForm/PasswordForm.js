import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import "./user.scss";
import { RiCloseCircleLine } from "react-icons/ri";

const signInSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current Password is required"),
  newPassword: Yup.string().required("New Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is required"),
});

const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const PasswordForm = (props) => {
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
                    <label htmlFor="currentPassword">Current Password</label>
                    <Field
                      type="text"
                      name="currentPassword"
                      id="currentPassword"
                      className={
                        errors.currentPassword && touched.currentPassword
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="currentPassword"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="newPassword">New Password</label>
                    <Field
                      type="text"
                      name="newPassword"
                      id="newPassword"
                      className={
                        errors.newPassword && touched.newPassword
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="newPassword"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      type="text"
                      name="confirmPassword"
                      id="confirmPassword"
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="span"
                      className="error"
                    />
                  </div>
               
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default PasswordForm;
