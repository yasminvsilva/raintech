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

          <div className="container">
            <div className="nuvenzinhasimg" >
              <img src={iconCloudy} alt="ícone de previsão nublada" />
              <img src={iconRain} alt="ícone de um previsão de chuva" />
              <img src={iconStorm} alt="ícone de previsão de tempestade" />
            </div>
            <div class="arrumarborda">
              <p>Nosso produto é a solução para quem busca água limpa para utilizar em tarefas domiciliar. Nosso filtro de água de última geração utiliza tecnologia de ponta para remover impurezas e micro-organismos, garantindo água tratada.</p>
              <p className="t_benef"><strong>Benefícios da RainTech:</strong> </p>
              <p className="p_benef"><strong>Economia e Sustentabilidade:</strong> Economiza e reduz o preço da sua conta. </p>
              <p className="p_benef"><strong>Fácil Instalação:</strong> Design prático que se adapta em qualquer residência. </p>
              <p className="obj">O objetivo que almejamos alcançar com o nosso produto é que o mesmo atinja toda população Brasileira, principalmente para aqueles que não tem condições financeiras, tratamos exclusivamente da água pluvial nesse produto com o intuito de reutilizar uma água já disponível para todos. Nosso diferencial é a utilização da tecnologia, a automatização para auxiliar na administração do produto em conjunto com um aplicativo.</p>
            </div>
          </div>


          <div className="b1"><a href="/Tutorial" onCLick={(e) => handleNavegation(e, '/Tutorial')}>Tutorial</a></div>
          <div className="b2"><a href="/Componentes" onCLick={(e) => handleNavegation(e, '/Componentes')}>Componentes</a></div>
          <div className="b3"><a href="/Sobrenos" onCLick={(e) => handleNavegation(e, '/Sobrenos')}>Sobre nós</a></div>
          <div className="b4"><a href="/Referencias" onCLick={(e) => handleNavegation(e, '/Referencias')}>Referências</a></div>
          <div className="b5"><a href="/Contatenos" onCLick={(e) => handleNavegation(e, '/Contatenos')}>Contate-nos</a></div>


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
    </HomeContainer>
  )
}



