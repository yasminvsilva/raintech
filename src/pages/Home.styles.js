import styled from "styled-components"

export const HomeContainer = styled.div `
    h1 {
        font-size: 4rem;
        color: ${props => props.theme.textColor};
        text-align: center;
        margin-top: 3.25rem;
    }

    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme.subtextColor};
        text-align: center;
        margin-bottom: 5rem;
        opacity: 0.7
    }

    .container {
        width: 80%;               /* Largura do container */
        max-width: 1200px;        /* Largura máxima do container */
        margin: 0 auto;           /* Centraliza o container na página */
        margin-bottom: 5rem;
        padding: 35px;            /* Espaço interno para os elementos */
        background-color: ${props => props.theme.containerColor}; 
        color: ${props => props.theme.textColor};
        box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.3);

        p {
            margin-bottom: 1rem;
            font-size: 1.25rem;
        }
    }

    a {
        background-color: ${props => props.theme.buttonColor};
        color: ${props => props.theme.textColor};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 60px;
        border-radius: 1rem;
        font-size: 2rem;
        margin: 0 auto;          
        margin-bottom: 0.95rem;
    }

    .imagesContainer {
        display: flex;               /* Define como flexbox */
        justify-content: center;     /* Centraliza as imagens horizontalmente */
        gap: 30px; 
        margin-bottom: 2rem;
    }

    .container_redes {
        width: 100%;               /* Largura do container */
        max-width: 1000px;        /* Largura máxima do container */
        margin: 0 auto;           /* Centraliza o container na página */
        margin-top: 4rem;
        padding: 3.125rem;            /* Espaço interno para os elementos */
        background-color: ${props => props.theme.containerRedes
        }; 

        img {
            width: 3rem;
            height: auto;
        }

        p {
            color: ${props => props.theme.textColor};
            text-align: center;
        }

    .redes_img {
        display: flex;               /* Define como flexbox */
        justify-content: center;     /* Centraliza as imagens horizontalmente */
        gap: 20px;                   /* Espaçamento entre as imagens (opcional) */
}

    }
`

export const HeaderContainer = styled.div `
    header {}
`