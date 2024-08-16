import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"

import { ManualContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

export function Manual() {
    return (
    <ManualContainer>
      <main>
        <Header></Header>
        <section>
          <div>
            <h1>Como Funciona?</h1>
            <h2>Confira agora nosso vídeo explicando o <br /> funcionamento do produto e como <br /> utilizá-lo</h2>
          </div>

          <div className="container_v">
          <iframe width="280" height="155" src="https://www.youtube.com/embed/LKsgDcckur0?si=t3jVV8LafF9TG3AH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    </ManualContainer>
   )
 }
