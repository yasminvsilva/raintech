import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"

import { AgenteContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

export function Agente() {
    return (
    <AgenteContainer>
      <main>
        <Header></Header>
        <section>
          <div>
            <h1>Sobre nós</h1>
            <h2>Conheça a equipe por trás do nosso produto RainTech o projeto que visa a <br /> filtragem da água da chuva de forma <br /> automatizada.</h2>
          </div>

          <div>
            <p>testee</p>
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
      
    </AgenteContainer>
   )
 }
