import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { fetchApiRegister } from "../../redux/auth/operations";

const RegisterBoxSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    )
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .required("A Password is required"),
});

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log("values", values);
    dispatch(fetchApiRegister(values));
    actions.resetForm();
  };

  return (
    <div>
      <h1>Registration</h1>
      <p>Please enter your email and password for registration 😊</p>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={RegisterBoxSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Name</span>
            <br />
            <Field type='name' name='name' placeholder='Maria Koval' />
            <ErrorMessage name='name' component='div' />
          </label>
          <br />
          <label>
            <span>Email</span>
            <br />
            <Field type='email' name='email' placeholder='test@g.com' />
            <ErrorMessage name='email' component='div' />
          </label>
          <br />
          <label>
            <span>Password</span>
            <br />
            <Field
              type='password'
              name='password'
              placeholder='Enter strong password'
            />
            <ErrorMessage name='password' component='div' />
          </label>
          <br />
          <button type='submit' onSubmit={handleSubmit}>
            Registration ✅
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
