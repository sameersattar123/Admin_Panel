import React, { useState } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {
  const { user } = useAuth();
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContact({
      email: user.email,
      username: user.username,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact({
            username: "",
            email: "",
            message: "",
          });
        const data = await response.json();
        console.log(data);
        alert("message submitted Successfully");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(contact);
  };
  return (
    <>
      <section>
        <div className="">
          <h1>Contact Us</h1>
        </div>
        <div className="">
          <div className="">
            <img src="/images/support.png" alt="" width={500} height={500} />
          </div>

          <section>
            <form action="" onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  autoCorrect="off"
                  onChange={handleInput}
                  value={contact.username}
                />
              </div>
              <div className="">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoCorrect="off"
                  onChange={handleInput}
                  value={contact.email}
                />
              </div>
              <div className="">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={30}
                  onChange={handleInput}
                  value={contact.message}
                ></textarea>
              </div>
              <div className="">
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
