import React, { useState } from "react";
import DocumentInfo from "./DocumentInfo" 
import EmployeeInfoRV from "./EmployeeInfoRV";
import EmployerInfo from "./EmployerInfo";
import Section2Title from "./Section2Title";


function I9FormSection2() {
   
  //variable that tracks the form pages. also know as "step"
  const [page, setPage] = useState(0);
  // apply validationSchema to each page in the Array

  const FormTitles = [
    "I-9 Form: Section 2",
    "Employee Information",
    "Document",
    "Employer Information",
  ];
  //  returns the html form
  const PageDisplay = () => {
    if (page === 0) {
      return <Section2Title />;
    } else if (page === 1) {
      return <EmployeeInfoRV />;
    } else if (page === 2) {
      return <DocumentInfo />;
    } else {
      return <EmployerInfo />;
    }
  };

  return (
    <div className="I9Form2">
      <div className="w-screen h-screen flex flex-col items-center justify-start">
      
      </div>

      <div className="form-container"></div>
      <div className="header">
        {/*Displays a title index from the FormTitle array*/}
        <h1>{FormTitles[page]}</h1>
      </div>
      {/* Displays form content */}
      <div className="body">{PageDisplay()}</div>
      <div className="footer"></div>
      {/* Prev button */}
      <button
        disabled={page == 0}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}>
        Prev
      </button>
      {/* Next button */}
      <button
        onClick={() => {
          if (page === FormTitles.length - 1) {
            alert("FORM SUBMITTED");
          } else {
            setPage((currPage) => currPage + 1);
          }
        }}>
        {page === FormTitles.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
}

export default I9FormSection2;
