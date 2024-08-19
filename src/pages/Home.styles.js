import styled from "styled-components"


export const HomeContainer = styled.div `
    

    main {
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover; 
        background-position: top;
        background-repeat: no-repeat; 
        height: fit-content; 
        margin: 0;
        padding: 0;
        max-height: 150rem;

        
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
        width: 80%;               
        max-width: 1200px;        
        margin: 0 auto;           
        margin-bottom: 5rem;
        padding: 35px;            
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


    @media (min-width: 800px) {
        main {
            height: 250vh;
        }

        h1 {
            font-size: 7rem;
        }

        h2 {
            font-size: 3rem;
        }

        .container {
            display: contents;  
        }

        .container img {
            display: contents;  
        }

        .container p {
            font-size: 2rem;
            margin: 5rem;
        }
        
        .b1, .b2, .b3, .b4, .b5 {
            background-color: ${props => props.theme.buttonColor};
            color: ${props => props.theme.textColor};
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80rem;
            height: 9rem;
            padding: 2rem 1rem; 
            font-size: 5rem; 
            border-radius: 1rem;
            margin-bottom: 2rem;
            margin-inline: auto;

        }
        
        .imagesContainer {
            display: flex;               
            justify-content: center;     
            gap: 35px; 
            margin-bottom: 2.5rem;
            height: 5.5rem;
        }

        .container_redes {
            width: 100%;              
            max-width: 10000px;       
            margin: 0 auto;           
            margin-top: 4rem;
            padding: 3.125rem;          
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
            display: flex;               
            justify-content: center;     
            gap: 20px;
            margin-bottom: 1.5rem;                   
        }
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

.b_cont {
    display: none;
}

.desktop {
  display: none;
}

@media (min-width: 800px) {
    header {
        position: relative;
        width: 100%;
        height: 90px; 
    }

    header img {
        position: absolute;
        width: 5rem; 
        height: auto;
    }

    .b_cont {
        background-color: ${props => props.theme.buttonColor};
        color: ${props => props.theme.textColor};
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative; 
        top: -3rem; 
        width: 10rem;
        height: 3rem;
        margin-left: auto;
        margin-right: 20px;
        font-size: 1.5rem; 
        border-radius: 1rem;
    }

    .direita {
        display: none;
    }
  
    .desktop {
      display: flex;
      margin-left: 10rem;
    }

    .desktop ul {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin-top: 30rem;
        margin: 0;
        padding: 0;
    }

    .desktop ul li {
        margin-top: 3rem; 
    }

    .desktop li a {
        color: ${props => props.theme.textColor};
        text-decoration: none;
        font-size: 2rem; 
    }
}
`
export const ManualContainer = styled.div `

main {
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover; 
        background-position: top; 
        background-repeat: no-repeat; 
        height: 100vh; 
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 3.75rem;
        color: ${props => props.theme.textColor};
        text-align: center;
        margin-top: 3.25rem;
    }

    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme.subtextColor};
        text-align: center;
        margin-bottom: 0.85rem;
        opacity: 0.7
    }

    .videozinho {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        position: relative;
        
    }

    video {
     max-width: 100%;
     height: auto;
     position: relative;
     max-height: 300rem;
    }

    .grid-btn {
        margin-top: 12rem;
        position: absolute;
        align-items: center;
        align-content: center;
        height: 3rem;
        width: 12rem;
        font-size: 1rem;
    } 

    .container_redes {
        width: 100%;             
        margin: 0 auto;           
        margin-top: 4rem;
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
        }   
}


@media (min-width: 800px) {
    main {
        height: 130vh;
    }

    h1 {
        font-size: 7rem;
    }

    h2 {
        font-size: 3rem;
    }

    .videozinho {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        position: relative;
        
    }

    video {
        width: 40rem;
        height: 25rem;
    }

    .grid-btn {
        margin-top: 15rem;
        position: absolute;
        align-items: center;
        align-content: center;
        height: 3rem;
        width: 12rem;
        font-size: 1rem;
    } 

}

    

`
export const MateriaisContainer = styled.div `

@media (min-width: 800px) {
    .c1 {
        display: grid;
        grid-template-columns: repeat(4, 1fr); 
        grid-template-rows: repeat(4); 
        gap: 10px; 
        padding: 40px; 
        box-sizing: border-box;
        margin-inline: auto;
        justify-content: center;
        }

       
    }

    @media (min-width: 500px) {
    .c1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: repeat(4); 
    gap: 10px; 
    padding: 40px; 
    box-sizing: border-box;
    margin-inline: auto;
    justify-content: center;
    }


}

main {
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover; 
        background-position: top; 
        background-repeat: no-repeat; 
        height: fit-content; 
        max-height: fit-content;
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


    .componentes{
        margin: 0 auto;
        width: 20rem;     
        margin-top: 4rem;
        margin-bottom: 4rem;
        padding: 3.125rem;
        background-color: ${props => props.theme.containerComponentes};
        border-radius: 1.5rem;
       


        img {
            width: 14rem;
            height: 14rem;
            justify-items: center;
            margin-inline:auto;
            justify-content: center;
        }

        p {
            color: ${props => props.theme.subtextColor};
            font-size: 1rem;
            text-align: justify;
        }

        h2 {
            margin-bottom: -0.0001rem;
            font-size: 1.1rem;
            font-weight: bold;
            color: ${props => props.theme.textColor};
        }
    }

    .componentesClaros{

        margin: 0 auto;
        width: 20rem;     
        margin-top: 4rem;
        margin-bottom: 4rem;
        padding: 3.125rem;
        background-color: ${props => props.theme.containerComponentes};
        border-radius: 1.5rem;


        img {
            width: 14rem;
            height: 14rem;
            justify-items: center;
        }

        p {
            color: ${props => props.theme.subtextColor};
            font-size: 1rem;
            text-align: justify;
        }

        h2 {
            margin-bottom: -0.0001rem;
            font-size: 1.1rem;
            font-weight: bold;
            color: ${props => props.theme.textColor};
        }
        }  

    .container_redes {
        width: 100%;       
        margin: 0 auto;      
        margin-top: 4rem;
        margin-bottom: -15rem;
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
}}

`
export const AgenteContainer = styled.div `

      
      @media (min-width: 800px) {
            height:88rem ;
        }


        @media (min-width: 300px) {
            height:118rem ;
        }

        @media (min-width: 500px) {            
            height:100rem ;
        }


    main {

        width: 100%;
        height: 100%;
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;
    }

h5{
    text-align: center;
}

    h1 {
        font-size: 4rem;
        color: ${props => props.theme.textColor};
        text-align: center;
        margin-top: 3.25rem;
        max-height:10rem;
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

    .descricao {
        display: flex;               
        justify-content: center;     
        gap: 2rem; 
        height: 1rem;
        margin-bottom: 28rem;
    }


    .nos img {
        width: 10rem;
        height: auto;
        border-radius: 1rem;
        margin-top: 5rem;
    }

    .nome_l {
        color: ${props => props.theme.textColor};
        font-size: 1.5rem;
        margin-left: 1.3rem;
        margin-top: 0.5rem
    }
   
    .nos p {
        margin-top: 0;
        font-size: 1rem;
        color: ${props => props.theme.subtextColor};
        margin-bottom: 5rem;
    }

    

    .container_redes {
        width: 100%;             /* Largura máxima do container */
        margin: 0 auto;           /* Centraliza o container na página */
        margin-top: 4rem;
        margin-bottom: 15rem;
        padding: 4.825rem;            /* Espaço interno para os elementos */
        background-image: url('../src/assets/fundoredes.png');
        background-color: ${props => props.theme.containerRedes};
        background-repeat: no-repeat;
        background-size: cover;
    

        img {
            width: 3rem;
            height: auto;
            margin-bottom: 1rem;
            gap: -4rem;
        }

        p {
            color: ${props => props.theme.textColor};
            text-align: center;
            margin-top: -1rem;
            font-size: 1.6rem;
        }
    }    

    .redes_img {
        display: flex;               
        justify-content: center;     
        gap: 2px;
        margin-bottom: 1.5rem;  
        margin-right: 9.2rem;      
        margin-left: 9.2rem; 
    }

`
export const LinksContainer = styled.div `

    main {
        background-image: url('../src/assets/fundomobilepng.png');
        background-size: cover; /* Faz a imagem cobrir toda a tela */
        background-position: top; /* Centraliza a imagem */
        background-repeat: no-repeat; /* Evita repetição da imagem */
        height: 230vh; /* Define a altura do body como 100% da viewport */
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

    .b_ref {
        background-color: ${props => props.theme.buttonColor};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10rem;
        height: 4rem;
        border-radius: 1rem;
        margin: 2rem;
        margin-top: 0.25rem;
        }

    a {
        
        font-size: 1.3rem;
        color: ${props => props.theme.textColor};
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
