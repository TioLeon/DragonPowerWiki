import React from 'react'

import styles from './Home.module.css'

import { BsFillGearFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { HiCommandLine } from 'react-icons/hi2'
import { GiRank3, GiScrollUnfurled } from 'react-icons/gi'
import { RiVipFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.welcome}>
            <p>Bem vindo à Wiki da nossa network, aqui você encontrará diversas informações sobre nossos diferentes servidores.</p>
            <p>As principais informações que você pode encontrar são:</p>
            <div className={styles.infotypes}>
                <Link to={"systems"}>
                    <div className={styles.info_container}>
                        <span className={styles.info_title}>Sistemas<BsFillGearFill/></span>
                        <p>Nosso servidor possui diversos sistemas, se você possui dúvidas ou não conhece alguns deles essa categoria irá te mostrar como utilizar cada um dos sistemas implementados em cada servidor!</p>
                    </div>
                </Link>
                <Link to={"sagas"}>
                    <div className={styles.info_container}>
                        <span className={styles.info_title}>Sagas<GiScrollUnfurled/></span>
                        <p>Em ambos os servidores as missões do mod foram desativadas mas existem várias missões e sagas para substituí-las e essa categoria irá lhe dar informações sobre cada uma delas!</p>
                    </div>
                </Link>
                <Link to={"warps"}>
                    <div className={styles.info_container}>
                        <span className={styles.info_title}>Warps <HiLocationMarker/></span>
                        <p>Warps são os locais de teleporte, elas são acessadas com o comando /warps e podem te levar para Arenas, Missões, Minas, Eventos e muitos outros lugares!</p>
                    </div>
                </Link>
                <Link to={"comandos"}>
                    <div className={styles.info_container}>
                        <span className={styles.info_title}>Comandos <HiCommandLine/></span>
                        <p>O servidor possui vários comandos com diversas funcionalidades, para conhecer todos eles essa é a caregoria certa!</p>
                    </div>
                </Link>
                <Link to={"ranks"}>
                    <div className={styles.info_container}>
                        <span className={styles.info_title}>Ranks <GiRank3/></span>
                        <p>Alguns dos servidores de nossa rede possuem o sistema de RankUp que consiste em o jogador desbloquear novas atividades no servidor conforme aumenta seu Rank, essa categoria mostras os Ranks existentes suas vantagens e preços (ranks são comprados com a moeda do jogo).</p>
                    </div>
                </Link>
                <a href={"https://loja.dragonpower.xyz"} target={"_blank"} rel={"noreferrer"}>
                    <div className={styles.info_container}>
                        <span className={styles.info_title}>Vips <RiVipFill/></span>
                        <p>Se você quiser ajudar nosso servidor você pode fazer isso adquirindo um vip, modos ou cash através de nossa loja que pode ser acessada clicando aqui.</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home