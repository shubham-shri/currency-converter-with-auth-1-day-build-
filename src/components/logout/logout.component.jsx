import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import logout from '../../helper-functions/logout'
import { useHistory } from 'react-router-dom'

const Logout = () => {
  const history = useHistory()
  const logoutUser = () => {
    logout()
    history.push('./signin')
  }
  return <CustomButton onClick={() => logoutUser()}>Logout</CustomButton>
}

export default Logout
