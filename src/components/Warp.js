import React from 'react'
import styles from '../pages/Warps.module.css'

const Warp = ( { warp }) => {
  return (
    <div className={styles.warp}>
        <h3 className={styles.title}>{warp.name}</h3>
        <img className={styles.img} src={`${process.env.PUBLIC_URL}/dbc/warps/${warp.thumb}`} alt={"Imagem"}></img>
        <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/{warp.command}</span></p>
    </div>
  )
}

export default Warp