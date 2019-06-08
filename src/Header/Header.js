import React from  'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Today’s exchange rates</h1>
      <ul className={styles.header}>
        <li><Link classNama={styles.list} to='/about'>About</Link></li>
        <li><Link to='/converter'>Check the Rate</Link></li>
      </ul>
    </div>
  )
}
export default CSSModules(Header, styles)
