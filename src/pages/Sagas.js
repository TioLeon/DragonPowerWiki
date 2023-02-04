import React, {useState} from 'react'

import styles from './Sagas.module.css'

import Select from '../components/Select'

import { Unselect } from '../components/BackButton'

import DbcData from '../dbs/Dbc/Sagas.json'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Sagas = () => {


  var [server,setServer] = useState("");
  var data;

  if(server!==""){
    server==="dbc" ? (data = DbcData) : (data = null)



    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Sagas - {server==="dbc" ? ("Dragon Block") : ("Naruto C")}</h1>
          <p>Em ambos os servidores as missões do mod foram desativadas mas existem várias missões e sagas para substituí-las e essa categoria irá lhe dar informações sobre cada uma delas!</p>
          <p>A seguir estão as principais sagas do servidor: </p>
        </div>
        <div className={styles.sagas}>
            {data.sagas.map((saga, index)=>
             <Saga saga={saga} key={index}/>
            )}
        </div>
        <Unselect setServer={setServer}/>
      </div>
    )
  }else{
    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>Sagas</h1>
          <p>Em ambos os servidores as missões do mod foram desativadas mas existem várias missões e sagas para substituí-las e essa categoria irá lhe dar informações sobre cada uma delas!</p>
          <p>Selecione um servidor para ver as sagas dele</p>
        </div>
        <Select setServer={setServer}/>
      </div>
    )
  }
}

const Saga = ( {saga} ) => {
    return(
      <div className={styles.saga}>
        <h3 className={styles.title}>{saga.title}</h3>
        <p>{saga.desc}</p>
        <p>Arcos: </p>
        <div className={styles.arcs}>
          {saga.arcs.map((arc, index) =>
            <Arc arc={arc} key={index}/>
          )}
        </div>
      </div>
    )
}

const Arc = ( {arc} ) => {
    return(
      <div className={styles.arc}>
        <h4 className={styles.title}>{arc.title}</h4>
        <p>{arc.desc}</p>
        <p><span className={styles.bold}>Cooldown: </span>{arc.cd}</p>
        <div>
          <p className={styles.bold}>Requisitos:</p>
          <ul>
            <li>Str: {arc.reqs.str}</li>
            <li>Dex: {arc.reqs.dex}</li>
            <li>Con: {arc.reqs.con}</li>
          </ul>
        </div>
        <Missions arc={arc}/>
      </div>
    )
}

const Missions = ( {arc} ) =>{

  const [show,setShow] = useState(false);

  return(
    <div>
      <h5 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Missões {"(clique para ver)"}{show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h5>
      {show ? <div className={styles.missions}>
        {arc.missions.map((mission, index) =>
          <Mission mission={mission} key={index}/>
        )}
      </div> : null}
    </div>
  )
}

const Mission = ( {mission} ) => {
  return(
    <div className={styles.mission}>
      <h4 className={styles.title}>{mission.title}</h4>
      <p><span className={styles.bold}>Objetivo: </span>{mission.obj}</p>
      <p><span className={styles.bold}>Recompensas: </span></p>
      <ul>
        {mission.rewards.map((reward, index) =>
          <li key={index}>- {reward}</li>
        )}
      </ul>
    </div>
  )
}

export default Sagas