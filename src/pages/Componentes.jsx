import { Materiais } from "../components/Materiais"
import { ComponentsContainer } from "./Home.styles"


export function Componentes() {
  return (
    <Materiais>
      <ComponentsContainer>
        <main>
          <header></header>
          <section>
            <div>
              <h1>Componentes</h1>
              <h2>Confira os componentes utilizados nesse <br /> produto e suas funções.</h2>
            </div>
          </section>
        </main>
      </ComponentsContainer>
    </Materiais>
  )
}