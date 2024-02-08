import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
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
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:4000/api/auth/login` , {
        method : "POST",
        headers : {
          'Content-Type' : "application/json"
        },
        body : JSON.stringify(user)
       })
       if (response.ok) {
        alert("Login Successfully")
         setUser({
           email: "",
           password: "",
         })
         navigate("/")
       } else {
        console.log("Invalid Credentials")
       }
       console.log(response);
     } catch (error) {
       console.log(error)
    }
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
                <h1 className="">Login Form</h1>
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