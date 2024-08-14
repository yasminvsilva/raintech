import iconCloudy from "../assets/cloudy.svg"
import iconRain from "../assets/rain.svg"
import iconStorm from "../assets/storm.svg"
import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"



import Header from "./Header"
import { HomeContainer } from "./Home.styles"

export function Home() {
  return (
    <HomeContainer>
      <main>
      <Header> </Header>
    <section>
      <div>
        <h1>RainTech  </h1>
        <h2>Conheça nosso produto que visa a <br /> filtragem da água da chuva de forma <br /> automatizada</h2>
      </div>

      <div class="container">
        <div class="imagesContainer" >
          <img src={iconCloudy} alt="ícone de previsão nublada" />
          <img src={iconRain} alt="ícone de um previsão de chuva" />
          <img src={iconStorm} alt="ícone de previsão de tempestade" />
        </div>
        <p>Nosso produto é a solução para quem busca água limpa para utilizar em tarefas domiciliar. Nosso filtro de água de última geração utiliza tecnologia de ponta para remover impurezas e micro-organismos, garantindo água tratada.</p>
        <p><strong>Benefícios:</strong> </p>
        <p><strong>Economia e Sustentabilidade:</strong> Economiza e reduz o preço da sua conta. </p>
        <p><strong>Fácil Instalação:</strong> Design prático que se adapta em qualquer residência. </p>
        <p>O objetivo que almejamos alcançar com o nosso produto é que o mesmo atinja toda população Brasileira, principalmente para aqueles que não tem condições financeiras, tratamos exclusivamente da água pluvial nesse produto com o intuito de reutilizar uma água já disponível para todos. Nosso diferencial é a utilização da tecnologia, a automatização para auxiliar na administração do produto em conjunto com um aplicativo.</p>
      </div>

      <div>
        
        
        <a href="/Tutorial" onCLick={(e) => handleNavegation(e,'/Tutorial')}>Tutorial</a>
        <a href="/Componentes" onCLick={(e) => handleNavegation(e,'/Componentes')}>Componentes</a>
        <a href="/Sobrenos" onCLick={(e) => handleNavegation(e,'/Sobrenos')}>Sobre nós</a>
        <a href="/Referencias" onCLick={(e) => handleNavegation(e,'/Referencias')}>Referências</a>
        <a href="/Contatenos" onCLick={(e) => handleNavegation(e,'/Contatenos')}>Contate-nos</a>

      </div>

      <div class="container_redes">
        <div class="redes_img">
        <img src={iconInstagram} alt="" />
        <img src={iconGithub} alt="f" />
        <img src={iconTwitter} alt="f" />
        </div>
        <p> Nos acompanhe nas <br/> redes sociais!</p>
      </div>
    </section>
  </main>
    </HomeContainer>
  )
}
