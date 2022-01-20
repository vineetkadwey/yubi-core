import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import "./user.scss";
import { RiCloseCircleLine } from 'react-icons/ri'

const signInSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  middlename: Yup.string().required("Middle Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  secondlastname: Yup.string().required("Second Last Name is required"),
});

const initialValues = {
  firstname: "",
  middlename: "",
  lastname: "",
  secondlastname: "",
};

const PIdForm1 = (props) => {
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
                    <label htmlFor="firstname">First Name</label>
                    <Field
                      type="text"
                      name="firstname"
                      id="firstname"
                      className={
                        errors.firstname && touched.firstname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="firstname"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="middlename">Middle Name</label>
                    <Field
                      type="text"
                      name="middlename"
                      id="middlename"
                      className={
                        errors.middlename && touched.middlename
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="middlename"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="lastname">Last Name</label>
                    <Field
                      type="text"
                      name="lastname"
                      id="lastname"
                      className={
                        errors.lastname && touched.lastname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="lastname"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="secondlastname">Second Last Name</label>
                    <Field
                      type="text"
                      name="secondlastname"
                      id="secondlastname"
                      className={
                        errors.secondlastname && touched.secondlastname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="secondlastname"
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

export default PIdForm1;
