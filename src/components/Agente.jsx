import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"
import gotas from "../assets/gotas.svg"

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
            <h2>Conheça a equipe por trás do  RainTech o projeto que visa a filtragem da água da chuva <br /> de forma automatizada.</h2>
          </div>

          <div className="gota_img">
          <img src={gotas} alt="" />
          </div>

          <div>
            <p>Bem-vindo à página de apresentação da nossa equipe! Somos um grupo de estudantes do Centro Universitário Adventista de São Paulo (UNASP)</p>
            <p>Estamos atualmente no 3º ano do Ensino Médio, cursando o programa Técnico em Informática Integrado ao Ensino Médio. Combinando nosso interesse pela tecnologia e nosso compromisso com a sustentabilidade, trabalhamos arduamente para desenvolver e implementar um sistema eficiente de captação de água da chuva. Acreditamos que, através da inovação e do trabalho em equipe, podemos contribuir para um futuro mais sustentável.</p>
            <p>Se você tiver interesse em saber mais sobre o nosso trabalho ou quiser colaborar de alguma forma, não hesite em nos contatar. Estamos ansiosos para compartilhar nossa jornada com você!</p>
            <p>Atenciosamente, <br /> Lilian de Jesus Correia, Maria Eduarda de Oliveira Siqueira Gobira e Renata Costa do Nascimento.</p>
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
