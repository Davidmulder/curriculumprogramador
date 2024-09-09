import { useParams, useNavigate } from "react-router-dom"
import posts from "json/projetos.json"
import PostModelo from "componentes/PostModelo";
import './Post.css';



export default function Post(){
   // console.log(parametros)  criar paramento que vai receber id 
   const parametros = useParams();
   const navigate = useNavigate()

   const post = posts.find((post) => {
   return post.id === Number(parametros.id);

   })
  
   if (!post) {
    navigate('/pagina-nao-encontrada'); // Redirecione para a página 404
    return null;
 }

    return(
        <PostModelo
        fotoCapa={`/assets/projetos/${post.id}/capa.png`}
        titulo={post.titulo}
        >
            <h4>{post.legenda}</h4>
            <div className="imagensContainer">
                        <div className="imagemItem">
                        <img 
                            className="imagemCentralizada" 
                            src={`/assets/projetos/${post.id}/1.png`} 
                            alt="Descrição da Imagem 1" 
                        />

                        

                        </div>
                        <div className="imagemItem">
                        <img 
                            className="imagemCentralizada" 
                            src={`/assets/projetos/${post.id}/2.png`} 
                            alt="Descrição da Imagem 2" 
                        />

                        
                        </div>

                    </div> 

                    <h4>Repositorio GITHUB  ( {post.github} )</h4>
                    <br></br>

           <div className="legenda">             
           
            <p dangerouslySetInnerHTML={{ __html: post.texto }}></p>
            
            </div>    
           
            
        </PostModelo>
    )
}
