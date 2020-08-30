import React, { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import CustomFormInput from '../../components/custom-form-input/custom-form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import getUserToken from '../../helper-functions/getToken'
import loginWithEmailAndPassword from '../../helper-functions/loginWithEmailAndPassword.js'
import setUserToken from '../../helper-functions/setUserToken'
import { useHistory, Link } from 'react-router-dom'
import SIGN_IN_STATIC_DATA from './SIGN_STATIC_DATA'
import ENVIRONMENT_VARS from '../../ENVIRONMENT_VARS.js'
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
    if (response.error) console.log(response.error)
    else {
      setUserToken(true)
      setToken(true)
    }
  }

  return (
    <div className="sign-in">
      <div className="sign-in__box">
        <h2 className="title">{SIGN_IN_STATIC_DATA.TITLE_TEXT}</h2>
        <span>{SIGN_IN_STATIC_DATA.SUBTITLE_TEXT}</span>
        <form className="sign-in-form" onSubmit={handleSubmit}>
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
            {SIGN_IN_STATIC_DATA.FORGOT_PASSWORD_TEXT}
            <Link to={`/forgotpassword`}>
              {SIGN_IN_STATIC_DATA.CLICK_HERE_TEXT}
            </Link>
          </div>

          <CustomButton type="submit">
            {SIGN_IN_STATIC_DATA.SIGN_IN_TEXT}
          </CustomButton>
        </form>
        <div className="line-partition">OR</div>
        <GoogleLogin
          className="google-login"
          clientId={ENVIRONMENT_VARS.GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <div className="sign-up-option">
          {SIGN_IN_STATIC_DATA.SIGN_UP_OPTION_TEXT}{' '}
          <Link to={`/signup`}>{SIGN_IN_STATIC_DATA.SIGN_UP_TEXT}</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
