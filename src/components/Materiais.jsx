import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"

import iconMaterial1 from "../assets/rele.svg"
import iconMaterial2 from "../assets/ldr.svg"
import iconMaterial3 from "../assets/modbluetooth.svg"
import iconMaterial4 from "../assets/sensorchuva.svg"
import iconMaterial5 from "../assets/ultrassonico.svg"
import iconMaterial6 from "../assets/arduino.svg"
import iconMaterial7 from "../assets/bombagua.svg"
import iconMaterial8 from "../assets/jumpers.svg"
import iconMaterial9 from "../assets/led.svg"
import iconMaterial10 from "../assets/protoboard.svg"
import iconMaterial11 from "../assets/servomotor.svg"

import { MateriaisContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

export function Materiais() {
    return (
    <MateriaisContainer>
      <main>
        <Header></Header>
        <section>
          <div>
            <h1>Componentes</h1>
            <h2>Confira os componentes utilizados nesse produto e suas funções.</h2>
          </div>

          <div class="componentes">
            <div><img src={iconMaterial1} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>


            <div><img src={iconMaterial2} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>


            <div><img src={iconMaterial3} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>


            <div><img src={iconMaterial4} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>


            <div><img src={iconMaterial5} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>


            <div><img src={iconMaterial6} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>


            <div><img src={iconMaterial7} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>


            <div><img src={iconMaterial8} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>


            <div><img src={iconMaterial9} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>


            <div><img src={iconMaterial10} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>

            
            <div><img src={iconMaterial11} alt="" />
            <p>nome</p>
            <p>funciona assim e assim e assim</p>
            </div>
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
    </MateriaisContainer>
   )
 }
