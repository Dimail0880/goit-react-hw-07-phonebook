import React from "react";
import { Formik, ErrorMessage } from "formik";
import BasicFormSchema from "../../helpers/validation";
import styles from "./Form.module.css";

export default function FormFormik({ addItem }) {
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, { resetForm }) => {
    addItem({ ...values });
    resetForm({});
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BasicFormSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            name="name"
            className={styles.input}
            placeholder="Enter name"
          />
          <ErrorMessage name="name">
            {(msg) => <div className={styles.errorMessage}>{msg}</div>}
          </ErrorMessage>

          <input
            type="text"
            value={values.number}
            onChange={handleChange}
            name="number"
            className={styles.input}
            placeholder="Enter number"
          />
          <ErrorMessage name="number">
            {(msg) => <div className={styles.errorMessage}>{msg}</div>}
          </ErrorMessage>

          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      )}
    </Formik>
  );
}
