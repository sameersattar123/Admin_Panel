import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="">Register Form</h1>
                <br />
                <form action="" onSubmit={handleSubmit}>
                  <div className="">
                    <label htmlFor="username">Username</label>
                    <input
                      required
                      autoComplete="off"
                      type="text"
                      placeholder="Enter Your Username"
                      name="username"
                      id="username"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="email">Email</label>
                    <input
                      required
                      autoComplete="off"
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      id="email"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="password">Password</label>
                    <input
                      required
                      autoComplete="off"
                      type="password"
                      placeholder="Enter Your Password"
                      name="password"
                      id="password"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="phone">Phone</label>
                    <input
                      required
                      autoComplete="off"
                      type="number"
                      placeholder="Enter Your Phone"
                      name="phone"
                      id="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <button className="btn btn-submit">Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
