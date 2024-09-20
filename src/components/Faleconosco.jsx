import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"

import { FaleconoscoContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

export function Faleconosco() {
    return (
    <FaleconoscoContainer>
      <main class="imagemnova">
        <Header></Header>
        <section>
          <div>
            <h1>Contate-nos</h1>
            <h2>Em caso de dúvidas, sugestões e outros mande uma mensagem abaixo!</h2>
          </div>

          <div class="deixar-maior">
          <form action="/enviar-feedback" method="POSt" className="botoes">
            
            <input class="nomenome" type="text" id="name" name="name" placeholder="Seu nome" required></input> 

            
            <input class="emailemail"type="email" id="email" name="email" placeholder="Seu e-mail" required></input>

            
            <textarea class="mensagem" id="message" name="message" placeholder="Sua mensagem" rows="4" required></textarea>

            
          </form>
          <button class="botaoenviar" type="submit">Enviar</button>
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

 