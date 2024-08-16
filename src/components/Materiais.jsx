import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"

import { MateriaisContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

export function Materiais() {
    return (
    <MateriaisContainer>
      <main>
        <Header></Header>
        <section>
          <div>
            <h1>Componentes</h1>
            <h2>Confira os componentes utilizados nesse produto e suas funções.</h2>
          </div>

          <div>
            <p>teste</p>
          </div>

          <div className="container_redes">
            <div className="redes_img">
              <img src={iconInstagram} alt="ícone do Instagram" />
              <img src={iconGithub} alt="ícone do Github" />
              <img src={iconTwitter} alt="ícone do Twitter" />
            </div>
            <p> Nos acompanhe nas <br /> redes sociais!</p>
          </div>
        </section>

      </main>
    </MateriaisContainer>
   )
 }
