import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a first name that long")
    .required("Enter a name"),
  number: Yup.string()
    .min(8, "Must be longer than 8 characters")
    .matches(/([0-9]{8})/, "must be a digits")
    .required("Enter a number"),
});

export default BasicFormSchema;
