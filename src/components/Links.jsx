import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"

import { LinksContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

export function Links() {
    return (
    <LinksContainer>
      <main>
        <Header></Header>
        <section>
          <div>
            <h1>Referências</h1>
            <h2></h2>
          </div>

          <div>
            <p>MEDRI, Rívea; MINILLO, Alessandro; GERTRUDES, Eliana; FERREIRA, Heloiza; TANGERINO, Edson.pt#. Acesso em: 13 de mar. de 2024.</p>
            <p>MEDRI, Rívea; MINILLO, Alessandro; GERTRUDES, Eliana; FERREIRA, Heloiza; TANGERINO, Edson.pt#. Acesso em: 13 de mar. de 2024.</p>
            <p>MEDRI, Rívea; MINILLO, Alessandro; GERTRUDES, Eliana; FERREIRA, Heloiza; TANGERINO, Edson.pt#. Acesso em: 13 de mar. de 2024.</p>
            <p>MEDRI, Rívea; MINILLO, Alessandro; GERTRUDES, Eliana; FERREIRA, Heloiza; TANGERINO, Edson.pt#. Acesso em: 13 de mar. de 2024.</p>
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
      
    </LinksContainer>
   )
 }

  