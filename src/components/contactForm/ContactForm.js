export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleName = (event) => {
    setName(event.target.value);

  }

  const handlePhone = (event) => {
    setPhone(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}> 
      <label>
        Name:
        <input
          type="text" 
          value={name}
          onChange={handleName}
          placeholder="Contact Name"
          required />
      </label>
      
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={handlePhone}
          placeholder="Phone Number"
          pattern="[0-9]\d+"
          required />
      </label>  

      <label>
        Email:
        <input 
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="Email"
          required />
      </label>

      <input type="submit" value={'Add Contact'} />
    </form>
  );
};

