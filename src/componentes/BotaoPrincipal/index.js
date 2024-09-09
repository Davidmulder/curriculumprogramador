import styles from './BotaoPrincipal.module.css'

export default function BotaoPrincipal(){

    return(
        <button className={
            `${styles.botaoPrincipal}
             ${styles.lg}
             `}>Voltar</button>
    )
}