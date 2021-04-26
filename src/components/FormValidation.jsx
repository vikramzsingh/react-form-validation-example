import React, { useState } from "react";
import { alphaWithSpaceRegex, onlyNumberRegex } from "../utils/regex";

export default function FormValidation() {
  //   const [data, setData] = useState({});
  const [cardholderData, setCardholderData] = useState({});
  const [validationError, setValidationError] = useState({});

  console.log("cardholderData, OBJECT", cardholderData);
  console.log("validationError OBJECT", validationError);

  const onChangeErrorSetter = (name, msg) => {
    let error = validationError;
    delete error[name];
    console.log({ ...error, [name]: msg });
    setValidationError({ ...error, [name]: msg });
    return;
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    let error = validationError;
    delete error[event.target.name];

    if (name === "cardHolderName") {
      if (value == null || value === "") {
        onChangeErrorSetter(name, "This Field cannot be Empty");
      } else if (!alphaWithSpaceRegex.test(value)) {
        onChangeErrorSetter(name, "Only alphabets required");
      }
    }

    if (name === "cvc") {
      if (value == null || value === "") {
        onChangeErrorSetter(name, "This Field cannot be Empty");
      } else if (!onlyNumberRegex.test(value)) {
        onChangeErrorSetter(name, "Only digits required");
      }
    }

    setCardholderData({
      ...cardholderData,
      [event.target.name]: event.target.value,
    });
  };

  // const [cardHolderNameError, setCardHolderNameError] = useState(false);
  // const [cvcError, setCvcError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const { cardHolderName, cvc } = cardholderData;
    const err1 = {};
    const err2 = {};

    if (!cardHolderName || !cvc) {
      if (!cardHolderName) {
        err1["cardHolderName"] = "this is card holder field";
      }

      if (!cvc) {
        err2["cvc"] = "this is cvc field";
      }
      const finalObj = Object.assign(err1, err2);
      setValidationError(finalObj);
      console.log(err1);
      console.log(err2);
      return;
    }

    // Api end point call here
    console.log("API CALLED");
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <form>
        <div>
          <label>Card Holder Name</label>
          <input
            name="cardHolderName"
            onChange={handleChange}
            // onBlur={validateInputField}
            // onFocus={handleFocus}
          />
          {validationError.cardHolderName && (
            <p>{validationError.cardHolderName}</p>
          )}
          {/* {cardHolderNameError && <p>This field cannot be empty</p>} */}
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
          {/* {cvcError && <p>This field cannot be empty</p>} */}
        </div>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
