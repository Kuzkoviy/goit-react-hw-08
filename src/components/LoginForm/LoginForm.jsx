import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function LoginForm() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("This field is required!")
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
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
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </Box>
        <Button type="submit" variant="contained" className={css.button}>
          Login
        </Button>
      </Form>
    </Formik>
  );
}
