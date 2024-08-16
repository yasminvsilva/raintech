import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"

import { FaleconoscoContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

export function Faleconosco() {
    return (
    <FaleconoscoContainer>
      <main>
        <Header></Header>
        <section>
          <div>
            <h1>Contate-nos</h1>
          </div>

          <div>
            <a href="">Enviar</a>
            <p>teste</p>
          </div>

          <div className="container_redes">
            <div className="redes_img">
              <img src={iconInstagram} alt="" />
              <img src={iconGithub} alt="f" />
              <img src={iconTwitter} alt="f" />
            </div>
            <p> Nos acompanhe nas <br /> redes sociais!</p>
          </div>
        </section>
      </main>
    </FaleconoscoContainer>
   )
 }
