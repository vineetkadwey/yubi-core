import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import "./user.scss";
import { RiCloseCircleLine } from "react-icons/ri";

const signInSchema = Yup.object().shape({
  governmentNumber: Yup.string().required("Government Identification Number is required"),
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  effectiveDate: Yup.string().required("Effective Date is required"),
  expirationDate: Yup.string().required("Expiration Date is required"),
});

const initialValues = {
  governmentNumber: "",
  dateOfBirth: "",
  effectiveDate: "",
  expirationDate: "",
};

const PIdForm3 = (props) => {
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
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="governmentNumber">Government Identification Number</label>
                    <Field
                      type="text"
                      name="governmentNumber"
                      id="governmentNumber"
                      className={
                        errors.governmentNumber && touched.governmentNumber
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="governmentNumber"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <Field
                      type="date"
                      name="dateOfBirth"
                      id="dateOfBirth"
                      className={
                        errors.dateOfBirth && touched.dateOfBirth
                          ? "input-error"
                          : null
                      }


                      
                    />
                    <ErrorMessage
                      name="dateOfBirth"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="effectiveDate">Effective Date</label>
                    <Field
                      type="date"
                      name="effectiveDate"
                      id="effectiveDate"
                      className={
                        errors.effectiveDate && touched.effectiveDate
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="effectiveDate"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="expirationDate">Expiration Date</label>
                    <Field
                      type="date"
                      name="expirationDate"
                      id="expirationDate"
                      className={
                        errors.expirationDate && touched.expirationDate
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="expirationDate"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
              </Grid>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default PIdForm3;
