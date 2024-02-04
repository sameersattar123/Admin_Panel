import React, { useState } from 'react'

const Login = () => {

  const [user, setUser] = useState({
    email :  "",
    password : ""
  })

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,
      [name] : value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }
  return (
    <>
<section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/login.png"
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
                  <button className="btn btn-submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Login