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
import iconMaterial12 from "../assets/bateria.svg"

import { MateriaisContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

export function Materiais() {
    return (
    <MateriaisContainer>
      <main class="imgnova">
        <Header></Header>
        <section>
          <div>
            <h1>Componentes</h1>
            <h2>Confira os componentes utilizados nesse produto e suas funções.</h2>
          </div>

        <div class="todosOsComponentes">
          <div class="c1">
            <div class="componentes"><img src={iconMaterial1} alt="" />
            <h2>Módulo Relé 1 Canal 5V</h2>
            <p> O Módulo Relé permite que componentes que não usam o arduino para serem ligados o utilizem.</p>
            </div>


            <div class="componentes"><img src={iconMaterial2} alt="" />
            <h2>Sensor de Luminosidade LDR</h2>
            <p> O sensor de luz  mede a intensidade da luz ambiente.</p>
            </div>


            <div class="componentes"><img src={iconMaterial3} alt="" />
            <h2>Modulo Bluetooth HC05</h2>
            <p>O Módulo Bluetooth envia informações dos componentes para algum dispositivo móvel.</p>
            </div>


            <div class="componentesClaros"><img src={iconMaterial4} alt="" />
            <h2>Sensor de Chuva</h2>
            <p>fO Sensor de Chuva detecta a presença da chuva quando ela toca a superfície do sensor.</p>
            </div>


            <div class="componentesClaros"><img src={iconMaterial5} alt="" />
            <h2>Sensor Ultrassônico HC-SR04</h2>
            <p>fO Sensor Ultrassônico detecta se algo ou algum volume está ficando perto dele.</p>
            </div>


            <div class="componentesClaros"><img src={iconMaterial6} alt="" />
            <h2>Arduino</h2>
            <p>O Arduino nada mais é que um pequeno processador. Ele conecta componentes físicos de forma digital.</p>
            </div>


            <div class="componentesClaros"><img src={iconMaterial7} alt="" />
            <h2>Mini Bomba de Água Submersível 3V</h2>
            <p>A Mini Bomba bombeia a água utilizando apenas um cano para a água ser transferida à outro local.</p>
            </div>


            <div class="componentesClaros"><img src={iconMaterial8} alt="" />
            <h2>Jumpers</h2>
            <p>Os Jumpers nada mais são do que fios que permitem a ligação dos componentes na placa do Arduino.</p>
            </div>


            <div class="componentesClaros"><img src={iconMaterial9} alt="" />
            <h2>Módulo WS2812 LED RGB Endereçável 24 Bits</h2>
            <p>O LED RGB Endereçável permite que controlemos as cores da forma que quisermos.</p>
            </div>


            <div class="componentesClaros"><img src={iconMaterial10} alt="" />
            <h2>Protoboard 830 Pontos</h2>
            <p>A Protoboard é usada para construir e testar circuitos eletrônicos temporários sem a necessidade de solda.</p>
            </div>


            <div class="componentesClaros"><img src={iconMaterial11} alt="" />
            <h2>Micro Servo 9g SG90</h2>
            <p>O Micro Servo é utilizado para movimentar um objeto, permitindo-o girar em ângulos ou distâncias específicas</p>
            </div>


            <div class="componentesClaros"><img src={iconMaterial12} alt="" />
            <h2>Bateria Recarregável</h2>
            <p>A Bateria Recarregável deixará os equipamentos que necessitam dela, ligados.</p>
            </div>
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
    </MateriaisContainer>
   )
 }
