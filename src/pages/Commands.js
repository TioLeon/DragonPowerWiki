import React, {useState} from 'react'

import styles from './Commands.module.css'

import DbcData from '../dbs/Dbc/Commands.json'
import NcData from '../dbs/Nc/Commands.json'

import Command from '../components/Command'
import Select from '../components/Select'

import { Unselect } from '../components/BackButton'

const Commands = () => {


  var [server,setServer] = useState("");
  var data;

  if(server!==""){
    server==="dbc" ? (data = DbcData.commands) : (data = NcData.commands)

    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Comandos - {server==="dbc" ? ("Dragon Block") : ("Naruto C")}</h1>
          <p>O servidor possui vários comandos com diversas funcionalidades, para conhecer todos eles essa é a caregoria certa!</p>
          <p>A seguir estão os principais comandos do servidor: </p>
        </div>
        <div className={styles.commands}>
          {data.map((command) =>
            <Command command={command} key={command.name}/>
          )}
        </div>
        <Unselect setServer={setServer}/>
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

export default Commands