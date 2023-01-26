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
          <p>O servidor possui vários comandos com diversas funcionalidades, para conhecer todos eles essa é a caregoria certa!</p>
          <p>A seguir estão os principais comandos do servidor: </p>
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
          <p>O servidor possui vários comandos com diversas funcionalidades, para conhecer todos eles essa é a caregoria certa!</p>
          <p>Selecione um servidor para ver os comandos dele</p>
        </div>
        <Select setServer={setServer}/>
      </div>
    )
  }
}

export default Ranks