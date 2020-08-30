import React, { useEffect, useState } from 'react'
import getUserToken from '../../helper-functions/getToken'
import Header from '../../components/header/header.component'
import CustomSelect from '../../components/custom-select/custom-select.component'
import CURRENCY_OPTIONS from './currencyOptions'
import { useHistory } from 'react-router-dom'
import CustomFormInput from '../../components/custom-form-input/custom-form-input.component'
import CurrencySourceItem from '../../components/currency-source-item/currency-source-item.component'
import axios from 'axios'
import './home.styles.scss'

const Home = () => {
  const [targetCurrency, setTargetCurrency] = useState(CURRENCY_OPTIONS[0])
  const [sourceCurrency, setSourceCurrency] = useState(CURRENCY_OPTIONS[0])
  const [sourceCurrencyArray, setSourceCurrencyArray] = useState([])
  const [targetCurrencyAmount, setTargetCurrencyAmount] = useState(1)
  const [currencyData, setCurrencyData] = useState({})
  const history = useHistory()
  useEffect(() => {
    if (!getUserToken()) history.push('/signin')
  }, [history])

  useEffect(() => {
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=${targetCurrency}`)
      .then((response) => {
        setCurrencyData(response.data.rates)
      })
      .catch((error) => console.log(error))
  }, [targetCurrency])

  useEffect(() => {
    const addToSourceCurrencyArray = (currencyCode) => {
      if (sourceCurrencyArray.includes(currencyCode)) return
      setSourceCurrencyArray([...sourceCurrencyArray, currencyCode])
    }
    addToSourceCurrencyArray(sourceCurrency)
  }, [sourceCurrency, setSourceCurrencyArray, sourceCurrencyArray])

  const removeFromSourceCurrencyArray = (e) => {
    if (!sourceCurrencyArray.includes(e.target.id)) return
    setSourceCurrencyArray(
      sourceCurrencyArray.filter((itemCode) => itemCode !== e.target.id),
    )
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1>Currency Converter</h1>
        <div>
          <h2>Enter Amount</h2>
          <CustomFormInput
            value={targetCurrencyAmount}
            handleChange={(e) => setTargetCurrencyAmount(e.target.value)}
            type="number"
          />
        </div>
        <CustomSelect
          optionsArray={CURRENCY_OPTIONS}
          label="Choose Target Currency"
          onChange={(e) => setTargetCurrency(e.target.value)}
        />
        <CustomSelect
          optionsArray={CURRENCY_OPTIONS}
          label="Choose Source Currency"
          onChange={(e) => setSourceCurrency(e.target.value)}
        />
        <span className="hint-text">
          *You can choose multiple source currency by choosing them one after
          the other
        </span>
        <div>
          {sourceCurrencyArray.map((item) => (
            <CurrencySourceItem
              key={item}
              currencyCode={item}
              rateRatio={currencyData[item]}
              targetAmount={targetCurrencyAmount}
              removeFromSourceCurrencyArray={removeFromSourceCurrencyArray}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
