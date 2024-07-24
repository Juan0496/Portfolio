import '../App.css'
import foto from '../assets/8.jpg'
import linkedin from '../assets/link.svg'
import git from '../assets/git.svg'
import  instagram from '../assets/instagram.svg'
import robo from '../assets/robo-avatar.jpg'
function Info() {  
return (
<div className='info-pers'> 
    <div className='fotoCont'>   
              
        
            <div className='logo'>
            <h1>Juan Moreno Palomino</h1>
                <h1>DESARROLLADOR IOT</h1>
                <p>Web - Móvil - Sistemas embebidos</p>
                
                <div className='icocont'>
                <a href='#' className='link-linked'>
                <img src={linkedin } className='linkedin'></img>
                </a>
                <a  href='https://github.com/Juan0496' target='_blank' className='link-linked'>
                <img   src={git } className='linkedin'></img>
                </a>
                <a href='#' className='link-linked'>
                <img src={instagram} className='linkedin'></img>
                </a>
                
                </div>                         
        </div>             
    </div>   
    
    <div className='marco'>
        <img className='foto' src={robo}>
        </img>  
    </div>    
        
    
</div>
  )
}
export default Info



