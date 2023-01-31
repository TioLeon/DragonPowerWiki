import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import FishingDb from './Fishing/FishingDb.json'

const Fishing = ({styles}) => {

    const [show,setShow] = useState(false);

    const Content = () => {
        return(
            <div className={styles.system}>
                <p>A pesca é uma forma de conseguir dinheiro apenas ficando parado.</p>
                <p>Na warp Pesca os jogadores pescam peixes que podem ser trocados por dinheiro.</p>
                <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/pesca</span></p>
                <div>
                    <h3 className={styles.title}>Área de pesca</h3>
                    <img className={styles.img} src={`${process.env.PUBLIC_URL}/dbc/warps/Pesca.png`} alt={"Warp pesca"}></img>
                </div>
                <p>Existem encantamentos para melhorar sua pescaria e esses encantamentos são:</p>
                <div>
                    <h3 className={styles.title}>{FishingDb.bag.name}</h3>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Descrição</th>
                                    <td>{FishingDb.bag.desc}</td>
                                </tr>
                                <tr>
                                    <th>Quantidade por nivel</th>
                                    <td>{FishingDb.bag.perlevel}</td>
                                </tr>
                                <tr>
                                    <th>Level Máximo</th>
                                    <td>{FishingDb.bag.max}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 className={styles.title}>{FishingDb.steel.name}</h3>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Descrição</th>
                                        <td>{FishingDb.steel.desc}</td>
                                    </tr>
                                    <tr>
                                        <th>Chance por nivel</th>
                                        <td>{FishingDb.steel.perlevel}</td>
                                    </tr>
                                    <tr>
                                        <th>Level Máximo</th>
                                        <td>{FishingDb.steel.max}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.title}>{FishingDb.lucky.name}</h3>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Descrição</th>
                                        <td>{FishingDb.lucky.desc}</td>
                                    </tr>
                                    <tr>
                                        <th>Quantidade por nivel</th>
                                        <td>{FishingDb.lucky.perlevel}</td>
                                    </tr>
                                    <tr>
                                        <th>Level Máximo</th>
                                        <td>{FishingDb.lucky.max}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.title}>{FishingDb.golden.name}</h3>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Descrição</th>
                                        <td>{FishingDb.golden.desc}</td>
                                    </tr>
                                    <tr>
                                        <th>Quantidade por nivel</th>
                                        <td>{FishingDb.golden.perlevel} segundos</td>
                                    </tr>
                                    <tr>
                                        <th>Level Máximo</th>
                                        <td>{FishingDb.golden.max}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.system}>
            <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Pesca {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
            {show ? <Content/> : null}
        </div>
      )
}

export default Fishing