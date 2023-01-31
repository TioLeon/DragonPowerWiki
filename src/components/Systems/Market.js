import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Market = ({styles}) => {

    const [show,setShow] = useState(false);

    const Content = () => {
        return(
            <div className={styles.system}>
                <p>O mercado é uma forma dos jogadores venderem seus itens para outros jogadores de forma segura</p>
                <p>Ele funciona através dos comandos: </p>
                <ul>
                    <li><span className={styles.commandbar}>/mercado ver</span>: Ver os itens que estão sendo vendidos no momento.</li>
                    <li><span className={styles.commandbar}>/mercado vender</span>: Vender o item que está segurando no momento.</li>
                </ul>
            </div>
        )
    }

    return (
        <div className={styles.system}>
            <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Mercado {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
            {show ? <Content/> : null}
        </div>
      )
}

export default Market