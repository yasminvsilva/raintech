import iconInstagram from "../assets/instagram.svg"
import iconGithub from "../assets/github.svg"
import iconTwitter from "../assets/twitter.svg"
import videoTutorial from "../assets/RainTech.mp4"

import { ManualContainer } from "../pages/Home.styles"
import  Header from "../pages/Header"

import React, { useRef } from "react"

export function Manual() {
  const videoRef = useRef();


  const handlePlay = () => {
    videoRef.current.play();
  };

    

    return (
    <ManualContainer>
      <main class="imagemnova">
        <Header></Header>
        <section>
          <div>
            <h1>Como Funciona?</h1>
            <h2>Confira agora nosso vídeo explicando o <br /> funcionamento do produto e como <br /> utilizá-lo</h2>
          </div>


          <div class="videozinho">
          <video src={videoTutorial} type="video/mp4" height={200} width={300} ref={videoRef} poster="https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-raindrops-on-a-car-window-during-night-time-or-rain-image_2915186.jpg" > </video>
          <div class="grid-btn">
          <button id="desaparecer" class="play" onClick={handlePlay}>▶ Assista ao vídeo</button>
          </div>
          </div>

          <iframe class="videoyoutube" width="412" height="240" src="https://www.youtube.com/embed/__xzG0KS2No?si=cjQx1sTrand4wZ8f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
          <iframe class="videoyoutube" width="412" height="240" src="https://www.youtube.com/embed/RfDW7Kpl_Es?si=LMbzmSFxQmodLEHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

      
    </ManualContainer>
   )
 }

 