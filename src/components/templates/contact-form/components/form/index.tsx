import { Formik } from "formik";
import { errorMessage } from "../../schema/error-message";
import SelectField from "@/components/atoms/select-field";
import TextField from "@/components/atoms/text-field";
import styles from "./index.module.css";
import TextArea from "@/components/atoms/text-area";

const Form = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (prop: boolean) => void;
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
        country: "",
        company: "",
      }}
      validationSchema={errorMessage}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setTouched,
        handleSubmit,
        isValid,
        setValues,
      }) => {
        return (
          <div
            id="form"
            className={`${styles.container__form} ${open ? styles.open__form : ""}`}
          >
            <div style={{ display: "none" }} className={styles.form__nav}>
              <h2>Getting in touch is easy</h2>
              <div className={styles.close__btn} onClick={handleClose}>
                <span>/</span>
                <span>\</span>
              </div>
            </div>

            <div className={styles.container__inputs}>
              <SelectField
                label="Subject"
                id="subject"
                onChange={(value: string) => {
                  setValues({ ...values, subject: value });
                }}
                onBlur={() => {
                  setTouched({ subject: true });
                }}
                messageError={
                  touched.subject && errors.subject ? errors.subject : ""
                }
              />

              <TextField
                label="Country"
                id="country"
                defaultValue={values.country}
                onChange={handleChange}
                onBlur={() => {
                  setTouched({ country: true });
                }}
                messageError={
                  touched.country && errors.country ? errors.country : ""
                }
              />
            </div>

            <div className={styles.container__inputs}>
              <TextField
                label="First Name"
                id="firstName"
                defaultValue={values.firstName}
                onChange={handleChange}
                onBlur={() => {
                  setTouched({ firstName: true });
                }}
                messageError={
                  touched.firstName && errors.firstName ? errors.firstName : ""
                }
              />

              <TextField
                label="Last Name"
                id="lastName"
                defaultValue={values.lastName}
                onChange={handleChange}
                onBlur={() => {
                  setTouched({ lastName: true });
                }}
                messageError={
                  touched.lastName && errors.lastName ? errors.lastName : ""
                }
              />
            </div>

            <div className={styles.container__inputs}>
              <TextField
                label="Company"
                id="company"
                defaultValue={values.company}
                onChange={handleChange}
                onBlur={() => {
                  setTouched({ company: true });
                }}
                messageError={
                  touched.company && errors.company ? errors.company : ""
                }
              />

              <TextField
                label="E-Mail"
                id="email"
                defaultValue={values.email}
                onChange={handleChange}
                onBlur={() => {
                  setTouched({ email: true });
                }}
                messageError={touched.email && errors.email ? errors.email : ""}
              />
            </div>

            <div className={styles.container__textarea}>
              <TextArea
                label="Message"
                id="message"
                defaultValue={values.message}
                onChange={handleChange}
                onBlur={() => {
                  setTouched({ message: true });
                }}
                messageError={
                  touched.message && errors.message ? errors.message : ""
                }
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                className={styles.button}
                onClick={() => handleSubmit()}
                type="button"
                disabled={!isValid}
              >
                Send Message
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Form;
