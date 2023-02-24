//#region TranslationsForm
/*This is a React component that renders a form for translating text into 
American Sign Language (ASL).
It imports React, useState, and useForm from React, and ASLTranslation 
and a CSS file.
The component takes in three props: translationText, onTranslation, and 
onTranslationTextChange.
It uses useForm to handle form input and validation, and defines state 
with useState to track whether the form has been submitted and to store 
the previous translation.
The component defines an onSubmit function that calls the onTranslation 
callback with the current value of translationText, sets the submitted 
state to true, and stores the current value of translationText in the 
previousTranslation state.
The component returns a form with an input field and a button to submit 
the form. It conditionally renders an ASLTranslation component 
with the current or previous translation based on whether the form 
has been submitted.
*/
//#endregion

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ASLTranslation from "../ASLTranslation";
import "./TranslationsForm.css";

const TranslationsForm = ({
  translationText,
  onTranslation,
  onTranslationTextChange,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);
  const [previousTranslation, setPreviousTranslation] = useState("");

  const onSubmit = ({ translationText }) => {
    onTranslation(translationText);
    setSubmitted(true);
    setPreviousTranslation(translationText);
  };

  const handleInputChange = (value) => {
    setSubmitted(false);
    onTranslationTextChange(value);
  };

  return (
    <>
      <div className="containerTranslationsForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset-box-input-text">
            <label htmlFor="translation-notes">Text to translate:</label>
            <input
              type="text"
              {...register("translationText")}
              placeholder="Please, enter the message that you want to translate!"
              value={translationText}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <button className="translationButton" type="submit"><span>Translate</span></button>
          </fieldset>

          {submitted && (
            <div className="translationBox">
              <ASLTranslation translationText={translationText} />
            </div>
          )}

          {!submitted && previousTranslation && (
            <div className="translationBox">
              <ASLTranslation translationText={previousTranslation} />
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default TranslationsForm;
