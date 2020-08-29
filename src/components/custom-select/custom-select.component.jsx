import React from 'react'

const CustomSelect = ({ className, optionsArray, label, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select className={className} id="custom-select" onChange={onChange}>
        {optionsArray.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CustomSelect
