import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

import { FaDiscord, FaShoppingCart } from 'react-icons/fa'
import { TfiWorld } from 'react-icons/tfi'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.text}>
            <Link to={"/"}>
                <h1>DragonPower Wiki</h1>
            </Link>
            <h3>A Wiki do seu servidor preferido!</h3>
        </div>
        <div className={styles.links}>
            <div className={styles.discord} title={"Entre em nosso Discord"}>
                <a href='https://discord.gg/SuEQHaSJtc' target={'_blank'} rel={"noreferrer"}><span><FaDiscord/></span></a>
            </div>
            <div className={styles.ip} title={"Clique para copiar o Ip"}>
                <TfiWorld onClick={(e)=>{navigator.clipboard.writeText("jogar.dragonpower.xyz")}}/>    
            </div>
            <div className={styles.shop} title={"Loja do Servidor"}>
              <a href={"https://loja.dragonpower.xyz/"} target={'_blank'} rel={"noreferrer"}><span><FaShoppingCart /></span></a>
            </div>
        </div>
    </div>
  )
}

export default Header