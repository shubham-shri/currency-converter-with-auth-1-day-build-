import React, { useState, useEffect } from 'react'
import CustomFormInput from '../../components/custom-form-input/custom-form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import addUserWithEmailAndPassword from '../../helper-functions/addUserWithEmailAndPassword'
import getUserToken from '../../helper-functions/getToken'
import { useHistory, Link } from 'react-router-dom'
import './sign-up.styles.scss'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [token, setToken] = useState(getUserToken())
  const history = useHistory()

  useEffect(() => {
    if (token) history.push('/')
  }, [token, history])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword)
      alert('Password and Confirm Password do not match')
    else {
      addUserWithEmailAndPassword(email, password)
      setToken(true)
    }
  }

  return (
    <div className="sign-up">
      <div className="sign-up__box">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <CustomFormInput
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
          ></CustomFormInput>
          <CustomFormInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            required
          ></CustomFormInput>
          <CustomFormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirm Password"
            required
          ></CustomFormInput>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
        <div className="sign-in-option">
          Already have an account? <Link to={`/signin`}>Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
