import styles from './Rodape.module.css'
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg';
import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai'; // Ícones do LinkedIn e Gmail


export default function Rodape(){

    return(
        <footer className={styles.rodape}>
            <MarcaRegistrada/>
            Desenvolvido por David Orion 
            <div className={styles.contato}>
                <a href="https://wa.me/48996143662" target="_blank" rel="noreferrer">
                    <FaWhatsapp size={32} color="green" /> {/* Ícone do WhatsApp */}
                </a>

                <a href="mailto:david.foxmulder@gmail.com" target="_blank" rel="noreferrer">
                    <AiFillMail size={32} color="#D44638" /> {/* Cor do Gmail */}
                </a>

                <a href="https://www.linkedin.com/in/davidmuldersilva/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin size={32} color="#0A66C2" /> {/* Cor do LinkedIn */}
                </a>


            </div>
        </footer>
    )
}