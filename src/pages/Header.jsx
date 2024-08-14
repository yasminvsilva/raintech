import iconIcon from "../assets/icon.svg"
import iconHamburguer from "../assets/hamburguer.svg"
import { HeaderContainer } from "./Home.styles"


export default function Header() {
    return (
    <HeaderContainer>
        <header>
            <img src={iconIcon} alt="ícone do site" />
            <img src={iconHamburguer} alt="icone do hamburguer mobile" />
        </header>
    </HeaderContainer>
    )
  }
  