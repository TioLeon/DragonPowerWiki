import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Zenkai = ({styles}) => {

    const [show,setShow] = useState(false);

    const ZenkaiDiv = ({level, status, min_lvl, tp}) => {
        return(
            <div>
                <h3 className={styles.tableTitle}>Zenkai {level}</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Máximo de Status</th>
                            <td>{status}k</td>
                        </tr>
                        <tr>
                            <th>Level Mínimo {"(V)"}</th>
                            <td>{min_lvl}</td>
                        </tr>
                        <tr>
                            <th>Tp Necessário</th>
                            <td>{tp}</td>
                        </tr>                       
                    </tbody>
                </table>
            </div>
        )
    }

    const Content = () => {
        return(
            <div className={styles.system}>
                <p>O sistema de Zenkai é um dos principais sistemas de nosso servidor, ele é comunmente mais utilizado por jogadores de nível avançado.</p>
                <h4>Como Funciona?</h4>
                <p>Em nosso servidor o limite de atributos inicial é de 200k mas os jogadores podem mudar isso através dos Zenkais.</p>
                <p>Ao realizar um Zenkai o jogador reseta seu personagem, perdendo habilidades, atributos e técnicas em troca de poder ultrapassar o limite de status anterior.</p>
                <p>Para cada um dos Zenkais existe um requisito mínimo de Level no {"(V)"} e uma quantidade de TP</p>
                <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/zenkai</span></p>
                <p>Segue uma lista dos níveis de Zenkai, seus requisitos e recompensas</p>
                <div className={styles.zenkais}>
                    <ZenkaiDiv level={1} status={"250k"} min_lvl={"130k"} tp={"600b"}/>
                    <ZenkaiDiv level={2} status={"300k"} min_lvl={"170k"} tp={"900b"}/>
                    <ZenkaiDiv level={3} status={"400k"} min_lvl={"200k"} tp={"1.2t"}/>
                    <ZenkaiDiv level={4} status={"600k"} min_lvl={"240k"} tp={"2.2t"}/>
                </div>             
            </div>
        )
    }

    return (
        <div className={styles.system}>
            <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Zenkai {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
            {show ? <Content/> : null}
        </div>
      )
}

export default Zenkai