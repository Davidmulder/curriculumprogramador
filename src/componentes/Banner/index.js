/* eslint-disable jsx-a11y/alt-text */
import styles from './Banner.module.css';
import circuloColorido from 'assets/fundo.jpeg';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner(){

    return(
        <div className={styles.banner}>
         <div className={styles.apresentacao}>         
           <h1 className={styles.titulo}> David Orion </h1> 

           <p className={styles.paragrafo}>
           Engenheiro de Software Sênior | Arquitetura SaaS & Marketplace | Laravel . Symfony . Zend . PHP |Django . Python | Spring Boot | React | Golang | Angula | REST Escaláveis | APIs RESTful | Soluções Escaláveis| ASP Classic
           </p>            
         </div> 

         <div className={styles.imagens}>
            <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}/>

            <img className={styles.minhaFoto} src={minhaFoto} alt='Foto de rosto'/>
            
            
            
            </div>  

         </div>   
    )
}