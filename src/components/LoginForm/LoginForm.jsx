import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { fetchApiLogIn } from "../../redux/auth/operations";

const loginBoxSchema = Yup.object().shape({
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
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log("values", values);
    dispatch(fetchApiLogIn(values));
    actions.resetForm();
  };

  return (
    <div>
      <h1>Login To Your Account 👇 </h1>

      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={loginBoxSchema}
        onSubmit={handleSubmit}
      >
        <Form>
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
            LogIn ✅
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
