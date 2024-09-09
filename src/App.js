import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMin';
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";


function App() {
  return (
    <BrowserRouter>  {/* criação de rotas com react router */} 
    <Menu/>
    <Routes>
      <Route path="/" element={<PaginaPadrao/>}> {/* criação um template de topo  colocando apenas o conteudo dentro da mesma */} 
      <Route path="/" element={<Inicio/>} />
      <Route path="/sobremim" element={<SobreMim/>} />
      <Route path="posts/:id" element={<Post/>} />     

      </Route>
      <Route path="/pagina-nao-encontrada" element={<NaoEncontrada/>} />
    
    <Route path="*" element={<NaoEncontrada/>} />
    </Routes>
    <Rodape/>
    </BrowserRouter>
  );
}

export default App;
