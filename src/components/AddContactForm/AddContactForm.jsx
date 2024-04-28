import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { apiAddContacts } from "../../redux/contacts/operations";

const ContactBoxSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(3, "Too Short!")
    .required("A phone number is required"),
});

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const AddContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log("values", values);
    dispatch(apiAddContacts(values));
    actions.resetForm();
  };

  return (
    <div>
      <h2>Add new contact</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={ContactBoxSchema}
      >
        <Form>
          <span>Name</span>
          <Field type='text' name='name' />
          <ErrorMessage component='p' name='name' />

          <span>Number</span>
          <Field type='text' name='number' />
          <ErrorMessage component='p' name='number' />

          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddContactForm;
