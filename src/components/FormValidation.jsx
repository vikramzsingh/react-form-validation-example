import React, { useState } from "react";
import { alphaWithSpaceRegex, onlyNumberRegex } from "../utils/regex";

export default function FormValidation() {
//   const [data, setData] = useState({});
  const [cardholderData, setCardholderData] = useState({});
  const [validationError, setValidationError] = useState({});

  console.log('cardholderData, OBJECT',cardholderData);
  console.log('validationError OBJECT',validationError)

  const errorSetter = (event, msg) => {
    let error = validationError;
    delete error[event.target.name];
    setValidationError({ ...error, [event.target.name]: msg });
    return;
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    let error = validationError;
    delete error[event.target.name];

    if (name === "cardHolderName") {
      if (value == null || value == "") {
        errorSetter(event, "This Field cannot be Empty");
        // return;
      } else if (!alphaWithSpaceRegex.test(value)) {
        errorSetter(event, "Only alphabets required");
        return;
      }
    }

    // This will not allow to store number in cardHolderName state
    // if (name === "cardHolderName") {
    //   if (!alphaWithSpaceRegex.test(value)) {
    //     return;
    //   }
    // }

    if (name === "cvc") {
      if (value == null || value == "") {
        errorSetter(event, "This Field cannot be Empty");
        // return;
      } else if (!onlyNumberRegex.test(value)) {
        errorSetter(event, "Only digits required");
        return;
      }
      //   setCardHolderError("");
    }

    // setValidationError({ ...error });
    setCardholderData({
      ...cardholderData,
      [event.target.name]: event.target.value,
    });
    // setCardholderName(value);
    // console.log(value);
  };

  const handleSubmit = () => {

  }

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Holder Name</label>
          <input
            name="cardHolderName"
            onChange={handleChange}
            // onBlur={validateInputField}
            // onFocus={handleFocus}
          />
          {validationError.cardHolderName && <p>{validationError.cardHolderName}</p>}
        </div>
        <div>
          <label>Cvc</label>
          <input
            name="cvc"
            onChange={handleChange}
            // onBlur={validateInputField}
            // onFocus={handleFocus}
            maxLength="4"
            minLength="3"
          />
          {validationError.cvc && <p>{validationError.cvc}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
