import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { ReactComponent as RemoveIcon } from '../../assets/icons/remove-icon.svg'
import './currency-target-item.styles.scss'

const CurrencyTargetItem = ({
  currencyCode,
  rateRatio,
  sourceAmount,
  removeFromTargetCurrencyArray,
}) => {
  const value = rateRatio * sourceAmount
  return (
    <div className="currency-target-item">
      <div className="currency-target-item__code"> {currencyCode}: </div>
      <div className="currency-target-item__value-container">
        {' '}
        <div className="currency-target-item__value">{value} </div>
        <CustomButton
          isRemoveItem
          id={currencyCode}
          onClick={removeFromTargetCurrencyArray}
        >
          <RemoveIcon className="remove-icon" />
        </CustomButton>
      </div>
    </div>
  )
}

export default CurrencyTargetItem
