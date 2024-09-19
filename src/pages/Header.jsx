import iconIcon from "../assets/icon.svg"
import iconHamburguer from "../assets/hamburguer.svg"

import { List, X } from "@phosphor-icons/react"


import { HeaderContainer, MenuMobile } from "./Home.styles"
import { useState } from "react"

export default function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)

    function handleAbrirFecharMenu() {
        if(abrirMenu === true){
            setAbrirmenu(false)
            return
        }

        setAbrirMenu(true)
    }


    return (
    <HeaderContainer>
        <header className="C">
            <div className="mobile">
            <a href="/" onCLick={(e) => handleNavegation(e,'/')}> <img src={iconIcon} alt="ícone do site" class="esquerda" /></a>
            </div>

            <nav className="desktop">
                <ul>
                    <li><a href="/Sobrenos" onCLick={(e) => handleNavegation(e,'/Sobrenos')}>Sobre nós</a></li>
                    <li><a href="/Tutorial" onCLick={(e) => handleNavegation(e,'/Tutorial')}>Funcionamento</a></li>
                    <li><a href="/Componentes" onCLick={(e) => handleNavegation(e,'/Componentes')}>Componentes</a></li>
                </ul>
            </nav>
            <div className="b_cont"><a href="/Contatenos" onCLick={(e) => handleNavegation(e, '/Contatenos')}>Contate-nos</a></div>





            <MenuMobile abrir={abrirMenu}>
            <div>
                <button onClick={handleAbrirFecharMenu}>
                    {abrirMenu === true ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
                </button>
            </div>

            <nav>
            <a href="/Sobrenos" onCLick={(e) => handleNavegation(e,'/Sobrenos')}>Sobre nós</a>
            <a href="/Tutorial" onCLick={(e) => handleNavegation(e,'/Tutorial')}>Funcionamento</a>
            <a href="/Componentes" onCLick={(e) => handleNavegation(e,'/Componentes')}>Componentes</a>
            <a href="/Contatenos" onCLick={(e) => handleNavegation(e, '/Contatenos')}>Contate-nos</a>
            </nav>
        </MenuMobile>

        </header>

        
    </HeaderContainer>
    )
  }
  