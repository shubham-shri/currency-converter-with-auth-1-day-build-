import React from 'react'

const CurrencySourceItem = ({
  currencyCode,
  rateRatio,
  targetAmount,
  removeFromSourceCurrencyArray,
}) => {
  const value = rateRatio * targetAmount
  return (
    <div>
      <div>
        {currencyCode}: {value}{' '}
        <button id={currencyCode} onClick={removeFromSourceCurrencyArray}>
          x
        </button>
      </div>
    </div>
  )
}

export default CurrencySourceItem
