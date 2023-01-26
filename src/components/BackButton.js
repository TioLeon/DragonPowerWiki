import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './RandomComponents.module.css'

const BackButton = ( { to } ) => {
  const navigate = useNavigate();
  return (
    <button onClick={(e)=>navigate(to)} className={styles.back}>Voltar</button>
  )
}

export default BackButton