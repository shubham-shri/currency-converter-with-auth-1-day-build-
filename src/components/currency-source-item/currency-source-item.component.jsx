import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { ReactComponent as RemoveIcon } from '../../assets/icons/remove-icon.svg'
import './currency-source-item.styles.scss'

const CurrencySourceItem = ({
  currencyCode,
  rateRatio,
  targetAmount,
  removeFromSourceCurrencyArray,
}) => {
  const value = rateRatio * targetAmount
  return (
    <div className="currency-source-item">
      <div className="currency-source-item__code"> {currencyCode}: </div>
      <div className="currency-source-item__value-container">
        {' '}
        <div className="currency-source-item__value">{value} </div>
        <CustomButton
          isRemoveItem
          id={currencyCode}
          onClick={removeFromSourceCurrencyArray}
        >
          <RemoveIcon className="remove-icon" />
        </CustomButton>
      </div>
    </div>
  )
}

export default CurrencySourceItem
