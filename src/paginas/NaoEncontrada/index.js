import BotaoPrincipal from 'componentes/BotaoPrincipal'
import styles from './NaoEncontrada.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada(){

    const navegar = useNavigate() 

    return(
        <>
                <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>
                    Ops Pagina não encontrada
                </h1>
                <p className={styles.paragrafo}>
                    Voltar para Pagina anterior !
                </p>

                <div 
                className={styles.botaoContainer}
                 onClick={() => navegar(-1)}   // voltar pagina anterior
                >
                    <BotaoPrincipal/>
                </div>
                <img className={styles.imagemCachorro} src={erro404} alt='imagem do cachorro' />
                </div>

                <div className={styles.espacoEmBranco}>



                </div>
        </>

        
    )
}