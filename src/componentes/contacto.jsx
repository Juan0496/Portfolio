import '../App.css'
import React from 'react';
import gmail from '../assets/google-gmail.svg'
import outlook from '../assets/ms-outlook.svg'
import whatsapp from '../assets/whatsapp.svg'
const Contacto = React.forwardRef((props,ref) =>
(
    <div className='contacto' ref={ref}>
      <div className='Contactitle'>
          
          <p className='titulo2'> Trabajemos juntos</p>      
          <p> Si desea emplear mis servicios en su empresa o  <br/>
              realizar algún proyecto en la áreas de domótica, vision por <br/>
              computadora, programacion de microcontroladores, desarrollo móvil o <br/>
              servicios web; no dude en contactarme.</p>
            
      </div>
      <div className='boxcont'>       
          <a className='contdir' href='https://wa.me/912633222' target='-blank'>
          <h2>912633222</h2>          
          <img src={whatsapp} className='iconCont'></img>
          </a>       
        <a className='contdir' href={`mailto:miguel.9604.m@gmail.com`} target='-blank'>
          <h2>miguel.9604.m@gmail.com</h2>
          <img src={gmail} className='iconCont'></img>
        </a >
        <a className='contdir' href={`mailto:juan_96_4@hotmail.com`} target='-blank'>
          <h2>juan_96_4@hotmail.com</h2>
          <img src={outlook} className='iconCont'></img>
        </a >
      </div>
    </div>

    
  ))

export default Contacto