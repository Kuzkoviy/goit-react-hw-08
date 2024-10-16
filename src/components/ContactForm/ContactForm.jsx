import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import clsx from "clsx";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ContactForm() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Max symbols 50!")
      .required("This field is required!"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Phone number must be in the format 227-91-26"
      )
      .required("This field is required!")
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
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
          <ErrorMessage
            className={clsx(css.error, "MuiTypography-root")}
            name="name"
            component="span"
          />
        </Box>
        <Box className={css.field}>
          <Typography component="label" htmlFor={`number-${fieldId}`}>
            Phone Number
          </Typography>
          <Field
            type="text"
            id={`number-${fieldId}`}
            name="number"
            className={css.input}
          />
          <ErrorMessage
            className={clsx(css.error, "MuiTypography-root")}
            name="number"
            component="span"
          />
        </Box>
        <Button type="submit" variant="contained" className={css.button}>
          Add contact
        </Button>
      </Form>
    </Formik>
  );
}