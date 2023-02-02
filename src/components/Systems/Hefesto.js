import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Hefesto = ({styles}) => {

    const [show,setShow] = useState(false);

    const Content = () => {
        return(
            <div className={styles.system}>
               
                <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/warp hefesto</span></p>
                <div>
                    <h3 className={styles.title}>Warp Hefesto</h3>
                    <img className={styles.img} src={`${process.env.PUBLIC_URL}/dbc/warps/Hefesto.png`} alt={"Warp Hefesto"}></img>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.system}>
            <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Hefesto {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
            {show ? <Content/> : null}
        </div>
      )
}

export default Hefesto