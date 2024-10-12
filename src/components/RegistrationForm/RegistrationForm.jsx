import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function RegistrationForm() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Max symbols 50!")
      .required("This field is required!"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required!"),
    password: Yup.string()
      .min(15, "Password must be at least 15 characters long")
      .required("This field is required!")
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <Box className={css.field}>
          <Typography component="label" htmlFor={`name-${fieldId}`}>
            Name
          </Typography>
          <Field
            type="text"
            id={`name-${fieldId}`}
            name="name"
            className={css.input}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </Box>
        <Box className={css.field}>
          <Typography component="label" htmlFor={`email-${fieldId}`}>
            Email
          </Typography>
          <Field
            type="email"
            id={`email-${fieldId}`}
            name="email"
            className={css.input}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </Box>
        <Box className={css.field}>
          <Typography component="label" htmlFor={`password-${fieldId}`}>
            Password
          </Typography>
          <Field
            type="password"
            id={`password-${fieldId}`}
            name="password"
            className={css.input}
          />
          <span>Example: examplepwd12345</span>
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </Box>
        <Button type="submit" variant="contained" className={css.button}>
          Register
        </Button>
      </Form>
    </Formik>
  );
}
