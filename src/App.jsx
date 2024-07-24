
import Portada from './componentes/portada'
import Info from './componentes/info-pers'
import Proyectos from './componentes/proyectos'
import Proyecto from './componentes/proy1'
import Skills from './componentes/skills'
import Contacto from './componentes/contacto'
import Footer from './componentes/footer'
import React, { useRef } from 'react'
import up from './assets/up.svg'
import './App.css'
import foto from './assets/8.jpg'

function App() {
  const proyectos = useRef(null);
  const sobreMi = useRef(null);
  const contacto= useRef(null);
  const portada= useRef(null);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  //IMPORTAR VIDEO
  const video=""
  const sobremi = "Soy técnico en Mecatrónica Industrial y ex estudiante de ingeniería de sistemas, con un perfil orientado a las tecnologias IOT, \
                    apasionado por el desarrollo de aplicaciones web y móviles que ayuden a mejorar y \
                    facilitar la vida de las personas; a pesar de que, mi formación profesional \
                    esta relacionada con la electrónica y los pocesos industriales; \
                    mi gusto por la programación me llevo a explorar el mundo del desarrollo \
                    de manera autodidacta; logrando integrar ambas especialidades."
                    
  

  return (
    
    <div className='general'>      
      <div className='portada'>
        <Portada ref={portada} scrollToSection={scrollToSection} proyectos={proyectos} sobreMi={sobreMi} contacto={contacto} ></Portada>
        <Info ></Info>
      </div>
      <div >
        <button onClick={() => scrollToSection(portada)} className='up'>
        <img src={up} className='but-img'></img>
        </button>
      </div>
      <div className='proyectosCont'>
      <Proyectos titulo1="Portfolio" titulo2="Proyectos" texto ="" ref={proyectos}></Proyectos>   
      <Proyecto video={video} titulo="Aplicción web de detección de rostros con IA" ord="izq"></Proyecto>      
      </div>    
      <div className='about-me'> 
      <Proyectos titulo1="Portfolio" titulo2="Sobre mí" texto ={sobremi} ref={sobreMi}></Proyectos>  
      <img src={foto} className='foto'></img>
      </div>
      <div className='skills'>        
      <Skills></Skills>
      </div>       
      <Contacto ref={contacto} ></Contacto>     
      <div className='footer'>
        <Footer></Footer>
      </div>
    </div>
   
    
  )
}

export default App
