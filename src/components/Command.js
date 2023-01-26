import React from 'react'
import styles from '../pages/Commands.module.css'

const Command = ( { command }) => {
  return (
    <div className={styles.command}>
        <h3 className={styles.title}>{command.name}</h3>
        <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/{command.command}</span></p>
        <p className={styles.desc}>{command.desc}</p>
    </div>
  )
}

export default Command