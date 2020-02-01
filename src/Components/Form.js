import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Title, FormBox, ButtonForm, FormErrors , InputForm } from "./InputStyled";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: ""
    },
    validationSchema: Yup.object({
      name: Yup
        .string()
        .max(15, "Must be 15 characters or less")
        .required('Required'),

      age: Yup
        .number()
        .max(150, "Must be 150 years old or less.")
        .positive()
        .integer()
        .required('Required'),

      email: Yup.string().email('Invalid email address.').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <>
      <Title color="blue">Form</Title>
      <FormBox onSubmit={formik.handleSubmit}>
        

<label htmlFor="name">First Name</label>
      <InputForm
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
          <FormErrors>{formik.errors.name}</FormErrors>
        ) : null}

      <label htmlFor="age">Last Name</label>
      <InputForm
        id="age"
        name="age"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age}
      />
      {formik.errors.age ? (
          <FormErrors>{formik.errors.age}</FormErrors>
        ) : null}

      <label htmlFor="email">Email Address</label>
      <InputForm
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email ? (
          <FormErrors>{formik.errors.email}</FormErrors>
        ) : null}

        <ButtonForm type="submit">Submit</ButtonForm>
      </FormBox>
    </>
  );
};

export default Form;
