import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Bank = ({styles}) => {

    const [show,setShow] = useState(false);

    const Content = () => {
        return(
            <div className={styles.system}>
                <p>O banco é utilizado para guardar seu money e TP</p>
                <p>Quando você atinge o limite de TP no seu V o excedente vai para o banco automáticamente.</p>
                <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/banco</span></p>
                <p>Ao utilizar esse comando você é teletransportado para o banco e lá dentro pode interagir com o Caixa Eletrônico que abre o menu do banco.</p>
            </div>
        )
    }

    return (
        <div className={styles.system}>
            <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Banco {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
            {show ? <Content/> : null}
        </div>
      )
}

export default Bank