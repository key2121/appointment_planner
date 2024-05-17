import React from "react";

export const ContactPicker = ({contacts, handleContact}) => {

  const information = Object.values(contacts);
  /*contacts is an array of objects being passed down from App.js > AppointmentsPage.js > AppointmentForm.js > ContactsPicker.js
  
  The Context API might be able to simplify this passing of data but I haven't used it before and it's not required for this project*/

  const contactOptions = information.map((value, index) => {
    return (
      <option value={value.name} key={index}>{value.name}</option>
    )
  });

  return (
    <select name="contact-select" onChange={handleContact} required>
      <option value="" defaultValue="selected">No Contact Selected</option>
      {contactOptions}
    </select>
  );
};
