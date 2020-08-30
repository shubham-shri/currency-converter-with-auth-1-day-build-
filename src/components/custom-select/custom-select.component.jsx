import React from 'react'
import './custom-select.styles.scss'

const CustomSelect = ({ optionsArray, label, onChange }) => {
  return (
    <div className="select-container">
      <label className="select-label">{label}</label>
      <select className="select" id="custom-select" onChange={onChange}>
        {optionsArray.map((option, index) => (
          <option className="option" key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CustomSelect
