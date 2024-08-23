import iconIcon from "../assets/icon.svg"
import iconHamburguer from "../assets/hamburguer.svg"


import { HeaderContainer } from "./Home.styles"
export default function Header() {
    return (
    <HeaderContainer>
        <header className="C">
            <div className="mobile">
            <a href="/" onCLick={(e) => handleNavegation(e,'/')}> <img src={iconIcon} alt="ícone do site" class="esquerda" /></a>
            <img src={iconHamburguer} alt="icone do hamburguer mobile" class="direita" />
            </div>

            <nav className="desktop">
                <ul>
                    <li><a href="/Sobrenos" onCLick={(e) => handleNavegation(e,'/Sobrenos')}>Sobre nós</a></li>
                    <li><a href="/Tutorial" onCLick={(e) => handleNavegation(e,'/Tutorial')}>Funcionamento</a></li>
                    <li><a href="/Componentes" onCLick={(e) => handleNavegation(e,'/Componentes')}>Componentes</a></li>
                </ul>
            </nav>
            <div className="b_cont"><a href="/Contatenos" onCLick={(e) => handleNavegation(e, '/Contatenos')}>Contate-nos</a></div>
        </header>


    
    </HeaderContainer>
    )
  }
  