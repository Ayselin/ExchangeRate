import React, { Component } from 'react'
import Converter from '../Converter/Converter'
import About from '../About/About.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import Test from '../Test.js'
import Header from '../Header/Header'
import styles from './App.scss'
import CssModules from 'react-css-modules'

class App extends Component {
  render () {
    return (
      <Router>
        <div className={styles.App}>
          <Header />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/about' component={About} />
            <Route exact path='/converter' component={Converter} />

          </Switch>
        </div>
      </Router>

    )
  }
}

export default CssModules(App, styles)
