import '../App.css'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon ,  Bars3Icon} from '@heroicons/react/20/solid'
import React from 'react'
import downl from '../assets/document-download.svg'
const Portada = React.forwardRef((props,ref) =>{  
  const {scrollToSection, proyectos, sobreMi, contacto} = props
  return (
  <div className='dashboard' ref={ref}> 
    <div className="Nombre">
    <Menu as="div" className="Menu-cont">
      <div>
        <MenuButton className="menu-but">
      
          < Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="menuItems"
      >        
          <MenuItem>
            <button
              onClick={() => scrollToSection(proyectos)}
              className="Item-menu"
            >
              Proyectos
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => scrollToSection(sobreMi)}
              className="Item-menu"
            >
              Sobre Mí
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => scrollToSection(contacto)}
              className="Item-menu"
            >
              Contacto
            </button>
          </MenuItem>          
        
      </MenuItems>
    </Menu>
    </div>
    
    <div className='links'>
    <button className='h1B' onClick={() => scrollToSection(proyectos)}>Proyectos
    </button>
    <button className='h1B' onClick={() => scrollToSection(sobreMi)}>Sobre Mi</button>
    <button className='h1B' onClick={() => scrollToSection(contacto)}>Contacto</button>    
    </div>
    <div className='icono'>
      <button className='buttonCv' >
        <a  className='contdir'  href='https://drive.google.com/file/d/1UKRQh2qnACqA73D-xLphjdx9pd-PEIZI/view?usp=sharing' target='-blank' >
      <img src={downl}></img>Descargar CV
      </a>
      </button>
      
    </div>          
  </div>    
  )
})
export default Portada