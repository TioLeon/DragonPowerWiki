import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Duels = ({styles}) => {

    const [show,setShow] = useState(false);

    const Content = () => {
        return(
            <div className={styles.system}>
                <p>Os duelos são uma maneira dos jogadores tirarem aquele X1zinho para provar suas habilidades no combate!</p>
                <p>Os duelos são divididos em dois modos de jogos: Clássico {"(batalhas amistosas)"} e Ranqueado {"(batalhas valendo pontos de Elo)"}</p>
                <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/duelos</span></p>
                <p>Existem duas arenas onde os duelos podem acontecer: </p>
                <div>
                    <h3 className={styles.title}>Arena de Gelo</h3>
                    <img className={styles.img} src={`${process.env.PUBLIC_URL}/dbc/prints/ArenaGelo.png`} alt={"Arena de Gelo"}></img>
                    <h3 className={styles.title}>Arena de Fogo</h3>
                    <img className={styles.img} src={`${process.env.PUBLIC_URL}/dbc/prints/ArenaFogo.png`} alt={"Arena de Fogo"}></img>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.system}>
            <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Duelos {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
            {show ? <Content/> : null}
        </div>
      )
}

export default Duels