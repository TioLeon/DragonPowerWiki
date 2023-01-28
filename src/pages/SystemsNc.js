import React from 'react'
import { Unselect } from '../components/BackButton'

import styles from './Systems.module.css'

const SystemsNc = ( {setServer} ) => {
    return (
        <div className={styles.container}>
            <div className={styles.intro}>
              <h1>Sistemas - Naruto C</h1>
              <p>O servidor está em Beta por isso só será catalogado no futuro.</p>
            </div>
            
            <Unselect setServer={setServer}/>
          </div>
      )
}

export default SystemsNc