import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Capsules = ({styles}) => {

    const [show,setShow] = useState(false);

    const Capsule = ({name, value, cd}) => {
        return(
            <tr>
                <td>{name}</td>
                <td>R${value}</td>
                <td>{cd} sec</td>
            </tr>
        )
    }

    const Content = () => {
        return(
            <div className={styles.system}>
                <p>As capsulas servem como uma alternativa para as senzus.</p>
                <p>A vantagem de utiliza-las é que existem capsulas que curam apenas o atributo desejado.</p>
                <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/capsulas</span></p>
                <p>Segue uma lista das capsulas seus preços e cooldowns:</p>
                <h3 className={styles.tableTitle}>Capsulas</h3>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th>Tipo</th>
                            <th>Valor</th>
                            <th>Recarga</th>
                        </tr>
                        <Capsule name={"Stamina"} value={1500} cd={5}/>
                        <Capsule name={"Vida"} value={1500} cd={7}/>
                        <Capsule name={"Ki"} value={1500} cd={6}/>
                        <Capsule name={"Total"} value={2000} cd={15}/>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className={styles.system}>
            <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Capsulas {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
            {show ? <Content/> : null}
        </div>
      )
}

export default Capsules