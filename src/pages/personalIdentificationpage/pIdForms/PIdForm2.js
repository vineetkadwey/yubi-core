import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { RiCloseCircleLine } from "react-icons/ri";

const signInSchema = Yup.object().shape({
  countryname: Yup.string().required("country Name is required"),
  cityname: Yup.string().required("City Name is required"),
  statename: Yup.string().required("State Name is required"),
  postalname: Yup.string().required("Postal Code is required"),
  address1name: Yup.string().required("Address Line1 is required"),
  address2name: Yup.string().required("Address Line2 Name is required"),
});

const initialValues = {
  countryname: "",
  cityname: "",
  statename: "",
  postalname: "",
  address1name: "",
  address2name: "",
};

const PIdForm2 = (props) => {
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
                    <label htmlFor="countryname">Country</label>
                    <Field
                      type="text"
                      name="countryname"
                      id="countryname"
                      className={
                        errors.countryname && touched.countryname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="countryname"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="statename">State</label>
                    <Field
                      type="text"
                      name="statename"
                      id="statename"
                      className={
                        errors.statename && touched.statename
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="statename"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="cityname">City</label>
                    <Field
                      type="text"
                      name="cityname"
                      id="cityname"
                      className={
                        errors.cityname && touched.cityname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="cityname"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="postalname">Postal Code</label>
                    <Field
                      type="text"
                      name="postalname"
                      id="postalname"
                      className={
                        errors.postalname && touched.postalname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="postalname"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="address1name">Address Line 1</label>
                    <Field
                      type="text"
                      name="address1name"
                      id="address1name"
                      className={
                        errors.address1name && touched.address1name
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="address1name"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="address2name">Address Line 2</label>
                    <Field
                      type="text"
                      name="address2name"
                      id="address2name"
                      className={
                        errors.address2name && touched.address2name
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="address2name"
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

export default PIdForm2;
