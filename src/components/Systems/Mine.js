import React from 'react'

const Mine = ( {styles, name, value, unlock, img} ) => {
  return (
    <li className={styles.li}>
            <h4 className={styles.title}>{name}</h4>
            <p><span className={styles.bold}>Valor da Unidade: </span>R${value}</p>
            <p><span className={styles.bold}>Desbloqueado: </span>{unlock}</p>
            <img className={styles.img} src={`${process.env.PUBLIC_URL}/dbc/prints/${img}.png`} alt={"MinaLapis"}></img>
    </li>
  )
}

export default Mine