import React, { useState, useEffect } from 'react'
import styles from './Test.css'
// import CssModules from 'react-css-modules'
import axios from 'axios'

const useLatestExchangeRates = defaultBase => {
  const [data, setData] = useState(null)
  const [base, setBase] = useState(defaultBase)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios('https://api.exchangeratesapi.io/latest', { params: { base } })
      .then(response => setData(response.data))
      .catch(response => setError(response.error))
      .then(() => setLoading(false))
  }, [base])

  return { data, loading, error, base, setBase }
}

const MyComponent = () => {
  const { data, loading, error, base, setBase } = useLatestExchangeRates('GBP')

  return (
    <div>
      {loading ? <div>Loading!</div> : error ? <div>Error</div>
        : <div className={styles.container}>
          <div className={styles.main}>
            <select
              className={styles.select}
              onChange={(e) => setBase(e.target.value)}
              value={base}>
              {['GBP', 'USD', 'EUR'].map(key => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
            {data !== null && (
              <table className={styles.currencyTable}>
                <thead>
                  <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(data.rates).map((key) => (
                      <tr className={styles.currency} key={key}>
                        <td>{key}</td>
                        <td>{data.rates[key]}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )}
          </div>
        </div>
      }
    </div>
  )
}
export default MyComponent
