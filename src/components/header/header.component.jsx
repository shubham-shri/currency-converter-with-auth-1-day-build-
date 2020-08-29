import React from 'react'
import Logout from '../logout/logout.component'
import './header.styles.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-text">Currency Converter</div>
      <div>
        <Logout />
      </div>
    </div>
  )
}

export default Header
