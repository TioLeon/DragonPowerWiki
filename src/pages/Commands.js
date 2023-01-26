import React, {useState} from 'react'

import Command from '../components/Command'
import styles from './Commands.module.css'

import Goku from '../assets/Goku.png'
import Naruto from '../assets/Naruto.png'

import DbcData from '../dbs/Dbc/Commands.json'
import NcData from '../dbs/Nc/Commands.json'

import { useNavigate } from 'react-router-dom'

const Commands = () => {

  const navigate = useNavigate();

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
            <Command command={command}/>
          )}
        </div>
        <button onClick={(e)=>setServer("")} className={styles.back}>Voltar</button>
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
        <div className={styles.servers}>
            <div className={styles.link}>
                <button onClick={(e)=>setServer("dbc")}>
                  <span>DragonBlock C</span><img src={Goku} alt={'dragonblock'}></img>
                </button>
            </div>
            <div className={styles.link}>
                <button onClick={(e)=>setServer("nc")}>
                  <span>NarutoC </span><img src={Naruto} alt={'naruto'}></img>
                </button>
            </div>
        </div>
        <button onClick={(e)=>navigate("/")} className={styles.back}>Voltar</button>
      </div>
    )
  }
}

export default Commands