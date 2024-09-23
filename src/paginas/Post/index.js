import { useParams, useNavigate } from "react-router-dom"
import posts from "json/projetos.json";
import PostModelo from "componentes/PostModelo";
import { useEffect, useState } from "react";
import { marked } from "marked";
import './Post.css';



export default function Post(){
   // console.log(parametros)  criar paramento que vai receber id 
   const parametros = useParams();
   const navigate = useNavigate();
   const [readmeContent, setReadmeContent] = useState(""); // Estado para armazenar o conteúdo do README
    

   const post = posts.find((post) => {
   return post.id === Number(parametros.id);

   })


  useEffect(() => {
        if (!post) {
            navigate('/pagina-nao-encontrada'); // Redireciona para a página 404 se não encontrar o post
            return;
        }

        // Função para carregar o arquivo README.md da pasta projetos
        const loadReadme = async () => {
            try {
                const response = await fetch(`/assets/projetos/${post.foto}/README.md`);
                const text = await response.text();
                const htmlContent = marked(text); // Converte markdown para HTML usando 'marked'
                setReadmeContent(htmlContent); // Atualiza o estado com o conteúdo convertido
            } catch (error) {
                console.error("Erro ao carregar o README:", error);
            }
        };

        loadReadme(); // Carrega o arquivo README.md assim que o componente é montado
    }, [post, navigate]);

    if (!post) {
        return null; // Exibe null enquanto a navegação para 404 é realizada
    }

    return(
        <PostModelo        
        titulo={post.titulo}
        >   <h4>Repositorio GITHUB  ( {post.github} )</h4>            
          
           
             {/* Div centralizada com o conteúdo do README */}
             <div className="readmeContainer">
                <div dangerouslySetInnerHTML={{ __html: readmeContent }}></div>
            </div>
            
              
           
            
        </PostModelo>
    )
}
