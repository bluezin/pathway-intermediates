import * as Yup from "yup";
import * as EmailValidator from "email-validator";

export const errorMessage = Yup.object({
  firstName: Yup.string().required("*First Name is required"),
  company: Yup.string().required("*Company is required"),
  message: Yup.string().required("*Message is required"),
  subject: Yup.string().required("*Subject is required"),
  lastName: Yup.string().required("*Last Name is required"),
  country: Yup.string().required("*Country is required"),
  email: Yup.string()
    .test("validate-email", "*Enter a valid email address", (value) => {
      if (value) {
        return EmailValidator.validate(value);
      }
    })
    .required("*Email is required"),
});
