import Cenario from '../../components/Cenario/Cenario'
import Inicio from '../../components/Inicio/Inicio'
import Nav from '../../components/Nav/Nav'
import Personagens from '../../components/Personagens/Personagens'
import './Home.css'

function Home() {
  return (
    <>
      <div className="home">
        <Nav />
        <Inicio />
        <Personagens />
        <Cenario />
      </div>
    </>
  )
}

export default Home
