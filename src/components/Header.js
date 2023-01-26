import React from 'react'
import { Link } from 'react-router-dom'

import Goku from '../assets/Goku.png'
import Naruto from '../assets/Naruto.png'

import styles from './Header.module.css'

import { FaDiscord, FaShoppingCart } from 'react-icons/fa'
import { TfiWorld } from 'react-icons/tfi'

const Header = () => {
  /*return (
    <div className={styles.header}>
        <Link to={"/"}>
            <h1>DragonPower Wiki</h1>
        </Link>
        <h3>A Wiki do seu servidor preferido!</h3>
        <div className={styles.servers}>
            <div className={styles.link}>
                <Link to={"dbc"}><span>DragonBlock C</span><img src={Goku} alt={'dragonblock'}></img></Link>
            </div>
            <div className={styles.link}>
                <Link to={"nc"}><span>NarutoC </span><img src={Naruto} alt={'naruto'}></img></Link>
            </div>
        </div>
    </div>
  )*/

  //<img src={"https://cdn.discordapp.com/icons/414272866050113536/a811034f58bf3af85e5abd9e62507478.png?size=2048"} alt={'dragonblock'}onClick={(e)=>{navigator.clipboard.writeText("jogar.dragonpower.xyz");}}></img>

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
                <span><FaDiscord/></span>
            </div>
            <div className={styles.ip} title={"Clique para copiar o Ip"}>
                <TfiWorld onClick={(e)=>{navigator.clipboard.writeText("jogar.dragonpower.xyz")}}/>    
            </div>
            <div className={styles.shop} title={"Loja do Servidor"}>
              <a href={"https://loja.dragonpower.xyz/"} target={'_blank'} rel="noreferrer"><span><FaShoppingCart /></span></a>
            </div>
        </div>
    </div>
  )
}

export default Header