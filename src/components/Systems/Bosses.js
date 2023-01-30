import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import BossesInfo from '../BossesInfo'
import BossesData from './Bosses/Bosses.json'

const Bosses = ({styles}) => {
    //TODO - Arrumar o Bills e os bosses arcanos e divinos

    const [show,setShow] = useState(false);

    const Content = () => {
        return(
            <div className={styles.system}>
                <p>Os Bosses são inimigos que podem ser derrotados pelos Jogadores e requisitam um certo Rank.</p>
                <p>Ao abatelos os jogadores podem receber TP, Coins e itens que você consegue trocar no Trocador da Warp.</p>
                <p>Os Bosses são divididos de Fácil a Arcano de acordo com os atributos dele.</p>
                <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/warp bosses</span> & <span className={styles.commandbar}>/warp bosses2</span></p>
                <p>Segue uma lista dos Bosses: </p>
                <BossesInfo bosses={BossesData.bosses} vip={false}/>
                <p>Além dos Bosses desbloqueados por Rank existem os BossesVip que são exclusivos para os jogadores que ajudaram nosso servidor adquirindo vip.</p>
                <p className={styles.commandtext}>Comando: <span className={styles.commandbar}>/warp bossesvip</span></p>
                <p>Cada tipo de Vip possui diferentes Bosses com a temática dele sendo eles:</p>
                <BossesInfo bosses={BossesData.bossesVip} vip={true}/>
            </div>
        )
    }

    return (
        <div className={styles.system}>
            <h3 className={styles.mainTitle} onClick={(e)=>setShow(!show)}>Bosses {show ? <span><FaArrowUp/></span> : <span><FaArrowDown/></span>}</h3>
      {show ? <Content/> : null}
        </div>
      )
}

export default Bosses