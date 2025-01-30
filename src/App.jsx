import Conhecimentos from "./containers/conhecimentos/index.jsx"
import Footer from "./containers/footer/index.jsx"
import Header from "./containers/header/index.jsx"
import Home from "./containers/home/index.jsx"
import Projetos from "./containers/projetos/index.jsx"
import Sobre from "./containers/sobre/index.jsx"
import { GlobalStyle } from "./style"

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Sobre />
      <Conhecimentos />
      <Projetos />
      <Footer />
    </>
  )
}

export default App
