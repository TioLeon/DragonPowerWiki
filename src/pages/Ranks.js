import React, { useState } from 'react'

import styles from './Ranks.module.css'

import DbcData from '../dbs/Dbc/Ranks.json'
import NcData from '../dbs/Nc/Ranks.json'

import Select from '../components/Select'

import BackButton from '../components/BackButton'
import Rank from '../components/Rank'

const Ranks = () => {

  const [server,setServer] = useState("");
  var data;

  if(server!==""){
    server==="dbc" ? (data = DbcData.ranks) : (data = NcData.ranks)

    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Ranks - {server==="dbc" ? ("Dragon Block") : ("Naruto C")}</h1>
          <p>Alguns dos servidores de nossa rede possuem o sistema de RankUp que consiste em o jogador desbloquear novas atividades no servidor conforme aumenta seu Rank, essa categoria mostras os Ranks existentes suas vantagens e preços (ranks são comprados com a moeda do jogo).</p>
          <p>A seguir está uma lista dos ranks disponíveis: </p>
        </div>
        <div className={styles.ranks}>
          {data.map((rank) =>
            <Rank rank={rank}/>
          )}
        </div>
        <BackButton to={"/"}/>
      </div>
    )
  }else{
    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Comandos</h1>
          <p>Alguns dos servidores de nossa rede possuem o sistema de RankUp que consiste em o jogador desbloquear novas atividades no servidor conforme aumenta seu Rank, essa categoria mostras os Ranks existentes suas vantagens e preços (ranks são comprados com a moeda do jogo).</p>
          <p>Selecione um servidor para ver os Ranks dele</p>
        </div>
        <Select setServer={setServer}/>
      </div>
    )
  }
}

export default Ranks