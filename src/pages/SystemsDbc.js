import React from 'react'
import { Unselect } from '../components/BackButton'
import Bosses from '../components/Systems/Bosses'
import Mine from '../components/Systems/Mines'

import styles from './Systems.module.css'

const SystemsDbc = ( {setServer }) => {
  return (
    <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Sistemas - Dragon Block</h1>
          <p>Nosso servidor possui diversos sistemas, se você possui dúvidas ou não conhece alguns deles essa categoria irá te mostrar como utilizar cada um dos sistemas implementados em cada servidor!</p>
        </div>
        <div className={styles.systems}>
            <Mine styles={styles}/>
            <Bosses styles={styles}></Bosses>
        </div>
        <Unselect setServer={setServer}/>
      </div>
  )
}

export default SystemsDbc