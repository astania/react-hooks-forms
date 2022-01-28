import React, { useState } from "react";


function Form({newsletter, firstName, lastName, handleFirstNameChange, handleLastNameChange, handleNewsLetterChange}) {


  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <label htmlFor="newsletter">Subscribe to our newsletter</label>
      <input type="checkbox" id="newsletter" onChange={handleNewsLetterChange} checked={newsletter}></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
