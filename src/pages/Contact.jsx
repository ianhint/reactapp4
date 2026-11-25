import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState({ name: "", address: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ name, address });
  };

  return (
    <main className="contact-page">
      <h1>
        {data.name} {data.address}
      </h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>
          Contact Us <br />
        </h1>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          required
        />
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder="Enter your address"
          rows="4"
        />
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}

export default Contact;
