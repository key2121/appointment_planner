import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitle = (event) =>{
    setTitle(event.target.value);
  }

  const handleContact = (event) =>{
    setContact(event.target.value);
  }

  const handleDate = (event) =>{
    setDate(event.target.value);
  }

  const handleTime = (event) =>{
    setTime(event.target.value);
  }

  /*The event handlers below can be placed as inline functions 
  e.g onChange={(event) => setTitle(event.target.value)}
  
  I opted not to because I think it makes it more obvious how functions are passed to elements */

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input 
          type="text"
          value={title}
          onChange={handleTitle}
          placeholder="Title"
          required/> 
      </label>
      

      <label>
        Contact:
        <ContactPicker
          contacts={contacts}
          value={contact}
          handleContact={handleContact}/>
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date}
          min={getTodayString()}
          onChange={handleDate}
          required/>
      </label>

      <label htmlFor="time">
        Time:
        <input
          type="time"
          value={time}
          onChange={handleTime}
          required/>
      </label>

      <input type="submit" value={'Add Appointment'} />
    </form>
  );
};