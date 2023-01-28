import React, { useState } from 'react'
import styles from '../pages/Systems.module.css'

import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'

const BossesInfo = ({ bosses}) => {

    const [index, setIndex] = useState(0)

    var hasNext = (index + 1) < bosses.length;
    var hasPrevious = (index !== 0);
    var boss = bosses[index];
    return (
        <div className={styles.bosses}>
            <h3 className={styles.title}>Bosses</h3>
            <h4>{boss.name}</h4>
            <p><span className={styles.bold}>Dificuldade:</span> {boss.level}</p>
            <img src={`${process.env.PUBLIC_URL}/dbc/bosses/${boss.name}.png`} alt='print' className={styles.print_img}></img>
            <p><span className={styles.bold}>Vida:</span> {boss.health}</p>
            <p><span className={styles.bold}>Regeneração:</span> {boss.regen}</p>
            <p><span className={styles.bold}>Recompensas:</span></p>
            <ul>
                {boss.rewards.map((reward)=>{
                    return(<li>- {reward}</li>)
                })}
            </ul>
            <div className={styles.navigation}>
                <button onClick={(e) => {
                    if (hasPrevious) {
                        setIndex(index - 1)
                    }
                }
                }> {<FaArrowLeft/>} </button>
                <button onClick={(e) => {
                    if (hasNext) {
                        setIndex(index + 1)
                    }
                }
                }> {<FaArrowRight/>} </button>
            </div>
        
        </div>
    )
}

export default BossesInfo