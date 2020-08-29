import React, { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import CustomFormInput from '../../components/custom-form-input/custom-form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import getUserToken from '../../helper-functions/getToken'
import loginWithEmailAndPassword from '../../helper-functions/loginWithEmailAndPassword.js'
import setUserToken from '../../helper-functions/setUserToken'
import { useHistory, Link } from 'react-router-dom'
import './sign-in.styles.scss'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(getUserToken())
  const history = useHistory()

  useEffect(() => {
    if (token) history.push('/')
  }, [token, history])

  const handleSubmit = (event) => {
    event.preventDefault()
    let status = loginWithEmailAndPassword(email, password)
    if (status) setToken(true)
  }
  const responseGoogle = (response) => {
    if (response.error) alert('Something went wrong')
    else {
      setUserToken(true)
      setToken(true)
    }
  }

  return (
    <div className="sign-in">
      <div className="sign-in__box">
        <h2 className="title">I have an account</h2>
        <span>Sign In with your email and password</span>
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
          <div className="sign-up-option">
            Forgot password<Link to={`/forgotpassword`}> Click Here</Link>
          </div>

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
        <div className="line-partition">OR</div>
        <GoogleLogin
          className="google-login"
          clientId="872440420080-qsamraa801jjsiitrvnj9ihssmj3brbg.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <div className="sign-up-option">
          Don't have an account? <Link to={`/signup`}>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
