import { Link } from 'react-router-dom';
import styles from './Post.module.css';

export default function PostCard({post}){

    return(
        <Link to={`/posts/${post.id}`}>
        <div className={styles.post}>
            <img className={styles.capa} src={`/assets/projetos/${post.foto}/capa.png`}  alt="imagem de capa" />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button className={styles.botaoLer}>Veja</button>
        </div>
        </Link>
    )
}