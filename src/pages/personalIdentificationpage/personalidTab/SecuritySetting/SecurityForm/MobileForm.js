import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import "./user.scss";
import { RiCloseCircleLine } from "react-icons/ri";

const signInSchema = Yup.object().shape({
  changeMobile: Yup.string().required("Mobile Phone is required"),
});

const initialValues = {
  changeMobile: "",
};

const MobileForm = (props) => {
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
                    <label htmlFor="changeMobile">Mobile Phone</label>
                    <Field
                      type="text"
                      name="changeMobile"
                      id="changeMobile"
                      className={
                        errors.changeMobile && touched.changeMobile
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="changeMobile"
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

export default MobileForm;
