
import styles from './Inicio.module.css';

import posts from 'json/projetos.json'

import PostCard from 'componentes/PostCard';
import Servicos from 'componentes/Servicos';


export default function Inicio() {
    // Ordena os posts de forma decrescente pelo id
    const postsOrdenados = [...posts].sort((a, b) => b.id - a.id); // Clona e ordena o array


    return ( 
        <>    
        <ul className={styles.posts}>
         {postsOrdenados.map((post)=>(
            <li key={post.id}>
            <PostCard post={post}/>
            </li>))}  {/*repetir o laço no json*/}
        </ul>

        <Servicos/>
        </>    
        
    )
}