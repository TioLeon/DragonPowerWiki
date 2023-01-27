import React from 'react'

import styles from '../pages/Ranks.module.css'

const Rank = ( {rank} ) => {
  return (
    <div className={styles.rank}>
        <h3 className={styles.title}>{rank.name}</h3>
        <p className={styles.price}>Preço : <span className={styles.value}>R${rank.price}</span></p>
        <div className={styles.rewards}>
            <h4 className={styles.rewardTitle}>Recompensas:</h4>
            <ul>
                {rank.rewards.map((reward, index) =>
                    <Reward reward={reward} key={index}/>
                )}
            </ul>
        </div>
    </div>
  )
}

const Reward = ( {reward} ) => {
    return (
        <li>{"->"}  {reward}</li>
    )
}

export default Rank