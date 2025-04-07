import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"
import gotas from "../assets/gotas.svg"
import lilian from "../assets/lilian2.jpeg"
import duda from "../assets/duda2.jpeg"
import renata from "../assets/renata2.jpeg"



import { AgenteContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

export function Agente() {
    return (
    <AgenteContainer>
      <main class="imagemnova">
        <Header></Header>
        <section>
          <div>
            <h1>Sobre nós</h1>
            <h2>Conheça a equipe por trás do  RainTech o projeto que visa a filtragem da água da chuva <br /> de forma automatizada.</h2>
          </div>

          <div className="gota_img">
          <img src={gotas} alt="" />
          </div>

          <div class="textonos">
            <p>Bem-vindo à página de apresentação da nossa equipe! Somos um grupo de estudantes do Centro Universitário Adventista de São Paulo (UNASP)</p>
            <p>Estamos atualmente no 3º ano do Ensino Médio, cursando o programa Técnico em Informática Integrado ao Ensino Médio. Combinando nosso interesse pela tecnologia e nosso compromisso com a sustentabilidade, trabalhamos arduamente para desenvolver e implementar um sistema eficiente de captação de água da chuva. Acreditamos que, através da inovação e do trabalho em equipe, podemos contribuir para um futuro mais sustentável.</p>
            <p>Se você tiver interesse em saber mais sobre o nosso trabalho ou quiser colaborar de alguma forma, não hesite em nos contatar. Estamos ansiosos para compartilhar nossa jornada com você!</p>
            <p>Atenciosamente, <br /> Lilian de Jesus Correia, Maria Eduarda de Oliveira Siqueira Gobira e Renata Costa do Nascimento.</p>
          </div>

          <div className="descricao">
            <div className="nos">
              <img class="imagemnos" src={lilian} alt="" />
              <h5 clasName="nome">Lilian Correia</h5>
              <h6 clasName="textinho">licorreia@gmail.com</h6>
            </div>

            <div className="nos">
              <img class="imagemnos" src={duda} alt="" />
              <h5 clasName="nome">Maria Gobira</h5>
              <h6 clasName="textinho">megobira@gmail.com</h6>
            </div>

            <div className="nos">
              <img class="imagemnos" src={renata} alt="" />
              <h5 clasName="nome">Renata Costa</h5>
              <h6 clasName="textinho">recosta@gmail.com</h6>
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
      
    </AgenteContainer>
   )
 }
