import styled from "styled-components"

export const HomeContainer = styled.div `
    
    main {
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover; /* Faz a imagem cobrir toda a tela */
        background-position: top; /* Centraliza a imagem */
        background-repeat: no-repeat; /* Evita repetição da imagem */
        height: 260vh; /* Define a altura do body como 100% da viewport */
        margin: 0;
        padding: 0;
    }

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

        .p_benef {
            margin-bottom: 0;
        }

        .t_benef {
            margin-top: 1.5rem;
            margin-bottom: 0.25rem;

        }

        .obj {
            margin-top: 1.5rem;
        }

        p {
            margin-bottom: 1rem;
            font-size: 1.25rem;
        }
    }

    a {
        color: ${props => props.theme.textColor};
    }

    .b1, .b2, .b3, .b4, .b5 {
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
        gap: 35px; 
        margin-bottom: 2.5rem;
        height: 5.5rem;
    }

    .container_redes {
        width: 100%;               /* Largura do container */
        max-width: 1000px;        /* Largura máxima do container */
        margin: 0 auto;           /* Centraliza o container na página */
        margin-top: 4rem;
        padding: 3.125rem;            /* Espaço interno para os elementos */
        background-image: url('../src/assets/fundoredes.png');
        background-color: ${props => props.theme.containerRedes};
        background-repeat: no-repeat;
        background-size: cover; 

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
        gap: 20px;
        margin-bottom: 1.5rem;                   /* Espaçamento entre as imagens (opcional) */
}

    }
`
export const HeaderContainer = styled.div `
header {
    position: relative;
    width: 100%;
    height: 60px; /* Ajuste a altura do cabeçalho conforme necessário */
}

header img {
    position: absolute;
    width: 30px; /* Ajuste o tamanho do ícone conforme necessário */
    height: auto; /* Mantém a proporção da imagem */
}

.esquerda {
    top: 50%;
    left: 15px; /* Ajuste a distância do ícone da borda esquerda */
    transform: translateY(-50%); /* Centraliza verticalmente */
}

.direita {
    top: 50%;
    right: 15px; /* Ajuste a distância do ícone da borda direita */
    transform: translateY(-50%); /* Centraliza verticalmente */
}
`
export const ManualContainer = styled.div `

main {
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover; /* Faz a imagem cobrir toda a tela */
        background-position: top; /* Centraliza a imagem */
        background-repeat: no-repeat; /* Evita repetição da imagem */
        height: 260vh; /* Define a altura do body como 100% da viewport */
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 3.75rem;
        color: ${props => props.theme.textColor};
        text-align: center;
        margin-top: 3.25rem;
    }

    .container_v {
            width: 30rem;
            margin: 0 auto;
        }

    iframe {
        width: 30rem;
        height: 20rem;
        border: none;
        margin-bottom: 1.5rem;
        }

    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme.subtextColor};
        text-align: center;
        margin-bottom: 5rem;
        opacity: 0.7
    }

    .container_redes {
        width: 100%;             /* Largura máxima do container */
        margin: 0 auto;           /* Centraliza o container na página */
        margin-top: 4rem;
        padding: 3.125rem;            /* Espaço interno para os elementos */
        background-image: url('../src/assets/fundoredes.png');
        background-color: ${props => props.theme.containerRedes};
        background-repeat: no-repeat;
        background-size: cover;

        img {
            width: 3rem;
            height: auto;
            margin-bottom: 1rem;
        }

        p {
            color: ${props => props.theme.textColor};
            text-align: center;
            margin-top: -1rem;
            font-size: 1.6rem;
        }

    .redes_img {
        display: flex;               /* Define como flexbox */
        justify-content: center;     /* Centraliza as imagens horizontalmente */
        gap: 20px;
        margin-bottom: 1.5rem;                   /* Espaçamento entre as imagens (opcional) */
}}

`
export const MateriaisContainer = styled.div `

main {
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover; /* Faz a imagem cobrir toda a tela */
        background-position: top; /* Centraliza a imagem */
        background-repeat: no-repeat; /* Evita repetição da imagem */
        height: 260vh; /* Define a altura do body como 100% da viewport */
        margin: 0;
        padding: 0;
    }

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

    .container_redes {
        width: 100%;             /* Largura máxima do container */
        margin: 0 auto;           /* Centraliza o container na página */
        margin-top: 4rem;
        margin-bottom: -15rem;
        padding: 3.125rem;            /* Espaço interno para os elementos */
        background-image: url('../src/assets/fundoredes.png');
        background-color: ${props => props.theme.containerRedes};
        background-repeat: no-repeat;
        background-size: cover; 

        img {
            width: 3rem;
            height: auto;
            margin-bottom: 1rem;
        }

        p {
            color: ${props => props.theme.textColor};
            text-align: center;
            margin-top: -1rem;
            font-size: 1.6rem;
        }

    .redes_img {
        display: flex;               /* Define como flexbox */
        justify-content: center;     /* Centraliza as imagens horizontalmente */
        gap: 20px;
        margin-bottom: 1.5rem;                   /* Espaçamento entre as imagens (opcional) */
}}

`
export const AgenteContainer = styled.div `

    main {

        width: 100%;
        height: 920px;
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;
    }

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
        margin-bottom: 2rem;
        opacity: 0.7
    }

   img {
        width: 3rem;
        margin-top: 0;
        display: block;
        margin: 0 auto;
        max-width: 100%;
        height: auto;
   }

    p {
        margin-top: 2rem;
        font-size: 1.25rem;
        margin-bottom: 1rem;
        margin-left: 2rem;
        margin-right: 2rem;
        justify-content: center;
        text-align: justify;
    }

    .container_redes {
        width: 100%;       
        margin: 0 auto;   
        margin-top: 4rem;
        margin-bottom: -1.6rem;
        padding: 3.125rem;           
        background-image: url('../src/assets/fundoredes.png');
        background-color: ${props => props.theme.containerRedes};
        background-repeat: no-repeat;
        background-size: cover;

        img {
            width: 3rem;
            height: auto;
            margin-bottom: 1rem;
        }

        p {
            color: ${props => props.theme.textColor};
            text-align: center;
            margin-top: -1rem;
            font-size: 1.6rem;
        }

    .redes_img {
        display: flex;               
        justify-content: center;     
        gap: 20px;
        margin-bottom: 1.5rem;  
        margin-right: 9.2rem;      
        margin-left: 9.2rem;         
}}
    
`
export const LinksContainer = styled.div `

    main {
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover; /* Faz a imagem cobrir toda a tela */
        background-position: top; /* Centraliza a imagem */
        background-repeat: no-repeat; /* Evita repetição da imagem */
        height: 130vh; /* Define a altura do body como 100% da viewport */
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 4rem;
        color: ${props => props.theme.textColor};
        text-align: center;
        margin-top: 3.25rem;
    }

    p {
        font-size: 1.25rem;
        color: ${props => props.theme.textColor};
        text-align: justify;
        margin-top: 3.25rem; 
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .container_redes {
        width: 100%;               /* Largura do container */
        max-width: 1000px;        /* Largura máxima do container */
        margin: 0 auto;           /* Centraliza o container na página */
        margin-top: 4rem;
        padding: 3.125rem;            /* Espaço interno para os elementos */
        background-image: url('../src/assets/fundoredes.png');
        background-color: ${props => props.theme.containerRedes};
        background-repeat: no-repeat;
        background-size: cover; 

        img {
            width: 3rem;
            height: auto;
            margin-bottom: 1rem;
        }

        p {
            color: ${props => props.theme.textColor};
            text-align: center;
            margin-top: -1rem;
            font-size: 1.6rem;
        }

    .redes_img {
        display: flex;               /* Define como flexbox */
        justify-content: center;     /* Centraliza as imagens horizontalmente */
        gap: 20px;
        margin-bottom: 1.5rem;                   /* Espaçamento entre as imagens (opcional) */
}}

    
`
export const FaleconoscoContainer = styled.div `

    main {
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover; /* Faz a imagem cobrir toda a tela */
        background-position: center; /* Centraliza a imagem */
        background-repeat: no-repeat; /* Evita repetição da imagem */
        height: 260vh; /* Define a altura do body como 100% da viewport */
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 4rem;
        color: ${props => props.theme.textColor};
        text-align: center;
        margin-top: 3.25rem;
    }

    .container_redes {
        width: 100%;             /* Largura máxima do container */
        margin: 0 auto;           /* Centraliza o container na página */
        margin-top: 4rem;
        margin-bottom: -2rem;
        padding: 3.125rem;            /* Espaço interno para os elementos */
        background-image: url('../src/assets/fundoredes.png');
        background-color: ${props => props.theme.containerRedes};
        background-repeat: no-repeat;
        background-size: cover; 

        img {
            width: 3rem;
            height: auto;
            margin-bottom: 1rem;
        }

        p {
            color: ${props => props.theme.textColor};
            text-align: center;
            margin-top: -1rem;
            font-size: 1.6rem;
        }

    .redes_img {
        display: flex;               /* Define como flexbox */
        justify-content: center;     /* Centraliza as imagens horizontalmente */
        gap: 20px;
        margin-bottom: 1.5rem;                   /* Espaçamento entre as imagens (opcional) */
    }
}

`