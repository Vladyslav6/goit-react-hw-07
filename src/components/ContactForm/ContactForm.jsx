import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/ContactSlice";

const ContactFrom = () => {
  const dispatch = useDispatch();
  const onSubmit = (value, options) => {
    const id = nanoid();
    const newContact = {
      ...value,
      id,
    };

    dispatch(addContact(newContact));
    options.resetForm();
  };

  const initialsValue = {
    id: "",
    name: "",
    number: "",
  };
  const AddErrorShemaYup = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialsValue}
        validationSchema={AddErrorShemaYup}
      >
        <Form>
          <div className={css.formWrapper}>
            <label> Name</label>
            <Field name="name" placeholder="enter name"></Field>
            <ErrorMessage name="name" className={css.error} component="div" />

            <label>Number</label>
            <Field
              name="number"
              type="tell"
              placeholder="enter number phone"
            ></Field>
            <ErrorMessage name="number" className={css.error} component="div" />

            <button type="submit" className={css.buttonSubmit}>
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ContactFrom;
