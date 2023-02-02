import React from 'react'
import { Unselect } from '../components/BackButton'
import Bosses from '../components/Systems/Bosses'
import Duels from '../components/Systems/Duels'
import ItemShop from '../components/Systems/ItemShop'
import Mine from '../components/Systems/Mines'
import Sell from '../components/Systems/Sell'
import Fishing from '../components/Systems/Fishing'

import styles from './Systems.module.css'
import Market from '../components/Systems/Market'
import Capsules from '../components/Systems/Capsules'
import Bank from '../components/Systems/Bank'
import Zenkai from '../components/Systems/Zenkai'
import Hefesto from '../components/Systems/Hefesto'

const SystemsDbc = ( {setServer }) => {
  return (
    <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Sistemas - Dragon Block</h1>
          <p>Nosso servidor possui diversos sistemas, se você possui dúvidas ou não conhece alguns deles essa categoria irá te mostrar como utilizar cada um dos sistemas implementados em cada servidor!</p>
          <p>{"(Clique em uma categoria para mostrar)"}</p>
        </div>
        <div className={styles.systems}>
            <Mine styles={styles}/>
            <Sell styles={styles}/>
            <ItemShop styles={styles}/>
            <Market styles={styles}/>
            <Bank styles={styles}/>
            <Fishing styles={styles}/>
            <Bosses styles={styles}/>
            <Capsules styles={styles}/>
            <Duels styles={styles}/>
            <Hefesto styles={styles}/>
            <Zenkai styles={styles}/>
        </div>
        <Unselect setServer={setServer}/>
      </div>
  )
}

export default SystemsDbc