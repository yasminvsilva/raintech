import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"
import videoTutorial from "../assets/RainTech.mp4"

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

          <div class="videozinho">
          <video src={videoTutorial} type="video/mp4" controls autoPlay height={200} width={300}></video>
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
