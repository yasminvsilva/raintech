import iconIcon from "../assets/icon.svg"
import iconHamburguer from "../assets/hamburguer.svg"


import { HeaderContainer } from "./Home.styles"
export default function Header() {
    return (
    <HeaderContainer>
        <header>
            <a href="/" onCLick={(e) => handleNavegation(e,'/')}> <img src={iconIcon} alt="ícone do site" class="esquerda" /></a>
            <img src={iconHamburguer} alt="icone do hamburguer mobile" class="direita" />
        </header>
    </HeaderContainer>
    )
  }
  