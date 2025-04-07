import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"

import { LinksContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

export function Links() {
    return (
    <LinksContainer>
      <main class="imagemnova">
        <Header></Header>
        <section>
          <div>
            <h1>Referências</h1>
            <h2></h2>
          </div>

          <div class="referencias-links">
            <p>MEDRI, Rívea; MINILLO, Alessandro; GERTRUDES, Eliana; FERREIRA, Heloiza; TANGERINO, Edson. Uso de filtros de carvão ativado granular associado a microrganismos para remoção de fármacos no tratamento de água de abastecimento. Scielo Brasil, 2016. Acesso em: 13 de mar. de 2024.</p>
            <div className="b_ref"><a href="https://www.scielo.br/j/esa/a/qShs6gCcN46bLKrnCB9Ljkr/?lang=pt#">Disponível em:</a></div>
          
            <p>ESPACIOS. Sistema inteligente de automação residencial para aproveitamento da água da chuva economiza 60 mil litros/ano. Publicado em: 08 de julho de 2017.</p>
            <div className="b_ref"><a href="https://www.ihu.unisinos.br/categorias/186-noticias-2017/569460-sistema-inteligente-de-automacao-residencial-para-aproveitar-a-agua-da-chuva-economiza-60-mil-litros-ano" target="_blank" rel="noopener noreferrer">Disponível em:</a></div>

            <p>WESTPHALEN, Ana Paula; CORÇÃO, Gertrudes; BENETTI, Antônio. Utilização de carvão ativado biológico para o tratamento de água para consumo humano.  Scielo Brasil, 2016. Acesso em: 13 de mar. de 2024.</p>
            <div className="b_ref"><a href="https://www.scielo.br/j/esa/a/3n8TGzfRxRTMcnqfhmgYV6C/#">Disponível em:</a></div>
            
            <p>ZANELLA, Luciano. Manual para captação Emergencial e uso Doméstico de Água de chuva. 2015. Acesso em: 20 de abr. de 2024.</p>
            <div className="b_ref"><a href="https://www.sintpq.org.br/images/PDFs/Noticias/1200-Manual_para_captacao_emergencial_e_uso_domestico_de_AGUA_DA_CHUVA.pdf.">Disponível em:</a></div>

            <p>COMO fazer tratamento correto da água para cada situação do jeito certo, Permution, 2019. Acesso em: 20 de abr. de 2024.</p>
            <div className="b_ref"><a href="https://www.permution.com.br/pt-br/blog/como-fazer-tratamento-correto-da-agua-para-cada-situacao-do-jeito-certo">Disponível em:</a></div>
            
            <p>FEBRACE. Projeto de lei sobre automação residencial. Publicado em: 10 de setembro de 2020.</p>
            <div className="b_ref"><a href="https://www25.senado.leg.br/web/atividade/materias/-/materia/121525" target="_blank" rel="noopener noreferrer">Disponível em:</a></div>

            <p>UFERSA. Água da chuva para abastecimento na Amazônia. Publicado em: 03 de maio de 2017.</p>
            <div className="b_ref"><a href="https://revistas.unama.br/Movendo-Ideias/article/view/628" target="_blank" rel="noopener noreferrer">Disponível em:</a></div>
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
      
    </LinksContainer>
   )
 }

  