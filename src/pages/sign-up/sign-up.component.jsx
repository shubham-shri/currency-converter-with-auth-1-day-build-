import React, { useState, useEffect } from 'react'
import CustomFormInput from '../../components/custom-form-input/custom-form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import addUserWithEmailAndPassword from '../../helper-functions/addUserWithEmailAndPassword'
import getUserToken from '../../helper-functions/getToken'
import { useHistory, Link } from 'react-router-dom'
import SIGN_UP_STATIC_DATA from './SIGN_UP_STATIC_DATA'
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
      alert(SIGN_UP_STATIC_DATA.PASSWORD_DO_NOT_MATCH_TEXT)
    else {
      addUserWithEmailAndPassword(email, password)
      setToken(true)
    }
  }

  return (
    <div className="sign-up">
      <div className="sign-up__box">
        <h2 className="title">{SIGN_UP_STATIC_DATA.TITLE_TEXT}</h2>
        <span>{SIGN_UP_STATIC_DATA.SUBTITLE_TEXT}</span>
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
          <CustomButton type="submit">
            {SIGN_UP_STATIC_DATA.SIGN_UP_TEXT}
          </CustomButton>
        </form>
        <div className="sign-in-option">
          {SIGN_UP_STATIC_DATA.SIGN_IN_OPTION_TEXT}{' '}
          <Link to={`/signin`}>{SIGN_UP_STATIC_DATA.SIGN_IN_TEXT}</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
