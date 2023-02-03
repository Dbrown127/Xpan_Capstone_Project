import * as Yup from "yup";

export const section2Schema = Yup.object().shape({
  employee_Fname: Yup.string()
    .min(2, "Name must be at lest 2 characters long")
    .required("Required"),
  employee_Lname: Yup.string().required(),
  employee_MI: Yup.string().required(),
  employee_Citizenship: Yup.string().required(),
  document: Yup.array().of(
    Yup.object().shape({
      listCategory: Yup.string().required(),
      documentTitle: Yup.string().required(),
      issuingAuthority: Yup.string().required(),
      documentNum: Yup.number().required(),
      expirationDate: Yup.date().required(),
    })
  ),

  additional_Inf: Yup.number().required(),
  employeeStartDate: Yup.date()
    .transform()
    .typeError("please enter a valid date")
    .required(),

  employerTitle: Yup.string().required("*Required*"),
  employer_Lname: Yup.string().required(" * Required *"),
  employer_Fname: Yup.string().required(" * Required *"),
  employer_BusinessName: Yup.string().required(" * Required *"),
  employer_BusinessAddress: Yup.string().required(" * Required *"),
  employer_BusinessCity: Yup.string().required(" * Required *"),
  employer_BusinessState: Yup.string().required(" * Required *"),
  employer_BusinessZip: Yup.string().required(" * Required *"),
  employerSignature: Yup.string()
    .required(" * Required *")
    .matches(
      /^data:image\/(?:gif|png|jpeg|bmp|webp|svg\+xml)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/,
      "Signature must be png"
    ),
  dateCompleted: Yup.date()
    .transform()
    .typeError("please enter a valid date")
    .required(),
});
