import React, { useState } from 'react'
import Mine from './Mine'
import { FaArrowDown, FaArrowUp} from 'react-icons/fa'
const Mines = ( {styles} ) => {
  const [show,setShow] = useState(false);

  const Content = ()=>{
    return (
        <div>
          <p>A mina é um local onde os jogador podem minerar e vender os minérios para conseguir money</p>
          <p>Cada mina possui um NPC responsável por entregar aos jogadores uma picareta Inicial.</p>
          <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/minas</span></p>
          <p>Existem 5 minas sendo elas:</p>
          <ul className={styles.ul}>
            <Mine name={"Mina Lapis"} img={"MinaLapis"} styles={styles} unlock={"Mina Inicial"} value={12}/>
            <Mine name={"Mina Carvão"} img={"MinaCarvão"} styles={styles} unlock={"Rank Kaioken"} value={18}/>
            <Mine name={"Mina Diamante"} img={"MinaDiamante"} styles={styles} unlock={"Rank SSJBlueKaioken"} value={24}/>
            <Mine name={"Mina Esmeralda"} img={"MinaEsmeralda"} styles={styles} unlock={"Mina exclusiva para vips"} value={30}/>
            <Mine name={"Mina Zenkai"} img={"MinaZenkai"} styles={styles} unlock={"A partir do 1º Zenkai"} value={36}/>
          </ul>
        </div>
    )
  }
  return (
    <div className={styles.system}>
      <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Minas {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
      {show ? <Content/> : null}
    </div>
  )
}

export default Mines