import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"
import iconeEmail from "../assets/email.png"

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

          <div className="container_cont">
            <div>
            <img className="emailduda" src={iconeEmail} alt="ícone de email" />
            <p>Para falar conosco, envie um e-mail para:</p>
            <p><strong>raintech32@gmail.com</strong></p>
            </div>
          </div>          
         
          <div className="container_redes">
            <div className="redes_img">
              <a href="https://www.instagram.com/_raintech/">
              <img src={iconInstagram} alt="ícone do Instagram" /></a>
              <a href="https://github.com/lilianjc837"><img src={iconGithub} alt="ícone do Github" /></a>
              <a href="https://x.com/EcosyncEdutec?t=OQWviriYPTYZ_rkCLRXEfw&s=09"><img src={iconTwitter} alt="ícone do Twitter" /></a>
            </div>
            <p> Nos acompanhe nas <br /> redes sociais!</p>
          </div>
        </section>
      </main>
    </FaleconoscoContainer>
   )
 }

 