import PostModelo from "componentes/PostModelo";
import styles from './SobreMin.module.css';
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";
import sobremin from 'json/sobremim.json'; // Importando o JSON diretamente

export default function SobreMim(){

    // Acessa o primeiro item da lista de objetos
    const dados = sobremin[0]; 

    return(
        <PostModelo
        fotoCapa={fotoCapa}
         titulo="Sobre mim"
        >
         <h3 className={styles.subtitulo}>
             {dados.titulo} 
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto do david"
                className={styles.fotoSobreMim}
            />

           <p className={styles.paragrafo}>
           <span dangerouslySetInnerHTML={{ __html: dados.texto }}></span>
            </p>
            <p className={styles.paragrafo}>
           <span dangerouslySetInnerHTML={{ __html: dados.resumo }}></span>
            </p>
            
        </PostModelo>
    )
}