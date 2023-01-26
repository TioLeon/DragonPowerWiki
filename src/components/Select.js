import React from 'react'

import BackButton from '../components/BackButton'

import styles from './Select.module.css'

import Goku from '../assets/Goku.png'
import Naruto from '../assets/Naruto.png'

const Select = ( { setServer } ) => {
  return (
    <div className={styles.container}>
        <div className={styles.servers}>
            <div className={styles.link}>
                <button onClick={(e)=>{setServer("dbc")}}>
                <span>DragonBlock C</span><img src={Goku} alt={'dragonblock'}></img>
                </button>
            </div>
            <div className={styles.link}>
                <button onClick={(e)=>{setServer("nc")}}>
                <span>NarutoC </span><img src={Naruto} alt={'naruto'}></img>
                </button>
            </div>
        </div>
        <BackButton to={"/"}/>
    </div>
  )
}

export default Select