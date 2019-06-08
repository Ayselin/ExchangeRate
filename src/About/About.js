import React from 'react'
import styles from './About.scss'
import CSSModules from 'react-css-modules'

const About = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.title}>About</header>
      <article className={styles.article}>
        <p>Exchange rates are influenced by banks and trading institutions and the volume of currency they are buying and selling at any given time. Currencies are traded (bought and sold) daily around the world.</p>

        <p>One currency can be purchased by another currency through banking institutions or on the open market. The volumes of currencies traded are increased and decreased depending on the attractiveness of any particular currency,
        which depends on a multitude of factors such as political stability,
        economic strength, government debt and fiscal policy among others.</p>

        <p>Government central banks also have the ability to set a currency at a constant price through a method called pegging, which essentially tethers the value of one currency to another. 
        The value (or price) of a currency is determined by its traded volume. If a currency is competitively priced, traders will buy the currency, essentially driving up its value.
        If a currency is not competitively priced, traders may avoid buying, or even sell it, essentially driving down its value.</p>
      </article>
    </div>

  )
}

export default CSSModules(About, styles)
