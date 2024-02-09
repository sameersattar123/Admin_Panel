import React from 'react'
import { useAuth } from '../store/auth'

const About = () => {
  const {user} = useAuth();
  console.log(user)
  return (
    <div>Hi {user.username}</div>
  )
}

export default About