import React, { useState } from 'react'

import styles from './Warps.module.css'

import DbcData from '../dbs/Dbc/Warps.json'
import NcData from '../dbs/Nc/Warps.json'

import Select from '../components/Select'

import { Unselect } from '../components/BackButton'
import Warp from '../components/Warp'

const Warps = () => {

  const [server,setServer] = useState("");
  var data;

  if(server!==""){
    server==="dbc" ? (data = DbcData.warps) : (data = NcData.warps)

    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Warps - {server==="dbc" ? ("Dragon Block") : ("Naruto C")}</h1>
          <p>Warps são os locais de teleporte, elas são acessadas com o comando /warps e podem te levar para Arenas, Missões, Minas, Eventos e muitos outros lugares!</p>
          <p>A seguir está uma lista das principais warps disponíveis: </p>
        </div>
        <div className={styles.warps}>
          {data.map((warp) =>
            <Warp warp={warp} key={warp.name}/>
          )}
        </div>
        <Unselect setServer={setServer}/>
      </div>
    )
  }else{
    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Warps</h1>
          <p>Warps são os locais de teleporte, elas são acessadas com o comando /warps e podem te levar para Arenas, Missões, Minas, Eventos e muitos outros lugares!</p>
          <p>Selecione um servidor para ver as Warps dele</p>
        </div>
        <Select setServer={setServer}/>
      </div>
    )
  }
}

export default Warps