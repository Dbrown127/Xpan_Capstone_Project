import React from "react";
import { Grid, Typography } from "@material-ui/core";
import InputField from "../FormFields/InputField";
import SelectField from "../FormFields/SelectField";
import CheckboxField from "../FormFields/CheckboxField";
import DatePickerField from "../FormFields/DatePickerField";
// const attestationOptions = [
//   {
//     value: undefined,
//     label: "None",
//   },
//   {
//     value: "NoPreparer",
//     label: "I did not use a preparer or translator",
//   },
//   {
//     value: "preparerCert",
//     label:
//       "A preparer(s) and/or translator(s) assisted the employee in completing Section 1",
//   },
  
// ];

export default function PreparerSignatureForm(props) {
  const {
    formField: {
      preparerCert,
    //   preparerLname,
    //   preparerFname,
    //   preparerAddress,
    //   preparerCity,
    //   preparerState,
    //   preparerZip,
    //   dateCompleted,
    //   preparerEsign,
    },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Preparer and/or Translator Certification
      </Typography>
      <div>
        {" "}
        <p>
          Fields below must be completed and signed when preparers and/or
          translators assist an employee in completing Section 1. (Select one)
        </p>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CheckboxField name={preparerCert.name} label={preparerCert.label}>
            {" "}
            I did not use a preparer or translator. (Select and Skip to the
            Applicant Signature below)
          </CheckboxField>
        </Grid>
        {/* <p>If you selected (3) provided the following.</p>
        <Grid item xs={12} sm={6}>
          <InputField name={USCISnum.name} label={USCISnum.label} fullWidth />
        </Grid>
        <p>
          If you are an alien authorized to work, provided the following. <br />
          <em>
            Some aliens may write "N/A" in the expiration date field. (See
            instructions)
          </em>
        </p>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={expirationDate.name}
            label={expirationDate.label}
            format="yyyy/MM/dd"
            views={["year", "month", "day"]}
            minDate={new Date()}
            maxDate={new Date("2050/12/31")}
            fullWidth
          />
        </Grid>
        <p>
          <em>
            Aliens authorized to work must provide only one of the following
            document numbers to complete Form I-9: An Alien Registration
            Number/USCIS Number OR Form I-94 Admission Number OR Foreign
            Passport Number
          </em>
        </p>
        <Grid item xs={12} sm={6}>
          <InputField name={USCISnum.name} label={USCISnum.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={formI94_AdmissionNum.name}
            label={formI94_AdmissionNum.label}
            fullWidth
          />
          <Grid item xs={12} sm={6}>
            <InputField
              name={foreignPassportNum.name}
              label={foreignPassportNum.label}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name={countryOfInsuance.name}
              label={countryOfInsuance.label}
              fullWidth
            />
          </Grid> */}
        {/* </Grid>*/}
      </Grid>
    </React.Fragment>
  );
}