import React, { useEffect, useState } from 'react'
import getUserToken from '../../helper-functions/getToken'
import Header from '../../components/header/header.component'
import CustomSelect from '../../components/custom-select/custom-select.component'
import CURRENCY_OPTIONS from './currencyOptions'
import { useHistory } from 'react-router-dom'
import CustomFormInput from '../../components/custom-form-input/custom-form-input.component'
import CurrencyTargetItem from '../../components/currency-target-item/currency-target-item.component'
import axios from 'axios'
import HOME_STATIC_DATA from './HOME_STATIC_DATA'
import './home.styles.scss'

const Home = () => {
  const [targetCurrency, setTargetCurrency] = useState(CURRENCY_OPTIONS[0])
  const [sourceCurrency, setSourceCurrency] = useState(CURRENCY_OPTIONS[0])
  const [targetCurrencyArray, setTargetCurrencyArray] = useState([])
  const [sourceCurrencyAmount, setSourceCurrencyAmount] = useState(1)
  const [currencyData, setCurrencyData] = useState({})
  const history = useHistory()
  useEffect(() => {
    if (!getUserToken()) history.push('/signin')
  }, [history])

  useEffect(() => {
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=${sourceCurrency}`)
      .then((response) => {
        setCurrencyData(response.data.rates)
      })
      .catch((error) => console.log(error))
  }, [sourceCurrency])

  useEffect(() => {
    const addToTargetCurrencyArray = (currencyCode) => {
      if (targetCurrencyArray.includes(currencyCode)) return
      setTargetCurrencyArray([...targetCurrencyArray, currencyCode])
    }
    addToTargetCurrencyArray(targetCurrency)
  }, [targetCurrency, setTargetCurrencyArray, targetCurrencyArray])

  const removeFromTargetCurrencyArray = (e) => {
    if (!targetCurrencyArray.includes(e.target.id)) return
    setTargetCurrencyArray(
      targetCurrencyArray.filter((itemCode) => itemCode !== e.target.id),
    )
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1>{HOME_STATIC_DATA.APP_HEADING}</h1>
        <div>
          <h2>{HOME_STATIC_DATA.AMOUNT_INPUT_LABEL}</h2>
          <CustomFormInput
            value={sourceCurrencyAmount}
            handleChange={(e) => setSourceCurrencyAmount(e.target.value)}
            type="number"
          />
        </div>
        <CustomSelect
          optionsArray={CURRENCY_OPTIONS}
          label={HOME_STATIC_DATA.SOURCE_CURRENCY_INPUT_LABEL}
          onChange={(e) => setSourceCurrency(e.target.value)}
        />
        <CustomSelect
          optionsArray={CURRENCY_OPTIONS}
          label={HOME_STATIC_DATA.TARGET_CURRENCY_INPUT_LABEL}
          onChange={(e) => setTargetCurrency(e.target.value)}
        />
        <span className="hint-text">
          {HOME_STATIC_DATA.TARGET_CURRENCY_HINT}
        </span>
        <div>
          {targetCurrencyArray.map((item) => (
            <CurrencyTargetItem
              key={item}
              currencyCode={item}
              rateRatio={currencyData[item]}
              sourceAmount={sourceCurrencyAmount}
              removeFromTargetCurrencyArray={removeFromTargetCurrencyArray}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
