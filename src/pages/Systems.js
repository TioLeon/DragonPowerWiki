import React, { useState } from 'react'

import SystemsDbc from './SystemsDbc'

import Select from '../components/Select'
import SystemsNc from './SystemsNc';

import styles from './Systems.module.css'


const Systems = () => {
  
  const [server, setServer] = useState("");

  switch (server){
    case "dbc":{
        return (
            <SystemsDbc setServer={setServer}/>
        )
    }
    case "nc":{
        return (
            <SystemsNc setServer={setServer}/>
        )
    }
    default:{
        return(
            <div className={styles.container}>
                <div className={styles.intro}>
                    <p>Nosso servidor possui diversos sistemas, se você possui dúvidas ou não conhece alguns deles essa categoria irá te mostrar como utilizar cada um dos sistemas implementados em cada servidor!</p>
                    <Select setServer={setServer}/>
                </div>
            </div>
            )
    }
  }


}

export default Systems