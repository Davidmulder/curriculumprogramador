
import styles from './Inicio.module.css';

import posts from 'json/projetos.json'

import PostCard from 'componentes/PostCard';
import Servicos from 'componentes/Servicos';


export default function Inicio() {

    return ( 
        <>    
        <ul className={styles.posts}>
         {posts.map((post)=>(
            <li key={post.id}>
            <PostCard post={post}/>
            </li>))}  {/*repetir o laço no json*/}
        </ul>

        <Servicos/>
        </>    
        
    )
}