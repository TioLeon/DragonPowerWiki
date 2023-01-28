import React from 'react'
import BossesInfo from '../BossesInfo'
import BossesData from './Bosses/Bosses.json'

const Bosses = ({styles}) => {
    return (
        <div className={styles.system}>
            <h3 className={styles.title}>Bosses</h3>
            <p>Os Bosses são inimigos que podem ser derrotados pelos Jogadores e requisitam um certo Rank.</p>
            <p>Ao abatelos os jogadores podem receber TP, Coins e itens que você consegue trocar no Trocador da Warp.</p>
            <p>Os Bosses são divididos de Fácil a Arcano de acordo com os atributos dele.</p>
            <p>Segue uma lista dos Bosses: </p>
            <BossesInfo bosses={BossesData.bosses}/>
        </div>
      )
}

export default Bosses