import React from 'react'
import Mine from './Mine'

const Mines = ( {styles} ) => {
  return (
    <div className={styles.system}>
        <h3 className={styles.title}>Minas</h3>
        <p>A mina é um local onde os jogador podem minerar e vender os minérios para conseguir money</p>
        <p>Cada mina possui um NPC responsável por entregar aos jogadores uma picareta Inicial.</p>
        <p>Existem 5 minas sendo elas:</p>
        <ul className={styles.ul}>
          <Mine name={"Mina Lapis"} img={"MinaLapis"} styles={styles} unlock={"Mina Inicial"} value={400}/>
          <Mine name={"Mina Carvão"} img={"MinaCarvão"} styles={styles} unlock={"Rank Kaioken"} value={400}/>
          <Mine name={"Mina Diamante"} img={"MinaDiamante"} styles={styles} unlock={"Rank SSJBlueKaioken"} value={400}/>
          <Mine name={"Mina Esmeralda"} img={"MinaEsmeralda"} styles={styles} unlock={"Mina exclusiva para vips"} value={400}/>
          <Mine name={"Mina Zenkai"} img={"MinaZenkai"} styles={styles} unlock={"A partir do 1º Zenkai"} value={400}/>
        </ul>
    </div>
  )
}

export default Mines