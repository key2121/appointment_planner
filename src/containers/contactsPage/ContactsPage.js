import React, { useState, useEffect} from "react";
import { ContactForm }  from "../../../src/components/contactForm/ContactForm";
import { TileList } from "../../../src/components/tileList/TileList";


export const ContactsPage = ({contacts, addContact}) => {
  // State variables for contact info and duplicate check

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault(); //prevents page reload

    if(isDuplicate === false){

      /*you need to return this as an object within an array or else you will get every character in the array returned on a new line.
      E.g. Form inputs = name: joe, phone: 123, email: test@me

      this will be displayed in the contacts section
      j
      o
      e
      1
      2
      3
      
      you get the point. if you want to test it change the code in the addContact method to this:
      addContacts([name, phone, email, ...contacts])
      */

      addContact(prevContacts => {
        return [{name: name, phone: phone, email: email}, ...prevContacts]
      });

      // empties the form fields on submit
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  // Using hooks, check for contact name in the contacts array variable in props
  useEffect(() =>{
      //.some() is used because its more efficient than .find(). To improve this functionality 2 or more pieces of contact data should be checked
    const checkContacts = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (checkContacts){
      setIsDuplicate(true)
      alert(`This contact already exists`);
    } else {
      setIsDuplicate(false);
    }
     
  }, [contacts, name]);
  
  

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone} 
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts}/>     
      </section>
    </div>
  );
};