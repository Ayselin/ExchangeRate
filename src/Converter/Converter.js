import React, { Component } from 'react'
import styles from './Converter.scss'
import CssModules from 'react-css-modules'
import axios from 'axios'

class Converter extends Component {
  constructor (props) {
    super(props)
    // set up our initial state
    this.state = {
      base: 'USD',
      data: null,
      loading: false,
      error: null
    }
  }

  onChange (base) {
    this.setState({ base })
  }

  componentDidMount () {
    this.fetch()
  }

  fetch () {
    const { base } = this.state
    // Before we start, let's set our state to loading: true, and reset any errors that happened in the past
    this.setState({ loading: true, error: null })
    // Start the request
    axios('https://api.exchangeratesapi.io/latest', { params: { base } })
      .then(response => {
        // when the request was successful
        this.setState({ data: response.data })
      })
      .catch(error => {
        // when the request errored
        this.setState({ error })
      })
      // After the request (if it was successful or not), set loading back to false
      .then(() => this.setState({ loading: false }))
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.base !== this.state.base) {
      this.fetch()
    }
  }
  render () {
    const { loading, error, data, base } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <select
            className={styles.select}
            onChange={(e) => this.onChange(e.target.value)}
            value={base}>
            {['GBP', 'USD', 'EUR'].map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
          {(() => {
            if (error) return <h1>Error!</h1>
            if (loading) return <h1>Loading!</h1>
            if (data) {
              return (
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
                          <td>{data.rates[key].toFixed(2)}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              )
            }
            return null
          })()}
          <div className={styles.photo}>
          </div>
        </div>
      </div>
    )
  }
}

export default CssModules(Converter, styles)
