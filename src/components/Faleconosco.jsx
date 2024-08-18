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

          <form action="/enviar-feedback" method="POSt">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Seu nome" required></input> 

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Seu e-mail" required></input>

            <label for="message">Mensagem:</label>
            <textarea id="message" name="message" placeholder="Sua mensagem" rows="4" required></textarea>

            <button type="submit">Enviar</button>
          </form>

         
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
