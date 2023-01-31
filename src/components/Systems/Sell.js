import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Sell = ({styles}) => {

    const [show,setShow] = useState(false);

    const Item = ({name, value}) => {
        return(
            <tr>
                <td>{name}</td>
                <td>R${value}</td>
                <td>R${value*64}</td>
            </tr>
        )
    }

    const Content = () => {
        return(
            <div className={styles.system}>
                <p>O /vender é o sistema utilizado para realizar a venda dos minérios do sistema de minas e também das plantações que podem ser feitas nas Plots.</p>
                <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/vender</span></p>
                <p>Segue uma tabela dos valores: </p>
                <h3 className={styles.tableTitle}>Minérios</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Valor</th>
                            <th>x64</th>
                        </tr>
                        <Item name={"Lapis Lazuli"} value={12}/>
                        <Item name={"Carvão"} value={18}/>
                        <Item name={"Diamante"} value={24}/>
                        <Item name={"Esmeralda"} value={30}/>
                        <Item name={"Ferro"} value={36}/>
                    </tbody>
                </table>
                <h3 className={styles.tableTitle}>Plantações</h3>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Valor</th>
                        <th>x64</th>
                    </tr>
                    <Item name={"Cana de Açúcar"} value={22}/>
                    <Item name={"Abóbora"} value={22}/>
                    <Item name={"Fungo"} value={14}/>
                    <Item name={"Feno"} value={20}/>
                    <Item name={"Batata"} value={20}/>
                    <Item name={"Cenoura"} value={20}/>
                    <Item name={"Cenoura Dourada"} value={26}/>
                </table>
            </div>
        )
    }

    return (
        <div className={styles.system}>
            <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Vender {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
            {show ? <Content/> : null}
        </div>
      )
}

export default Sell