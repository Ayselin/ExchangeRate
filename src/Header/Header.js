import React from  'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

const navItems = [{ to: '/about', text: 'About' }, { to: '/converter', text: 'Check the Rate' }]
const Header = () => {
  return (

    <nav className={styles.navigation}>
      <div className={styles.container}>
        <h1>Today’s exchange rates</h1>
        <ul className={styles.list}>
          {navItems.map(({ to, text }) => (
            <li className={styles.item} key={to}>
              <Link className={styles.link} to={to}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default CSSModules(Header, styles)
