import React, { useState } from "react";
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function validate() {
    if (name === "") {
      alert("Name is Empty");
      return false;
    } else if (!/^[A-Za-z -]{3,25}$/.test(name)) {
      alert("Invalid Name");
      return false;
    }

    if (phone === "") {
      alert("Phone number is Empty");
      return false;
    } else if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number");
      return false;
    }

    if (email === "") {
      alert("Email is Empty");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email address");
      return false;
    }
    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      alert(
        `Submitted form with Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`
      );
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="frm bg-zinc-300 "
        style={{ minHeight: "115vh" }}
        id="form"
      >
        <p style={{ fontSize: "250%" }} className="col-6 col-sm-6 col-md-6 col-lg-6"><b>Contact Us</b></p>

        <div style={{ minHeight: "30%" }}>
          <p className="help">
            <b>
              We will talk about your situation <br />
              and see how we can help
            </b>
          </p>

          <label style={{marginBottom:"1%"}} htmlFor="name">Name:</label>
          <br />

          <input
            className="rounded border-b border-cyan-400 hover:border-2 border-cyan-600"
            style={{
              color: "black",
              paddingLeft: "1.5%",
              paddingRight: "1.5%",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label style={{marginBottom:"1%"}} htmlFor="email">Email:</label>
          <br />
          <input
            className="rounded border-b border-cyan-400 hover:border-2 border-cyan-600"
            type="text"
            style={{
              color: "black",
              paddingLeft: "1.5%",
              paddingRight: "1.5%",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label style={{marginBottom:"1%"}} htmlFor="phone">Phone:</label>
          <br />
          <input
            className="rounded border-b border-cyan-400 hover:border-2 border-cyan-600"
            type="tel"
            style={{
              color: "black",
              paddingLeft: "1.5%",
              paddingRight: "1.5%",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div>
          <label style={{marginBottom:"1%"}} htmlFor="message">Message:</label>
          <br />
          <textarea
            className="rounded border-b border-cyan-400 hover:border-2 border-cyan-600"
            id="message"
            style={{
              color: "black",
              paddingLeft: "1.5%",
              paddingRight: "1.5%",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <br />
        <button
          type="submit"
          className="rounded-lg ring-2 ring-blue-500 bg-gradient-to-b from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 hover:text-zinc-100"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
