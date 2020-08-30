import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isRemoveItem, isLogout, ...otherProps }) => (
  <button
    className={`custom-button ${isRemoveItem ? `remove-item` : ``} ${
      isLogout ? `logout` : ``
    }`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
