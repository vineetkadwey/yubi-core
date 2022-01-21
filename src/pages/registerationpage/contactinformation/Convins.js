import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Checkbox, Link, Button, Typography, Box } from "@mui/material";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import axios from "axios";

// import "./user.scss";
import "./contactform.scss";
// const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const signInSchema = Yup.object().shape({
 
  email: Yup.string().email().required("Email is required"),
  phoneNumber: Yup.string().required("Last Name is required"),
  // phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone is required"),
  password: Yup.string()
  .required("Password is required")
  .min(4, "Password is too short - should be 4 chars min"),
confirmPassword: Yup.string()
   .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const initialValues = {
 
 email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

export const Convins = (props) => {
  const onContinueButton = (values) => {


    axios
    .post("http://localhost:5000/api/auth/register", {
     values
    })
    .then((response) => {
      console.log("response", response);
      localStorage.setItem(
        "login",
        JSON.stringify({
          userLogin: true,
          token: response.data.access_token,
        })
      );
     
    })
    console.log(values);
    props.handleNext();
   console.log("vineetra");
  };
  const [value, setValue] = useState("");

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
                    <label htmlFor="firstname">email</label>
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      className={
                        errors.email && touched.email
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                {/* <Grid item xs={12} md={6}>
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
                </Grid> */}
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <Field
                    //  country={"us"}
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formik.values.phoneNumber}
                      className={
                        errors.phoneNumber && touched.phoneNumber
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                {/* <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <PhoneInput
                      country={"us"}
                      // className="marginBottom"
                      value={initialValues.value}
                      onChange={setValue}
                      className={
                        errors.phoneNumber && touched.phoneNumber
                          ? "input-error"
                          : null
                      }
                    />
                     <ErrorMessage
                      name="phoneNumber"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>   */}
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={
                        errors.password && touched.password
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
               <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="password">Confirm Password</label>
                    <Field
                      type="password"
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
                </Grid> 
              </Grid>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  className="lightblue_btn"
                >
                  Continue
                </Button>
              </Box>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
