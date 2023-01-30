import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const ItemShop = ({styles}) => {

    const [show,setShow] = useState(false);

    const Content = () => {
        return(
            <div className={styles.system}>
                <p>O /loja é o sistema utilizado para comprar items comuns.</p>
                <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/loja</span></p>
                <p>A loja é dividida nas seguintes categorias:</p>
                <ul>
                    <li><span className={styles.bold}>Blocos:</span> blocos para construção</li>
                    <li><span className={styles.bold}>Decoração:</span> itens para decoração</li>
                    <li><span className={styles.bold}>Ferramentas:</span> ferramentas para construção</li>
                    <li><span className={styles.bold}>Utilitários:</span> comidas e itens do DBC</li>
                    <li><span className={styles.bold}>Farm:</span> itens de Farm</li>
                    <li><span className={styles.bold}>Roupas:</span> roupas do mod DBC</li>
                </ul>                
            </div>
        )
    }

    return (
        <div className={styles.system}>
            <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Loja {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
            {show ? <Content/> : null}
        </div>
      )
}

export default ItemShop