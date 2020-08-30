import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import CustomButton from '../../components/custom-button/custom-button.component'
import CustomFormInput from '../../components/custom-form-input/custom-form-input.component'
import getUserToken from '../../helper-functions/getToken.js'
import forgotPassword from '../../helper-functions/forgotPassword'
import FORGOT_PASSWORD_STATIC_DATA from './FORGOT_PASSWORD_STATIC_DATA'
import './forgot-password.styles.scss'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const token = getUserToken()
  const history = useHistory()
  useEffect(() => {
    if (token) history.push('/')
  }, [history, token])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email)
    forgotPassword(email)
  }
  return (
    <div className="forgot-password">
      <div className="forgot-password__box">
        <h2 className="forgot-password__title">
          {FORGOT_PASSWORD_STATIC_DATA.TITLE_TEXT}
        </h2>
        <span>{FORGOT_PASSWORD_STATIC_DATA.SUBTITLE_TEXT}</span>
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <CustomFormInput
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
          ></CustomFormInput>

          <CustomButton type="submit">
            {FORGOT_PASSWORD_STATIC_DATA.SUBMIT_BUTTON_TEXT}
          </CustomButton>
          <div className="sign-up-option">
            {FORGOT_PASSWORD_STATIC_DATA.GO_TO_SIGN_IN_OPTION_TEXT}{' '}
            <Link to={`/signin`}>
              {FORGOT_PASSWORD_STATIC_DATA.CLICK_HERE_TEXT}
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
